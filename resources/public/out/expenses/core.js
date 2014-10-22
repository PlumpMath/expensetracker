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
expenses.core.adj_date = (function adj_date(date,span,n){var G__160417 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__160417) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t160425 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160425 = (function (owner,app,menu_component,meta160426){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta160426 = meta160426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160425.cljs$lang$type = true;
expenses.core.t160425.cljs$lang$ctorStr = "expenses.core/t160425";
expenses.core.t160425.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160425");
});
expenses.core.t160425.prototype.om$core$IRender$ = true;
expenses.core.t160425.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__160419_SHARP_){return cljs.core.assoc.call(null,p1__160419_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"TOP")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__160420_SHARP_){return cljs.core.assoc.call(null,p1__160420_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"ADD")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__160421_SHARP_){return cljs.core.assoc.call(null,p1__160421_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"LIST"))))));
});
expenses.core.t160425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160427){var self__ = this;
var _160427__$1 = this;return self__.meta160426;
});
expenses.core.t160425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160427,meta160426__$1){var self__ = this;
var _160427__$1 = this;return (new expenses.core.t160425(self__.owner,self__.app,self__.menu_component,meta160426__$1));
});
expenses.core.__GT_t160425 = (function __GT_t160425(owner__$1,app__$1,menu_component__$1,meta160426){return (new expenses.core.t160425(owner__$1,app__$1,menu_component__$1,meta160426));
});
}
return (new expenses.core.t160425(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t160433 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160433 = (function (owner,app,buttons_component,meta160434){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta160434 = meta160434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160433.cljs$lang$type = true;
expenses.core.t160433.cljs$lang$ctorStr = "expenses.core/t160433";
expenses.core.t160433.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160433");
});
expenses.core.t160433.prototype.om$core$IRenderState$ = true;
expenses.core.t160433.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__160436){var self__ = this;
var map__160437 = p__160436;var map__160437__$1 = ((cljs.core.seq_QMARK_.call(null,map__160437))?cljs.core.apply.call(null,cljs.core.hash_map,map__160437):map__160437);var current_focus_date = cljs.core.get.call(null,map__160437__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__160437__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__160437__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_focus_date);
});})(___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__160437,map__160437__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t160433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160435){var self__ = this;
var _160435__$1 = this;return self__.meta160434;
});
expenses.core.t160433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160435,meta160434__$1){var self__ = this;
var _160435__$1 = this;return (new expenses.core.t160433(self__.owner,self__.app,self__.buttons_component,meta160434__$1));
});
expenses.core.__GT_t160433 = (function __GT_t160433(owner__$1,app__$1,buttons_component__$1,meta160434){return (new expenses.core.t160433(owner__$1,app__$1,buttons_component__$1,meta160434));
});
}
return (new expenses.core.t160433(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t160442 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160442 = (function (owner,items,total_component,meta160443){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta160443 = meta160443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160442.cljs$lang$type = true;
expenses.core.t160442.cljs$lang$ctorStr = "expenses.core/t160442";
expenses.core.t160442.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160442");
});
expenses.core.t160442.prototype.om$core$IRender$ = true;
expenses.core.t160442.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__160438_SHARP_){return p1__160438_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t160442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160444){var self__ = this;
var _160444__$1 = this;return self__.meta160443;
});
expenses.core.t160442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160444,meta160443__$1){var self__ = this;
var _160444__$1 = this;return (new expenses.core.t160442(self__.owner,self__.items,self__.total_component,meta160443__$1));
});
expenses.core.__GT_t160442 = (function __GT_t160442(owner__$1,items__$1,total_component__$1,meta160443){return (new expenses.core.t160442(owner__$1,items__$1,total_component__$1,meta160443));
});
}
return (new expenses.core.t160442(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__160445_SHARP_){return p1__160445_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.touch_end_check = (function touch_end_check(e,owner,state){var touch_end = (e.changedTouches[(0)]);if(cljs.core.truth_(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__160446_SHARP_){return cljs.core.assoc.call(null,p1__160446_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{if(cljs.core.truth_((function (){var and__11373__auto__ = new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(and__11373__auto__))
{return (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (touch_end.pageX - new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX)));
} else
{return and__11373__auto__;
}
})()))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__160447_SHARP_){return cljs.core.assoc.call(null,p1__160447_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{return null;
}
}
} else
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__160448_SHARP_){return cljs.core.assoc.call(null,p1__160448_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
}
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t160454 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160454 = (function (owner,item,expense_list_item,meta160455){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta160455 = meta160455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160454.cljs$lang$type = true;
expenses.core.t160454.cljs$lang$ctorStr = "expenses.core/t160454";
expenses.core.t160454.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160454");
});
expenses.core.t160454.prototype.om$core$IRenderState$ = true;
expenses.core.t160454.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onTouchEnd": ((function (___$1){
return (function (e){return expenses.core.touch_end_check.call(null,e,self__.owner,state);
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__160449_SHARP_){return cljs.core.assoc.call(null,p1__160449_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__160450_SHARP_){return cljs.core.assoc.call(null,p1__160450_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.core.t160454.prototype.om$core$IInitState$ = true;
expenses.core.t160454.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t160454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160456){var self__ = this;
var _160456__$1 = this;return self__.meta160455;
});
expenses.core.t160454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160456,meta160455__$1){var self__ = this;
var _160456__$1 = this;return (new expenses.core.t160454(self__.owner,self__.item,self__.expense_list_item,meta160455__$1));
});
expenses.core.__GT_t160454 = (function __GT_t160454(owner__$1,item__$1,expense_list_item__$1,meta160455){return (new expenses.core.t160454(owner__$1,item__$1,expense_list_item__$1,meta160455));
});
}
return (new expenses.core.t160454(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t160460 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160460 = (function (owner,items,expense_list_component,meta160461){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta160461 = meta160461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160460.cljs$lang$type = true;
expenses.core.t160460.cljs$lang$ctorStr = "expenses.core/t160460";
expenses.core.t160460.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160460");
});
expenses.core.t160460.prototype.om$core$IRender$ = true;
expenses.core.t160460.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t160460.prototype.om$core$IInitState$ = true;
expenses.core.t160460.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t160460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160462){var self__ = this;
var _160462__$1 = this;return self__.meta160461;
});
expenses.core.t160460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160462,meta160461__$1){var self__ = this;
var _160462__$1 = this;return (new expenses.core.t160460(self__.owner,self__.items,self__.expense_list_component,meta160461__$1));
});
expenses.core.__GT_t160460 = (function __GT_t160460(owner__$1,items__$1,expense_list_component__$1,meta160461){return (new expenses.core.t160460(owner__$1,items__$1,expense_list_component__$1,meta160461));
});
}
return (new expenses.core.t160460(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__160464,f_date,items){var map__160469 = p__160464;var map__160469__$1 = ((cljs.core.seq_QMARK_.call(null,map__160469))?cljs.core.apply.call(null,cljs.core.hash_map,map__160469):map__160469);var category = cljs.core.get.call(null,map__160469__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__160469__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__160469,map__160469__$1,category,span){
return (function (p1__160463_SHARP_){var and__11373__auto__ = (function (){var G__160471 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__160471) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__160463_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__160463_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__160463_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__160472 = category;if(cljs.core._EQ_.call(null,null,G__160472))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__160463_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__160469,map__160469__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t160501 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160501 = (function (owner,app,main_component,meta160502){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta160502 = meta160502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160501.cljs$lang$type = true;
expenses.core.t160501.cljs$lang$ctorStr = "expenses.core/t160501";
expenses.core.t160501.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160501");
});
expenses.core.t160501.prototype.om$core$IRenderState$ = true;
expenses.core.t160501.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__160504){var self__ = this;
var map__160505 = p__160504;var map__160505__$1 = ((cljs.core.seq_QMARK_.call(null,map__160505))?cljs.core.apply.call(null,cljs.core.hash_map,map__160505):map__160505);var current_focus_date = cljs.core.get.call(null,map__160505__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__160505__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__160505__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__160505,map__160505__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__160505,map__160505__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t160501.prototype.om$core$IInitState$ = true;
expenses.core.t160501.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (cljs.core.truth_(new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app):(new Date()));var c__17814__auto___160527 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___160527,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___160527,focus_chan,now,___$1){
return (function (state_160515){var state_val_160516 = (state_160515[(1)]);if((state_val_160516 === (4)))
{var inst_160508 = (state_160515[(2)]);var inst_160509 = (function (){var new_focus = inst_160508;return ((function (new_focus,inst_160508,state_val_160516,c__17814__auto___160527,focus_chan,now,___$1){
return (function (p1__160474_SHARP_){return cljs.core.merge.call(null,p1__160474_SHARP_,new_focus);
});
;})(new_focus,inst_160508,state_val_160516,c__17814__auto___160527,focus_chan,now,___$1))
})();var inst_160510 = om.core.update_state_BANG_.call(null,self__.owner,inst_160509);var state_160515__$1 = (function (){var statearr_160517 = state_160515;(statearr_160517[(7)] = inst_160510);
return statearr_160517;
})();var statearr_160518_160528 = state_160515__$1;(statearr_160518_160528[(2)] = null);
(statearr_160518_160528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160516 === (3)))
{var inst_160513 = (state_160515[(2)]);var state_160515__$1 = state_160515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160515__$1,inst_160513);
} else
{if((state_val_160516 === (2)))
{var state_160515__$1 = state_160515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160515__$1,(4),focus_chan);
} else
{if((state_val_160516 === (1)))
{var state_160515__$1 = state_160515;var statearr_160519_160529 = state_160515__$1;(statearr_160519_160529[(2)] = null);
(statearr_160519_160529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___160527,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___160527,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_160523 = [null,null,null,null,null,null,null,null];(statearr_160523[(0)] = state_machine__17800__auto__);
(statearr_160523[(1)] = (1));
return statearr_160523;
});
var state_machine__17800__auto____1 = (function (state_160515){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_160515);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e160524){if((e160524 instanceof Object))
{var ex__17803__auto__ = e160524;var statearr_160525_160530 = state_160515;(statearr_160525_160530[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e160524;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__160531 = state_160515;
state_160515 = G__160531;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_160515){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_160515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___160527,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_160526 = f__17815__auto__.call(null);(statearr_160526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___160527);
return statearr_160526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___160527,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t160501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160503){var self__ = this;
var _160503__$1 = this;return self__.meta160502;
});
expenses.core.t160501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160503,meta160502__$1){var self__ = this;
var _160503__$1 = this;return (new expenses.core.t160501(self__.owner,self__.app,self__.main_component,meta160502__$1));
});
expenses.core.__GT_t160501 = (function __GT_t160501(owner__$1,app__$1,main_component__$1,meta160502){return (new expenses.core.t160501(owner__$1,app__$1,main_component__$1,meta160502));
});
}
return (new expenses.core.t160501(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t160541 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160541 = (function (owner,app,category_select,meta160542){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta160542 = meta160542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160541.cljs$lang$type = true;
expenses.core.t160541.cljs$lang$ctorStr = "expenses.core/t160541";
expenses.core.t160541.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160541");
});
expenses.core.t160541.prototype.om$core$IRenderState$ = true;
expenses.core.t160541.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.distinct.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__160532_SHARP_){return p1__160532_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__160533_SHARP_){if(typeof expenses.core.t160544 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160544 = (function (p1__160533_SHARP_,categories,state,_,meta160542,owner,app,category_select,meta160545){
this.p1__160533_SHARP_ = p1__160533_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta160542 = meta160542;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta160545 = meta160545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160544.cljs$lang$type = true;
expenses.core.t160544.cljs$lang$ctorStr = "expenses.core/t160544";
expenses.core.t160544.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160544");
});})(categories,___$1))
;
expenses.core.t160544.prototype.om$core$IRender$ = true;
expenses.core.t160544.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__160533_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__160533_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t160544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_160546){var self__ = this;
var _160546__$1 = this;return self__.meta160545;
});})(categories,___$1))
;
expenses.core.t160544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_160546,meta160545__$1){var self__ = this;
var _160546__$1 = this;return (new expenses.core.t160544(self__.p1__160533_SHARP_,self__.categories,self__.state,self__._,self__.meta160542,self__.owner,self__.app,self__.category_select,meta160545__$1));
});})(categories,___$1))
;
expenses.core.__GT_t160544 = ((function (categories,___$1){
return (function __GT_t160544(p1__160533_SHARP___$1,categories__$1,state__$1,___$2,meta160542__$1,owner__$2,app__$2,category_select__$2,meta160545){return (new expenses.core.t160544(p1__160533_SHARP___$1,categories__$1,state__$1,___$2,meta160542__$1,owner__$2,app__$2,category_select__$2,meta160545));
});})(categories,___$1))
;
}
return (new expenses.core.t160544(p1__160533_SHARP_,categories,state,___$1,self__.meta160542,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__160534_SHARP_){return cljs.core.assoc.call(null,p1__160534_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t160541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160543){var self__ = this;
var _160543__$1 = this;return self__.meta160542;
});
expenses.core.t160541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160543,meta160542__$1){var self__ = this;
var _160543__$1 = this;return (new expenses.core.t160541(self__.owner,self__.app,self__.category_select,meta160542__$1));
});
expenses.core.__GT_t160541 = (function __GT_t160541(owner__$1,app__$1,category_select__$1,meta160542){return (new expenses.core.t160541(owner__$1,app__$1,category_select__$1,meta160542));
});
}
return (new expenses.core.t160541(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t160551 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160551 = (function (owner,app,amount_enter,meta160552){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta160552 = meta160552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160551.cljs$lang$type = true;
expenses.core.t160551.cljs$lang$ctorStr = "expenses.core/t160551";
expenses.core.t160551.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160551");
});
expenses.core.t160551.prototype.om$core$IRenderState$ = true;
expenses.core.t160551.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__160547_SHARP_){return cljs.core.assoc.call(null,p1__160547_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t160551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160553){var self__ = this;
var _160553__$1 = this;return self__.meta160552;
});
expenses.core.t160551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160553,meta160552__$1){var self__ = this;
var _160553__$1 = this;return (new expenses.core.t160551(self__.owner,self__.app,self__.amount_enter,meta160552__$1));
});
expenses.core.__GT_t160551 = (function __GT_t160551(owner__$1,app__$1,amount_enter__$1,meta160552){return (new expenses.core.t160551(owner__$1,app__$1,amount_enter__$1,meta160552));
});
}
return (new expenses.core.t160551(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t160558 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160558 = (function (owner,app,note_enter,meta160559){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta160559 = meta160559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160558.cljs$lang$type = true;
expenses.core.t160558.cljs$lang$ctorStr = "expenses.core/t160558";
expenses.core.t160558.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160558");
});
expenses.core.t160558.prototype.om$core$IRenderState$ = true;
expenses.core.t160558.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__160554_SHARP_){return cljs.core.assoc.call(null,p1__160554_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t160558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160560){var self__ = this;
var _160560__$1 = this;return self__.meta160559;
});
expenses.core.t160558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160560,meta160559__$1){var self__ = this;
var _160560__$1 = this;return (new expenses.core.t160558(self__.owner,self__.app,self__.note_enter,meta160559__$1));
});
expenses.core.__GT_t160558 = (function __GT_t160558(owner__$1,app__$1,note_enter__$1,meta160559){return (new expenses.core.t160558(owner__$1,app__$1,note_enter__$1,meta160559));
});
}
return (new expenses.core.t160558(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t160644 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160644 = (function (owner,app,add_component,meta160645){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta160645 = meta160645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160644.cljs$lang$type = true;
expenses.core.t160644.cljs$lang$ctorStr = "expenses.core/t160644";
expenses.core.t160644.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160644");
});
expenses.core.t160644.prototype.om$core$IRenderState$ = true;
expenses.core.t160644.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__160647 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__160647) {
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
expenses.core.t160644.prototype.om$core$IInitState$ = true;
expenses.core.t160644.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___160724 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___160724,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___160724,add_chan,___$1){
return (function (state_160693){var state_val_160694 = (state_160693[(1)]);if((state_val_160694 === (7)))
{var inst_160688 = (state_160693[(2)]);var state_160693__$1 = (function (){var statearr_160695 = state_160693;(statearr_160695[(7)] = inst_160688);
return statearr_160695;
})();var statearr_160696_160725 = state_160693__$1;(statearr_160696_160725[(2)] = null);
(statearr_160696_160725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (1)))
{var state_160693__$1 = state_160693;var statearr_160697_160726 = state_160693__$1;(statearr_160697_160726[(2)] = null);
(statearr_160697_160726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (4)))
{var inst_160650 = (state_160693[(8)]);var inst_160650__$1 = (state_160693[(2)]);var inst_160651 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_160650__$1);var state_160693__$1 = (function (){var statearr_160698 = state_160693;(statearr_160698[(8)] = inst_160650__$1);
return statearr_160698;
})();if(cljs.core.truth_(inst_160651))
{var statearr_160699_160727 = state_160693__$1;(statearr_160699_160727[(1)] = (5));
} else
{var statearr_160700_160728 = state_160693__$1;(statearr_160700_160728[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (15)))
{var state_160693__$1 = state_160693;var statearr_160701_160729 = state_160693__$1;(statearr_160701_160729[(2)] = null);
(statearr_160701_160729[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (13)))
{var inst_160684 = (state_160693[(2)]);var state_160693__$1 = state_160693;var statearr_160702_160730 = state_160693__$1;(statearr_160702_160730[(2)] = inst_160684);
(statearr_160702_160730[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (6)))
{var inst_160650 = (state_160693[(8)]);var inst_160656 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_160650);var state_160693__$1 = state_160693;if(cljs.core.truth_(inst_160656))
{var statearr_160703_160731 = state_160693__$1;(statearr_160703_160731[(1)] = (8));
} else
{var statearr_160704_160732 = state_160693__$1;(statearr_160704_160732[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (3)))
{var inst_160691 = (state_160693[(2)]);var state_160693__$1 = state_160693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160693__$1,inst_160691);
} else
{if((state_val_160694 === (12)))
{var state_160693__$1 = state_160693;var statearr_160705_160733 = state_160693__$1;(statearr_160705_160733[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (2)))
{var state_160693__$1 = state_160693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160693__$1,(4),add_chan);
} else
{if((state_val_160694 === (11)))
{var inst_160650 = (state_160693[(8)]);var inst_160663 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_160664 = cljs.core.deref.call(null,self__.app);var inst_160665 = new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(inst_160664);var inst_160666 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_160667 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_160668 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_160650);var inst_160669 = [inst_160665,inst_160666,inst_160667,inst_160668];var inst_160670 = cljs.core.PersistentHashMap.fromArrays(inst_160663,inst_160669);var inst_160671 = om.core.get_shared.call(null,self__.owner);var inst_160672 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_160671);var inst_160673 = expenses.core.put_expense.call(null,inst_160672,inst_160670);var inst_160674 = (function (){var new_expense = inst_160670;var v = inst_160650;return ((function (new_expense,v,inst_160650,inst_160663,inst_160664,inst_160665,inst_160666,inst_160667,inst_160668,inst_160669,inst_160670,inst_160671,inst_160672,inst_160673,state_val_160694,c__17814__auto___160724,add_chan,___$1){
return (function (p1__160563_SHARP_){return cljs.core.assoc.call(null,p1__160563_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_160650,inst_160663,inst_160664,inst_160665,inst_160666,inst_160667,inst_160668,inst_160669,inst_160670,inst_160671,inst_160672,inst_160673,state_val_160694,c__17814__auto___160724,add_chan,___$1))
})();var inst_160675 = om.core.transact_BANG_.call(null,self__.app,inst_160674);var state_160693__$1 = (function (){var statearr_160707 = state_160693;(statearr_160707[(9)] = inst_160673);
return statearr_160707;
})();var statearr_160708_160734 = state_160693__$1;(statearr_160708_160734[(2)] = inst_160675);
(statearr_160708_160734[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (9)))
{var inst_160650 = (state_160693[(8)]);var inst_160661 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_160650);var state_160693__$1 = state_160693;if(cljs.core.truth_(inst_160661))
{var statearr_160709_160735 = state_160693__$1;(statearr_160709_160735[(1)] = (11));
} else
{var statearr_160710_160736 = state_160693__$1;(statearr_160710_160736[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (5)))
{var inst_160650 = (state_160693[(8)]);var inst_160653 = (function (){var v = inst_160650;return ((function (v,inst_160650,state_val_160694,c__17814__auto___160724,add_chan,___$1){
return (function (p1__160561_SHARP_){return cljs.core.assoc.call(null,p1__160561_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_160650,state_val_160694,c__17814__auto___160724,add_chan,___$1))
})();var inst_160654 = om.core.update_state_BANG_.call(null,self__.owner,inst_160653);var state_160693__$1 = state_160693;var statearr_160711_160737 = state_160693__$1;(statearr_160711_160737[(2)] = inst_160654);
(statearr_160711_160737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (14)))
{var inst_160650 = (state_160693[(8)]);var inst_160678 = (function (){var v = inst_160650;return ((function (v,inst_160650,state_val_160694,c__17814__auto___160724,add_chan,___$1){
return (function (p1__160564_SHARP_){return cljs.core.assoc.call(null,p1__160564_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_160650,state_val_160694,c__17814__auto___160724,add_chan,___$1))
})();var inst_160679 = om.core.transact_BANG_.call(null,self__.app,inst_160678);var state_160693__$1 = state_160693;var statearr_160712_160738 = state_160693__$1;(statearr_160712_160738[(2)] = inst_160679);
(statearr_160712_160738[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (16)))
{var inst_160682 = (state_160693[(2)]);var state_160693__$1 = state_160693;var statearr_160713_160739 = state_160693__$1;(statearr_160713_160739[(2)] = inst_160682);
(statearr_160713_160739[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (10)))
{var inst_160686 = (state_160693[(2)]);var state_160693__$1 = state_160693;var statearr_160714_160740 = state_160693__$1;(statearr_160714_160740[(2)] = inst_160686);
(statearr_160714_160740[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160694 === (8)))
{var inst_160650 = (state_160693[(8)]);var inst_160658 = (function (){var v = inst_160650;return ((function (v,inst_160650,state_val_160694,c__17814__auto___160724,add_chan,___$1){
return (function (p1__160562_SHARP_){return cljs.core.assoc.call(null,p1__160562_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_160650,state_val_160694,c__17814__auto___160724,add_chan,___$1))
})();var inst_160659 = om.core.update_state_BANG_.call(null,self__.owner,inst_160658);var state_160693__$1 = state_160693;var statearr_160715_160741 = state_160693__$1;(statearr_160715_160741[(2)] = inst_160659);
(statearr_160715_160741[(1)] = (10));
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
});})(c__17814__auto___160724,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___160724,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_160719 = [null,null,null,null,null,null,null,null,null,null];(statearr_160719[(0)] = state_machine__17800__auto__);
(statearr_160719[(1)] = (1));
return statearr_160719;
});
var state_machine__17800__auto____1 = (function (state_160693){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_160693);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e160720){if((e160720 instanceof Object))
{var ex__17803__auto__ = e160720;var statearr_160721_160742 = state_160693;(statearr_160721_160742[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160693);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e160720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__160743 = state_160693;
state_160693 = G__160743;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_160693){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_160693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___160724,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_160722 = f__17815__auto__.call(null);(statearr_160722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___160724);
return statearr_160722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___160724,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t160644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160646){var self__ = this;
var _160646__$1 = this;return self__.meta160645;
});
expenses.core.t160644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160646,meta160645__$1){var self__ = this;
var _160646__$1 = this;return (new expenses.core.t160644(self__.owner,self__.app,self__.add_component,meta160645__$1));
});
expenses.core.__GT_t160644 = (function __GT_t160644(owner__$1,app__$1,add_component__$1,meta160645){return (new expenses.core.t160644(owner__$1,app__$1,add_component__$1,meta160645));
});
}
return (new expenses.core.t160644(owner,app,add_component,null));
});
expenses.core.edit_component = (function edit_component(app,owner){if(typeof expenses.core.t160752 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160752 = (function (owner,app,edit_component,meta160753){
this.owner = owner;
this.app = app;
this.edit_component = edit_component;
this.meta160753 = meta160753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160752.cljs$lang$type = true;
expenses.core.t160752.cljs$lang$ctorStr = "expenses.core/t160752";
expenses.core.t160752.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160752");
});
expenses.core.t160752.prototype.om$core$IRenderState$ = true;
expenses.core.t160752.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.form({"className": "pure-form"},React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__160744_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__160744_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "category-input"}),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__160745_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),p1__160745_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "number", "ref": "amount-input"}),React.DOM.h3({"className": "pure-u-1"},"NOTE"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__160746_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904)], null),p1__160746_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "note-input"}),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
item.update(cljs.core.clj__GT_js.call(null,state));
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__160747_SHARP_){return cljs.core.assoc.call(null,p1__160747_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"})),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__160748_SHARP_){return cljs.core.assoc.call(null,p1__160748_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t160752.prototype.om$core$IInitState$ = true;
expenses.core.t160752.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),item.get("category"),new cljs.core.Keyword(null,"amount","amount",364489504),item.get("amount"),new cljs.core.Keyword(null,"note","note",1426297904),item.get("note")], null);
});
expenses.core.t160752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160754){var self__ = this;
var _160754__$1 = this;return self__.meta160753;
});
expenses.core.t160752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160754,meta160753__$1){var self__ = this;
var _160754__$1 = this;return (new expenses.core.t160752(self__.owner,self__.app,self__.edit_component,meta160753__$1));
});
expenses.core.__GT_t160752 = (function __GT_t160752(owner__$1,app__$1,edit_component__$1,meta160753){return (new expenses.core.t160752(owner__$1,app__$1,edit_component__$1,meta160753));
});
}
return (new expenses.core.t160752(owner,app,edit_component,null));
});
expenses.core.day_item_component = (function day_item_component(item,owner){if(typeof expenses.core.t160758 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160758 = (function (owner,item,day_item_component,meta160759){
this.owner = owner;
this.item = item;
this.day_item_component = day_item_component;
this.meta160759 = meta160759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160758.cljs$lang$type = true;
expenses.core.t160758.cljs$lang$ctorStr = "expenses.core/t160758";
expenses.core.t160758.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160758");
});
expenses.core.t160758.prototype.om$core$IRender$ = true;
expenses.core.t160758.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.li({"onClick": ((function (this__14239__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item)], null));
});})(this__14239__auto____$1))
, "className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-2 list-date"},goog.string.format("%02d-%02d-%d",new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getDate(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getMonth() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getFullYear())),React.DOM.div({"style": {"text-align": "right"}, "className": "pure-u-1-2 list-total"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(self__.item))+"\u5186")));
});
expenses.core.t160758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160760){var self__ = this;
var _160760__$1 = this;return self__.meta160759;
});
expenses.core.t160758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160760,meta160759__$1){var self__ = this;
var _160760__$1 = this;return (new expenses.core.t160758(self__.owner,self__.item,self__.day_item_component,meta160759__$1));
});
expenses.core.__GT_t160758 = (function __GT_t160758(owner__$1,item__$1,day_item_component__$1,meta160759){return (new expenses.core.t160758(owner__$1,item__$1,day_item_component__$1,meta160759));
});
}
return (new expenses.core.t160758(owner,item,day_item_component,null));
});
expenses.core.days_list_component = (function days_list_component(app,owner){var days = cljs.core.map.call(null,(function (p__160768){var vec__160769 = p__160768;var k = cljs.core.nth.call(null,vec__160769,(0),null);var v = cljs.core.nth.call(null,vec__160769,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),k,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__160769,k,v){
return (function (p1__160761_SHARP_){return p1__160761_SHARP_.get("amount");
});})(vec__160769,k,v))
,v))], null);
}),cljs.core.group_by.call(null,(function (p1__160762_SHARP_){return p1__160762_SHARP_.get("date");
}),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(app)));if(typeof expenses.core.t160770 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160770 = (function (days,owner,app,days_list_component,meta160771){
this.days = days;
this.owner = owner;
this.app = app;
this.days_list_component = days_list_component;
this.meta160771 = meta160771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160770.cljs$lang$type = true;
expenses.core.t160770.cljs$lang$ctorStr = "expenses.core/t160770";
expenses.core.t160770.cljs$lang$ctorPrWriter = ((function (days){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160770");
});})(days))
;
expenses.core.t160770.prototype.om$core$IRender$ = true;
expenses.core.t160770.prototype.om$core$IRender$render$arity$1 = ((function (days){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,expenses.core.day_item_component,self__.days));
});})(days))
;
expenses.core.t160770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (days){
return (function (_160772){var self__ = this;
var _160772__$1 = this;return self__.meta160771;
});})(days))
;
expenses.core.t160770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (days){
return (function (_160772,meta160771__$1){var self__ = this;
var _160772__$1 = this;return (new expenses.core.t160770(self__.days,self__.owner,self__.app,self__.days_list_component,meta160771__$1));
});})(days))
;
expenses.core.__GT_t160770 = ((function (days){
return (function __GT_t160770(days__$1,owner__$1,app__$1,days_list_component__$1,meta160771){return (new expenses.core.t160770(days__$1,owner__$1,app__$1,days_list_component__$1,meta160771));
});})(days))
;
}
return (new expenses.core.t160770(days,owner,app,days_list_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t160776 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160776 = (function (owner,app,error_component,meta160777){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta160777 = meta160777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160776.cljs$lang$type = true;
expenses.core.t160776.cljs$lang$ctorStr = "expenses.core/t160776";
expenses.core.t160776.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160776");
});
expenses.core.t160776.prototype.om$core$IRender$ = true;
expenses.core.t160776.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t160776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160778){var self__ = this;
var _160778__$1 = this;return self__.meta160777;
});
expenses.core.t160776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160778,meta160777__$1){var self__ = this;
var _160778__$1 = this;return (new expenses.core.t160776(self__.owner,self__.app,self__.error_component,meta160777__$1));
});
expenses.core.__GT_t160776 = (function __GT_t160776(owner__$1,app__$1,error_component__$1,meta160777){return (new expenses.core.t160776(owner__$1,app__$1,error_component__$1,meta160777));
});
}
return (new expenses.core.t160776(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__160779_SHARP_){return cljs.core.assoc.call(null,p1__160779_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t160794 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160794 = (function (owner,app,loading,meta160795){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta160795 = meta160795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160794.cljs$lang$type = true;
expenses.core.t160794.cljs$lang$ctorStr = "expenses.core/t160794";
expenses.core.t160794.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160794");
});
expenses.core.t160794.prototype.om$core$IRender$ = true;
expenses.core.t160794.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t160794.prototype.om$core$IWillMount$ = true;
expenses.core.t160794.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_160799){var state_val_160800 = (state_160799[(1)]);if((state_val_160800 === (1)))
{var inst_160797 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_160799__$1 = state_160799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160799__$1,inst_160797);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_160804 = [null,null,null,null,null,null,null];(statearr_160804[(0)] = state_machine__17800__auto__);
(statearr_160804[(1)] = (1));
return statearr_160804;
});
var state_machine__17800__auto____1 = (function (state_160799){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_160799);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e160805){if((e160805 instanceof Object))
{var ex__17803__auto__ = e160805;var statearr_160806_160808 = state_160799;(statearr_160806_160808[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e160805;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__160809 = state_160799;
state_160799 = G__160809;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_160799){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_160799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_160807 = f__17815__auto__.call(null);(statearr_160807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_160807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t160794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160796){var self__ = this;
var _160796__$1 = this;return self__.meta160795;
});
expenses.core.t160794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160796,meta160795__$1){var self__ = this;
var _160796__$1 = this;return (new expenses.core.t160794(self__.owner,self__.app,self__.loading,meta160795__$1));
});
expenses.core.__GT_t160794 = (function __GT_t160794(owner__$1,app__$1,loading__$1,meta160795){return (new expenses.core.t160794(owner__$1,app__$1,loading__$1,meta160795));
});
}
return (new expenses.core.t160794(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t160872 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t160872 = (function (owner,app,dispatch_component,meta160873){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta160873 = meta160873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t160872.cljs$lang$type = true;
expenses.core.t160872.cljs$lang$ctorStr = "expenses.core/t160872";
expenses.core.t160872.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t160872");
});
expenses.core.t160872.prototype.om$core$IRender$ = true;
expenses.core.t160872.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__160813_SHARP_){return cljs.core.assoc.call(null,p1__160813_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),null);
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__160875 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__160875) {
case "error":
return expenses.core.error_component;

break;
case "list":
return expenses.core.days_list_component;

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
expenses.core.t160872.prototype.om$core$IWillMount$ = true;
expenses.core.t160872.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_160908){var state_val_160909 = (state_160908[(1)]);if((state_val_160909 === (7)))
{var inst_160880 = (state_160908[(7)]);var inst_160898 = (state_160908[(2)]);var inst_160899 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_160880);var inst_160900 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),inst_160899);var inst_160901 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_160880);var inst_160902 = (function (){var new_date = inst_160901;var ev = inst_160880;return ((function (new_date,ev,inst_160880,inst_160898,inst_160899,inst_160900,inst_160901,state_val_160909,c__17814__auto__,___$1){
return (function (p1__160812_SHARP_){return cljs.core.assoc.call(null,p1__160812_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),new_date);
});
;})(new_date,ev,inst_160880,inst_160898,inst_160899,inst_160900,inst_160901,state_val_160909,c__17814__auto__,___$1))
})();var inst_160903 = om.core.transact_BANG_.call(null,self__.app,inst_160902);var state_160908__$1 = (function (){var statearr_160910 = state_160908;(statearr_160910[(8)] = inst_160903);
(statearr_160910[(9)] = inst_160898);
(statearr_160910[(10)] = inst_160900);
return statearr_160910;
})();var statearr_160911_160931 = state_160908__$1;(statearr_160911_160931[(2)] = null);
(statearr_160911_160931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160909 === (1)))
{var state_160908__$1 = state_160908;var statearr_160912_160932 = state_160908__$1;(statearr_160912_160932[(2)] = null);
(statearr_160912_160932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160909 === (4)))
{var inst_160880 = (state_160908[(7)]);var inst_160880__$1 = (state_160908[(2)]);var inst_160881 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_160880__$1);var inst_160882 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_160881);var state_160908__$1 = (function (){var statearr_160913 = state_160908;(statearr_160913[(7)] = inst_160880__$1);
return statearr_160913;
})();if(inst_160882)
{var statearr_160914_160933 = state_160908__$1;(statearr_160914_160933[(1)] = (5));
} else
{var statearr_160915_160934 = state_160908__$1;(statearr_160915_160934[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160909 === (6)))
{var inst_160880 = (state_160908[(7)]);var inst_160887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_160880);var inst_160888 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_160887);var state_160908__$1 = state_160908;if(inst_160888)
{var statearr_160916_160935 = state_160908__$1;(statearr_160916_160935[(1)] = (8));
} else
{var statearr_160917_160936 = state_160908__$1;(statearr_160917_160936[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160909 === (3)))
{var inst_160906 = (state_160908[(2)]);var state_160908__$1 = state_160908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160908__$1,inst_160906);
} else
{if((state_val_160909 === (2)))
{var inst_160877 = om.core.get_shared.call(null,self__.owner);var inst_160878 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_160877);var state_160908__$1 = state_160908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160908__$1,(4),inst_160878);
} else
{if((state_val_160909 === (9)))
{var state_160908__$1 = state_160908;var statearr_160918_160937 = state_160908__$1;(statearr_160918_160937[(2)] = null);
(statearr_160918_160937[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160909 === (5)))
{var inst_160880 = (state_160908[(7)]);var inst_160884 = (function (){var ev = inst_160880;return ((function (ev,inst_160880,state_val_160909,c__17814__auto__,___$1){
return (function (p1__160810_SHARP_){return cljs.core.assoc.call(null,p1__160810_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_160880,state_val_160909,c__17814__auto__,___$1))
})();var inst_160885 = om.core.transact_BANG_.call(null,self__.app,inst_160884);var state_160908__$1 = state_160908;var statearr_160919_160938 = state_160908__$1;(statearr_160919_160938[(2)] = inst_160885);
(statearr_160919_160938[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160909 === (10)))
{var inst_160896 = (state_160908[(2)]);var state_160908__$1 = state_160908;var statearr_160920_160939 = state_160908__$1;(statearr_160920_160939[(2)] = inst_160896);
(statearr_160920_160939[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_160909 === (8)))
{var inst_160880 = (state_160908[(7)]);var inst_160890 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_160880);var inst_160891 = inst_160890.deleteRecord();var inst_160892 = (function (){var ev = inst_160880;return ((function (ev,inst_160880,inst_160890,inst_160891,state_val_160909,c__17814__auto__,___$1){
return (function (p1__160811_SHARP_){return cljs.core.assoc.call(null,p1__160811_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_160880,inst_160890,inst_160891,state_val_160909,c__17814__auto__,___$1))
})();var inst_160893 = om.core.transact_BANG_.call(null,self__.app,inst_160892);var state_160908__$1 = (function (){var statearr_160921 = state_160908;(statearr_160921[(11)] = inst_160891);
return statearr_160921;
})();var statearr_160922_160940 = state_160908__$1;(statearr_160922_160940[(2)] = inst_160893);
(statearr_160922_160940[(1)] = (10));
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
var state_machine__17800__auto____0 = (function (){var statearr_160926 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_160926[(0)] = state_machine__17800__auto__);
(statearr_160926[(1)] = (1));
return statearr_160926;
});
var state_machine__17800__auto____1 = (function (state_160908){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_160908);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e160927){if((e160927 instanceof Object))
{var ex__17803__auto__ = e160927;var statearr_160928_160941 = state_160908;(statearr_160928_160941[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e160927;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__160942 = state_160908;
state_160908 = G__160942;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_160908){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_160908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_160929 = f__17815__auto__.call(null);(statearr_160929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_160929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t160872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_160874){var self__ = this;
var _160874__$1 = this;return self__.meta160873;
});
expenses.core.t160872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_160874,meta160873__$1){var self__ = this;
var _160874__$1 = this;return (new expenses.core.t160872(self__.owner,self__.app,self__.dispatch_component,meta160873__$1));
});
expenses.core.__GT_t160872 = (function __GT_t160872(owner__$1,app__$1,dispatch_component__$1,meta160873){return (new expenses.core.t160872(owner__$1,app__$1,dispatch_component__$1,meta160873));
});
}
return (new expenses.core.t160872(owner,app,dispatch_component,null));
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