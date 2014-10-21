(ns expenses.core
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]

            [figwheel.client :as fw :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [cognitect.transit :as t]
            [goog.string :as gstring]
            [goog.string.format :as gformat]
            )
  (:import [goog.net Jsonp]
           [goog Uri]
           [googl.net.XhrIo]
           ))


;; -----------------------------------------------------------------------------

(def DEBUG true)

(when DEBUG
  (enable-console-print!)
  (fw/watch-and-reload
    :websocket-url   "ws://192.168.7.21:3449/figwheel-ws"
    :jsload-callback (fn [] (print "reloaded"))))

;; touch events 
;; -----------------------------------------------------------------------------

(.initializeTouchEvents js/React true)

(def app-state 
  (atom {:component :loading
         :menu-open false}))

(defn adj-date [date span n]
  (case span
    :day   (js/Date. (.getFullYear date)       (.getMonth date)       (+ n (.getDate date)))
    :month (js/Date. (.getFullYear date)       (+ n (.getMonth date)) (.getDate date))
    :year  (js/Date. (+ n (.getFullYear date)) (.getMonth date)       (.getDate date))))

(defn buttons-component [app owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [focus-chan current-focus current-focus-date]}]
      (dom/div #js {:className "pure-u-1 buttons"}
        (dom/div                    
          #js {:className "pure-u-1-6 back"
               :onClick #(put! focus-chan 
                               {:current-focus-date 
                                (adj-date current-focus-date (:span current-focus) -1)})}
                "<")
        (dom/div 
          #js {:className "pure-u-2-3"}
          (gstring/format "%02d-%02d-%d"
                        (.getDate current-focus-date)
                        (inc (.getMonth current-focus-date))
                        (.getFullYear current-focus-date)))
        (dom/div 
          #js {:className "pure-u-1-6 forward"
               :onClick #(put! focus-chan 
                               {:current-focus-date 
                                (adj-date current-focus-date (:span current-focus) 1)})}
          ">")
      (dom/div #js {:className "pure-u-1"
                    :onClick   #(om/transact! app (fn [a] (assoc a :component :add)))
                    } "Add"))
      )))

(defn total-component [items owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "pure-u-1"}
               (dom/h2 nil 
                       (str "Total: " (->> items (map :amount) (apply +)) "円" )
             )))))

(defn string-to-color [s]
  (let [seed (* 6 (apply * (map #(.charCodeAt % 0) s)))
        s-hex (.toString (mod seed 16777215) 16)]
    (str "#"
         (apply str (take (- 6 (count s-hex)) (repeat "0")))
         s-hex)))

(defn expense-list-item [item owner]
  (reify
    om/IRender
    (render [_]
      (dom/li #js {:className "pure-g"}
        ; date box
        (dom/div #js {:className "pure-u-1"} 
          (dom/div #js{:className "date pure-u-1-4"}
                  (gstring/format "%02d-%02d-%d"
                    (.getDate (item :date))
                    (inc (.getMonth (item :date)))
                    (.getFullYear (item :date))
                    ))
          (dom/div #js{:className "time pure-u-1-4"}
                  (gstring/format "%02d:%02d"
                    (.getHours (item :date))
                    (.getMinutes (item :date))))
          (dom/div #js{:className (str "pure-u-1-4 " (:category item))}
                   (dom/span #js {:className "category-button"
                                  :style #js {:backgroundColor (string-to-color (:category item))}
                                  } (name (:category item)))))
        (dom/h3 #js {:className "pure-u-1 note"} (str (item :amount) "円"))    
        (dom/div #js {:className "pure-u-1 note"} (item :note))))))

(defn expense-list-component [items owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "pure-u-1"}
        (apply dom/ul #js {:className "pure-u-1 expense-list"}
                      (om/build-all expense-list-item items))))))

(defn filter-items [{:keys [span category]} f-date items]
  (filter
    #(and
       (case span
         :day   (= (.getDate  f-date) 
                   (.getDate  (:date %)))
         :month (= (.getMonth f-date) 
                   (.getMonth (:date %)))
         :year  (= (.getYear  f-date) 
                   (.getYear  (:date %)))
         true)
       (case category
         nil true
         (= category (:category %))))
    items))

(defn main-component [app owner]
  (reify
    om/IInitState
      (init-state [_]
        (let [focus-chan (chan)
              now (js/Date.)]
          (go
            (loop []
              (let [new-focus (<! focus-chan)]
                (om/update-state! owner #(merge % new-focus)))
              (recur)))
          {:current-focus     {:span :day :category nil}
           :current-focus-date now
           :focus-chan         focus-chan}
          ))
    om/IRenderState
      (render-state [_ {:keys [focus-chan current-focus current-focus-date]}]
        (let [current-items (sort-by #(-> % :date .getTime -)
                                     (filter-items current-focus current-focus-date (app :expenses)))]
          (dom/div #js {:className "pure-g"}
            ; change date / add buttons
            (om/build buttons-component app {:init-state {:focus-chan         focus-chan} 
                                            :state       {:current-focus      current-focus
                                                          :current-focus-date current-focus-date}})
            ; total
            (om/build total-component current-items)
            ; list for day
            (om/build expense-list-component current-items)
            )))))


(defn async-get [app]
  (let [uri "https://script.google.com/macros/s/AKfycbwRMHhtxd1TBQMVpmeV-25RJaCw2LVVSHL9O8yiY31qyJKl9N8/exec"
        req (Jsonp. (Uri. uri))]
    (.send req nil
           #(let [data  (:expenses (js->clj % :keywordize-keys true))
                  parsed (map (fn [d] (assoc d :date (js/Date. (:Timestamp d)))) data)]
              (om/transact! app
                (fn [a] 
                  (assoc a
                          :component :main
                          :expenses parsed
                          )))))))

(defn loading [app owner]
  (go (async-get app))
  (om/component (dom/div nil "loading")))

(defn error-component [app owner]
  (om/component (dom/div nil "error")))

(defn formdata-from-map [m]
  (let [fd (new js/FormData)]
    (doseq [[k v] m]
      (.append fd (name k) v))
    fd))

(defn post-data [ch category amount note]
  (let [url "https://docs.google.com/forms/d/11p1qaDZYYXVnRq7nupXb-Qxg55Ha4JN6KQH2-6EZcRg/formResponse"
        data {"entry.79683136" category
              "entry.697543822" amount
              "entry.573062127" note }]
    (.send goog.net.XhrIo url
           (fn [res] #_(put! ch res))
           "POST"
           (formdata-from-map data))))

(defn form-component [app owner]
  (om/component (dom/div nil "form")))

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
          (apply dom/ul nil 
                  (map #(dom/li nil (dom/a #js {:href "#"} %))
                      ["home" "add" "save" "restore"]))))))) 

(defn dispatch-component [app owner]
  (om/component
    (dom/div #js {:id "app-layout" 
                  :className (if (app :menu-open) "active" "closed")}
      (om/build menu-component app)
      (dom/div #js {:className "header"}
               (dom/h1 nil "Expenses."))
      (om/build
        (case (app :component)
          :main main-component
          :add  form-component
          :error error-component
          loading)
        app
        ))))

(defn main []
  (om/root
    dispatch-component
    app-state
    {:target (. js/document (getElementById "layout"))}))

(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (print "reloaded")))

(main)
