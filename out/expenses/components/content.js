// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.components.content');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('expenses.dateutil');
goog.require('expenses.dateutil');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
expenses.components.content.buttons_component = (function buttons_component(app,owner){if(typeof expenses.components.content.t10059 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.content.t10059 = (function (owner,app,buttons_component,meta10060){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta10060 = meta10060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.content.t10059.cljs$lang$type = true;
expenses.components.content.t10059.cljs$lang$ctorStr = "expenses.components.content/t10059";
expenses.components.content.t10059.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.components.content/t10059");
});
expenses.components.content.t10059.prototype.om$core$IRender$ = true;
expenses.components.content.t10059.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var current_date = new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (current_date,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (current_date,___$1){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),expenses.dateutil.adj_date.call(null,new cljs.core.Keyword(null,"day","day",-274800446),current_date,(-1)));
});})(current_date,___$1))
);
});})(current_date,___$1))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (current_date,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (current_date,___$1){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(new Date()));
});})(current_date,___$1))
);
});})(current_date,___$1))
, "className": "pure-u-2-3"},expenses.dateutil.format_date.call(null,current_date)),React.DOM.div({"onClick": ((function (current_date,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (current_date,___$1){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),expenses.dateutil.adj_date.call(null,new cljs.core.Keyword(null,"day","day",-274800446),current_date,(1)));
});})(current_date,___$1))
);
});})(current_date,___$1))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (current_date,___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (current_date,___$1){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739));
});})(current_date,___$1))
);
});})(current_date,___$1))
, "className": "pure-u-1"},"Add"));
});
expenses.components.content.t10059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10061){var self__ = this;
var _10061__$1 = this;return self__.meta10060;
});
expenses.components.content.t10059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10061,meta10060__$1){var self__ = this;
var _10061__$1 = this;return (new expenses.components.content.t10059(self__.owner,self__.app,self__.buttons_component,meta10060__$1));
});
expenses.components.content.__GT_t10059 = (function __GT_t10059(owner__$1,app__$1,buttons_component__$1,meta10060){return (new expenses.components.content.t10059(owner__$1,app__$1,buttons_component__$1,meta10060));
});
}
return (new expenses.components.content.t10059(owner,app,buttons_component,null));
});
expenses.components.content.total_component = (function total_component(items,owner){if(typeof expenses.components.content.t10066 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.content.t10066 = (function (owner,items,total_component,meta10067){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta10067 = meta10067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.content.t10066.cljs$lang$type = true;
expenses.components.content.t10066.cljs$lang$ctorStr = "expenses.components.content/t10066";
expenses.components.content.t10066.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.components.content/t10066");
});
expenses.components.content.t10066.prototype.om$core$IRender$ = true;
expenses.components.content.t10066.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__10062_SHARP_){return p1__10062_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.components.content.t10066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10068){var self__ = this;
var _10068__$1 = this;return self__.meta10067;
});
expenses.components.content.t10066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10068,meta10067__$1){var self__ = this;
var _10068__$1 = this;return (new expenses.components.content.t10066(self__.owner,self__.items,self__.total_component,meta10067__$1));
});
expenses.components.content.__GT_t10066 = (function __GT_t10066(owner__$1,items__$1,total_component__$1,meta10067){return (new expenses.components.content.t10066(owner__$1,items__$1,total_component__$1,meta10067));
});
}
return (new expenses.components.content.t10066(owner,items,total_component,null));
});
expenses.components.content.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__10069_SHARP_){return p1__10069_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.components.content.touch_end_check = (function touch_end_check(e,owner,state){var touch_end = (e.changedTouches[(0)]);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__10070_SHARP_){return cljs.core.assoc.call(null,p1__10070_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__10071_SHARP_){return cljs.core.assoc.call(null,p1__10071_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{if(cljs.core.truth_((function (){var and__3548__auto__ = new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(and__3548__auto__))
{return (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (touch_end.pageX - new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX)));
} else
{return and__3548__auto__;
}
})()))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__10072_SHARP_){return cljs.core.assoc.call(null,p1__10072_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{return null;
}
}
}
});
expenses.components.content.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.components.content.t10078 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.content.t10078 = (function (owner,item,expense_list_item,meta10079){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta10079 = meta10079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.content.t10078.cljs$lang$type = true;
expenses.components.content.t10078.cljs$lang$ctorStr = "expenses.components.content/t10078";
expenses.components.content.t10078.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.components.content/t10078");
});
expenses.components.content.t10078.prototype.om$core$IRenderState$ = true;
expenses.components.content.t10078.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onDoubleClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swiped","swiped",-708698685)], null),cljs.core.not);
});})(___$1))
, "onTouchEnd": ((function (___$1){
return (function (e){return expenses.components.content.touch_end_check.call(null,e,self__.owner,state);
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__10073_SHARP_){return cljs.core.assoc.call(null,p1__10073_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__10074_SHARP_){return cljs.core.assoc.call(null,p1__10074_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},expenses.dateutil.format_time.call(null,self__.item.get("date"))),React.DOM.span({"className": "date"},expenses.dateutil.format_date.call(null,self__.item.get("date"))),React.DOM.span({"style": {"backgroundColor": expenses.components.content.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.components.content.t10078.prototype.om$core$IInitState$ = true;
expenses.components.content.t10078.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.components.content.t10078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10080){var self__ = this;
var _10080__$1 = this;return self__.meta10079;
});
expenses.components.content.t10078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10080,meta10079__$1){var self__ = this;
var _10080__$1 = this;return (new expenses.components.content.t10078(self__.owner,self__.item,self__.expense_list_item,meta10079__$1));
});
expenses.components.content.__GT_t10078 = (function __GT_t10078(owner__$1,item__$1,expense_list_item__$1,meta10079){return (new expenses.components.content.t10078(owner__$1,item__$1,expense_list_item__$1,meta10079));
});
}
return (new expenses.components.content.t10078(owner,item,expense_list_item,null));
});
expenses.components.content.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.components.content.t10084 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.content.t10084 = (function (owner,items,expense_list_component,meta10085){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta10085 = meta10085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.content.t10084.cljs$lang$type = true;
expenses.components.content.t10084.cljs$lang$ctorStr = "expenses.components.content/t10084";
expenses.components.content.t10084.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.components.content/t10084");
});
expenses.components.content.t10084.prototype.om$core$IRender$ = true;
expenses.components.content.t10084.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.components.content.expense_list_item,self__.items)));
});
expenses.components.content.t10084.prototype.om$core$IInitState$ = true;
expenses.components.content.t10084.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.components.content.t10084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10086){var self__ = this;
var _10086__$1 = this;return self__.meta10085;
});
expenses.components.content.t10084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10086,meta10085__$1){var self__ = this;
var _10086__$1 = this;return (new expenses.components.content.t10084(self__.owner,self__.items,self__.expense_list_component,meta10085__$1));
});
expenses.components.content.__GT_t10084 = (function __GT_t10084(owner__$1,items__$1,expense_list_component__$1,meta10085){return (new expenses.components.content.t10084(owner__$1,items__$1,expense_list_component__$1,meta10085));
});
}
return (new expenses.components.content.t10084(owner,items,expense_list_component,null));
});
expenses.components.content.filter_items = (function filter_items(span,date,items){return cljs.core.filter.call(null,(function (p1__10087_SHARP_){var G__10089 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__10089) {
case "year":
return cljs.core._EQ_.call(null,date.getYear(),p1__10087_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,date.getMonth(),p1__10087_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,date.getDate(),p1__10087_SHARP_.get("date").getDate());

break;
default:
return true;

}
}),items);
});
expenses.components.content.main_component = (function main_component(app,owner){if(typeof expenses.components.content.t10094 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.content.t10094 = (function (owner,app,main_component,meta10095){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta10095 = meta10095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.content.t10094.cljs$lang$type = true;
expenses.components.content.t10094.cljs$lang$ctorStr = "expenses.components.content/t10094";
expenses.components.content.t10094.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.components.content/t10094");
});
expenses.components.content.t10094.prototype.om$core$IRender$ = true;
expenses.components.content.t10094.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1){
return (function (item){return (- item.get("date").getTime());
});})(___$1))
,expenses.components.content.filter_items.call(null,new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.components.content.buttons_component,self__.app),om.core.build.call(null,expenses.components.content.total_component,current_items),om.core.build.call(null,expenses.components.content.expense_list_component,current_items));
});
expenses.components.content.t10094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10096){var self__ = this;
var _10096__$1 = this;return self__.meta10095;
});
expenses.components.content.t10094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10096,meta10095__$1){var self__ = this;
var _10096__$1 = this;return (new expenses.components.content.t10094(self__.owner,self__.app,self__.main_component,meta10095__$1));
});
expenses.components.content.__GT_t10094 = (function __GT_t10094(owner__$1,app__$1,main_component__$1,meta10095){return (new expenses.components.content.t10094(owner__$1,app__$1,main_component__$1,meta10095));
});
}
return (new expenses.components.content.t10094(owner,app,main_component,null));
});

//# sourceMappingURL=content.js.map