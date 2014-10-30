(ns expenses.components.menu
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            ))


(defn menu-component [app owner]
  (om/component
    (dom/div nil
      ; hamburger
      (dom/a #js {:href "#menu" :id "menulink" :className "menu-link"
                  :onClick #(om/transact! app (fn [a] (update-in a [:menu-open] not)))} 
             (dom/span nil))
      ; menu
      (dom/div #js {:id "menu"}
        (dom/div #js {:className "pure-menu pure-menu-open"}
          (dom/a #js {:className "pure-menu-heading" :href "#"} "Expenses")
          (dom/ul nil
            (dom/li nil
              (dom/a 
                #js {:onClick 
                     (fn [e]
                       (.preventDefault e)
                       (om/transact! app #(assoc % :component :main
                                                   :current-date (js/Date.)
                                                   :menu-open false)))}
                "TOP"))
            (dom/li nil
              (dom/a
                #js {:onClick 
                      (fn [e]
                        (.preventDefault e)
                        (om/transact! app #(assoc % :component :add :menu-open false)))}
                "ADD"))
            (dom/li nil
              (dom/a
                #js {:onClick 
                      (fn [e]
                        (.preventDefault e)
                        (om/transact! app #(assoc % :component :list :menu-open false)))}
                "LIST")))
                 )))))
