// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__15111__15112__auto__){var G__22549 = p1__15111__15112__auto__;if(G__22549)
{var bit__12031__auto__ = null;if(cljs.core.truth_((function (){var or__11381__auto__ = bit__12031__auto__;if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{return G__22549.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__22549.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22549);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22549);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__22550_SHARP_){return (cljs.core.val.call(null,p1__22550_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__22552 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__22552,(0),null);var v = cljs.core.nth.call(null,vec__22552,(1),null);var p = vec__22552;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___22558 = schema.utils.use_fn_validation;var output_schema22553_22559 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema22554_22560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker22555_22561 = schema.core.checker.call(null,input_schema22554_22560);var output_checker22556_22562 = schema.core.checker.call(null,output_schema22553_22559);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22558,output_schema22553_22559,input_schema22554_22560,input_checker22555_22561,output_checker22556_22562){
return (function unwrap_schema_form_key(G__22557){var validate__15081__auto__ = ufv___22558.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___22563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22557], null);var temp__4126__auto___22564 = input_checker22555_22561.call(null,args__15082__auto___22563);if(cljs.core.truth_(temp__4126__auto___22564))
{var error__15083__auto___22565 = temp__4126__auto___22564;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__15083__auto___22565)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22554_22560,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22563,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22565], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var k = G__22557;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___22566 = output_checker22556_22562.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22566))
{var error__15083__auto___22567 = temp__4126__auto___22566;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__15083__auto___22567)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22553_22559,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22567], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22558,output_schema22553_22559,input_schema22554_22560,input_checker22555_22561,output_checker22556_22562))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema22553_22559,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22554_22560], null)));
var ufv___22573 = schema.utils.use_fn_validation;var output_schema22568_22574 = schema.core.Any;var input_schema22569_22575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22570_22576 = schema.core.checker.call(null,input_schema22569_22575);var output_checker22571_22577 = schema.core.checker.call(null,output_schema22568_22574);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22573,output_schema22568_22574,input_schema22569_22575,input_checker22570_22576,output_checker22571_22577){
return (function explicit_schema_key_map(G__22572){var validate__15081__auto__ = ufv___22573.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___22578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22572], null);var temp__4126__auto___22579 = input_checker22570_22576.call(null,args__15082__auto___22578);if(cljs.core.truth_(temp__4126__auto___22579))
{var error__15083__auto___22580 = temp__4126__auto___22579;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__15083__auto___22580)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22569_22575,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22578,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22580], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var s = G__22572;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___22581 = output_checker22571_22577.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22581))
{var error__15083__auto___22582 = temp__4126__auto___22581;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__15083__auto___22582)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22568_22574,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22582], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22573,output_schema22568_22574,input_schema22569_22575,input_checker22570_22576,output_checker22571_22577))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema22568_22574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22569_22575], null)));
var ufv___22588 = schema.utils.use_fn_validation;var output_schema22583_22589 = schema.core.Any;var input_schema22584_22590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22585_22591 = schema.core.checker.call(null,input_schema22584_22590);var output_checker22586_22592 = schema.core.checker.call(null,output_schema22583_22589);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22588,output_schema22583_22589,input_schema22584_22590,input_checker22585_22591,output_checker22586_22592){
return (function split_schema_keys(G__22587){var validate__15081__auto__ = ufv___22588.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___22593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22587], null);var temp__4126__auto___22594 = input_checker22585_22591.call(null,args__15082__auto___22593);if(cljs.core.truth_(temp__4126__auto___22594))
{var error__15083__auto___22595 = temp__4126__auto___22594;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__15083__auto___22595)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22584_22590,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22593,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22595], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var s = G__22587;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___22596 = output_checker22586_22592.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22596))
{var error__15083__auto___22597 = temp__4126__auto___22596;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__15083__auto___22597)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22583_22589,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22597], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22588,output_schema22583_22589,input_schema22584_22590,input_checker22585_22591,output_checker22586_22592))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema22583_22589,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22584_22590], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__22601){var vec__22602 = p__22601;var k = cljs.core.nth.call(null,vec__22602,(0),null);var v = cljs.core.nth.call(null,vec__22602,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__22603 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__22603,(0),null);var ov = cljs.core.nth.call(null,vec__22603,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__22604){
var key_project = cljs.core.first(arglist__22604);
arglist__22604 = cljs.core.next(arglist__22604);
var key_combine = cljs.core.first(arglist__22604);
arglist__22604 = cljs.core.next(arglist__22604);
var val_combine = cljs.core.first(arglist__22604);
var maps = cljs.core.rest(arglist__22604);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___22612 = schema.utils.use_fn_validation;var output_schema22606_22613 = plumbing.fnk.schema.InputSchema;var input_schema22607_22614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker22608_22615 = schema.core.checker.call(null,input_schema22607_22614);var output_checker22609_22616 = schema.core.checker.call(null,output_schema22606_22613);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616){
return (function union_input_schemata(G__22610,G__22611){var validate__15081__auto__ = ufv___22612.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___22617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22610,G__22611], null);var temp__4126__auto___22618 = input_checker22608_22615.call(null,args__15082__auto___22617);if(cljs.core.truth_(temp__4126__auto___22618))
{var error__15083__auto___22619 = temp__4126__auto___22618;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__15083__auto___22619)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22607_22614,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22617,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22619], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var i1 = G__22610;var i2 = G__22611;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__15081__auto__,ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616){
return (function (p1__22605_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__22605_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__22605_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__15081__auto__,ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616))
,((function (validate__15081__auto__,ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__15081__auto__,ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616))
,((function (validate__15081__auto__,ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__15081__auto__,ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___22620 = output_checker22609_22616.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22620))
{var error__15083__auto___22621 = temp__4126__auto___22620;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__15083__auto___22621)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22606_22613,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22621], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22612,output_schema22606_22613,input_schema22607_22614,input_checker22608_22615,output_checker22609_22616))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema22606_22613,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22607_22614], null)));
var ufv___22627 = schema.utils.use_fn_validation;var output_schema22622_22628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema22623_22629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker22624_22630 = schema.core.checker.call(null,input_schema22623_22629);var output_checker22625_22631 = schema.core.checker.call(null,output_schema22622_22628);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___22627,output_schema22622_22628,input_schema22623_22629,input_checker22624_22630,output_checker22625_22631){
return (function required_toplevel_keys(G__22626){var validate__15081__auto__ = ufv___22627.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___22632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22626], null);var temp__4126__auto___22633 = input_checker22624_22630.call(null,args__15082__auto___22632);if(cljs.core.truth_(temp__4126__auto___22633))
{var error__15083__auto___22634 = temp__4126__auto___22633;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__15083__auto___22634)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22623_22629,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22632,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22634], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var input_schema = G__22626;while(true){
return cljs.core.keep.call(null,((function (validate__15081__auto__,ufv___22627,output_schema22622_22628,input_schema22623_22629,input_checker22624_22630,output_checker22625_22631){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__15081__auto__,ufv___22627,output_schema22622_22628,input_schema22623_22629,input_checker22624_22630,output_checker22625_22631))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___22635 = output_checker22625_22631.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22635))
{var error__15083__auto___22636 = temp__4126__auto___22635;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__15083__auto___22636)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22622_22628,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22636], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22627,output_schema22622_22628,input_schema22623_22629,input_checker22624_22630,output_checker22625_22631))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema22622_22628,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22623_22629], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12106__auto__ = (function iter__22645(s__22646){return (new cljs.core.LazySeq(null,(function (){var s__22646__$1 = s__22646;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22646__$1);if(temp__4126__auto__)
{var s__22646__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22646__$2))
{var c__12104__auto__ = cljs.core.chunk_first.call(null,s__22646__$2);var size__12105__auto__ = cljs.core.count.call(null,c__12104__auto__);var b__22648 = cljs.core.chunk_buffer.call(null,size__12105__auto__);if((function (){var i__22647 = (0);while(true){
if((i__22647 < size__12105__auto__))
{var vec__22651 = cljs.core._nth.call(null,c__12104__auto__,i__22647);var k = cljs.core.nth.call(null,vec__22651,(0),null);var v = cljs.core.nth.call(null,vec__22651,(1),null);cljs.core.chunk_append.call(null,b__22648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__22653 = (i__22647 + (1));
i__22647 = G__22653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22648),iter__22645.call(null,cljs.core.chunk_rest.call(null,s__22646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22648),null);
}
} else
{var vec__22652 = cljs.core.first.call(null,s__22646__$2);var k = cljs.core.nth.call(null,vec__22652,(0),null);var v = cljs.core.nth.call(null,vec__22652,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__22645.call(null,cljs.core.rest.call(null,s__22646__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12106__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12106__auto__ = (function iter__22662(s__22663){return (new cljs.core.LazySeq(null,(function (){var s__22663__$1 = s__22663;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22663__$1);if(temp__4126__auto__)
{var s__22663__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22663__$2))
{var c__12104__auto__ = cljs.core.chunk_first.call(null,s__22663__$2);var size__12105__auto__ = cljs.core.count.call(null,c__12104__auto__);var b__22665 = cljs.core.chunk_buffer.call(null,size__12105__auto__);if((function (){var i__22664 = (0);while(true){
if((i__22664 < size__12105__auto__))
{var vec__22668 = cljs.core._nth.call(null,c__12104__auto__,i__22664);var k = cljs.core.nth.call(null,vec__22668,(0),null);var v = cljs.core.nth.call(null,vec__22668,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__22665,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__22670 = (i__22664 + (1));
i__22664 = G__22670;
continue;
}
} else
{{
var G__22671 = (i__22664 + (1));
i__22664 = G__22671;
continue;
}
}
} else
{{
var G__22672 = (i__22664 + (1));
i__22664 = G__22672;
continue;
}
}
} else
{{
var G__22673 = (i__22664 + (1));
i__22664 = G__22673;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22665),iter__22662.call(null,cljs.core.chunk_rest.call(null,s__22663__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22665),null);
}
} else
{var vec__22669 = cljs.core.first.call(null,s__22663__$2);var k = cljs.core.nth.call(null,vec__22669,(0),null);var v = cljs.core.nth.call(null,vec__22669,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__22662.call(null,cljs.core.rest.call(null,s__22663__$2)));
} else
{{
var G__22674 = cljs.core.rest.call(null,s__22663__$2);
s__22663__$1 = G__22674;
continue;
}
}
} else
{{
var G__22675 = cljs.core.rest.call(null,s__22663__$2);
s__22663__$1 = G__22675;
continue;
}
}
} else
{{
var G__22676 = cljs.core.rest.call(null,s__22663__$2);
s__22663__$1 = G__22676;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12106__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___22699 = schema.utils.use_fn_validation;var output_schema22677_22700 = schema.core.Any;var input_schema22678_22701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22679_22702 = schema.core.checker.call(null,input_schema22678_22701);var output_checker22680_22703 = schema.core.checker.call(null,output_schema22677_22700);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___22699,output_schema22677_22700,input_schema22678_22701,input_checker22679_22702,output_checker22680_22703){
return (function compose_schemata(G__22681,G__22682){var validate__15081__auto__ = true;if(validate__15081__auto__)
{var args__15082__auto___22704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22681,G__22682], null);var temp__4126__auto___22705 = input_checker22679_22702.call(null,args__15082__auto___22704);if(cljs.core.truth_(temp__4126__auto___22705))
{var error__15083__auto___22706 = temp__4126__auto___22705;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__15083__auto___22706)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22678_22701,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22704,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22706], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var G__22693 = G__22681;var vec__22695 = G__22693;var i2 = cljs.core.nth.call(null,vec__22695,(0),null);var o2 = cljs.core.nth.call(null,vec__22695,(1),null);var G__22694 = G__22682;var vec__22696 = G__22694;var i1 = cljs.core.nth.call(null,vec__22696,(0),null);var o1 = cljs.core.nth.call(null,vec__22696,(1),null);var G__22693__$1 = G__22693;var G__22694__$1 = G__22694;while(true){
var vec__22697 = G__22693__$1;var i2__$1 = cljs.core.nth.call(null,vec__22697,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22697,(1),null);var vec__22698 = G__22694__$1;var i1__$1 = cljs.core.nth.call(null,vec__22698,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22698,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__15081__auto__)
{var temp__4126__auto___22707 = output_checker22680_22703.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22707))
{var error__15083__auto___22708 = temp__4126__auto___22707;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__15083__auto___22708)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22677_22700,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22708], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22699,output_schema22677_22700,input_schema22678_22701,input_checker22679_22702,output_checker22680_22703))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema22677_22700,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22678_22701], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___22787 = schema.utils.use_fn_validation;var output_schema22709_22788 = schema.core.Any;var input_schema22710_22789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker22711_22790 = schema.core.checker.call(null,input_schema22710_22789);var output_checker22712_22791 = schema.core.checker.call(null,output_schema22709_22788);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791){
return (function split_schema(G__22713,G__22714){var validate__15081__auto__ = ufv___22787.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___22792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22713,G__22714], null);var temp__4126__auto___22793 = input_checker22711_22790.call(null,args__15082__auto___22792);if(cljs.core.truth_(temp__4126__auto___22793))
{var error__15083__auto___22794 = temp__4126__auto___22793;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__15083__auto___22794)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22710_22789,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22792,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22794], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var s = G__22713;var ks = G__22714;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__12106__auto__ = ((function (ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791){
return (function iter__22751(s__22752){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791){
return (function (){var s__22752__$1 = s__22752;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22752__$1);if(temp__4126__auto__)
{var s__22752__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22752__$2))
{var c__12104__auto__ = cljs.core.chunk_first.call(null,s__22752__$2);var size__12105__auto__ = cljs.core.count.call(null,c__12104__auto__);var b__22754 = cljs.core.chunk_buffer.call(null,size__12105__auto__);if((function (){var i__22753 = (0);while(true){
if((i__22753 < size__12105__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__12104__auto__,i__22753);cljs.core.chunk_append.call(null,b__22754,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12106__auto__ = ((function (i__22753,in_QMARK_,c__12104__auto__,size__12105__auto__,b__22754,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791){
return (function iter__22771(s__22772){return (new cljs.core.LazySeq(null,((function (i__22753,in_QMARK_,c__12104__auto__,size__12105__auto__,b__22754,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791){
return (function (){var s__22772__$1 = s__22772;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22772__$1);if(temp__4126__auto____$1)
{var s__22772__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22772__$2))
{var c__12104__auto____$1 = cljs.core.chunk_first.call(null,s__22772__$2);var size__12105__auto____$1 = cljs.core.count.call(null,c__12104__auto____$1);var b__22774 = cljs.core.chunk_buffer.call(null,size__12105__auto____$1);if((function (){var i__22773 = (0);while(true){
if((i__22773 < size__12105__auto____$1))
{var vec__22777 = cljs.core._nth.call(null,c__12104__auto____$1,i__22773);var k = cljs.core.nth.call(null,vec__22777,(0),null);var v = cljs.core.nth.call(null,vec__22777,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22795 = (i__22773 + (1));
i__22773 = G__22795;
continue;
}
} else
{{
var G__22796 = (i__22773 + (1));
i__22773 = G__22796;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22774),iter__22771.call(null,cljs.core.chunk_rest.call(null,s__22772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22774),null);
}
} else
{var vec__22778 = cljs.core.first.call(null,s__22772__$2);var k = cljs.core.nth.call(null,vec__22778,(0),null);var v = cljs.core.nth.call(null,vec__22778,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22771.call(null,cljs.core.rest.call(null,s__22772__$2)));
} else
{{
var G__22797 = cljs.core.rest.call(null,s__22772__$2);
s__22772__$1 = G__22797;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__22753,in_QMARK_,c__12104__auto__,size__12105__auto__,b__22754,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791))
,null,null));
});})(i__22753,in_QMARK_,c__12104__auto__,size__12105__auto__,b__22754,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791))
;return iter__12106__auto__.call(null,s);
})()));
{
var G__22798 = (i__22753 + (1));
i__22753 = G__22798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22754),iter__22751.call(null,cljs.core.chunk_rest.call(null,s__22752__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22754),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__22752__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12106__auto__ = ((function (in_QMARK_,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791){
return (function iter__22779(s__22780){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791){
return (function (){var s__22780__$1 = s__22780;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22780__$1);if(temp__4126__auto____$1)
{var s__22780__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22780__$2))
{var c__12104__auto__ = cljs.core.chunk_first.call(null,s__22780__$2);var size__12105__auto__ = cljs.core.count.call(null,c__12104__auto__);var b__22782 = cljs.core.chunk_buffer.call(null,size__12105__auto__);if((function (){var i__22781 = (0);while(true){
if((i__22781 < size__12105__auto__))
{var vec__22785 = cljs.core._nth.call(null,c__12104__auto__,i__22781);var k = cljs.core.nth.call(null,vec__22785,(0),null);var v = cljs.core.nth.call(null,vec__22785,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22799 = (i__22781 + (1));
i__22781 = G__22799;
continue;
}
} else
{{
var G__22800 = (i__22781 + (1));
i__22781 = G__22800;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22782),iter__22779.call(null,cljs.core.chunk_rest.call(null,s__22780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22782),null);
}
} else
{var vec__22786 = cljs.core.first.call(null,s__22780__$2);var k = cljs.core.nth.call(null,vec__22786,(0),null);var v = cljs.core.nth.call(null,vec__22786,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22779.call(null,cljs.core.rest.call(null,s__22780__$2)));
} else
{{
var G__22801 = cljs.core.rest.call(null,s__22780__$2);
s__22780__$1 = G__22801;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791))
,null,null));
});})(in_QMARK_,s__22752__$2,temp__4126__auto__,ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791))
;return iter__12106__auto__.call(null,s);
})()),iter__22751.call(null,cljs.core.rest.call(null,s__22752__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791))
,null,null));
});})(ks__$1,validate__15081__auto__,ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791))
;return iter__12106__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___22802 = output_checker22712_22791.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22802))
{var error__15083__auto___22803 = temp__4126__auto___22802;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__15083__auto___22803)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22709_22788,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22803], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22787,output_schema22709_22788,input_schema22710_22789,input_checker22711_22790,output_checker22712_22791))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema22709_22788,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22710_22789], null)));
var ufv___22834 = schema.utils.use_fn_validation;var output_schema22804_22835 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22805_22836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22806_22837 = schema.core.checker.call(null,input_schema22805_22836);var output_checker22807_22838 = schema.core.checker.call(null,output_schema22804_22835);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22834,output_schema22804_22835,input_schema22805_22836,input_checker22806_22837,output_checker22807_22838){
return (function sequence_schemata(G__22808,G__22809){var validate__15081__auto__ = ufv___22834.get_cell();if(cljs.core.truth_(validate__15081__auto__))
{var args__15082__auto___22839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22808,G__22809], null);var temp__4126__auto___22840 = input_checker22806_22837.call(null,args__15082__auto___22839);if(cljs.core.truth_(temp__4126__auto___22840))
{var error__15083__auto___22841 = temp__4126__auto___22840;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__15083__auto___22841)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22805_22836,new cljs.core.Keyword(null,"value","value",305978217),args__15082__auto___22839,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22841], null));
} else
{}
} else
{}
var o__15084__auto__ = (function (){var G__22825 = G__22808;var vec__22827 = G__22825;var i1 = cljs.core.nth.call(null,vec__22827,(0),null);var o1 = cljs.core.nth.call(null,vec__22827,(1),null);var G__22826 = G__22809;var vec__22828 = G__22826;var k = cljs.core.nth.call(null,vec__22828,(0),null);var vec__22829 = cljs.core.nth.call(null,vec__22828,(1),null);var i2 = cljs.core.nth.call(null,vec__22829,(0),null);var o2 = cljs.core.nth.call(null,vec__22829,(1),null);var G__22825__$1 = G__22825;var G__22826__$1 = G__22826;while(true){
var vec__22830 = G__22825__$1;var i1__$1 = cljs.core.nth.call(null,vec__22830,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22830,(1),null);var vec__22831 = G__22826__$1;var k__$1 = cljs.core.nth.call(null,vec__22831,(0),null);var vec__22832 = cljs.core.nth.call(null,vec__22831,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22832,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22832,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__22833 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22833,(0),null);var unused = cljs.core.nth.call(null,vec__22833,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__15081__auto__))
{var temp__4126__auto___22842 = output_checker22807_22838.call(null,o__15084__auto__);if(cljs.core.truth_(temp__4126__auto___22842))
{var error__15083__auto___22843 = temp__4126__auto___22842;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__15083__auto___22843)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22804_22835,new cljs.core.Keyword(null,"value","value",305978217),o__15084__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15083__auto___22843], null));
} else
{}
} else
{}
return o__15084__auto__;
});})(ufv___22834,output_schema22804_22835,input_schema22805_22836,input_checker22806_22837,output_checker22807_22838))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22804_22835,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22805_22836], null)));

//# sourceMappingURL=schema.js.map