// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
goog.require('goog.net.XhrIo');
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
expenses.core.adj_date = (function adj_date(date,span,n){var G__100836 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__100836) {
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
expenses.core.menu_component = (function menu_component(app,owner){if(typeof expenses.core.t100843 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100843 = (function (owner,app,menu_component,meta100844){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta100844 = meta100844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100843.cljs$lang$type = true;
expenses.core.t100843.cljs$lang$ctorStr = "expenses.core/t100843";
expenses.core.t100843.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100843");
});
expenses.core.t100843.prototype.om$core$IRender$ = true;
expenses.core.t100843.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__100838_SHARP_){return cljs.core.assoc.call(null,p1__100838_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"top")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__14239__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__100839_SHARP_){return cljs.core.assoc.call(null,p1__100839_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"add"))))));
});
expenses.core.t100843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100845){var self__ = this;
var _100845__$1 = this;return self__.meta100844;
});
expenses.core.t100843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100845,meta100844__$1){var self__ = this;
var _100845__$1 = this;return (new expenses.core.t100843(self__.owner,self__.app,self__.menu_component,meta100844__$1));
});
expenses.core.__GT_t100843 = (function __GT_t100843(owner__$1,app__$1,menu_component__$1,meta100844){return (new expenses.core.t100843(owner__$1,app__$1,menu_component__$1,meta100844));
});
}
return (new expenses.core.t100843(owner,app,menu_component,null));
});
expenses.core.buttons_component = (function buttons_component(app,owner){if(typeof expenses.core.t100851 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100851 = (function (owner,app,buttons_component,meta100852){
this.owner = owner;
this.app = app;
this.buttons_component = buttons_component;
this.meta100852 = meta100852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100851.cljs$lang$type = true;
expenses.core.t100851.cljs$lang$ctorStr = "expenses.core/t100851";
expenses.core.t100851.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100851");
});
expenses.core.t100851.prototype.om$core$IRenderState$ = true;
expenses.core.t100851.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__100854){var self__ = this;
var map__100855 = p__100854;var map__100855__$1 = ((cljs.core.seq_QMARK_.call(null,map__100855))?cljs.core.apply.call(null,cljs.core.hash_map,map__100855):map__100855);var current_focus_date = cljs.core.get.call(null,map__100855__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__100855__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__100855__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;return React.DOM.div({"className": "pure-u-1 buttons"},React.DOM.div({"onClick": ((function (___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(-1))], null));
});})(___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 back"},"<"),React.DOM.div({"onClick": ((function (___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),(new Date())], null));
});})(___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-2-3"},goog.string.format("%02d-%02d-%d",current_focus_date.getDate(),(current_focus_date.getMonth() + (1)),current_focus_date.getFullYear())),React.DOM.div({"onClick": ((function (___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,focus_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),expenses.core.adj_date.call(null,current_focus_date,new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(current_focus),(1))], null));
});})(___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1-6 forward"},">"),React.DOM.div({"onClick": ((function (___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan){
return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739));
});})(___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan))
);
});})(___$1,map__100855,map__100855__$1,current_focus_date,current_focus,focus_chan))
, "className": "pure-u-1"},"Add"));
});
expenses.core.t100851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100853){var self__ = this;
var _100853__$1 = this;return self__.meta100852;
});
expenses.core.t100851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100853,meta100852__$1){var self__ = this;
var _100853__$1 = this;return (new expenses.core.t100851(self__.owner,self__.app,self__.buttons_component,meta100852__$1));
});
expenses.core.__GT_t100851 = (function __GT_t100851(owner__$1,app__$1,buttons_component__$1,meta100852){return (new expenses.core.t100851(owner__$1,app__$1,buttons_component__$1,meta100852));
});
}
return (new expenses.core.t100851(owner,app,buttons_component,null));
});
expenses.core.total_component = (function total_component(items,owner){if(typeof expenses.core.t100860 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100860 = (function (owner,items,total_component,meta100861){
this.owner = owner;
this.items = items;
this.total_component = total_component;
this.meta100861 = meta100861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100860.cljs$lang$type = true;
expenses.core.t100860.cljs$lang$ctorStr = "expenses.core/t100860";
expenses.core.t100860.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100860");
});
expenses.core.t100860.prototype.om$core$IRender$ = true;
expenses.core.t100860.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h2(null,("Total: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__100856_SHARP_){return p1__100856_SHARP_.get("amount");
});})(___$1))
,self__.items)))+"\u5186")));
});
expenses.core.t100860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100862){var self__ = this;
var _100862__$1 = this;return self__.meta100861;
});
expenses.core.t100860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100862,meta100861__$1){var self__ = this;
var _100862__$1 = this;return (new expenses.core.t100860(self__.owner,self__.items,self__.total_component,meta100861__$1));
});
expenses.core.__GT_t100860 = (function __GT_t100860(owner__$1,items__$1,total_component__$1,meta100861){return (new expenses.core.t100860(owner__$1,items__$1,total_component__$1,meta100861));
});
}
return (new expenses.core.t100860(owner,items,total_component,null));
});
expenses.core.string_to_color = (function string_to_color(s){var seed = ((6) * cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__100863_SHARP_){return p1__100863_SHARP_.charCodeAt((0));
}),s)));var s_hex = cljs.core.mod.call(null,seed,(16777215)).toString((16));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,((6) - cljs.core.count.call(null,s_hex)),cljs.core.repeat.call(null,"0"))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_hex));
});
expenses.core.expense_list_item = (function expense_list_item(item,owner){if(typeof expenses.core.t100867 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100867 = (function (owner,item,expense_list_item,meta100868){
this.owner = owner;
this.item = item;
this.expense_list_item = expense_list_item;
this.meta100868 = meta100868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100867.cljs$lang$type = true;
expenses.core.t100867.cljs$lang$ctorStr = "expenses.core/t100867";
expenses.core.t100867.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100867");
});
expenses.core.t100867.prototype.om$core$IRender$ = true;
expenses.core.t100867.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li({"className": "pure-g"},React.DOM.div({"className": "pure-u-1"},React.DOM.span({"className": "time"},goog.string.format("%02d:%02d",self__.item.get("date").getHours(),self__.item.get("date").getMinutes())),React.DOM.span({"className": "date"},goog.string.format("%02d-%02d-%d",self__.item.get("date").getDate(),(self__.item.get("date").getMonth() + (1)),self__.item.get("date").getFullYear())),React.DOM.span({"style": {"backgroundColor": expenses.core.string_to_color.call(null,self__.item.get("category"))}, "className": "category-button"},self__.item.get("category")),React.DOM.h3({"className": "amount"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.item.get("amount"))+"\u5186"))),React.DOM.div({"className": "pure-u-1 note"},self__.item.get("note")));
});
expenses.core.t100867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100869){var self__ = this;
var _100869__$1 = this;return self__.meta100868;
});
expenses.core.t100867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100869,meta100868__$1){var self__ = this;
var _100869__$1 = this;return (new expenses.core.t100867(self__.owner,self__.item,self__.expense_list_item,meta100868__$1));
});
expenses.core.__GT_t100867 = (function __GT_t100867(owner__$1,item__$1,expense_list_item__$1,meta100868){return (new expenses.core.t100867(owner__$1,item__$1,expense_list_item__$1,meta100868));
});
}
return (new expenses.core.t100867(owner,item,expense_list_item,null));
});
expenses.core.expense_list_component = (function expense_list_component(items,owner){if(typeof expenses.core.t100873 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100873 = (function (owner,items,expense_list_component,meta100874){
this.owner = owner;
this.items = items;
this.expense_list_component = expense_list_component;
this.meta100874 = meta100874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100873.cljs$lang$type = true;
expenses.core.t100873.cljs$lang$ctorStr = "expenses.core/t100873";
expenses.core.t100873.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100873");
});
expenses.core.t100873.prototype.om$core$IRender$ = true;
expenses.core.t100873.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-u-1 expense-list"},om.core.build_all.call(null,expenses.core.expense_list_item,self__.items)));
});
expenses.core.t100873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100875){var self__ = this;
var _100875__$1 = this;return self__.meta100874;
});
expenses.core.t100873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100875,meta100874__$1){var self__ = this;
var _100875__$1 = this;return (new expenses.core.t100873(self__.owner,self__.items,self__.expense_list_component,meta100874__$1));
});
expenses.core.__GT_t100873 = (function __GT_t100873(owner__$1,items__$1,expense_list_component__$1,meta100874){return (new expenses.core.t100873(owner__$1,items__$1,expense_list_component__$1,meta100874));
});
}
return (new expenses.core.t100873(owner,items,expense_list_component,null));
});
expenses.core.filter_items = (function filter_items(p__100877,f_date,items){var map__100882 = p__100877;var map__100882__$1 = ((cljs.core.seq_QMARK_.call(null,map__100882))?cljs.core.apply.call(null,cljs.core.hash_map,map__100882):map__100882);var category = cljs.core.get.call(null,map__100882__$1,new cljs.core.Keyword(null,"category","category",-593092832));var span = cljs.core.get.call(null,map__100882__$1,new cljs.core.Keyword(null,"span","span",1394872991));cljs.core.print.call(null,items);
return cljs.core.filter.call(null,((function (map__100882,map__100882__$1,category,span){
return (function (p1__100876_SHARP_){var and__11373__auto__ = (function (){var G__100884 = (((span instanceof cljs.core.Keyword))?span.fqn:null);switch (G__100884) {
case "year":
return cljs.core._EQ_.call(null,f_date.getYear(),p1__100876_SHARP_.get("date").getYear());

break;
case "month":
return cljs.core._EQ_.call(null,f_date.getMonth(),p1__100876_SHARP_.get("date").getMonth());

break;
case "day":
return cljs.core._EQ_.call(null,f_date.getDate(),p1__100876_SHARP_.get("date").getDate());

break;
default:
return true;

}
})();if(cljs.core.truth_(and__11373__auto__))
{var G__100885 = category;if(cljs.core._EQ_.call(null,null,G__100885))
{return true;
} else
{return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__100876_SHARP_));

}
} else
{return and__11373__auto__;
}
});})(map__100882,map__100882__$1,category,span))
,items);
});
expenses.core.main_component = (function main_component(app,owner){if(typeof expenses.core.t100914 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100914 = (function (owner,app,main_component,meta100915){
this.owner = owner;
this.app = app;
this.main_component = main_component;
this.meta100915 = meta100915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100914.cljs$lang$type = true;
expenses.core.t100914.cljs$lang$ctorStr = "expenses.core/t100914";
expenses.core.t100914.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100914");
});
expenses.core.t100914.prototype.om$core$IRenderState$ = true;
expenses.core.t100914.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__100917){var self__ = this;
var map__100918 = p__100917;var map__100918__$1 = ((cljs.core.seq_QMARK_.call(null,map__100918))?cljs.core.apply.call(null,cljs.core.hash_map,map__100918):map__100918);var current_focus_date = cljs.core.get.call(null,map__100918__$1,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208));var current_focus = cljs.core.get.call(null,map__100918__$1,new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040));var focus_chan = cljs.core.get.call(null,map__100918__$1,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234));var ___$1 = this;var current_items = cljs.core.sort_by.call(null,((function (___$1,map__100918,map__100918__$1,current_focus_date,current_focus,focus_chan){
return (function (item){return (- item.get("date").getTime());
});})(___$1,map__100918,map__100918__$1,current_focus_date,current_focus,focus_chan))
,expenses.core.filter_items.call(null,current_focus,current_focus_date,self__.app.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799))));return React.DOM.div({"className": "pure-g"},om.core.build.call(null,expenses.core.buttons_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),current_focus,new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),current_focus_date], null)], null)),om.core.build.call(null,expenses.core.total_component,current_items),om.core.build.call(null,expenses.core.expense_list_component,current_items));
});
expenses.core.t100914.prototype.om$core$IInitState$ = true;
expenses.core.t100914.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_chan = cljs.core.async.chan.call(null);var now = (new Date());var c__17814__auto___100940 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___100940,focus_chan,now,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___100940,focus_chan,now,___$1){
return (function (state_100928){var state_val_100929 = (state_100928[(1)]);if((state_val_100929 === (4)))
{var inst_100921 = (state_100928[(2)]);var inst_100922 = (function (){var new_focus = inst_100921;return ((function (new_focus,inst_100921,state_val_100929,c__17814__auto___100940,focus_chan,now,___$1){
return (function (p1__100887_SHARP_){return cljs.core.merge.call(null,p1__100887_SHARP_,new_focus);
});
;})(new_focus,inst_100921,state_val_100929,c__17814__auto___100940,focus_chan,now,___$1))
})();var inst_100923 = om.core.update_state_BANG_.call(null,self__.owner,inst_100922);var state_100928__$1 = (function (){var statearr_100930 = state_100928;(statearr_100930[(7)] = inst_100923);
return statearr_100930;
})();var statearr_100931_100941 = state_100928__$1;(statearr_100931_100941[(2)] = null);
(statearr_100931_100941[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_100929 === (3)))
{var inst_100926 = (state_100928[(2)]);var state_100928__$1 = state_100928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100928__$1,inst_100926);
} else
{if((state_val_100929 === (2)))
{var state_100928__$1 = state_100928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100928__$1,(4),focus_chan);
} else
{if((state_val_100929 === (1)))
{var state_100928__$1 = state_100928;var statearr_100932_100942 = state_100928__$1;(statearr_100932_100942[(2)] = null);
(statearr_100932_100942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17814__auto___100940,focus_chan,now,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___100940,focus_chan,now,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_100936 = [null,null,null,null,null,null,null,null];(statearr_100936[(0)] = state_machine__17800__auto__);
(statearr_100936[(1)] = (1));
return statearr_100936;
});
var state_machine__17800__auto____1 = (function (state_100928){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_100928);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e100937){if((e100937 instanceof Object))
{var ex__17803__auto__ = e100937;var statearr_100938_100943 = state_100928;(statearr_100938_100943[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e100937;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__100944 = state_100928;
state_100928 = G__100944;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_100928){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_100928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___100940,focus_chan,now,___$1))
})();var state__17816__auto__ = (function (){var statearr_100939 = f__17815__auto__.call(null);(statearr_100939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___100940);
return statearr_100939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___100940,focus_chan,now,___$1))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-focus","current-focus",-1290960040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"category","category",-593092832),null], null),new cljs.core.Keyword(null,"current-focus-date","current-focus-date",-1789592208),now,new cljs.core.Keyword(null,"focus-chan","focus-chan",1280239234),focus_chan], null);
});
expenses.core.t100914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100916){var self__ = this;
var _100916__$1 = this;return self__.meta100915;
});
expenses.core.t100914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100916,meta100915__$1){var self__ = this;
var _100916__$1 = this;return (new expenses.core.t100914(self__.owner,self__.app,self__.main_component,meta100915__$1));
});
expenses.core.__GT_t100914 = (function __GT_t100914(owner__$1,app__$1,main_component__$1,meta100915){return (new expenses.core.t100914(owner__$1,app__$1,main_component__$1,meta100915));
});
}
return (new expenses.core.t100914(owner,app,main_component,null));
});
expenses.core.category_select = (function category_select(app,owner){if(typeof expenses.core.t100954 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100954 = (function (owner,app,category_select,meta100955){
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta100955 = meta100955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100954.cljs$lang$type = true;
expenses.core.t100954.cljs$lang$ctorStr = "expenses.core/t100954";
expenses.core.t100954.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100954");
});
expenses.core.t100954.prototype.om$core$IRenderState$ = true;
expenses.core.t100954.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "pure-u-1"},React.DOM.h3({"className": "pure-u-1"},"NEW"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "category-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
var v = om.core.get_node.call(null,self__.owner,"category-input").value;if(!(cljs.core.empty_QMARK_.call(null,v)))
{return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),v], null));
} else
{return null;
}
});})(___$1))
, "value": "OK", "className": "pure-input-1 pure-button pure-button-primary", "type": "submit"}))),(function (){var categories = cljs.core.map.call(null,((function (___$1){
return (function (p1__100945_SHARP_){return p1__100945_SHARP_.get("category");
});})(___$1))
,new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(self__.app));if(cljs.core.truth_(cljs.core.not_empty.call(null,categories)))
{React.DOM.h3({"className": "pure-u-1"},"PREVIOUS");
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},om.core.build_all.call(null,((function (categories,___$1){
return (function (p1__100946_SHARP_){if(typeof expenses.core.t100957 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100957 = (function (p1__100946_SHARP_,categories,state,_,meta100955,owner,app,category_select,meta100958){
this.p1__100946_SHARP_ = p1__100946_SHARP_;
this.categories = categories;
this.state = state;
this._ = _;
this.meta100955 = meta100955;
this.owner = owner;
this.app = app;
this.category_select = category_select;
this.meta100958 = meta100958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100957.cljs$lang$type = true;
expenses.core.t100957.cljs$lang$ctorStr = "expenses.core/t100957";
expenses.core.t100957.cljs$lang$ctorPrWriter = ((function (categories,___$1){
return (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100957");
});})(categories,___$1))
;
expenses.core.t100957.prototype.om$core$IRender$ = true;
expenses.core.t100957.prototype.om$core$IRender$render$arity$1 = ((function (categories,___$1){
return (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14239__auto____$1,categories,___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),self__.p1__100946_SHARP_], null));
});})(this__14239__auto____$1,categories,___$1))
, "className": "category-box pure-u-1-3"},self__.p1__100946_SHARP_.toUpperCase());
});})(categories,___$1))
;
expenses.core.t100957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (categories,___$1){
return (function (_100959){var self__ = this;
var _100959__$1 = this;return self__.meta100958;
});})(categories,___$1))
;
expenses.core.t100957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (categories,___$1){
return (function (_100959,meta100958__$1){var self__ = this;
var _100959__$1 = this;return (new expenses.core.t100957(self__.p1__100946_SHARP_,self__.categories,self__.state,self__._,self__.meta100955,self__.owner,self__.app,self__.category_select,meta100958__$1));
});})(categories,___$1))
;
expenses.core.__GT_t100957 = ((function (categories,___$1){
return (function __GT_t100957(p1__100946_SHARP___$1,categories__$1,state__$1,___$2,meta100955__$1,owner__$2,app__$2,category_select__$2,meta100958){return (new expenses.core.t100957(p1__100946_SHARP___$1,categories__$1,state__$1,___$2,meta100955__$1,owner__$2,app__$2,category_select__$2,meta100958));
});})(categories,___$1))
;
}
return (new expenses.core.t100957(p1__100946_SHARP_,categories,state,___$1,self__.meta100955,self__.owner,self__.app,self__.category_select,null));
});})(categories,___$1))
,categories));
} else
{return null;
}
})(),React.DOM.div({"className": "pure-form wrapper cancel"},om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__100947_SHARP_){return cljs.core.assoc.call(null,p1__100947_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t100954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100956){var self__ = this;
var _100956__$1 = this;return self__.meta100955;
});
expenses.core.t100954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100956,meta100955__$1){var self__ = this;
var _100956__$1 = this;return (new expenses.core.t100954(self__.owner,self__.app,self__.category_select,meta100955__$1));
});
expenses.core.__GT_t100954 = (function __GT_t100954(owner__$1,app__$1,category_select__$1,meta100955){return (new expenses.core.t100954(owner__$1,app__$1,category_select__$1,meta100955));
});
}
return (new expenses.core.t100954(owner,app,category_select,null));
});
expenses.core.amount_enter = (function amount_enter(app,owner){if(typeof expenses.core.t100964 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100964 = (function (owner,app,amount_enter,meta100965){
this.owner = owner;
this.app = app;
this.amount_enter = amount_enter;
this.meta100965 = meta100965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100964.cljs$lang$type = true;
expenses.core.t100964.cljs$lang$ctorStr = "expenses.core/t100964";
expenses.core.t100964.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100964");
});
expenses.core.t100964.prototype.om$core$IRenderState$ = true;
expenses.core.t100964.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),React.DOM.h4({"className": "pure-u-1"},new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state).toUpperCase()),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "number", "ref": "amount-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
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
return (function (p1__100960_SHARP_){return cljs.core.assoc.call(null,p1__100960_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t100964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100966){var self__ = this;
var _100966__$1 = this;return self__.meta100965;
});
expenses.core.t100964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100966,meta100965__$1){var self__ = this;
var _100966__$1 = this;return (new expenses.core.t100964(self__.owner,self__.app,self__.amount_enter,meta100965__$1));
});
expenses.core.__GT_t100964 = (function __GT_t100964(owner__$1,app__$1,amount_enter__$1,meta100965){return (new expenses.core.t100964(owner__$1,app__$1,amount_enter__$1,meta100965));
});
}
return (new expenses.core.t100964(owner,app,amount_enter,null));
});
expenses.core.note_enter = (function note_enter(app,owner){if(typeof expenses.core.t100971 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t100971 = (function (owner,app,note_enter,meta100972){
this.owner = owner;
this.app = app;
this.note_enter = note_enter;
this.meta100972 = meta100972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t100971.cljs$lang$type = true;
expenses.core.t100971.cljs$lang$ctorStr = "expenses.core/t100971";
expenses.core.t100971.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t100971");
});
expenses.core.t100971.prototype.om$core$IRenderState$ = true;
expenses.core.t100971.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"className": "pure-u-1"},"CATEGORY"),React.DOM.h4({"className": "pure-u-1"},new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(state).toUpperCase()),React.DOM.h3({"className": "pure-u-1"},"AMOUNT"),React.DOM.h4({"className": "pure-u-1"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(state))+"\u5186")),React.DOM.h3({"className": "pure-u-1"},"NOTE"),React.DOM.form({"className": "pure-form pure-g"},React.DOM.div({"className": "pure-u-3-4 wrapper"},om.dom.input.call(null,{"className": "pure-input-1", "type": "text", "ref": "note-input"})),React.DOM.div({"className": "pure-u-1-4 wrapper"},om.dom.input.call(null,{"onClick": ((function (___$1){
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
return (function (p1__100967_SHARP_){return cljs.core.assoc.call(null,p1__100967_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
, "value": "CANCEL", "className": "pure-input-1 pure-button pure-button-danger", "type": "submit"})));
});
expenses.core.t100971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100973){var self__ = this;
var _100973__$1 = this;return self__.meta100972;
});
expenses.core.t100971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100973,meta100972__$1){var self__ = this;
var _100973__$1 = this;return (new expenses.core.t100971(self__.owner,self__.app,self__.note_enter,meta100972__$1));
});
expenses.core.__GT_t100971 = (function __GT_t100971(owner__$1,app__$1,note_enter__$1,meta100972){return (new expenses.core.t100971(owner__$1,app__$1,note_enter__$1,meta100972));
});
}
return (new expenses.core.t100971(owner,app,note_enter,null));
});
expenses.core.add_component = (function add_component(app,owner){if(typeof expenses.core.t101056 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t101056 = (function (owner,app,add_component,meta101057){
this.owner = owner;
this.app = app;
this.add_component = add_component;
this.meta101057 = meta101057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t101056.cljs$lang$type = true;
expenses.core.t101056.cljs$lang$ctorStr = "expenses.core/t101056";
expenses.core.t101056.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t101056");
});
expenses.core.t101056.prototype.om$core$IRenderState$ = true;
expenses.core.t101056.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.core.build.call(null,(function (){var G__101059 = (((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state).fqn:null);switch (G__101059) {
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
expenses.core.t101056.prototype.om$core$IInitState$ = true;
expenses.core.t101056.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var add_chan = cljs.core.async.chan.call(null);var c__17814__auto___101135 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto___101135,add_chan,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto___101135,add_chan,___$1){
return (function (state_101104){var state_val_101105 = (state_101104[(1)]);if((state_val_101105 === (7)))
{var inst_101099 = (state_101104[(2)]);var state_101104__$1 = (function (){var statearr_101106 = state_101104;(statearr_101106[(7)] = inst_101099);
return statearr_101106;
})();var statearr_101107_101136 = state_101104__$1;(statearr_101107_101136[(2)] = null);
(statearr_101107_101136[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (1)))
{var state_101104__$1 = state_101104;var statearr_101108_101137 = state_101104__$1;(statearr_101108_101137[(2)] = null);
(statearr_101108_101137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (4)))
{var inst_101062 = (state_101104[(8)]);var inst_101062__$1 = (state_101104[(2)]);var inst_101063 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(inst_101062__$1);var state_101104__$1 = (function (){var statearr_101109 = state_101104;(statearr_101109[(8)] = inst_101062__$1);
return statearr_101109;
})();if(cljs.core.truth_(inst_101063))
{var statearr_101110_101138 = state_101104__$1;(statearr_101110_101138[(1)] = (5));
} else
{var statearr_101111_101139 = state_101104__$1;(statearr_101111_101139[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (15)))
{var state_101104__$1 = state_101104;var statearr_101112_101140 = state_101104__$1;(statearr_101112_101140[(2)] = null);
(statearr_101112_101140[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (13)))
{var inst_101095 = (state_101104[(2)]);var state_101104__$1 = state_101104;var statearr_101113_101141 = state_101104__$1;(statearr_101113_101141[(2)] = inst_101095);
(statearr_101113_101141[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (6)))
{var inst_101062 = (state_101104[(8)]);var inst_101068 = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inst_101062);var state_101104__$1 = state_101104;if(cljs.core.truth_(inst_101068))
{var statearr_101114_101142 = state_101104__$1;(statearr_101114_101142[(1)] = (8));
} else
{var statearr_101115_101143 = state_101104__$1;(statearr_101115_101143[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (3)))
{var inst_101102 = (state_101104[(2)]);var state_101104__$1 = state_101104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101104__$1,inst_101102);
} else
{if((state_val_101105 === (12)))
{var state_101104__$1 = state_101104;var statearr_101116_101144 = state_101104__$1;(statearr_101116_101144[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (2)))
{var state_101104__$1 = state_101104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101104__$1,(4),add_chan);
} else
{if((state_val_101105 === (11)))
{var inst_101062 = (state_101104[(8)]);var inst_101075 = [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"note","note",1426297904)];var inst_101076 = (new Date());var inst_101077 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"category","category",-593092832));var inst_101078 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"amount","amount",364489504));var inst_101079 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_101062);var inst_101080 = [inst_101076,inst_101077,inst_101078,inst_101079];var inst_101081 = cljs.core.PersistentHashMap.fromArrays(inst_101075,inst_101080);var inst_101082 = om.core.get_shared.call(null,self__.owner);var inst_101083 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(inst_101082);var inst_101084 = expenses.core.put_expense.call(null,inst_101083,inst_101081);var inst_101085 = (function (){var new_expense = inst_101081;var v = inst_101062;return ((function (new_expense,v,inst_101062,inst_101075,inst_101076,inst_101077,inst_101078,inst_101079,inst_101080,inst_101081,inst_101082,inst_101083,inst_101084,state_val_101105,c__17814__auto___101135,add_chan,___$1){
return (function (p1__100976_SHARP_){return cljs.core.assoc.call(null,p1__100976_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(new_expense,v,inst_101062,inst_101075,inst_101076,inst_101077,inst_101078,inst_101079,inst_101080,inst_101081,inst_101082,inst_101083,inst_101084,state_val_101105,c__17814__auto___101135,add_chan,___$1))
})();var inst_101086 = om.core.transact_BANG_.call(null,self__.app,inst_101085);var state_101104__$1 = (function (){var statearr_101118 = state_101104;(statearr_101118[(9)] = inst_101084);
return statearr_101118;
})();var statearr_101119_101145 = state_101104__$1;(statearr_101119_101145[(2)] = inst_101086);
(statearr_101119_101145[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (9)))
{var inst_101062 = (state_101104[(8)]);var inst_101073 = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(inst_101062);var state_101104__$1 = state_101104;if(cljs.core.truth_(inst_101073))
{var statearr_101120_101146 = state_101104__$1;(statearr_101120_101146[(1)] = (11));
} else
{var statearr_101121_101147 = state_101104__$1;(statearr_101121_101147[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (5)))
{var inst_101062 = (state_101104[(8)]);var inst_101065 = (function (){var v = inst_101062;return ((function (v,inst_101062,state_val_101105,c__17814__auto___101135,add_chan,___$1){
return (function (p1__100974_SHARP_){return cljs.core.assoc.call(null,p1__100974_SHARP_,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"amount","amount",364489504));
});
;})(v,inst_101062,state_val_101105,c__17814__auto___101135,add_chan,___$1))
})();var inst_101066 = om.core.update_state_BANG_.call(null,self__.owner,inst_101065);var state_101104__$1 = state_101104;var statearr_101122_101148 = state_101104__$1;(statearr_101122_101148[(2)] = inst_101066);
(statearr_101122_101148[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (14)))
{var inst_101062 = (state_101104[(8)]);var inst_101089 = (function (){var v = inst_101062;return ((function (v,inst_101062,state_val_101105,c__17814__auto___101135,add_chan,___$1){
return (function (p1__100977_SHARP_){return cljs.core.assoc.call(null,p1__100977_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});
;})(v,inst_101062,state_val_101105,c__17814__auto___101135,add_chan,___$1))
})();var inst_101090 = om.core.transact_BANG_.call(null,self__.app,inst_101089);var state_101104__$1 = state_101104;var statearr_101123_101149 = state_101104__$1;(statearr_101123_101149[(2)] = inst_101090);
(statearr_101123_101149[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (16)))
{var inst_101093 = (state_101104[(2)]);var state_101104__$1 = state_101104;var statearr_101124_101150 = state_101104__$1;(statearr_101124_101150[(2)] = inst_101093);
(statearr_101124_101150[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (10)))
{var inst_101097 = (state_101104[(2)]);var state_101104__$1 = state_101104;var statearr_101125_101151 = state_101104__$1;(statearr_101125_101151[(2)] = inst_101097);
(statearr_101125_101151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_101105 === (8)))
{var inst_101062 = (state_101104[(8)]);var inst_101070 = (function (){var v = inst_101062;return ((function (v,inst_101062,state_val_101105,c__17814__auto___101135,add_chan,___$1){
return (function (p1__100975_SHARP_){return cljs.core.assoc.call(null,p1__100975_SHARP_,new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(v),(10)),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"note","note",1426297904));
});
;})(v,inst_101062,state_val_101105,c__17814__auto___101135,add_chan,___$1))
})();var inst_101071 = om.core.update_state_BANG_.call(null,self__.owner,inst_101070);var state_101104__$1 = state_101104;var statearr_101126_101152 = state_101104__$1;(statearr_101126_101152[(2)] = inst_101071);
(statearr_101126_101152[(1)] = (10));
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
});})(c__17814__auto___101135,add_chan,___$1))
;return ((function (switch__17799__auto__,c__17814__auto___101135,add_chan,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_101130 = [null,null,null,null,null,null,null,null,null,null];(statearr_101130[(0)] = state_machine__17800__auto__);
(statearr_101130[(1)] = (1));
return statearr_101130;
});
var state_machine__17800__auto____1 = (function (state_101104){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_101104);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e101131){if((e101131 instanceof Object))
{var ex__17803__auto__ = e101131;var statearr_101132_101153 = state_101104;(statearr_101132_101153[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e101131;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__101154 = state_101104;
state_101104 = G__101154;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_101104){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_101104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto___101135,add_chan,___$1))
})();var state__17816__auto__ = (function (){var statearr_101133 = f__17815__auto__.call(null);(statearr_101133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto___101135);
return statearr_101133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto___101135,add_chan,___$1))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),add_chan,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"category","category",-593092832)], null);
});
expenses.core.t101056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101058){var self__ = this;
var _101058__$1 = this;return self__.meta101057;
});
expenses.core.t101056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101058,meta101057__$1){var self__ = this;
var _101058__$1 = this;return (new expenses.core.t101056(self__.owner,self__.app,self__.add_component,meta101057__$1));
});
expenses.core.__GT_t101056 = (function __GT_t101056(owner__$1,app__$1,add_component__$1,meta101057){return (new expenses.core.t101056(owner__$1,app__$1,add_component__$1,meta101057));
});
}
return (new expenses.core.t101056(owner,app,add_component,null));
});
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t101158 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t101158 = (function (owner,app,error_component,meta101159){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta101159 = meta101159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t101158.cljs$lang$type = true;
expenses.core.t101158.cljs$lang$ctorStr = "expenses.core/t101158";
expenses.core.t101158.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t101158");
});
expenses.core.t101158.prototype.om$core$IRender$ = true;
expenses.core.t101158.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t101158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101160){var self__ = this;
var _101160__$1 = this;return self__.meta101159;
});
expenses.core.t101158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101160,meta101159__$1){var self__ = this;
var _101160__$1 = this;return (new expenses.core.t101158(self__.owner,self__.app,self__.error_component,meta101159__$1));
});
expenses.core.__GT_t101158 = (function __GT_t101158(owner__$1,app__$1,error_component__$1,meta101159){return (new expenses.core.t101158(owner__$1,app__$1,error_component__$1,meta101159));
});
}
return (new expenses.core.t101158(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__101161_SHARP_){return cljs.core.assoc.call(null,p1__101161_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.core.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t101176 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t101176 = (function (owner,app,loading,meta101177){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta101177 = meta101177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t101176.cljs$lang$type = true;
expenses.core.t101176.cljs$lang$ctorStr = "expenses.core/t101176";
expenses.core.t101176.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t101176");
});
expenses.core.t101176.prototype.om$core$IRender$ = true;
expenses.core.t101176.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t101176.prototype.om$core$IWillMount$ = true;
expenses.core.t101176.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__17814__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17814__auto__,___$1){
return (function (){var f__17815__auto__ = (function (){var switch__17799__auto__ = ((function (c__17814__auto__,___$1){
return (function (state_101181){var state_val_101182 = (state_101181[(1)]);if((state_val_101182 === (1)))
{var inst_101179 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_101181__$1 = state_101181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101181__$1,inst_101179);
} else
{return null;
}
});})(c__17814__auto__,___$1))
;return ((function (switch__17799__auto__,c__17814__auto__,___$1){
return (function() {
var state_machine__17800__auto__ = null;
var state_machine__17800__auto____0 = (function (){var statearr_101186 = [null,null,null,null,null,null,null];(statearr_101186[(0)] = state_machine__17800__auto__);
(statearr_101186[(1)] = (1));
return statearr_101186;
});
var state_machine__17800__auto____1 = (function (state_101181){while(true){
var ret_value__17801__auto__ = (function (){try{while(true){
var result__17802__auto__ = switch__17799__auto__.call(null,state_101181);if(cljs.core.keyword_identical_QMARK_.call(null,result__17802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17802__auto__;
}
break;
}
}catch (e101187){if((e101187 instanceof Object))
{var ex__17803__auto__ = e101187;var statearr_101188_101190 = state_101181;(statearr_101188_101190[(5)] = ex__17803__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e101187;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__101191 = state_101181;
state_101181 = G__101191;
continue;
}
} else
{return ret_value__17801__auto__;
}
break;
}
});
state_machine__17800__auto__ = function(state_101181){
switch(arguments.length){
case 0:
return state_machine__17800__auto____0.call(this);
case 1:
return state_machine__17800__auto____1.call(this,state_101181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17800__auto____0;
state_machine__17800__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17800__auto____1;
return state_machine__17800__auto__;
})()
;})(switch__17799__auto__,c__17814__auto__,___$1))
})();var state__17816__auto__ = (function (){var statearr_101189 = f__17815__auto__.call(null);(statearr_101189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17814__auto__);
return statearr_101189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17816__auto__);
});})(c__17814__auto__,___$1))
);
return c__17814__auto__;
});
expenses.core.t101176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101178){var self__ = this;
var _101178__$1 = this;return self__.meta101177;
});
expenses.core.t101176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101178,meta101177__$1){var self__ = this;
var _101178__$1 = this;return (new expenses.core.t101176(self__.owner,self__.app,self__.loading,meta101177__$1));
});
expenses.core.__GT_t101176 = (function __GT_t101176(owner__$1,app__$1,loading__$1,meta101177){return (new expenses.core.t101176(owner__$1,app__$1,loading__$1,meta101177));
});
}
return (new expenses.core.t101176(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t101197 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t101197 = (function (owner,app,dispatch_component,meta101198){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta101198 = meta101198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t101197.cljs$lang$type = true;
expenses.core.t101197.cljs$lang$ctorStr = "expenses.core/t101197";
expenses.core.t101197.cljs$lang$ctorPrWriter = (function (this__11952__auto__,writer__11953__auto__,opt__11954__auto__){return cljs.core._write.call(null,writer__11953__auto__,"expenses.core/t101197");
});
expenses.core.t101197.prototype.om$core$IRender$ = true;
expenses.core.t101197.prototype.om$core$IRender$render$arity$1 = (function (this__14239__auto__){var self__ = this;
var this__14239__auto____$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.core.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (this__14239__auto____$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (this__14239__auto____$1){
return (function (p1__101192_SHARP_){return cljs.core.assoc.call(null,p1__101192_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(this__14239__auto____$1))
);
});})(this__14239__auto____$1))
},"expenses")),om.core.build.call(null,(function (){var G__101200 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__101200) {
case "error":
return expenses.core.error_component;

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
expenses.core.t101197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101199){var self__ = this;
var _101199__$1 = this;return self__.meta101198;
});
expenses.core.t101197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101199,meta101198__$1){var self__ = this;
var _101199__$1 = this;return (new expenses.core.t101197(self__.owner,self__.app,self__.dispatch_component,meta101198__$1));
});
expenses.core.__GT_t101197 = (function __GT_t101197(owner__$1,app__$1,dispatch_component__$1,meta101198){return (new expenses.core.t101197(owner__$1,app__$1,dispatch_component__$1,meta101198));
});
}
return (new expenses.core.t101197(owner,app,dispatch_component,null));
});
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
expenses.core.main = (function main(auth_err){var target = document.getElementById("layout");if(cljs.core.truth_(auth_err))
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),auth_err,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else
{var ds_manager = expenses.core.db_client.getDatastoreManager();return ds_manager.openDefaultDatastore(((function (ds_manager,target){
return (function (ds_err,ds){if(cljs.core.truth_(ds_err))
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),ds_err,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table","table",-564943036),ds.getTable("expenses")], null)], null));
}
});})(ds_manager,target))
);
}
});
expenses.core.db_cred = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"l66k7gnikqojlup"], null));
expenses.core.db_client = (new Dropbox.Client(expenses.core.db_cred));
expenses.core.db_client.authenticate(null,expenses.core.main);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));

//# sourceMappingURL=core.js.map