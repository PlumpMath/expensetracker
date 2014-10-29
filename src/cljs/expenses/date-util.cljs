(ns expenses.date-util
  (:require
    [goog.string :as gstring]
    [goog.string.format :as gformat]))

(defn adj-date [span date n]
  (case span
    :day   (js/Date. (.getFullYear date)       (.getMonth date)       (+ n (.getDate date)))
    :month (js/Date. (.getFullYear date)       (+ n (.getMonth date)) (.getDate date))
    :year  (js/Date. (+ n (.getFullYear date)) (.getMonth date)       (.getDate date))))


(defn format-time [date]
  (gstring/format "%02d:%02d"
                  (.getHours date)
                  (.getMinutes date)))

(defn format-date [date]
  (gstring/format "%02d-%02d-%d"
                  (.getDate date)
                  (inc (.getMonth date))
                  (.getFullYear date))) 
