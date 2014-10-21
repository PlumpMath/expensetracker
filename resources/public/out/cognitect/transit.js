// Compiled by ClojureScript 0.0-2322
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__28120_28124 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__28121_28125 = null;var count__28122_28126 = (0);var i__28123_28127 = (0);while(true){
if((i__28123_28127 < count__28122_28126))
{var k_28128 = cljs.core._nth.call(null,chunk__28121_28125,i__28123_28127);var v_28129 = (b[k_28128]);(a[k_28128] = v_28129);
{
var G__28130 = seq__28120_28124;
var G__28131 = chunk__28121_28125;
var G__28132 = count__28122_28126;
var G__28133 = (i__28123_28127 + (1));
seq__28120_28124 = G__28130;
chunk__28121_28125 = G__28131;
count__28122_28126 = G__28132;
i__28123_28127 = G__28133;
continue;
}
} else
{var temp__4126__auto___28134 = cljs.core.seq.call(null,seq__28120_28124);if(temp__4126__auto___28134)
{var seq__28120_28135__$1 = temp__4126__auto___28134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28120_28135__$1))
{var c__12137__auto___28136 = cljs.core.chunk_first.call(null,seq__28120_28135__$1);{
var G__28137 = cljs.core.chunk_rest.call(null,seq__28120_28135__$1);
var G__28138 = c__12137__auto___28136;
var G__28139 = cljs.core.count.call(null,c__12137__auto___28136);
var G__28140 = (0);
seq__28120_28124 = G__28137;
chunk__28121_28125 = G__28138;
count__28122_28126 = G__28139;
i__28123_28127 = G__28140;
continue;
}
} else
{var k_28141 = cljs.core.first.call(null,seq__28120_28135__$1);var v_28142 = (b[k_28141]);(a[k_28141] = v_28142);
{
var G__28143 = cljs.core.next.call(null,seq__28120_28135__$1);
var G__28144 = null;
var G__28145 = (0);
var G__28146 = (0);
seq__28120_28124 = G__28143;
chunk__28121_28125 = G__28144;
count__28122_28126 = G__28145;
i__28123_28127 = G__28146;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__28147 = (i + (2));
var G__28148 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28147;
ret = G__28148;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__28149_28153 = cljs.core.seq.call(null,v);var chunk__28150_28154 = null;var count__28151_28155 = (0);var i__28152_28156 = (0);while(true){
if((i__28152_28156 < count__28151_28155))
{var x_28157 = cljs.core._nth.call(null,chunk__28150_28154,i__28152_28156);ret.push(x_28157);
{
var G__28158 = seq__28149_28153;
var G__28159 = chunk__28150_28154;
var G__28160 = count__28151_28155;
var G__28161 = (i__28152_28156 + (1));
seq__28149_28153 = G__28158;
chunk__28150_28154 = G__28159;
count__28151_28155 = G__28160;
i__28152_28156 = G__28161;
continue;
}
} else
{var temp__4126__auto___28162 = cljs.core.seq.call(null,seq__28149_28153);if(temp__4126__auto___28162)
{var seq__28149_28163__$1 = temp__4126__auto___28162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28149_28163__$1))
{var c__12137__auto___28164 = cljs.core.chunk_first.call(null,seq__28149_28163__$1);{
var G__28165 = cljs.core.chunk_rest.call(null,seq__28149_28163__$1);
var G__28166 = c__12137__auto___28164;
var G__28167 = cljs.core.count.call(null,c__12137__auto___28164);
var G__28168 = (0);
seq__28149_28153 = G__28165;
chunk__28150_28154 = G__28166;
count__28151_28155 = G__28167;
i__28152_28156 = G__28168;
continue;
}
} else
{var x_28169 = cljs.core.first.call(null,seq__28149_28163__$1);ret.push(x_28169);
{
var G__28170 = cljs.core.next.call(null,seq__28149_28163__$1);
var G__28171 = null;
var G__28172 = (0);
var G__28173 = (0);
seq__28149_28153 = G__28170;
chunk__28150_28154 = G__28171;
count__28151_28155 = G__28172;
i__28152_28156 = G__28173;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__28174_28178 = cljs.core.seq.call(null,v);var chunk__28175_28179 = null;var count__28176_28180 = (0);var i__28177_28181 = (0);while(true){
if((i__28177_28181 < count__28176_28180))
{var x_28182 = cljs.core._nth.call(null,chunk__28175_28179,i__28177_28181);ret.push(x_28182);
{
var G__28183 = seq__28174_28178;
var G__28184 = chunk__28175_28179;
var G__28185 = count__28176_28180;
var G__28186 = (i__28177_28181 + (1));
seq__28174_28178 = G__28183;
chunk__28175_28179 = G__28184;
count__28176_28180 = G__28185;
i__28177_28181 = G__28186;
continue;
}
} else
{var temp__4126__auto___28187 = cljs.core.seq.call(null,seq__28174_28178);if(temp__4126__auto___28187)
{var seq__28174_28188__$1 = temp__4126__auto___28187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28174_28188__$1))
{var c__12137__auto___28189 = cljs.core.chunk_first.call(null,seq__28174_28188__$1);{
var G__28190 = cljs.core.chunk_rest.call(null,seq__28174_28188__$1);
var G__28191 = c__12137__auto___28189;
var G__28192 = cljs.core.count.call(null,c__12137__auto___28189);
var G__28193 = (0);
seq__28174_28178 = G__28190;
chunk__28175_28179 = G__28191;
count__28176_28180 = G__28192;
i__28177_28181 = G__28193;
continue;
}
} else
{var x_28194 = cljs.core.first.call(null,seq__28174_28188__$1);ret.push(x_28194);
{
var G__28195 = cljs.core.next.call(null,seq__28174_28188__$1);
var G__28196 = null;
var G__28197 = (0);
var G__28198 = (0);
seq__28174_28178 = G__28195;
chunk__28175_28179 = G__28196;
count__28176_28180 = G__28197;
i__28177_28181 = G__28198;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__28199_28203 = cljs.core.seq.call(null,v);var chunk__28200_28204 = null;var count__28201_28205 = (0);var i__28202_28206 = (0);while(true){
if((i__28202_28206 < count__28201_28205))
{var x_28207 = cljs.core._nth.call(null,chunk__28200_28204,i__28202_28206);ret.push(x_28207);
{
var G__28208 = seq__28199_28203;
var G__28209 = chunk__28200_28204;
var G__28210 = count__28201_28205;
var G__28211 = (i__28202_28206 + (1));
seq__28199_28203 = G__28208;
chunk__28200_28204 = G__28209;
count__28201_28205 = G__28210;
i__28202_28206 = G__28211;
continue;
}
} else
{var temp__4126__auto___28212 = cljs.core.seq.call(null,seq__28199_28203);if(temp__4126__auto___28212)
{var seq__28199_28213__$1 = temp__4126__auto___28212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28199_28213__$1))
{var c__12137__auto___28214 = cljs.core.chunk_first.call(null,seq__28199_28213__$1);{
var G__28215 = cljs.core.chunk_rest.call(null,seq__28199_28213__$1);
var G__28216 = c__12137__auto___28214;
var G__28217 = cljs.core.count.call(null,c__12137__auto___28214);
var G__28218 = (0);
seq__28199_28203 = G__28215;
chunk__28200_28204 = G__28216;
count__28201_28205 = G__28217;
i__28202_28206 = G__28218;
continue;
}
} else
{var x_28219 = cljs.core.first.call(null,seq__28199_28213__$1);ret.push(x_28219);
{
var G__28220 = cljs.core.next.call(null,seq__28199_28213__$1);
var G__28221 = null;
var G__28222 = (0);
var G__28223 = (0);
seq__28199_28203 = G__28220;
chunk__28200_28204 = G__28221;
count__28201_28205 = G__28222;
i__28202_28206 = G__28223;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x28233 = cljs.core.clone.call(null,handlers);x28233.forEach = ((function (x28233,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__28234 = cljs.core.seq.call(null,coll);var chunk__28235 = null;var count__28236 = (0);var i__28237 = (0);while(true){
if((i__28237 < count__28236))
{var vec__28238 = cljs.core._nth.call(null,chunk__28235,i__28237);var k = cljs.core.nth.call(null,vec__28238,(0),null);var v = cljs.core.nth.call(null,vec__28238,(1),null);f.call(null,v,k);
{
var G__28240 = seq__28234;
var G__28241 = chunk__28235;
var G__28242 = count__28236;
var G__28243 = (i__28237 + (1));
seq__28234 = G__28240;
chunk__28235 = G__28241;
count__28236 = G__28242;
i__28237 = G__28243;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28234);if(temp__4126__auto__)
{var seq__28234__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28234__$1))
{var c__12137__auto__ = cljs.core.chunk_first.call(null,seq__28234__$1);{
var G__28244 = cljs.core.chunk_rest.call(null,seq__28234__$1);
var G__28245 = c__12137__auto__;
var G__28246 = cljs.core.count.call(null,c__12137__auto__);
var G__28247 = (0);
seq__28234 = G__28244;
chunk__28235 = G__28245;
count__28236 = G__28246;
i__28237 = G__28247;
continue;
}
} else
{var vec__28239 = cljs.core.first.call(null,seq__28234__$1);var k = cljs.core.nth.call(null,vec__28239,(0),null);var v = cljs.core.nth.call(null,vec__28239,(1),null);f.call(null,v,k);
{
var G__28248 = cljs.core.next.call(null,seq__28234__$1);
var G__28249 = null;
var G__28250 = (0);
var G__28251 = (0);
seq__28234 = G__28248;
chunk__28235 = G__28249;
count__28236 = G__28250;
i__28237 = G__28251;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x28233,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x28233;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__28232 = obj;G__28232.push(kfn.call(null,k),vfn.call(null,v));
return G__28232;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t28255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t28255 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta28256){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta28256 = meta28256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t28255.cljs$lang$type = true;
cognitect.transit.t28255.cljs$lang$ctorStr = "cognitect.transit/t28255";
cognitect.transit.t28255.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cognitect.transit/t28255");
});
cognitect.transit.t28255.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t28255.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t28255.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t28255.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t28255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28257){var self__ = this;
var _28257__$1 = this;return self__.meta28256;
});
cognitect.transit.t28255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28257,meta28256__$1){var self__ = this;
var _28257__$1 = this;return (new cognitect.transit.t28255(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta28256__$1));
});
cognitect.transit.__GT_t28255 = (function __GT_t28255(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta28256){return (new cognitect.transit.t28255(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta28256));
});
}
return (new cognitect.transit.t28255(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map