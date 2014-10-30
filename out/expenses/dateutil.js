// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.dateutil');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
expenses.dateutil.adj_date = (function adj_date(span,date,n){var G__10318 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__10318) {
case "year":
return (new Date((n + date.getFullYear()),date.getMonth(),date.getDate()));

break;
case "month":
return (new Date(date.getFullYear(),(n + date.getMonth()),date.getDate()));

break;
case "day":
return (new Date(date.getFullYear(),date.getMonth(),(n + date.getDate())));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(span))));

}
});
expenses.dateutil.format_time = (function format_time(date){return goog.string.format("%02d:%02d",date.getHours(),date.getMinutes());
});
expenses.dateutil.format_date = (function format_date(date){return goog.string.format("%02d-%02d-%d",date.getDate(),(date.getMonth() + (1)),date.getFullYear());
});

//# sourceMappingURL=dateutil.js.map