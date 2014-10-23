(ns expenses.components.add
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [expenses.db :as db]
            ))
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
                  (db/put-expense (:table (om/get-shared owner)) new-expense)
                  (om/transact! app #(assoc % :component :main
                                              :expenses (db/get-expenses (:table (om/get-shared owner))))))
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
