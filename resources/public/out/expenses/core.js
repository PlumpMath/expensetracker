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
expenses.core.adj_date = (function adj_date(date,span,n){var G__164655 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__164655) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t164663 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164663 = (function (owner,app,menu_component,meta164664){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta164664 = meta164664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164663.cljs$lang$type = true;
expenses.core.t164663.cljs$lang$ctorStr = "expenses.core/t164663";
expenses.core.t164663.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164663");
});
expenses.core.t164663.prototype.om$core$IRender$ = true;
expenses.core.t164663.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__164657_SHARP_){return cljs.core.assoc.call(null,p1__164657_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"TOP")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__164658_SHARP_){return cljs.core.assoc.call(null,p1__164658_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"ADD")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__164659_SHARP_){return cljs.core.assoc.call(null,p1__164659_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"LIST"))))));
});
expenses.core.t164663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164665){var self__ = this;
var _164665__$1 = this;return self__.meta164664;
});
expenses.core.t164663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164665,meta164664__$1){var self__ = this;
var _164665__$1 = this;return (new expenses.core.t164663(self__.owner,self__.app,self__.menu_component,meta164664__$1));
});
expenses.core.__GT_t164663 = (function __GT_t164663(owner__$1,app__$1,menu_component__$1,meta164664){return (new expenses.core.t164663(owner__$1,app__$1,menu_component__$1,meta164664));
});
}
return (new expenses.core.t164663(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t164671 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164671 = (function (owner,app,buttons_component,meta164672){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta164672 = meta164672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164671.cljs$lang$type = true;
expenses.core.t164671.cljs$lang$ctorStr = "expenses.core/t164671";
expenses.core.t164671.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164671");
});
expenses.core.t164671.prototype.om$core$IRenderState$ = true;
expenses.core.t164671.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__164674){var self__ = this;
var map__164675 = p__164674;var map__164675__$1 = ((cljs.core.seq_QMARK_.call(null,map__164675))?cljs.core.apply.call(null,cljs.core.hash_map,map__164675):map__164675);var current_focus_date = cljs.core.get.call(null,map__164675__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__164675__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__164675__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_focus_date);
});})(___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__164675,map__164675__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t164671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164673){var self__ = this;
var _164673__$1 = this;return self__.meta164672;
});
expenses.core.t164671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164673,meta164672__$1){var self__ = this;
var _164673__$1 = this;return (new expenses.core.t164671(self__.owner,self__.app,self__.buttons_component,meta164672__$1));
});
expenses.core.__GT_t164671 = (function __GT_t164671(owner__$1,app__$1,buttons_component__$1,meta164672){return (new expenses.core.t164671(owner__$1,app__$1,buttons_component__$1,meta164672));
});
}
return (new expenses.core.t164671(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t164680 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164680 = (function (owner,items,total_component,meta164681){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta164681 = meta164681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164680.cljs$lang$type = true;
expenses.core.t164680.cljs$lang$ctorStr = "expenses.core/t164680";
expenses.core.t164680.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164680");
});
expenses.core.t164680.prototype.om$core$IRender$ = true;
expenses.core.t164680.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__164676_SHARP_){return p1__164676_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t164680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164682){var self__ = this;
var _164682__$1 = this;return self__.meta164681;
});
expenses.core.t164680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164682,meta164681__$1){var self__ = this;
var _164682__$1 = this;return (new expenses.core.t164680(self__.owner,self__.items,self__.total_component,meta164681__$1));
});
expenses.core.__GT_t164680 = (function __GT_t164680(owner__$1,items__$1,total_component__$1,meta164681){return (new expenses.core.t164680(owner__$1,items__$1,total_component__$1,meta164681));
});
}
return (new expenses.core.t164680(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__164683_SHARP_){return p1__164683_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.touch_end_check = (function touch_end_check(e,owner,state){var touch_end = (e.changedTouches[(0)]);if(cljs.core.truth_(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__164684_SHARP_){return cljs.core.assoc.call(null,p1__164684_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
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
return (function (p1__164685_SHARP_){return cljs.core.assoc.call(null,p1__164685_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{return null;
}
}
} else
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__164686_SHARP_){return cljs.core.assoc.call(null,p1__164686_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
}
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t164692 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164692 = (function (owner,item,expense_list_item,meta164693){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta164693 = meta164693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164692.cljs$lang$type = true;
expenses.core.t164692.cljs$lang$ctorStr = "expenses.core/t164692";
expenses.core.t164692.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164692");
});
expenses.core.t164692.prototype.om$core$IRenderState$ = true;
expenses.core.t164692.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onTouchEnd": ((function (___$1){
return (function (e){return expenses.core.touch_end_check.call(null,e,self__.owner,state);
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__164687_SHARP_){return cljs.core.assoc.call(null,p1__164687_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__164688_SHARP_){return cljs.core.assoc.call(null,p1__164688_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.core.t164692.prototype.om$core$IInitState$ = true;
expenses.core.t164692.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t164692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164694){var self__ = this;
var _164694__$1 = this;return self__.meta164693;
});
expenses.core.t164692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164694,meta164693__$1){var self__ = this;
var _164694__$1 = this;return (new expenses.core.t164692(self__.owner,self__.item,self__.expense_list_item,meta164693__$1));
});
expenses.core.__GT_t164692 = (function __GT_t164692(owner__$1,item__$1,expense_list_item__$1,meta164693){return (new expenses.core.t164692(owner__$1,item__$1,expense_list_item__$1,meta164693));
});
}
return (new expenses.core.t164692(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t164698 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164698 = (function (owner,items,expense_list_component,meta164699){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta164699 = meta164699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164698.cljs$lang$type = true;
expenses.core.t164698.cljs$lang$ctorStr = "expenses.core/t164698";
expenses.core.t164698.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164698");
});
expenses.core.t164698.prototype.om$core$IRender$ = true;
expenses.core.t164698.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t164698.prototype.om$core$IInitState$ = true;
expenses.core.t164698.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t164698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164700){var self__ = this;
var _164700__$1 = this;return self__.meta164699;
});
expenses.core.t164698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164700,meta164699__$1){var self__ = this;
var _164700__$1 = this;return (new expenses.core.t164698(self__.owner,self__.items,self__.expense_list_component,meta164699__$1));
});
expenses.core.__GT_t164698 = (function __GT_t164698(owner__$1,items__$1,expense_list_component__$1,meta164699){return (new expenses.core.t164698(owner__$1,items__$1,expense_list_component__$1,meta164699));
});
}
return (new expenses.core.t164698(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__164702,f_date,items){var map__164707 = p__164702;var map__164707__$1 = ((cljs.core.seq_QMARK_.call(null,map__164707))?cljs.core.apply.call(null,cljs.core.hash_map,map__164707):map__164707);var category = cljs.core.get.call(null,map__164707__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__164707__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__164707,map__164707__$1,category,span){
return (function (p1__164701_SHARP_){var and__11373__auto__ = (function (){var G__164709 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__164709) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__164701_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__164701_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__164701_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__164710 = category;if(cljs.core._EQ_.call(null,null,G__164710))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__164701_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__164707,map__164707__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t164739 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164739 = (function (owner,app,main_component,meta164740){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta164740 = meta164740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164739.cljs$lang$type = true;
expenses.core.t164739.cljs$lang$ctorStr = "expenses.core/t164739";
expenses.core.t164739.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164739");
});
expenses.core.t164739.prototype.om$core$IRenderState$ = true;
expenses.core.t164739.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__164742){var self__ = this;
var map__164743 = p__164742;var map__164743__$1 = ((cljs.core.seq_QMARK_.call(null,map__164743))?cljs.core.apply.call(null,cljs.core.hash_map,map__164743):map__164743);var current_focus_date = cljs.core.get.call(null,map__164743__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__164743__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__164743__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__164743,map__164743__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__164743,map__164743__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t164739.prototype.om$core$IInitState$ = true;
expenses.core.t164739.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (cljs.core.truth_(new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app):(new Date()));var c__17814__auto___164765 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___164765,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___164765,focus_chan,now,___$1){
return (function (state_164753){var state_val_164754 = (state_164753[(1)]);if((state_val_164754 === (4)))
{var inst_164746 = (state_164753[(2)]);var inst_164747 = (function (){var new_focus = inst_164746;return ((function (new_focus,inst_164746,state_val_164754,c__17814__auto___164765,focus_chan,now,___$1){
return (function (p1__164712_SHARP_){return cljs.core.merge.call(null,p1__164712_SHARP_,new_focus);
});
;})(new_focus,inst_164746,state_val_164754,c__17814__auto___164765,focus_chan,now,___$1))
})();var inst_164748 = om.core.update_state_BANG_.call(null,self__.owner,inst_164747);var state_164753__$1 = (function (){var statearr_164755 = state_164753;(statearr_164755[(7)] = inst_164748);
return statearr_164755;
})();var statearr_164756_164766 = state_164753__$1;(statearr_164756_164766[(2)] = null);
(statearr_164756_164766[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164754 === (3)))
{var inst_164751 = (state_164753[(2)]);var state_164753__$1 = state_164753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_164753__$1,inst_164751);
} else
{if((state_val_164754 === (2)))
{var state_164753__$1 = state_164753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_164753__$1,(4),focus_chan);
} else
{if((state_val_164754 === (1)))
{var state_164753__$1 = state_164753;var statearr_164757_164767 = state_164753__$1;(statearr_164757_164767[(2)] = null);
(statearr_164757_164767[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___164765,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___164765,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_164761 = [null,null,null,null,null,null,null,null];(statearr_164761[(0)] = state_machine__17800__auto__);
(statearr_164761[(1)] = (1));
return statearr_164761;
});
var state_machine__17800__auto____1 = (function (state_164753){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_164753);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e164762){if((e164762 instanceof Object))
{var ex__17803__auto__ = e164762;var statearr_164763_164768 = state_164753;(statearr_164763_164768[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_164753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e164762;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__164769 = state_164753;
state_164753 = G__164769;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_164753){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_164753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___164765,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_164764 = f__17815__auto__.call(null);(statearr_164764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___164765);
return statearr_164764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___164765,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t164739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164741){var self__ = this;
var _164741__$1 = this;return self__.meta164740;
});
expenses.core.t164739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164741,meta164740__$1){var self__ = this;
var _164741__$1 = this;return (new expenses.core.t164739(self__.owner,self__.app,self__.main_component,meta164740__$1));
});
expenses.core.__GT_t164739 = (function __GT_t164739(owner__$1,app__$1,main_component__$1,meta164740){return (new expenses.core.t164739(owner__$1,app__$1,main_component__$1,meta164740));
});
}
return (new expenses.core.t164739(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t164779 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164779 = (function (owner,app,category_select,meta164780){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta164780 = meta164780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164779.cljs$lang$type = true;
expenses.core.t164779.cljs$lang$ctorStr = "expenses.core/t164779";
expenses.core.t164779.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164779");
});
expenses.core.t164779.prototype.om$core$IRenderState$ = true;
expenses.core.t164779.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.distinct.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__164770_SHARP_){return p1__164770_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__164771_SHARP_){if(typeof expenses.core.t164782 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164782 = (function (p1__164771_SHARP_,categories,state,_,meta164780,owner,app,category_select,meta164783){
this.p1__164771_SHARP_ = p1__164771_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta164780 = meta164780;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta164783 = meta164783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164782.cljs$lang$type = true;
expenses.core.t164782.cljs$lang$ctorStr = "expenses.core/t164782";
expenses.core.t164782.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164782");
});})(categories,___$1))
;
expenses.core.t164782.prototype.om$core$IRender$ = true;
expenses.core.t164782.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__164771_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__164771_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t164782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_164784){var self__ = this;
var _164784__$1 = this;return self__.meta164783;
});})(categories,___$1))
;
expenses.core.t164782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_164784,meta164783__$1){var self__ = this;
var _164784__$1 = this;return (new expenses.core.t164782(self__.p1__164771_SHARP_,self__.categories,self__.state,self__._,self__.meta164780,self__.owner,self__.app,self__.category_select,meta164783__$1));
});})(categories,___$1))
;
expenses.core.__GT_t164782 = ((function (categories,___$1){
return (function __GT_t164782(p1__164771_SHARP___$1,categories__$1,state__$1,___$2,meta164780__$1,owner__$2,app__$2,category_select__$2,meta164783){return (new expenses.core.t164782(p1__164771_SHARP___$1,categories__$1,state__$1,___$2,meta164780__$1,owner__$2,app__$2,category_select__$2,meta164783));
});})(categories,___$1))
;
}
return (new expenses.core.t164782(p1__164771_SHARP_,categories,state,___$1,self__.meta164780,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__164772_SHARP_){return cljs.core.assoc.call(null,p1__164772_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164781){var self__ = this;
var _164781__$1 = this;return self__.meta164780;
});
expenses.core.t164779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164781,meta164780__$1){var self__ = this;
var _164781__$1 = this;return (new expenses.core.t164779(self__.owner,self__.app,self__.category_select,meta164780__$1));
});
expenses.core.__GT_t164779 = (function __GT_t164779(owner__$1,app__$1,category_select__$1,meta164780){return (new expenses.core.t164779(owner__$1,app__$1,category_select__$1,meta164780));
});
}
return (new expenses.core.t164779(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t164789 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164789 = (function (owner,app,amount_enter,meta164790){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta164790 = meta164790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164789.cljs$lang$type = true;
expenses.core.t164789.cljs$lang$ctorStr = "expenses.core/t164789";
expenses.core.t164789.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164789");
});
expenses.core.t164789.prototype.om$core$IRenderState$ = true;
expenses.core.t164789.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__164785_SHARP_){return cljs.core.assoc.call(null,p1__164785_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164791){var self__ = this;
var _164791__$1 = this;return self__.meta164790;
});
expenses.core.t164789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164791,meta164790__$1){var self__ = this;
var _164791__$1 = this;return (new expenses.core.t164789(self__.owner,self__.app,self__.amount_enter,meta164790__$1));
});
expenses.core.__GT_t164789 = (function __GT_t164789(owner__$1,app__$1,amount_enter__$1,meta164790){return (new expenses.core.t164789(owner__$1,app__$1,amount_enter__$1,meta164790));
});
}
return (new expenses.core.t164789(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t164796 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164796 = (function (owner,app,note_enter,meta164797){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta164797 = meta164797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164796.cljs$lang$type = true;
expenses.core.t164796.cljs$lang$ctorStr = "expenses.core/t164796";
expenses.core.t164796.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164796");
});
expenses.core.t164796.prototype.om$core$IRenderState$ = true;
expenses.core.t164796.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__164792_SHARP_){return cljs.core.assoc.call(null,p1__164792_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164798){var self__ = this;
var _164798__$1 = this;return self__.meta164797;
});
expenses.core.t164796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164798,meta164797__$1){var self__ = this;
var _164798__$1 = this;return (new expenses.core.t164796(self__.owner,self__.app,self__.note_enter,meta164797__$1));
});
expenses.core.__GT_t164796 = (function __GT_t164796(owner__$1,app__$1,note_enter__$1,meta164797){return (new expenses.core.t164796(owner__$1,app__$1,note_enter__$1,meta164797));
});
}
return (new expenses.core.t164796(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t164882 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164882 = (function (owner,app,add_component,meta164883){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta164883 = meta164883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164882.cljs$lang$type = true;
expenses.core.t164882.cljs$lang$ctorStr = "expenses.core/t164882";
expenses.core.t164882.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164882");
});
expenses.core.t164882.prototype.om$core$IRenderState$ = true;
expenses.core.t164882.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__164885 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__164885) {
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
expenses.core.t164882.prototype.om$core$IInitState$ = true;
expenses.core.t164882.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___164962 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___164962,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___164962,add_chan,___$1){
return (function (state_164931){var state_val_164932 = (state_164931[(1)]);if((state_val_164932 === (7)))
{var inst_164926 = (state_164931[(2)]);var state_164931__$1 = (function (){var statearr_164933 = state_164931;(statearr_164933[(7)] = inst_164926);
return statearr_164933;
})();var statearr_164934_164963 = state_164931__$1;(statearr_164934_164963[(2)] = null);
(statearr_164934_164963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (1)))
{var state_164931__$1 = state_164931;var statearr_164935_164964 = state_164931__$1;(statearr_164935_164964[(2)] = null);
(statearr_164935_164964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (4)))
{var inst_164888 = (state_164931[(8)]);var inst_164888__$1 = (state_164931[(2)]);var inst_164889 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_164888__$1);var state_164931__$1 = (function (){var statearr_164936 = state_164931;(statearr_164936[(8)] = inst_164888__$1);
return statearr_164936;
})();if(cljs.core.truth_(inst_164889))
{var statearr_164937_164965 = state_164931__$1;(statearr_164937_164965[(1)] = (5));
} else
{var statearr_164938_164966 = state_164931__$1;(statearr_164938_164966[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (15)))
{var state_164931__$1 = state_164931;var statearr_164939_164967 = state_164931__$1;(statearr_164939_164967[(2)] = null);
(statearr_164939_164967[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (13)))
{var inst_164922 = (state_164931[(2)]);var state_164931__$1 = state_164931;var statearr_164940_164968 = state_164931__$1;(statearr_164940_164968[(2)] = inst_164922);
(statearr_164940_164968[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (6)))
{var inst_164888 = (state_164931[(8)]);var inst_164894 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_164888);var state_164931__$1 = state_164931;if(cljs.core.truth_(inst_164894))
{var statearr_164941_164969 = state_164931__$1;(statearr_164941_164969[(1)] = (8));
} else
{var statearr_164942_164970 = state_164931__$1;(statearr_164942_164970[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (3)))
{var inst_164929 = (state_164931[(2)]);var state_164931__$1 = state_164931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_164931__$1,inst_164929);
} else
{if((state_val_164932 === (12)))
{var state_164931__$1 = state_164931;var statearr_164943_164971 = state_164931__$1;(statearr_164943_164971[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (2)))
{var state_164931__$1 = state_164931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_164931__$1,(4),add_chan);
} else
{if((state_val_164932 === (11)))
{var inst_164888 = (state_164931[(8)]);var inst_164901 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_164902 = cljs.core.deref.call(null,self__.app);var inst_164903 = new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(inst_164902);var inst_164904 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_164905 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_164906 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_164888);var inst_164907 = [inst_164903,inst_164904,inst_164905,inst_164906];var inst_164908 = cljs.core.PersistentHashMap.fromArrays(inst_164901,inst_164907);var inst_164909 = om.core.get_shared.call(null,self__.owner);var inst_164910 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_164909);var inst_164911 = expenses.core.put_expense.call(null,inst_164910,inst_164908);var inst_164912 = (function (){var new_expense = inst_164908;var v = inst_164888;return ((function (new_expense,v,inst_164888,inst_164901,inst_164902,inst_164903,inst_164904,inst_164905,inst_164906,inst_164907,inst_164908,inst_164909,inst_164910,inst_164911,state_val_164932,c__17814__auto___164962,add_chan,___$1){
return (function (p1__164801_SHARP_){return cljs.core.assoc.call(null,p1__164801_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_164888,inst_164901,inst_164902,inst_164903,inst_164904,inst_164905,inst_164906,inst_164907,inst_164908,inst_164909,inst_164910,inst_164911,state_val_164932,c__17814__auto___164962,add_chan,___$1))
})();var inst_164913 = om.core.transact_BANG_.call(null,self__.app,inst_164912);var state_164931__$1 = (function (){var statearr_164945 = state_164931;(statearr_164945[(9)] = inst_164911);
return statearr_164945;
})();var statearr_164946_164972 = state_164931__$1;(statearr_164946_164972[(2)] = inst_164913);
(statearr_164946_164972[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (9)))
{var inst_164888 = (state_164931[(8)]);var inst_164899 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_164888);var state_164931__$1 = state_164931;if(cljs.core.truth_(inst_164899))
{var statearr_164947_164973 = state_164931__$1;(statearr_164947_164973[(1)] = (11));
} else
{var statearr_164948_164974 = state_164931__$1;(statearr_164948_164974[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (5)))
{var inst_164888 = (state_164931[(8)]);var inst_164891 = (function (){var v = inst_164888;return ((function (v,inst_164888,state_val_164932,c__17814__auto___164962,add_chan,___$1){
return (function (p1__164799_SHARP_){return cljs.core.assoc.call(null,p1__164799_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_164888,state_val_164932,c__17814__auto___164962,add_chan,___$1))
})();var inst_164892 = om.core.update_state_BANG_.call(null,self__.owner,inst_164891);var state_164931__$1 = state_164931;var statearr_164949_164975 = state_164931__$1;(statearr_164949_164975[(2)] = inst_164892);
(statearr_164949_164975[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (14)))
{var inst_164888 = (state_164931[(8)]);var inst_164916 = (function (){var v = inst_164888;return ((function (v,inst_164888,state_val_164932,c__17814__auto___164962,add_chan,___$1){
return (function (p1__164802_SHARP_){return cljs.core.assoc.call(null,p1__164802_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_164888,state_val_164932,c__17814__auto___164962,add_chan,___$1))
})();var inst_164917 = om.core.transact_BANG_.call(null,self__.app,inst_164916);var state_164931__$1 = state_164931;var statearr_164950_164976 = state_164931__$1;(statearr_164950_164976[(2)] = inst_164917);
(statearr_164950_164976[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (16)))
{var inst_164920 = (state_164931[(2)]);var state_164931__$1 = state_164931;var statearr_164951_164977 = state_164931__$1;(statearr_164951_164977[(2)] = inst_164920);
(statearr_164951_164977[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (10)))
{var inst_164924 = (state_164931[(2)]);var state_164931__$1 = state_164931;var statearr_164952_164978 = state_164931__$1;(statearr_164952_164978[(2)] = inst_164924);
(statearr_164952_164978[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_164932 === (8)))
{var inst_164888 = (state_164931[(8)]);var inst_164896 = (function (){var v = inst_164888;return ((function (v,inst_164888,state_val_164932,c__17814__auto___164962,add_chan,___$1){
return (function (p1__164800_SHARP_){return cljs.core.assoc.call(null,p1__164800_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_164888,state_val_164932,c__17814__auto___164962,add_chan,___$1))
})();var inst_164897 = om.core.update_state_BANG_.call(null,self__.owner,inst_164896);var state_164931__$1 = state_164931;var statearr_164953_164979 = state_164931__$1;(statearr_164953_164979[(2)] = inst_164897);
(statearr_164953_164979[(1)] = (10));
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
});})(c__17814__auto___164962,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___164962,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_164957 = [null,null,null,null,null,null,null,null,null,null];(statearr_164957[(0)] = state_machine__17800__auto__);
(statearr_164957[(1)] = (1));
return statearr_164957;
});
var state_machine__17800__auto____1 = (function (state_164931){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_164931);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e164958){if((e164958 instanceof Object))
{var ex__17803__auto__ = e164958;var statearr_164959_164980 = state_164931;(statearr_164959_164980[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_164931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e164958;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__164981 = state_164931;
state_164931 = G__164981;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_164931){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_164931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___164962,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_164960 = f__17815__auto__.call(null);(statearr_164960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___164962);
return statearr_164960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___164962,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t164882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164884){var self__ = this;
var _164884__$1 = this;return self__.meta164883;
});
expenses.core.t164882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164884,meta164883__$1){var self__ = this;
var _164884__$1 = this;return (new expenses.core.t164882(self__.owner,self__.app,self__.add_component,meta164883__$1));
});
expenses.core.__GT_t164882 = (function __GT_t164882(owner__$1,app__$1,add_component__$1,meta164883){return (new expenses.core.t164882(owner__$1,app__$1,add_component__$1,meta164883));
});
}
return (new expenses.core.t164882(owner,app,add_component,null));
});
expenses.core.edit_component = (function edit_component(app,owner){if(typeof expenses.core.t164990 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164990 = (function (owner,app,edit_component,meta164991){
this.owner = owner;
this.app = app;
this.edit_component = edit_component;
this.meta164991 = meta164991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164990.cljs$lang$type = true;
expenses.core.t164990.cljs$lang$ctorStr = "expenses.core/t164990";
expenses.core.t164990.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164990");
});
expenses.core.t164990.prototype.om$core$IRenderState$ = true;
expenses.core.t164990.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.form({"className": "pure-form"},React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__164982_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__164982_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "category-input"}),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__164983_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),p1__164983_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "number", "ref": "amount-input"}),React.DOM.h3({"className": "pure-u-1"},"NOTE"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__164984_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904)], null),p1__164984_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "note-input"}),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
item.update(cljs.core.clj__GT_js.call(null,state));
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__164985_SHARP_){return cljs.core.assoc.call(null,p1__164985_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"})),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__164986_SHARP_){return cljs.core.assoc.call(null,p1__164986_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t164990.prototype.om$core$IInitState$ = true;
expenses.core.t164990.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),item.get("category"),new cljs.core.Keyword(null,"amount","amount",364489504),item.get("amount"),new cljs.core.Keyword(null,"note","note",1426297904),item.get("note")], null);
});
expenses.core.t164990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164992){var self__ = this;
var _164992__$1 = this;return self__.meta164991;
});
expenses.core.t164990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164992,meta164991__$1){var self__ = this;
var _164992__$1 = this;return (new expenses.core.t164990(self__.owner,self__.app,self__.edit_component,meta164991__$1));
});
expenses.core.__GT_t164990 = (function __GT_t164990(owner__$1,app__$1,edit_component__$1,meta164991){return (new expenses.core.t164990(owner__$1,app__$1,edit_component__$1,meta164991));
});
}
return (new expenses.core.t164990(owner,app,edit_component,null));
});
expenses.core.day_item_component = (function day_item_component(item,owner){if(typeof expenses.core.t164996 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t164996 = (function (owner,item,day_item_component,meta164997){
this.owner = owner;
this.item = item;
this.day_item_component = day_item_component;
this.meta164997 = meta164997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t164996.cljs$lang$type = true;
expenses.core.t164996.cljs$lang$ctorStr = "expenses.core/t164996";
expenses.core.t164996.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t164996");
});
expenses.core.t164996.prototype.om$core$IRender$ = true;
expenses.core.t164996.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.li({"onClick": ((function (this__14239__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item)], null));
});})(this__14239__auto____$1))
, "className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-2 list-date"},goog.string.format("%02d-%02d-%d",new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getDate(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getMonth() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getFullYear())),React.DOM.div({"style": {"text-align": "right"}, "className": "pure-u-1-2 list-total"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(self__.item))+"\u5186")));
});
expenses.core.t164996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164998){var self__ = this;
var _164998__$1 = this;return self__.meta164997;
});
expenses.core.t164996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164998,meta164997__$1){var self__ = this;
var _164998__$1 = this;return (new expenses.core.t164996(self__.owner,self__.item,self__.day_item_component,meta164997__$1));
});
expenses.core.__GT_t164996 = (function __GT_t164996(owner__$1,item__$1,day_item_component__$1,meta164997){return (new expenses.core.t164996(owner__$1,item__$1,day_item_component__$1,meta164997));
});
}
return (new expenses.core.t164996(owner,item,day_item_component,null));
});
expenses.core.days_list_component = (function days_list_component(app,owner){var days = cljs.core.sort_by.call(null,(function (p1__164999_SHARP_){return (- new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__164999_SHARP_).getTime());
}),cljs.core.map.call(null,(function (p__165008){var vec__165009 = p__165008;var k = cljs.core.nth.call(null,vec__165009,(0),null);var v = cljs.core.nth.call(null,vec__165009,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),k,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__165009,k,v){
return (function (p1__165000_SHARP_){return p1__165000_SHARP_.get("amount");
});})(vec__165009,k,v))
,v))], null);
}),cljs.core.group_by.call(null,(function (p1__165001_SHARP_){var G__165010 = p1__165001_SHARP_.get("date");G__165010.setHours((0),(0),(0),(0));
return G__165010;
}),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(app))));if(typeof expenses.core.t165011 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t165011 = (function (days,owner,app,days_list_component,meta165012){
this.days = days;
this.owner = owner;
this.app = app;
this.days_list_component = days_list_component;
this.meta165012 = meta165012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t165011.cljs$lang$type = true;
expenses.core.t165011.cljs$lang$ctorStr = "expenses.core/t165011";
expenses.core.t165011.cljs$lang$ctorPrWriter = ((function (days){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t165011");
});})(days))
;
expenses.core.t165011.prototype.om$core$IRender$ = true;
expenses.core.t165011.prototype.om$core$IRender$render$arity$1 = ((function (days){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "daylist"},om.core.build_all.call(null,expenses.core.day_item_component,self__.days));
});})(days))
;
expenses.core.t165011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (days){
return (function (_165013){var self__ = this;
var _165013__$1 = this;return self__.meta165012;
});})(days))
;
expenses.core.t165011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (days){
return (function (_165013,meta165012__$1){var self__ = this;
var _165013__$1 = this;return (new expenses.core.t165011(self__.days,self__.owner,self__.app,self__.days_list_component,meta165012__$1));
});})(days))
;
expenses.core.__GT_t165011 = ((function (days){
return (function __GT_t165011(days__$1,owner__$1,app__$1,days_list_component__$1,meta165012){return (new expenses.core.t165011(days__$1,owner__$1,app__$1,days_list_component__$1,meta165012));
});})(days))
;
}
return (new expenses.core.t165011(days,owner,app,days_list_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t165017 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t165017 = (function (owner,app,error_component,meta165018){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta165018 = meta165018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t165017.cljs$lang$type = true;
expenses.core.t165017.cljs$lang$ctorStr = "expenses.core/t165017";
expenses.core.t165017.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t165017");
});
expenses.core.t165017.prototype.om$core$IRender$ = true;
expenses.core.t165017.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t165017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_165019){var self__ = this;
var _165019__$1 = this;return self__.meta165018;
});
expenses.core.t165017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_165019,meta165018__$1){var self__ = this;
var _165019__$1 = this;return (new expenses.core.t165017(self__.owner,self__.app,self__.error_component,meta165018__$1));
});
expenses.core.__GT_t165017 = (function __GT_t165017(owner__$1,app__$1,error_component__$1,meta165018){return (new expenses.core.t165017(owner__$1,app__$1,error_component__$1,meta165018));
});
}
return (new expenses.core.t165017(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__165020_SHARP_){return cljs.core.assoc.call(null,p1__165020_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t165035 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t165035 = (function (owner,app,loading,meta165036){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta165036 = meta165036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t165035.cljs$lang$type = true;
expenses.core.t165035.cljs$lang$ctorStr = "expenses.core/t165035";
expenses.core.t165035.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t165035");
});
expenses.core.t165035.prototype.om$core$IRender$ = true;
expenses.core.t165035.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t165035.prototype.om$core$IWillMount$ = true;
expenses.core.t165035.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_165040){var state_val_165041 = (state_165040[(1)]);if((state_val_165041 === (1)))
{var inst_165038 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_165040__$1 = state_165040;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165040__$1,inst_165038);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_165045 = [null,null,null,null,null,null,null];(statearr_165045[(0)] = state_machine__17800__auto__);
(statearr_165045[(1)] = (1));
return statearr_165045;
});
var state_machine__17800__auto____1 = (function (state_165040){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_165040);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e165046){if((e165046 instanceof Object))
{var ex__17803__auto__ = e165046;var statearr_165047_165049 = state_165040;(statearr_165047_165049[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165040);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e165046;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__165050 = state_165040;
state_165040 = G__165050;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_165040){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_165040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_165048 = f__17815__auto__.call(null);(statearr_165048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_165048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t165035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_165037){var self__ = this;
var _165037__$1 = this;return self__.meta165036;
});
expenses.core.t165035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_165037,meta165036__$1){var self__ = this;
var _165037__$1 = this;return (new expenses.core.t165035(self__.owner,self__.app,self__.loading,meta165036__$1));
});
expenses.core.__GT_t165035 = (function __GT_t165035(owner__$1,app__$1,loading__$1,meta165036){return (new expenses.core.t165035(owner__$1,app__$1,loading__$1,meta165036));
});
}
return (new expenses.core.t165035(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t165113 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t165113 = (function (owner,app,dispatch_component,meta165114){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta165114 = meta165114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t165113.cljs$lang$type = true;
expenses.core.t165113.cljs$lang$ctorStr = "expenses.core/t165113";
expenses.core.t165113.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t165113");
});
expenses.core.t165113.prototype.om$core$IRender$ = true;
expenses.core.t165113.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__165054_SHARP_){return cljs.core.assoc.call(null,p1__165054_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),null);
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__165116 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__165116) {
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
expenses.core.t165113.prototype.om$core$IWillMount$ = true;
expenses.core.t165113.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_165149){var state_val_165150 = (state_165149[(1)]);if((state_val_165150 === (7)))
{var inst_165121 = (state_165149[(7)]);var inst_165139 = (state_165149[(2)]);var inst_165140 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_165121);var inst_165141 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),inst_165140);var inst_165142 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_165121);var inst_165143 = (function (){var new_date = inst_165142;var ev = inst_165121;return ((function (new_date,ev,inst_165121,inst_165139,inst_165140,inst_165141,inst_165142,state_val_165150,c__17814__auto__,___$1){
return (function (p1__165053_SHARP_){return cljs.core.assoc.call(null,p1__165053_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),new_date);
});
;})(new_date,ev,inst_165121,inst_165139,inst_165140,inst_165141,inst_165142,state_val_165150,c__17814__auto__,___$1))
})();var inst_165144 = om.core.transact_BANG_.call(null,self__.app,inst_165143);var state_165149__$1 = (function (){var statearr_165151 = state_165149;(statearr_165151[(8)] = inst_165144);
(statearr_165151[(9)] = inst_165139);
(statearr_165151[(10)] = inst_165141);
return statearr_165151;
})();var statearr_165152_165172 = state_165149__$1;(statearr_165152_165172[(2)] = null);
(statearr_165152_165172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_165150 === (1)))
{var state_165149__$1 = state_165149;var statearr_165153_165173 = state_165149__$1;(statearr_165153_165173[(2)] = null);
(statearr_165153_165173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_165150 === (4)))
{var inst_165121 = (state_165149[(7)]);var inst_165121__$1 = (state_165149[(2)]);var inst_165122 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_165121__$1);var inst_165123 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_165122);var state_165149__$1 = (function (){var statearr_165154 = state_165149;(statearr_165154[(7)] = inst_165121__$1);
return statearr_165154;
})();if(inst_165123)
{var statearr_165155_165174 = state_165149__$1;(statearr_165155_165174[(1)] = (5));
} else
{var statearr_165156_165175 = state_165149__$1;(statearr_165156_165175[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_165150 === (6)))
{var inst_165121 = (state_165149[(7)]);var inst_165128 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_165121);var inst_165129 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_165128);var state_165149__$1 = state_165149;if(inst_165129)
{var statearr_165157_165176 = state_165149__$1;(statearr_165157_165176[(1)] = (8));
} else
{var statearr_165158_165177 = state_165149__$1;(statearr_165158_165177[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_165150 === (3)))
{var inst_165147 = (state_165149[(2)]);var state_165149__$1 = state_165149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_165149__$1,inst_165147);
} else
{if((state_val_165150 === (2)))
{var inst_165118 = om.core.get_shared.call(null,self__.owner);var inst_165119 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_165118);var state_165149__$1 = state_165149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_165149__$1,(4),inst_165119);
} else
{if((state_val_165150 === (9)))
{var state_165149__$1 = state_165149;var statearr_165159_165178 = state_165149__$1;(statearr_165159_165178[(2)] = null);
(statearr_165159_165178[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_165150 === (5)))
{var inst_165121 = (state_165149[(7)]);var inst_165125 = (function (){var ev = inst_165121;return ((function (ev,inst_165121,state_val_165150,c__17814__auto__,___$1){
return (function (p1__165051_SHARP_){return cljs.core.assoc.call(null,p1__165051_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_165121,state_val_165150,c__17814__auto__,___$1))
})();var inst_165126 = om.core.transact_BANG_.call(null,self__.app,inst_165125);var state_165149__$1 = state_165149;var statearr_165160_165179 = state_165149__$1;(statearr_165160_165179[(2)] = inst_165126);
(statearr_165160_165179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_165150 === (10)))
{var inst_165137 = (state_165149[(2)]);var state_165149__$1 = state_165149;var statearr_165161_165180 = state_165149__$1;(statearr_165161_165180[(2)] = inst_165137);
(statearr_165161_165180[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_165150 === (8)))
{var inst_165121 = (state_165149[(7)]);var inst_165131 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_165121);var inst_165132 = inst_165131.deleteRecord();var inst_165133 = (function (){var ev = inst_165121;return ((function (ev,inst_165121,inst_165131,inst_165132,state_val_165150,c__17814__auto__,___$1){
return (function (p1__165052_SHARP_){return cljs.core.assoc.call(null,p1__165052_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_165121,inst_165131,inst_165132,state_val_165150,c__17814__auto__,___$1))
})();var inst_165134 = om.core.transact_BANG_.call(null,self__.app,inst_165133);var state_165149__$1 = (function (){var statearr_165162 = state_165149;(statearr_165162[(11)] = inst_165132);
return statearr_165162;
})();var statearr_165163_165181 = state_165149__$1;(statearr_165163_165181[(2)] = inst_165134);
(statearr_165163_165181[(1)] = (10));
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
var state_machine__17800__auto____0 = (function (){var statearr_165167 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_165167[(0)] = state_machine__17800__auto__);
(statearr_165167[(1)] = (1));
return statearr_165167;
});
var state_machine__17800__auto____1 = (function (state_165149){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_165149);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e165168){if((e165168 instanceof Object))
{var ex__17803__auto__ = e165168;var statearr_165169_165182 = state_165149;(statearr_165169_165182[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_165149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e165168;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__165183 = state_165149;
state_165149 = G__165183;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_165149){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_165149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_165170 = f__17815__auto__.call(null);(statearr_165170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_165170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t165113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_165115){var self__ = this;
var _165115__$1 = this;return self__.meta165114;
});
expenses.core.t165113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_165115,meta165114__$1){var self__ = this;
var _165115__$1 = this;return (new expenses.core.t165113(self__.owner,self__.app,self__.dispatch_component,meta165114__$1));
});
expenses.core.__GT_t165113 = (function __GT_t165113(owner__$1,app__$1,dispatch_component__$1,meta165114){return (new expenses.core.t165113(owner__$1,app__$1,dispatch_component__$1,meta165114));
});
}
return (new expenses.core.t165113(owner,app,dispatch_component,null));
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