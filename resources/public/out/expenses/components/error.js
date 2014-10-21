// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.components.error');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
var ufv___19076 = schema.utils.use_fn_validation;var output_schema19064_19077 = schema.core.Any;var input_schema19065_19078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker19066_19079 = schema.core.checker.call(null,input_schema19065_19078);var output_checker19067_19080 = schema.core.checker.call(null,output_schema19064_19077);/**
* Inputs: [data owner]
*/
expenses.components.error.component = ((function (ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080){
return (function component(G__19068,G__19069){var validate__15081__auto__ = ufv___19076.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___19081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19068,G__19069], null);var temp__4126__auto___19082 = input_checker19066_19079.call(null,args__15082__auto___19081);if(cljs.core.truth_(temp__4126__auto___19082))
{var error__15083__auto___19083 = temp__4126__auto___19082;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15083__auto___19083)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19065_19078,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___19081,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___19083], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var data = G__19068;var owner = G__19069;while(true){
if(typeof expenses.components.error.t19073 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.components.error.t19073 = (function (input_schema19065,G__19068,owner,validate__15081__auto__,data,G__19069,input_checker19066,component,output_schema19064,output_checker19067,ufv__,meta19074){
this.input_schema19065 = input_schema19065;
this.G__19068 = G__19068;
this.owner = owner;
this.validate__15081__auto__ = validate__15081__auto__;
this.data = data;
this.G__19069 = G__19069;
this.input_checker19066 = input_checker19066;
this.component = component;
this.output_schema19064 = output_schema19064;
this.output_checker19067 = output_checker19067;
this.ufv__ = ufv__;
this.meta19074 = meta19074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.components.error.t19073.cljs$lang$type = true;
expenses.components.error.t19073.cljs$lang$ctorStr = "expenses.components.error/t19073";
expenses.components.error.t19073.cljs$lang$ctorPrWriter = ((function (validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080){
return (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"expenses.components.error/t19073");
});})(validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080))
;
expenses.components.error.t19073.prototype.om$core$IRender$ = true;
expenses.components.error.t19073.prototype.om$core$IRender$render$arity$1 = ((function (validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "yeah"},"error");
});})(validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080))
;
expenses.components.error.t19073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080){
return (function (_19075){var self__ = this;
var _19075__$1 = this;return self__.meta19074;
});})(validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080))
;
expenses.components.error.t19073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080){
return (function (_19075,meta19074__$1){var self__ = this;
var _19075__$1 = this;return (new expenses.components.error.t19073(self__.input_schema19065,self__.G__19068,self__.owner,self__.validate__15081__auto__,self__.data,self__.G__19069,self__.input_checker19066,self__.component,self__.output_schema19064,self__.output_checker19067,self__.ufv__,meta19074__$1));
});})(validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080))
;
expenses.components.error.__GT_t19073 = ((function (validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080){
return (function __GT_t19073(input_schema19065__$1,G__19068__$1,owner__$1,validate__15081__auto____$1,data__$1,G__19069__$1,input_checker19066__$1,component__$1,output_schema19064__$1,output_checker19067__$1,ufv____$1,meta19074){return (new expenses.components.error.t19073(input_schema19065__$1,G__19068__$1,owner__$1,validate__15081__auto____$1,data__$1,G__19069__$1,input_checker19066__$1,component__$1,output_schema19064__$1,output_checker19067__$1,ufv____$1,meta19074));
});})(validate__15081__auto__,ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080))
;
}
return (new expenses.components.error.t19073(input_schema19065_19078,G__19068,owner,validate__15081__auto__,data,G__19069,input_checker19066_19079,component,output_schema19064_19077,output_checker19067_19080,ufv___19076,null));
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___19084 = output_checker19067_19080.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___19084))
{var error__15083__auto___19085 = temp__4126__auto___19084;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15083__auto___19085)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19064_19077,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___19085], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___19076,output_schema19064_19077,input_schema19065_19078,input_checker19066_19079,output_checker19067_19080))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,expenses.components.error.component),schema.core.make_fn_schema.call(null,output_schema19064_19077,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19065_19078], null)));
expenses.components.error.__GT_component = (function() {
var __GT_component = null;
var __GT_component__1 = (function (cursor__16849__auto__){return om.core.build.call(null,expenses.components.error.component,cursor__16849__auto__);
});
var __GT_component__2 = (function (cursor__16849__auto__,m19063){return om.core.build.call(null,expenses.components.error.component,cursor__16849__auto__,m19063);
});
__GT_component = function(cursor__16849__auto__,m19063){
switch(arguments.length){
case 1:
return __GT_component__1.call(this,cursor__16849__auto__);
case 2:
return __GT_component__2.call(this,cursor__16849__auto__,m19063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_component.cljs$core$IFn$_invoke$arity$1 = __GT_component__1;
__GT_component.cljs$core$IFn$_invoke$arity$2 = __GT_component__2;
return __GT_component;
})()
;

//# sourceMappingURL=error.js.map