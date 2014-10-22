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
expenses.core.adj_date = (function adj_date(date,span,n){var G__161474 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__161474) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t161482 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161482 = (function (owner,app,menu_component,meta161483){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta161483 = meta161483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161482.cljs$lang$type = true;
expenses.core.t161482.cljs$lang$ctorStr = "expenses.core/t161482";
expenses.core.t161482.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161482");
});
expenses.core.t161482.prototype.om$core$IRender$ = true;
expenses.core.t161482.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__161476_SHARP_){return cljs.core.assoc.call(null,p1__161476_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"TOP")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__161477_SHARP_){return cljs.core.assoc.call(null,p1__161477_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"ADD")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__161478_SHARP_){return cljs.core.assoc.call(null,p1__161478_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"LIST"))))));
});
expenses.core.t161482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161484){var self__ = this;
var _161484__$1 = this;return self__.meta161483;
});
expenses.core.t161482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161484,meta161483__$1){var self__ = this;
var _161484__$1 = this;return (new expenses.core.t161482(self__.owner,self__.app,self__.menu_component,meta161483__$1));
});
expenses.core.__GT_t161482 = (function __GT_t161482(owner__$1,app__$1,menu_component__$1,meta161483){return (new expenses.core.t161482(owner__$1,app__$1,menu_component__$1,meta161483));
});
}
return (new expenses.core.t161482(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t161490 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161490 = (function (owner,app,buttons_component,meta161491){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta161491 = meta161491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161490.cljs$lang$type = true;
expenses.core.t161490.cljs$lang$ctorStr = "expenses.core/t161490";
expenses.core.t161490.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161490");
});
expenses.core.t161490.prototype.om$core$IRenderState$ = true;
expenses.core.t161490.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__161493){var self__ = this;
var map__161494 = p__161493;var map__161494__$1 = ((cljs.core.seq_QMARK_.call(null,map__161494))?cljs.core.apply.call(null,cljs.core.hash_map,map__161494):map__161494);var current_focus_date = cljs.core.get.call(null,map__161494__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__161494__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__161494__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_focus_date);
});})(___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__161494,map__161494__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t161490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161492){var self__ = this;
var _161492__$1 = this;return self__.meta161491;
});
expenses.core.t161490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161492,meta161491__$1){var self__ = this;
var _161492__$1 = this;return (new expenses.core.t161490(self__.owner,self__.app,self__.buttons_component,meta161491__$1));
});
expenses.core.__GT_t161490 = (function __GT_t161490(owner__$1,app__$1,buttons_component__$1,meta161491){return (new expenses.core.t161490(owner__$1,app__$1,buttons_component__$1,meta161491));
});
}
return (new expenses.core.t161490(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t161499 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161499 = (function (owner,items,total_component,meta161500){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta161500 = meta161500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161499.cljs$lang$type = true;
expenses.core.t161499.cljs$lang$ctorStr = "expenses.core/t161499";
expenses.core.t161499.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161499");
});
expenses.core.t161499.prototype.om$core$IRender$ = true;
expenses.core.t161499.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__161495_SHARP_){return p1__161495_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t161499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161501){var self__ = this;
var _161501__$1 = this;return self__.meta161500;
});
expenses.core.t161499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161501,meta161500__$1){var self__ = this;
var _161501__$1 = this;return (new expenses.core.t161499(self__.owner,self__.items,self__.total_component,meta161500__$1));
});
expenses.core.__GT_t161499 = (function __GT_t161499(owner__$1,items__$1,total_component__$1,meta161500){return (new expenses.core.t161499(owner__$1,items__$1,total_component__$1,meta161500));
});
}
return (new expenses.core.t161499(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__161502_SHARP_){return p1__161502_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.touch_end_check = (function touch_end_check(e,owner,state){var touch_end = (e.changedTouches[(0)]);if(cljs.core.truth_(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__161503_SHARP_){return cljs.core.assoc.call(null,p1__161503_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
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
return (function (p1__161504_SHARP_){return cljs.core.assoc.call(null,p1__161504_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{return null;
}
}
} else
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__161505_SHARP_){return cljs.core.assoc.call(null,p1__161505_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
}
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t161511 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161511 = (function (owner,item,expense_list_item,meta161512){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta161512 = meta161512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161511.cljs$lang$type = true;
expenses.core.t161511.cljs$lang$ctorStr = "expenses.core/t161511";
expenses.core.t161511.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161511");
});
expenses.core.t161511.prototype.om$core$IRenderState$ = true;
expenses.core.t161511.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onTouchEnd": ((function (___$1){
return (function (e){return expenses.core.touch_end_check.call(null,e,self__.owner,state);
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__161506_SHARP_){return cljs.core.assoc.call(null,p1__161506_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__161507_SHARP_){return cljs.core.assoc.call(null,p1__161507_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.core.t161511.prototype.om$core$IInitState$ = true;
expenses.core.t161511.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t161511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161513){var self__ = this;
var _161513__$1 = this;return self__.meta161512;
});
expenses.core.t161511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161513,meta161512__$1){var self__ = this;
var _161513__$1 = this;return (new expenses.core.t161511(self__.owner,self__.item,self__.expense_list_item,meta161512__$1));
});
expenses.core.__GT_t161511 = (function __GT_t161511(owner__$1,item__$1,expense_list_item__$1,meta161512){return (new expenses.core.t161511(owner__$1,item__$1,expense_list_item__$1,meta161512));
});
}
return (new expenses.core.t161511(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t161517 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161517 = (function (owner,items,expense_list_component,meta161518){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta161518 = meta161518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161517.cljs$lang$type = true;
expenses.core.t161517.cljs$lang$ctorStr = "expenses.core/t161517";
expenses.core.t161517.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161517");
});
expenses.core.t161517.prototype.om$core$IRender$ = true;
expenses.core.t161517.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t161517.prototype.om$core$IInitState$ = true;
expenses.core.t161517.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t161517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161519){var self__ = this;
var _161519__$1 = this;return self__.meta161518;
});
expenses.core.t161517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161519,meta161518__$1){var self__ = this;
var _161519__$1 = this;return (new expenses.core.t161517(self__.owner,self__.items,self__.expense_list_component,meta161518__$1));
});
expenses.core.__GT_t161517 = (function __GT_t161517(owner__$1,items__$1,expense_list_component__$1,meta161518){return (new expenses.core.t161517(owner__$1,items__$1,expense_list_component__$1,meta161518));
});
}
return (new expenses.core.t161517(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__161521,f_date,items){var map__161526 = p__161521;var map__161526__$1 = ((cljs.core.seq_QMARK_.call(null,map__161526))?cljs.core.apply.call(null,cljs.core.hash_map,map__161526):map__161526);var category = cljs.core.get.call(null,map__161526__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__161526__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__161526,map__161526__$1,category,span){
return (function (p1__161520_SHARP_){var and__11373__auto__ = (function (){var G__161528 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__161528) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__161520_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__161520_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__161520_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__161529 = category;if(cljs.core._EQ_.call(null,null,G__161529))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__161520_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__161526,map__161526__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t161558 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161558 = (function (owner,app,main_component,meta161559){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta161559 = meta161559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161558.cljs$lang$type = true;
expenses.core.t161558.cljs$lang$ctorStr = "expenses.core/t161558";
expenses.core.t161558.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161558");
});
expenses.core.t161558.prototype.om$core$IRenderState$ = true;
expenses.core.t161558.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__161561){var self__ = this;
var map__161562 = p__161561;var map__161562__$1 = ((cljs.core.seq_QMARK_.call(null,map__161562))?cljs.core.apply.call(null,cljs.core.hash_map,map__161562):map__161562);var current_focus_date = cljs.core.get.call(null,map__161562__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__161562__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__161562__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__161562,map__161562__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__161562,map__161562__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t161558.prototype.om$core$IInitState$ = true;
expenses.core.t161558.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (cljs.core.truth_(new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app):(new Date()));var c__17814__auto___161584 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___161584,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___161584,focus_chan,now,___$1){
return (function (state_161572){var state_val_161573 = (state_161572[(1)]);if((state_val_161573 === (4)))
{var inst_161565 = (state_161572[(2)]);var inst_161566 = (function (){var new_focus = inst_161565;return ((function (new_focus,inst_161565,state_val_161573,c__17814__auto___161584,focus_chan,now,___$1){
return (function (p1__161531_SHARP_){return cljs.core.merge.call(null,p1__161531_SHARP_,new_focus);
});
;})(new_focus,inst_161565,state_val_161573,c__17814__auto___161584,focus_chan,now,___$1))
})();var inst_161567 = om.core.update_state_BANG_.call(null,self__.owner,inst_161566);var state_161572__$1 = (function (){var statearr_161574 = state_161572;(statearr_161574[(7)] = inst_161567);
return statearr_161574;
})();var statearr_161575_161585 = state_161572__$1;(statearr_161575_161585[(2)] = null);
(statearr_161575_161585[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161573 === (3)))
{var inst_161570 = (state_161572[(2)]);var state_161572__$1 = state_161572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161572__$1,inst_161570);
} else
{if((state_val_161573 === (2)))
{var state_161572__$1 = state_161572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161572__$1,(4),focus_chan);
} else
{if((state_val_161573 === (1)))
{var state_161572__$1 = state_161572;var statearr_161576_161586 = state_161572__$1;(statearr_161576_161586[(2)] = null);
(statearr_161576_161586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___161584,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___161584,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_161580 = [null,null,null,null,null,null,null,null];(statearr_161580[(0)] = state_machine__17800__auto__);
(statearr_161580[(1)] = (1));
return statearr_161580;
});
var state_machine__17800__auto____1 = (function (state_161572){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_161572);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e161581){if((e161581 instanceof Object))
{var ex__17803__auto__ = e161581;var statearr_161582_161587 = state_161572;(statearr_161582_161587[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e161581;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__161588 = state_161572;
state_161572 = G__161588;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_161572){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_161572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___161584,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_161583 = f__17815__auto__.call(null);(statearr_161583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___161584);
return statearr_161583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___161584,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t161558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161560){var self__ = this;
var _161560__$1 = this;return self__.meta161559;
});
expenses.core.t161558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161560,meta161559__$1){var self__ = this;
var _161560__$1 = this;return (new expenses.core.t161558(self__.owner,self__.app,self__.main_component,meta161559__$1));
});
expenses.core.__GT_t161558 = (function __GT_t161558(owner__$1,app__$1,main_component__$1,meta161559){return (new expenses.core.t161558(owner__$1,app__$1,main_component__$1,meta161559));
});
}
return (new expenses.core.t161558(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t161598 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161598 = (function (owner,app,category_select,meta161599){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta161599 = meta161599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161598.cljs$lang$type = true;
expenses.core.t161598.cljs$lang$ctorStr = "expenses.core/t161598";
expenses.core.t161598.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161598");
});
expenses.core.t161598.prototype.om$core$IRenderState$ = true;
expenses.core.t161598.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.distinct.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__161589_SHARP_){return p1__161589_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__161590_SHARP_){if(typeof expenses.core.t161601 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161601 = (function (p1__161590_SHARP_,categories,state,_,meta161599,owner,app,category_select,meta161602){
this.p1__161590_SHARP_ = p1__161590_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta161599 = meta161599;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta161602 = meta161602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161601.cljs$lang$type = true;
expenses.core.t161601.cljs$lang$ctorStr = "expenses.core/t161601";
expenses.core.t161601.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161601");
});})(categories,___$1))
;
expenses.core.t161601.prototype.om$core$IRender$ = true;
expenses.core.t161601.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__161590_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__161590_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t161601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_161603){var self__ = this;
var _161603__$1 = this;return self__.meta161602;
});})(categories,___$1))
;
expenses.core.t161601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_161603,meta161602__$1){var self__ = this;
var _161603__$1 = this;return (new expenses.core.t161601(self__.p1__161590_SHARP_,self__.categories,self__.state,self__._,self__.meta161599,self__.owner,self__.app,self__.category_select,meta161602__$1));
});})(categories,___$1))
;
expenses.core.__GT_t161601 = ((function (categories,___$1){
return (function __GT_t161601(p1__161590_SHARP___$1,categories__$1,state__$1,___$2,meta161599__$1,owner__$2,app__$2,category_select__$2,meta161602){return (new expenses.core.t161601(p1__161590_SHARP___$1,categories__$1,state__$1,___$2,meta161599__$1,owner__$2,app__$2,category_select__$2,meta161602));
});})(categories,___$1))
;
}
return (new expenses.core.t161601(p1__161590_SHARP_,categories,state,___$1,self__.meta161599,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__161591_SHARP_){return cljs.core.assoc.call(null,p1__161591_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t161598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161600){var self__ = this;
var _161600__$1 = this;return self__.meta161599;
});
expenses.core.t161598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161600,meta161599__$1){var self__ = this;
var _161600__$1 = this;return (new expenses.core.t161598(self__.owner,self__.app,self__.category_select,meta161599__$1));
});
expenses.core.__GT_t161598 = (function __GT_t161598(owner__$1,app__$1,category_select__$1,meta161599){return (new expenses.core.t161598(owner__$1,app__$1,category_select__$1,meta161599));
});
}
return (new expenses.core.t161598(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t161608 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161608 = (function (owner,app,amount_enter,meta161609){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta161609 = meta161609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161608.cljs$lang$type = true;
expenses.core.t161608.cljs$lang$ctorStr = "expenses.core/t161608";
expenses.core.t161608.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161608");
});
expenses.core.t161608.prototype.om$core$IRenderState$ = true;
expenses.core.t161608.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__161604_SHARP_){return cljs.core.assoc.call(null,p1__161604_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t161608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161610){var self__ = this;
var _161610__$1 = this;return self__.meta161609;
});
expenses.core.t161608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161610,meta161609__$1){var self__ = this;
var _161610__$1 = this;return (new expenses.core.t161608(self__.owner,self__.app,self__.amount_enter,meta161609__$1));
});
expenses.core.__GT_t161608 = (function __GT_t161608(owner__$1,app__$1,amount_enter__$1,meta161609){return (new expenses.core.t161608(owner__$1,app__$1,amount_enter__$1,meta161609));
});
}
return (new expenses.core.t161608(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t161615 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161615 = (function (owner,app,note_enter,meta161616){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta161616 = meta161616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161615.cljs$lang$type = true;
expenses.core.t161615.cljs$lang$ctorStr = "expenses.core/t161615";
expenses.core.t161615.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161615");
});
expenses.core.t161615.prototype.om$core$IRenderState$ = true;
expenses.core.t161615.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__161611_SHARP_){return cljs.core.assoc.call(null,p1__161611_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t161615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161617){var self__ = this;
var _161617__$1 = this;return self__.meta161616;
});
expenses.core.t161615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161617,meta161616__$1){var self__ = this;
var _161617__$1 = this;return (new expenses.core.t161615(self__.owner,self__.app,self__.note_enter,meta161616__$1));
});
expenses.core.__GT_t161615 = (function __GT_t161615(owner__$1,app__$1,note_enter__$1,meta161616){return (new expenses.core.t161615(owner__$1,app__$1,note_enter__$1,meta161616));
});
}
return (new expenses.core.t161615(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t161701 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161701 = (function (owner,app,add_component,meta161702){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta161702 = meta161702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161701.cljs$lang$type = true;
expenses.core.t161701.cljs$lang$ctorStr = "expenses.core/t161701";
expenses.core.t161701.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161701");
});
expenses.core.t161701.prototype.om$core$IRenderState$ = true;
expenses.core.t161701.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__161704 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__161704) {
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
expenses.core.t161701.prototype.om$core$IInitState$ = true;
expenses.core.t161701.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___161781 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___161781,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___161781,add_chan,___$1){
return (function (state_161750){var state_val_161751 = (state_161750[(1)]);if((state_val_161751 === (7)))
{var inst_161745 = (state_161750[(2)]);var state_161750__$1 = (function (){var statearr_161752 = state_161750;(statearr_161752[(7)] = inst_161745);
return statearr_161752;
})();var statearr_161753_161782 = state_161750__$1;(statearr_161753_161782[(2)] = null);
(statearr_161753_161782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (1)))
{var state_161750__$1 = state_161750;var statearr_161754_161783 = state_161750__$1;(statearr_161754_161783[(2)] = null);
(statearr_161754_161783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (4)))
{var inst_161707 = (state_161750[(8)]);var inst_161707__$1 = (state_161750[(2)]);var inst_161708 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_161707__$1);var state_161750__$1 = (function (){var statearr_161755 = state_161750;(statearr_161755[(8)] = inst_161707__$1);
return statearr_161755;
})();if(cljs.core.truth_(inst_161708))
{var statearr_161756_161784 = state_161750__$1;(statearr_161756_161784[(1)] = (5));
} else
{var statearr_161757_161785 = state_161750__$1;(statearr_161757_161785[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (15)))
{var state_161750__$1 = state_161750;var statearr_161758_161786 = state_161750__$1;(statearr_161758_161786[(2)] = null);
(statearr_161758_161786[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (13)))
{var inst_161741 = (state_161750[(2)]);var state_161750__$1 = state_161750;var statearr_161759_161787 = state_161750__$1;(statearr_161759_161787[(2)] = inst_161741);
(statearr_161759_161787[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (6)))
{var inst_161707 = (state_161750[(8)]);var inst_161713 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_161707);var state_161750__$1 = state_161750;if(cljs.core.truth_(inst_161713))
{var statearr_161760_161788 = state_161750__$1;(statearr_161760_161788[(1)] = (8));
} else
{var statearr_161761_161789 = state_161750__$1;(statearr_161761_161789[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (3)))
{var inst_161748 = (state_161750[(2)]);var state_161750__$1 = state_161750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161750__$1,inst_161748);
} else
{if((state_val_161751 === (12)))
{var state_161750__$1 = state_161750;var statearr_161762_161790 = state_161750__$1;(statearr_161762_161790[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (2)))
{var state_161750__$1 = state_161750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161750__$1,(4),add_chan);
} else
{if((state_val_161751 === (11)))
{var inst_161707 = (state_161750[(8)]);var inst_161720 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_161721 = cljs.core.deref.call(null,self__.app);var inst_161722 = new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(inst_161721);var inst_161723 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_161724 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_161725 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_161707);var inst_161726 = [inst_161722,inst_161723,inst_161724,inst_161725];var inst_161727 = cljs.core.PersistentHashMap.fromArrays(inst_161720,inst_161726);var inst_161728 = om.core.get_shared.call(null,self__.owner);var inst_161729 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_161728);var inst_161730 = expenses.core.put_expense.call(null,inst_161729,inst_161727);var inst_161731 = (function (){var new_expense = inst_161727;var v = inst_161707;return ((function (new_expense,v,inst_161707,inst_161720,inst_161721,inst_161722,inst_161723,inst_161724,inst_161725,inst_161726,inst_161727,inst_161728,inst_161729,inst_161730,state_val_161751,c__17814__auto___161781,add_chan,___$1){
return (function (p1__161620_SHARP_){return cljs.core.assoc.call(null,p1__161620_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_161707,inst_161720,inst_161721,inst_161722,inst_161723,inst_161724,inst_161725,inst_161726,inst_161727,inst_161728,inst_161729,inst_161730,state_val_161751,c__17814__auto___161781,add_chan,___$1))
})();var inst_161732 = om.core.transact_BANG_.call(null,self__.app,inst_161731);var state_161750__$1 = (function (){var statearr_161764 = state_161750;(statearr_161764[(9)] = inst_161730);
return statearr_161764;
})();var statearr_161765_161791 = state_161750__$1;(statearr_161765_161791[(2)] = inst_161732);
(statearr_161765_161791[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (9)))
{var inst_161707 = (state_161750[(8)]);var inst_161718 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_161707);var state_161750__$1 = state_161750;if(cljs.core.truth_(inst_161718))
{var statearr_161766_161792 = state_161750__$1;(statearr_161766_161792[(1)] = (11));
} else
{var statearr_161767_161793 = state_161750__$1;(statearr_161767_161793[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (5)))
{var inst_161707 = (state_161750[(8)]);var inst_161710 = (function (){var v = inst_161707;return ((function (v,inst_161707,state_val_161751,c__17814__auto___161781,add_chan,___$1){
return (function (p1__161618_SHARP_){return cljs.core.assoc.call(null,p1__161618_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_161707,state_val_161751,c__17814__auto___161781,add_chan,___$1))
})();var inst_161711 = om.core.update_state_BANG_.call(null,self__.owner,inst_161710);var state_161750__$1 = state_161750;var statearr_161768_161794 = state_161750__$1;(statearr_161768_161794[(2)] = inst_161711);
(statearr_161768_161794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (14)))
{var inst_161707 = (state_161750[(8)]);var inst_161735 = (function (){var v = inst_161707;return ((function (v,inst_161707,state_val_161751,c__17814__auto___161781,add_chan,___$1){
return (function (p1__161621_SHARP_){return cljs.core.assoc.call(null,p1__161621_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_161707,state_val_161751,c__17814__auto___161781,add_chan,___$1))
})();var inst_161736 = om.core.transact_BANG_.call(null,self__.app,inst_161735);var state_161750__$1 = state_161750;var statearr_161769_161795 = state_161750__$1;(statearr_161769_161795[(2)] = inst_161736);
(statearr_161769_161795[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (16)))
{var inst_161739 = (state_161750[(2)]);var state_161750__$1 = state_161750;var statearr_161770_161796 = state_161750__$1;(statearr_161770_161796[(2)] = inst_161739);
(statearr_161770_161796[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (10)))
{var inst_161743 = (state_161750[(2)]);var state_161750__$1 = state_161750;var statearr_161771_161797 = state_161750__$1;(statearr_161771_161797[(2)] = inst_161743);
(statearr_161771_161797[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161751 === (8)))
{var inst_161707 = (state_161750[(8)]);var inst_161715 = (function (){var v = inst_161707;return ((function (v,inst_161707,state_val_161751,c__17814__auto___161781,add_chan,___$1){
return (function (p1__161619_SHARP_){return cljs.core.assoc.call(null,p1__161619_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_161707,state_val_161751,c__17814__auto___161781,add_chan,___$1))
})();var inst_161716 = om.core.update_state_BANG_.call(null,self__.owner,inst_161715);var state_161750__$1 = state_161750;var statearr_161772_161798 = state_161750__$1;(statearr_161772_161798[(2)] = inst_161716);
(statearr_161772_161798[(1)] = (10));
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
});})(c__17814__auto___161781,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___161781,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_161776 = [null,null,null,null,null,null,null,null,null,null];(statearr_161776[(0)] = state_machine__17800__auto__);
(statearr_161776[(1)] = (1));
return statearr_161776;
});
var state_machine__17800__auto____1 = (function (state_161750){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_161750);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e161777){if((e161777 instanceof Object))
{var ex__17803__auto__ = e161777;var statearr_161778_161799 = state_161750;(statearr_161778_161799[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e161777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__161800 = state_161750;
state_161750 = G__161800;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_161750){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_161750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___161781,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_161779 = f__17815__auto__.call(null);(statearr_161779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___161781);
return statearr_161779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___161781,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t161701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161703){var self__ = this;
var _161703__$1 = this;return self__.meta161702;
});
expenses.core.t161701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161703,meta161702__$1){var self__ = this;
var _161703__$1 = this;return (new expenses.core.t161701(self__.owner,self__.app,self__.add_component,meta161702__$1));
});
expenses.core.__GT_t161701 = (function __GT_t161701(owner__$1,app__$1,add_component__$1,meta161702){return (new expenses.core.t161701(owner__$1,app__$1,add_component__$1,meta161702));
});
}
return (new expenses.core.t161701(owner,app,add_component,null));
});
expenses.core.edit_component = (function edit_component(app,owner){if(typeof expenses.core.t161809 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161809 = (function (owner,app,edit_component,meta161810){
this.owner = owner;
this.app = app;
this.edit_component = edit_component;
this.meta161810 = meta161810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161809.cljs$lang$type = true;
expenses.core.t161809.cljs$lang$ctorStr = "expenses.core/t161809";
expenses.core.t161809.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161809");
});
expenses.core.t161809.prototype.om$core$IRenderState$ = true;
expenses.core.t161809.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.form({"className": "pure-form"},React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__161801_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__161801_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "category-input"}),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__161802_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),p1__161802_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "number", "ref": "amount-input"}),React.DOM.h3({"className": "pure-u-1"},"NOTE"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__161803_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904)], null),p1__161803_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "note-input"}),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
item.update(cljs.core.clj__GT_js.call(null,state));
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__161804_SHARP_){return cljs.core.assoc.call(null,p1__161804_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"})),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__161805_SHARP_){return cljs.core.assoc.call(null,p1__161805_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t161809.prototype.om$core$IInitState$ = true;
expenses.core.t161809.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),item.get("category"),new cljs.core.Keyword(null,"amount","amount",364489504),item.get("amount"),new cljs.core.Keyword(null,"note","note",1426297904),item.get("note")], null);
});
expenses.core.t161809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161811){var self__ = this;
var _161811__$1 = this;return self__.meta161810;
});
expenses.core.t161809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161811,meta161810__$1){var self__ = this;
var _161811__$1 = this;return (new expenses.core.t161809(self__.owner,self__.app,self__.edit_component,meta161810__$1));
});
expenses.core.__GT_t161809 = (function __GT_t161809(owner__$1,app__$1,edit_component__$1,meta161810){return (new expenses.core.t161809(owner__$1,app__$1,edit_component__$1,meta161810));
});
}
return (new expenses.core.t161809(owner,app,edit_component,null));
});
expenses.core.day_item_component = (function day_item_component(item,owner){if(typeof expenses.core.t161815 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161815 = (function (owner,item,day_item_component,meta161816){
this.owner = owner;
this.item = item;
this.day_item_component = day_item_component;
this.meta161816 = meta161816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161815.cljs$lang$type = true;
expenses.core.t161815.cljs$lang$ctorStr = "expenses.core/t161815";
expenses.core.t161815.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161815");
});
expenses.core.t161815.prototype.om$core$IRender$ = true;
expenses.core.t161815.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.li({"onClick": ((function (this__14239__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item)], null));
});})(this__14239__auto____$1))
, "className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-2 list-date"},goog.string.format("%02d-%02d-%d",new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getDate(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getMonth() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getFullYear())),React.DOM.div({"style": {"text-align": "right"}, "className": "pure-u-1-2 list-total"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(self__.item))+"\u5186")));
});
expenses.core.t161815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161817){var self__ = this;
var _161817__$1 = this;return self__.meta161816;
});
expenses.core.t161815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161817,meta161816__$1){var self__ = this;
var _161817__$1 = this;return (new expenses.core.t161815(self__.owner,self__.item,self__.day_item_component,meta161816__$1));
});
expenses.core.__GT_t161815 = (function __GT_t161815(owner__$1,item__$1,day_item_component__$1,meta161816){return (new expenses.core.t161815(owner__$1,item__$1,day_item_component__$1,meta161816));
});
}
return (new expenses.core.t161815(owner,item,day_item_component,null));
});
expenses.core.days_list_component = (function days_list_component(app,owner){var days = cljs.core.map.call(null,(function (p__161826){var vec__161827 = p__161826;var k = cljs.core.nth.call(null,vec__161827,(0),null);var v = cljs.core.nth.call(null,vec__161827,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),k,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__161827,k,v){
return (function (p1__161818_SHARP_){return p1__161818_SHARP_.get("amount");
});})(vec__161827,k,v))
,v))], null);
}),cljs.core.group_by.call(null,(function (p1__161819_SHARP_){var G__161828 = p1__161819_SHARP_.get("date");G__161828.setHours((0),(0),(0),(0));
return G__161828;
}),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(app)));if(typeof expenses.core.t161829 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161829 = (function (days,owner,app,days_list_component,meta161830){
this.days = days;
this.owner = owner;
this.app = app;
this.days_list_component = days_list_component;
this.meta161830 = meta161830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161829.cljs$lang$type = true;
expenses.core.t161829.cljs$lang$ctorStr = "expenses.core/t161829";
expenses.core.t161829.cljs$lang$ctorPrWriter = ((function (days){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161829");
});})(days))
;
expenses.core.t161829.prototype.om$core$IRender$ = true;
expenses.core.t161829.prototype.om$core$IRender$render$arity$1 = ((function (days){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,expenses.core.day_item_component,self__.days));
});})(days))
;
expenses.core.t161829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (days){
return (function (_161831){var self__ = this;
var _161831__$1 = this;return self__.meta161830;
});})(days))
;
expenses.core.t161829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (days){
return (function (_161831,meta161830__$1){var self__ = this;
var _161831__$1 = this;return (new expenses.core.t161829(self__.days,self__.owner,self__.app,self__.days_list_component,meta161830__$1));
});})(days))
;
expenses.core.__GT_t161829 = ((function (days){
return (function __GT_t161829(days__$1,owner__$1,app__$1,days_list_component__$1,meta161830){return (new expenses.core.t161829(days__$1,owner__$1,app__$1,days_list_component__$1,meta161830));
});})(days))
;
}
return (new expenses.core.t161829(days,owner,app,days_list_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t161835 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161835 = (function (owner,app,error_component,meta161836){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta161836 = meta161836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161835.cljs$lang$type = true;
expenses.core.t161835.cljs$lang$ctorStr = "expenses.core/t161835";
expenses.core.t161835.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161835");
});
expenses.core.t161835.prototype.om$core$IRender$ = true;
expenses.core.t161835.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t161835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161837){var self__ = this;
var _161837__$1 = this;return self__.meta161836;
});
expenses.core.t161835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161837,meta161836__$1){var self__ = this;
var _161837__$1 = this;return (new expenses.core.t161835(self__.owner,self__.app,self__.error_component,meta161836__$1));
});
expenses.core.__GT_t161835 = (function __GT_t161835(owner__$1,app__$1,error_component__$1,meta161836){return (new expenses.core.t161835(owner__$1,app__$1,error_component__$1,meta161836));
});
}
return (new expenses.core.t161835(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__161838_SHARP_){return cljs.core.assoc.call(null,p1__161838_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t161853 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161853 = (function (owner,app,loading,meta161854){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta161854 = meta161854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161853.cljs$lang$type = true;
expenses.core.t161853.cljs$lang$ctorStr = "expenses.core/t161853";
expenses.core.t161853.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161853");
});
expenses.core.t161853.prototype.om$core$IRender$ = true;
expenses.core.t161853.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t161853.prototype.om$core$IWillMount$ = true;
expenses.core.t161853.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_161858){var state_val_161859 = (state_161858[(1)]);if((state_val_161859 === (1)))
{var inst_161856 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_161858__$1 = state_161858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161858__$1,inst_161856);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_161863 = [null,null,null,null,null,null,null];(statearr_161863[(0)] = state_machine__17800__auto__);
(statearr_161863[(1)] = (1));
return statearr_161863;
});
var state_machine__17800__auto____1 = (function (state_161858){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_161858);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e161864){if((e161864 instanceof Object))
{var ex__17803__auto__ = e161864;var statearr_161865_161867 = state_161858;(statearr_161865_161867[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e161864;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__161868 = state_161858;
state_161858 = G__161868;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_161858){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_161858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_161866 = f__17815__auto__.call(null);(statearr_161866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_161866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t161853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161855){var self__ = this;
var _161855__$1 = this;return self__.meta161854;
});
expenses.core.t161853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161855,meta161854__$1){var self__ = this;
var _161855__$1 = this;return (new expenses.core.t161853(self__.owner,self__.app,self__.loading,meta161854__$1));
});
expenses.core.__GT_t161853 = (function __GT_t161853(owner__$1,app__$1,loading__$1,meta161854){return (new expenses.core.t161853(owner__$1,app__$1,loading__$1,meta161854));
});
}
return (new expenses.core.t161853(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t161931 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t161931 = (function (owner,app,dispatch_component,meta161932){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta161932 = meta161932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t161931.cljs$lang$type = true;
expenses.core.t161931.cljs$lang$ctorStr = "expenses.core/t161931";
expenses.core.t161931.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t161931");
});
expenses.core.t161931.prototype.om$core$IRender$ = true;
expenses.core.t161931.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__161872_SHARP_){return cljs.core.assoc.call(null,p1__161872_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),null);
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__161934 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__161934) {
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
expenses.core.t161931.prototype.om$core$IWillMount$ = true;
expenses.core.t161931.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_161967){var state_val_161968 = (state_161967[(1)]);if((state_val_161968 === (7)))
{var inst_161939 = (state_161967[(7)]);var inst_161957 = (state_161967[(2)]);var inst_161958 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_161939);var inst_161959 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),inst_161958);var inst_161960 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_161939);var inst_161961 = (function (){var new_date = inst_161960;var ev = inst_161939;return ((function (new_date,ev,inst_161939,inst_161957,inst_161958,inst_161959,inst_161960,state_val_161968,c__17814__auto__,___$1){
return (function (p1__161871_SHARP_){return cljs.core.assoc.call(null,p1__161871_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),new_date);
});
;})(new_date,ev,inst_161939,inst_161957,inst_161958,inst_161959,inst_161960,state_val_161968,c__17814__auto__,___$1))
})();var inst_161962 = om.core.transact_BANG_.call(null,self__.app,inst_161961);var state_161967__$1 = (function (){var statearr_161969 = state_161967;(statearr_161969[(8)] = inst_161962);
(statearr_161969[(9)] = inst_161957);
(statearr_161969[(10)] = inst_161959);
return statearr_161969;
})();var statearr_161970_161990 = state_161967__$1;(statearr_161970_161990[(2)] = null);
(statearr_161970_161990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161968 === (1)))
{var state_161967__$1 = state_161967;var statearr_161971_161991 = state_161967__$1;(statearr_161971_161991[(2)] = null);
(statearr_161971_161991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161968 === (4)))
{var inst_161939 = (state_161967[(7)]);var inst_161939__$1 = (state_161967[(2)]);var inst_161940 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_161939__$1);var inst_161941 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_161940);var state_161967__$1 = (function (){var statearr_161972 = state_161967;(statearr_161972[(7)] = inst_161939__$1);
return statearr_161972;
})();if(inst_161941)
{var statearr_161973_161992 = state_161967__$1;(statearr_161973_161992[(1)] = (5));
} else
{var statearr_161974_161993 = state_161967__$1;(statearr_161974_161993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161968 === (6)))
{var inst_161939 = (state_161967[(7)]);var inst_161946 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_161939);var inst_161947 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_161946);var state_161967__$1 = state_161967;if(inst_161947)
{var statearr_161975_161994 = state_161967__$1;(statearr_161975_161994[(1)] = (8));
} else
{var statearr_161976_161995 = state_161967__$1;(statearr_161976_161995[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161968 === (3)))
{var inst_161965 = (state_161967[(2)]);var state_161967__$1 = state_161967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161967__$1,inst_161965);
} else
{if((state_val_161968 === (2)))
{var inst_161936 = om.core.get_shared.call(null,self__.owner);var inst_161937 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_161936);var state_161967__$1 = state_161967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161967__$1,(4),inst_161937);
} else
{if((state_val_161968 === (9)))
{var state_161967__$1 = state_161967;var statearr_161977_161996 = state_161967__$1;(statearr_161977_161996[(2)] = null);
(statearr_161977_161996[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161968 === (5)))
{var inst_161939 = (state_161967[(7)]);var inst_161943 = (function (){var ev = inst_161939;return ((function (ev,inst_161939,state_val_161968,c__17814__auto__,___$1){
return (function (p1__161869_SHARP_){return cljs.core.assoc.call(null,p1__161869_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_161939,state_val_161968,c__17814__auto__,___$1))
})();var inst_161944 = om.core.transact_BANG_.call(null,self__.app,inst_161943);var state_161967__$1 = state_161967;var statearr_161978_161997 = state_161967__$1;(statearr_161978_161997[(2)] = inst_161944);
(statearr_161978_161997[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161968 === (10)))
{var inst_161955 = (state_161967[(2)]);var state_161967__$1 = state_161967;var statearr_161979_161998 = state_161967__$1;(statearr_161979_161998[(2)] = inst_161955);
(statearr_161979_161998[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_161968 === (8)))
{var inst_161939 = (state_161967[(7)]);var inst_161949 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_161939);var inst_161950 = inst_161949.deleteRecord();var inst_161951 = (function (){var ev = inst_161939;return ((function (ev,inst_161939,inst_161949,inst_161950,state_val_161968,c__17814__auto__,___$1){
return (function (p1__161870_SHARP_){return cljs.core.assoc.call(null,p1__161870_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_161939,inst_161949,inst_161950,state_val_161968,c__17814__auto__,___$1))
})();var inst_161952 = om.core.transact_BANG_.call(null,self__.app,inst_161951);var state_161967__$1 = (function (){var statearr_161980 = state_161967;(statearr_161980[(11)] = inst_161950);
return statearr_161980;
})();var statearr_161981_161999 = state_161967__$1;(statearr_161981_161999[(2)] = inst_161952);
(statearr_161981_161999[(1)] = (10));
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
var state_machine__17800__auto____0 = (function (){var statearr_161985 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_161985[(0)] = state_machine__17800__auto__);
(statearr_161985[(1)] = (1));
return statearr_161985;
});
var state_machine__17800__auto____1 = (function (state_161967){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_161967);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e161986){if((e161986 instanceof Object))
{var ex__17803__auto__ = e161986;var statearr_161987_162000 = state_161967;(statearr_161987_162000[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e161986;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__162001 = state_161967;
state_161967 = G__162001;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_161967){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_161967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_161988 = f__17815__auto__.call(null);(statearr_161988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_161988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t161931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_161933){var self__ = this;
var _161933__$1 = this;return self__.meta161932;
});
expenses.core.t161931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_161933,meta161932__$1){var self__ = this;
var _161933__$1 = this;return (new expenses.core.t161931(self__.owner,self__.app,self__.dispatch_component,meta161932__$1));
});
expenses.core.__GT_t161931 = (function __GT_t161931(owner__$1,app__$1,dispatch_component__$1,meta161932){return (new expenses.core.t161931(owner__$1,app__$1,dispatch_component__$1,meta161932));
});
}
return (new expenses.core.t161931(owner,app,dispatch_component,null));
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