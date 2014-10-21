(ns expenses.core
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [cognitect.transit :as t]
            [figwheel.client :as fw :include-macros true]
            [goog.string :as gstring]
            [goog.string.format :as gformat]
            [goog.net.XhrIo :as xhr]
            )
  (:import [goog.net Jsonp]
           [goog Uri]
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

;; localstorage
;; -----------------------------------------------------------------------------

(def r (t/reader :json-verbose))
(def w (t/writer :json-verbose))

(def app-state 
  (atom {:component :loading
         :menu-open false}))

(defn adj-date [date span n]
  (case span
    :day   (js/Date. (.getFullYear date)       (.getMonth date)       (+ n (.getDate date)))
    :month (js/Date. (.getFullYear date)       (+ n (.getMonth date)) (.getDate date))
    :year  (js/Date. (+ n (.getFullYear date)) (.getMonth date)       (.getDate date))))

;; menu
;; -----------------------------------------------------------------------------

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

;; main
;; -----------------------------------------------------------------------------

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
          (dom/span #js{:className "time"}
                  (gstring/format "%02d:%02d"
                    (.getHours (item :date))
            (.getMinutes (item :date))))
          (dom/span #js{:className "date"}
                  (gstring/format "%02d-%02d-%d"
                    (.getDate (item :date))
                    (inc (.getMonth (item :date)))
                    (.getFullYear (item :date))
                    ))
          (dom/span #js {:className "category-button"
                        :style #js {:backgroundColor (string-to-color (:category item))}
                        } (name (:category item)))
          (dom/h3 #js {:className "amount"} (str (item :amount) "円")))
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
                                                  {:category v}))))
                          })))
        ; select previous
        (dom/h3 #js {:className "pure-u-1"} "PREVIOUS")
        (apply dom/div #js {:className "pure-u-1"}
          (om/build-all
            #(om/component 
               (dom/div #js {:className "category-box pure-u-1-3"
                              :onClick (fn [e] (put! (:ch state) {:category %}))}
                 (.toUpperCase %)))
            (:categories app)))
        ))))

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
            (dom/input #js {:ref "amount-input" :type "number" :className "pure-input-1"}))
            (dom/div #js {:className "pure-u-1-4 wrapper"}
              (dom/input #js {:type "submit" 
                              :className "pure-input-1 pure-button pure-button-primary" 
                              :value "OK"
                              :onClick (fn [e]
                                        (.preventDefault e)
                                        (let [v (-> (om/get-node owner "amount-input") .-value)]
                                          (when (not (empty? v))
                                            (put! (:ch state) 
                                                  {:amount v}))))
                          })))))))

(defn note-enter [app owner]
  (reify
    om/IRenderState 
    (render-state [_ state]
      (dom/div nil 
        (dom/h3 #js {:className "pure-u-1"} "CATEGORY")
        (dom/h4 #js {:className "pure-u-1"} (.toUpperCase (:category state)))
        (dom/h3 #js {:className "pure-u-1"} "AMOUNT")
        (dom/h4 #js {:className "pure-u-1"} (str (:amount state) "円") )
        (dom/h3 #js {:className "pure-u-1"} "NOTE")
        (dom/form #js {:className "pure-form pure-g"}
          (dom/div #js {:className "pure-u-3-4 wrapper"}
            (dom/input #js {:ref "note-input" :type "text" :className "pure-input-1"}))
            (dom/div #js {:className "pure-u-1-4 wrapper"}
              (dom/input #js {:type "submit"
                              :className "pure-input-1 pure-button pure-button-primary" 
                              :value "OK"
                              :onClick (fn [e]
                                        (.preventDefault e)
                                        (let [v (-> (om/get-node owner "note-input") .-value)]
                                          (when (not (empty? v))
                                            (put! (:ch state) 
                                                  {:note v}))))
                          })))))))


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
              (om/update-state! owner 
                #(assoc % :category (:category v) 
                          :current :amount))
              (:amount v) 
              (om/update-state! owner 
                #(assoc % :amount (js/parseInt (:amount v) 10)
                          :current :note))
              (:note v) 
              (post-data app (:category state) (:amount state) (:note v))
              :else
              (om/transact! app
                #(assoc % :component :main)))
            (recur))
          ))
      {:ch      add-chan 
       :current :category}))
    om/IRenderState
    (render-state [_ state]
      (om/build 
        (case (:current state)
          :amount amount-enter
          :note note-enter
          category-select)
        app
        {:init-state state}
        ))))


;; error
;; -----------------------------------------------------------------------------

(defn error-component [app owner]
  (om/component (dom/div nil "error")))


;; async / loading
;; -----------------------------------------------------------------------------

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
                    :categories (distinct (map (fn [e] (:category e)) parsed))
                    )))))))

(defn loading [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (async-get app))
    om/IRender
      (render [_] (dom/h2 #js {:style #js {:textAlign "center"}} "Loading"))))

(defn formdata-from-map [m]
  (let [fd (new js/FormData)]
    (doseq [[k v] m]
      (.append fd (name k) v))
    fd))

(defn post-data [app category amount note]
  (let [url "https://docs.google.com/forms/d/11p1qaDZYYXVnRq7nupXb-Qxg55Ha4JN6KQH2-6EZcRg/formResponse"
        data {"entry.79683136" category
              "entry.697543822" amount
              "entry.573062127" note }]
  (xhr/send url
    (fn [res] (om/transact! app (fn [a] (assoc a :component :loading))))
    "POST"
    (formdata-from-map data))))

;; dispatch
;; -----------------------------------------------------------------------------

(defn dispatch-component [app owner]
  (om/component
    (dom/div #js {:id "app-layout" 
                  :className (if (app :menu-open) "active" "closed")}
      (om/build menu-component app)
      (dom/div #js {:className "header"}
               (dom/h1 nil "円"))
      (om/build
        (case (app :component)
          :main  main-component
          :add   add-component
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
