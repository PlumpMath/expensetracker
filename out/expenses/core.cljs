(ns expenses.core
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            ;local
            [expenses.components.content :as content]
            [expenses.components.menu :as menu] 
            [expenses.components.add :as add]
            [expenses.components.list :as listc]
            [expenses.db :as db]
            ; debug
            ;[figwheel.client :as fw :include-macros true]
            ))


(enable-console-print!)

;; touch events 
;; -----------------------------------------------------------------------------

(.initializeTouchEvents js/React true)

;; dropbox datastorage
;; -----------------------------------------------------------------------------

(def db-client (db/get-client))


;; error
;; -----------------------------------------------------------------------------

(defn error-component [app owner]
  (om/component (dom/h1 nil (:error app))))


;; async / loading
;; -----------------------------------------------------------------------------

(defn async-get [app owner]
  (let [data nil]
    (om/transact! app
      #(assoc %
              :current-date (js/Date.)
              :component :main
              :expenses (db/get-expenses (:table (om/get-shared owner)))
              ))))

(defn loading [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (async-get app owner)))
    om/IRender
      (render [_] (dom/h2 #js {:style #js {:textAlign "center"}} "Loading"))))

;; dispatch
;; -----------------------------------------------------------------------------

(defn dispatch-component [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go
        (loop []
          (let [ev (<! (:event-chan (om/get-shared owner)))]
            (cond
              (= :edit (:message ev))
              (om/transact! app #(assoc % :component :edit
                                          :current-item (:value ev)))
              (= :delete (:message ev))
              (do
                (.deleteRecord (:value ev))
                (om/transact! app
                              #(assoc % :component :main
                                        :expenses (db/get-expenses (:table (om/get-shared owner))))))
              (= :date (:message ev))
              (let [new-date (:value ev)]
                (om/transact! app
                              #(assoc % :component :main
                                        :current-date new-date))))

            (recur)))))
    om/IRender
    (render [_]
      (dom/div #js {:id "app-layout" 
                    :className (if (app :menu-open) "active" "closed")}
        (om/build menu/menu-component app)
        (dom/div #js {:className "header"}
          (dom/h1 #js {:onClick 
                       (fn [e] (om/transact! app #(assoc % :component :main)))}
                  "expenses"))
        (om/build
          (case (app :component)
            :main  content/main-component
            :add   add/add-component
            :edit  add/edit-component
            :list  listc/days-list-component
            :error error-component
            loading)
          app)))))

;; Initialize
;; -----------------------------------------------------------------------------


(defn main [auth-err]
  (let [target (. js/document (getElementById "layout"))]
    (if auth-err
      ; auth error
      (om/root dispatch-component {:component :error :error auth-err :menu-open false} {:target target})
      (let [ds-manager (.getDatastoreManager db-client)]
        (.openDefaultDatastore
          ds-manager
          (fn [ds-err ds]
            (if ds-err
              ; ds error
              (om/root dispatch-component {:component :error :error ds-err :menu-open false} {:target target})

              (om/root dispatch-component
                       {:menu-open false
                        :component :loading}
                       {:target target
                        :shared {:table (.getTable ds "expenses")
                                 :event-chan (chan)
                                 }})
              )))))))

  (.authenticate db-client nil main)
