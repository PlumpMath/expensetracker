(ns expenses.db)

(defn get-expenses
  ([table] (.query table))
  ([table options] (.query table (clj->js options))))

(defn put-expense [table options] 
  (.insert table (clj->js options)))

(def db-cred #js {:key  "l66k7gnikqojlup"})
(defn get-client [] (Dropbox.Client. db-cred))

