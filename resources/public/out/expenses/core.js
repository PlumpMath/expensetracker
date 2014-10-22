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
expenses.core.adj_date = (function adj_date(date,span,n){var G__164125 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__164125) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t164133 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164133 = (function (owner,app,menu_component,meta164134){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta164134 = meta164134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164133.cljs$lang$type = true;
expenses.core.t164133.cljs$lang$ctorStr = "expenses.core/t164133";
expenses.core.t164133.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164133");
});
expenses.core.t164133.prototype.om$core$IRender$ = true;
expenses.core.t164133.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__164127_SHARP_){return cljs.core.assoc.call(null,p1__164127_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"TOP")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__164128_SHARP_){return cljs.core.assoc.call(null,p1__164128_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"ADD")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__164129_SHARP_){return cljs.core.assoc.call(null,p1__164129_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"LIST"))))));
});
expenses.core.t164133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164135){var self__ = this;
var _164135__$1 = this;return self__.meta164134;
});
expenses.core.t164133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164135,meta164134__$1){var self__ = this;
var _164135__$1 = this;return (new expenses.core.t164133(self__.owner,self__.app,self__.menu_component,meta164134__$1));
});
expenses.core.__GT_t164133 = (function __GT_t164133(owner__$1,app__$1,menu_component__$1,meta164134){return (new expenses.core.t164133(owner__$1,app__$1,menu_component__$1,meta164134));
});
}
return (new expenses.core.t164133(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t164141 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164141 = (function (owner,app,buttons_component,meta164142){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta164142 = meta164142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164141.cljs$lang$type = true;
expenses.core.t164141.cljs$lang$ctorStr = "expenses.core/t164141";
expenses.core.t164141.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164141");
});
expenses.core.t164141.prototype.om$core$IRenderState$ = true;
expenses.core.t164141.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__164144){var self__ = this;
var map__164145 = p__164144;var map__164145__$1 = ((cljs.core.seq_QMARK_.call(null,map__164145))?cljs.core.apply.call(null,cljs.core.hash_map,map__164145):map__164145);var current_focus_date = cljs.core.get.call(null,map__164145__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__164145__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__164145__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_focus_date);
});})(___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__164145,map__164145__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t164141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164143){var self__ = this;
var _164143__$1 = this;return self__.meta164142;
});
expenses.core.t164141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164143,meta164142__$1){var self__ = this;
var _164143__$1 = this;return (new expenses.core.t164141(self__.owner,self__.app,self__.buttons_component,meta164142__$1));
});
expenses.core.__GT_t164141 = (function __GT_t164141(owner__$1,app__$1,buttons_component__$1,meta164142){return (new expenses.core.t164141(owner__$1,app__$1,buttons_component__$1,meta164142));
});
}
return (new expenses.core.t164141(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t164150 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164150 = (function (owner,items,total_component,meta164151){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta164151 = meta164151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164150.cljs$lang$type = true;
expenses.core.t164150.cljs$lang$ctorStr = "expenses.core/t164150";
expenses.core.t164150.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164150");
});
expenses.core.t164150.prototype.om$core$IRender$ = true;
expenses.core.t164150.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__164146_SHARP_){return p1__164146_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t164150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164152){var self__ = this;
var _164152__$1 = this;return self__.meta164151;
});
expenses.core.t164150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164152,meta164151__$1){var self__ = this;
var _164152__$1 = this;return (new expenses.core.t164150(self__.owner,self__.items,self__.total_component,meta164151__$1));
});
expenses.core.__GT_t164150 = (function __GT_t164150(owner__$1,items__$1,total_component__$1,meta164151){return (new expenses.core.t164150(owner__$1,items__$1,total_component__$1,meta164151));
});
}
return (new expenses.core.t164150(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__164153_SHARP_){return p1__164153_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.touch_end_check = (function touch_end_check(e,owner,state){var touch_end = (e.changedTouches[(0)]);if(cljs.core.truth_(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__164154_SHARP_){return cljs.core.assoc.call(null,p1__164154_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
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
return (function (p1__164155_SHARP_){return cljs.core.assoc.call(null,p1__164155_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{return null;
}
}
} else
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__164156_SHARP_){return cljs.core.assoc.call(null,p1__164156_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
}
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t164162 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164162 = (function (owner,item,expense_list_item,meta164163){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta164163 = meta164163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164162.cljs$lang$type = true;
expenses.core.t164162.cljs$lang$ctorStr = "expenses.core/t164162";
expenses.core.t164162.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164162");
});
expenses.core.t164162.prototype.om$core$IRenderState$ = true;
expenses.core.t164162.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onTouchEnd": ((function (___$1){
return (function (e){return expenses.core.touch_end_check.call(null,e,self__.owner,state);
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__164157_SHARP_){return cljs.core.assoc.call(null,p1__164157_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__164158_SHARP_){return cljs.core.assoc.call(null,p1__164158_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.core.t164162.prototype.om$core$IInitState$ = true;
expenses.core.t164162.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t164162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164164){var self__ = this;
var _164164__$1 = this;return self__.meta164163;
});
expenses.core.t164162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164164,meta164163__$1){var self__ = this;
var _164164__$1 = this;return (new expenses.core.t164162(self__.owner,self__.item,self__.expense_list_item,meta164163__$1));
});
expenses.core.__GT_t164162 = (function __GT_t164162(owner__$1,item__$1,expense_list_item__$1,meta164163){return (new expenses.core.t164162(owner__$1,item__$1,expense_list_item__$1,meta164163));
});
}
return (new expenses.core.t164162(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t164168 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164168 = (function (owner,items,expense_list_component,meta164169){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta164169 = meta164169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164168.cljs$lang$type = true;
expenses.core.t164168.cljs$lang$ctorStr = "expenses.core/t164168";
expenses.core.t164168.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164168");
});
expenses.core.t164168.prototype.om$core$IRender$ = true;
expenses.core.t164168.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t164168.prototype.om$core$IInitState$ = true;
expenses.core.t164168.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t164168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164170){var self__ = this;
var _164170__$1 = this;return self__.meta164169;
});
expenses.core.t164168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164170,meta164169__$1){var self__ = this;
var _164170__$1 = this;return (new expenses.core.t164168(self__.owner,self__.items,self__.expense_list_component,meta164169__$1));
});
expenses.core.__GT_t164168 = (function __GT_t164168(owner__$1,items__$1,expense_list_component__$1,meta164169){return (new expenses.core.t164168(owner__$1,items__$1,expense_list_component__$1,meta164169));
});
}
return (new expenses.core.t164168(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__164172,f_date,items){var map__164177 = p__164172;var map__164177__$1 = ((cljs.core.seq_QMARK_.call(null,map__164177))?cljs.core.apply.call(null,cljs.core.hash_map,map__164177):map__164177);var category = cljs.core.get.call(null,map__164177__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__164177__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__164177,map__164177__$1,category,span){
return (function (p1__164171_SHARP_){var and__11373__auto__ = (function (){var G__164179 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__164179) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__164171_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__164171_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__164171_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__164180 = category;if(cljs.core._EQ_.call(null,null,G__164180))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__164171_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__164177,map__164177__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t164209 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164209 = (function (owner,app,main_component,meta164210){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta164210 = meta164210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164209.cljs$lang$type = true;
expenses.core.t164209.cljs$lang$ctorStr = "expenses.core/t164209";
expenses.core.t164209.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164209");
});
expenses.core.t164209.prototype.om$core$IRenderState$ = true;
expenses.core.t164209.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__164212){var self__ = this;
var map__164213 = p__164212;var map__164213__$1 = ((cljs.core.seq_QMARK_.call(null,map__164213))?cljs.core.apply.call(null,cljs.core.hash_map,map__164213):map__164213);var current_focus_date = cljs.core.get.call(null,map__164213__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__164213__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__164213__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__164213,map__164213__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__164213,map__164213__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t164209.prototype.om$core$IInitState$ = true;
expenses.core.t164209.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (cljs.core.truth_(new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app):(new Date()));var c__17814__auto___164235 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___164235,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___164235,focus_chan,now,___$1){
return (function (state_164223){var state_val_164224 = (state_164223[(1)]);if((state_val_164224 === (4)))
{var inst_164216 = (state_164223[(2)]);var inst_164217 = (function (){var new_focus = inst_164216;return ((function (new_focus,inst_164216,state_val_164224,c__17814__auto___164235,focus_chan,now,___$1){
return (function (p1__164182_SHARP_){return cljs.core.merge.call(null,p1__164182_SHARP_,new_focus);
});
;})(new_focus,inst_164216,state_val_164224,c__17814__auto___164235,focus_chan,now,___$1))
})();var inst_164218 = om.core.update_state_BANG_.call(null,self__.owner,inst_164217);var state_164223__$1 = (function (){var statearr_164225 = state_164223;(statearr_164225[(7)] = inst_164218);
return statearr_164225;
})();var statearr_164226_164236 = state_164223__$1;(statearr_164226_164236[(2)] = null);
(statearr_164226_164236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164224 === (3)))
{var inst_164221 = (state_164223[(2)]);var state_164223__$1 = state_164223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_164223__$1,inst_164221);
} else
{if((state_val_164224 === (2)))
{var state_164223__$1 = state_164223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_164223__$1,(4),focus_chan);
} else
{if((state_val_164224 === (1)))
{var state_164223__$1 = state_164223;var statearr_164227_164237 = state_164223__$1;(statearr_164227_164237[(2)] = null);
(statearr_164227_164237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___164235,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___164235,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_164231 = [null,null,null,null,null,null,null,null];(statearr_164231[(0)] = state_machine__17800__auto__);
(statearr_164231[(1)] = (1));
return statearr_164231;
});
var state_machine__17800__auto____1 = (function (state_164223){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_164223);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e164232){if((e164232 instanceof Object))
{var ex__17803__auto__ = e164232;var statearr_164233_164238 = state_164223;(statearr_164233_164238[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_164223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e164232;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__164239 = state_164223;
state_164223 = G__164239;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_164223){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_164223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___164235,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_164234 = f__17815__auto__.call(null);(statearr_164234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___164235);
return statearr_164234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___164235,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t164209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164211){var self__ = this;
var _164211__$1 = this;return self__.meta164210;
});
expenses.core.t164209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164211,meta164210__$1){var self__ = this;
var _164211__$1 = this;return (new expenses.core.t164209(self__.owner,self__.app,self__.main_component,meta164210__$1));
});
expenses.core.__GT_t164209 = (function __GT_t164209(owner__$1,app__$1,main_component__$1,meta164210){return (new expenses.core.t164209(owner__$1,app__$1,main_component__$1,meta164210));
});
}
return (new expenses.core.t164209(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t164249 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164249 = (function (owner,app,category_select,meta164250){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta164250 = meta164250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164249.cljs$lang$type = true;
expenses.core.t164249.cljs$lang$ctorStr = "expenses.core/t164249";
expenses.core.t164249.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164249");
});
expenses.core.t164249.prototype.om$core$IRenderState$ = true;
expenses.core.t164249.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.distinct.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__164240_SHARP_){return p1__164240_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__164241_SHARP_){if(typeof expenses.core.t164252 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164252 = (function (p1__164241_SHARP_,categories,state,_,meta164250,owner,app,category_select,meta164253){
this.p1__164241_SHARP_ = p1__164241_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta164250 = meta164250;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta164253 = meta164253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164252.cljs$lang$type = true;
expenses.core.t164252.cljs$lang$ctorStr = "expenses.core/t164252";
expenses.core.t164252.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164252");
});})(categories,___$1))
;
expenses.core.t164252.prototype.om$core$IRender$ = true;
expenses.core.t164252.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__164241_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__164241_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t164252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_164254){var self__ = this;
var _164254__$1 = this;return self__.meta164253;
});})(categories,___$1))
;
expenses.core.t164252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_164254,meta164253__$1){var self__ = this;
var _164254__$1 = this;return (new expenses.core.t164252(self__.p1__164241_SHARP_,self__.categories,self__.state,self__._,self__.meta164250,self__.owner,self__.app,self__.category_select,meta164253__$1));
});})(categories,___$1))
;
expenses.core.__GT_t164252 = ((function (categories,___$1){
return (function __GT_t164252(p1__164241_SHARP___$1,categories__$1,state__$1,___$2,meta164250__$1,owner__$2,app__$2,category_select__$2,meta164253){return (new expenses.core.t164252(p1__164241_SHARP___$1,categories__$1,state__$1,___$2,meta164250__$1,owner__$2,app__$2,category_select__$2,meta164253));
});})(categories,___$1))
;
}
return (new expenses.core.t164252(p1__164241_SHARP_,categories,state,___$1,self__.meta164250,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__164242_SHARP_){return cljs.core.assoc.call(null,p1__164242_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164251){var self__ = this;
var _164251__$1 = this;return self__.meta164250;
});
expenses.core.t164249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164251,meta164250__$1){var self__ = this;
var _164251__$1 = this;return (new expenses.core.t164249(self__.owner,self__.app,self__.category_select,meta164250__$1));
});
expenses.core.__GT_t164249 = (function __GT_t164249(owner__$1,app__$1,category_select__$1,meta164250){return (new expenses.core.t164249(owner__$1,app__$1,category_select__$1,meta164250));
});
}
return (new expenses.core.t164249(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t164259 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164259 = (function (owner,app,amount_enter,meta164260){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta164260 = meta164260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164259.cljs$lang$type = true;
expenses.core.t164259.cljs$lang$ctorStr = "expenses.core/t164259";
expenses.core.t164259.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164259");
});
expenses.core.t164259.prototype.om$core$IRenderState$ = true;
expenses.core.t164259.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__164255_SHARP_){return cljs.core.assoc.call(null,p1__164255_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164261){var self__ = this;
var _164261__$1 = this;return self__.meta164260;
});
expenses.core.t164259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164261,meta164260__$1){var self__ = this;
var _164261__$1 = this;return (new expenses.core.t164259(self__.owner,self__.app,self__.amount_enter,meta164260__$1));
});
expenses.core.__GT_t164259 = (function __GT_t164259(owner__$1,app__$1,amount_enter__$1,meta164260){return (new expenses.core.t164259(owner__$1,app__$1,amount_enter__$1,meta164260));
});
}
return (new expenses.core.t164259(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t164266 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164266 = (function (owner,app,note_enter,meta164267){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta164267 = meta164267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164266.cljs$lang$type = true;
expenses.core.t164266.cljs$lang$ctorStr = "expenses.core/t164266";
expenses.core.t164266.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164266");
});
expenses.core.t164266.prototype.om$core$IRenderState$ = true;
expenses.core.t164266.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__164262_SHARP_){return cljs.core.assoc.call(null,p1__164262_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164268){var self__ = this;
var _164268__$1 = this;return self__.meta164267;
});
expenses.core.t164266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164268,meta164267__$1){var self__ = this;
var _164268__$1 = this;return (new expenses.core.t164266(self__.owner,self__.app,self__.note_enter,meta164267__$1));
});
expenses.core.__GT_t164266 = (function __GT_t164266(owner__$1,app__$1,note_enter__$1,meta164267){return (new expenses.core.t164266(owner__$1,app__$1,note_enter__$1,meta164267));
});
}
return (new expenses.core.t164266(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t164352 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164352 = (function (owner,app,add_component,meta164353){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta164353 = meta164353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164352.cljs$lang$type = true;
expenses.core.t164352.cljs$lang$ctorStr = "expenses.core/t164352";
expenses.core.t164352.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164352");
});
expenses.core.t164352.prototype.om$core$IRenderState$ = true;
expenses.core.t164352.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__164355 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__164355) {
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
expenses.core.t164352.prototype.om$core$IInitState$ = true;
expenses.core.t164352.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___164432 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___164432,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___164432,add_chan,___$1){
return (function (state_164401){var state_val_164402 = (state_164401[(1)]);if((state_val_164402 === (7)))
{var inst_164396 = (state_164401[(2)]);var state_164401__$1 = (function (){var statearr_164403 = state_164401;(statearr_164403[(7)] = inst_164396);
return statearr_164403;
})();var statearr_164404_164433 = state_164401__$1;(statearr_164404_164433[(2)] = null);
(statearr_164404_164433[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (1)))
{var state_164401__$1 = state_164401;var statearr_164405_164434 = state_164401__$1;(statearr_164405_164434[(2)] = null);
(statearr_164405_164434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (4)))
{var inst_164358 = (state_164401[(8)]);var inst_164358__$1 = (state_164401[(2)]);var inst_164359 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_164358__$1);var state_164401__$1 = (function (){var statearr_164406 = state_164401;(statearr_164406[(8)] = inst_164358__$1);
return statearr_164406;
})();if(cljs.core.truth_(inst_164359))
{var statearr_164407_164435 = state_164401__$1;(statearr_164407_164435[(1)] = (5));
} else
{var statearr_164408_164436 = state_164401__$1;(statearr_164408_164436[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (15)))
{var state_164401__$1 = state_164401;var statearr_164409_164437 = state_164401__$1;(statearr_164409_164437[(2)] = null);
(statearr_164409_164437[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (13)))
{var inst_164392 = (state_164401[(2)]);var state_164401__$1 = state_164401;var statearr_164410_164438 = state_164401__$1;(statearr_164410_164438[(2)] = inst_164392);
(statearr_164410_164438[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (6)))
{var inst_164358 = (state_164401[(8)]);var inst_164364 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_164358);var state_164401__$1 = state_164401;if(cljs.core.truth_(inst_164364))
{var statearr_164411_164439 = state_164401__$1;(statearr_164411_164439[(1)] = (8));
} else
{var statearr_164412_164440 = state_164401__$1;(statearr_164412_164440[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (3)))
{var inst_164399 = (state_164401[(2)]);var state_164401__$1 = state_164401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_164401__$1,inst_164399);
} else
{if((state_val_164402 === (12)))
{var state_164401__$1 = state_164401;var statearr_164413_164441 = state_164401__$1;(statearr_164413_164441[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (2)))
{var state_164401__$1 = state_164401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_164401__$1,(4),add_chan);
} else
{if((state_val_164402 === (11)))
{var inst_164358 = (state_164401[(8)]);var inst_164371 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_164372 = cljs.core.deref.call(null,self__.app);var inst_164373 = new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(inst_164372);var inst_164374 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_164375 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_164376 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_164358);var inst_164377 = [inst_164373,inst_164374,inst_164375,inst_164376];var inst_164378 = cljs.core.PersistentHashMap.fromArrays(inst_164371,inst_164377);var inst_164379 = om.core.get_shared.call(null,self__.owner);var inst_164380 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_164379);var inst_164381 = expenses.core.put_expense.call(null,inst_164380,inst_164378);var inst_164382 = (function (){var new_expense = inst_164378;var v = inst_164358;return ((function (new_expense,v,inst_164358,inst_164371,inst_164372,inst_164373,inst_164374,inst_164375,inst_164376,inst_164377,inst_164378,inst_164379,inst_164380,inst_164381,state_val_164402,c__17814__auto___164432,add_chan,___$1){
return (function (p1__164271_SHARP_){return cljs.core.assoc.call(null,p1__164271_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_164358,inst_164371,inst_164372,inst_164373,inst_164374,inst_164375,inst_164376,inst_164377,inst_164378,inst_164379,inst_164380,inst_164381,state_val_164402,c__17814__auto___164432,add_chan,___$1))
})();var inst_164383 = om.core.transact_BANG_.call(null,self__.app,inst_164382);var state_164401__$1 = (function (){var statearr_164415 = state_164401;(statearr_164415[(9)] = inst_164381);
return statearr_164415;
})();var statearr_164416_164442 = state_164401__$1;(statearr_164416_164442[(2)] = inst_164383);
(statearr_164416_164442[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (9)))
{var inst_164358 = (state_164401[(8)]);var inst_164369 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_164358);var state_164401__$1 = state_164401;if(cljs.core.truth_(inst_164369))
{var statearr_164417_164443 = state_164401__$1;(statearr_164417_164443[(1)] = (11));
} else
{var statearr_164418_164444 = state_164401__$1;(statearr_164418_164444[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (5)))
{var inst_164358 = (state_164401[(8)]);var inst_164361 = (function (){var v = inst_164358;return ((function (v,inst_164358,state_val_164402,c__17814__auto___164432,add_chan,___$1){
return (function (p1__164269_SHARP_){return cljs.core.assoc.call(null,p1__164269_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_164358,state_val_164402,c__17814__auto___164432,add_chan,___$1))
})();var inst_164362 = om.core.update_state_BANG_.call(null,self__.owner,inst_164361);var state_164401__$1 = state_164401;var statearr_164419_164445 = state_164401__$1;(statearr_164419_164445[(2)] = inst_164362);
(statearr_164419_164445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (14)))
{var inst_164358 = (state_164401[(8)]);var inst_164386 = (function (){var v = inst_164358;return ((function (v,inst_164358,state_val_164402,c__17814__auto___164432,add_chan,___$1){
return (function (p1__164272_SHARP_){return cljs.core.assoc.call(null,p1__164272_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_164358,state_val_164402,c__17814__auto___164432,add_chan,___$1))
})();var inst_164387 = om.core.transact_BANG_.call(null,self__.app,inst_164386);var state_164401__$1 = state_164401;var statearr_164420_164446 = state_164401__$1;(statearr_164420_164446[(2)] = inst_164387);
(statearr_164420_164446[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (16)))
{var inst_164390 = (state_164401[(2)]);var state_164401__$1 = state_164401;var statearr_164421_164447 = state_164401__$1;(statearr_164421_164447[(2)] = inst_164390);
(statearr_164421_164447[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (10)))
{var inst_164394 = (state_164401[(2)]);var state_164401__$1 = state_164401;var statearr_164422_164448 = state_164401__$1;(statearr_164422_164448[(2)] = inst_164394);
(statearr_164422_164448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164402 === (8)))
{var inst_164358 = (state_164401[(8)]);var inst_164366 = (function (){var v = inst_164358;return ((function (v,inst_164358,state_val_164402,c__17814__auto___164432,add_chan,___$1){
return (function (p1__164270_SHARP_){return cljs.core.assoc.call(null,p1__164270_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_164358,state_val_164402,c__17814__auto___164432,add_chan,___$1))
})();var inst_164367 = om.core.update_state_BANG_.call(null,self__.owner,inst_164366);var state_164401__$1 = state_164401;var statearr_164423_164449 = state_164401__$1;(statearr_164423_164449[(2)] = inst_164367);
(statearr_164423_164449[(1)] = (10));
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
});})(c__17814__auto___164432,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___164432,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_164427 = [null,null,null,null,null,null,null,null,null,null];(statearr_164427[(0)] = state_machine__17800__auto__);
(statearr_164427[(1)] = (1));
return statearr_164427;
});
var state_machine__17800__auto____1 = (function (state_164401){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_164401);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e164428){if((e164428 instanceof Object))
{var ex__17803__auto__ = e164428;var statearr_164429_164450 = state_164401;(statearr_164429_164450[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_164401);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e164428;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__164451 = state_164401;
state_164401 = G__164451;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_164401){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_164401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___164432,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_164430 = f__17815__auto__.call(null);(statearr_164430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___164432);
return statearr_164430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___164432,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t164352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164354){var self__ = this;
var _164354__$1 = this;return self__.meta164353;
});
expenses.core.t164352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164354,meta164353__$1){var self__ = this;
var _164354__$1 = this;return (new expenses.core.t164352(self__.owner,self__.app,self__.add_component,meta164353__$1));
});
expenses.core.__GT_t164352 = (function __GT_t164352(owner__$1,app__$1,add_component__$1,meta164353){return (new expenses.core.t164352(owner__$1,app__$1,add_component__$1,meta164353));
});
}
return (new expenses.core.t164352(owner,app,add_component,null));
});
expenses.core.edit_component = (function edit_component(app,owner){if(typeof expenses.core.t164460 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164460 = (function (owner,app,edit_component,meta164461){
this.owner = owner;
this.app = app;
this.edit_component = edit_component;
this.meta164461 = meta164461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164460.cljs$lang$type = true;
expenses.core.t164460.cljs$lang$ctorStr = "expenses.core/t164460";
expenses.core.t164460.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164460");
});
expenses.core.t164460.prototype.om$core$IRenderState$ = true;
expenses.core.t164460.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.form({"className": "pure-form"},React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__164452_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__164452_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "category-input"}),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__164453_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),p1__164453_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "number", "ref": "amount-input"}),React.DOM.h3({"className": "pure-u-1"},"NOTE"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__164454_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904)], null),p1__164454_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "note-input"}),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
item.update(cljs.core.clj__GT_js.call(null,state));
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__164455_SHARP_){return cljs.core.assoc.call(null,p1__164455_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"})),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__164456_SHARP_){return cljs.core.assoc.call(null,p1__164456_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164460.prototype.om$core$IInitState$ = true;
expenses.core.t164460.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),item.get("category"),new cljs.core.Keyword(null,"amount","amount",364489504),item.get("amount"),new cljs.core.Keyword(null,"note","note",1426297904),item.get("note")], null);
});
expenses.core.t164460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164462){var self__ = this;
var _164462__$1 = this;return self__.meta164461;
});
expenses.core.t164460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164462,meta164461__$1){var self__ = this;
var _164462__$1 = this;return (new expenses.core.t164460(self__.owner,self__.app,self__.edit_component,meta164461__$1));
});
expenses.core.__GT_t164460 = (function __GT_t164460(owner__$1,app__$1,edit_component__$1,meta164461){return (new expenses.core.t164460(owner__$1,app__$1,edit_component__$1,meta164461));
});
}
return (new expenses.core.t164460(owner,app,edit_component,null));
});
expenses.core.day_item_component = (function day_item_component(item,owner){if(typeof expenses.core.t164466 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164466 = (function (owner,item,day_item_component,meta164467){
this.owner = owner;
this.item = item;
this.day_item_component = day_item_component;
this.meta164467 = meta164467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164466.cljs$lang$type = true;
expenses.core.t164466.cljs$lang$ctorStr = "expenses.core/t164466";
expenses.core.t164466.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164466");
});
expenses.core.t164466.prototype.om$core$IRender$ = true;
expenses.core.t164466.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.li({"onClick": ((function (this__14239__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item)], null));
});})(this__14239__auto____$1))
, "className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-2 list-date"},goog.string.format("%02d-%02d-%d",new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getDate(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getMonth() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getFullYear())),React.DOM.div({"style": {"text-align": "right"}, "className": "pure-u-1-2 list-total"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(self__.item))+"\u5186")));
});
expenses.core.t164466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164468){var self__ = this;
var _164468__$1 = this;return self__.meta164467;
});
expenses.core.t164466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164468,meta164467__$1){var self__ = this;
var _164468__$1 = this;return (new expenses.core.t164466(self__.owner,self__.item,self__.day_item_component,meta164467__$1));
});
expenses.core.__GT_t164466 = (function __GT_t164466(owner__$1,item__$1,day_item_component__$1,meta164467){return (new expenses.core.t164466(owner__$1,item__$1,day_item_component__$1,meta164467));
});
}
return (new expenses.core.t164466(owner,item,day_item_component,null));
});
expenses.core.days_list_component = (function days_list_component(app,owner){var days = cljs.core.sort_by.call(null,(function (p1__164469_SHARP_){return (- new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__164469_SHARP_).getTime());
}),cljs.core.map.call(null,(function (p__164478){var vec__164479 = p__164478;var k = cljs.core.nth.call(null,vec__164479,(0),null);var v = cljs.core.nth.call(null,vec__164479,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),k,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__164479,k,v){
return (function (p1__164470_SHARP_){return p1__164470_SHARP_.get("amount");
});})(vec__164479,k,v))
,v))], null);
}),cljs.core.group_by.call(null,(function (p1__164471_SHARP_){var G__164480 = p1__164471_SHARP_.get("date");G__164480.setHours((0),(0),(0),(0));
return G__164480;
}),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(app))));if(typeof expenses.core.t164481 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164481 = (function (days,owner,app,days_list_component,meta164482){
this.days = days;
this.owner = owner;
this.app = app;
this.days_list_component = days_list_component;
this.meta164482 = meta164482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164481.cljs$lang$type = true;
expenses.core.t164481.cljs$lang$ctorStr = "expenses.core/t164481";
expenses.core.t164481.cljs$lang$ctorPrWriter = ((function (days){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164481");
});})(days))
;
expenses.core.t164481.prototype.om$core$IRender$ = true;
expenses.core.t164481.prototype.om$core$IRender$render$arity$1 = ((function (days){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,expenses.core.day_item_component,self__.days));
});})(days))
;
expenses.core.t164481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (days){
return (function (_164483){var self__ = this;
var _164483__$1 = this;return self__.meta164482;
});})(days))
;
expenses.core.t164481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (days){
return (function (_164483,meta164482__$1){var self__ = this;
var _164483__$1 = this;return (new expenses.core.t164481(self__.days,self__.owner,self__.app,self__.days_list_component,meta164482__$1));
});})(days))
;
expenses.core.__GT_t164481 = ((function (days){
return (function __GT_t164481(days__$1,owner__$1,app__$1,days_list_component__$1,meta164482){return (new expenses.core.t164481(days__$1,owner__$1,app__$1,days_list_component__$1,meta164482));
});})(days))
;
}
return (new expenses.core.t164481(days,owner,app,days_list_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t164487 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164487 = (function (owner,app,error_component,meta164488){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta164488 = meta164488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164487.cljs$lang$type = true;
expenses.core.t164487.cljs$lang$ctorStr = "expenses.core/t164487";
expenses.core.t164487.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164487");
});
expenses.core.t164487.prototype.om$core$IRender$ = true;
expenses.core.t164487.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t164487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164489){var self__ = this;
var _164489__$1 = this;return self__.meta164488;
});
expenses.core.t164487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164489,meta164488__$1){var self__ = this;
var _164489__$1 = this;return (new expenses.core.t164487(self__.owner,self__.app,self__.error_component,meta164488__$1));
});
expenses.core.__GT_t164487 = (function __GT_t164487(owner__$1,app__$1,error_component__$1,meta164488){return (new expenses.core.t164487(owner__$1,app__$1,error_component__$1,meta164488));
});
}
return (new expenses.core.t164487(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__164490_SHARP_){return cljs.core.assoc.call(null,p1__164490_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t164505 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164505 = (function (owner,app,loading,meta164506){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta164506 = meta164506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164505.cljs$lang$type = true;
expenses.core.t164505.cljs$lang$ctorStr = "expenses.core/t164505";
expenses.core.t164505.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164505");
});
expenses.core.t164505.prototype.om$core$IRender$ = true;
expenses.core.t164505.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t164505.prototype.om$core$IWillMount$ = true;
expenses.core.t164505.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_164510){var state_val_164511 = (state_164510[(1)]);if((state_val_164511 === (1)))
{var inst_164508 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_164510__$1 = state_164510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_164510__$1,inst_164508);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_164515 = [null,null,null,null,null,null,null];(statearr_164515[(0)] = state_machine__17800__auto__);
(statearr_164515[(1)] = (1));
return statearr_164515;
});
var state_machine__17800__auto____1 = (function (state_164510){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_164510);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e164516){if((e164516 instanceof Object))
{var ex__17803__auto__ = e164516;var statearr_164517_164519 = state_164510;(statearr_164517_164519[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_164510);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e164516;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__164520 = state_164510;
state_164510 = G__164520;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_164510){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_164510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_164518 = f__17815__auto__.call(null);(statearr_164518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_164518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t164505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164507){var self__ = this;
var _164507__$1 = this;return self__.meta164506;
});
expenses.core.t164505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164507,meta164506__$1){var self__ = this;
var _164507__$1 = this;return (new expenses.core.t164505(self__.owner,self__.app,self__.loading,meta164506__$1));
});
expenses.core.__GT_t164505 = (function __GT_t164505(owner__$1,app__$1,loading__$1,meta164506){return (new expenses.core.t164505(owner__$1,app__$1,loading__$1,meta164506));
});
}
return (new expenses.core.t164505(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t164583 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164583 = (function (owner,app,dispatch_component,meta164584){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta164584 = meta164584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164583.cljs$lang$type = true;
expenses.core.t164583.cljs$lang$ctorStr = "expenses.core/t164583";
expenses.core.t164583.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164583");
});
expenses.core.t164583.prototype.om$core$IRender$ = true;
expenses.core.t164583.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__164524_SHARP_){return cljs.core.assoc.call(null,p1__164524_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),null);
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__164586 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__164586) {
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
expenses.core.t164583.prototype.om$core$IWillMount$ = true;
expenses.core.t164583.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_164619){var state_val_164620 = (state_164619[(1)]);if((state_val_164620 === (7)))
{var inst_164591 = (state_164619[(7)]);var inst_164609 = (state_164619[(2)]);var inst_164610 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_164591);var inst_164611 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),inst_164610);var inst_164612 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_164591);var inst_164613 = (function (){var new_date = inst_164612;var ev = inst_164591;return ((function (new_date,ev,inst_164591,inst_164609,inst_164610,inst_164611,inst_164612,state_val_164620,c__17814__auto__,___$1){
return (function (p1__164523_SHARP_){return cljs.core.assoc.call(null,p1__164523_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),new_date);
});
;})(new_date,ev,inst_164591,inst_164609,inst_164610,inst_164611,inst_164612,state_val_164620,c__17814__auto__,___$1))
})();var inst_164614 = om.core.transact_BANG_.call(null,self__.app,inst_164613);var state_164619__$1 = (function (){var statearr_164621 = state_164619;(statearr_164621[(8)] = inst_164611);
(statearr_164621[(9)] = inst_164614);
(statearr_164621[(10)] = inst_164609);
return statearr_164621;
})();var statearr_164622_164642 = state_164619__$1;(statearr_164622_164642[(2)] = null);
(statearr_164622_164642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164620 === (1)))
{var state_164619__$1 = state_164619;var statearr_164623_164643 = state_164619__$1;(statearr_164623_164643[(2)] = null);
(statearr_164623_164643[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164620 === (4)))
{var inst_164591 = (state_164619[(7)]);var inst_164591__$1 = (state_164619[(2)]);var inst_164592 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_164591__$1);var inst_164593 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_164592);var state_164619__$1 = (function (){var statearr_164624 = state_164619;(statearr_164624[(7)] = inst_164591__$1);
return statearr_164624;
})();if(inst_164593)
{var statearr_164625_164644 = state_164619__$1;(statearr_164625_164644[(1)] = (5));
} else
{var statearr_164626_164645 = state_164619__$1;(statearr_164626_164645[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164620 === (6)))
{var inst_164591 = (state_164619[(7)]);var inst_164598 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_164591);var inst_164599 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_164598);var state_164619__$1 = state_164619;if(inst_164599)
{var statearr_164627_164646 = state_164619__$1;(statearr_164627_164646[(1)] = (8));
} else
{var statearr_164628_164647 = state_164619__$1;(statearr_164628_164647[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164620 === (3)))
{var inst_164617 = (state_164619[(2)]);var state_164619__$1 = state_164619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_164619__$1,inst_164617);
} else
{if((state_val_164620 === (2)))
{var inst_164588 = om.core.get_shared.call(null,self__.owner);var inst_164589 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_164588);var state_164619__$1 = state_164619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_164619__$1,(4),inst_164589);
} else
{if((state_val_164620 === (9)))
{var state_164619__$1 = state_164619;var statearr_164629_164648 = state_164619__$1;(statearr_164629_164648[(2)] = null);
(statearr_164629_164648[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164620 === (5)))
{var inst_164591 = (state_164619[(7)]);var inst_164595 = (function (){var ev = inst_164591;return ((function (ev,inst_164591,state_val_164620,c__17814__auto__,___$1){
return (function (p1__164521_SHARP_){return cljs.core.assoc.call(null,p1__164521_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_164591,state_val_164620,c__17814__auto__,___$1))
})();var inst_164596 = om.core.transact_BANG_.call(null,self__.app,inst_164595);var state_164619__$1 = state_164619;var statearr_164630_164649 = state_164619__$1;(statearr_164630_164649[(2)] = inst_164596);
(statearr_164630_164649[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164620 === (10)))
{var inst_164607 = (state_164619[(2)]);var state_164619__$1 = state_164619;var statearr_164631_164650 = state_164619__$1;(statearr_164631_164650[(2)] = inst_164607);
(statearr_164631_164650[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164620 === (8)))
{var inst_164591 = (state_164619[(7)]);var inst_164601 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_164591);var inst_164602 = inst_164601.deleteRecord();var inst_164603 = (function (){var ev = inst_164591;return ((function (ev,inst_164591,inst_164601,inst_164602,state_val_164620,c__17814__auto__,___$1){
return (function (p1__164522_SHARP_){return cljs.core.assoc.call(null,p1__164522_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_164591,inst_164601,inst_164602,state_val_164620,c__17814__auto__,___$1))
})();var inst_164604 = om.core.transact_BANG_.call(null,self__.app,inst_164603);var state_164619__$1 = (function (){var statearr_164632 = state_164619;(statearr_164632[(11)] = inst_164602);
return statearr_164632;
})();var statearr_164633_164651 = state_164619__$1;(statearr_164633_164651[(2)] = inst_164604);
(statearr_164633_164651[(1)] = (10));
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
var state_machine__17800__auto____0 = (function (){var statearr_164637 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_164637[(0)] = state_machine__17800__auto__);
(statearr_164637[(1)] = (1));
return statearr_164637;
});
var state_machine__17800__auto____1 = (function (state_164619){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_164619);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e164638){if((e164638 instanceof Object))
{var ex__17803__auto__ = e164638;var statearr_164639_164652 = state_164619;(statearr_164639_164652[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_164619);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e164638;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__164653 = state_164619;
state_164619 = G__164653;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_164619){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_164619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_164640 = f__17815__auto__.call(null);(statearr_164640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_164640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t164583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164585){var self__ = this;
var _164585__$1 = this;return self__.meta164584;
});
expenses.core.t164583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164585,meta164584__$1){var self__ = this;
var _164585__$1 = this;return (new expenses.core.t164583(self__.owner,self__.app,self__.dispatch_component,meta164584__$1));
});
expenses.core.__GT_t164583 = (function __GT_t164583(owner__$1,app__$1,dispatch_component__$1,meta164584){return (new expenses.core.t164583(owner__$1,app__$1,dispatch_component__$1,meta164584));
});
}
return (new expenses.core.t164583(owner,app,dispatch_component,null));
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