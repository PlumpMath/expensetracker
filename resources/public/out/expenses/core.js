// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.string');
goog.require('figwheel.client');
goog.require('om.dom');
goog.require('goog.net.Jsonp');
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
expenses.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null));
expenses.core.adj_date = (function adj_date(date,span,n){var G__38405 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__38405) {
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
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t38412 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38412 = (function (owner,app,buttons_component,meta38413){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta38413 = meta38413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38412.cljs$lang$type = true;
expenses.core.t38412.cljs$lang$ctorStr = "expenses.core/t38412";
expenses.core.t38412.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38412");
});
expenses.core.t38412.prototype.om$core$IRenderState$ = true;
expenses.core.t38412.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__38415){var self__ = this;
var map__38416 = p__38415;var map__38416__$1 = ((cljs.core.seq_QMARK_.call(null,map__38416))?cljs.core.apply.call(null,cljs.core.hash_map,map__38416):map__38416);var current_focus_date = cljs.core.get.call(null,map__38416__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__38416__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__38416__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739));
});})(___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__38416,map__38416__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t38412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38414){var self__ = this;
var _38414__$1 = this;return self__.meta38413;
});
expenses.core.t38412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38414,meta38413__$1){var self__ = this;
var _38414__$1 = this;return (new expenses.core.t38412(self__.owner,self__.app,self__.buttons_component,meta38413__$1));
});
expenses.core.__GT_t38412 = (function __GT_t38412(owner__$1,app__$1,buttons_component__$1,meta38413){return (new expenses.core.t38412(owner__$1,app__$1,buttons_component__$1,meta38413));
});
}
return (new expenses.core.t38412(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t38420 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38420 = (function (owner,items,total_component,meta38421){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta38421 = meta38421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38420.cljs$lang$type = true;
expenses.core.t38420.cljs$lang$ctorStr = "expenses.core/t38420";
expenses.core.t38420.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38420");
});
expenses.core.t38420.prototype.om$core$IRender$ = true;
expenses.core.t38420.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),self__.items)))+"\u5186")));
});
expenses.core.t38420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38422){var self__ = this;
var _38422__$1 = this;return self__.meta38421;
});
expenses.core.t38420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38422,meta38421__$1){var self__ = this;
var _38422__$1 = this;return (new expenses.core.t38420(self__.owner,self__.items,self__.total_component,meta38421__$1));
});
expenses.core.__GT_t38420 = (function __GT_t38420(owner__$1,items__$1,total_component__$1,meta38421){return (new expenses.core.t38420(owner__$1,items__$1,total_component__$1,meta38421));
});
}
return (new expenses.core.t38420(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__38423_SHARP_){return p1__38423_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t38427 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38427 = (function (owner,item,expense_list_item,meta38428){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta38428 = meta38428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38427.cljs$lang$type = true;
expenses.core.t38427.cljs$lang$ctorStr = "expenses.core/t38427";
expenses.core.t38427.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38427");
});
expenses.core.t38427.prototype.om$core$IRender$ = true;
expenses.core.t38427.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li({"className": "pure-g"},React.DOM.div({"className": "pure-u-1"},React.DOM.div({"className": "date pure-u-1-4"},goog.string.format("%02d-%02d-%d",self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getDate(),(self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getMonth() + (1)),self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getFullYear())),React.DOM.div({"className": "time pure-u-1-4"},goog.string.format("%02d:%02d",self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getHours(),self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getMinutes())),React.DOM.div({"className": ("pure-u-1-4 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(self__.item)))},React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(self__.item))}, "className": "category-button"},cljs.core.name.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(self__.item))))),React.DOM.h3({"className": "pure-u-1 note"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.call(null,new cljs.core.Keyword(null,"amount","amount",364489504)))+"\u5186")),React.DOM.div({"className": "pure-u-1 note"},self__.item.call(null,new cljs.core.Keyword(null,"note","note",1426297904))));
});
expenses.core.t38427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38429){var self__ = this;
var _38429__$1 = this;return self__.meta38428;
});
expenses.core.t38427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38429,meta38428__$1){var self__ = this;
var _38429__$1 = this;return (new expenses.core.t38427(self__.owner,self__.item,self__.expense_list_item,meta38428__$1));
});
expenses.core.__GT_t38427 = (function __GT_t38427(owner__$1,item__$1,expense_list_item__$1,meta38428){return (new expenses.core.t38427(owner__$1,item__$1,expense_list_item__$1,meta38428));
});
}
return (new expenses.core.t38427(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t38433 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38433 = (function (owner,items,expense_list_component,meta38434){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta38434 = meta38434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38433.cljs$lang$type = true;
expenses.core.t38433.cljs$lang$ctorStr = "expenses.core/t38433";
expenses.core.t38433.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38433");
});
expenses.core.t38433.prototype.om$core$IRender$ = true;
expenses.core.t38433.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t38433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38435){var self__ = this;
var _38435__$1 = this;return self__.meta38434;
});
expenses.core.t38433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38435,meta38434__$1){var self__ = this;
var _38435__$1 = this;return (new expenses.core.t38433(self__.owner,self__.items,self__.expense_list_component,meta38434__$1));
});
expenses.core.__GT_t38433 = (function __GT_t38433(owner__$1,items__$1,expense_list_component__$1,meta38434){return (new expenses.core.t38433(owner__$1,items__$1,expense_list_component__$1,meta38434));
});
}
return (new expenses.core.t38433(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__38437,f_date,items){var map__38442 = p__38437;var map__38442__$1 = ((cljs.core.seq_QMARK_.call(null,map__38442))?cljs.core.apply.call(null,cljs.core.hash_map,map__38442):map__38442);var category = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__38442,map__38442__$1,category,span){
return (function (p1__38436_SHARP_){var and__11373__auto__ = (function (){var G__38444 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__38444) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__38436_SHARP_).getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__38436_SHARP_).getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__38436_SHARP_).getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__38445 = category;if(cljs.core._EQ_.call(null,null,G__38445))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__38436_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__38442,map__38442__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t38475 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38475 = (function (owner,app,main_component,meta38476){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta38476 = meta38476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38475.cljs$lang$type = true;
expenses.core.t38475.cljs$lang$ctorStr = "expenses.core/t38475";
expenses.core.t38475.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38475");
});
expenses.core.t38475.prototype.om$core$IRenderState$ = true;
expenses.core.t38475.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__38478){var self__ = this;
var map__38479 = p__38478;var map__38479__$1 = ((cljs.core.seq_QMARK_.call(null,map__38479))?cljs.core.apply.call(null,cljs.core.hash_map,map__38479):map__38479);var current_focus_date = cljs.core.get.call(null,map__38479__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__38479__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__38479__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__38479,map__38479__$1,current_focus_date,current_focus,focus_chan){
return (function (p1__38448_SHARP_){return (- new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__38448_SHARP_).getTime());
});})(___$1,map__38479,map__38479__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t38475.prototype.om$core$IInitState$ = true;
expenses.core.t38475.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (new Date());var c__17814__auto___38501 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___38501,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___38501,focus_chan,now,___$1){
return (function (state_38489){var state_val_38490 = (state_38489[(1)]);if((state_val_38490 === (4)))
{var inst_38482 = (state_38489[(2)]);var inst_38483 = (function (){var new_focus = inst_38482;return ((function (new_focus,inst_38482,state_val_38490,c__17814__auto___38501,focus_chan,now,___$1){
return (function (p1__38447_SHARP_){return cljs.core.merge.call(null,p1__38447_SHARP_,new_focus);
});
;})(new_focus,inst_38482,state_val_38490,c__17814__auto___38501,focus_chan,now,___$1))
})();var inst_38484 = om.core.update_state_BANG_.call(null,self__.owner,inst_38483);var state_38489__$1 = (function (){var statearr_38491 = state_38489;(statearr_38491[(7)] = inst_38484);
return statearr_38491;
})();var statearr_38492_38502 = state_38489__$1;(statearr_38492_38502[(2)] = null);
(statearr_38492_38502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38490 === (3)))
{var inst_38487 = (state_38489[(2)]);var state_38489__$1 = state_38489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38489__$1,inst_38487);
} else
{if((state_val_38490 === (2)))
{var state_38489__$1 = state_38489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38489__$1,(4),focus_chan);
} else
{if((state_val_38490 === (1)))
{var state_38489__$1 = state_38489;var statearr_38493_38503 = state_38489__$1;(statearr_38493_38503[(2)] = null);
(statearr_38493_38503[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___38501,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___38501,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_38497 = [null,null,null,null,null,null,null,null];(statearr_38497[(0)] = state_machine__17800__auto__);
(statearr_38497[(1)] = (1));
return statearr_38497;
});
var state_machine__17800__auto____1 = (function (state_38489){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_38489);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e38498){if((e38498 instanceof Object))
{var ex__17803__auto__ = e38498;var statearr_38499_38504 = state_38489;(statearr_38499_38504[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38498;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38505 = state_38489;
state_38489 = G__38505;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_38489){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_38489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___38501,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_38500 = f__17815__auto__.call(null);(statearr_38500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___38501);
return statearr_38500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___38501,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t38475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38477){var self__ = this;
var _38477__$1 = this;return self__.meta38476;
});
expenses.core.t38475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38477,meta38476__$1){var self__ = this;
var _38477__$1 = this;return (new expenses.core.t38475(self__.owner,self__.app,self__.main_component,meta38476__$1));
});
expenses.core.__GT_t38475 = (function __GT_t38475(owner__$1,app__$1,main_component__$1,meta38476){return (new expenses.core.t38475(owner__$1,app__$1,main_component__$1,meta38476));
});
}
return (new expenses.core.t38475(owner,app,main_component,null));
});
expenses.core.async_get = (function async_get(app){var uri = "https://script.google.com/macros/s/AKfycbwRMHhtxd1TBQMVpmeV-25RJaCw2LVVSHL9O8yiY31qyJKl9N8/exec";var req = (new goog.net.Jsonp((new goog.Uri(uri))));return req.send(null,((function (uri,req){
return (function (p1__38506_SHARP_){var data = new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,p1__38506_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));var parsed = cljs.core.map.call(null,((function (data,uri,req){
return (function (d){return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(new cljs.core.Keyword(null,"Timestamp","Timestamp",-1103745255).cljs$core$IFn$_invoke$arity$1(d))));
});})(data,uri,req))
,data);return om.core.transact_BANG_.call(null,app,((function (data,parsed,uri,req){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),parsed);
});})(data,parsed,uri,req))
);
});})(uri,req))
);
});
expenses.core.loading = (function loading(app,owner){var c__17814__auto___38535 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___38535){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___38535){
return (function (state_38523){var state_val_38524 = (state_38523[(1)]);if((state_val_38524 === (1)))
{var inst_38521 = expenses.core.async_get.call(null,app);var state_38523__$1 = state_38523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38523__$1,inst_38521);
} else
{return null;
}
});})(c__17814__auto___38535))
;return ((function (switch__17799__auto__,c__17814__auto___38535){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_38528 = [null,null,null,null,null,null,null];(statearr_38528[(0)] = state_machine__17800__auto__);
(statearr_38528[(1)] = (1));
return statearr_38528;
});
var state_machine__17800__auto____1 = (function (state_38523){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_38523);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e38529){if((e38529 instanceof Object))
{var ex__17803__auto__ = e38529;var statearr_38530_38536 = state_38523;(statearr_38530_38536[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38537 = state_38523;
state_38523 = G__38537;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_38523){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_38523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___38535))
})();var state__17816__auto__ = (function (){var statearr_38531 = f__17815__auto__.call(null);(statearr_38531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___38535);
return statearr_38531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___38535))
);
if(typeof expenses.core.t38532 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38532 = (function (owner,app,loading,meta38533){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta38533 = meta38533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38532.cljs$lang$type = true;
expenses.core.t38532.cljs$lang$ctorStr = "expenses.core/t38532";
expenses.core.t38532.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38532");
});
expenses.core.t38532.prototype.om$core$IRender$ = true;
expenses.core.t38532.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,"loading");
});
expenses.core.t38532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38534){var self__ = this;
var _38534__$1 = this;return self__.meta38533;
});
expenses.core.t38532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38534,meta38533__$1){var self__ = this;
var _38534__$1 = this;return (new expenses.core.t38532(self__.owner,self__.app,self__.loading,meta38533__$1));
});
expenses.core.__GT_t38532 = (function __GT_t38532(owner__$1,app__$1,loading__$1,meta38533){return (new expenses.core.t38532(owner__$1,app__$1,loading__$1,meta38533));
});
}
return (new expenses.core.t38532(owner,app,loading,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t38541 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38541 = (function (owner,app,error_component,meta38542){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta38542 = meta38542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38541.cljs$lang$type = true;
expenses.core.t38541.cljs$lang$ctorStr = "expenses.core/t38541";
expenses.core.t38541.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38541");
});
expenses.core.t38541.prototype.om$core$IRender$ = true;
expenses.core.t38541.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,"error");
});
expenses.core.t38541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38543){var self__ = this;
var _38543__$1 = this;return self__.meta38542;
});
expenses.core.t38541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38543,meta38542__$1){var self__ = this;
var _38543__$1 = this;return (new expenses.core.t38541(self__.owner,self__.app,self__.error_component,meta38542__$1));
});
expenses.core.__GT_t38541 = (function __GT_t38541(owner__$1,app__$1,error_component__$1,meta38542){return (new expenses.core.t38541(owner__$1,app__$1,error_component__$1,meta38542));
});
}
return (new expenses.core.t38541(owner,app,error_component,null));
});
expenses.core.formdata_from_map = (function formdata_from_map(m){var fd = (new FormData());var seq__38550_38556 = cljs.core.seq.call(null,m);var chunk__38551_38557 = null;var count__38552_38558 = (0);var i__38553_38559 = (0);while(true){
if((i__38553_38559 < count__38552_38558))
{var vec__38554_38560 = cljs.core._nth.call(null,chunk__38551_38557,i__38553_38559);var k_38561 = cljs.core.nth.call(null,vec__38554_38560,(0),null);var v_38562 = cljs.core.nth.call(null,vec__38554_38560,(1),null);fd.append(cljs.core.name.call(null,k_38561),v_38562);
{
var G__38563 = seq__38550_38556;
var G__38564 = chunk__38551_38557;
var G__38565 = count__38552_38558;
var G__38566 = (i__38553_38559 + (1));
seq__38550_38556 = G__38563;
chunk__38551_38557 = G__38564;
count__38552_38558 = G__38565;
i__38553_38559 = G__38566;
continue;
}
} else
{var temp__4126__auto___38567 = cljs.core.seq.call(null,seq__38550_38556);if(temp__4126__auto___38567)
{var seq__38550_38568__$1 = temp__4126__auto___38567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38550_38568__$1))
{var c__12141__auto___38569 = cljs.core.chunk_first.call(null,seq__38550_38568__$1);{
var G__38570 = cljs.core.chunk_rest.call(null,seq__38550_38568__$1);
var G__38571 = c__12141__auto___38569;
var G__38572 = cljs.core.count.call(null,c__12141__auto___38569);
var G__38573 = (0);
seq__38550_38556 = G__38570;
chunk__38551_38557 = G__38571;
count__38552_38558 = G__38572;
i__38553_38559 = G__38573;
continue;
}
} else
{var vec__38555_38574 = cljs.core.first.call(null,seq__38550_38568__$1);var k_38575 = cljs.core.nth.call(null,vec__38555_38574,(0),null);var v_38576 = cljs.core.nth.call(null,vec__38555_38574,(1),null);fd.append(cljs.core.name.call(null,k_38575),v_38576);
{
var G__38577 = cljs.core.next.call(null,seq__38550_38568__$1);
var G__38578 = null;
var G__38579 = (0);
var G__38580 = (0);
seq__38550_38556 = G__38577;
chunk__38551_38557 = G__38578;
count__38552_38558 = G__38579;
i__38553_38559 = G__38580;
continue;
}
}
} else
{}
}
break;
}
return fd;
});
expenses.core.post_data = (function post_data(ch,category,amount,note){var url = "https://docs.google.com/forms/d/11p1qaDZYYXVnRq7nupXb-Qxg55Ha4JN6KQH2-6EZcRg/formResponse";var data = new cljs.core.PersistentArrayMap(null, 3, ["entry.79683136",category,"entry.697543822",amount,"entry.573062127",note], null);return goog.net.XhrIo.send(url,((function (url,data){
return (function (res){return null;
});})(url,data))
,"POST",expenses.core.formdata_from_map.call(null,data));
});
expenses.core.form_component = (function form_component(app,owner){if(typeof expenses.core.t38584 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38584 = (function (owner,app,form_component,meta38585){
this.owner = owner;
this.app = app;
this.form_component = form_component;
this.meta38585 = meta38585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38584.cljs$lang$type = true;
expenses.core.t38584.cljs$lang$ctorStr = "expenses.core/t38584";
expenses.core.t38584.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38584");
});
expenses.core.t38584.prototype.om$core$IRender$ = true;
expenses.core.t38584.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,"form");
});
expenses.core.t38584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38586){var self__ = this;
var _38586__$1 = this;return self__.meta38585;
});
expenses.core.t38584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38586,meta38585__$1){var self__ = this;
var _38586__$1 = this;return (new expenses.core.t38584(self__.owner,self__.app,self__.form_component,meta38585__$1));
});
expenses.core.__GT_t38584 = (function __GT_t38584(owner__$1,app__$1,form_component__$1,meta38585){return (new expenses.core.t38584(owner__$1,app__$1,form_component__$1,meta38585));
});
}
return (new expenses.core.t38584(owner,app,form_component,null));
});
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t38591 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38591 = (function (owner,app,menu_component,meta38592){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta38592 = meta38592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38591.cljs$lang$type = true;
expenses.core.t38591.cljs$lang$ctorStr = "expenses.core/t38591";
expenses.core.t38591.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38591");
});
expenses.core.t38591.prototype.om$core$IRender$ = true;
expenses.core.t38591.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this__14239__auto____$1){
return (function (p1__38587_SHARP_){return React.DOM.li(null,React.DOM.a({"href": "#"},p1__38587_SHARP_));
});})(this__14239__auto____$1))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["home","add","save","restore"], null))))));
});
expenses.core.t38591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38593){var self__ = this;
var _38593__$1 = this;return self__.meta38592;
});
expenses.core.t38591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38593,meta38592__$1){var self__ = this;
var _38593__$1 = this;return (new expenses.core.t38591(self__.owner,self__.app,self__.menu_component,meta38592__$1));
});
expenses.core.__GT_t38591 = (function __GT_t38591(owner__$1,app__$1,menu_component__$1,meta38592){return (new expenses.core.t38591(owner__$1,app__$1,menu_component__$1,meta38592));
});
}
return (new expenses.core.t38591(owner,app,menu_component,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t38598 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t38598 = (function (owner,app,dispatch_component,meta38599){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta38599 = meta38599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t38598.cljs$lang$type = true;
expenses.core.t38598.cljs$lang$ctorStr = "expenses.core/t38598";
expenses.core.t38598.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t38598");
});
expenses.core.t38598.prototype.om$core$IRender$ = true;
expenses.core.t38598.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1(null,"Expenses.")),om.core.build.call(null,(function (){var G__38601 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__38601) {
case "error":
return expenses.core.error_component;

break;
case "add":
return expenses.core.form_component;

break;
case "main":
return expenses.core.main_component;

break;
default:
return expenses.core.loading;

}
})(),self__.app));
});
expenses.core.t38598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38600){var self__ = this;
var _38600__$1 = this;return self__.meta38599;
});
expenses.core.t38598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38600,meta38599__$1){var self__ = this;
var _38600__$1 = this;return (new expenses.core.t38598(self__.owner,self__.app,self__.dispatch_component,meta38599__$1));
});
expenses.core.__GT_t38598 = (function __GT_t38598(owner__$1,app__$1,dispatch_component__$1,meta38599){return (new expenses.core.t38598(owner__$1,app__$1,dispatch_component__$1,meta38599));
});
}
return (new expenses.core.t38598(owner,app,dispatch_component,null));
});
expenses.core.main = (function main(){return om.core.root.call(null,expenses.core.dispatch_component,expenses.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("layout")], null));
});
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));
expenses.core.main.call(null);

//# sourceMappingURL=core.js.map