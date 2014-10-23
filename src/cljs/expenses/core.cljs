(ns expenses.core
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]

            [expenses.components.menu :as menu] 
            [expenses.components.content :as content]

            [figwheel.client :as fw :include-macros true]
            [goog.string :as gstring]
            [goog.string.format :as gformat]
            )
  
  )


;; touch events 
;; -----------------------------------------------------------------------------

(.initializeTouchEvents js/React true)

;; dropbox datastorage
;; -----------------------------------------------------------------------------

(defn get-expenses
  ([table] (.query table))
  ([table options] (.query table (clj->js options))))

(defn put-expense [table options] 
  (.insert table (clj->js options)))

(def db-cred #js {:key  "l66k7gnikqojlup"})
(def db-client (Dropbox.Client. db-cred))


;; add
;; -----------------------------------------------------------------------------

(defn category-select [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (dom/div #js  {:className "pure-u-1"}
        ; add new
        (dom/h3 #js {:className "pure-u-1"} "NEW")
        (dom/form #js {:className "pure-form pure-g"}
          (dom/div #js {:className "pure-u-3-4 wrapper"}
                    (dom/input #js {:ref "category-input" :type "text" :className "pure-input-1"}))
          (dom/div #js {:className "pure-u-1-4 wrapper"}
                    (dom/input #js {:type "submit" 
                                    :className "pure-input-1 pure-button pure-button-primary" 
                                    :value "OK"
                                    :onClick (fn [e]
                                              (.preventDefault e)
                                              (let [v (-> (om/get-node owner "category-input") .-value)]
                                                (when (not (empty? v))
                                                  (put! (:ch state) 
                                                        {:category v}))))})))
        ; select previous
        (let [categories (distinct (map #(.get % "category") (:expenses app)))]
          (when (not-empty categories)
            (dom/h3 #js {:className "pure-u-1"} "PREVIOUS")
            (apply dom/div #js {:className "pure-u-1"}
                   (om/build-all
                     #(om/component 
                        (dom/div #js {:className "category-box pure-u-1-3"
                                      :onClick (fn [e] (put! (:ch state) {:category %}))}
                                 (.toUpperCase %)))
                     categories
                     ))))
        (dom/div #js {:className "pure-form wrapper cancel"}
                 (dom/input #js {:type "submit" 
                                 :className "pure-input-1 pure-button pure-button-danger" 
                                 :value "CANCEL"
                                 :onClick (fn [e]
                                            (.preventDefault e)
                                            (om/transact! app #(assoc % :component :main))
                                            )}))))))

(defn amount-enter [app owner]
  (reify
    om/IRenderState 
    (render-state [_ state]
      (dom/div nil 
        (dom/h3 #js {:className "pure-u-1"} "CATEGORY")
        (dom/h4 #js {:className "pure-u-1"} (.toUpperCase (:category state)))
        (dom/h3 #js {:className "pure-u-1"} "AMOUNT")
        (dom/form #js {:className "pure-form pure-g"}
          (dom/div #js {:className "pure-u-3-4 wrapper"}
            (dom/input #js {:ref "amount-input" :type "number" :autoFocus true :className "pure-input-1"}))
            (dom/div #js {:className "pure-u-1-4 wrapper"}
              (dom/input #js {:type "submit" 
                              :className "pure-input-1 pure-button pure-button-primary" 
                              :value "OK"
                              :onClick (fn [e]
                                        (.preventDefault e)
                                        (let [v (-> (om/get-node owner "amount-input") .-value)]
                                          (when (not (empty? v))
                                            (put! (:ch state) 
                                                  {:amount v}))))})))

        (dom/div #js {:className "pure-form wrapper cancel"}
                 (dom/input #js {:type "submit" 
                                 :className "pure-input-1 pure-button pure-button-danger" 
                                 :value "CANCEL"
                                 :onClick (fn [e]
                                            (.preventDefault e)
                                            (om/transact! app #(assoc % :component :main))
                                            )}))))))

(defn note-enter [app owner]
  (reify
    om/IRenderState 
    (render-state [_ state]
      (dom/div nil 
        (dom/h3 #js {:className "pure-u-1"} "CATEGORY")
        (dom/h4 #js {:className "pure-u-1"} (.toUpperCase (:category state)))
        (dom/h3 #js {:className "pure-u-1"} "AMOUNT")
        (dom/h4 #js {:className "pure-u-1"} (str (:amount state) "円"))
        (dom/h3 #js {:className "pure-u-1"} "NOTE")
        (dom/form #js {:className "pure-form pure-g"}
          (dom/div #js {:className "pure-u-3-4 wrapper"}
            (dom/input #js {:ref "note-input" :type "text" :autoFocus true :className "pure-input-1"}))
            (dom/div #js {:className "pure-u-1-4 wrapper"}
              (dom/input #js {:type "submit"
                              :className "pure-input-1 pure-button pure-button-primary" 
                              :value "OK"
                              :onClick (fn [e]
                                        (.preventDefault e)
                                        (let [v (-> (om/get-node owner "note-input") .-value)]
                                          (when (not (empty? v))
                                            (put! (:ch state) 
                                                  {:note v}))))})))
        (dom/div #js {:className "pure-form wrapper cancel"}
                 (dom/input #js {:type "submit" 
                                 :className "pure-input-1 pure-button pure-button-danger" 
                                 :value "CANCEL"
                                 :onClick (fn [e]
                                            (.preventDefault e)
                                            (om/transact! app #(assoc % :component :main))
                                            )}))))))

(defn add-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [add-chan (chan)]
        (go
          (loop []
            (let [v (<! add-chan)]
              (cond
                (:category v)
                (om/update-state! owner #(assoc % :category (:category v) 
                                                  :current :amount))

                (:amount v)   
                (om/update-state! owner #(assoc % :amount (js/parseInt (:amount v) 10) 
                                                  :current :note))

                (:note v) 
                (let [new-expense {:date (:current-date @app)
                                   :category (om/get-state owner :category) 
                                   :amount (om/get-state owner :amount) 
                                   :note (:note v)}]
                  (put-expense (:table (om/get-shared owner)) new-expense)
                  (om/transact! app #(assoc % :component :main
                                              :expenses (get-expenses (:table (om/get-shared owner))))))
                :else
                (om/transact! app #(assoc % :component :main)))
              (recur))))
        ;return state
        {:ch add-chan 
         :current :category}))
    om/IRenderState
    (render-state [_ state]
      (om/build 
        (case (:current state)
          :amount amount-enter
          :note note-enter
          category-select)
        app
        {:init-state state}))))

(defn edit-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [item (:current-item app)] 
        {:category (.get item "category")
         :amount (.get item "amount")
         :note (.get item "note")}))
    om/IRenderState
    (render-state [_ state]
      (let [item (:current-item app)]
        (dom/form #js {:className "pure-form"}
          (dom/h3 #js {:className "pure-u-1"} "CATEGORY")
          (dom/input #js {:ref "category-input" :type "text" :className "pure-input-1" 
                          :onChange #(om/set-state! owner [:category] (.. % -target -value))
                          :value (:category state)})

          (dom/h3 #js {:className "pure-u-1"} "AMOUNT")
          (dom/input #js {:ref "amount-input" :type "number" :className "pure-input-1" 
                          :onChange #(om/set-state! owner [:amount] (.. % -target -value))
                          :value (:amount state)})

          (dom/h3 #js {:className "pure-u-1"} "NOTE")
          (dom/input #js {:ref "note-input" :type "text" :className "pure-input-1" 
                          :onChange #(om/set-state! owner [:note] (.. % -target -value))
                          :value (:note state)})

          (dom/div #js {:className "pure-u-1-2 wrapper cancel"}
            (dom/input #js {:type "submit" 
                            :className "pure-input-1 pure-button pure-button-primary"
                            :value "OK"
                            :onClick (fn [e]
                                      (.preventDefault e)
                                      (.update item (clj->js state))
                                      (om/transact! app #(assoc % :component :main 
                                                                  :current-item nil))
                                      )})) 
          (dom/div #js {:className "pure-u-1-2 wrapper cancel"}
            (dom/input #js {:type "submit" 
                            :className "pure-input-1 pure-button pure-button-danger"
                            :value "CANCEL"
                            :onClick (fn [e]
                                      (.preventDefault e)
                                      (om/transact! app #(assoc % :component :main 
                                                                  :current-item nil))
                                      )})))))))

;; list
;; -----------------------------------------------------------------------------

(defn day-item-component [item owner]
  (om/component
    (dom/li #js {:className "pure-u-1"
                 :onClick (fn [e] (put! (:event-chan (om/get-shared owner))
                                        {:message :date :value (:date item)}))}
      (dom/div #js {:className "pure-u-1-2 list-date"}
                               (gstring/format "%02d-%02d-%d"
                                               (.getDate (:date item))
                                               (inc (.getMonth (:date item)))
                                               (.getFullYear (:date item))))
      (dom/div #js {:className "pure-u-1-2 list-total"
                    :style #js {:text-align "right"}} (str (:total item) "円")))))


(defn days-list-component [app owner]
  (let [days (sort-by #(-> % :date .getTime -)
                (map (fn [[k v]] {:date k :total (apply + (map #(.get % "amount") v))})
                  (group-by #(doto (.get % "date") (.setHours 0 0 0 0)) 
                            (:expenses app))))]
    (om/component
      (apply dom/ul #js {:className "daylist"}
        (om/build-all day-item-component days)))))

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
              :component  :main
              :expenses   (get-expenses (:table (om/get-shared owner)))
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
                                        :expenses (get-expenses (:table (om/get-shared owner))))))
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
            :add   add-component
            :edit  edit-component
            :list  days-list-component
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
