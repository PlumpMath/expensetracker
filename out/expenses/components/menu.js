// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.components.menu');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
expenses.components.menu.menu_component = (function menu_component(app,owner){if(typeof expenses.components.menu.t10124 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.menu.t10124 = (function (owner,app,menu_component,meta10125){
this.owner = owner;
this.app = app;
this.menu_component = menu_component;
this.meta10125 = meta10125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.menu.t10124.cljs$lang$type = true;
expenses.components.menu.t10124.cljs$lang$ctorStr = "expenses.components.menu/t10124";
expenses.components.menu.t10124.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.components.menu/t10124");
});
expenses.components.menu.t10124.prototype.om$core$IRender$ = true;
expenses.components.menu.t10124.prototype.om$core$IRender$render$arity$1 = (function (this__5138__auto__){var self__ = this;
var this__5138__auto____$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (this__5138__auto____$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,((function (this__5138__auto____$1){
return (function (a){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null),cljs.core.not);
});})(this__5138__auto____$1))
);
});})(this__5138__auto____$1))
, "className": "menu-link", "id": "menulink", "href": "#menu"},React.DOM.span(null)),React.DOM.div({"id": "menu"},React.DOM.div({"className": "pure-menu pure-menu-open"},React.DOM.a({"href": "#", "className": "pure-menu-heading"},"Expenses"),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (this__5138__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__5138__auto____$1){
return (function (p1__10118_SHARP_){return cljs.core.assoc.call(null,p1__10118_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(new Date()),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__5138__auto____$1))
);
});})(this__5138__auto____$1))
},"TOP")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__5138__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__5138__auto____$1){
return (function (p1__10119_SHARP_){return cljs.core.assoc.call(null,p1__10119_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__5138__auto____$1))
);
});})(this__5138__auto____$1))
},"ADD")),React.DOM.li(null,React.DOM.a({"onClick": ((function (this__5138__auto____$1){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.app,((function (this__5138__auto____$1){
return (function (p1__10120_SHARP_){return cljs.core.assoc.call(null,p1__10120_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
});})(this__5138__auto____$1))
);
});})(this__5138__auto____$1))
},"LIST"))))));
});
expenses.components.menu.t10124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10126){var self__ = this;
var _10126__$1 = this;return self__.meta10125;
});
expenses.components.menu.t10124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10126,meta10125__$1){var self__ = this;
var _10126__$1 = this;return (new expenses.components.menu.t10124(self__.owner,self__.app,self__.menu_component,meta10125__$1));
});
expenses.components.menu.__GT_t10124 = (function __GT_t10124(owner__$1,app__$1,menu_component__$1,meta10125){return (new expenses.components.menu.t10124(owner__$1,app__$1,menu_component__$1,meta10125));
});
}
return (new expenses.components.menu.t10124(owner,app,menu_component,null));
});

//# sourceMappingURL=menu.js.map