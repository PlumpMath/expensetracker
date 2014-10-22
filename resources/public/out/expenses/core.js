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
expenses.core.adj_date = (function adj_date(date,span,n){var G__174221 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__174221) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t174229 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174229 = (function (owner,app,menu_component,meta174230){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta174230 = meta174230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174229.cljs$lang$type = true;
expenses.core.t174229.cljs$lang$ctorStr = "expenses.core/t174229";
expenses.core.t174229.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174229");
});
expenses.core.t174229.prototype.om$core$IRender$ = true;
expenses.core.t174229.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__174223_SHARP_){return cljs.core.assoc.call(null,p1__174223_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(new Date()),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"TOP")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__174224_SHARP_){return cljs.core.assoc.call(null,p1__174224_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"ADD")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__174225_SHARP_){return cljs.core.assoc.call(null,p1__174225_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"LIST"))))));
});
expenses.core.t174229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174231){var self__ = this;
var _174231__$1 = this;return self__.meta174230;
});
expenses.core.t174229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174231,meta174230__$1){var self__ = this;
var _174231__$1 = this;return (new expenses.core.t174229(self__.owner,self__.app,self__.menu_component,meta174230__$1));
});
expenses.core.__GT_t174229 = (function __GT_t174229(owner__$1,app__$1,menu_component__$1,meta174230){return (new expenses.core.t174229(owner__$1,app__$1,menu_component__$1,meta174230));
});
}
return (new expenses.core.t174229(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t174237 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174237 = (function (owner,app,buttons_component,meta174238){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta174238 = meta174238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174237.cljs$lang$type = true;
expenses.core.t174237.cljs$lang$ctorStr = "expenses.core/t174237";
expenses.core.t174237.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174237");
});
expenses.core.t174237.prototype.om$core$IRenderState$ = true;
expenses.core.t174237.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__174240){var self__ = this;
var map__174241 = p__174240;var map__174241__$1 = ((cljs.core.seq_QMARK_.call(null,map__174241))?cljs.core.apply.call(null,cljs.core.hash_map,map__174241):map__174241);var current_focus_date = cljs.core.get.call(null,map__174241__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__174241__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__174241__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_focus_date);
});})(___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__174241,map__174241__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t174237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174239){var self__ = this;
var _174239__$1 = this;return self__.meta174238;
});
expenses.core.t174237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174239,meta174238__$1){var self__ = this;
var _174239__$1 = this;return (new expenses.core.t174237(self__.owner,self__.app,self__.buttons_component,meta174238__$1));
});
expenses.core.__GT_t174237 = (function __GT_t174237(owner__$1,app__$1,buttons_component__$1,meta174238){return (new expenses.core.t174237(owner__$1,app__$1,buttons_component__$1,meta174238));
});
}
return (new expenses.core.t174237(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t174246 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174246 = (function (owner,items,total_component,meta174247){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta174247 = meta174247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174246.cljs$lang$type = true;
expenses.core.t174246.cljs$lang$ctorStr = "expenses.core/t174246";
expenses.core.t174246.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174246");
});
expenses.core.t174246.prototype.om$core$IRender$ = true;
expenses.core.t174246.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__174242_SHARP_){return p1__174242_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t174246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174248){var self__ = this;
var _174248__$1 = this;return self__.meta174247;
});
expenses.core.t174246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174248,meta174247__$1){var self__ = this;
var _174248__$1 = this;return (new expenses.core.t174246(self__.owner,self__.items,self__.total_component,meta174247__$1));
});
expenses.core.__GT_t174246 = (function __GT_t174246(owner__$1,items__$1,total_component__$1,meta174247){return (new expenses.core.t174246(owner__$1,items__$1,total_component__$1,meta174247));
});
}
return (new expenses.core.t174246(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__174249_SHARP_){return p1__174249_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.touch_end_check = (function touch_end_check(e,owner,state){var touch_end = (e.changedTouches[(0)]);if(cljs.core.truth_(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__174250_SHARP_){return cljs.core.assoc.call(null,p1__174250_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
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
return (function (p1__174251_SHARP_){return cljs.core.assoc.call(null,p1__174251_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{return null;
}
}
} else
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__174252_SHARP_){return cljs.core.assoc.call(null,p1__174252_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
}
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t174258 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174258 = (function (owner,item,expense_list_item,meta174259){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta174259 = meta174259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174258.cljs$lang$type = true;
expenses.core.t174258.cljs$lang$ctorStr = "expenses.core/t174258";
expenses.core.t174258.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174258");
});
expenses.core.t174258.prototype.om$core$IRenderState$ = true;
expenses.core.t174258.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onTouchEnd": ((function (___$1){
return (function (e){return expenses.core.touch_end_check.call(null,e,self__.owner,state);
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__174253_SHARP_){return cljs.core.assoc.call(null,p1__174253_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__174254_SHARP_){return cljs.core.assoc.call(null,p1__174254_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.core.t174258.prototype.om$core$IInitState$ = true;
expenses.core.t174258.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t174258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174260){var self__ = this;
var _174260__$1 = this;return self__.meta174259;
});
expenses.core.t174258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174260,meta174259__$1){var self__ = this;
var _174260__$1 = this;return (new expenses.core.t174258(self__.owner,self__.item,self__.expense_list_item,meta174259__$1));
});
expenses.core.__GT_t174258 = (function __GT_t174258(owner__$1,item__$1,expense_list_item__$1,meta174259){return (new expenses.core.t174258(owner__$1,item__$1,expense_list_item__$1,meta174259));
});
}
return (new expenses.core.t174258(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t174264 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174264 = (function (owner,items,expense_list_component,meta174265){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta174265 = meta174265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174264.cljs$lang$type = true;
expenses.core.t174264.cljs$lang$ctorStr = "expenses.core/t174264";
expenses.core.t174264.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174264");
});
expenses.core.t174264.prototype.om$core$IRender$ = true;
expenses.core.t174264.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t174264.prototype.om$core$IInitState$ = true;
expenses.core.t174264.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t174264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174266){var self__ = this;
var _174266__$1 = this;return self__.meta174265;
});
expenses.core.t174264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174266,meta174265__$1){var self__ = this;
var _174266__$1 = this;return (new expenses.core.t174264(self__.owner,self__.items,self__.expense_list_component,meta174265__$1));
});
expenses.core.__GT_t174264 = (function __GT_t174264(owner__$1,items__$1,expense_list_component__$1,meta174265){return (new expenses.core.t174264(owner__$1,items__$1,expense_list_component__$1,meta174265));
});
}
return (new expenses.core.t174264(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__174268,f_date,items){var map__174273 = p__174268;var map__174273__$1 = ((cljs.core.seq_QMARK_.call(null,map__174273))?cljs.core.apply.call(null,cljs.core.hash_map,map__174273):map__174273);var category = cljs.core.get.call(null,map__174273__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__174273__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__174273,map__174273__$1,category,span){
return (function (p1__174267_SHARP_){var and__11373__auto__ = (function (){var G__174275 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__174275) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__174267_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__174267_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__174267_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__174276 = category;if(cljs.core._EQ_.call(null,null,G__174276))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__174267_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__174273,map__174273__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t174305 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174305 = (function (owner,app,main_component,meta174306){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta174306 = meta174306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174305.cljs$lang$type = true;
expenses.core.t174305.cljs$lang$ctorStr = "expenses.core/t174305";
expenses.core.t174305.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174305");
});
expenses.core.t174305.prototype.om$core$IRenderState$ = true;
expenses.core.t174305.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__174308){var self__ = this;
var map__174309 = p__174308;var map__174309__$1 = ((cljs.core.seq_QMARK_.call(null,map__174309))?cljs.core.apply.call(null,cljs.core.hash_map,map__174309):map__174309);var current_focus_date = cljs.core.get.call(null,map__174309__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__174309__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__174309__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__174309,map__174309__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__174309,map__174309__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t174305.prototype.om$core$IInitState$ = true;
expenses.core.t174305.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (cljs.core.truth_(new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app):(new Date()));var c__17814__auto___174331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___174331,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___174331,focus_chan,now,___$1){
return (function (state_174319){var state_val_174320 = (state_174319[(1)]);if((state_val_174320 === (4)))
{var inst_174312 = (state_174319[(2)]);var inst_174313 = (function (){var new_focus = inst_174312;return ((function (new_focus,inst_174312,state_val_174320,c__17814__auto___174331,focus_chan,now,___$1){
return (function (p1__174278_SHARP_){return cljs.core.merge.call(null,p1__174278_SHARP_,new_focus);
});
;})(new_focus,inst_174312,state_val_174320,c__17814__auto___174331,focus_chan,now,___$1))
})();var inst_174314 = om.core.update_state_BANG_.call(null,self__.owner,inst_174313);var state_174319__$1 = (function (){var statearr_174321 = state_174319;(statearr_174321[(7)] = inst_174314);
return statearr_174321;
})();var statearr_174322_174332 = state_174319__$1;(statearr_174322_174332[(2)] = null);
(statearr_174322_174332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174320 === (3)))
{var inst_174317 = (state_174319[(2)]);var state_174319__$1 = state_174319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_174319__$1,inst_174317);
} else
{if((state_val_174320 === (2)))
{var state_174319__$1 = state_174319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_174319__$1,(4),focus_chan);
} else
{if((state_val_174320 === (1)))
{var state_174319__$1 = state_174319;var statearr_174323_174333 = state_174319__$1;(statearr_174323_174333[(2)] = null);
(statearr_174323_174333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___174331,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___174331,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_174327 = [null,null,null,null,null,null,null,null];(statearr_174327[(0)] = state_machine__17800__auto__);
(statearr_174327[(1)] = (1));
return statearr_174327;
});
var state_machine__17800__auto____1 = (function (state_174319){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_174319);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e174328){if((e174328 instanceof Object))
{var ex__17803__auto__ = e174328;var statearr_174329_174334 = state_174319;(statearr_174329_174334[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_174319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e174328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__174335 = state_174319;
state_174319 = G__174335;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_174319){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_174319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___174331,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_174330 = f__17815__auto__.call(null);(statearr_174330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___174331);
return statearr_174330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___174331,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t174305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174307){var self__ = this;
var _174307__$1 = this;return self__.meta174306;
});
expenses.core.t174305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174307,meta174306__$1){var self__ = this;
var _174307__$1 = this;return (new expenses.core.t174305(self__.owner,self__.app,self__.main_component,meta174306__$1));
});
expenses.core.__GT_t174305 = (function __GT_t174305(owner__$1,app__$1,main_component__$1,meta174306){return (new expenses.core.t174305(owner__$1,app__$1,main_component__$1,meta174306));
});
}
return (new expenses.core.t174305(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t174345 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174345 = (function (owner,app,category_select,meta174346){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta174346 = meta174346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174345.cljs$lang$type = true;
expenses.core.t174345.cljs$lang$ctorStr = "expenses.core/t174345";
expenses.core.t174345.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174345");
});
expenses.core.t174345.prototype.om$core$IRenderState$ = true;
expenses.core.t174345.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.distinct.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__174336_SHARP_){return p1__174336_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__174337_SHARP_){if(typeof expenses.core.t174348 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174348 = (function (p1__174337_SHARP_,categories,state,_,meta174346,owner,app,category_select,meta174349){
this.p1__174337_SHARP_ = p1__174337_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta174346 = meta174346;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta174349 = meta174349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174348.cljs$lang$type = true;
expenses.core.t174348.cljs$lang$ctorStr = "expenses.core/t174348";
expenses.core.t174348.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174348");
});})(categories,___$1))
;
expenses.core.t174348.prototype.om$core$IRender$ = true;
expenses.core.t174348.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__174337_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__174337_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t174348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_174350){var self__ = this;
var _174350__$1 = this;return self__.meta174349;
});})(categories,___$1))
;
expenses.core.t174348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_174350,meta174349__$1){var self__ = this;
var _174350__$1 = this;return (new expenses.core.t174348(self__.p1__174337_SHARP_,self__.categories,self__.state,self__._,self__.meta174346,self__.owner,self__.app,self__.category_select,meta174349__$1));
});})(categories,___$1))
;
expenses.core.__GT_t174348 = ((function (categories,___$1){
return (function __GT_t174348(p1__174337_SHARP___$1,categories__$1,state__$1,___$2,meta174346__$1,owner__$2,app__$2,category_select__$2,meta174349){return (new expenses.core.t174348(p1__174337_SHARP___$1,categories__$1,state__$1,___$2,meta174346__$1,owner__$2,app__$2,category_select__$2,meta174349));
});})(categories,___$1))
;
}
return (new expenses.core.t174348(p1__174337_SHARP_,categories,state,___$1,self__.meta174346,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__174338_SHARP_){return cljs.core.assoc.call(null,p1__174338_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t174345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174347){var self__ = this;
var _174347__$1 = this;return self__.meta174346;
});
expenses.core.t174345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174347,meta174346__$1){var self__ = this;
var _174347__$1 = this;return (new expenses.core.t174345(self__.owner,self__.app,self__.category_select,meta174346__$1));
});
expenses.core.__GT_t174345 = (function __GT_t174345(owner__$1,app__$1,category_select__$1,meta174346){return (new expenses.core.t174345(owner__$1,app__$1,category_select__$1,meta174346));
});
}
return (new expenses.core.t174345(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t174355 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174355 = (function (owner,app,amount_enter,meta174356){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta174356 = meta174356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174355.cljs$lang$type = true;
expenses.core.t174355.cljs$lang$ctorStr = "expenses.core/t174355";
expenses.core.t174355.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174355");
});
expenses.core.t174355.prototype.om$core$IRenderState$ = true;
expenses.core.t174355.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__174351_SHARP_){return cljs.core.assoc.call(null,p1__174351_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t174355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174357){var self__ = this;
var _174357__$1 = this;return self__.meta174356;
});
expenses.core.t174355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174357,meta174356__$1){var self__ = this;
var _174357__$1 = this;return (new expenses.core.t174355(self__.owner,self__.app,self__.amount_enter,meta174356__$1));
});
expenses.core.__GT_t174355 = (function __GT_t174355(owner__$1,app__$1,amount_enter__$1,meta174356){return (new expenses.core.t174355(owner__$1,app__$1,amount_enter__$1,meta174356));
});
}
return (new expenses.core.t174355(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t174362 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174362 = (function (owner,app,note_enter,meta174363){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta174363 = meta174363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174362.cljs$lang$type = true;
expenses.core.t174362.cljs$lang$ctorStr = "expenses.core/t174362";
expenses.core.t174362.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174362");
});
expenses.core.t174362.prototype.om$core$IRenderState$ = true;
expenses.core.t174362.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__174358_SHARP_){return cljs.core.assoc.call(null,p1__174358_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t174362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174364){var self__ = this;
var _174364__$1 = this;return self__.meta174363;
});
expenses.core.t174362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174364,meta174363__$1){var self__ = this;
var _174364__$1 = this;return (new expenses.core.t174362(self__.owner,self__.app,self__.note_enter,meta174363__$1));
});
expenses.core.__GT_t174362 = (function __GT_t174362(owner__$1,app__$1,note_enter__$1,meta174363){return (new expenses.core.t174362(owner__$1,app__$1,note_enter__$1,meta174363));
});
}
return (new expenses.core.t174362(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t174448 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174448 = (function (owner,app,add_component,meta174449){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta174449 = meta174449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174448.cljs$lang$type = true;
expenses.core.t174448.cljs$lang$ctorStr = "expenses.core/t174448";
expenses.core.t174448.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174448");
});
expenses.core.t174448.prototype.om$core$IRenderState$ = true;
expenses.core.t174448.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__174451 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__174451) {
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
expenses.core.t174448.prototype.om$core$IInitState$ = true;
expenses.core.t174448.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___174528 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___174528,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___174528,add_chan,___$1){
return (function (state_174497){var state_val_174498 = (state_174497[(1)]);if((state_val_174498 === (7)))
{var inst_174492 = (state_174497[(2)]);var state_174497__$1 = (function (){var statearr_174499 = state_174497;(statearr_174499[(7)] = inst_174492);
return statearr_174499;
})();var statearr_174500_174529 = state_174497__$1;(statearr_174500_174529[(2)] = null);
(statearr_174500_174529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (1)))
{var state_174497__$1 = state_174497;var statearr_174501_174530 = state_174497__$1;(statearr_174501_174530[(2)] = null);
(statearr_174501_174530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (4)))
{var inst_174454 = (state_174497[(8)]);var inst_174454__$1 = (state_174497[(2)]);var inst_174455 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_174454__$1);var state_174497__$1 = (function (){var statearr_174502 = state_174497;(statearr_174502[(8)] = inst_174454__$1);
return statearr_174502;
})();if(cljs.core.truth_(inst_174455))
{var statearr_174503_174531 = state_174497__$1;(statearr_174503_174531[(1)] = (5));
} else
{var statearr_174504_174532 = state_174497__$1;(statearr_174504_174532[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (15)))
{var state_174497__$1 = state_174497;var statearr_174505_174533 = state_174497__$1;(statearr_174505_174533[(2)] = null);
(statearr_174505_174533[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (13)))
{var inst_174488 = (state_174497[(2)]);var state_174497__$1 = state_174497;var statearr_174506_174534 = state_174497__$1;(statearr_174506_174534[(2)] = inst_174488);
(statearr_174506_174534[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (6)))
{var inst_174454 = (state_174497[(8)]);var inst_174460 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_174454);var state_174497__$1 = state_174497;if(cljs.core.truth_(inst_174460))
{var statearr_174507_174535 = state_174497__$1;(statearr_174507_174535[(1)] = (8));
} else
{var statearr_174508_174536 = state_174497__$1;(statearr_174508_174536[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (3)))
{var inst_174495 = (state_174497[(2)]);var state_174497__$1 = state_174497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_174497__$1,inst_174495);
} else
{if((state_val_174498 === (12)))
{var state_174497__$1 = state_174497;var statearr_174509_174537 = state_174497__$1;(statearr_174509_174537[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (2)))
{var state_174497__$1 = state_174497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_174497__$1,(4),add_chan);
} else
{if((state_val_174498 === (11)))
{var inst_174454 = (state_174497[(8)]);var inst_174467 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_174468 = cljs.core.deref.call(null,self__.app);var inst_174469 = new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(inst_174468);var inst_174470 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_174471 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_174472 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_174454);var inst_174473 = [inst_174469,inst_174470,inst_174471,inst_174472];var inst_174474 = cljs.core.PersistentHashMap.fromArrays(inst_174467,inst_174473);var inst_174475 = om.core.get_shared.call(null,self__.owner);var inst_174476 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_174475);var inst_174477 = expenses.core.put_expense.call(null,inst_174476,inst_174474);var inst_174478 = (function (){var new_expense = inst_174474;var v = inst_174454;return ((function (new_expense,v,inst_174454,inst_174467,inst_174468,inst_174469,inst_174470,inst_174471,inst_174472,inst_174473,inst_174474,inst_174475,inst_174476,inst_174477,state_val_174498,c__17814__auto___174528,add_chan,___$1){
return (function (p1__174367_SHARP_){return cljs.core.assoc.call(null,p1__174367_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_174454,inst_174467,inst_174468,inst_174469,inst_174470,inst_174471,inst_174472,inst_174473,inst_174474,inst_174475,inst_174476,inst_174477,state_val_174498,c__17814__auto___174528,add_chan,___$1))
})();var inst_174479 = om.core.transact_BANG_.call(null,self__.app,inst_174478);var state_174497__$1 = (function (){var statearr_174511 = state_174497;(statearr_174511[(9)] = inst_174477);
return statearr_174511;
})();var statearr_174512_174538 = state_174497__$1;(statearr_174512_174538[(2)] = inst_174479);
(statearr_174512_174538[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (9)))
{var inst_174454 = (state_174497[(8)]);var inst_174465 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_174454);var state_174497__$1 = state_174497;if(cljs.core.truth_(inst_174465))
{var statearr_174513_174539 = state_174497__$1;(statearr_174513_174539[(1)] = (11));
} else
{var statearr_174514_174540 = state_174497__$1;(statearr_174514_174540[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (5)))
{var inst_174454 = (state_174497[(8)]);var inst_174457 = (function (){var v = inst_174454;return ((function (v,inst_174454,state_val_174498,c__17814__auto___174528,add_chan,___$1){
return (function (p1__174365_SHARP_){return cljs.core.assoc.call(null,p1__174365_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_174454,state_val_174498,c__17814__auto___174528,add_chan,___$1))
})();var inst_174458 = om.core.update_state_BANG_.call(null,self__.owner,inst_174457);var state_174497__$1 = state_174497;var statearr_174515_174541 = state_174497__$1;(statearr_174515_174541[(2)] = inst_174458);
(statearr_174515_174541[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (14)))
{var inst_174454 = (state_174497[(8)]);var inst_174482 = (function (){var v = inst_174454;return ((function (v,inst_174454,state_val_174498,c__17814__auto___174528,add_chan,___$1){
return (function (p1__174368_SHARP_){return cljs.core.assoc.call(null,p1__174368_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_174454,state_val_174498,c__17814__auto___174528,add_chan,___$1))
})();var inst_174483 = om.core.transact_BANG_.call(null,self__.app,inst_174482);var state_174497__$1 = state_174497;var statearr_174516_174542 = state_174497__$1;(statearr_174516_174542[(2)] = inst_174483);
(statearr_174516_174542[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (16)))
{var inst_174486 = (state_174497[(2)]);var state_174497__$1 = state_174497;var statearr_174517_174543 = state_174497__$1;(statearr_174517_174543[(2)] = inst_174486);
(statearr_174517_174543[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (10)))
{var inst_174490 = (state_174497[(2)]);var state_174497__$1 = state_174497;var statearr_174518_174544 = state_174497__$1;(statearr_174518_174544[(2)] = inst_174490);
(statearr_174518_174544[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174498 === (8)))
{var inst_174454 = (state_174497[(8)]);var inst_174462 = (function (){var v = inst_174454;return ((function (v,inst_174454,state_val_174498,c__17814__auto___174528,add_chan,___$1){
return (function (p1__174366_SHARP_){return cljs.core.assoc.call(null,p1__174366_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_174454,state_val_174498,c__17814__auto___174528,add_chan,___$1))
})();var inst_174463 = om.core.update_state_BANG_.call(null,self__.owner,inst_174462);var state_174497__$1 = state_174497;var statearr_174519_174545 = state_174497__$1;(statearr_174519_174545[(2)] = inst_174463);
(statearr_174519_174545[(1)] = (10));
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
});})(c__17814__auto___174528,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___174528,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_174523 = [null,null,null,null,null,null,null,null,null,null];(statearr_174523[(0)] = state_machine__17800__auto__);
(statearr_174523[(1)] = (1));
return statearr_174523;
});
var state_machine__17800__auto____1 = (function (state_174497){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_174497);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e174524){if((e174524 instanceof Object))
{var ex__17803__auto__ = e174524;var statearr_174525_174546 = state_174497;(statearr_174525_174546[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_174497);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e174524;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__174547 = state_174497;
state_174497 = G__174547;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_174497){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_174497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___174528,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_174526 = f__17815__auto__.call(null);(statearr_174526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___174528);
return statearr_174526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___174528,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t174448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174450){var self__ = this;
var _174450__$1 = this;return self__.meta174449;
});
expenses.core.t174448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174450,meta174449__$1){var self__ = this;
var _174450__$1 = this;return (new expenses.core.t174448(self__.owner,self__.app,self__.add_component,meta174449__$1));
});
expenses.core.__GT_t174448 = (function __GT_t174448(owner__$1,app__$1,add_component__$1,meta174449){return (new expenses.core.t174448(owner__$1,app__$1,add_component__$1,meta174449));
});
}
return (new expenses.core.t174448(owner,app,add_component,null));
});
expenses.core.edit_component = (function edit_component(app,owner){if(typeof expenses.core.t174556 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174556 = (function (owner,app,edit_component,meta174557){
this.owner = owner;
this.app = app;
this.edit_component = edit_component;
this.meta174557 = meta174557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174556.cljs$lang$type = true;
expenses.core.t174556.cljs$lang$ctorStr = "expenses.core/t174556";
expenses.core.t174556.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174556");
});
expenses.core.t174556.prototype.om$core$IRenderState$ = true;
expenses.core.t174556.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.form({"className": "pure-form"},React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__174548_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__174548_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "category-input"}),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__174549_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),p1__174549_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "number", "ref": "amount-input"}),React.DOM.h3({"className": "pure-u-1"},"NOTE"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__174550_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904)], null),p1__174550_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "note-input"}),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
item.update(cljs.core.clj__GT_js.call(null,state));
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__174551_SHARP_){return cljs.core.assoc.call(null,p1__174551_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"})),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__174552_SHARP_){return cljs.core.assoc.call(null,p1__174552_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t174556.prototype.om$core$IInitState$ = true;
expenses.core.t174556.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),item.get("category"),new cljs.core.Keyword(null,"amount","amount",364489504),item.get("amount"),new cljs.core.Keyword(null,"note","note",1426297904),item.get("note")], null);
});
expenses.core.t174556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174558){var self__ = this;
var _174558__$1 = this;return self__.meta174557;
});
expenses.core.t174556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174558,meta174557__$1){var self__ = this;
var _174558__$1 = this;return (new expenses.core.t174556(self__.owner,self__.app,self__.edit_component,meta174557__$1));
});
expenses.core.__GT_t174556 = (function __GT_t174556(owner__$1,app__$1,edit_component__$1,meta174557){return (new expenses.core.t174556(owner__$1,app__$1,edit_component__$1,meta174557));
});
}
return (new expenses.core.t174556(owner,app,edit_component,null));
});
expenses.core.day_item_component = (function day_item_component(item,owner){if(typeof expenses.core.t174562 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174562 = (function (owner,item,day_item_component,meta174563){
this.owner = owner;
this.item = item;
this.day_item_component = day_item_component;
this.meta174563 = meta174563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174562.cljs$lang$type = true;
expenses.core.t174562.cljs$lang$ctorStr = "expenses.core/t174562";
expenses.core.t174562.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174562");
});
expenses.core.t174562.prototype.om$core$IRender$ = true;
expenses.core.t174562.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.li({"onClick": ((function (this__14239__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item)], null));
});})(this__14239__auto____$1))
, "className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-2 list-date"},goog.string.format("%02d-%02d-%d",new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getDate(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getMonth() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getFullYear())),React.DOM.div({"style": {"text-align": "right"}, "className": "pure-u-1-2 list-total"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(self__.item))+"\u5186")));
});
expenses.core.t174562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174564){var self__ = this;
var _174564__$1 = this;return self__.meta174563;
});
expenses.core.t174562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174564,meta174563__$1){var self__ = this;
var _174564__$1 = this;return (new expenses.core.t174562(self__.owner,self__.item,self__.day_item_component,meta174563__$1));
});
expenses.core.__GT_t174562 = (function __GT_t174562(owner__$1,item__$1,day_item_component__$1,meta174563){return (new expenses.core.t174562(owner__$1,item__$1,day_item_component__$1,meta174563));
});
}
return (new expenses.core.t174562(owner,item,day_item_component,null));
});
expenses.core.days_list_component = (function days_list_component(app,owner){var days = cljs.core.sort_by.call(null,(function (p1__174565_SHARP_){return (- new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__174565_SHARP_).getTime());
}),cljs.core.map.call(null,(function (p__174574){var vec__174575 = p__174574;var k = cljs.core.nth.call(null,vec__174575,(0),null);var v = cljs.core.nth.call(null,vec__174575,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),k,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__174575,k,v){
return (function (p1__174566_SHARP_){return p1__174566_SHARP_.get("amount");
});})(vec__174575,k,v))
,v))], null);
}),cljs.core.group_by.call(null,(function (p1__174567_SHARP_){var G__174576 = p1__174567_SHARP_.get("date");G__174576.setHours((0),(0),(0),(0));
return G__174576;
}),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(app))));if(typeof expenses.core.t174577 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174577 = (function (days,owner,app,days_list_component,meta174578){
this.days = days;
this.owner = owner;
this.app = app;
this.days_list_component = days_list_component;
this.meta174578 = meta174578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174577.cljs$lang$type = true;
expenses.core.t174577.cljs$lang$ctorStr = "expenses.core/t174577";
expenses.core.t174577.cljs$lang$ctorPrWriter = ((function (days){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174577");
});})(days))
;
expenses.core.t174577.prototype.om$core$IRender$ = true;
expenses.core.t174577.prototype.om$core$IRender$render$arity$1 = ((function (days){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "daylist"},om.core.build_all.call(null,expenses.core.day_item_component,self__.days));
});})(days))
;
expenses.core.t174577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (days){
return (function (_174579){var self__ = this;
var _174579__$1 = this;return self__.meta174578;
});})(days))
;
expenses.core.t174577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (days){
return (function (_174579,meta174578__$1){var self__ = this;
var _174579__$1 = this;return (new expenses.core.t174577(self__.days,self__.owner,self__.app,self__.days_list_component,meta174578__$1));
});})(days))
;
expenses.core.__GT_t174577 = ((function (days){
return (function __GT_t174577(days__$1,owner__$1,app__$1,days_list_component__$1,meta174578){return (new expenses.core.t174577(days__$1,owner__$1,app__$1,days_list_component__$1,meta174578));
});})(days))
;
}
return (new expenses.core.t174577(days,owner,app,days_list_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t174583 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174583 = (function (owner,app,error_component,meta174584){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta174584 = meta174584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174583.cljs$lang$type = true;
expenses.core.t174583.cljs$lang$ctorStr = "expenses.core/t174583";
expenses.core.t174583.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174583");
});
expenses.core.t174583.prototype.om$core$IRender$ = true;
expenses.core.t174583.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t174583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174585){var self__ = this;
var _174585__$1 = this;return self__.meta174584;
});
expenses.core.t174583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174585,meta174584__$1){var self__ = this;
var _174585__$1 = this;return (new expenses.core.t174583(self__.owner,self__.app,self__.error_component,meta174584__$1));
});
expenses.core.__GT_t174583 = (function __GT_t174583(owner__$1,app__$1,error_component__$1,meta174584){return (new expenses.core.t174583(owner__$1,app__$1,error_component__$1,meta174584));
});
}
return (new expenses.core.t174583(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__174586_SHARP_){return cljs.core.assoc.call(null,p1__174586_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t174601 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174601 = (function (owner,app,loading,meta174602){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta174602 = meta174602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174601.cljs$lang$type = true;
expenses.core.t174601.cljs$lang$ctorStr = "expenses.core/t174601";
expenses.core.t174601.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174601");
});
expenses.core.t174601.prototype.om$core$IRender$ = true;
expenses.core.t174601.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t174601.prototype.om$core$IWillMount$ = true;
expenses.core.t174601.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_174606){var state_val_174607 = (state_174606[(1)]);if((state_val_174607 === (1)))
{var inst_174604 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_174606__$1 = state_174606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_174606__$1,inst_174604);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_174611 = [null,null,null,null,null,null,null];(statearr_174611[(0)] = state_machine__17800__auto__);
(statearr_174611[(1)] = (1));
return statearr_174611;
});
var state_machine__17800__auto____1 = (function (state_174606){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_174606);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e174612){if((e174612 instanceof Object))
{var ex__17803__auto__ = e174612;var statearr_174613_174615 = state_174606;(statearr_174613_174615[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_174606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e174612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__174616 = state_174606;
state_174606 = G__174616;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_174606){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_174606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_174614 = f__17815__auto__.call(null);(statearr_174614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_174614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t174601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174603){var self__ = this;
var _174603__$1 = this;return self__.meta174602;
});
expenses.core.t174601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174603,meta174602__$1){var self__ = this;
var _174603__$1 = this;return (new expenses.core.t174601(self__.owner,self__.app,self__.loading,meta174602__$1));
});
expenses.core.__GT_t174601 = (function __GT_t174601(owner__$1,app__$1,loading__$1,meta174602){return (new expenses.core.t174601(owner__$1,app__$1,loading__$1,meta174602));
});
}
return (new expenses.core.t174601(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t174688 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t174688 = (function (owner,app,dispatch_component,meta174689){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta174689 = meta174689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t174688.cljs$lang$type = true;
expenses.core.t174688.cljs$lang$ctorStr = "expenses.core/t174688";
expenses.core.t174688.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t174688");
});
expenses.core.t174688.prototype.om$core$IRender$ = true;
expenses.core.t174688.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.print.call(null,self__.app);
return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__174620_SHARP_){return cljs.core.assoc.call(null,p1__174620_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__174691 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__174691) {
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
expenses.core.t174688.prototype.om$core$IWillMount$ = true;
expenses.core.t174688.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_174729){var state_val_174730 = (state_174729[(1)]);if((state_val_174730 === (7)))
{var inst_174724 = (state_174729[(2)]);var state_174729__$1 = (function (){var statearr_174731 = state_174729;(statearr_174731[(7)] = inst_174724);
return statearr_174731;
})();var statearr_174732_174756 = state_174729__$1;(statearr_174732_174756[(2)] = null);
(statearr_174732_174756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (1)))
{var state_174729__$1 = state_174729;var statearr_174733_174757 = state_174729__$1;(statearr_174733_174757[(2)] = null);
(statearr_174733_174757[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (4)))
{var inst_174696 = (state_174729[(8)]);var inst_174696__$1 = (state_174729[(2)]);var inst_174697 = cljs.core.print.call(null,inst_174696__$1);var inst_174698 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_174696__$1);var inst_174699 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_174698);var state_174729__$1 = (function (){var statearr_174734 = state_174729;(statearr_174734[(9)] = inst_174697);
(statearr_174734[(8)] = inst_174696__$1);
return statearr_174734;
})();if(inst_174699)
{var statearr_174735_174758 = state_174729__$1;(statearr_174735_174758[(1)] = (5));
} else
{var statearr_174736_174759 = state_174729__$1;(statearr_174736_174759[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (13)))
{var inst_174720 = (state_174729[(2)]);var state_174729__$1 = state_174729;var statearr_174737_174760 = state_174729__$1;(statearr_174737_174760[(2)] = inst_174720);
(statearr_174737_174760[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (6)))
{var inst_174696 = (state_174729[(8)]);var inst_174704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_174696);var inst_174705 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_174704);var state_174729__$1 = state_174729;if(inst_174705)
{var statearr_174738_174761 = state_174729__$1;(statearr_174738_174761[(1)] = (8));
} else
{var statearr_174739_174762 = state_174729__$1;(statearr_174739_174762[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (3)))
{var inst_174727 = (state_174729[(2)]);var state_174729__$1 = state_174729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_174729__$1,inst_174727);
} else
{if((state_val_174730 === (12)))
{var state_174729__$1 = state_174729;var statearr_174740_174763 = state_174729__$1;(statearr_174740_174763[(2)] = null);
(statearr_174740_174763[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (2)))
{var inst_174693 = om.core.get_shared.call(null,self__.owner);var inst_174694 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_174693);var state_174729__$1 = state_174729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_174729__$1,(4),inst_174694);
} else
{if((state_val_174730 === (11)))
{var inst_174696 = (state_174729[(8)]);var inst_174715 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_174696);var inst_174716 = (function (){var new_date = inst_174715;var ev = inst_174696;return ((function (new_date,ev,inst_174696,inst_174715,state_val_174730,c__17814__auto__,___$1){
return (function (p1__174619_SHARP_){return cljs.core.assoc.call(null,p1__174619_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),new_date);
});
;})(new_date,ev,inst_174696,inst_174715,state_val_174730,c__17814__auto__,___$1))
})();var inst_174717 = om.core.transact_BANG_.call(null,self__.app,inst_174716);var state_174729__$1 = state_174729;var statearr_174741_174764 = state_174729__$1;(statearr_174741_174764[(2)] = inst_174717);
(statearr_174741_174764[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (9)))
{var inst_174696 = (state_174729[(8)]);var inst_174712 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_174696);var inst_174713 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),inst_174712);var state_174729__$1 = state_174729;if(inst_174713)
{var statearr_174742_174765 = state_174729__$1;(statearr_174742_174765[(1)] = (11));
} else
{var statearr_174743_174766 = state_174729__$1;(statearr_174743_174766[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (5)))
{var inst_174696 = (state_174729[(8)]);var inst_174701 = (function (){var ev = inst_174696;return ((function (ev,inst_174696,state_val_174730,c__17814__auto__,___$1){
return (function (p1__174617_SHARP_){return cljs.core.assoc.call(null,p1__174617_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_174696,state_val_174730,c__17814__auto__,___$1))
})();var inst_174702 = om.core.transact_BANG_.call(null,self__.app,inst_174701);var state_174729__$1 = state_174729;var statearr_174744_174767 = state_174729__$1;(statearr_174744_174767[(2)] = inst_174702);
(statearr_174744_174767[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (10)))
{var inst_174722 = (state_174729[(2)]);var state_174729__$1 = state_174729;var statearr_174745_174768 = state_174729__$1;(statearr_174745_174768[(2)] = inst_174722);
(statearr_174745_174768[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_174730 === (8)))
{var inst_174696 = (state_174729[(8)]);var inst_174707 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_174696);var inst_174708 = inst_174707.deleteRecord();var inst_174709 = (function (){var ev = inst_174696;return ((function (ev,inst_174696,inst_174707,inst_174708,state_val_174730,c__17814__auto__,___$1){
return (function (p1__174618_SHARP_){return cljs.core.assoc.call(null,p1__174618_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_174696,inst_174707,inst_174708,state_val_174730,c__17814__auto__,___$1))
})();var inst_174710 = om.core.transact_BANG_.call(null,self__.app,inst_174709);var state_174729__$1 = (function (){var statearr_174746 = state_174729;(statearr_174746[(10)] = inst_174708);
return statearr_174746;
})();var statearr_174747_174769 = state_174729__$1;(statearr_174747_174769[(2)] = inst_174710);
(statearr_174747_174769[(1)] = (10));
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
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_174751 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_174751[(0)] = state_machine__17800__auto__);
(statearr_174751[(1)] = (1));
return statearr_174751;
});
var state_machine__17800__auto____1 = (function (state_174729){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_174729);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e174752){if((e174752 instanceof Object))
{var ex__17803__auto__ = e174752;var statearr_174753_174770 = state_174729;(statearr_174753_174770[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_174729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e174752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__174771 = state_174729;
state_174729 = G__174771;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_174729){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_174729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_174754 = f__17815__auto__.call(null);(statearr_174754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_174754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t174688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174690){var self__ = this;
var _174690__$1 = this;return self__.meta174689;
});
expenses.core.t174688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174690,meta174689__$1){var self__ = this;
var _174690__$1 = this;return (new expenses.core.t174688(self__.owner,self__.app,self__.dispatch_component,meta174689__$1));
});
expenses.core.__GT_t174688 = (function __GT_t174688(owner__$1,app__$1,dispatch_component__$1,meta174689){return (new expenses.core.t174688(owner__$1,app__$1,dispatch_component__$1,meta174689));
});
}
return (new expenses.core.t174688(owner,app,dispatch_component,null));
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