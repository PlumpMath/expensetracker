(ns expenses.components.list
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [goog.string :as gstring]
            [goog.string.format :as gformat]
            ))

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
