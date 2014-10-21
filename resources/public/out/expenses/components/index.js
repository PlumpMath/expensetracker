// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.components.index');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
var ufv___19053 = schema.utils.use_fn_validation;var output_schema19041_19054 = schema.core.Any;var input_schema19042_19055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker19043_19056 = schema.core.checker.call(null,input_schema19042_19055);var output_checker19044_19057 = schema.core.checker.call(null,output_schema19041_19054);/**
* Inputs: [data owner]
*/
expenses.components.index.component = ((function (ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057){
return (function component(G__19045,G__19046){var validate__15081__auto__ = ufv___19053.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___19058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19045,G__19046], null);var temp__4126__auto___19059 = input_checker19043_19056.call(null,args__15082__auto___19058);if(cljs.core.truth_(temp__4126__auto___19059))
{var error__15083__auto___19060 = temp__4126__auto___19059;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15083__auto___19060)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19042_19055,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___19058,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___19060], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var data = G__19045;var owner = G__19046;while(true){
if(typeof expenses.components.index.t19050 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.index.t19050 = (function (owner,validate__15081__auto__,data,input_schema19042,output_checker19044,component,G__19045,output_schema19041,input_checker19043,G__19046,ufv__,meta19051){
this.owner = owner;
this.validate__15081__auto__ = validate__15081__auto__;
this.data = data;
this.input_schema19042 = input_schema19042;
this.output_checker19044 = output_checker19044;
this.component = component;
this.G__19045 = G__19045;
this.output_schema19041 = output_schema19041;
this.input_checker19043 = input_checker19043;
this.G__19046 = G__19046;
this.ufv__ = ufv__;
this.meta19051 = meta19051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.index.t19050.cljs$lang$type = true;
expenses.components.index.t19050.cljs$lang$ctorStr = "expenses.components.index/t19050";
expenses.components.index.t19050.cljs$lang$ctorPrWriter = ((function (validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057){
return (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"expenses.components.index/t19050");
});})(validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057))
;
expenses.components.index.t19050.prototype.om$core$IRender$ = true;
expenses.components.index.t19050.prototype.om$core$IRender$render$arity$1 = ((function (validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "yeah"},"index");
});})(validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057))
;
expenses.components.index.t19050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057){
return (function (_19052){var self__ = this;
var _19052__$1 = this;return self__.meta19051;
});})(validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057))
;
expenses.components.index.t19050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057){
return (function (_19052,meta19051__$1){var self__ = this;
var _19052__$1 = this;return (new expenses.components.index.t19050(self__.owner,self__.validate__15081__auto__,self__.data,self__.input_schema19042,self__.output_checker19044,self__.component,self__.G__19045,self__.output_schema19041,self__.input_checker19043,self__.G__19046,self__.ufv__,meta19051__$1));
});})(validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057))
;
expenses.components.index.__GT_t19050 = ((function (validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057){
return (function __GT_t19050(owner__$1,validate__15081__auto____$1,data__$1,input_schema19042__$1,output_checker19044__$1,component__$1,G__19045__$1,output_schema19041__$1,input_checker19043__$1,G__19046__$1,ufv____$1,meta19051){return (new expenses.components.index.t19050(owner__$1,validate__15081__auto____$1,data__$1,input_schema19042__$1,output_checker19044__$1,component__$1,G__19045__$1,output_schema19041__$1,input_checker19043__$1,G__19046__$1,ufv____$1,meta19051));
});})(validate__15081__auto__,ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057))
;
}
return (new expenses.components.index.t19050(owner,validate__15081__auto__,data,input_schema19042_19055,output_checker19044_19057,component,G__19045,output_schema19041_19054,input_checker19043_19056,G__19046,ufv___19053,null));
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___19061 = output_checker19044_19057.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___19061))
{var error__15083__auto___19062 = temp__4126__auto___19061;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15083__auto___19062)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19041_19054,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___19062], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___19053,output_schema19041_19054,input_schema19042_19055,input_checker19043_19056,output_checker19044_19057))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,expenses.components.index.component),schema.core.make_fn_schema.call(null,output_schema19041_19054,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19042_19055], null)));
expenses.components.index.__GT_component = (function() {
var __GT_component = null;
var __GT_component__1 = (function (cursor__16849__auto__){return om.core.build.call(null,expenses.components.index.component,cursor__16849__auto__);
});
var __GT_component__2 = (function (cursor__16849__auto__,m19040){return om.core.build.call(null,expenses.components.index.component,cursor__16849__auto__,m19040);
});
__GT_component = function(cursor__16849__auto__,m19040){
switch(arguments.length){
case 1:
return __GT_component__1.call(this,cursor__16849__auto__);
case 2:
return __GT_component__2.call(this,cursor__16849__auto__,m19040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_component.cljs$core$IFn$_invoke$arity$1 = __GT_component__1;
__GT_component.cljs$core$IFn$_invoke$arity$2 = __GT_component__2;
return __GT_component;
})()
;

//# sourceMappingURL=index.js.map