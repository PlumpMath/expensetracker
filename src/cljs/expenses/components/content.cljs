(ns expenses.components.content
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [expenses.dateutil :as date-util]
            ))

;; main
;; -----------------------------------------------------------------------------

(defn buttons-component [app owner]
  (reify
    om/IRender
    (render [_]
      (let [current-date (:current-date app)]
        (dom/div #js {:className "pure-u-1 buttons"}
          ; < backward 1 day
          (dom/div
            #js {:className "pure-u-1-6 back"
                :onClick #(om/transact! app (fn [a] (assoc a :current-date (date-util/adj-date :day current-date -1))))}
            "<")
          (dom/div 
            #js {:className "pure-u-2-3"
                :onClick #(om/transact! app (fn [a] (assoc a :current-date (js.Date.))))}
            (date-util/format-date current-date))
          ; forward 1 day >
          (dom/div 
            #js {:className "pure-u-1-6 forward"
                :onClick #(om/transact! app (fn [a] (assoc a :current-date (date-util/adj-date :day current-date 1))))} 
            ">")
          (dom/div #js {:className "pure-u-1"
                        :onClick #(om/transact! app (fn [a] (assoc a :component :add)))
                        } "Add"))))))

(defn total-component [items owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "pure-u-1"}
        (dom/h2 nil 
                (str "Total: " (->> items (map #(.get % "amount")) (apply +)) "円" ))))))

(defn string-to-color [s]
  (let [seed (* 6 (apply * (map #(.charCodeAt % 0) s)))
        s-hex (.toString (mod seed 16777215) 16)]
    (str "#"
         (apply str (take (- 6 (count s-hex)) (repeat "0")))
         s-hex)))

(defn touch-end-check [e owner state]
  (let [touch-end (-> e (.-changedTouches) (aget 0))]
    (cond
      (not (:touch-start state))
      (om/update-state! owner #(assoc % :swiped false :touch-start nil))   
      ; isn't yet swiped
      (and
        (not (:swiped state))
        (> 20 (Math/abs (- (.-pageY (:touch-start state)) (.-pageY touch-end))))
        (< 30 (- (.-pageX (:touch-start state)) (.-pageX touch-end))))
      (om/update-state! owner #(assoc % :swiped true :touch-start nil))
      ; is swiped
      (and 
        (:swiped state)
        (> 20 (Math/abs (- (.-pageY (:touch-start state)) (.-pageY touch-end))))
        (< 30 (- (.-pageX touch-end) (.-pageX (:touch-start state)))))
      (om/update-state! owner #(assoc % :swiped false :touch-start nil)))))

(defn expense-list-item [item owner]
  (reify
    om/IInitState
    (init-state [_]
      {:swiped false})
    om/IRenderState
    (render-state [_ state]
      (dom/li #js {:className "pure-u-1"
                   :onTouchStart (fn [e] (om/set-state! owner :touch-start (-> e (.-changedTouches) (aget 0))))
                   :onTouchEnd   (fn [e] (touch-end-check e owner state))
                   :onDoubleClick (fn [e] (.preventDefault e) (om/update-state! owner [:swiped] not))
                   }
      ; date box
      (if (:swiped state)
        (dom/div #js {:className "pure-u-1 inner"}
                 (dom/div #js {:className "pure-u-1-2 listbutton edit"
                               :onClick (fn [e] 
                                          (.preventDefault e)
                                          (om/update-state! owner #(assoc % :swiped false
                                                                          :touch-start nil)) 
                                          (put! (om/get-shared owner :event-chan)
                                                {:message :edit :value item}))}
                          "EDIT")
                 (dom/div #js {:className "pure-u-1-2 listbutton del"
                               :onClick (fn [e] 
                                          (.preventDefault e)
                                          (om/update-state! owner #(assoc % :swiped false
                                                                          :touch-start nil)) 
                                          (put! (om/get-shared owner :event-chan)
                                                {:message :delete :value item}))}
                          "DELETE"))
        (dom/div #js {:className "pure-u-1 inner"}
                  (dom/div #js {:className "pure-u-1"}
                          (dom/span #js{:className "time"}
                                    (date-util/format-time (.get item "date")))
                          (dom/span #js{:className "date"}
                                    (date-util/format-date (.get item "date")))
                          (dom/span #js {:className "category-button"
                                          :style #js {:backgroundColor (string-to-color (.get item "category"))}
                                          } (.get  item "category"))
                          (dom/h3 #js {:className "amount"} (str (.get item "amount") "円")))
                  (dom/div #js {:className "pure-u-1 note"} (.get item "note"))))))))

(defn expense-list-component [items owner]
  (reify
    om/IInitState
    (init-state [_]
      {:swiped false})
    om/IRender
    (render [_]
      (dom/div #js {:className "pure-u-1"}
        (apply dom/ul #js {:className "pure-u-1 expense-list" }
                      (om/build-all expense-list-item items))))))

(defn filter-items [span date items]
  (filter
    #(case span
       :day   (= (.getDate  date) 
                 (.getDate  (.get % "date")))
       :month (= (.getMonth date) 
                 (.getMonth (.get % "date")))
       :year  (= (.getYear  date) 
                 (.getYear  (.get % "date")))
       true)
    items))

(defn main-component [app owner]
  (reify
    om/IRender
    (render [_]
      (let [current-items (sort-by (fn [item] (-> item (.get "date") .getTime -))
                                   (filter-items :day (:current-date app) (:expenses app)))]
        (dom/div #js {:className "pure-g"}
                 ; change date / add buttons
                 (om/build buttons-component app)
                 ; total
                 (om/build total-component current-items)
                 ; list for day
                 (om/build expense-list-component current-items)
                 )))))
