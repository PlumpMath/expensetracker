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
expenses.core.adj_date = (function adj_date(date,span,n){var G__179741 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__179741) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t179749 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179749 = (function (owner,app,menu_component,meta179750){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta179750 = meta179750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179749.cljs$lang$type = true;
expenses.core.t179749.cljs$lang$ctorStr = "expenses.core/t179749";
expenses.core.t179749.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179749");
});
expenses.core.t179749.prototype.om$core$IRender$ = true;
expenses.core.t179749.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__179743_SHARP_){return cljs.core.assoc.call(null,p1__179743_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(new Date()),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"TOP")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__179744_SHARP_){return cljs.core.assoc.call(null,p1__179744_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"ADD")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__179745_SHARP_){return cljs.core.assoc.call(null,p1__179745_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"LIST"))))));
});
expenses.core.t179749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179751){var self__ = this;
var _179751__$1 = this;return self__.meta179750;
});
expenses.core.t179749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179751,meta179750__$1){var self__ = this;
var _179751__$1 = this;return (new expenses.core.t179749(self__.owner,self__.app,self__.menu_component,meta179750__$1));
});
expenses.core.__GT_t179749 = (function __GT_t179749(owner__$1,app__$1,menu_component__$1,meta179750){return (new expenses.core.t179749(owner__$1,app__$1,menu_component__$1,meta179750));
});
}
return (new expenses.core.t179749(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t179757 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179757 = (function (owner,app,buttons_component,meta179758){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta179758 = meta179758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179757.cljs$lang$type = true;
expenses.core.t179757.cljs$lang$ctorStr = "expenses.core/t179757";
expenses.core.t179757.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179757");
});
expenses.core.t179757.prototype.om$core$IRenderState$ = true;
expenses.core.t179757.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__179760){var self__ = this;
var map__179761 = p__179760;var map__179761__$1 = ((cljs.core.seq_QMARK_.call(null,map__179761))?cljs.core.apply.call(null,cljs.core.hash_map,map__179761):map__179761);var current_focus_date = cljs.core.get.call(null,map__179761__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__179761__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__179761__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_focus_date);
});})(___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__179761,map__179761__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t179757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179759){var self__ = this;
var _179759__$1 = this;return self__.meta179758;
});
expenses.core.t179757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179759,meta179758__$1){var self__ = this;
var _179759__$1 = this;return (new expenses.core.t179757(self__.owner,self__.app,self__.buttons_component,meta179758__$1));
});
expenses.core.__GT_t179757 = (function __GT_t179757(owner__$1,app__$1,buttons_component__$1,meta179758){return (new expenses.core.t179757(owner__$1,app__$1,buttons_component__$1,meta179758));
});
}
return (new expenses.core.t179757(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t179766 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179766 = (function (owner,items,total_component,meta179767){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta179767 = meta179767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179766.cljs$lang$type = true;
expenses.core.t179766.cljs$lang$ctorStr = "expenses.core/t179766";
expenses.core.t179766.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179766");
});
expenses.core.t179766.prototype.om$core$IRender$ = true;
expenses.core.t179766.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__179762_SHARP_){return p1__179762_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t179766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179768){var self__ = this;
var _179768__$1 = this;return self__.meta179767;
});
expenses.core.t179766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179768,meta179767__$1){var self__ = this;
var _179768__$1 = this;return (new expenses.core.t179766(self__.owner,self__.items,self__.total_component,meta179767__$1));
});
expenses.core.__GT_t179766 = (function __GT_t179766(owner__$1,items__$1,total_component__$1,meta179767){return (new expenses.core.t179766(owner__$1,items__$1,total_component__$1,meta179767));
});
}
return (new expenses.core.t179766(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__179769_SHARP_){return p1__179769_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.touch_end_check = (function touch_end_check(e,owner,state){var touch_end = (e.changedTouches[(0)]);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state)))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__179770_SHARP_){return cljs.core.assoc.call(null,p1__179770_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{if((cljs.core.not.call(null,new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))) && (((20) > Math.abs.call(null,(new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageY - touch_end.pageY)))) && (((30) < (new cljs.core.Keyword(null,"touch-start","touch-start",-515804236).cljs$core$IFn$_invoke$arity$1(state).pageX - touch_end.pageX))))
{return om.core.update_state_BANG_.call(null,owner,((function (touch_end){
return (function (p1__179771_SHARP_){return cljs.core.assoc.call(null,p1__179771_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),true,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
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
return (function (p1__179772_SHARP_){return cljs.core.assoc.call(null,p1__179772_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(touch_end))
);
} else
{return null;
}
}
}
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t179778 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179778 = (function (owner,item,expense_list_item,meta179779){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta179779 = meta179779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179778.cljs$lang$type = true;
expenses.core.t179778.cljs$lang$ctorStr = "expenses.core/t179778";
expenses.core.t179778.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179778");
});
expenses.core.t179778.prototype.om$core$IRenderState$ = true;
expenses.core.t179778.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.li({"onTouchEnd": ((function (___$1){
return (function (e){return expenses.core.touch_end_check.call(null,e,self__.owner,state);
});})(___$1))
, "onTouchStart": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),(e.changedTouches[(0)]));
});})(___$1))
, "className": "pure-u-1"},(cljs.core.truth_(new cljs.core.Keyword(null,"swiped","swiped",-708698685).cljs$core$IFn$_invoke$arity$1(state))?React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__179773_SHARP_){return cljs.core.assoc.call(null,p1__179773_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton edit"},"EDIT"),React.DOM.div({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
om.core.update_state_BANG_.call(null,self__.owner,((function (___$1){
return (function (p1__179774_SHARP_){return cljs.core.assoc.call(null,p1__179774_SHARP_,new cljs.core.Keyword(null,"swiped","swiped",-708698685),false,new cljs.core.Keyword(null,"touch-start","touch-start",-515804236),null);
});})(___$1))
);
return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"value","value",305978217),self__.item], null));
});})(___$1))
, "className": "pure-u-1-2 listbutton del"},"DELETE")):React.DOM.div({"className": "pure-u-1 inner"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")))));
});
expenses.core.t179778.prototype.om$core$IInitState$ = true;
expenses.core.t179778.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t179778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179780){var self__ = this;
var _179780__$1 = this;return self__.meta179779;
});
expenses.core.t179778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179780,meta179779__$1){var self__ = this;
var _179780__$1 = this;return (new expenses.core.t179778(self__.owner,self__.item,self__.expense_list_item,meta179779__$1));
});
expenses.core.__GT_t179778 = (function __GT_t179778(owner__$1,item__$1,expense_list_item__$1,meta179779){return (new expenses.core.t179778(owner__$1,item__$1,expense_list_item__$1,meta179779));
});
}
return (new expenses.core.t179778(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t179784 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179784 = (function (owner,items,expense_list_component,meta179785){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta179785 = meta179785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179784.cljs$lang$type = true;
expenses.core.t179784.cljs$lang$ctorStr = "expenses.core/t179784";
expenses.core.t179784.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179784");
});
expenses.core.t179784.prototype.om$core$IRender$ = true;
expenses.core.t179784.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t179784.prototype.om$core$IInitState$ = true;
expenses.core.t179784.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swiped","swiped",-708698685),false], null);
});
expenses.core.t179784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179786){var self__ = this;
var _179786__$1 = this;return self__.meta179785;
});
expenses.core.t179784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179786,meta179785__$1){var self__ = this;
var _179786__$1 = this;return (new expenses.core.t179784(self__.owner,self__.items,self__.expense_list_component,meta179785__$1));
});
expenses.core.__GT_t179784 = (function __GT_t179784(owner__$1,items__$1,expense_list_component__$1,meta179785){return (new expenses.core.t179784(owner__$1,items__$1,expense_list_component__$1,meta179785));
});
}
return (new expenses.core.t179784(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__179788,f_date,items){var map__179793 = p__179788;var map__179793__$1 = ((cljs.core.seq_QMARK_.call(null,map__179793))?cljs.core.apply.call(null,cljs.core.hash_map,map__179793):map__179793);var category = cljs.core.get.call(null,map__179793__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__179793__$1,new cljs.core.Keyword(null,"span","span",1394872991));return cljs.core.filter.call(null,((function (map__179793,map__179793__$1,category,span){
return (function (p1__179787_SHARP_){var and__11373__auto__ = (function (){var G__179795 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__179795) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__179787_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__179787_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__179787_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__179796 = category;if(cljs.core._EQ_.call(null,null,G__179796))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__179787_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__179793,map__179793__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t179825 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179825 = (function (owner,app,main_component,meta179826){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta179826 = meta179826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179825.cljs$lang$type = true;
expenses.core.t179825.cljs$lang$ctorStr = "expenses.core/t179825";
expenses.core.t179825.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179825");
});
expenses.core.t179825.prototype.om$core$IRenderState$ = true;
expenses.core.t179825.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__179828){var self__ = this;
var map__179829 = p__179828;var map__179829__$1 = ((cljs.core.seq_QMARK_.call(null,map__179829))?cljs.core.apply.call(null,cljs.core.hash_map,map__179829):map__179829);var current_focus_date = cljs.core.get.call(null,map__179829__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__179829__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__179829__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__179829,map__179829__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__179829,map__179829__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t179825.prototype.om$core$IInitState$ = true;
expenses.core.t179825.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (cljs.core.truth_(new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(self__.app):(new Date()));var c__17814__auto___179851 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___179851,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___179851,focus_chan,now,___$1){
return (function (state_179839){var state_val_179840 = (state_179839[(1)]);if((state_val_179840 === (4)))
{var inst_179832 = (state_179839[(2)]);var inst_179833 = (function (){var new_focus = inst_179832;return ((function (new_focus,inst_179832,state_val_179840,c__17814__auto___179851,focus_chan,now,___$1){
return (function (p1__179798_SHARP_){return cljs.core.merge.call(null,p1__179798_SHARP_,new_focus);
});
;})(new_focus,inst_179832,state_val_179840,c__17814__auto___179851,focus_chan,now,___$1))
})();var inst_179834 = om.core.update_state_BANG_.call(null,self__.owner,inst_179833);var state_179839__$1 = (function (){var statearr_179841 = state_179839;(statearr_179841[(7)] = inst_179834);
return statearr_179841;
})();var statearr_179842_179852 = state_179839__$1;(statearr_179842_179852[(2)] = null);
(statearr_179842_179852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_179840 === (3)))
{var inst_179837 = (state_179839[(2)]);var state_179839__$1 = state_179839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179839__$1,inst_179837);
} else
{if((state_val_179840 === (2)))
{var state_179839__$1 = state_179839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179839__$1,(4),focus_chan);
} else
{if((state_val_179840 === (1)))
{var state_179839__$1 = state_179839;var statearr_179843_179853 = state_179839__$1;(statearr_179843_179853[(2)] = null);
(statearr_179843_179853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___179851,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___179851,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_179847 = [null,null,null,null,null,null,null,null];(statearr_179847[(0)] = state_machine__17800__auto__);
(statearr_179847[(1)] = (1));
return statearr_179847;
});
var state_machine__17800__auto____1 = (function (state_179839){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_179839);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e179848){if((e179848 instanceof Object))
{var ex__17803__auto__ = e179848;var statearr_179849_179854 = state_179839;(statearr_179849_179854[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e179848;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__179855 = state_179839;
state_179839 = G__179855;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_179839){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_179839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___179851,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_179850 = f__17815__auto__.call(null);(statearr_179850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___179851);
return statearr_179850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___179851,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t179825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179827){var self__ = this;
var _179827__$1 = this;return self__.meta179826;
});
expenses.core.t179825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179827,meta179826__$1){var self__ = this;
var _179827__$1 = this;return (new expenses.core.t179825(self__.owner,self__.app,self__.main_component,meta179826__$1));
});
expenses.core.__GT_t179825 = (function __GT_t179825(owner__$1,app__$1,main_component__$1,meta179826){return (new expenses.core.t179825(owner__$1,app__$1,main_component__$1,meta179826));
});
}
return (new expenses.core.t179825(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t179865 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179865 = (function (owner,app,category_select,meta179866){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta179866 = meta179866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179865.cljs$lang$type = true;
expenses.core.t179865.cljs$lang$ctorStr = "expenses.core/t179865";
expenses.core.t179865.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179865");
});
expenses.core.t179865.prototype.om$core$IRenderState$ = true;
expenses.core.t179865.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.distinct.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__179856_SHARP_){return p1__179856_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app)));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__179857_SHARP_){if(typeof expenses.core.t179868 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179868 = (function (p1__179857_SHARP_,categories,state,_,meta179866,owner,app,category_select,meta179869){
this.p1__179857_SHARP_ = p1__179857_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta179866 = meta179866;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta179869 = meta179869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179868.cljs$lang$type = true;
expenses.core.t179868.cljs$lang$ctorStr = "expenses.core/t179868";
expenses.core.t179868.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179868");
});})(categories,___$1))
;
expenses.core.t179868.prototype.om$core$IRender$ = true;
expenses.core.t179868.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__179857_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__179857_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t179868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_179870){var self__ = this;
var _179870__$1 = this;return self__.meta179869;
});})(categories,___$1))
;
expenses.core.t179868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_179870,meta179869__$1){var self__ = this;
var _179870__$1 = this;return (new expenses.core.t179868(self__.p1__179857_SHARP_,self__.categories,self__.state,self__._,self__.meta179866,self__.owner,self__.app,self__.category_select,meta179869__$1));
});})(categories,___$1))
;
expenses.core.__GT_t179868 = ((function (categories,___$1){
return (function __GT_t179868(p1__179857_SHARP___$1,categories__$1,state__$1,___$2,meta179866__$1,owner__$2,app__$2,category_select__$2,meta179869){return (new expenses.core.t179868(p1__179857_SHARP___$1,categories__$1,state__$1,___$2,meta179866__$1,owner__$2,app__$2,category_select__$2,meta179869));
});})(categories,___$1))
;
}
return (new expenses.core.t179868(p1__179857_SHARP_,categories,state,___$1,self__.meta179866,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__179858_SHARP_){return cljs.core.assoc.call(null,p1__179858_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t179865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179867){var self__ = this;
var _179867__$1 = this;return self__.meta179866;
});
expenses.core.t179865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179867,meta179866__$1){var self__ = this;
var _179867__$1 = this;return (new expenses.core.t179865(self__.owner,self__.app,self__.category_select,meta179866__$1));
});
expenses.core.__GT_t179865 = (function __GT_t179865(owner__$1,app__$1,category_select__$1,meta179866){return (new expenses.core.t179865(owner__$1,app__$1,category_select__$1,meta179866));
});
}
return (new expenses.core.t179865(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t179875 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179875 = (function (owner,app,amount_enter,meta179876){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta179876 = meta179876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179875.cljs$lang$type = true;
expenses.core.t179875.cljs$lang$ctorStr = "expenses.core/t179875";
expenses.core.t179875.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179875");
});
expenses.core.t179875.prototype.om$core$IRenderState$ = true;
expenses.core.t179875.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__179871_SHARP_){return cljs.core.assoc.call(null,p1__179871_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t179875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179877){var self__ = this;
var _179877__$1 = this;return self__.meta179876;
});
expenses.core.t179875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179877,meta179876__$1){var self__ = this;
var _179877__$1 = this;return (new expenses.core.t179875(self__.owner,self__.app,self__.amount_enter,meta179876__$1));
});
expenses.core.__GT_t179875 = (function __GT_t179875(owner__$1,app__$1,amount_enter__$1,meta179876){return (new expenses.core.t179875(owner__$1,app__$1,amount_enter__$1,meta179876));
});
}
return (new expenses.core.t179875(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t179882 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179882 = (function (owner,app,note_enter,meta179883){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta179883 = meta179883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179882.cljs$lang$type = true;
expenses.core.t179882.cljs$lang$ctorStr = "expenses.core/t179882";
expenses.core.t179882.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179882");
});
expenses.core.t179882.prototype.om$core$IRenderState$ = true;
expenses.core.t179882.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
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
return (function (p1__179878_SHARP_){return cljs.core.assoc.call(null,p1__179878_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t179882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179884){var self__ = this;
var _179884__$1 = this;return self__.meta179883;
});
expenses.core.t179882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179884,meta179883__$1){var self__ = this;
var _179884__$1 = this;return (new expenses.core.t179882(self__.owner,self__.app,self__.note_enter,meta179883__$1));
});
expenses.core.__GT_t179882 = (function __GT_t179882(owner__$1,app__$1,note_enter__$1,meta179883){return (new expenses.core.t179882(owner__$1,app__$1,note_enter__$1,meta179883));
});
}
return (new expenses.core.t179882(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t179968 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t179968 = (function (owner,app,add_component,meta179969){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta179969 = meta179969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t179968.cljs$lang$type = true;
expenses.core.t179968.cljs$lang$ctorStr = "expenses.core/t179968";
expenses.core.t179968.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t179968");
});
expenses.core.t179968.prototype.om$core$IRenderState$ = true;
expenses.core.t179968.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__179971 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__179971) {
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
expenses.core.t179968.prototype.om$core$IInitState$ = true;
expenses.core.t179968.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___180048 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___180048,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___180048,add_chan,___$1){
return (function (state_180017){var state_val_180018 = (state_180017[(1)]);if((state_val_180018 === (7)))
{var inst_180012 = (state_180017[(2)]);var state_180017__$1 = (function (){var statearr_180019 = state_180017;(statearr_180019[(7)] = inst_180012);
return statearr_180019;
})();var statearr_180020_180049 = state_180017__$1;(statearr_180020_180049[(2)] = null);
(statearr_180020_180049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (1)))
{var state_180017__$1 = state_180017;var statearr_180021_180050 = state_180017__$1;(statearr_180021_180050[(2)] = null);
(statearr_180021_180050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (4)))
{var inst_179974 = (state_180017[(8)]);var inst_179974__$1 = (state_180017[(2)]);var inst_179975 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_179974__$1);var state_180017__$1 = (function (){var statearr_180022 = state_180017;(statearr_180022[(8)] = inst_179974__$1);
return statearr_180022;
})();if(cljs.core.truth_(inst_179975))
{var statearr_180023_180051 = state_180017__$1;(statearr_180023_180051[(1)] = (5));
} else
{var statearr_180024_180052 = state_180017__$1;(statearr_180024_180052[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (15)))
{var state_180017__$1 = state_180017;var statearr_180025_180053 = state_180017__$1;(statearr_180025_180053[(2)] = null);
(statearr_180025_180053[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (13)))
{var inst_180008 = (state_180017[(2)]);var state_180017__$1 = state_180017;var statearr_180026_180054 = state_180017__$1;(statearr_180026_180054[(2)] = inst_180008);
(statearr_180026_180054[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (6)))
{var inst_179974 = (state_180017[(8)]);var inst_179980 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_179974);var state_180017__$1 = state_180017;if(cljs.core.truth_(inst_179980))
{var statearr_180027_180055 = state_180017__$1;(statearr_180027_180055[(1)] = (8));
} else
{var statearr_180028_180056 = state_180017__$1;(statearr_180028_180056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (3)))
{var inst_180015 = (state_180017[(2)]);var state_180017__$1 = state_180017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180017__$1,inst_180015);
} else
{if((state_val_180018 === (12)))
{var state_180017__$1 = state_180017;var statearr_180029_180057 = state_180017__$1;(statearr_180029_180057[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (2)))
{var state_180017__$1 = state_180017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180017__$1,(4),add_chan);
} else
{if((state_val_180018 === (11)))
{var inst_179974 = (state_180017[(8)]);var inst_179987 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_179988 = cljs.core.deref.call(null,self__.app);var inst_179989 = new cljs.core.Keyword(null,"current-date","current-date",-1728476105).cljs$core$IFn$_invoke$arity$1(inst_179988);var inst_179990 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_179991 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_179992 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_179974);var inst_179993 = [inst_179989,inst_179990,inst_179991,inst_179992];var inst_179994 = cljs.core.PersistentHashMap.fromArrays(inst_179987,inst_179993);var inst_179995 = om.core.get_shared.call(null,self__.owner);var inst_179996 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_179995);var inst_179997 = expenses.core.put_expense.call(null,inst_179996,inst_179994);var inst_179998 = (function (){var new_expense = inst_179994;var v = inst_179974;return ((function (new_expense,v,inst_179974,inst_179987,inst_179988,inst_179989,inst_179990,inst_179991,inst_179992,inst_179993,inst_179994,inst_179995,inst_179996,inst_179997,state_val_180018,c__17814__auto___180048,add_chan,___$1){
return (function (p1__179887_SHARP_){return cljs.core.assoc.call(null,p1__179887_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_179974,inst_179987,inst_179988,inst_179989,inst_179990,inst_179991,inst_179992,inst_179993,inst_179994,inst_179995,inst_179996,inst_179997,state_val_180018,c__17814__auto___180048,add_chan,___$1))
})();var inst_179999 = om.core.transact_BANG_.call(null,self__.app,inst_179998);var state_180017__$1 = (function (){var statearr_180031 = state_180017;(statearr_180031[(9)] = inst_179997);
return statearr_180031;
})();var statearr_180032_180058 = state_180017__$1;(statearr_180032_180058[(2)] = inst_179999);
(statearr_180032_180058[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (9)))
{var inst_179974 = (state_180017[(8)]);var inst_179985 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_179974);var state_180017__$1 = state_180017;if(cljs.core.truth_(inst_179985))
{var statearr_180033_180059 = state_180017__$1;(statearr_180033_180059[(1)] = (11));
} else
{var statearr_180034_180060 = state_180017__$1;(statearr_180034_180060[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (5)))
{var inst_179974 = (state_180017[(8)]);var inst_179977 = (function (){var v = inst_179974;return ((function (v,inst_179974,state_val_180018,c__17814__auto___180048,add_chan,___$1){
return (function (p1__179885_SHARP_){return cljs.core.assoc.call(null,p1__179885_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_179974,state_val_180018,c__17814__auto___180048,add_chan,___$1))
})();var inst_179978 = om.core.update_state_BANG_.call(null,self__.owner,inst_179977);var state_180017__$1 = state_180017;var statearr_180035_180061 = state_180017__$1;(statearr_180035_180061[(2)] = inst_179978);
(statearr_180035_180061[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (14)))
{var inst_179974 = (state_180017[(8)]);var inst_180002 = (function (){var v = inst_179974;return ((function (v,inst_179974,state_val_180018,c__17814__auto___180048,add_chan,___$1){
return (function (p1__179888_SHARP_){return cljs.core.assoc.call(null,p1__179888_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_179974,state_val_180018,c__17814__auto___180048,add_chan,___$1))
})();var inst_180003 = om.core.transact_BANG_.call(null,self__.app,inst_180002);var state_180017__$1 = state_180017;var statearr_180036_180062 = state_180017__$1;(statearr_180036_180062[(2)] = inst_180003);
(statearr_180036_180062[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (16)))
{var inst_180006 = (state_180017[(2)]);var state_180017__$1 = state_180017;var statearr_180037_180063 = state_180017__$1;(statearr_180037_180063[(2)] = inst_180006);
(statearr_180037_180063[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (10)))
{var inst_180010 = (state_180017[(2)]);var state_180017__$1 = state_180017;var statearr_180038_180064 = state_180017__$1;(statearr_180038_180064[(2)] = inst_180010);
(statearr_180038_180064[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180018 === (8)))
{var inst_179974 = (state_180017[(8)]);var inst_179982 = (function (){var v = inst_179974;return ((function (v,inst_179974,state_val_180018,c__17814__auto___180048,add_chan,___$1){
return (function (p1__179886_SHARP_){return cljs.core.assoc.call(null,p1__179886_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_179974,state_val_180018,c__17814__auto___180048,add_chan,___$1))
})();var inst_179983 = om.core.update_state_BANG_.call(null,self__.owner,inst_179982);var state_180017__$1 = state_180017;var statearr_180039_180065 = state_180017__$1;(statearr_180039_180065[(2)] = inst_179983);
(statearr_180039_180065[(1)] = (10));
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
});})(c__17814__auto___180048,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___180048,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_180043 = [null,null,null,null,null,null,null,null,null,null];(statearr_180043[(0)] = state_machine__17800__auto__);
(statearr_180043[(1)] = (1));
return statearr_180043;
});
var state_machine__17800__auto____1 = (function (state_180017){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_180017);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e180044){if((e180044 instanceof Object))
{var ex__17803__auto__ = e180044;var statearr_180045_180066 = state_180017;(statearr_180045_180066[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__180067 = state_180017;
state_180017 = G__180067;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_180017){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_180017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___180048,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_180046 = f__17815__auto__.call(null);(statearr_180046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___180048);
return statearr_180046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___180048,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t179968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179970){var self__ = this;
var _179970__$1 = this;return self__.meta179969;
});
expenses.core.t179968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179970,meta179969__$1){var self__ = this;
var _179970__$1 = this;return (new expenses.core.t179968(self__.owner,self__.app,self__.add_component,meta179969__$1));
});
expenses.core.__GT_t179968 = (function __GT_t179968(owner__$1,app__$1,add_component__$1,meta179969){return (new expenses.core.t179968(owner__$1,app__$1,add_component__$1,meta179969));
});
}
return (new expenses.core.t179968(owner,app,add_component,null));
});
expenses.core.edit_component = (function edit_component(app,owner){if(typeof expenses.core.t180076 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t180076 = (function (owner,app,edit_component,meta180077){
this.owner = owner;
this.app = app;
this.edit_component = edit_component;
this.meta180077 = meta180077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t180076.cljs$lang$type = true;
expenses.core.t180076.cljs$lang$ctorStr = "expenses.core/t180076";
expenses.core.t180076.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t180076");
});
expenses.core.t180076.prototype.om$core$IRenderState$ = true;
expenses.core.t180076.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.form({"className": "pure-form"},React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__180068_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__180068_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "category-input"}),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__180069_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504)], null),p1__180069_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "number", "ref": "amount-input"}),React.DOM.h3({"className": "pure-u-1"},"NOTE"),om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (item,___$1){
return (function (p1__180070_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904)], null),p1__180070_SHARP_.target.value);
});})(item,___$1))
, "className": "pure-input-1", "type": "text", "ref": "note-input"}),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
item.update(cljs.core.clj__GT_js.call(null,state));
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__180071_SHARP_){return cljs.core.assoc.call(null,p1__180071_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"})),React.DOM.div({"className": "pure-u-1-2 wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (item,___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (item,___$1){
return (function (p1__180072_SHARP_){return cljs.core.assoc.call(null,p1__180072_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),null);
});})(item,___$1))
);
});})(item,___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t180076.prototype.om$core$IInitState$ = true;
expenses.core.t180076.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",-1762631488).cljs$core$IFn$_invoke$arity$1(self__.app);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),item.get("category"),new cljs.core.Keyword(null,"amount","amount",364489504),item.get("amount"),new cljs.core.Keyword(null,"note","note",1426297904),item.get("note")], null);
});
expenses.core.t180076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_180078){var self__ = this;
var _180078__$1 = this;return self__.meta180077;
});
expenses.core.t180076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_180078,meta180077__$1){var self__ = this;
var _180078__$1 = this;return (new expenses.core.t180076(self__.owner,self__.app,self__.edit_component,meta180077__$1));
});
expenses.core.__GT_t180076 = (function __GT_t180076(owner__$1,app__$1,edit_component__$1,meta180077){return (new expenses.core.t180076(owner__$1,app__$1,edit_component__$1,meta180077));
});
}
return (new expenses.core.t180076(owner,app,edit_component,null));
});
expenses.core.day_item_component = (function day_item_component(item,owner){if(typeof expenses.core.t180082 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t180082 = (function (owner,item,day_item_component,meta180083){
this.owner = owner;
this.item = item;
this.day_item_component = day_item_component;
this.meta180083 = meta180083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t180082.cljs$lang$type = true;
expenses.core.t180082.cljs$lang$ctorStr = "expenses.core/t180082";
expenses.core.t180082.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t180082");
});
expenses.core.t180082.prototype.om$core$IRender$ = true;
expenses.core.t180082.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.li({"onClick": ((function (this__14239__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item)], null));
});})(this__14239__auto____$1))
, "className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-2 list-date"},goog.string.format("%02d-%02d-%d",new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getDate(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getMonth() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.item).getFullYear())),React.DOM.div({"style": {"text-align": "right"}, "className": "pure-u-1-2 list-total"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(self__.item))+"\u5186")));
});
expenses.core.t180082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_180084){var self__ = this;
var _180084__$1 = this;return self__.meta180083;
});
expenses.core.t180082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_180084,meta180083__$1){var self__ = this;
var _180084__$1 = this;return (new expenses.core.t180082(self__.owner,self__.item,self__.day_item_component,meta180083__$1));
});
expenses.core.__GT_t180082 = (function __GT_t180082(owner__$1,item__$1,day_item_component__$1,meta180083){return (new expenses.core.t180082(owner__$1,item__$1,day_item_component__$1,meta180083));
});
}
return (new expenses.core.t180082(owner,item,day_item_component,null));
});
expenses.core.days_list_component = (function days_list_component(app,owner){var days = cljs.core.sort_by.call(null,(function (p1__180085_SHARP_){return (- new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__180085_SHARP_).getTime());
}),cljs.core.map.call(null,(function (p__180094){var vec__180095 = p__180094;var k = cljs.core.nth.call(null,vec__180095,(0),null);var v = cljs.core.nth.call(null,vec__180095,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),k,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__180095,k,v){
return (function (p1__180086_SHARP_){return p1__180086_SHARP_.get("amount");
});})(vec__180095,k,v))
,v))], null);
}),cljs.core.group_by.call(null,(function (p1__180087_SHARP_){var G__180096 = p1__180087_SHARP_.get("date");G__180096.setHours((0),(0),(0),(0));
return G__180096;
}),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(app))));if(typeof expenses.core.t180097 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t180097 = (function (days,owner,app,days_list_component,meta180098){
this.days = days;
this.owner = owner;
this.app = app;
this.days_list_component = days_list_component;
this.meta180098 = meta180098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t180097.cljs$lang$type = true;
expenses.core.t180097.cljs$lang$ctorStr = "expenses.core/t180097";
expenses.core.t180097.cljs$lang$ctorPrWriter = ((function (days){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t180097");
});})(days))
;
expenses.core.t180097.prototype.om$core$IRender$ = true;
expenses.core.t180097.prototype.om$core$IRender$render$arity$1 = ((function (days){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "daylist"},om.core.build_all.call(null,expenses.core.day_item_component,self__.days));
});})(days))
;
expenses.core.t180097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (days){
return (function (_180099){var self__ = this;
var _180099__$1 = this;return self__.meta180098;
});})(days))
;
expenses.core.t180097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (days){
return (function (_180099,meta180098__$1){var self__ = this;
var _180099__$1 = this;return (new expenses.core.t180097(self__.days,self__.owner,self__.app,self__.days_list_component,meta180098__$1));
});})(days))
;
expenses.core.__GT_t180097 = ((function (days){
return (function __GT_t180097(days__$1,owner__$1,app__$1,days_list_component__$1,meta180098){return (new expenses.core.t180097(days__$1,owner__$1,app__$1,days_list_component__$1,meta180098));
});})(days))
;
}
return (new expenses.core.t180097(days,owner,app,days_list_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t180103 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t180103 = (function (owner,app,error_component,meta180104){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta180104 = meta180104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t180103.cljs$lang$type = true;
expenses.core.t180103.cljs$lang$ctorStr = "expenses.core/t180103";
expenses.core.t180103.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t180103");
});
expenses.core.t180103.prototype.om$core$IRender$ = true;
expenses.core.t180103.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t180103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_180105){var self__ = this;
var _180105__$1 = this;return self__.meta180104;
});
expenses.core.t180103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_180105,meta180104__$1){var self__ = this;
var _180105__$1 = this;return (new expenses.core.t180103(self__.owner,self__.app,self__.error_component,meta180104__$1));
});
expenses.core.__GT_t180103 = (function __GT_t180103(owner__$1,app__$1,error_component__$1,meta180104){return (new expenses.core.t180103(owner__$1,app__$1,error_component__$1,meta180104));
});
}
return (new expenses.core.t180103(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__180106_SHARP_){return cljs.core.assoc.call(null,p1__180106_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t180121 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t180121 = (function (owner,app,loading,meta180122){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta180122 = meta180122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t180121.cljs$lang$type = true;
expenses.core.t180121.cljs$lang$ctorStr = "expenses.core/t180121";
expenses.core.t180121.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t180121");
});
expenses.core.t180121.prototype.om$core$IRender$ = true;
expenses.core.t180121.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t180121.prototype.om$core$IWillMount$ = true;
expenses.core.t180121.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_180126){var state_val_180127 = (state_180126[(1)]);if((state_val_180127 === (1)))
{var inst_180124 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_180126__$1 = state_180126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180126__$1,inst_180124);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_180131 = [null,null,null,null,null,null,null];(statearr_180131[(0)] = state_machine__17800__auto__);
(statearr_180131[(1)] = (1));
return statearr_180131;
});
var state_machine__17800__auto____1 = (function (state_180126){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_180126);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e180132){if((e180132 instanceof Object))
{var ex__17803__auto__ = e180132;var statearr_180133_180135 = state_180126;(statearr_180133_180135[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180126);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180132;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__180136 = state_180126;
state_180126 = G__180136;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_180126){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_180126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_180134 = f__17815__auto__.call(null);(statearr_180134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_180134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t180121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_180123){var self__ = this;
var _180123__$1 = this;return self__.meta180122;
});
expenses.core.t180121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_180123,meta180122__$1){var self__ = this;
var _180123__$1 = this;return (new expenses.core.t180121(self__.owner,self__.app,self__.loading,meta180122__$1));
});
expenses.core.__GT_t180121 = (function __GT_t180121(owner__$1,app__$1,loading__$1,meta180122){return (new expenses.core.t180121(owner__$1,app__$1,loading__$1,meta180122));
});
}
return (new expenses.core.t180121(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t180208 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t180208 = (function (owner,app,dispatch_component,meta180209){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta180209 = meta180209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t180208.cljs$lang$type = true;
expenses.core.t180208.cljs$lang$ctorStr = "expenses.core/t180208";
expenses.core.t180208.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t180208");
});
expenses.core.t180208.prototype.om$core$IRender$ = true;
expenses.core.t180208.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.print.call(null,self__.app);
return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__180140_SHARP_){return cljs.core.assoc.call(null,p1__180140_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__180211 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__180211) {
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
expenses.core.t180208.prototype.om$core$IWillMount$ = true;
expenses.core.t180208.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_180249){var state_val_180250 = (state_180249[(1)]);if((state_val_180250 === (7)))
{var inst_180244 = (state_180249[(2)]);var state_180249__$1 = (function (){var statearr_180251 = state_180249;(statearr_180251[(7)] = inst_180244);
return statearr_180251;
})();var statearr_180252_180276 = state_180249__$1;(statearr_180252_180276[(2)] = null);
(statearr_180252_180276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (1)))
{var state_180249__$1 = state_180249;var statearr_180253_180277 = state_180249__$1;(statearr_180253_180277[(2)] = null);
(statearr_180253_180277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (4)))
{var inst_180216 = (state_180249[(8)]);var inst_180216__$1 = (state_180249[(2)]);var inst_180217 = cljs.core.print.call(null,inst_180216__$1);var inst_180218 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_180216__$1);var inst_180219 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_180218);var state_180249__$1 = (function (){var statearr_180254 = state_180249;(statearr_180254[(8)] = inst_180216__$1);
(statearr_180254[(9)] = inst_180217);
return statearr_180254;
})();if(inst_180219)
{var statearr_180255_180278 = state_180249__$1;(statearr_180255_180278[(1)] = (5));
} else
{var statearr_180256_180279 = state_180249__$1;(statearr_180256_180279[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (13)))
{var inst_180240 = (state_180249[(2)]);var state_180249__$1 = state_180249;var statearr_180257_180280 = state_180249__$1;(statearr_180257_180280[(2)] = inst_180240);
(statearr_180257_180280[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (6)))
{var inst_180216 = (state_180249[(8)]);var inst_180224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_180216);var inst_180225 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_180224);var state_180249__$1 = state_180249;if(inst_180225)
{var statearr_180258_180281 = state_180249__$1;(statearr_180258_180281[(1)] = (8));
} else
{var statearr_180259_180282 = state_180249__$1;(statearr_180259_180282[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (3)))
{var inst_180247 = (state_180249[(2)]);var state_180249__$1 = state_180249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180249__$1,inst_180247);
} else
{if((state_val_180250 === (12)))
{var state_180249__$1 = state_180249;var statearr_180260_180283 = state_180249__$1;(statearr_180260_180283[(2)] = null);
(statearr_180260_180283[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (2)))
{var inst_180213 = om.core.get_shared.call(null,self__.owner);var inst_180214 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_180213);var state_180249__$1 = state_180249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180249__$1,(4),inst_180214);
} else
{if((state_val_180250 === (11)))
{var inst_180216 = (state_180249[(8)]);var inst_180235 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_180216);var inst_180236 = (function (){var new_date = inst_180235;var ev = inst_180216;return ((function (new_date,ev,inst_180216,inst_180235,state_val_180250,c__17814__auto__,___$1){
return (function (p1__180139_SHARP_){return cljs.core.assoc.call(null,p1__180139_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),new_date);
});
;})(new_date,ev,inst_180216,inst_180235,state_val_180250,c__17814__auto__,___$1))
})();var inst_180237 = om.core.transact_BANG_.call(null,self__.app,inst_180236);var state_180249__$1 = state_180249;var statearr_180261_180284 = state_180249__$1;(statearr_180261_180284[(2)] = inst_180237);
(statearr_180261_180284[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (9)))
{var inst_180216 = (state_180249[(8)]);var inst_180232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_180216);var inst_180233 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),inst_180232);var state_180249__$1 = state_180249;if(inst_180233)
{var statearr_180262_180285 = state_180249__$1;(statearr_180262_180285[(1)] = (11));
} else
{var statearr_180263_180286 = state_180249__$1;(statearr_180263_180286[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (5)))
{var inst_180216 = (state_180249[(8)]);var inst_180221 = (function (){var ev = inst_180216;return ((function (ev,inst_180216,state_val_180250,c__17814__auto__,___$1){
return (function (p1__180137_SHARP_){return cljs.core.assoc.call(null,p1__180137_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_180216,state_val_180250,c__17814__auto__,___$1))
})();var inst_180222 = om.core.transact_BANG_.call(null,self__.app,inst_180221);var state_180249__$1 = state_180249;var statearr_180264_180287 = state_180249__$1;(statearr_180264_180287[(2)] = inst_180222);
(statearr_180264_180287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (10)))
{var inst_180242 = (state_180249[(2)]);var state_180249__$1 = state_180249;var statearr_180265_180288 = state_180249__$1;(statearr_180265_180288[(2)] = inst_180242);
(statearr_180265_180288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_180250 === (8)))
{var inst_180216 = (state_180249[(8)]);var inst_180227 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_180216);var inst_180228 = inst_180227.deleteRecord();var inst_180229 = (function (){var ev = inst_180216;return ((function (ev,inst_180216,inst_180227,inst_180228,state_val_180250,c__17814__auto__,___$1){
return (function (p1__180138_SHARP_){return cljs.core.assoc.call(null,p1__180138_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_180216,inst_180227,inst_180228,state_val_180250,c__17814__auto__,___$1))
})();var inst_180230 = om.core.transact_BANG_.call(null,self__.app,inst_180229);var state_180249__$1 = (function (){var statearr_180266 = state_180249;(statearr_180266[(10)] = inst_180228);
return statearr_180266;
})();var statearr_180267_180289 = state_180249__$1;(statearr_180267_180289[(2)] = inst_180230);
(statearr_180267_180289[(1)] = (10));
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
var state_machine__17800__auto____0 = (function (){var statearr_180271 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_180271[(0)] = state_machine__17800__auto__);
(statearr_180271[(1)] = (1));
return statearr_180271;
});
var state_machine__17800__auto____1 = (function (state_180249){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_180249);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e180272){if((e180272 instanceof Object))
{var ex__17803__auto__ = e180272;var statearr_180273_180290 = state_180249;(statearr_180273_180290[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180249);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e180272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__180291 = state_180249;
state_180249 = G__180291;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_180249){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_180249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_180274 = f__17815__auto__.call(null);(statearr_180274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_180274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t180208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_180210){var self__ = this;
var _180210__$1 = this;return self__.meta180209;
});
expenses.core.t180208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_180210,meta180209__$1){var self__ = this;
var _180210__$1 = this;return (new expenses.core.t180208(self__.owner,self__.app,self__.dispatch_component,meta180209__$1));
});
expenses.core.__GT_t180208 = (function __GT_t180208(owner__$1,app__$1,dispatch_component__$1,meta180209){return (new expenses.core.t180208(owner__$1,app__$1,dispatch_component__$1,meta180209));
});
}
return (new expenses.core.t180208(owner,app,dispatch_component,null));
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