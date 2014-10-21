(defproject expenses "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://github.com/USERNAME/expenses"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[compojure "1.1.8"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 ; om
                 [om "0.7.1"]
                 [prismatic/om-tools "0.3.2"]
                 ; routing
                 [secretary "1.2.0"]
                 ; transit
                 [com.cognitect/transit-cljs "0.8.188"]
                 ; debug
                 [figwheel "0.1.4-SNAPSHOT"] 
                 ]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]
  :figwheel {:http-server-root "public" :port 3449
             :css-dirs ["resources/public/css"]
             }
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/main.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/main-min.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
