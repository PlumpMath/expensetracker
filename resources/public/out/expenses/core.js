// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.string');
goog.require('figwheel.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.string.format');
goog.require('figwheel.client');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
expenses.core.DEBUG = true;
if(cljs.core.truth_(expenses.core.DEBUG))
{cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://192.168.7.21:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));
} else
{}
React.initializeTouchEvents(true);
expenses.core.get_expenses = (function() {
var get_expenses = null;
var get_expenses__1 = (function (table){return table.query();
});
var get_expenses__2 = (function (table,options){return table.query(cljs.core.clj__GT_js.call(null,options));
});
get_expenses = function(table,options){
switch(arguments.length){
case 1:
return get_expenses__1.call(this,table);
case 2:
return get_expenses__2.call(this,table,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_expenses.cljs$core$IFn$_invoke$arity$1 = get_expenses__1;
get_expenses.cljs$core$IFn$_invoke$arity$2 = get_expenses__2;
return get_expenses;
})()
;
expenses.core.put_expense = (function put_expense(table,options){return table.insert(cljs.core.clj__GT_js.call(null,options));
});
expenses.core.db_cred = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"l66k7gnikqojlup"], null));
expenses.core.db_client = (new Dropbox.Client(expenses.core.db_cred));
expenses.core.adj_date = (function adj_date(date,span,n){var G__139614 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__139614) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t139621 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139621 = (function (owner,app,menu_component,meta139622){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta139622 = meta139622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139621.cljs$lang$type = true;
expenses.core.t139621.cljs$lang$ctorStr = "expenses.core/t139621";
expenses.core.t139621.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139621");
});
expenses.core.t139621.prototype.om$core$IRender$ = true;
expenses.core.t139621.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__139616_SHARP_){return cljs.core.assoc.call(null,p1__139616_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"top")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__139617_SHARP_){return cljs.core.assoc.call(null,p1__139617_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"add"))))));
});
expenses.core.t139621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139623){var self__ = this;
var _139623__$1 = this;return self__.meta139622;
});
expenses.core.t139621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139623,meta139622__$1){var self__ = this;
var _139623__$1 = this;return (new expenses.core.t139621(self__.owner,self__.app,self__.menu_component,meta139622__$1));
});
expenses.core.__GT_t139621 = (function __GT_t139621(owner__$1,app__$1,menu_component__$1,meta139622){return (new expenses.core.t139621(owner__$1,app__$1,menu_component__$1,meta139622));
});
}
return (new expenses.core.t139621(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t139629 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139629 = (function (owner,app,buttons_component,meta139630){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta139630 = meta139630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139629.cljs$lang$type = true;
expenses.core.t139629.cljs$lang$ctorStr = "expenses.core/t139629";
expenses.core.t139629.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139629");
});
expenses.core.t139629.prototype.om$core$IRenderState$ = true;
expenses.core.t139629.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__139632){var self__ = this;
var map__139633 = p__139632;var map__139633__$1 = ((cljs.core.seq_QMARK_.call(null,map__139633))?cljs.core.apply.call(null,cljs.core.hash_map,map__139633):map__139633);var current_focus_date = cljs.core.get.call(null,map__139633__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__139633__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__139633__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739));
});})(___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__139633,map__139633__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t139629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139631){var self__ = this;
var _139631__$1 = this;return self__.meta139630;
});
expenses.core.t139629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139631,meta139630__$1){var self__ = this;
var _139631__$1 = this;return (new expenses.core.t139629(self__.owner,self__.app,self__.buttons_component,meta139630__$1));
});
expenses.core.__GT_t139629 = (function __GT_t139629(owner__$1,app__$1,buttons_component__$1,meta139630){return (new expenses.core.t139629(owner__$1,app__$1,buttons_component__$1,meta139630));
});
}
return (new expenses.core.t139629(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t139638 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139638 = (function (owner,items,total_component,meta139639){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta139639 = meta139639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139638.cljs$lang$type = true;
expenses.core.t139638.cljs$lang$ctorStr = "expenses.core/t139638";
expenses.core.t139638.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139638");
});
expenses.core.t139638.prototype.om$core$IRender$ = true;
expenses.core.t139638.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__139634_SHARP_){return p1__139634_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t139638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139640){var self__ = this;
var _139640__$1 = this;return self__.meta139639;
});
expenses.core.t139638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139640,meta139639__$1){var self__ = this;
var _139640__$1 = this;return (new expenses.core.t139638(self__.owner,self__.items,self__.total_component,meta139639__$1));
});
expenses.core.__GT_t139638 = (function __GT_t139638(owner__$1,items__$1,total_component__$1,meta139639){return (new expenses.core.t139638(owner__$1,items__$1,total_component__$1,meta139639));
});
}
return (new expenses.core.t139638(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__139641_SHARP_){return p1__139641_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t139650 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139650 = (function (owner,item,expense_list_item,meta139651){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta139651 = meta139651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139650.cljs$lang$type = true;
expenses.core.t139650.cljs$lang$ctorStr = "expenses.core/t139650";
expenses.core.t139650.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139650");
});
expenses.core.t139650.prototype.om$core$IRenderState$ = true;
expenses.core.t139650.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onTouchEnd": ((function (___$1){
return (function (e){var touch_end = (e.changedTouches[(0)]);if(cljs.core.truth_(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,self__.owner,((function (touch_end,___$1){
return (function (p1__139642_SHARP_){return cljs.core.assoc.call(null,p1__139642_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end,___$1))
);
} else
{if(cljs.core.truth_((function (){var and__11373__auto__ = new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(and__11373__auto__))
{return (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (touch_end.pageX - new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX)));
} else
{return and__11373__auto__;
}
})()))
{return om.core.update_state_BANG_.call(null,self__.owner,((function (touch_end,___$1){
return (function (p1__139643_SHARP_){return cljs.core.assoc.call(null,p1__139643_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end,___$1))
);
} else
{return null;
}
}
} else
{return om.core.update_state_BANG_.call(null,self__.owner,((function (touch_end,___$1){
return (function (p1__139644_SHARP_){return cljs.core.assoc.call(null,p1__139644_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end,___$1))
);
}
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__139645_SHARP_){return cljs.core.assoc.call(null,p1__139645_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__139646_SHARP_){return cljs.core.assoc.call(null,p1__139646_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.core.t139650.prototype.om$core$IInitState$ = true;
expenses.core.t139650.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t139650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139652){var self__ = this;
var _139652__$1 = this;return self__.meta139651;
});
expenses.core.t139650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139652,meta139651__$1){var self__ = this;
var _139652__$1 = this;return (new expenses.core.t139650(self__.owner,self__.item,self__.expense_list_item,meta139651__$1));
});
expenses.core.__GT_t139650 = (function __GT_t139650(owner__$1,item__$1,expense_list_item__$1,meta139651){return (new expenses.core.t139650(owner__$1,item__$1,expense_list_item__$1,meta139651));
});
}
return (new expenses.core.t139650(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t139656 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139656 = (function (owner,items,expense_list_component,meta139657){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta139657 = meta139657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139656.cljs$lang$type = true;
expenses.core.t139656.cljs$lang$ctorStr = "expenses.core/t139656";
expenses.core.t139656.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139656");
});
expenses.core.t139656.prototype.om$core$IRender$ = true;
expenses.core.t139656.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t139656.prototype.om$core$IInitState$ = true;
expenses.core.t139656.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t139656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139658){var self__ = this;
var _139658__$1 = this;return self__.meta139657;
});
expenses.core.t139656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139658,meta139657__$1){var self__ = this;
var _139658__$1 = this;return (new expenses.core.t139656(self__.owner,self__.items,self__.expense_list_component,meta139657__$1));
});
expenses.core.__GT_t139656 = (function __GT_t139656(owner__$1,items__$1,expense_list_component__$1,meta139657){return (new expenses.core.t139656(owner__$1,items__$1,expense_list_component__$1,meta139657));
});
}
return (new expenses.core.t139656(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__139660,f_date,items){var map__139665 = p__139660;var map__139665__$1 = ((cljs.core.seq_QMARK_.call(null,map__139665))?cljs.core.apply.call(null,cljs.core.hash_map,map__139665):map__139665);var category = cljs.core.get.call(null,map__139665__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__139665__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__139665,map__139665__$1,category,span){
return (function (p1__139659_SHARP_){var and__11373__auto__ = (function (){var G__139667 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__139667) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__139659_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__139659_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__139659_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__139668 = category;if(cljs.core._EQ_.call(null,null,G__139668))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__139659_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__139665,map__139665__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t139697 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139697 = (function (owner,app,main_component,meta139698){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta139698 = meta139698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139697.cljs$lang$type = true;
expenses.core.t139697.cljs$lang$ctorStr = "expenses.core/t139697";
expenses.core.t139697.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139697");
});
expenses.core.t139697.prototype.om$core$IRenderState$ = true;
expenses.core.t139697.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__139700){var self__ = this;
var map__139701 = p__139700;var map__139701__$1 = ((cljs.core.seq_QMARK_.call(null,map__139701))?cljs.core.apply.call(null,cljs.core.hash_map,map__139701):map__139701);var current_focus_date = cljs.core.get.call(null,map__139701__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__139701__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__139701__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__139701,map__139701__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__139701,map__139701__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t139697.prototype.om$core$IInitState$ = true;
expenses.core.t139697.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (new Date());var c__17814__auto___139723 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___139723,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___139723,focus_chan,now,___$1){
return (function (state_139711){var state_val_139712 = (state_139711[(1)]);if((state_val_139712 === (4)))
{var inst_139704 = (state_139711[(2)]);var inst_139705 = (function (){var new_focus = inst_139704;return ((function (new_focus,inst_139704,state_val_139712,c__17814__auto___139723,focus_chan,now,___$1){
return (function (p1__139670_SHARP_){return cljs.core.merge.call(null,p1__139670_SHARP_,new_focus);
});
;})(new_focus,inst_139704,state_val_139712,c__17814__auto___139723,focus_chan,now,___$1))
})();var inst_139706 = om.core.update_state_BANG_.call(null,self__.owner,inst_139705);var state_139711__$1 = (function (){var statearr_139713 = state_139711;(statearr_139713[(7)] = inst_139706);
return statearr_139713;
})();var statearr_139714_139724 = state_139711__$1;(statearr_139714_139724[(2)] = null);
(statearr_139714_139724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139712 === (3)))
{var inst_139709 = (state_139711[(2)]);var state_139711__$1 = state_139711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139711__$1,inst_139709);
} else
{if((state_val_139712 === (2)))
{var state_139711__$1 = state_139711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139711__$1,(4),focus_chan);
} else
{if((state_val_139712 === (1)))
{var state_139711__$1 = state_139711;var statearr_139715_139725 = state_139711__$1;(statearr_139715_139725[(2)] = null);
(statearr_139715_139725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___139723,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___139723,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_139719 = [null,null,null,null,null,null,null,null];(statearr_139719[(0)] = state_machine__17800__auto__);
(statearr_139719[(1)] = (1));
return statearr_139719;
});
var state_machine__17800__auto____1 = (function (state_139711){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_139711);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e139720){if((e139720 instanceof Object))
{var ex__17803__auto__ = e139720;var statearr_139721_139726 = state_139711;(statearr_139721_139726[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e139720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__139727 = state_139711;
state_139711 = G__139727;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_139711){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_139711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___139723,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_139722 = f__17815__auto__.call(null);(statearr_139722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___139723);
return statearr_139722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___139723,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t139697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139699){var self__ = this;
var _139699__$1 = this;return self__.meta139698;
});
expenses.core.t139697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139699,meta139698__$1){var self__ = this;
var _139699__$1 = this;return (new expenses.core.t139697(self__.owner,self__.app,self__.main_component,meta139698__$1));
});
expenses.core.__GT_t139697 = (function __GT_t139697(owner__$1,app__$1,main_component__$1,meta139698){return (new expenses.core.t139697(owner__$1,app__$1,main_component__$1,meta139698));
});
}
return (new expenses.core.t139697(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t139737 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139737 = (function (owner,app,category_select,meta139738){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta139738 = meta139738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139737.cljs$lang$type = true;
expenses.core.t139737.cljs$lang$ctorStr = "expenses.core/t139737";
expenses.core.t139737.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139737");
});
expenses.core.t139737.prototype.om$core$IRenderState$ = true;
expenses.core.t139737.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.distinct.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__139728_SHARP_){return p1__139728_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__139729_SHARP_){if(typeof expenses.core.t139740 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139740 = (function (p1__139729_SHARP_,categories,state,_,meta139738,owner,app,category_select,meta139741){
this.p1__139729_SHARP_ = p1__139729_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta139738 = meta139738;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta139741 = meta139741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139740.cljs$lang$type = true;
expenses.core.t139740.cljs$lang$ctorStr = "expenses.core/t139740";
expenses.core.t139740.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139740");
});})(categories,___$1))
;
expenses.core.t139740.prototype.om$core$IRender$ = true;
expenses.core.t139740.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__139729_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__139729_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t139740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_139742){var self__ = this;
var _139742__$1 = this;return self__.meta139741;
});})(categories,___$1))
;
expenses.core.t139740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_139742,meta139741__$1){var self__ = this;
var _139742__$1 = this;return (new expenses.core.t139740(self__.p1__139729_SHARP_,self__.categories,self__.state,self__._,self__.meta139738,self__.owner,self__.app,self__.category_select,meta139741__$1));
});})(categories,___$1))
;
expenses.core.__GT_t139740 = ((function (categories,___$1){
return (function __GT_t139740(p1__139729_SHARP___$1,categories__$1,state__$1,___$2,meta139738__$1,owner__$2,app__$2,category_select__$2,meta139741){return (new expenses.core.t139740(p1__139729_SHARP___$1,categories__$1,state__$1,___$2,meta139738__$1,owner__$2,app__$2,category_select__$2,meta139741));
});})(categories,___$1))
;
}
return (new expenses.core.t139740(p1__139729_SHARP_,categories,state,___$1,self__.meta139738,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__139730_SHARP_){return cljs.core.assoc.call(null,p1__139730_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t139737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139739){var self__ = this;
var _139739__$1 = this;return self__.meta139738;
});
expenses.core.t139737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139739,meta139738__$1){var self__ = this;
var _139739__$1 = this;return (new expenses.core.t139737(self__.owner,self__.app,self__.category_select,meta139738__$1));
});
expenses.core.__GT_t139737 = (function __GT_t139737(owner__$1,app__$1,category_select__$1,meta139738){return (new expenses.core.t139737(owner__$1,app__$1,category_select__$1,meta139738));
});
}
return (new expenses.core.t139737(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t139747 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139747 = (function (owner,app,amount_enter,meta139748){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta139748 = meta139748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139747.cljs$lang$type = true;
expenses.core.t139747.cljs$lang$ctorStr = "expenses.core/t139747";
expenses.core.t139747.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139747");
});
expenses.core.t139747.prototype.om$core$IRenderState$ = true;
expenses.core.t139747.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),React.DOM.h4({"className": "pure-u-1"},new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state).toUpperCase()),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "autoFocus": true, "type": "number", "ref": "amount-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"amount-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"amount","amount",364489504),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__139743_SHARP_){return cljs.core.assoc.call(null,p1__139743_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t139747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139749){var self__ = this;
var _139749__$1 = this;return self__.meta139748;
});
expenses.core.t139747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139749,meta139748__$1){var self__ = this;
var _139749__$1 = this;return (new expenses.core.t139747(self__.owner,self__.app,self__.amount_enter,meta139748__$1));
});
expenses.core.__GT_t139747 = (function __GT_t139747(owner__$1,app__$1,amount_enter__$1,meta139748){return (new expenses.core.t139747(owner__$1,app__$1,amount_enter__$1,meta139748));
});
}
return (new expenses.core.t139747(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t139754 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139754 = (function (owner,app,note_enter,meta139755){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta139755 = meta139755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139754.cljs$lang$type = true;
expenses.core.t139754.cljs$lang$ctorStr = "expenses.core/t139754";
expenses.core.t139754.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139754");
});
expenses.core.t139754.prototype.om$core$IRenderState$ = true;
expenses.core.t139754.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),React.DOM.h4({"className": "pure-u-1"},new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state).toUpperCase()),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),React.DOM.h4({"className": "pure-u-1"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state))+"\u5186")),React.DOM.h3({"className": "pure-u-1"},"NOTE"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "autoFocus": true, "type": "text", "ref": "note-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"note-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"note","note",1426297904),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__139750_SHARP_){return cljs.core.assoc.call(null,p1__139750_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t139754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139756){var self__ = this;
var _139756__$1 = this;return self__.meta139755;
});
expenses.core.t139754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139756,meta139755__$1){var self__ = this;
var _139756__$1 = this;return (new expenses.core.t139754(self__.owner,self__.app,self__.note_enter,meta139755__$1));
});
expenses.core.__GT_t139754 = (function __GT_t139754(owner__$1,app__$1,note_enter__$1,meta139755){return (new expenses.core.t139754(owner__$1,app__$1,note_enter__$1,meta139755));
});
}
return (new expenses.core.t139754(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t139839 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139839 = (function (owner,app,add_component,meta139840){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta139840 = meta139840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139839.cljs$lang$type = true;
expenses.core.t139839.cljs$lang$ctorStr = "expenses.core/t139839";
expenses.core.t139839.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139839");
});
expenses.core.t139839.prototype.om$core$IRenderState$ = true;
expenses.core.t139839.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__139842 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__139842) {
case "note":
return expenses.core.note_enter;

break;
case "amount":
return expenses.core.amount_enter;

break;
default:
return expenses.core.category_select;

}
})(),self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null));
});
expenses.core.t139839.prototype.om$core$IInitState$ = true;
expenses.core.t139839.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___139918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___139918,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___139918,add_chan,___$1){
return (function (state_139887){var state_val_139888 = (state_139887[(1)]);if((state_val_139888 === (7)))
{var inst_139882 = (state_139887[(2)]);var state_139887__$1 = (function (){var statearr_139889 = state_139887;(statearr_139889[(7)] = inst_139882);
return statearr_139889;
})();var statearr_139890_139919 = state_139887__$1;(statearr_139890_139919[(2)] = null);
(statearr_139890_139919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (1)))
{var state_139887__$1 = state_139887;var statearr_139891_139920 = state_139887__$1;(statearr_139891_139920[(2)] = null);
(statearr_139891_139920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (4)))
{var inst_139845 = (state_139887[(8)]);var inst_139845__$1 = (state_139887[(2)]);var inst_139846 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_139845__$1);var state_139887__$1 = (function (){var statearr_139892 = state_139887;(statearr_139892[(8)] = inst_139845__$1);
return statearr_139892;
})();if(cljs.core.truth_(inst_139846))
{var statearr_139893_139921 = state_139887__$1;(statearr_139893_139921[(1)] = (5));
} else
{var statearr_139894_139922 = state_139887__$1;(statearr_139894_139922[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (15)))
{var state_139887__$1 = state_139887;var statearr_139895_139923 = state_139887__$1;(statearr_139895_139923[(2)] = null);
(statearr_139895_139923[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (13)))
{var inst_139878 = (state_139887[(2)]);var state_139887__$1 = state_139887;var statearr_139896_139924 = state_139887__$1;(statearr_139896_139924[(2)] = inst_139878);
(statearr_139896_139924[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (6)))
{var inst_139845 = (state_139887[(8)]);var inst_139851 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_139845);var state_139887__$1 = state_139887;if(cljs.core.truth_(inst_139851))
{var statearr_139897_139925 = state_139887__$1;(statearr_139897_139925[(1)] = (8));
} else
{var statearr_139898_139926 = state_139887__$1;(statearr_139898_139926[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (3)))
{var inst_139885 = (state_139887[(2)]);var state_139887__$1 = state_139887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139887__$1,inst_139885);
} else
{if((state_val_139888 === (12)))
{var state_139887__$1 = state_139887;var statearr_139899_139927 = state_139887__$1;(statearr_139899_139927[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (2)))
{var state_139887__$1 = state_139887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_139887__$1,(4),add_chan);
} else
{if((state_val_139888 === (11)))
{var inst_139845 = (state_139887[(8)]);var inst_139858 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_139859 = (new Date());var inst_139860 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_139861 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_139862 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_139845);var inst_139863 = [inst_139859,inst_139860,inst_139861,inst_139862];var inst_139864 = cljs.core.PersistentHashMap.fromArrays(inst_139858,inst_139863);var inst_139865 = om.core.get_shared.call(null,self__.owner);var inst_139866 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_139865);var inst_139867 = expenses.core.put_expense.call(null,inst_139866,inst_139864);var inst_139868 = (function (){var new_expense = inst_139864;var v = inst_139845;return ((function (new_expense,v,inst_139845,inst_139858,inst_139859,inst_139860,inst_139861,inst_139862,inst_139863,inst_139864,inst_139865,inst_139866,inst_139867,state_val_139888,c__17814__auto___139918,add_chan,___$1){
return (function (p1__139759_SHARP_){return cljs.core.assoc.call(null,p1__139759_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_139845,inst_139858,inst_139859,inst_139860,inst_139861,inst_139862,inst_139863,inst_139864,inst_139865,inst_139866,inst_139867,state_val_139888,c__17814__auto___139918,add_chan,___$1))
})();var inst_139869 = om.core.transact_BANG_.call(null,self__.app,inst_139868);var state_139887__$1 = (function (){var statearr_139901 = state_139887;(statearr_139901[(9)] = inst_139867);
return statearr_139901;
})();var statearr_139902_139928 = state_139887__$1;(statearr_139902_139928[(2)] = inst_139869);
(statearr_139902_139928[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (9)))
{var inst_139845 = (state_139887[(8)]);var inst_139856 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_139845);var state_139887__$1 = state_139887;if(cljs.core.truth_(inst_139856))
{var statearr_139903_139929 = state_139887__$1;(statearr_139903_139929[(1)] = (11));
} else
{var statearr_139904_139930 = state_139887__$1;(statearr_139904_139930[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (5)))
{var inst_139845 = (state_139887[(8)]);var inst_139848 = (function (){var v = inst_139845;return ((function (v,inst_139845,state_val_139888,c__17814__auto___139918,add_chan,___$1){
return (function (p1__139757_SHARP_){return cljs.core.assoc.call(null,p1__139757_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_139845,state_val_139888,c__17814__auto___139918,add_chan,___$1))
})();var inst_139849 = om.core.update_state_BANG_.call(null,self__.owner,inst_139848);var state_139887__$1 = state_139887;var statearr_139905_139931 = state_139887__$1;(statearr_139905_139931[(2)] = inst_139849);
(statearr_139905_139931[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (14)))
{var inst_139845 = (state_139887[(8)]);var inst_139872 = (function (){var v = inst_139845;return ((function (v,inst_139845,state_val_139888,c__17814__auto___139918,add_chan,___$1){
return (function (p1__139760_SHARP_){return cljs.core.assoc.call(null,p1__139760_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_139845,state_val_139888,c__17814__auto___139918,add_chan,___$1))
})();var inst_139873 = om.core.transact_BANG_.call(null,self__.app,inst_139872);var state_139887__$1 = state_139887;var statearr_139906_139932 = state_139887__$1;(statearr_139906_139932[(2)] = inst_139873);
(statearr_139906_139932[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (16)))
{var inst_139876 = (state_139887[(2)]);var state_139887__$1 = state_139887;var statearr_139907_139933 = state_139887__$1;(statearr_139907_139933[(2)] = inst_139876);
(statearr_139907_139933[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (10)))
{var inst_139880 = (state_139887[(2)]);var state_139887__$1 = state_139887;var statearr_139908_139934 = state_139887__$1;(statearr_139908_139934[(2)] = inst_139880);
(statearr_139908_139934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_139888 === (8)))
{var inst_139845 = (state_139887[(8)]);var inst_139853 = (function (){var v = inst_139845;return ((function (v,inst_139845,state_val_139888,c__17814__auto___139918,add_chan,___$1){
return (function (p1__139758_SHARP_){return cljs.core.assoc.call(null,p1__139758_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_139845,state_val_139888,c__17814__auto___139918,add_chan,___$1))
})();var inst_139854 = om.core.update_state_BANG_.call(null,self__.owner,inst_139853);var state_139887__$1 = state_139887;var statearr_139909_139935 = state_139887__$1;(statearr_139909_139935[(2)] = inst_139854);
(statearr_139909_139935[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17814__auto___139918,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___139918,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_139913 = [null,null,null,null,null,null,null,null,null,null];(statearr_139913[(0)] = state_machine__17800__auto__);
(statearr_139913[(1)] = (1));
return statearr_139913;
});
var state_machine__17800__auto____1 = (function (state_139887){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_139887);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e139914){if((e139914 instanceof Object))
{var ex__17803__auto__ = e139914;var statearr_139915_139936 = state_139887;(statearr_139915_139936[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e139914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__139937 = state_139887;
state_139887 = G__139937;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_139887){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_139887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___139918,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_139916 = f__17815__auto__.call(null);(statearr_139916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___139918);
return statearr_139916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___139918,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t139839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139841){var self__ = this;
var _139841__$1 = this;return self__.meta139840;
});
expenses.core.t139839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139841,meta139840__$1){var self__ = this;
var _139841__$1 = this;return (new expenses.core.t139839(self__.owner,self__.app,self__.add_component,meta139840__$1));
});
expenses.core.__GT_t139839 = (function __GT_t139839(owner__$1,app__$1,add_component__$1,meta139840){return (new expenses.core.t139839(owner__$1,app__$1,add_component__$1,meta139840));
});
}
return (new expenses.core.t139839(owner,app,add_component,null));
});
expenses.core.edit_component = (function edit_component(app,owner){if(typeof expenses.core.t139946 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139946 = (function (owner,app,edit_component,meta139947){
this.owner = owner;
this.app = app;
this.edit_component = edit_component;
this.meta139947 = meta139947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139946.cljs$lang$type = true;
expenses.core.t139946.cljs$lang$ctorStr = "expenses.core/t139946";
expenses.core.t139946.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139946");
});
expenses.core.t139946.prototype.om$core$IRenderState$ = true;
expenses.core.t139946.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.form({"className": "pure-form"},React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__139938_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__139938_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "category-input"}),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__139939_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),p1__139939_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "number", "ref": "amount-input"}),React.DOM.h3({"className": "pure-u-1"},"NOTE"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__139940_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904)], null),p1__139940_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "note-input"}),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
item.update(cljs.core.clj__GT_js.call(null,state));
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__139941_SHARP_){return cljs.core.assoc.call(null,p1__139941_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"})),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__139942_SHARP_){return cljs.core.assoc.call(null,p1__139942_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t139946.prototype.om$core$IInitState$ = true;
expenses.core.t139946.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),item.get("category"),new cljs.core.Keyword(null,"amount","amount",364489504),item.get("amount"),new cljs.core.Keyword(null,"note","note",1426297904),item.get("note")], null);
});
expenses.core.t139946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139948){var self__ = this;
var _139948__$1 = this;return self__.meta139947;
});
expenses.core.t139946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139948,meta139947__$1){var self__ = this;
var _139948__$1 = this;return (new expenses.core.t139946(self__.owner,self__.app,self__.edit_component,meta139947__$1));
});
expenses.core.__GT_t139946 = (function __GT_t139946(owner__$1,app__$1,edit_component__$1,meta139947){return (new expenses.core.t139946(owner__$1,app__$1,edit_component__$1,meta139947));
});
}
return (new expenses.core.t139946(owner,app,edit_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t139952 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139952 = (function (owner,app,error_component,meta139953){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta139953 = meta139953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139952.cljs$lang$type = true;
expenses.core.t139952.cljs$lang$ctorStr = "expenses.core/t139952";
expenses.core.t139952.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139952");
});
expenses.core.t139952.prototype.om$core$IRender$ = true;
expenses.core.t139952.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t139952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139954){var self__ = this;
var _139954__$1 = this;return self__.meta139953;
});
expenses.core.t139952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139954,meta139953__$1){var self__ = this;
var _139954__$1 = this;return (new expenses.core.t139952(self__.owner,self__.app,self__.error_component,meta139953__$1));
});
expenses.core.__GT_t139952 = (function __GT_t139952(owner__$1,app__$1,error_component__$1,meta139953){return (new expenses.core.t139952(owner__$1,app__$1,error_component__$1,meta139953));
});
}
return (new expenses.core.t139952(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__139955_SHARP_){return cljs.core.assoc.call(null,p1__139955_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t139970 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t139970 = (function (owner,app,loading,meta139971){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta139971 = meta139971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t139970.cljs$lang$type = true;
expenses.core.t139970.cljs$lang$ctorStr = "expenses.core/t139970";
expenses.core.t139970.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t139970");
});
expenses.core.t139970.prototype.om$core$IRender$ = true;
expenses.core.t139970.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t139970.prototype.om$core$IWillMount$ = true;
expenses.core.t139970.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_139975){var state_val_139976 = (state_139975[(1)]);if((state_val_139976 === (1)))
{var inst_139973 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_139975__$1 = state_139975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_139975__$1,inst_139973);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_139980 = [null,null,null,null,null,null,null];(statearr_139980[(0)] = state_machine__17800__auto__);
(statearr_139980[(1)] = (1));
return statearr_139980;
});
var state_machine__17800__auto____1 = (function (state_139975){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_139975);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e139981){if((e139981 instanceof Object))
{var ex__17803__auto__ = e139981;var statearr_139982_139984 = state_139975;(statearr_139982_139984[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_139975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e139981;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__139985 = state_139975;
state_139975 = G__139985;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_139975){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_139975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_139983 = f__17815__auto__.call(null);(statearr_139983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_139983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t139970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_139972){var self__ = this;
var _139972__$1 = this;return self__.meta139971;
});
expenses.core.t139970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_139972,meta139971__$1){var self__ = this;
var _139972__$1 = this;return (new expenses.core.t139970(self__.owner,self__.app,self__.loading,meta139971__$1));
});
expenses.core.__GT_t139970 = (function __GT_t139970(owner__$1,app__$1,loading__$1,meta139971){return (new expenses.core.t139970(owner__$1,app__$1,loading__$1,meta139971));
});
}
return (new expenses.core.t139970(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t140042 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t140042 = (function (owner,app,dispatch_component,meta140043){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta140043 = meta140043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t140042.cljs$lang$type = true;
expenses.core.t140042.cljs$lang$ctorStr = "expenses.core/t140042";
expenses.core.t140042.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t140042");
});
expenses.core.t140042.prototype.om$core$IRender$ = true;
expenses.core.t140042.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__139988_SHARP_){return cljs.core.assoc.call(null,p1__139988_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__140045 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__140045) {
case "error":
return expenses.core.error_component;

break;
case "edit":
return expenses.core.edit_component;

break;
case "add":
return expenses.core.add_component;

break;
case "main":
return expenses.core.main_component;

break;
default:
return expenses.core.loading;

}
})(),self__.app));
});
expenses.core.t140042.prototype.om$core$IWillMount$ = true;
expenses.core.t140042.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_140073){var state_val_140074 = (state_140073[(1)]);if((state_val_140074 === (7)))
{var inst_140068 = (state_140073[(2)]);var state_140073__$1 = (function (){var statearr_140075 = state_140073;(statearr_140075[(7)] = inst_140068);
return statearr_140075;
})();var statearr_140076_140096 = state_140073__$1;(statearr_140076_140096[(2)] = null);
(statearr_140076_140096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140074 === (1)))
{var state_140073__$1 = state_140073;var statearr_140077_140097 = state_140073__$1;(statearr_140077_140097[(2)] = null);
(statearr_140077_140097[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140074 === (4)))
{var inst_140050 = (state_140073[(8)]);var inst_140050__$1 = (state_140073[(2)]);var inst_140051 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_140050__$1);var inst_140052 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_140051);var state_140073__$1 = (function (){var statearr_140078 = state_140073;(statearr_140078[(8)] = inst_140050__$1);
return statearr_140078;
})();if(inst_140052)
{var statearr_140079_140098 = state_140073__$1;(statearr_140079_140098[(1)] = (5));
} else
{var statearr_140080_140099 = state_140073__$1;(statearr_140080_140099[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140074 === (6)))
{var inst_140050 = (state_140073[(8)]);var inst_140057 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_140050);var inst_140058 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_140057);var state_140073__$1 = state_140073;if(inst_140058)
{var statearr_140081_140100 = state_140073__$1;(statearr_140081_140100[(1)] = (8));
} else
{var statearr_140082_140101 = state_140073__$1;(statearr_140082_140101[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140074 === (3)))
{var inst_140071 = (state_140073[(2)]);var state_140073__$1 = state_140073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140073__$1,inst_140071);
} else
{if((state_val_140074 === (2)))
{var inst_140047 = om.core.get_shared.call(null,self__.owner);var inst_140048 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_140047);var state_140073__$1 = state_140073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140073__$1,(4),inst_140048);
} else
{if((state_val_140074 === (9)))
{var state_140073__$1 = state_140073;var statearr_140083_140102 = state_140073__$1;(statearr_140083_140102[(2)] = null);
(statearr_140083_140102[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140074 === (5)))
{var inst_140050 = (state_140073[(8)]);var inst_140054 = (function (){var ev = inst_140050;return ((function (ev,inst_140050,state_val_140074,c__17814__auto__,___$1){
return (function (p1__139986_SHARP_){return cljs.core.assoc.call(null,p1__139986_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_140050,state_val_140074,c__17814__auto__,___$1))
})();var inst_140055 = om.core.transact_BANG_.call(null,self__.app,inst_140054);var state_140073__$1 = state_140073;var statearr_140084_140103 = state_140073__$1;(statearr_140084_140103[(2)] = inst_140055);
(statearr_140084_140103[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140074 === (10)))
{var inst_140066 = (state_140073[(2)]);var state_140073__$1 = state_140073;var statearr_140085_140104 = state_140073__$1;(statearr_140085_140104[(2)] = inst_140066);
(statearr_140085_140104[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140074 === (8)))
{var inst_140050 = (state_140073[(8)]);var inst_140060 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_140050);var inst_140061 = inst_140060.deleteRecord();var inst_140062 = (function (){var ev = inst_140050;return ((function (ev,inst_140050,inst_140060,inst_140061,state_val_140074,c__17814__auto__,___$1){
return (function (p1__139987_SHARP_){return cljs.core.assoc.call(null,p1__139987_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_140050,inst_140060,inst_140061,state_val_140074,c__17814__auto__,___$1))
})();var inst_140063 = om.core.transact_BANG_.call(null,self__.app,inst_140062);var state_140073__$1 = (function (){var statearr_140086 = state_140073;(statearr_140086[(9)] = inst_140061);
return statearr_140086;
})();var statearr_140087_140105 = state_140073__$1;(statearr_140087_140105[(2)] = inst_140063);
(statearr_140087_140105[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_140091 = [null,null,null,null,null,null,null,null,null,null];(statearr_140091[(0)] = state_machine__17800__auto__);
(statearr_140091[(1)] = (1));
return statearr_140091;
});
var state_machine__17800__auto____1 = (function (state_140073){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_140073);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e140092){if((e140092 instanceof Object))
{var ex__17803__auto__ = e140092;var statearr_140093_140106 = state_140073;(statearr_140093_140106[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e140092;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140107 = state_140073;
state_140073 = G__140107;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_140073){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_140073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_140094 = f__17815__auto__.call(null);(statearr_140094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_140094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t140042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_140044){var self__ = this;
var _140044__$1 = this;return self__.meta140043;
});
expenses.core.t140042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_140044,meta140043__$1){var self__ = this;
var _140044__$1 = this;return (new expenses.core.t140042(self__.owner,self__.app,self__.dispatch_component,meta140043__$1));
});
expenses.core.__GT_t140042 = (function __GT_t140042(owner__$1,app__$1,dispatch_component__$1,meta140043){return (new expenses.core.t140042(owner__$1,app__$1,dispatch_component__$1,meta140043));
});
}
return (new expenses.core.t140042(owner,app,dispatch_component,null));
});
expenses.core.main = (function main(auth_err){var target = document.getElementById("layout");if(cljs.core.truth_(auth_err))
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),auth_err,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else
{var ds_manager = expenses.core.db_client.getDatastoreManager();return ds_manager.openDefaultDatastore(((function (ds_manager,target){
return (function (ds_err,ds){if(cljs.core.truth_(ds_err))
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),ds_err,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),ds.getTable("expenses"),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),cljs.core.async.chan.call(null)], null)], null));
}
});})(ds_manager,target))
);
}
});
expenses.core.db_client.authenticate(null,expenses.core.main);

//# sourceMappingURL=core.js.map