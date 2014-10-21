// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__23121__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23121 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23121__delegate.call(this,m,k,f,x1,x2,xs);};
G__23121.cljs$lang$maxFixedArity = 5;
G__23121.cljs$lang$applyTo = (function (arglist__23122){
var m = cljs.core.first(arglist__23122);
arglist__23122 = cljs.core.next(arglist__23122);
var k = cljs.core.first(arglist__23122);
arglist__23122 = cljs.core.next(arglist__23122);
var f = cljs.core.first(arglist__23122);
arglist__23122 = cljs.core.next(arglist__23122);
var x1 = cljs.core.first(arglist__23122);
arglist__23122 = cljs.core.next(arglist__23122);
var x2 = cljs.core.first(arglist__23122);
var xs = cljs.core.rest(arglist__23122);
return G__23121__delegate(m,k,f,x1,x2,xs);
});
G__23121.cljs$core$IFn$_invoke$arity$variadic = G__23121__delegate;
return G__23121;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__16582__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23131_23137 = cljs.core.seq.call(null,m);var chunk__23132_23138 = null;var count__23133_23139 = (0);var i__23134_23140 = (0);while(true){
if((i__23134_23140 < count__23133_23139))
{var vec__23135_23141 = cljs.core._nth.call(null,chunk__23132_23138,i__23134_23140);var k_23142 = cljs.core.nth.call(null,vec__23135_23141,(0),null);var v_23143 = cljs.core.nth.call(null,vec__23135_23141,(1),null);var m23130_23144 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23130_23144,k_23142,f.call(null,v_23143)));
{
var G__23145 = seq__23131_23137;
var G__23146 = chunk__23132_23138;
var G__23147 = count__23133_23139;
var G__23148 = (i__23134_23140 + (1));
seq__23131_23137 = G__23145;
chunk__23132_23138 = G__23146;
count__23133_23139 = G__23147;
i__23134_23140 = G__23148;
continue;
}
} else
{var temp__4126__auto___23149 = cljs.core.seq.call(null,seq__23131_23137);if(temp__4126__auto___23149)
{var seq__23131_23150__$1 = temp__4126__auto___23149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23131_23150__$1))
{var c__12137__auto___23151 = cljs.core.chunk_first.call(null,seq__23131_23150__$1);{
var G__23152 = cljs.core.chunk_rest.call(null,seq__23131_23150__$1);
var G__23153 = c__12137__auto___23151;
var G__23154 = cljs.core.count.call(null,c__12137__auto___23151);
var G__23155 = (0);
seq__23131_23137 = G__23152;
chunk__23132_23138 = G__23153;
count__23133_23139 = G__23154;
i__23134_23140 = G__23155;
continue;
}
} else
{var vec__23136_23156 = cljs.core.first.call(null,seq__23131_23150__$1);var k_23157 = cljs.core.nth.call(null,vec__23136_23156,(0),null);var v_23158 = cljs.core.nth.call(null,vec__23136_23156,(1),null);var m23130_23159 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23130_23159,k_23157,f.call(null,v_23158)));
{
var G__23160 = cljs.core.next.call(null,seq__23131_23150__$1);
var G__23161 = null;
var G__23162 = (0);
var G__23163 = (0);
seq__23131_23137 = G__23160;
chunk__23132_23138 = G__23161;
count__23133_23139 = G__23162;
i__23134_23140 = G__23163;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16582__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__16582__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23172_23178 = cljs.core.seq.call(null,m);var chunk__23173_23179 = null;var count__23174_23180 = (0);var i__23175_23181 = (0);while(true){
if((i__23175_23181 < count__23174_23180))
{var vec__23176_23182 = cljs.core._nth.call(null,chunk__23173_23179,i__23175_23181);var k_23183 = cljs.core.nth.call(null,vec__23176_23182,(0),null);var v_23184 = cljs.core.nth.call(null,vec__23176_23182,(1),null);var m23171_23185 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23171_23185,f.call(null,k_23183),v_23184));
{
var G__23186 = seq__23172_23178;
var G__23187 = chunk__23173_23179;
var G__23188 = count__23174_23180;
var G__23189 = (i__23175_23181 + (1));
seq__23172_23178 = G__23186;
chunk__23173_23179 = G__23187;
count__23174_23180 = G__23188;
i__23175_23181 = G__23189;
continue;
}
} else
{var temp__4126__auto___23190 = cljs.core.seq.call(null,seq__23172_23178);if(temp__4126__auto___23190)
{var seq__23172_23191__$1 = temp__4126__auto___23190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23172_23191__$1))
{var c__12137__auto___23192 = cljs.core.chunk_first.call(null,seq__23172_23191__$1);{
var G__23193 = cljs.core.chunk_rest.call(null,seq__23172_23191__$1);
var G__23194 = c__12137__auto___23192;
var G__23195 = cljs.core.count.call(null,c__12137__auto___23192);
var G__23196 = (0);
seq__23172_23178 = G__23193;
chunk__23173_23179 = G__23194;
count__23174_23180 = G__23195;
i__23175_23181 = G__23196;
continue;
}
} else
{var vec__23177_23197 = cljs.core.first.call(null,seq__23172_23191__$1);var k_23198 = cljs.core.nth.call(null,vec__23177_23197,(0),null);var v_23199 = cljs.core.nth.call(null,vec__23177_23197,(1),null);var m23171_23200 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23171_23200,f.call(null,k_23198),v_23199));
{
var G__23201 = cljs.core.next.call(null,seq__23172_23191__$1);
var G__23202 = null;
var G__23203 = (0);
var G__23204 = (0);
seq__23172_23178 = G__23201;
chunk__23173_23179 = G__23202;
count__23174_23180 = G__23203;
i__23175_23181 = G__23204;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16582__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__16582__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23211_23215 = cljs.core.seq.call(null,ks);var chunk__23212_23216 = null;var count__23213_23217 = (0);var i__23214_23218 = (0);while(true){
if((i__23214_23218 < count__23213_23217))
{var k_23219 = cljs.core._nth.call(null,chunk__23212_23216,i__23214_23218);var m23210_23220 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23210_23220,k_23219,f.call(null,k_23219)));
{
var G__23221 = seq__23211_23215;
var G__23222 = chunk__23212_23216;
var G__23223 = count__23213_23217;
var G__23224 = (i__23214_23218 + (1));
seq__23211_23215 = G__23221;
chunk__23212_23216 = G__23222;
count__23213_23217 = G__23223;
i__23214_23218 = G__23224;
continue;
}
} else
{var temp__4126__auto___23225 = cljs.core.seq.call(null,seq__23211_23215);if(temp__4126__auto___23225)
{var seq__23211_23226__$1 = temp__4126__auto___23225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23211_23226__$1))
{var c__12137__auto___23227 = cljs.core.chunk_first.call(null,seq__23211_23226__$1);{
var G__23228 = cljs.core.chunk_rest.call(null,seq__23211_23226__$1);
var G__23229 = c__12137__auto___23227;
var G__23230 = cljs.core.count.call(null,c__12137__auto___23227);
var G__23231 = (0);
seq__23211_23215 = G__23228;
chunk__23212_23216 = G__23229;
count__23213_23217 = G__23230;
i__23214_23218 = G__23231;
continue;
}
} else
{var k_23232 = cljs.core.first.call(null,seq__23211_23226__$1);var m23210_23233 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23210_23233,k_23232,f.call(null,k_23232)));
{
var G__23234 = cljs.core.next.call(null,seq__23211_23226__$1);
var G__23235 = null;
var G__23236 = (0);
var G__23237 = (0);
seq__23211_23215 = G__23234;
chunk__23212_23216 = G__23235;
count__23213_23217 = G__23236;
i__23214_23218 = G__23237;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16582__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__16582__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23244_23248 = cljs.core.seq.call(null,vs);var chunk__23245_23249 = null;var count__23246_23250 = (0);var i__23247_23251 = (0);while(true){
if((i__23247_23251 < count__23246_23250))
{var v_23252 = cljs.core._nth.call(null,chunk__23245_23249,i__23247_23251);var m23243_23253 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23243_23253,f.call(null,v_23252),v_23252));
{
var G__23254 = seq__23244_23248;
var G__23255 = chunk__23245_23249;
var G__23256 = count__23246_23250;
var G__23257 = (i__23247_23251 + (1));
seq__23244_23248 = G__23254;
chunk__23245_23249 = G__23255;
count__23246_23250 = G__23256;
i__23247_23251 = G__23257;
continue;
}
} else
{var temp__4126__auto___23258 = cljs.core.seq.call(null,seq__23244_23248);if(temp__4126__auto___23258)
{var seq__23244_23259__$1 = temp__4126__auto___23258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23244_23259__$1))
{var c__12137__auto___23260 = cljs.core.chunk_first.call(null,seq__23244_23259__$1);{
var G__23261 = cljs.core.chunk_rest.call(null,seq__23244_23259__$1);
var G__23262 = c__12137__auto___23260;
var G__23263 = cljs.core.count.call(null,c__12137__auto___23260);
var G__23264 = (0);
seq__23244_23248 = G__23261;
chunk__23245_23249 = G__23262;
count__23246_23250 = G__23263;
i__23247_23251 = G__23264;
continue;
}
} else
{var v_23265 = cljs.core.first.call(null,seq__23244_23259__$1);var m23243_23266 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23243_23266,f.call(null,v_23265),v_23265));
{
var G__23267 = cljs.core.next.call(null,seq__23244_23259__$1);
var G__23268 = null;
var G__23269 = (0);
var G__23270 = (0);
seq__23244_23248 = G__23267;
chunk__23245_23249 = G__23268;
count__23246_23250 = G__23269;
i__23247_23251 = G__23270;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16582__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__23271){var vec__23273 = p__23271;var k = cljs.core.nth.call(null,vec__23273,(0),null);var ks = cljs.core.nthnext.call(null,vec__23273,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__11369__auto__ = ks;if(and__11369__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__11369__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__16582__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23282_23288 = cljs.core.seq.call(null,x);var chunk__23283_23289 = null;var count__23284_23290 = (0);var i__23285_23291 = (0);while(true){
if((i__23285_23291 < count__23284_23290))
{var vec__23286_23292 = cljs.core._nth.call(null,chunk__23283_23289,i__23285_23291);var k_23293 = cljs.core.nth.call(null,vec__23286_23292,(0),null);var v_23294 = cljs.core.nth.call(null,vec__23286_23292,(1),null);var m23281_23295 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23281_23295,((typeof k_23293 === 'string')?cljs.core.keyword.call(null,k_23293):k_23293),keywordize_map.call(null,v_23294)));
{
var G__23296 = seq__23282_23288;
var G__23297 = chunk__23283_23289;
var G__23298 = count__23284_23290;
var G__23299 = (i__23285_23291 + (1));
seq__23282_23288 = G__23296;
chunk__23283_23289 = G__23297;
count__23284_23290 = G__23298;
i__23285_23291 = G__23299;
continue;
}
} else
{var temp__4126__auto___23300 = cljs.core.seq.call(null,seq__23282_23288);if(temp__4126__auto___23300)
{var seq__23282_23301__$1 = temp__4126__auto___23300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23282_23301__$1))
{var c__12137__auto___23302 = cljs.core.chunk_first.call(null,seq__23282_23301__$1);{
var G__23303 = cljs.core.chunk_rest.call(null,seq__23282_23301__$1);
var G__23304 = c__12137__auto___23302;
var G__23305 = cljs.core.count.call(null,c__12137__auto___23302);
var G__23306 = (0);
seq__23282_23288 = G__23303;
chunk__23283_23289 = G__23304;
count__23284_23290 = G__23305;
i__23285_23291 = G__23306;
continue;
}
} else
{var vec__23287_23307 = cljs.core.first.call(null,seq__23282_23301__$1);var k_23308 = cljs.core.nth.call(null,vec__23287_23307,(0),null);var v_23309 = cljs.core.nth.call(null,vec__23287_23307,(1),null);var m23281_23310 = cljs.core.deref.call(null,m_atom__16582__auto__);cljs.core.reset_BANG_.call(null,m_atom__16582__auto__,cljs.core.assoc_BANG_.call(null,m23281_23310,((typeof k_23308 === 'string')?cljs.core.keyword.call(null,k_23308):k_23308),keywordize_map.call(null,v_23309)));
{
var G__23311 = cljs.core.next.call(null,seq__23282_23301__$1);
var G__23312 = null;
var G__23313 = (0);
var G__23314 = (0);
seq__23282_23288 = G__23311;
chunk__23283_23289 = G__23312;
count__23284_23290 = G__23313;
i__23285_23291 = G__23314;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16582__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__16651__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__16651__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__23315 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23316 = cljs.core.next.call(null,ks);
m = G__23315;
ks = G__23316;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__11381__auto__ = m;if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__12106__auto__ = (function iter__23325(s__23326){return (new cljs.core.LazySeq(null,(function (){var s__23326__$1 = s__23326;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23326__$1);if(temp__4126__auto__)
{var s__23326__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23326__$2))
{var c__12104__auto__ = cljs.core.chunk_first.call(null,s__23326__$2);var size__12105__auto__ = cljs.core.count.call(null,c__12104__auto__);var b__23328 = cljs.core.chunk_buffer.call(null,size__12105__auto__);if((function (){var i__23327 = (0);while(true){
if((i__23327 < size__12105__auto__))
{var vec__23331 = cljs.core._nth.call(null,c__12104__auto__,i__23327);var k = cljs.core.nth.call(null,vec__23331,(0),null);var v = cljs.core.nth.call(null,vec__23331,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__23328,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23333 = (i__23327 + (1));
i__23327 = G__23333;
continue;
}
} else
{{
var G__23334 = (i__23327 + (1));
i__23327 = G__23334;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23328),iter__23325.call(null,cljs.core.chunk_rest.call(null,s__23326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23328),null);
}
} else
{var vec__23332 = cljs.core.first.call(null,s__23326__$2);var k = cljs.core.nth.call(null,vec__23332,(0),null);var v = cljs.core.nth.call(null,vec__23332,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23325.call(null,cljs.core.rest.call(null,s__23326__$2)));
} else
{{
var G__23335 = cljs.core.rest.call(null,s__23326__$2);
s__23326__$1 = G__23335;
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
});return iter__12106__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__23336){
var m = cljs.core.first(arglist__23336);
var kvs = cljs.core.rest(arglist__23336);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__23337){
var m = cljs.core.first(arglist__23337);
arglist__23337 = cljs.core.next(arglist__23337);
var key_seq = cljs.core.first(arglist__23337);
arglist__23337 = cljs.core.next(arglist__23337);
var f = cljs.core.first(arglist__23337);
var args = cljs.core.rest(arglist__23337);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__12106__auto__ = ((function (s){
return (function iter__23342(s__23343){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__23343__$1 = s__23343;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23343__$1);if(temp__4126__auto__)
{var s__23343__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23343__$2))
{var c__12104__auto__ = cljs.core.chunk_first.call(null,s__23343__$2);var size__12105__auto__ = cljs.core.count.call(null,c__12104__auto__);var b__23345 = cljs.core.chunk_buffer.call(null,size__12105__auto__);if((function (){var i__23344 = (0);while(true){
if((i__23344 < size__12105__auto__))
{var x = cljs.core._nth.call(null,c__12104__auto__,i__23344);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__23345,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__23346 = (i__23344 + (1));
i__23344 = G__23346;
continue;
}
} else
{{
var G__23347 = (i__23344 + (1));
i__23344 = G__23347;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23345),iter__23342.call(null,cljs.core.chunk_rest.call(null,s__23343__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23345),null);
}
} else
{var x = cljs.core.first.call(null,s__23343__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__23342.call(null,cljs.core.rest.call(null,s__23343__$2)));
} else
{{
var G__23348 = cljs.core.rest.call(null,s__23343__$2);
s__23343__$1 = G__23348;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__12106__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__23349){
var colls = cljs.core.seq(arglist__23349);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__23350__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__23351 = conj_when.call(null,coll,x);
var G__23352 = cljs.core.first.call(null,xs);
var G__23353 = cljs.core.next.call(null,xs);
coll = G__23351;
x = G__23352;
xs = G__23353;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__23350 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23350__delegate.call(this,coll,x,xs);};
G__23350.cljs$lang$maxFixedArity = 2;
G__23350.cljs$lang$applyTo = (function (arglist__23354){
var coll = cljs.core.first(arglist__23354);
arglist__23354 = cljs.core.next(arglist__23354);
var x = cljs.core.first(arglist__23354);
var xs = cljs.core.rest(arglist__23354);
return G__23350__delegate(coll,x,xs);
});
G__23350.cljs$core$IFn$_invoke$arity$variadic = G__23350__delegate;
return G__23350;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__23356__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__23355_SHARP_){return cljs.core.apply.call(null,f,p1__23355_SHARP_,args);
}));
};
var G__23356 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23356__delegate.call(this,a,f,args);};
G__23356.cljs$lang$maxFixedArity = 2;
G__23356.cljs$lang$applyTo = (function (arglist__23357){
var a = cljs.core.first(arglist__23357);
arglist__23357 = cljs.core.next(arglist__23357);
var f = cljs.core.first(arglist__23357);
var args = cljs.core.rest(arglist__23357);
return G__23356__delegate(a,f,args);
});
G__23356.cljs$core$IFn$_invoke$arity$variadic = G__23356__delegate;
return G__23356;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__23358__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__23358 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23358__delegate.call(this,f,arg,args);};
G__23358.cljs$lang$maxFixedArity = 2;
G__23358.cljs$lang$applyTo = (function (arglist__23359){
var f = cljs.core.first(arglist__23359);
arglist__23359 = cljs.core.next(arglist__23359);
var arg = cljs.core.first(arglist__23359);
var args = cljs.core.rest(arglist__23359);
return G__23358__delegate(f,arg,args);
});
G__23358.cljs$core$IFn$_invoke$arity$variadic = G__23358__delegate;
return G__23358;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map