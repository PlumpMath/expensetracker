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
expenses.core.adj_date = (function adj_date(date,span,n){var G__40400 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__40400) {
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
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t40407 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40407 = (function (owner,app,buttons_component,meta40408){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta40408 = meta40408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40407.cljs$lang$type = true;
expenses.core.t40407.cljs$lang$ctorStr = "expenses.core/t40407";
expenses.core.t40407.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40407");
});
expenses.core.t40407.prototype.om$core$IRenderState$ = true;
expenses.core.t40407.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__40410){var self__ = this;
var map__40411 = p__40410;var map__40411__$1 = ((cljs.core.seq_QMARK_.call(null,map__40411))?cljs.core.apply.call(null,cljs.core.hash_map,map__40411):map__40411);var current_focus_date = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739));
});})(___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__40411,map__40411__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t40407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40409){var self__ = this;
var _40409__$1 = this;return self__.meta40408;
});
expenses.core.t40407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40409,meta40408__$1){var self__ = this;
var _40409__$1 = this;return (new expenses.core.t40407(self__.owner,self__.app,self__.buttons_component,meta40408__$1));
});
expenses.core.__GT_t40407 = (function __GT_t40407(owner__$1,app__$1,buttons_component__$1,meta40408){return (new expenses.core.t40407(owner__$1,app__$1,buttons_component__$1,meta40408));
});
}
return (new expenses.core.t40407(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t40415 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40415 = (function (owner,items,total_component,meta40416){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta40416 = meta40416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40415.cljs$lang$type = true;
expenses.core.t40415.cljs$lang$ctorStr = "expenses.core/t40415";
expenses.core.t40415.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40415");
});
expenses.core.t40415.prototype.om$core$IRender$ = true;
expenses.core.t40415.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),self__.items)))+"\u5186")));
});
expenses.core.t40415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40417){var self__ = this;
var _40417__$1 = this;return self__.meta40416;
});
expenses.core.t40415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40417,meta40416__$1){var self__ = this;
var _40417__$1 = this;return (new expenses.core.t40415(self__.owner,self__.items,self__.total_component,meta40416__$1));
});
expenses.core.__GT_t40415 = (function __GT_t40415(owner__$1,items__$1,total_component__$1,meta40416){return (new expenses.core.t40415(owner__$1,items__$1,total_component__$1,meta40416));
});
}
return (new expenses.core.t40415(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__40418_SHARP_){return p1__40418_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t40422 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40422 = (function (owner,item,expense_list_item,meta40423){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta40423 = meta40423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40422.cljs$lang$type = true;
expenses.core.t40422.cljs$lang$ctorStr = "expenses.core/t40422";
expenses.core.t40422.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40422");
});
expenses.core.t40422.prototype.om$core$IRender$ = true;
expenses.core.t40422.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li({"className": "pure-g"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getHours(),self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getDate(),(self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getMonth() + (1)),self__.item.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)).getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(self__.item))}, "className": "category-button"},cljs.core.name.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(self__.item))),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.call(null,new cljs.core.Keyword(null,"amount","amount",364489504)))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.call(null,new cljs.core.Keyword(null,"note","note",1426297904))));
});
expenses.core.t40422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40424){var self__ = this;
var _40424__$1 = this;return self__.meta40423;
});
expenses.core.t40422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40424,meta40423__$1){var self__ = this;
var _40424__$1 = this;return (new expenses.core.t40422(self__.owner,self__.item,self__.expense_list_item,meta40423__$1));
});
expenses.core.__GT_t40422 = (function __GT_t40422(owner__$1,item__$1,expense_list_item__$1,meta40423){return (new expenses.core.t40422(owner__$1,item__$1,expense_list_item__$1,meta40423));
});
}
return (new expenses.core.t40422(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t40428 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40428 = (function (owner,items,expense_list_component,meta40429){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta40429 = meta40429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40428.cljs$lang$type = true;
expenses.core.t40428.cljs$lang$ctorStr = "expenses.core/t40428";
expenses.core.t40428.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40428");
});
expenses.core.t40428.prototype.om$core$IRender$ = true;
expenses.core.t40428.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t40428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40430){var self__ = this;
var _40430__$1 = this;return self__.meta40429;
});
expenses.core.t40428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40430,meta40429__$1){var self__ = this;
var _40430__$1 = this;return (new expenses.core.t40428(self__.owner,self__.items,self__.expense_list_component,meta40429__$1));
});
expenses.core.__GT_t40428 = (function __GT_t40428(owner__$1,items__$1,expense_list_component__$1,meta40429){return (new expenses.core.t40428(owner__$1,items__$1,expense_list_component__$1,meta40429));
});
}
return (new expenses.core.t40428(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__40432,f_date,items){var map__40437 = p__40432;var map__40437__$1 = ((cljs.core.seq_QMARK_.call(null,map__40437))?cljs.core.apply.call(null,cljs.core.hash_map,map__40437):map__40437);var category = cljs.core.get.call(null,map__40437__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__40437__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__40437,map__40437__$1,category,span){
return (function (p1__40431_SHARP_){var and__11373__auto__ = (function (){var G__40439 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__40439) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__40431_SHARP_).getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__40431_SHARP_).getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__40431_SHARP_).getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__40440 = category;if(cljs.core._EQ_.call(null,null,G__40440))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__40431_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__40437,map__40437__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t40470 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40470 = (function (owner,app,main_component,meta40471){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta40471 = meta40471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40470.cljs$lang$type = true;
expenses.core.t40470.cljs$lang$ctorStr = "expenses.core/t40470";
expenses.core.t40470.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40470");
});
expenses.core.t40470.prototype.om$core$IRenderState$ = true;
expenses.core.t40470.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__40473){var self__ = this;
var map__40474 = p__40473;var map__40474__$1 = ((cljs.core.seq_QMARK_.call(null,map__40474))?cljs.core.apply.call(null,cljs.core.hash_map,map__40474):map__40474);var current_focus_date = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__40474,map__40474__$1,current_focus_date,current_focus,focus_chan){
return (function (p1__40443_SHARP_){return (- new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__40443_SHARP_).getTime());
});})(___$1,map__40474,map__40474__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t40470.prototype.om$core$IInitState$ = true;
expenses.core.t40470.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (new Date());var c__17814__auto___40496 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___40496,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___40496,focus_chan,now,___$1){
return (function (state_40484){var state_val_40485 = (state_40484[(1)]);if((state_val_40485 === (4)))
{var inst_40477 = (state_40484[(2)]);var inst_40478 = (function (){var new_focus = inst_40477;return ((function (new_focus,inst_40477,state_val_40485,c__17814__auto___40496,focus_chan,now,___$1){
return (function (p1__40442_SHARP_){return cljs.core.merge.call(null,p1__40442_SHARP_,new_focus);
});
;})(new_focus,inst_40477,state_val_40485,c__17814__auto___40496,focus_chan,now,___$1))
})();var inst_40479 = om.core.update_state_BANG_.call(null,self__.owner,inst_40478);var state_40484__$1 = (function (){var statearr_40486 = state_40484;(statearr_40486[(7)] = inst_40479);
return statearr_40486;
})();var statearr_40487_40497 = state_40484__$1;(statearr_40487_40497[(2)] = null);
(statearr_40487_40497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40485 === (3)))
{var inst_40482 = (state_40484[(2)]);var state_40484__$1 = state_40484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40484__$1,inst_40482);
} else
{if((state_val_40485 === (2)))
{var state_40484__$1 = state_40484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40484__$1,(4),focus_chan);
} else
{if((state_val_40485 === (1)))
{var state_40484__$1 = state_40484;var statearr_40488_40498 = state_40484__$1;(statearr_40488_40498[(2)] = null);
(statearr_40488_40498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___40496,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___40496,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_40492 = [null,null,null,null,null,null,null,null];(statearr_40492[(0)] = state_machine__17800__auto__);
(statearr_40492[(1)] = (1));
return statearr_40492;
});
var state_machine__17800__auto____1 = (function (state_40484){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_40484);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e40493){if((e40493 instanceof Object))
{var ex__17803__auto__ = e40493;var statearr_40494_40499 = state_40484;(statearr_40494_40499[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40493;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40500 = state_40484;
state_40484 = G__40500;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_40484){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_40484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___40496,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_40495 = f__17815__auto__.call(null);(statearr_40495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___40496);
return statearr_40495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___40496,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t40470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40472){var self__ = this;
var _40472__$1 = this;return self__.meta40471;
});
expenses.core.t40470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40472,meta40471__$1){var self__ = this;
var _40472__$1 = this;return (new expenses.core.t40470(self__.owner,self__.app,self__.main_component,meta40471__$1));
});
expenses.core.__GT_t40470 = (function __GT_t40470(owner__$1,app__$1,main_component__$1,meta40471){return (new expenses.core.t40470(owner__$1,app__$1,main_component__$1,meta40471));
});
}
return (new expenses.core.t40470(owner,app,main_component,null));
});
expenses.core.async_get = (function async_get(app){var uri = "https://script.google.com/macros/s/AKfycbwRMHhtxd1TBQMVpmeV-25RJaCw2LVVSHL9O8yiY31qyJKl9N8/exec";var req = (new goog.net.Jsonp((new goog.Uri(uri))));return req.send(null,((function (uri,req){
return (function (p1__40501_SHARP_){var data = new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,p1__40501_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));var parsed = cljs.core.map.call(null,((function (data,uri,req){
return (function (d){return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(new cljs.core.Keyword(null,"Timestamp","Timestamp",-1103745255).cljs$core$IFn$_invoke$arity$1(d))));
});})(data,uri,req))
,data);return om.core.transact_BANG_.call(null,app,((function (data,parsed,uri,req){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),parsed);
});})(data,parsed,uri,req))
);
});})(uri,req))
);
});
expenses.core.loading = (function loading(app,owner){var c__17814__auto___40530 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___40530){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___40530){
return (function (state_40518){var state_val_40519 = (state_40518[(1)]);if((state_val_40519 === (1)))
{var inst_40516 = expenses.core.async_get.call(null,app);var state_40518__$1 = state_40518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40518__$1,inst_40516);
} else
{return null;
}
});})(c__17814__auto___40530))
;return ((function (switch__17799__auto__,c__17814__auto___40530){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_40523 = [null,null,null,null,null,null,null];(statearr_40523[(0)] = state_machine__17800__auto__);
(statearr_40523[(1)] = (1));
return statearr_40523;
});
var state_machine__17800__auto____1 = (function (state_40518){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_40518);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e40524){if((e40524 instanceof Object))
{var ex__17803__auto__ = e40524;var statearr_40525_40531 = state_40518;(statearr_40525_40531[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40518);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40524;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40532 = state_40518;
state_40518 = G__40532;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_40518){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_40518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___40530))
})();var state__17816__auto__ = (function (){var statearr_40526 = f__17815__auto__.call(null);(statearr_40526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___40530);
return statearr_40526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___40530))
);
if(typeof expenses.core.t40527 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40527 = (function (owner,app,loading,meta40528){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta40528 = meta40528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40527.cljs$lang$type = true;
expenses.core.t40527.cljs$lang$ctorStr = "expenses.core/t40527";
expenses.core.t40527.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40527");
});
expenses.core.t40527.prototype.om$core$IRender$ = true;
expenses.core.t40527.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,"loading");
});
expenses.core.t40527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40529){var self__ = this;
var _40529__$1 = this;return self__.meta40528;
});
expenses.core.t40527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40529,meta40528__$1){var self__ = this;
var _40529__$1 = this;return (new expenses.core.t40527(self__.owner,self__.app,self__.loading,meta40528__$1));
});
expenses.core.__GT_t40527 = (function __GT_t40527(owner__$1,app__$1,loading__$1,meta40528){return (new expenses.core.t40527(owner__$1,app__$1,loading__$1,meta40528));
});
}
return (new expenses.core.t40527(owner,app,loading,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t40536 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40536 = (function (owner,app,error_component,meta40537){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta40537 = meta40537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40536.cljs$lang$type = true;
expenses.core.t40536.cljs$lang$ctorStr = "expenses.core/t40536";
expenses.core.t40536.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40536");
});
expenses.core.t40536.prototype.om$core$IRender$ = true;
expenses.core.t40536.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,"error");
});
expenses.core.t40536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40538){var self__ = this;
var _40538__$1 = this;return self__.meta40537;
});
expenses.core.t40536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40538,meta40537__$1){var self__ = this;
var _40538__$1 = this;return (new expenses.core.t40536(self__.owner,self__.app,self__.error_component,meta40537__$1));
});
expenses.core.__GT_t40536 = (function __GT_t40536(owner__$1,app__$1,error_component__$1,meta40537){return (new expenses.core.t40536(owner__$1,app__$1,error_component__$1,meta40537));
});
}
return (new expenses.core.t40536(owner,app,error_component,null));
});
expenses.core.formdata_from_map = (function formdata_from_map(m){var fd = (new FormData());var seq__40545_40551 = cljs.core.seq.call(null,m);var chunk__40546_40552 = null;var count__40547_40553 = (0);var i__40548_40554 = (0);while(true){
if((i__40548_40554 < count__40547_40553))
{var vec__40549_40555 = cljs.core._nth.call(null,chunk__40546_40552,i__40548_40554);var k_40556 = cljs.core.nth.call(null,vec__40549_40555,(0),null);var v_40557 = cljs.core.nth.call(null,vec__40549_40555,(1),null);fd.append(cljs.core.name.call(null,k_40556),v_40557);
{
var G__40558 = seq__40545_40551;
var G__40559 = chunk__40546_40552;
var G__40560 = count__40547_40553;
var G__40561 = (i__40548_40554 + (1));
seq__40545_40551 = G__40558;
chunk__40546_40552 = G__40559;
count__40547_40553 = G__40560;
i__40548_40554 = G__40561;
continue;
}
} else
{var temp__4126__auto___40562 = cljs.core.seq.call(null,seq__40545_40551);if(temp__4126__auto___40562)
{var seq__40545_40563__$1 = temp__4126__auto___40562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40545_40563__$1))
{var c__12141__auto___40564 = cljs.core.chunk_first.call(null,seq__40545_40563__$1);{
var G__40565 = cljs.core.chunk_rest.call(null,seq__40545_40563__$1);
var G__40566 = c__12141__auto___40564;
var G__40567 = cljs.core.count.call(null,c__12141__auto___40564);
var G__40568 = (0);
seq__40545_40551 = G__40565;
chunk__40546_40552 = G__40566;
count__40547_40553 = G__40567;
i__40548_40554 = G__40568;
continue;
}
} else
{var vec__40550_40569 = cljs.core.first.call(null,seq__40545_40563__$1);var k_40570 = cljs.core.nth.call(null,vec__40550_40569,(0),null);var v_40571 = cljs.core.nth.call(null,vec__40550_40569,(1),null);fd.append(cljs.core.name.call(null,k_40570),v_40571);
{
var G__40572 = cljs.core.next.call(null,seq__40545_40563__$1);
var G__40573 = null;
var G__40574 = (0);
var G__40575 = (0);
seq__40545_40551 = G__40572;
chunk__40546_40552 = G__40573;
count__40547_40553 = G__40574;
i__40548_40554 = G__40575;
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
expenses.core.form_component = (function form_component(app,owner){if(typeof expenses.core.t40579 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40579 = (function (owner,app,form_component,meta40580){
this.owner = owner;
this.app = app;
this.form_component = form_component;
this.meta40580 = meta40580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40579.cljs$lang$type = true;
expenses.core.t40579.cljs$lang$ctorStr = "expenses.core/t40579";
expenses.core.t40579.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40579");
});
expenses.core.t40579.prototype.om$core$IRender$ = true;
expenses.core.t40579.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,"form");
});
expenses.core.t40579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40581){var self__ = this;
var _40581__$1 = this;return self__.meta40580;
});
expenses.core.t40579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40581,meta40580__$1){var self__ = this;
var _40581__$1 = this;return (new expenses.core.t40579(self__.owner,self__.app,self__.form_component,meta40580__$1));
});
expenses.core.__GT_t40579 = (function __GT_t40579(owner__$1,app__$1,form_component__$1,meta40580){return (new expenses.core.t40579(owner__$1,app__$1,form_component__$1,meta40580));
});
}
return (new expenses.core.t40579(owner,app,form_component,null));
});
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t40586 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40586 = (function (owner,app,menu_component,meta40587){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta40587 = meta40587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40586.cljs$lang$type = true;
expenses.core.t40586.cljs$lang$ctorStr = "expenses.core/t40586";
expenses.core.t40586.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40586");
});
expenses.core.t40586.prototype.om$core$IRender$ = true;
expenses.core.t40586.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this__14239__auto____$1){
return (function (p1__40582_SHARP_){return React.DOM.li(null,React.DOM.a({"href": "#"},p1__40582_SHARP_));
});})(this__14239__auto____$1))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["home","add","save","restore"], null))))));
});
expenses.core.t40586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40588){var self__ = this;
var _40588__$1 = this;return self__.meta40587;
});
expenses.core.t40586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40588,meta40587__$1){var self__ = this;
var _40588__$1 = this;return (new expenses.core.t40586(self__.owner,self__.app,self__.menu_component,meta40587__$1));
});
expenses.core.__GT_t40586 = (function __GT_t40586(owner__$1,app__$1,menu_component__$1,meta40587){return (new expenses.core.t40586(owner__$1,app__$1,menu_component__$1,meta40587));
});
}
return (new expenses.core.t40586(owner,app,menu_component,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t40593 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t40593 = (function (owner,app,dispatch_component,meta40594){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta40594 = meta40594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t40593.cljs$lang$type = true;
expenses.core.t40593.cljs$lang$ctorStr = "expenses.core/t40593";
expenses.core.t40593.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t40593");
});
expenses.core.t40593.prototype.om$core$IRender$ = true;
expenses.core.t40593.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1(null,"Expenses.")),om.core.build.call(null,(function (){var G__40596 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__40596) {
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
expenses.core.t40593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40595){var self__ = this;
var _40595__$1 = this;return self__.meta40594;
});
expenses.core.t40593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40595,meta40594__$1){var self__ = this;
var _40595__$1 = this;return (new expenses.core.t40593(self__.owner,self__.app,self__.dispatch_component,meta40594__$1));
});
expenses.core.__GT_t40593 = (function __GT_t40593(owner__$1,app__$1,dispatch_component__$1,meta40594){return (new expenses.core.t40593(owner__$1,app__$1,dispatch_component__$1,meta40594));
});
}
return (new expenses.core.t40593(owner,app,dispatch_component,null));
});
expenses.core.main = (function main(){return om.core.root.call(null,expenses.core.dispatch_component,expenses.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("layout")], null));
});
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));
expenses.core.main.call(null);

//# sourceMappingURL=core.js.map