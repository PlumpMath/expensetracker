// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24920 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24920 = (function (f,fn_handler,meta24921){
this.f = f;
this.fn_handler = fn_handler;
this.meta24921 = meta24921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24920.cljs$lang$type = true;
cljs.core.async.t24920.cljs$lang$ctorStr = "cljs.core.async/t24920";
cljs.core.async.t24920.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t24920");
});
cljs.core.async.t24920.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24922){var self__ = this;
var _24922__$1 = this;return self__.meta24921;
});
cljs.core.async.t24920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24922,meta24921__$1){var self__ = this;
var _24922__$1 = this;return (new cljs.core.async.t24920(self__.f,self__.fn_handler,meta24921__$1));
});
cljs.core.async.__GT_t24920 = (function __GT_t24920(f__$1,fn_handler__$1,meta24921){return (new cljs.core.async.t24920(f__$1,fn_handler__$1,meta24921));
});
}
return (new cljs.core.async.t24920(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24924 = buff;if(G__24924)
{var bit__12031__auto__ = null;if(cljs.core.truth_((function (){var or__11381__auto__ = bit__12031__auto__;if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{return G__24924.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24924.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24924);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24924);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_24925 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24925);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24925,ret){
return (function (){return fn1.call(null,val_24925);
});})(val_24925,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12237__auto___24926 = n;var x_24927 = (0);while(true){
if((x_24927 < n__12237__auto___24926))
{(a[x_24927] = (0));
{
var G__24928 = (x_24927 + (1));
x_24927 = G__24928;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24929 = (i + (1));
i = G__24929;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24933 = (function (flag,alt_flag,meta24934){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24934 = meta24934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24933.cljs$lang$type = true;
cljs.core.async.t24933.cljs$lang$ctorStr = "cljs.core.async/t24933";
cljs.core.async.t24933.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t24933");
});})(flag))
;
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24935){var self__ = this;
var _24935__$1 = this;return self__.meta24934;
});})(flag))
;
cljs.core.async.t24933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24935,meta24934__$1){var self__ = this;
var _24935__$1 = this;return (new cljs.core.async.t24933(self__.flag,self__.alt_flag,meta24934__$1));
});})(flag))
;
cljs.core.async.__GT_t24933 = ((function (flag){
return (function __GT_t24933(flag__$1,alt_flag__$1,meta24934){return (new cljs.core.async.t24933(flag__$1,alt_flag__$1,meta24934));
});})(flag))
;
}
return (new cljs.core.async.t24933(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24939 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24939 = (function (cb,flag,alt_handler,meta24940){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24940 = meta24940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24939.cljs$lang$type = true;
cljs.core.async.t24939.cljs$lang$ctorStr = "cljs.core.async/t24939";
cljs.core.async.t24939.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t24939");
});
cljs.core.async.t24939.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24941){var self__ = this;
var _24941__$1 = this;return self__.meta24940;
});
cljs.core.async.t24939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24941,meta24940__$1){var self__ = this;
var _24941__$1 = this;return (new cljs.core.async.t24939(self__.cb,self__.flag,self__.alt_handler,meta24940__$1));
});
cljs.core.async.__GT_t24939 = (function __GT_t24939(cb__$1,flag__$1,alt_handler__$1,meta24940){return (new cljs.core.async.t24939(cb__$1,flag__$1,alt_handler__$1,meta24940));
});
}
return (new cljs.core.async.t24939(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24942_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24942_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24943_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24943_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11381__auto__ = wport;if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24944 = (i + (1));
i = G__24944;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11381__auto__ = ret;if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11369__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11369__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11369__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24945){var map__24947 = p__24945;var map__24947__$1 = ((cljs.core.seq_QMARK_.call(null,map__24947))?cljs.core.apply.call(null,cljs.core.hash_map,map__24947):map__24947);var opts = map__24947__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24945 = null;if (arguments.length > 1) {
  p__24945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24945);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24948){
var ports = cljs.core.first(arglist__24948);
var p__24945 = cljs.core.rest(arglist__24948);
return alts_BANG___delegate(ports,p__24945);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__17810__auto___25043 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___25043){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___25043){
return (function (state_25019){var state_val_25020 = (state_25019[(1)]);if((state_val_25020 === (7)))
{var inst_25015 = (state_25019[(2)]);var state_25019__$1 = state_25019;var statearr_25021_25044 = state_25019__$1;(statearr_25021_25044[(2)] = inst_25015);
(statearr_25021_25044[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (1)))
{var state_25019__$1 = state_25019;var statearr_25022_25045 = state_25019__$1;(statearr_25022_25045[(2)] = null);
(statearr_25022_25045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (4)))
{var inst_24998 = (state_25019[(7)]);var inst_24998__$1 = (state_25019[(2)]);var inst_24999 = (inst_24998__$1 == null);var state_25019__$1 = (function (){var statearr_25023 = state_25019;(statearr_25023[(7)] = inst_24998__$1);
return statearr_25023;
})();if(cljs.core.truth_(inst_24999))
{var statearr_25024_25046 = state_25019__$1;(statearr_25024_25046[(1)] = (5));
} else
{var statearr_25025_25047 = state_25019__$1;(statearr_25025_25047[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (13)))
{var state_25019__$1 = state_25019;var statearr_25026_25048 = state_25019__$1;(statearr_25026_25048[(2)] = null);
(statearr_25026_25048[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (6)))
{var inst_24998 = (state_25019[(7)]);var state_25019__$1 = state_25019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25019__$1,(11),to,inst_24998);
} else
{if((state_val_25020 === (3)))
{var inst_25017 = (state_25019[(2)]);var state_25019__$1 = state_25019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25019__$1,inst_25017);
} else
{if((state_val_25020 === (12)))
{var state_25019__$1 = state_25019;var statearr_25027_25049 = state_25019__$1;(statearr_25027_25049[(2)] = null);
(statearr_25027_25049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (2)))
{var state_25019__$1 = state_25019;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25019__$1,(4),from);
} else
{if((state_val_25020 === (11)))
{var inst_25008 = (state_25019[(2)]);var state_25019__$1 = state_25019;if(cljs.core.truth_(inst_25008))
{var statearr_25028_25050 = state_25019__$1;(statearr_25028_25050[(1)] = (12));
} else
{var statearr_25029_25051 = state_25019__$1;(statearr_25029_25051[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (9)))
{var state_25019__$1 = state_25019;var statearr_25030_25052 = state_25019__$1;(statearr_25030_25052[(2)] = null);
(statearr_25030_25052[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (5)))
{var state_25019__$1 = state_25019;if(cljs.core.truth_(close_QMARK_))
{var statearr_25031_25053 = state_25019__$1;(statearr_25031_25053[(1)] = (8));
} else
{var statearr_25032_25054 = state_25019__$1;(statearr_25032_25054[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (14)))
{var inst_25013 = (state_25019[(2)]);var state_25019__$1 = state_25019;var statearr_25033_25055 = state_25019__$1;(statearr_25033_25055[(2)] = inst_25013);
(statearr_25033_25055[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (10)))
{var inst_25005 = (state_25019[(2)]);var state_25019__$1 = state_25019;var statearr_25034_25056 = state_25019__$1;(statearr_25034_25056[(2)] = inst_25005);
(statearr_25034_25056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25020 === (8)))
{var inst_25002 = cljs.core.async.close_BANG_.call(null,to);var state_25019__$1 = state_25019;var statearr_25035_25057 = state_25019__$1;(statearr_25035_25057[(2)] = inst_25002);
(statearr_25035_25057[(1)] = (10));
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
});})(c__17810__auto___25043))
;return ((function (switch__17795__auto__,c__17810__auto___25043){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25039 = [null,null,null,null,null,null,null,null];(statearr_25039[(0)] = state_machine__17796__auto__);
(statearr_25039[(1)] = (1));
return statearr_25039;
});
var state_machine__17796__auto____1 = (function (state_25019){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25019);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25040){if((e25040 instanceof Object))
{var ex__17799__auto__ = e25040;var statearr_25041_25058 = state_25019;(statearr_25041_25058[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25019);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25040;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25059 = state_25019;
state_25019 = G__25059;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25019){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___25043))
})();var state__17812__auto__ = (function (){var statearr_25042 = f__17811__auto__.call(null);(statearr_25042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___25043);
return statearr_25042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___25043))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__25243){var vec__25244 = p__25243;var v = cljs.core.nth.call(null,vec__25244,(0),null);var p = cljs.core.nth.call(null,vec__25244,(1),null);var job = vec__25244;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__17810__auto___25426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___25426,res,vec__25244,v,p,job,jobs,results){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___25426,res,vec__25244,v,p,job,jobs,results){
return (function (state_25249){var state_val_25250 = (state_25249[(1)]);if((state_val_25250 === (2)))
{var inst_25246 = (state_25249[(2)]);var inst_25247 = cljs.core.async.close_BANG_.call(null,res);var state_25249__$1 = (function (){var statearr_25251 = state_25249;(statearr_25251[(7)] = inst_25246);
return statearr_25251;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25249__$1,inst_25247);
} else
{if((state_val_25250 === (1)))
{var state_25249__$1 = state_25249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25249__$1,(2),res,v);
} else
{return null;
}
}
});})(c__17810__auto___25426,res,vec__25244,v,p,job,jobs,results))
;return ((function (switch__17795__auto__,c__17810__auto___25426,res,vec__25244,v,p,job,jobs,results){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25255 = [null,null,null,null,null,null,null,null];(statearr_25255[(0)] = state_machine__17796__auto__);
(statearr_25255[(1)] = (1));
return statearr_25255;
});
var state_machine__17796__auto____1 = (function (state_25249){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25249);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25256){if((e25256 instanceof Object))
{var ex__17799__auto__ = e25256;var statearr_25257_25427 = state_25249;(statearr_25257_25427[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25249);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25256;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25428 = state_25249;
state_25249 = G__25428;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25249){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___25426,res,vec__25244,v,p,job,jobs,results))
})();var state__17812__auto__ = (function (){var statearr_25258 = f__17811__auto__.call(null);(statearr_25258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___25426);
return statearr_25258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___25426,res,vec__25244,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__25259){var vec__25260 = p__25259;var v = cljs.core.nth.call(null,vec__25260,(0),null);var p = cljs.core.nth.call(null,vec__25260,(1),null);var job = vec__25260;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12237__auto___25429 = n;var __25430 = (0);while(true){
if((__25430 < n__12237__auto___25429))
{var G__25261_25431 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__25261_25431) {
case "async":
var c__17810__auto___25433 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25430,c__17810__auto___25433,G__25261_25431,n__12237__auto___25429,jobs,results,process,async){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (__25430,c__17810__auto___25433,G__25261_25431,n__12237__auto___25429,jobs,results,process,async){
return (function (state_25274){var state_val_25275 = (state_25274[(1)]);if((state_val_25275 === (7)))
{var inst_25270 = (state_25274[(2)]);var state_25274__$1 = state_25274;var statearr_25276_25434 = state_25274__$1;(statearr_25276_25434[(2)] = inst_25270);
(statearr_25276_25434[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25275 === (6)))
{var state_25274__$1 = state_25274;var statearr_25277_25435 = state_25274__$1;(statearr_25277_25435[(2)] = null);
(statearr_25277_25435[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25275 === (5)))
{var state_25274__$1 = state_25274;var statearr_25278_25436 = state_25274__$1;(statearr_25278_25436[(2)] = null);
(statearr_25278_25436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25275 === (4)))
{var inst_25264 = (state_25274[(2)]);var inst_25265 = async.call(null,inst_25264);var state_25274__$1 = state_25274;if(cljs.core.truth_(inst_25265))
{var statearr_25279_25437 = state_25274__$1;(statearr_25279_25437[(1)] = (5));
} else
{var statearr_25280_25438 = state_25274__$1;(statearr_25280_25438[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25275 === (3)))
{var inst_25272 = (state_25274[(2)]);var state_25274__$1 = state_25274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25274__$1,inst_25272);
} else
{if((state_val_25275 === (2)))
{var state_25274__$1 = state_25274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25274__$1,(4),jobs);
} else
{if((state_val_25275 === (1)))
{var state_25274__$1 = state_25274;var statearr_25281_25439 = state_25274__$1;(statearr_25281_25439[(2)] = null);
(statearr_25281_25439[(1)] = (2));
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
});})(__25430,c__17810__auto___25433,G__25261_25431,n__12237__auto___25429,jobs,results,process,async))
;return ((function (__25430,switch__17795__auto__,c__17810__auto___25433,G__25261_25431,n__12237__auto___25429,jobs,results,process,async){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25285 = [null,null,null,null,null,null,null];(statearr_25285[(0)] = state_machine__17796__auto__);
(statearr_25285[(1)] = (1));
return statearr_25285;
});
var state_machine__17796__auto____1 = (function (state_25274){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25274);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25286){if((e25286 instanceof Object))
{var ex__17799__auto__ = e25286;var statearr_25287_25440 = state_25274;(statearr_25287_25440[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25286;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25441 = state_25274;
state_25274 = G__25441;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25274){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(__25430,switch__17795__auto__,c__17810__auto___25433,G__25261_25431,n__12237__auto___25429,jobs,results,process,async))
})();var state__17812__auto__ = (function (){var statearr_25288 = f__17811__auto__.call(null);(statearr_25288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___25433);
return statearr_25288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(__25430,c__17810__auto___25433,G__25261_25431,n__12237__auto___25429,jobs,results,process,async))
);

break;
case "compute":
var c__17810__auto___25442 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25430,c__17810__auto___25442,G__25261_25431,n__12237__auto___25429,jobs,results,process,async){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (__25430,c__17810__auto___25442,G__25261_25431,n__12237__auto___25429,jobs,results,process,async){
return (function (state_25301){var state_val_25302 = (state_25301[(1)]);if((state_val_25302 === (7)))
{var inst_25297 = (state_25301[(2)]);var state_25301__$1 = state_25301;var statearr_25303_25443 = state_25301__$1;(statearr_25303_25443[(2)] = inst_25297);
(statearr_25303_25443[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25302 === (6)))
{var state_25301__$1 = state_25301;var statearr_25304_25444 = state_25301__$1;(statearr_25304_25444[(2)] = null);
(statearr_25304_25444[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25302 === (5)))
{var state_25301__$1 = state_25301;var statearr_25305_25445 = state_25301__$1;(statearr_25305_25445[(2)] = null);
(statearr_25305_25445[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25302 === (4)))
{var inst_25291 = (state_25301[(2)]);var inst_25292 = process.call(null,inst_25291);var state_25301__$1 = state_25301;if(cljs.core.truth_(inst_25292))
{var statearr_25306_25446 = state_25301__$1;(statearr_25306_25446[(1)] = (5));
} else
{var statearr_25307_25447 = state_25301__$1;(statearr_25307_25447[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25302 === (3)))
{var inst_25299 = (state_25301[(2)]);var state_25301__$1 = state_25301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25301__$1,inst_25299);
} else
{if((state_val_25302 === (2)))
{var state_25301__$1 = state_25301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25301__$1,(4),jobs);
} else
{if((state_val_25302 === (1)))
{var state_25301__$1 = state_25301;var statearr_25308_25448 = state_25301__$1;(statearr_25308_25448[(2)] = null);
(statearr_25308_25448[(1)] = (2));
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
});})(__25430,c__17810__auto___25442,G__25261_25431,n__12237__auto___25429,jobs,results,process,async))
;return ((function (__25430,switch__17795__auto__,c__17810__auto___25442,G__25261_25431,n__12237__auto___25429,jobs,results,process,async){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25312 = [null,null,null,null,null,null,null];(statearr_25312[(0)] = state_machine__17796__auto__);
(statearr_25312[(1)] = (1));
return statearr_25312;
});
var state_machine__17796__auto____1 = (function (state_25301){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25301);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25313){if((e25313 instanceof Object))
{var ex__17799__auto__ = e25313;var statearr_25314_25449 = state_25301;(statearr_25314_25449[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25313;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25450 = state_25301;
state_25301 = G__25450;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(__25430,switch__17795__auto__,c__17810__auto___25442,G__25261_25431,n__12237__auto___25429,jobs,results,process,async))
})();var state__17812__auto__ = (function (){var statearr_25315 = f__17811__auto__.call(null);(statearr_25315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___25442);
return statearr_25315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(__25430,c__17810__auto___25442,G__25261_25431,n__12237__auto___25429,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__25451 = (__25430 + (1));
__25430 = G__25451;
continue;
}
} else
{}
break;
}
var c__17810__auto___25452 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___25452,jobs,results,process,async){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___25452,jobs,results,process,async){
return (function (state_25337){var state_val_25338 = (state_25337[(1)]);if((state_val_25338 === (9)))
{var inst_25330 = (state_25337[(2)]);var state_25337__$1 = (function (){var statearr_25339 = state_25337;(statearr_25339[(7)] = inst_25330);
return statearr_25339;
})();var statearr_25340_25453 = state_25337__$1;(statearr_25340_25453[(2)] = null);
(statearr_25340_25453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25338 === (8)))
{var inst_25323 = (state_25337[(8)]);var inst_25328 = (state_25337[(2)]);var state_25337__$1 = (function (){var statearr_25341 = state_25337;(statearr_25341[(9)] = inst_25328);
return statearr_25341;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25337__$1,(9),results,inst_25323);
} else
{if((state_val_25338 === (7)))
{var inst_25333 = (state_25337[(2)]);var state_25337__$1 = state_25337;var statearr_25342_25454 = state_25337__$1;(statearr_25342_25454[(2)] = inst_25333);
(statearr_25342_25454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25338 === (6)))
{var inst_25318 = (state_25337[(10)]);var inst_25323 = (state_25337[(8)]);var inst_25323__$1 = cljs.core.async.chan.call(null,(1));var inst_25324 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25325 = [inst_25318,inst_25323__$1];var inst_25326 = (new cljs.core.PersistentVector(null,2,(5),inst_25324,inst_25325,null));var state_25337__$1 = (function (){var statearr_25343 = state_25337;(statearr_25343[(8)] = inst_25323__$1);
return statearr_25343;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25337__$1,(8),jobs,inst_25326);
} else
{if((state_val_25338 === (5)))
{var inst_25321 = cljs.core.async.close_BANG_.call(null,jobs);var state_25337__$1 = state_25337;var statearr_25344_25455 = state_25337__$1;(statearr_25344_25455[(2)] = inst_25321);
(statearr_25344_25455[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25338 === (4)))
{var inst_25318 = (state_25337[(10)]);var inst_25318__$1 = (state_25337[(2)]);var inst_25319 = (inst_25318__$1 == null);var state_25337__$1 = (function (){var statearr_25345 = state_25337;(statearr_25345[(10)] = inst_25318__$1);
return statearr_25345;
})();if(cljs.core.truth_(inst_25319))
{var statearr_25346_25456 = state_25337__$1;(statearr_25346_25456[(1)] = (5));
} else
{var statearr_25347_25457 = state_25337__$1;(statearr_25347_25457[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25338 === (3)))
{var inst_25335 = (state_25337[(2)]);var state_25337__$1 = state_25337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25337__$1,inst_25335);
} else
{if((state_val_25338 === (2)))
{var state_25337__$1 = state_25337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25337__$1,(4),from);
} else
{if((state_val_25338 === (1)))
{var state_25337__$1 = state_25337;var statearr_25348_25458 = state_25337__$1;(statearr_25348_25458[(2)] = null);
(statearr_25348_25458[(1)] = (2));
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
});})(c__17810__auto___25452,jobs,results,process,async))
;return ((function (switch__17795__auto__,c__17810__auto___25452,jobs,results,process,async){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25352 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25352[(0)] = state_machine__17796__auto__);
(statearr_25352[(1)] = (1));
return statearr_25352;
});
var state_machine__17796__auto____1 = (function (state_25337){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25337);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25353){if((e25353 instanceof Object))
{var ex__17799__auto__ = e25353;var statearr_25354_25459 = state_25337;(statearr_25354_25459[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25337);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25353;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25460 = state_25337;
state_25337 = G__25460;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25337){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___25452,jobs,results,process,async))
})();var state__17812__auto__ = (function (){var statearr_25355 = f__17811__auto__.call(null);(statearr_25355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___25452);
return statearr_25355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___25452,jobs,results,process,async))
);
var c__17810__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto__,jobs,results,process,async){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto__,jobs,results,process,async){
return (function (state_25393){var state_val_25394 = (state_25393[(1)]);if((state_val_25394 === (7)))
{var inst_25389 = (state_25393[(2)]);var state_25393__$1 = state_25393;var statearr_25395_25461 = state_25393__$1;(statearr_25395_25461[(2)] = inst_25389);
(statearr_25395_25461[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (20)))
{var state_25393__$1 = state_25393;var statearr_25396_25462 = state_25393__$1;(statearr_25396_25462[(2)] = null);
(statearr_25396_25462[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (1)))
{var state_25393__$1 = state_25393;var statearr_25397_25463 = state_25393__$1;(statearr_25397_25463[(2)] = null);
(statearr_25397_25463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (4)))
{var inst_25358 = (state_25393[(7)]);var inst_25358__$1 = (state_25393[(2)]);var inst_25359 = (inst_25358__$1 == null);var state_25393__$1 = (function (){var statearr_25398 = state_25393;(statearr_25398[(7)] = inst_25358__$1);
return statearr_25398;
})();if(cljs.core.truth_(inst_25359))
{var statearr_25399_25464 = state_25393__$1;(statearr_25399_25464[(1)] = (5));
} else
{var statearr_25400_25465 = state_25393__$1;(statearr_25400_25465[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (15)))
{var inst_25371 = (state_25393[(8)]);var state_25393__$1 = state_25393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25393__$1,(18),to,inst_25371);
} else
{if((state_val_25394 === (21)))
{var inst_25384 = (state_25393[(2)]);var state_25393__$1 = state_25393;var statearr_25401_25466 = state_25393__$1;(statearr_25401_25466[(2)] = inst_25384);
(statearr_25401_25466[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (13)))
{var inst_25386 = (state_25393[(2)]);var state_25393__$1 = (function (){var statearr_25402 = state_25393;(statearr_25402[(9)] = inst_25386);
return statearr_25402;
})();var statearr_25403_25467 = state_25393__$1;(statearr_25403_25467[(2)] = null);
(statearr_25403_25467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (6)))
{var inst_25358 = (state_25393[(7)]);var state_25393__$1 = state_25393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25393__$1,(11),inst_25358);
} else
{if((state_val_25394 === (17)))
{var inst_25379 = (state_25393[(2)]);var state_25393__$1 = state_25393;if(cljs.core.truth_(inst_25379))
{var statearr_25404_25468 = state_25393__$1;(statearr_25404_25468[(1)] = (19));
} else
{var statearr_25405_25469 = state_25393__$1;(statearr_25405_25469[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (3)))
{var inst_25391 = (state_25393[(2)]);var state_25393__$1 = state_25393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25393__$1,inst_25391);
} else
{if((state_val_25394 === (12)))
{var inst_25368 = (state_25393[(10)]);var state_25393__$1 = state_25393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25393__$1,(14),inst_25368);
} else
{if((state_val_25394 === (2)))
{var state_25393__$1 = state_25393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25393__$1,(4),results);
} else
{if((state_val_25394 === (19)))
{var state_25393__$1 = state_25393;var statearr_25406_25470 = state_25393__$1;(statearr_25406_25470[(2)] = null);
(statearr_25406_25470[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (11)))
{var inst_25368 = (state_25393[(2)]);var state_25393__$1 = (function (){var statearr_25407 = state_25393;(statearr_25407[(10)] = inst_25368);
return statearr_25407;
})();var statearr_25408_25471 = state_25393__$1;(statearr_25408_25471[(2)] = null);
(statearr_25408_25471[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (9)))
{var state_25393__$1 = state_25393;var statearr_25409_25472 = state_25393__$1;(statearr_25409_25472[(2)] = null);
(statearr_25409_25472[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (5)))
{var state_25393__$1 = state_25393;if(cljs.core.truth_(close_QMARK_))
{var statearr_25410_25473 = state_25393__$1;(statearr_25410_25473[(1)] = (8));
} else
{var statearr_25411_25474 = state_25393__$1;(statearr_25411_25474[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (14)))
{var inst_25371 = (state_25393[(8)]);var inst_25373 = (state_25393[(11)]);var inst_25371__$1 = (state_25393[(2)]);var inst_25372 = (inst_25371__$1 == null);var inst_25373__$1 = cljs.core.not.call(null,inst_25372);var state_25393__$1 = (function (){var statearr_25412 = state_25393;(statearr_25412[(8)] = inst_25371__$1);
(statearr_25412[(11)] = inst_25373__$1);
return statearr_25412;
})();if(inst_25373__$1)
{var statearr_25413_25475 = state_25393__$1;(statearr_25413_25475[(1)] = (15));
} else
{var statearr_25414_25476 = state_25393__$1;(statearr_25414_25476[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (16)))
{var inst_25373 = (state_25393[(11)]);var state_25393__$1 = state_25393;var statearr_25415_25477 = state_25393__$1;(statearr_25415_25477[(2)] = inst_25373);
(statearr_25415_25477[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (10)))
{var inst_25365 = (state_25393[(2)]);var state_25393__$1 = state_25393;var statearr_25416_25478 = state_25393__$1;(statearr_25416_25478[(2)] = inst_25365);
(statearr_25416_25478[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (18)))
{var inst_25376 = (state_25393[(2)]);var state_25393__$1 = state_25393;var statearr_25417_25479 = state_25393__$1;(statearr_25417_25479[(2)] = inst_25376);
(statearr_25417_25479[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25394 === (8)))
{var inst_25362 = cljs.core.async.close_BANG_.call(null,to);var state_25393__$1 = state_25393;var statearr_25418_25480 = state_25393__$1;(statearr_25418_25480[(2)] = inst_25362);
(statearr_25418_25480[(1)] = (10));
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
}
}
}
}
}
});})(c__17810__auto__,jobs,results,process,async))
;return ((function (switch__17795__auto__,c__17810__auto__,jobs,results,process,async){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25422 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25422[(0)] = state_machine__17796__auto__);
(statearr_25422[(1)] = (1));
return statearr_25422;
});
var state_machine__17796__auto____1 = (function (state_25393){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25393);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25423){if((e25423 instanceof Object))
{var ex__17799__auto__ = e25423;var statearr_25424_25481 = state_25393;(statearr_25424_25481[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25423;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25482 = state_25393;
state_25393 = G__25482;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25393){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto__,jobs,results,process,async))
})();var state__17812__auto__ = (function (){var statearr_25425 = f__17811__auto__.call(null);(statearr_25425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto__);
return statearr_25425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto__,jobs,results,process,async))
);
return c__17810__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__17810__auto___25583 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___25583,tc,fc){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___25583,tc,fc){
return (function (state_25558){var state_val_25559 = (state_25558[(1)]);if((state_val_25559 === (7)))
{var inst_25554 = (state_25558[(2)]);var state_25558__$1 = state_25558;var statearr_25560_25584 = state_25558__$1;(statearr_25560_25584[(2)] = inst_25554);
(statearr_25560_25584[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (1)))
{var state_25558__$1 = state_25558;var statearr_25561_25585 = state_25558__$1;(statearr_25561_25585[(2)] = null);
(statearr_25561_25585[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (4)))
{var inst_25535 = (state_25558[(7)]);var inst_25535__$1 = (state_25558[(2)]);var inst_25536 = (inst_25535__$1 == null);var state_25558__$1 = (function (){var statearr_25562 = state_25558;(statearr_25562[(7)] = inst_25535__$1);
return statearr_25562;
})();if(cljs.core.truth_(inst_25536))
{var statearr_25563_25586 = state_25558__$1;(statearr_25563_25586[(1)] = (5));
} else
{var statearr_25564_25587 = state_25558__$1;(statearr_25564_25587[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (13)))
{var state_25558__$1 = state_25558;var statearr_25565_25588 = state_25558__$1;(statearr_25565_25588[(2)] = null);
(statearr_25565_25588[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (6)))
{var inst_25535 = (state_25558[(7)]);var inst_25541 = p.call(null,inst_25535);var state_25558__$1 = state_25558;if(cljs.core.truth_(inst_25541))
{var statearr_25566_25589 = state_25558__$1;(statearr_25566_25589[(1)] = (9));
} else
{var statearr_25567_25590 = state_25558__$1;(statearr_25567_25590[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (3)))
{var inst_25556 = (state_25558[(2)]);var state_25558__$1 = state_25558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25558__$1,inst_25556);
} else
{if((state_val_25559 === (12)))
{var state_25558__$1 = state_25558;var statearr_25568_25591 = state_25558__$1;(statearr_25568_25591[(2)] = null);
(statearr_25568_25591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (2)))
{var state_25558__$1 = state_25558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25558__$1,(4),ch);
} else
{if((state_val_25559 === (11)))
{var inst_25535 = (state_25558[(7)]);var inst_25545 = (state_25558[(2)]);var state_25558__$1 = state_25558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25558__$1,(8),inst_25545,inst_25535);
} else
{if((state_val_25559 === (9)))
{var state_25558__$1 = state_25558;var statearr_25569_25592 = state_25558__$1;(statearr_25569_25592[(2)] = tc);
(statearr_25569_25592[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (5)))
{var inst_25538 = cljs.core.async.close_BANG_.call(null,tc);var inst_25539 = cljs.core.async.close_BANG_.call(null,fc);var state_25558__$1 = (function (){var statearr_25570 = state_25558;(statearr_25570[(8)] = inst_25538);
return statearr_25570;
})();var statearr_25571_25593 = state_25558__$1;(statearr_25571_25593[(2)] = inst_25539);
(statearr_25571_25593[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (14)))
{var inst_25552 = (state_25558[(2)]);var state_25558__$1 = state_25558;var statearr_25572_25594 = state_25558__$1;(statearr_25572_25594[(2)] = inst_25552);
(statearr_25572_25594[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (10)))
{var state_25558__$1 = state_25558;var statearr_25573_25595 = state_25558__$1;(statearr_25573_25595[(2)] = fc);
(statearr_25573_25595[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25559 === (8)))
{var inst_25547 = (state_25558[(2)]);var state_25558__$1 = state_25558;if(cljs.core.truth_(inst_25547))
{var statearr_25574_25596 = state_25558__$1;(statearr_25574_25596[(1)] = (12));
} else
{var statearr_25575_25597 = state_25558__$1;(statearr_25575_25597[(1)] = (13));
}
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
});})(c__17810__auto___25583,tc,fc))
;return ((function (switch__17795__auto__,c__17810__auto___25583,tc,fc){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25579 = [null,null,null,null,null,null,null,null,null];(statearr_25579[(0)] = state_machine__17796__auto__);
(statearr_25579[(1)] = (1));
return statearr_25579;
});
var state_machine__17796__auto____1 = (function (state_25558){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25558);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object))
{var ex__17799__auto__ = e25580;var statearr_25581_25598 = state_25558;(statearr_25581_25598[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25580;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25599 = state_25558;
state_25558 = G__25599;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___25583,tc,fc))
})();var state__17812__auto__ = (function (){var statearr_25582 = f__17811__auto__.call(null);(statearr_25582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___25583);
return statearr_25582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___25583,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__17810__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto__){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto__){
return (function (state_25646){var state_val_25647 = (state_25646[(1)]);if((state_val_25647 === (7)))
{var inst_25642 = (state_25646[(2)]);var state_25646__$1 = state_25646;var statearr_25648_25664 = state_25646__$1;(statearr_25648_25664[(2)] = inst_25642);
(statearr_25648_25664[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25647 === (6)))
{var inst_25632 = (state_25646[(7)]);var inst_25635 = (state_25646[(8)]);var inst_25639 = f.call(null,inst_25632,inst_25635);var inst_25632__$1 = inst_25639;var state_25646__$1 = (function (){var statearr_25649 = state_25646;(statearr_25649[(7)] = inst_25632__$1);
return statearr_25649;
})();var statearr_25650_25665 = state_25646__$1;(statearr_25650_25665[(2)] = null);
(statearr_25650_25665[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25647 === (5)))
{var inst_25632 = (state_25646[(7)]);var state_25646__$1 = state_25646;var statearr_25651_25666 = state_25646__$1;(statearr_25651_25666[(2)] = inst_25632);
(statearr_25651_25666[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25647 === (4)))
{var inst_25635 = (state_25646[(8)]);var inst_25635__$1 = (state_25646[(2)]);var inst_25636 = (inst_25635__$1 == null);var state_25646__$1 = (function (){var statearr_25652 = state_25646;(statearr_25652[(8)] = inst_25635__$1);
return statearr_25652;
})();if(cljs.core.truth_(inst_25636))
{var statearr_25653_25667 = state_25646__$1;(statearr_25653_25667[(1)] = (5));
} else
{var statearr_25654_25668 = state_25646__$1;(statearr_25654_25668[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25647 === (3)))
{var inst_25644 = (state_25646[(2)]);var state_25646__$1 = state_25646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25646__$1,inst_25644);
} else
{if((state_val_25647 === (2)))
{var state_25646__$1 = state_25646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25646__$1,(4),ch);
} else
{if((state_val_25647 === (1)))
{var inst_25632 = init;var state_25646__$1 = (function (){var statearr_25655 = state_25646;(statearr_25655[(7)] = inst_25632);
return statearr_25655;
})();var statearr_25656_25669 = state_25646__$1;(statearr_25656_25669[(2)] = null);
(statearr_25656_25669[(1)] = (2));
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
});})(c__17810__auto__))
;return ((function (switch__17795__auto__,c__17810__auto__){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25660 = [null,null,null,null,null,null,null,null,null];(statearr_25660[(0)] = state_machine__17796__auto__);
(statearr_25660[(1)] = (1));
return statearr_25660;
});
var state_machine__17796__auto____1 = (function (state_25646){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25646);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25661){if((e25661 instanceof Object))
{var ex__17799__auto__ = e25661;var statearr_25662_25670 = state_25646;(statearr_25662_25670[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25671 = state_25646;
state_25646 = G__25671;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25646){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto__))
})();var state__17812__auto__ = (function (){var statearr_25663 = f__17811__auto__.call(null);(statearr_25663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto__);
return statearr_25663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto__))
);
return c__17810__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__17810__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto__){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto__){
return (function (state_25745){var state_val_25746 = (state_25745[(1)]);if((state_val_25746 === (7)))
{var inst_25727 = (state_25745[(2)]);var state_25745__$1 = state_25745;var statearr_25747_25770 = state_25745__$1;(statearr_25747_25770[(2)] = inst_25727);
(statearr_25747_25770[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (1)))
{var inst_25721 = cljs.core.seq.call(null,coll);var inst_25722 = inst_25721;var state_25745__$1 = (function (){var statearr_25748 = state_25745;(statearr_25748[(7)] = inst_25722);
return statearr_25748;
})();var statearr_25749_25771 = state_25745__$1;(statearr_25749_25771[(2)] = null);
(statearr_25749_25771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (4)))
{var inst_25722 = (state_25745[(7)]);var inst_25725 = cljs.core.first.call(null,inst_25722);var state_25745__$1 = state_25745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25745__$1,(7),ch,inst_25725);
} else
{if((state_val_25746 === (13)))
{var inst_25739 = (state_25745[(2)]);var state_25745__$1 = state_25745;var statearr_25750_25772 = state_25745__$1;(statearr_25750_25772[(2)] = inst_25739);
(statearr_25750_25772[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (6)))
{var inst_25730 = (state_25745[(2)]);var state_25745__$1 = state_25745;if(cljs.core.truth_(inst_25730))
{var statearr_25751_25773 = state_25745__$1;(statearr_25751_25773[(1)] = (8));
} else
{var statearr_25752_25774 = state_25745__$1;(statearr_25752_25774[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (3)))
{var inst_25743 = (state_25745[(2)]);var state_25745__$1 = state_25745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25745__$1,inst_25743);
} else
{if((state_val_25746 === (12)))
{var state_25745__$1 = state_25745;var statearr_25753_25775 = state_25745__$1;(statearr_25753_25775[(2)] = null);
(statearr_25753_25775[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (2)))
{var inst_25722 = (state_25745[(7)]);var state_25745__$1 = state_25745;if(cljs.core.truth_(inst_25722))
{var statearr_25754_25776 = state_25745__$1;(statearr_25754_25776[(1)] = (4));
} else
{var statearr_25755_25777 = state_25745__$1;(statearr_25755_25777[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (11)))
{var inst_25736 = cljs.core.async.close_BANG_.call(null,ch);var state_25745__$1 = state_25745;var statearr_25756_25778 = state_25745__$1;(statearr_25756_25778[(2)] = inst_25736);
(statearr_25756_25778[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (9)))
{var state_25745__$1 = state_25745;if(cljs.core.truth_(close_QMARK_))
{var statearr_25757_25779 = state_25745__$1;(statearr_25757_25779[(1)] = (11));
} else
{var statearr_25758_25780 = state_25745__$1;(statearr_25758_25780[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (5)))
{var inst_25722 = (state_25745[(7)]);var state_25745__$1 = state_25745;var statearr_25759_25781 = state_25745__$1;(statearr_25759_25781[(2)] = inst_25722);
(statearr_25759_25781[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (10)))
{var inst_25741 = (state_25745[(2)]);var state_25745__$1 = state_25745;var statearr_25760_25782 = state_25745__$1;(statearr_25760_25782[(2)] = inst_25741);
(statearr_25760_25782[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25746 === (8)))
{var inst_25722 = (state_25745[(7)]);var inst_25732 = cljs.core.next.call(null,inst_25722);var inst_25722__$1 = inst_25732;var state_25745__$1 = (function (){var statearr_25761 = state_25745;(statearr_25761[(7)] = inst_25722__$1);
return statearr_25761;
})();var statearr_25762_25783 = state_25745__$1;(statearr_25762_25783[(2)] = null);
(statearr_25762_25783[(1)] = (2));
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
});})(c__17810__auto__))
;return ((function (switch__17795__auto__,c__17810__auto__){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_25766 = [null,null,null,null,null,null,null,null];(statearr_25766[(0)] = state_machine__17796__auto__);
(statearr_25766[(1)] = (1));
return statearr_25766;
});
var state_machine__17796__auto____1 = (function (state_25745){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_25745);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e25767){if((e25767 instanceof Object))
{var ex__17799__auto__ = e25767;var statearr_25768_25784 = state_25745;(statearr_25768_25784[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25745);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25767;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25785 = state_25745;
state_25745 = G__25785;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_25745){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_25745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto__))
})();var state__17812__auto__ = (function (){var statearr_25769 = f__17811__auto__.call(null);(statearr_25769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto__);
return statearr_25769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto__))
);
return c__17810__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj25787 = {};return obj25787;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11369__auto__ = _;if(and__11369__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11369__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12008__auto__ = (((_ == null))?null:_);return (function (){var or__11381__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25789 = {};return obj25789;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26011 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26011 = (function (cs,ch,mult,meta26012){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26012 = meta26012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26011.cljs$lang$type = true;
cljs.core.async.t26011.cljs$lang$ctorStr = "cljs.core.async/t26011";
cljs.core.async.t26011.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t26011");
});})(cs))
;
cljs.core.async.t26011.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26011.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26011.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26011.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26011.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26013){var self__ = this;
var _26013__$1 = this;return self__.meta26012;
});})(cs))
;
cljs.core.async.t26011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26013,meta26012__$1){var self__ = this;
var _26013__$1 = this;return (new cljs.core.async.t26011(self__.cs,self__.ch,self__.mult,meta26012__$1));
});})(cs))
;
cljs.core.async.__GT_t26011 = ((function (cs){
return (function __GT_t26011(cs__$1,ch__$1,mult__$1,meta26012){return (new cljs.core.async.t26011(cs__$1,ch__$1,mult__$1,meta26012));
});})(cs))
;
}
return (new cljs.core.async.t26011(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__17810__auto___26232 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___26232,cs,m,dchan,dctr,done){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___26232,cs,m,dchan,dctr,done){
return (function (state_26144){var state_val_26145 = (state_26144[(1)]);if((state_val_26145 === (7)))
{var inst_26140 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26146_26233 = state_26144__$1;(statearr_26146_26233[(2)] = inst_26140);
(statearr_26146_26233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (20)))
{var inst_26045 = (state_26144[(7)]);var inst_26055 = cljs.core.first.call(null,inst_26045);var inst_26056 = cljs.core.nth.call(null,inst_26055,(0),null);var inst_26057 = cljs.core.nth.call(null,inst_26055,(1),null);var state_26144__$1 = (function (){var statearr_26147 = state_26144;(statearr_26147[(8)] = inst_26056);
return statearr_26147;
})();if(cljs.core.truth_(inst_26057))
{var statearr_26148_26234 = state_26144__$1;(statearr_26148_26234[(1)] = (22));
} else
{var statearr_26149_26235 = state_26144__$1;(statearr_26149_26235[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (27)))
{var inst_26085 = (state_26144[(9)]);var inst_26092 = (state_26144[(10)]);var inst_26016 = (state_26144[(11)]);var inst_26087 = (state_26144[(12)]);var inst_26092__$1 = cljs.core._nth.call(null,inst_26085,inst_26087);var inst_26093 = cljs.core.async.put_BANG_.call(null,inst_26092__$1,inst_26016,done);var state_26144__$1 = (function (){var statearr_26150 = state_26144;(statearr_26150[(10)] = inst_26092__$1);
return statearr_26150;
})();if(cljs.core.truth_(inst_26093))
{var statearr_26151_26236 = state_26144__$1;(statearr_26151_26236[(1)] = (30));
} else
{var statearr_26152_26237 = state_26144__$1;(statearr_26152_26237[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (1)))
{var state_26144__$1 = state_26144;var statearr_26153_26238 = state_26144__$1;(statearr_26153_26238[(2)] = null);
(statearr_26153_26238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (24)))
{var inst_26045 = (state_26144[(7)]);var inst_26062 = (state_26144[(2)]);var inst_26063 = cljs.core.next.call(null,inst_26045);var inst_26025 = inst_26063;var inst_26026 = null;var inst_26027 = (0);var inst_26028 = (0);var state_26144__$1 = (function (){var statearr_26154 = state_26144;(statearr_26154[(13)] = inst_26025);
(statearr_26154[(14)] = inst_26026);
(statearr_26154[(15)] = inst_26027);
(statearr_26154[(16)] = inst_26062);
(statearr_26154[(17)] = inst_26028);
return statearr_26154;
})();var statearr_26155_26239 = state_26144__$1;(statearr_26155_26239[(2)] = null);
(statearr_26155_26239[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (39)))
{var state_26144__$1 = state_26144;var statearr_26159_26240 = state_26144__$1;(statearr_26159_26240[(2)] = null);
(statearr_26159_26240[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (4)))
{var inst_26016 = (state_26144[(11)]);var inst_26016__$1 = (state_26144[(2)]);var inst_26017 = (inst_26016__$1 == null);var state_26144__$1 = (function (){var statearr_26160 = state_26144;(statearr_26160[(11)] = inst_26016__$1);
return statearr_26160;
})();if(cljs.core.truth_(inst_26017))
{var statearr_26161_26241 = state_26144__$1;(statearr_26161_26241[(1)] = (5));
} else
{var statearr_26162_26242 = state_26144__$1;(statearr_26162_26242[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (15)))
{var inst_26025 = (state_26144[(13)]);var inst_26026 = (state_26144[(14)]);var inst_26027 = (state_26144[(15)]);var inst_26028 = (state_26144[(17)]);var inst_26041 = (state_26144[(2)]);var inst_26042 = (inst_26028 + (1));var tmp26156 = inst_26025;var tmp26157 = inst_26026;var tmp26158 = inst_26027;var inst_26025__$1 = tmp26156;var inst_26026__$1 = tmp26157;var inst_26027__$1 = tmp26158;var inst_26028__$1 = inst_26042;var state_26144__$1 = (function (){var statearr_26163 = state_26144;(statearr_26163[(13)] = inst_26025__$1);
(statearr_26163[(14)] = inst_26026__$1);
(statearr_26163[(18)] = inst_26041);
(statearr_26163[(15)] = inst_26027__$1);
(statearr_26163[(17)] = inst_26028__$1);
return statearr_26163;
})();var statearr_26164_26243 = state_26144__$1;(statearr_26164_26243[(2)] = null);
(statearr_26164_26243[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (21)))
{var inst_26066 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26168_26244 = state_26144__$1;(statearr_26168_26244[(2)] = inst_26066);
(statearr_26168_26244[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (31)))
{var inst_26092 = (state_26144[(10)]);var inst_26096 = done.call(null,null);var inst_26097 = cljs.core.async.untap_STAR_.call(null,m,inst_26092);var state_26144__$1 = (function (){var statearr_26169 = state_26144;(statearr_26169[(19)] = inst_26096);
return statearr_26169;
})();var statearr_26170_26245 = state_26144__$1;(statearr_26170_26245[(2)] = inst_26097);
(statearr_26170_26245[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (32)))
{var inst_26085 = (state_26144[(9)]);var inst_26084 = (state_26144[(20)]);var inst_26086 = (state_26144[(21)]);var inst_26087 = (state_26144[(12)]);var inst_26099 = (state_26144[(2)]);var inst_26100 = (inst_26087 + (1));var tmp26165 = inst_26085;var tmp26166 = inst_26084;var tmp26167 = inst_26086;var inst_26084__$1 = tmp26166;var inst_26085__$1 = tmp26165;var inst_26086__$1 = tmp26167;var inst_26087__$1 = inst_26100;var state_26144__$1 = (function (){var statearr_26171 = state_26144;(statearr_26171[(9)] = inst_26085__$1);
(statearr_26171[(22)] = inst_26099);
(statearr_26171[(20)] = inst_26084__$1);
(statearr_26171[(21)] = inst_26086__$1);
(statearr_26171[(12)] = inst_26087__$1);
return statearr_26171;
})();var statearr_26172_26246 = state_26144__$1;(statearr_26172_26246[(2)] = null);
(statearr_26172_26246[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (40)))
{var inst_26112 = (state_26144[(23)]);var inst_26116 = done.call(null,null);var inst_26117 = cljs.core.async.untap_STAR_.call(null,m,inst_26112);var state_26144__$1 = (function (){var statearr_26173 = state_26144;(statearr_26173[(24)] = inst_26116);
return statearr_26173;
})();var statearr_26174_26247 = state_26144__$1;(statearr_26174_26247[(2)] = inst_26117);
(statearr_26174_26247[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (33)))
{var inst_26103 = (state_26144[(25)]);var inst_26105 = cljs.core.chunked_seq_QMARK_.call(null,inst_26103);var state_26144__$1 = state_26144;if(inst_26105)
{var statearr_26175_26248 = state_26144__$1;(statearr_26175_26248[(1)] = (36));
} else
{var statearr_26176_26249 = state_26144__$1;(statearr_26176_26249[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (13)))
{var inst_26035 = (state_26144[(26)]);var inst_26038 = cljs.core.async.close_BANG_.call(null,inst_26035);var state_26144__$1 = state_26144;var statearr_26177_26250 = state_26144__$1;(statearr_26177_26250[(2)] = inst_26038);
(statearr_26177_26250[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (22)))
{var inst_26056 = (state_26144[(8)]);var inst_26059 = cljs.core.async.close_BANG_.call(null,inst_26056);var state_26144__$1 = state_26144;var statearr_26178_26251 = state_26144__$1;(statearr_26178_26251[(2)] = inst_26059);
(statearr_26178_26251[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (36)))
{var inst_26103 = (state_26144[(25)]);var inst_26107 = cljs.core.chunk_first.call(null,inst_26103);var inst_26108 = cljs.core.chunk_rest.call(null,inst_26103);var inst_26109 = cljs.core.count.call(null,inst_26107);var inst_26084 = inst_26108;var inst_26085 = inst_26107;var inst_26086 = inst_26109;var inst_26087 = (0);var state_26144__$1 = (function (){var statearr_26179 = state_26144;(statearr_26179[(9)] = inst_26085);
(statearr_26179[(20)] = inst_26084);
(statearr_26179[(21)] = inst_26086);
(statearr_26179[(12)] = inst_26087);
return statearr_26179;
})();var statearr_26180_26252 = state_26144__$1;(statearr_26180_26252[(2)] = null);
(statearr_26180_26252[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (41)))
{var inst_26103 = (state_26144[(25)]);var inst_26119 = (state_26144[(2)]);var inst_26120 = cljs.core.next.call(null,inst_26103);var inst_26084 = inst_26120;var inst_26085 = null;var inst_26086 = (0);var inst_26087 = (0);var state_26144__$1 = (function (){var statearr_26181 = state_26144;(statearr_26181[(9)] = inst_26085);
(statearr_26181[(20)] = inst_26084);
(statearr_26181[(21)] = inst_26086);
(statearr_26181[(27)] = inst_26119);
(statearr_26181[(12)] = inst_26087);
return statearr_26181;
})();var statearr_26182_26253 = state_26144__$1;(statearr_26182_26253[(2)] = null);
(statearr_26182_26253[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (43)))
{var state_26144__$1 = state_26144;var statearr_26183_26254 = state_26144__$1;(statearr_26183_26254[(2)] = null);
(statearr_26183_26254[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (29)))
{var inst_26128 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26184_26255 = state_26144__$1;(statearr_26184_26255[(2)] = inst_26128);
(statearr_26184_26255[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (44)))
{var inst_26137 = (state_26144[(2)]);var state_26144__$1 = (function (){var statearr_26185 = state_26144;(statearr_26185[(28)] = inst_26137);
return statearr_26185;
})();var statearr_26186_26256 = state_26144__$1;(statearr_26186_26256[(2)] = null);
(statearr_26186_26256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (6)))
{var inst_26076 = (state_26144[(29)]);var inst_26075 = cljs.core.deref.call(null,cs);var inst_26076__$1 = cljs.core.keys.call(null,inst_26075);var inst_26077 = cljs.core.count.call(null,inst_26076__$1);var inst_26078 = cljs.core.reset_BANG_.call(null,dctr,inst_26077);var inst_26083 = cljs.core.seq.call(null,inst_26076__$1);var inst_26084 = inst_26083;var inst_26085 = null;var inst_26086 = (0);var inst_26087 = (0);var state_26144__$1 = (function (){var statearr_26187 = state_26144;(statearr_26187[(29)] = inst_26076__$1);
(statearr_26187[(30)] = inst_26078);
(statearr_26187[(9)] = inst_26085);
(statearr_26187[(20)] = inst_26084);
(statearr_26187[(21)] = inst_26086);
(statearr_26187[(12)] = inst_26087);
return statearr_26187;
})();var statearr_26188_26257 = state_26144__$1;(statearr_26188_26257[(2)] = null);
(statearr_26188_26257[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (28)))
{var inst_26103 = (state_26144[(25)]);var inst_26084 = (state_26144[(20)]);var inst_26103__$1 = cljs.core.seq.call(null,inst_26084);var state_26144__$1 = (function (){var statearr_26189 = state_26144;(statearr_26189[(25)] = inst_26103__$1);
return statearr_26189;
})();if(inst_26103__$1)
{var statearr_26190_26258 = state_26144__$1;(statearr_26190_26258[(1)] = (33));
} else
{var statearr_26191_26259 = state_26144__$1;(statearr_26191_26259[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (25)))
{var inst_26086 = (state_26144[(21)]);var inst_26087 = (state_26144[(12)]);var inst_26089 = (inst_26087 < inst_26086);var inst_26090 = inst_26089;var state_26144__$1 = state_26144;if(cljs.core.truth_(inst_26090))
{var statearr_26192_26260 = state_26144__$1;(statearr_26192_26260[(1)] = (27));
} else
{var statearr_26193_26261 = state_26144__$1;(statearr_26193_26261[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (34)))
{var state_26144__$1 = state_26144;var statearr_26194_26262 = state_26144__$1;(statearr_26194_26262[(2)] = null);
(statearr_26194_26262[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (17)))
{var state_26144__$1 = state_26144;var statearr_26195_26263 = state_26144__$1;(statearr_26195_26263[(2)] = null);
(statearr_26195_26263[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (3)))
{var inst_26142 = (state_26144[(2)]);var state_26144__$1 = state_26144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26144__$1,inst_26142);
} else
{if((state_val_26145 === (12)))
{var inst_26071 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26196_26264 = state_26144__$1;(statearr_26196_26264[(2)] = inst_26071);
(statearr_26196_26264[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (2)))
{var state_26144__$1 = state_26144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26144__$1,(4),ch);
} else
{if((state_val_26145 === (23)))
{var state_26144__$1 = state_26144;var statearr_26197_26265 = state_26144__$1;(statearr_26197_26265[(2)] = null);
(statearr_26197_26265[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (35)))
{var inst_26126 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26198_26266 = state_26144__$1;(statearr_26198_26266[(2)] = inst_26126);
(statearr_26198_26266[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (19)))
{var inst_26045 = (state_26144[(7)]);var inst_26049 = cljs.core.chunk_first.call(null,inst_26045);var inst_26050 = cljs.core.chunk_rest.call(null,inst_26045);var inst_26051 = cljs.core.count.call(null,inst_26049);var inst_26025 = inst_26050;var inst_26026 = inst_26049;var inst_26027 = inst_26051;var inst_26028 = (0);var state_26144__$1 = (function (){var statearr_26199 = state_26144;(statearr_26199[(13)] = inst_26025);
(statearr_26199[(14)] = inst_26026);
(statearr_26199[(15)] = inst_26027);
(statearr_26199[(17)] = inst_26028);
return statearr_26199;
})();var statearr_26200_26267 = state_26144__$1;(statearr_26200_26267[(2)] = null);
(statearr_26200_26267[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (11)))
{var inst_26025 = (state_26144[(13)]);var inst_26045 = (state_26144[(7)]);var inst_26045__$1 = cljs.core.seq.call(null,inst_26025);var state_26144__$1 = (function (){var statearr_26201 = state_26144;(statearr_26201[(7)] = inst_26045__$1);
return statearr_26201;
})();if(inst_26045__$1)
{var statearr_26202_26268 = state_26144__$1;(statearr_26202_26268[(1)] = (16));
} else
{var statearr_26203_26269 = state_26144__$1;(statearr_26203_26269[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (9)))
{var inst_26073 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26204_26270 = state_26144__$1;(statearr_26204_26270[(2)] = inst_26073);
(statearr_26204_26270[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (5)))
{var inst_26023 = cljs.core.deref.call(null,cs);var inst_26024 = cljs.core.seq.call(null,inst_26023);var inst_26025 = inst_26024;var inst_26026 = null;var inst_26027 = (0);var inst_26028 = (0);var state_26144__$1 = (function (){var statearr_26205 = state_26144;(statearr_26205[(13)] = inst_26025);
(statearr_26205[(14)] = inst_26026);
(statearr_26205[(15)] = inst_26027);
(statearr_26205[(17)] = inst_26028);
return statearr_26205;
})();var statearr_26206_26271 = state_26144__$1;(statearr_26206_26271[(2)] = null);
(statearr_26206_26271[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (14)))
{var state_26144__$1 = state_26144;var statearr_26207_26272 = state_26144__$1;(statearr_26207_26272[(2)] = null);
(statearr_26207_26272[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (45)))
{var inst_26134 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26208_26273 = state_26144__$1;(statearr_26208_26273[(2)] = inst_26134);
(statearr_26208_26273[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (26)))
{var inst_26076 = (state_26144[(29)]);var inst_26130 = (state_26144[(2)]);var inst_26131 = cljs.core.seq.call(null,inst_26076);var state_26144__$1 = (function (){var statearr_26209 = state_26144;(statearr_26209[(31)] = inst_26130);
return statearr_26209;
})();if(inst_26131)
{var statearr_26210_26274 = state_26144__$1;(statearr_26210_26274[(1)] = (42));
} else
{var statearr_26211_26275 = state_26144__$1;(statearr_26211_26275[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (16)))
{var inst_26045 = (state_26144[(7)]);var inst_26047 = cljs.core.chunked_seq_QMARK_.call(null,inst_26045);var state_26144__$1 = state_26144;if(inst_26047)
{var statearr_26212_26276 = state_26144__$1;(statearr_26212_26276[(1)] = (19));
} else
{var statearr_26213_26277 = state_26144__$1;(statearr_26213_26277[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (38)))
{var inst_26123 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26214_26278 = state_26144__$1;(statearr_26214_26278[(2)] = inst_26123);
(statearr_26214_26278[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (30)))
{var state_26144__$1 = state_26144;var statearr_26215_26279 = state_26144__$1;(statearr_26215_26279[(2)] = null);
(statearr_26215_26279[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (10)))
{var inst_26026 = (state_26144[(14)]);var inst_26028 = (state_26144[(17)]);var inst_26034 = cljs.core._nth.call(null,inst_26026,inst_26028);var inst_26035 = cljs.core.nth.call(null,inst_26034,(0),null);var inst_26036 = cljs.core.nth.call(null,inst_26034,(1),null);var state_26144__$1 = (function (){var statearr_26216 = state_26144;(statearr_26216[(26)] = inst_26035);
return statearr_26216;
})();if(cljs.core.truth_(inst_26036))
{var statearr_26217_26280 = state_26144__$1;(statearr_26217_26280[(1)] = (13));
} else
{var statearr_26218_26281 = state_26144__$1;(statearr_26218_26281[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (18)))
{var inst_26069 = (state_26144[(2)]);var state_26144__$1 = state_26144;var statearr_26219_26282 = state_26144__$1;(statearr_26219_26282[(2)] = inst_26069);
(statearr_26219_26282[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (42)))
{var state_26144__$1 = state_26144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26144__$1,(45),dchan);
} else
{if((state_val_26145 === (37)))
{var inst_26103 = (state_26144[(25)]);var inst_26112 = (state_26144[(23)]);var inst_26016 = (state_26144[(11)]);var inst_26112__$1 = cljs.core.first.call(null,inst_26103);var inst_26113 = cljs.core.async.put_BANG_.call(null,inst_26112__$1,inst_26016,done);var state_26144__$1 = (function (){var statearr_26220 = state_26144;(statearr_26220[(23)] = inst_26112__$1);
return statearr_26220;
})();if(cljs.core.truth_(inst_26113))
{var statearr_26221_26283 = state_26144__$1;(statearr_26221_26283[(1)] = (39));
} else
{var statearr_26222_26284 = state_26144__$1;(statearr_26222_26284[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26145 === (8)))
{var inst_26027 = (state_26144[(15)]);var inst_26028 = (state_26144[(17)]);var inst_26030 = (inst_26028 < inst_26027);var inst_26031 = inst_26030;var state_26144__$1 = state_26144;if(cljs.core.truth_(inst_26031))
{var statearr_26223_26285 = state_26144__$1;(statearr_26223_26285[(1)] = (10));
} else
{var statearr_26224_26286 = state_26144__$1;(statearr_26224_26286[(1)] = (11));
}
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
});})(c__17810__auto___26232,cs,m,dchan,dctr,done))
;return ((function (switch__17795__auto__,c__17810__auto___26232,cs,m,dchan,dctr,done){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_26228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26228[(0)] = state_machine__17796__auto__);
(statearr_26228[(1)] = (1));
return statearr_26228;
});
var state_machine__17796__auto____1 = (function (state_26144){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_26144);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e26229){if((e26229 instanceof Object))
{var ex__17799__auto__ = e26229;var statearr_26230_26287 = state_26144;(statearr_26230_26287[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26229;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26288 = state_26144;
state_26144 = G__26288;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_26144){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_26144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___26232,cs,m,dchan,dctr,done))
})();var state__17812__auto__ = (function (){var statearr_26231 = f__17811__auto__.call(null);(statearr_26231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___26232);
return statearr_26231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___26232,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj26290 = {};return obj26290;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11369__auto__ = m;if(and__11369__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11369__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12008__auto__ = (((m == null))?null:m);return (function (){var or__11381__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t26410 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26410 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26411){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26411 = meta26411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26410.cljs$lang$type = true;
cljs.core.async.t26410.cljs$lang$ctorStr = "cljs.core.async/t26410";
cljs.core.async.t26410.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t26410");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26410.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26412){var self__ = this;
var _26412__$1 = this;return self__.meta26411;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26412,meta26411__$1){var self__ = this;
var _26412__$1 = this;return (new cljs.core.async.t26410(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26411__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26410 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26410(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26411){return (new cljs.core.async.t26410(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26411));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26410(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__17810__auto___26529 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___26529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___26529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26482){var state_val_26483 = (state_26482[(1)]);if((state_val_26483 === (7)))
{var inst_26426 = (state_26482[(7)]);var inst_26431 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26426);var state_26482__$1 = state_26482;var statearr_26484_26530 = state_26482__$1;(statearr_26484_26530[(2)] = inst_26431);
(statearr_26484_26530[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (20)))
{var inst_26441 = (state_26482[(8)]);var state_26482__$1 = state_26482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(23),out,inst_26441);
} else
{if((state_val_26483 === (1)))
{var inst_26416 = (state_26482[(9)]);var inst_26416__$1 = calc_state.call(null);var inst_26417 = cljs.core.seq_QMARK_.call(null,inst_26416__$1);var state_26482__$1 = (function (){var statearr_26485 = state_26482;(statearr_26485[(9)] = inst_26416__$1);
return statearr_26485;
})();if(inst_26417)
{var statearr_26486_26531 = state_26482__$1;(statearr_26486_26531[(1)] = (2));
} else
{var statearr_26487_26532 = state_26482__$1;(statearr_26487_26532[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (24)))
{var inst_26434 = (state_26482[(10)]);var inst_26426 = inst_26434;var state_26482__$1 = (function (){var statearr_26488 = state_26482;(statearr_26488[(7)] = inst_26426);
return statearr_26488;
})();var statearr_26489_26533 = state_26482__$1;(statearr_26489_26533[(2)] = null);
(statearr_26489_26533[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (4)))
{var inst_26416 = (state_26482[(9)]);var inst_26422 = (state_26482[(2)]);var inst_26423 = cljs.core.get.call(null,inst_26422,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26424 = cljs.core.get.call(null,inst_26422,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26425 = cljs.core.get.call(null,inst_26422,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_26426 = inst_26416;var state_26482__$1 = (function (){var statearr_26490 = state_26482;(statearr_26490[(11)] = inst_26423);
(statearr_26490[(7)] = inst_26426);
(statearr_26490[(12)] = inst_26424);
(statearr_26490[(13)] = inst_26425);
return statearr_26490;
})();var statearr_26491_26534 = state_26482__$1;(statearr_26491_26534[(2)] = null);
(statearr_26491_26534[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (15)))
{var state_26482__$1 = state_26482;var statearr_26492_26535 = state_26482__$1;(statearr_26492_26535[(2)] = null);
(statearr_26492_26535[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (21)))
{var inst_26434 = (state_26482[(10)]);var inst_26426 = inst_26434;var state_26482__$1 = (function (){var statearr_26493 = state_26482;(statearr_26493[(7)] = inst_26426);
return statearr_26493;
})();var statearr_26494_26536 = state_26482__$1;(statearr_26494_26536[(2)] = null);
(statearr_26494_26536[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (13)))
{var inst_26478 = (state_26482[(2)]);var state_26482__$1 = state_26482;var statearr_26495_26537 = state_26482__$1;(statearr_26495_26537[(2)] = inst_26478);
(statearr_26495_26537[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (22)))
{var inst_26476 = (state_26482[(2)]);var state_26482__$1 = state_26482;var statearr_26496_26538 = state_26482__$1;(statearr_26496_26538[(2)] = inst_26476);
(statearr_26496_26538[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (6)))
{var inst_26480 = (state_26482[(2)]);var state_26482__$1 = state_26482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26482__$1,inst_26480);
} else
{if((state_val_26483 === (25)))
{var state_26482__$1 = state_26482;var statearr_26497_26539 = state_26482__$1;(statearr_26497_26539[(2)] = null);
(statearr_26497_26539[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (17)))
{var inst_26456 = (state_26482[(14)]);var state_26482__$1 = state_26482;var statearr_26498_26540 = state_26482__$1;(statearr_26498_26540[(2)] = inst_26456);
(statearr_26498_26540[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (3)))
{var inst_26416 = (state_26482[(9)]);var state_26482__$1 = state_26482;var statearr_26499_26541 = state_26482__$1;(statearr_26499_26541[(2)] = inst_26416);
(statearr_26499_26541[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (12)))
{var inst_26437 = (state_26482[(15)]);var inst_26442 = (state_26482[(16)]);var inst_26456 = (state_26482[(14)]);var inst_26456__$1 = inst_26437.call(null,inst_26442);var state_26482__$1 = (function (){var statearr_26500 = state_26482;(statearr_26500[(14)] = inst_26456__$1);
return statearr_26500;
})();if(cljs.core.truth_(inst_26456__$1))
{var statearr_26501_26542 = state_26482__$1;(statearr_26501_26542[(1)] = (17));
} else
{var statearr_26502_26543 = state_26482__$1;(statearr_26502_26543[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (2)))
{var inst_26416 = (state_26482[(9)]);var inst_26419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26416);var state_26482__$1 = state_26482;var statearr_26503_26544 = state_26482__$1;(statearr_26503_26544[(2)] = inst_26419);
(statearr_26503_26544[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (23)))
{var inst_26467 = (state_26482[(2)]);var state_26482__$1 = state_26482;if(cljs.core.truth_(inst_26467))
{var statearr_26504_26545 = state_26482__$1;(statearr_26504_26545[(1)] = (24));
} else
{var statearr_26505_26546 = state_26482__$1;(statearr_26505_26546[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (19)))
{var inst_26464 = (state_26482[(2)]);var state_26482__$1 = state_26482;if(cljs.core.truth_(inst_26464))
{var statearr_26506_26547 = state_26482__$1;(statearr_26506_26547[(1)] = (20));
} else
{var statearr_26507_26548 = state_26482__$1;(statearr_26507_26548[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (11)))
{var inst_26441 = (state_26482[(8)]);var inst_26447 = (inst_26441 == null);var state_26482__$1 = state_26482;if(cljs.core.truth_(inst_26447))
{var statearr_26508_26549 = state_26482__$1;(statearr_26508_26549[(1)] = (14));
} else
{var statearr_26509_26550 = state_26482__$1;(statearr_26509_26550[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (9)))
{var inst_26434 = (state_26482[(10)]);var inst_26434__$1 = (state_26482[(2)]);var inst_26435 = cljs.core.get.call(null,inst_26434__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26436 = cljs.core.get.call(null,inst_26434__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26437 = cljs.core.get.call(null,inst_26434__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_26482__$1 = (function (){var statearr_26510 = state_26482;(statearr_26510[(15)] = inst_26437);
(statearr_26510[(10)] = inst_26434__$1);
(statearr_26510[(17)] = inst_26436);
return statearr_26510;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26482__$1,(10),inst_26435);
} else
{if((state_val_26483 === (5)))
{var inst_26426 = (state_26482[(7)]);var inst_26429 = cljs.core.seq_QMARK_.call(null,inst_26426);var state_26482__$1 = state_26482;if(inst_26429)
{var statearr_26511_26551 = state_26482__$1;(statearr_26511_26551[(1)] = (7));
} else
{var statearr_26512_26552 = state_26482__$1;(statearr_26512_26552[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (14)))
{var inst_26442 = (state_26482[(16)]);var inst_26449 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26442);var state_26482__$1 = state_26482;var statearr_26513_26553 = state_26482__$1;(statearr_26513_26553[(2)] = inst_26449);
(statearr_26513_26553[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (26)))
{var inst_26472 = (state_26482[(2)]);var state_26482__$1 = state_26482;var statearr_26514_26554 = state_26482__$1;(statearr_26514_26554[(2)] = inst_26472);
(statearr_26514_26554[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (16)))
{var inst_26452 = (state_26482[(2)]);var inst_26453 = calc_state.call(null);var inst_26426 = inst_26453;var state_26482__$1 = (function (){var statearr_26515 = state_26482;(statearr_26515[(7)] = inst_26426);
(statearr_26515[(18)] = inst_26452);
return statearr_26515;
})();var statearr_26516_26555 = state_26482__$1;(statearr_26516_26555[(2)] = null);
(statearr_26516_26555[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (10)))
{var inst_26441 = (state_26482[(8)]);var inst_26442 = (state_26482[(16)]);var inst_26440 = (state_26482[(2)]);var inst_26441__$1 = cljs.core.nth.call(null,inst_26440,(0),null);var inst_26442__$1 = cljs.core.nth.call(null,inst_26440,(1),null);var inst_26443 = (inst_26441__$1 == null);var inst_26444 = cljs.core._EQ_.call(null,inst_26442__$1,change);var inst_26445 = (inst_26443) || (inst_26444);var state_26482__$1 = (function (){var statearr_26517 = state_26482;(statearr_26517[(8)] = inst_26441__$1);
(statearr_26517[(16)] = inst_26442__$1);
return statearr_26517;
})();if(cljs.core.truth_(inst_26445))
{var statearr_26518_26556 = state_26482__$1;(statearr_26518_26556[(1)] = (11));
} else
{var statearr_26519_26557 = state_26482__$1;(statearr_26519_26557[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (18)))
{var inst_26437 = (state_26482[(15)]);var inst_26442 = (state_26482[(16)]);var inst_26436 = (state_26482[(17)]);var inst_26459 = cljs.core.empty_QMARK_.call(null,inst_26437);var inst_26460 = inst_26436.call(null,inst_26442);var inst_26461 = cljs.core.not.call(null,inst_26460);var inst_26462 = (inst_26459) && (inst_26461);var state_26482__$1 = state_26482;var statearr_26520_26558 = state_26482__$1;(statearr_26520_26558[(2)] = inst_26462);
(statearr_26520_26558[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26483 === (8)))
{var inst_26426 = (state_26482[(7)]);var state_26482__$1 = state_26482;var statearr_26521_26559 = state_26482__$1;(statearr_26521_26559[(2)] = inst_26426);
(statearr_26521_26559[(1)] = (9));
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
});})(c__17810__auto___26529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__17795__auto__,c__17810__auto___26529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_26525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26525[(0)] = state_machine__17796__auto__);
(statearr_26525[(1)] = (1));
return statearr_26525;
});
var state_machine__17796__auto____1 = (function (state_26482){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_26482);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e26526){if((e26526 instanceof Object))
{var ex__17799__auto__ = e26526;var statearr_26527_26560 = state_26482;(statearr_26527_26560[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26526;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26561 = state_26482;
state_26482 = G__26561;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_26482){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_26482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___26529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__17812__auto__ = (function (){var statearr_26528 = f__17811__auto__.call(null);(statearr_26528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___26529);
return statearr_26528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___26529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj26563 = {};return obj26563;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11369__auto__ = p;if(and__11369__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11369__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12008__auto__ = (((p == null))?null:p);return (function (){var or__11381__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11369__auto__ = p;if(and__11369__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11369__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12008__auto__ = (((p == null))?null:p);return (function (){var or__11381__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11369__auto__ = p;if(and__11369__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11369__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12008__auto__ = (((p == null))?null:p);return (function (){var or__11381__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11369__auto__ = p;if(and__11369__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11369__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12008__auto__ = (((p == null))?null:p);return (function (){var or__11381__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12008__auto__)]);if(or__11381__auto__)
{return or__11381__auto__;
} else
{var or__11381__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11381__auto____$1)
{return or__11381__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11381__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11381__auto__,mults){
return (function (p1__26564_SHARP_){if(cljs.core.truth_(p1__26564_SHARP_.call(null,topic)))
{return p1__26564_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26564_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11381__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26687 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26688){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26688 = meta26688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26687.cljs$lang$type = true;
cljs.core.async.t26687.cljs$lang$ctorStr = "cljs.core.async/t26687";
cljs.core.async.t26687.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t26687");
});})(mults,ensure_mult))
;
cljs.core.async.t26687.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26687.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26687.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26687.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26689){var self__ = this;
var _26689__$1 = this;return self__.meta26688;
});})(mults,ensure_mult))
;
cljs.core.async.t26687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26689,meta26688__$1){var self__ = this;
var _26689__$1 = this;return (new cljs.core.async.t26687(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26688__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26687 = ((function (mults,ensure_mult){
return (function __GT_t26687(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26688){return (new cljs.core.async.t26687(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26688));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26687(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__17810__auto___26809 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___26809,mults,ensure_mult,p){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___26809,mults,ensure_mult,p){
return (function (state_26761){var state_val_26762 = (state_26761[(1)]);if((state_val_26762 === (7)))
{var inst_26757 = (state_26761[(2)]);var state_26761__$1 = state_26761;var statearr_26763_26810 = state_26761__$1;(statearr_26763_26810[(2)] = inst_26757);
(statearr_26763_26810[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (20)))
{var state_26761__$1 = state_26761;var statearr_26764_26811 = state_26761__$1;(statearr_26764_26811[(2)] = null);
(statearr_26764_26811[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (1)))
{var state_26761__$1 = state_26761;var statearr_26765_26812 = state_26761__$1;(statearr_26765_26812[(2)] = null);
(statearr_26765_26812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (24)))
{var inst_26740 = (state_26761[(7)]);var inst_26749 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26740);var state_26761__$1 = state_26761;var statearr_26766_26813 = state_26761__$1;(statearr_26766_26813[(2)] = inst_26749);
(statearr_26766_26813[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (4)))
{var inst_26692 = (state_26761[(8)]);var inst_26692__$1 = (state_26761[(2)]);var inst_26693 = (inst_26692__$1 == null);var state_26761__$1 = (function (){var statearr_26767 = state_26761;(statearr_26767[(8)] = inst_26692__$1);
return statearr_26767;
})();if(cljs.core.truth_(inst_26693))
{var statearr_26768_26814 = state_26761__$1;(statearr_26768_26814[(1)] = (5));
} else
{var statearr_26769_26815 = state_26761__$1;(statearr_26769_26815[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (15)))
{var inst_26734 = (state_26761[(2)]);var state_26761__$1 = state_26761;var statearr_26770_26816 = state_26761__$1;(statearr_26770_26816[(2)] = inst_26734);
(statearr_26770_26816[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (21)))
{var inst_26754 = (state_26761[(2)]);var state_26761__$1 = (function (){var statearr_26771 = state_26761;(statearr_26771[(9)] = inst_26754);
return statearr_26771;
})();var statearr_26772_26817 = state_26761__$1;(statearr_26772_26817[(2)] = null);
(statearr_26772_26817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (13)))
{var inst_26716 = (state_26761[(10)]);var inst_26718 = cljs.core.chunked_seq_QMARK_.call(null,inst_26716);var state_26761__$1 = state_26761;if(inst_26718)
{var statearr_26773_26818 = state_26761__$1;(statearr_26773_26818[(1)] = (16));
} else
{var statearr_26774_26819 = state_26761__$1;(statearr_26774_26819[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (22)))
{var inst_26746 = (state_26761[(2)]);var state_26761__$1 = state_26761;if(cljs.core.truth_(inst_26746))
{var statearr_26775_26820 = state_26761__$1;(statearr_26775_26820[(1)] = (23));
} else
{var statearr_26776_26821 = state_26761__$1;(statearr_26776_26821[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (6)))
{var inst_26692 = (state_26761[(8)]);var inst_26740 = (state_26761[(7)]);var inst_26742 = (state_26761[(11)]);var inst_26740__$1 = topic_fn.call(null,inst_26692);var inst_26741 = cljs.core.deref.call(null,mults);var inst_26742__$1 = cljs.core.get.call(null,inst_26741,inst_26740__$1);var state_26761__$1 = (function (){var statearr_26777 = state_26761;(statearr_26777[(7)] = inst_26740__$1);
(statearr_26777[(11)] = inst_26742__$1);
return statearr_26777;
})();if(cljs.core.truth_(inst_26742__$1))
{var statearr_26778_26822 = state_26761__$1;(statearr_26778_26822[(1)] = (19));
} else
{var statearr_26779_26823 = state_26761__$1;(statearr_26779_26823[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (25)))
{var inst_26751 = (state_26761[(2)]);var state_26761__$1 = state_26761;var statearr_26780_26824 = state_26761__$1;(statearr_26780_26824[(2)] = inst_26751);
(statearr_26780_26824[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (17)))
{var inst_26716 = (state_26761[(10)]);var inst_26725 = cljs.core.first.call(null,inst_26716);var inst_26726 = cljs.core.async.muxch_STAR_.call(null,inst_26725);var inst_26727 = cljs.core.async.close_BANG_.call(null,inst_26726);var inst_26728 = cljs.core.next.call(null,inst_26716);var inst_26702 = inst_26728;var inst_26703 = null;var inst_26704 = (0);var inst_26705 = (0);var state_26761__$1 = (function (){var statearr_26781 = state_26761;(statearr_26781[(12)] = inst_26702);
(statearr_26781[(13)] = inst_26727);
(statearr_26781[(14)] = inst_26703);
(statearr_26781[(15)] = inst_26705);
(statearr_26781[(16)] = inst_26704);
return statearr_26781;
})();var statearr_26782_26825 = state_26761__$1;(statearr_26782_26825[(2)] = null);
(statearr_26782_26825[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (3)))
{var inst_26759 = (state_26761[(2)]);var state_26761__$1 = state_26761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26761__$1,inst_26759);
} else
{if((state_val_26762 === (12)))
{var inst_26736 = (state_26761[(2)]);var state_26761__$1 = state_26761;var statearr_26783_26826 = state_26761__$1;(statearr_26783_26826[(2)] = inst_26736);
(statearr_26783_26826[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (2)))
{var state_26761__$1 = state_26761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26761__$1,(4),ch);
} else
{if((state_val_26762 === (23)))
{var state_26761__$1 = state_26761;var statearr_26784_26827 = state_26761__$1;(statearr_26784_26827[(2)] = null);
(statearr_26784_26827[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (19)))
{var inst_26692 = (state_26761[(8)]);var inst_26742 = (state_26761[(11)]);var inst_26744 = cljs.core.async.muxch_STAR_.call(null,inst_26742);var state_26761__$1 = state_26761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26761__$1,(22),inst_26744,inst_26692);
} else
{if((state_val_26762 === (11)))
{var inst_26702 = (state_26761[(12)]);var inst_26716 = (state_26761[(10)]);var inst_26716__$1 = cljs.core.seq.call(null,inst_26702);var state_26761__$1 = (function (){var statearr_26785 = state_26761;(statearr_26785[(10)] = inst_26716__$1);
return statearr_26785;
})();if(inst_26716__$1)
{var statearr_26786_26828 = state_26761__$1;(statearr_26786_26828[(1)] = (13));
} else
{var statearr_26787_26829 = state_26761__$1;(statearr_26787_26829[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (9)))
{var inst_26738 = (state_26761[(2)]);var state_26761__$1 = state_26761;var statearr_26788_26830 = state_26761__$1;(statearr_26788_26830[(2)] = inst_26738);
(statearr_26788_26830[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (5)))
{var inst_26699 = cljs.core.deref.call(null,mults);var inst_26700 = cljs.core.vals.call(null,inst_26699);var inst_26701 = cljs.core.seq.call(null,inst_26700);var inst_26702 = inst_26701;var inst_26703 = null;var inst_26704 = (0);var inst_26705 = (0);var state_26761__$1 = (function (){var statearr_26789 = state_26761;(statearr_26789[(12)] = inst_26702);
(statearr_26789[(14)] = inst_26703);
(statearr_26789[(15)] = inst_26705);
(statearr_26789[(16)] = inst_26704);
return statearr_26789;
})();var statearr_26790_26831 = state_26761__$1;(statearr_26790_26831[(2)] = null);
(statearr_26790_26831[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (14)))
{var state_26761__$1 = state_26761;var statearr_26794_26832 = state_26761__$1;(statearr_26794_26832[(2)] = null);
(statearr_26794_26832[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (16)))
{var inst_26716 = (state_26761[(10)]);var inst_26720 = cljs.core.chunk_first.call(null,inst_26716);var inst_26721 = cljs.core.chunk_rest.call(null,inst_26716);var inst_26722 = cljs.core.count.call(null,inst_26720);var inst_26702 = inst_26721;var inst_26703 = inst_26720;var inst_26704 = inst_26722;var inst_26705 = (0);var state_26761__$1 = (function (){var statearr_26795 = state_26761;(statearr_26795[(12)] = inst_26702);
(statearr_26795[(14)] = inst_26703);
(statearr_26795[(15)] = inst_26705);
(statearr_26795[(16)] = inst_26704);
return statearr_26795;
})();var statearr_26796_26833 = state_26761__$1;(statearr_26796_26833[(2)] = null);
(statearr_26796_26833[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (10)))
{var inst_26702 = (state_26761[(12)]);var inst_26703 = (state_26761[(14)]);var inst_26705 = (state_26761[(15)]);var inst_26704 = (state_26761[(16)]);var inst_26710 = cljs.core._nth.call(null,inst_26703,inst_26705);var inst_26711 = cljs.core.async.muxch_STAR_.call(null,inst_26710);var inst_26712 = cljs.core.async.close_BANG_.call(null,inst_26711);var inst_26713 = (inst_26705 + (1));var tmp26791 = inst_26702;var tmp26792 = inst_26703;var tmp26793 = inst_26704;var inst_26702__$1 = tmp26791;var inst_26703__$1 = tmp26792;var inst_26704__$1 = tmp26793;var inst_26705__$1 = inst_26713;var state_26761__$1 = (function (){var statearr_26797 = state_26761;(statearr_26797[(17)] = inst_26712);
(statearr_26797[(12)] = inst_26702__$1);
(statearr_26797[(14)] = inst_26703__$1);
(statearr_26797[(15)] = inst_26705__$1);
(statearr_26797[(16)] = inst_26704__$1);
return statearr_26797;
})();var statearr_26798_26834 = state_26761__$1;(statearr_26798_26834[(2)] = null);
(statearr_26798_26834[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (18)))
{var inst_26731 = (state_26761[(2)]);var state_26761__$1 = state_26761;var statearr_26799_26835 = state_26761__$1;(statearr_26799_26835[(2)] = inst_26731);
(statearr_26799_26835[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26762 === (8)))
{var inst_26705 = (state_26761[(15)]);var inst_26704 = (state_26761[(16)]);var inst_26707 = (inst_26705 < inst_26704);var inst_26708 = inst_26707;var state_26761__$1 = state_26761;if(cljs.core.truth_(inst_26708))
{var statearr_26800_26836 = state_26761__$1;(statearr_26800_26836[(1)] = (10));
} else
{var statearr_26801_26837 = state_26761__$1;(statearr_26801_26837[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
});})(c__17810__auto___26809,mults,ensure_mult,p))
;return ((function (switch__17795__auto__,c__17810__auto___26809,mults,ensure_mult,p){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26805[(0)] = state_machine__17796__auto__);
(statearr_26805[(1)] = (1));
return statearr_26805;
});
var state_machine__17796__auto____1 = (function (state_26761){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_26761);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object))
{var ex__17799__auto__ = e26806;var statearr_26807_26838 = state_26761;(statearr_26807_26838[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26806;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26839 = state_26761;
state_26761 = G__26839;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_26761){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_26761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___26809,mults,ensure_mult,p))
})();var state__17812__auto__ = (function (){var statearr_26808 = f__17811__auto__.call(null);(statearr_26808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___26809);
return statearr_26808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___26809,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__17810__auto___26976 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___26976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___26976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26946){var state_val_26947 = (state_26946[(1)]);if((state_val_26947 === (7)))
{var state_26946__$1 = state_26946;var statearr_26948_26977 = state_26946__$1;(statearr_26948_26977[(2)] = null);
(statearr_26948_26977[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (1)))
{var state_26946__$1 = state_26946;var statearr_26949_26978 = state_26946__$1;(statearr_26949_26978[(2)] = null);
(statearr_26949_26978[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (4)))
{var inst_26910 = (state_26946[(7)]);var inst_26912 = (inst_26910 < cnt);var state_26946__$1 = state_26946;if(cljs.core.truth_(inst_26912))
{var statearr_26950_26979 = state_26946__$1;(statearr_26950_26979[(1)] = (6));
} else
{var statearr_26951_26980 = state_26946__$1;(statearr_26951_26980[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (15)))
{var inst_26942 = (state_26946[(2)]);var state_26946__$1 = state_26946;var statearr_26952_26981 = state_26946__$1;(statearr_26952_26981[(2)] = inst_26942);
(statearr_26952_26981[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (13)))
{var inst_26935 = cljs.core.async.close_BANG_.call(null,out);var state_26946__$1 = state_26946;var statearr_26953_26982 = state_26946__$1;(statearr_26953_26982[(2)] = inst_26935);
(statearr_26953_26982[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (6)))
{var state_26946__$1 = state_26946;var statearr_26954_26983 = state_26946__$1;(statearr_26954_26983[(2)] = null);
(statearr_26954_26983[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (3)))
{var inst_26944 = (state_26946[(2)]);var state_26946__$1 = state_26946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26946__$1,inst_26944);
} else
{if((state_val_26947 === (12)))
{var inst_26932 = (state_26946[(8)]);var inst_26932__$1 = (state_26946[(2)]);var inst_26933 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26932__$1);var state_26946__$1 = (function (){var statearr_26955 = state_26946;(statearr_26955[(8)] = inst_26932__$1);
return statearr_26955;
})();if(cljs.core.truth_(inst_26933))
{var statearr_26956_26984 = state_26946__$1;(statearr_26956_26984[(1)] = (13));
} else
{var statearr_26957_26985 = state_26946__$1;(statearr_26957_26985[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (2)))
{var inst_26909 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26910 = (0);var state_26946__$1 = (function (){var statearr_26958 = state_26946;(statearr_26958[(7)] = inst_26910);
(statearr_26958[(9)] = inst_26909);
return statearr_26958;
})();var statearr_26959_26986 = state_26946__$1;(statearr_26959_26986[(2)] = null);
(statearr_26959_26986[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (11)))
{var inst_26910 = (state_26946[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26946,(10),Object,null,(9));var inst_26919 = chs__$1.call(null,inst_26910);var inst_26920 = done.call(null,inst_26910);var inst_26921 = cljs.core.async.take_BANG_.call(null,inst_26919,inst_26920);var state_26946__$1 = state_26946;var statearr_26960_26987 = state_26946__$1;(statearr_26960_26987[(2)] = inst_26921);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26946__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (9)))
{var inst_26910 = (state_26946[(7)]);var inst_26923 = (state_26946[(2)]);var inst_26924 = (inst_26910 + (1));var inst_26910__$1 = inst_26924;var state_26946__$1 = (function (){var statearr_26961 = state_26946;(statearr_26961[(7)] = inst_26910__$1);
(statearr_26961[(10)] = inst_26923);
return statearr_26961;
})();var statearr_26962_26988 = state_26946__$1;(statearr_26962_26988[(2)] = null);
(statearr_26962_26988[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (5)))
{var inst_26930 = (state_26946[(2)]);var state_26946__$1 = (function (){var statearr_26963 = state_26946;(statearr_26963[(11)] = inst_26930);
return statearr_26963;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26946__$1,(12),dchan);
} else
{if((state_val_26947 === (14)))
{var inst_26932 = (state_26946[(8)]);var inst_26937 = cljs.core.apply.call(null,f,inst_26932);var state_26946__$1 = state_26946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26946__$1,(16),out,inst_26937);
} else
{if((state_val_26947 === (16)))
{var inst_26939 = (state_26946[(2)]);var state_26946__$1 = (function (){var statearr_26964 = state_26946;(statearr_26964[(12)] = inst_26939);
return statearr_26964;
})();var statearr_26965_26989 = state_26946__$1;(statearr_26965_26989[(2)] = null);
(statearr_26965_26989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (10)))
{var inst_26914 = (state_26946[(2)]);var inst_26915 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26946__$1 = (function (){var statearr_26966 = state_26946;(statearr_26966[(13)] = inst_26914);
return statearr_26966;
})();var statearr_26967_26990 = state_26946__$1;(statearr_26967_26990[(2)] = inst_26915);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26946__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26947 === (8)))
{var inst_26928 = (state_26946[(2)]);var state_26946__$1 = state_26946;var statearr_26968_26991 = state_26946__$1;(statearr_26968_26991[(2)] = inst_26928);
(statearr_26968_26991[(1)] = (5));
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
});})(c__17810__auto___26976,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__17795__auto__,c__17810__auto___26976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_26972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26972[(0)] = state_machine__17796__auto__);
(statearr_26972[(1)] = (1));
return statearr_26972;
});
var state_machine__17796__auto____1 = (function (state_26946){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_26946);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e26973){if((e26973 instanceof Object))
{var ex__17799__auto__ = e26973;var statearr_26974_26992 = state_26946;(statearr_26974_26992[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26973;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26993 = state_26946;
state_26946 = G__26993;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_26946){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_26946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___26976,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__17812__auto__ = (function (){var statearr_26975 = f__17811__auto__.call(null);(statearr_26975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___26976);
return statearr_26975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___26976,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17810__auto___27101 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___27101,out){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___27101,out){
return (function (state_27077){var state_val_27078 = (state_27077[(1)]);if((state_val_27078 === (7)))
{var inst_27056 = (state_27077[(7)]);var inst_27057 = (state_27077[(8)]);var inst_27056__$1 = (state_27077[(2)]);var inst_27057__$1 = cljs.core.nth.call(null,inst_27056__$1,(0),null);var inst_27058 = cljs.core.nth.call(null,inst_27056__$1,(1),null);var inst_27059 = (inst_27057__$1 == null);var state_27077__$1 = (function (){var statearr_27079 = state_27077;(statearr_27079[(9)] = inst_27058);
(statearr_27079[(7)] = inst_27056__$1);
(statearr_27079[(8)] = inst_27057__$1);
return statearr_27079;
})();if(cljs.core.truth_(inst_27059))
{var statearr_27080_27102 = state_27077__$1;(statearr_27080_27102[(1)] = (8));
} else
{var statearr_27081_27103 = state_27077__$1;(statearr_27081_27103[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27078 === (1)))
{var inst_27048 = cljs.core.vec.call(null,chs);var inst_27049 = inst_27048;var state_27077__$1 = (function (){var statearr_27082 = state_27077;(statearr_27082[(10)] = inst_27049);
return statearr_27082;
})();var statearr_27083_27104 = state_27077__$1;(statearr_27083_27104[(2)] = null);
(statearr_27083_27104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27078 === (4)))
{var inst_27049 = (state_27077[(10)]);var state_27077__$1 = state_27077;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27077__$1,(7),inst_27049);
} else
{if((state_val_27078 === (6)))
{var inst_27073 = (state_27077[(2)]);var state_27077__$1 = state_27077;var statearr_27084_27105 = state_27077__$1;(statearr_27084_27105[(2)] = inst_27073);
(statearr_27084_27105[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27078 === (3)))
{var inst_27075 = (state_27077[(2)]);var state_27077__$1 = state_27077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27077__$1,inst_27075);
} else
{if((state_val_27078 === (2)))
{var inst_27049 = (state_27077[(10)]);var inst_27051 = cljs.core.count.call(null,inst_27049);var inst_27052 = (inst_27051 > (0));var state_27077__$1 = state_27077;if(cljs.core.truth_(inst_27052))
{var statearr_27086_27106 = state_27077__$1;(statearr_27086_27106[(1)] = (4));
} else
{var statearr_27087_27107 = state_27077__$1;(statearr_27087_27107[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27078 === (11)))
{var inst_27049 = (state_27077[(10)]);var inst_27066 = (state_27077[(2)]);var tmp27085 = inst_27049;var inst_27049__$1 = tmp27085;var state_27077__$1 = (function (){var statearr_27088 = state_27077;(statearr_27088[(11)] = inst_27066);
(statearr_27088[(10)] = inst_27049__$1);
return statearr_27088;
})();var statearr_27089_27108 = state_27077__$1;(statearr_27089_27108[(2)] = null);
(statearr_27089_27108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27078 === (9)))
{var inst_27057 = (state_27077[(8)]);var state_27077__$1 = state_27077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27077__$1,(11),out,inst_27057);
} else
{if((state_val_27078 === (5)))
{var inst_27071 = cljs.core.async.close_BANG_.call(null,out);var state_27077__$1 = state_27077;var statearr_27090_27109 = state_27077__$1;(statearr_27090_27109[(2)] = inst_27071);
(statearr_27090_27109[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27078 === (10)))
{var inst_27069 = (state_27077[(2)]);var state_27077__$1 = state_27077;var statearr_27091_27110 = state_27077__$1;(statearr_27091_27110[(2)] = inst_27069);
(statearr_27091_27110[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27078 === (8)))
{var inst_27058 = (state_27077[(9)]);var inst_27056 = (state_27077[(7)]);var inst_27057 = (state_27077[(8)]);var inst_27049 = (state_27077[(10)]);var inst_27061 = (function (){var c = inst_27058;var v = inst_27057;var vec__27054 = inst_27056;var cs = inst_27049;return ((function (c,v,vec__27054,cs,inst_27058,inst_27056,inst_27057,inst_27049,state_val_27078,c__17810__auto___27101,out){
return (function (p1__26994_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26994_SHARP_);
});
;})(c,v,vec__27054,cs,inst_27058,inst_27056,inst_27057,inst_27049,state_val_27078,c__17810__auto___27101,out))
})();var inst_27062 = cljs.core.filterv.call(null,inst_27061,inst_27049);var inst_27049__$1 = inst_27062;var state_27077__$1 = (function (){var statearr_27092 = state_27077;(statearr_27092[(10)] = inst_27049__$1);
return statearr_27092;
})();var statearr_27093_27111 = state_27077__$1;(statearr_27093_27111[(2)] = null);
(statearr_27093_27111[(1)] = (2));
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
});})(c__17810__auto___27101,out))
;return ((function (switch__17795__auto__,c__17810__auto___27101,out){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_27097 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27097[(0)] = state_machine__17796__auto__);
(statearr_27097[(1)] = (1));
return statearr_27097;
});
var state_machine__17796__auto____1 = (function (state_27077){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_27077);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e27098){if((e27098 instanceof Object))
{var ex__17799__auto__ = e27098;var statearr_27099_27112 = state_27077;(statearr_27099_27112[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27077);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27098;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27113 = state_27077;
state_27077 = G__27113;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_27077){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_27077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___27101,out))
})();var state__17812__auto__ = (function (){var statearr_27100 = f__17811__auto__.call(null);(statearr_27100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___27101);
return statearr_27100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___27101,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17810__auto___27206 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___27206,out){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___27206,out){
return (function (state_27183){var state_val_27184 = (state_27183[(1)]);if((state_val_27184 === (7)))
{var inst_27165 = (state_27183[(7)]);var inst_27165__$1 = (state_27183[(2)]);var inst_27166 = (inst_27165__$1 == null);var inst_27167 = cljs.core.not.call(null,inst_27166);var state_27183__$1 = (function (){var statearr_27185 = state_27183;(statearr_27185[(7)] = inst_27165__$1);
return statearr_27185;
})();if(inst_27167)
{var statearr_27186_27207 = state_27183__$1;(statearr_27186_27207[(1)] = (8));
} else
{var statearr_27187_27208 = state_27183__$1;(statearr_27187_27208[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (1)))
{var inst_27160 = (0);var state_27183__$1 = (function (){var statearr_27188 = state_27183;(statearr_27188[(8)] = inst_27160);
return statearr_27188;
})();var statearr_27189_27209 = state_27183__$1;(statearr_27189_27209[(2)] = null);
(statearr_27189_27209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (4)))
{var state_27183__$1 = state_27183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27183__$1,(7),ch);
} else
{if((state_val_27184 === (6)))
{var inst_27178 = (state_27183[(2)]);var state_27183__$1 = state_27183;var statearr_27190_27210 = state_27183__$1;(statearr_27190_27210[(2)] = inst_27178);
(statearr_27190_27210[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (3)))
{var inst_27180 = (state_27183[(2)]);var inst_27181 = cljs.core.async.close_BANG_.call(null,out);var state_27183__$1 = (function (){var statearr_27191 = state_27183;(statearr_27191[(9)] = inst_27180);
return statearr_27191;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27183__$1,inst_27181);
} else
{if((state_val_27184 === (2)))
{var inst_27160 = (state_27183[(8)]);var inst_27162 = (inst_27160 < n);var state_27183__$1 = state_27183;if(cljs.core.truth_(inst_27162))
{var statearr_27192_27211 = state_27183__$1;(statearr_27192_27211[(1)] = (4));
} else
{var statearr_27193_27212 = state_27183__$1;(statearr_27193_27212[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (11)))
{var inst_27160 = (state_27183[(8)]);var inst_27170 = (state_27183[(2)]);var inst_27171 = (inst_27160 + (1));var inst_27160__$1 = inst_27171;var state_27183__$1 = (function (){var statearr_27194 = state_27183;(statearr_27194[(8)] = inst_27160__$1);
(statearr_27194[(10)] = inst_27170);
return statearr_27194;
})();var statearr_27195_27213 = state_27183__$1;(statearr_27195_27213[(2)] = null);
(statearr_27195_27213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (9)))
{var state_27183__$1 = state_27183;var statearr_27196_27214 = state_27183__$1;(statearr_27196_27214[(2)] = null);
(statearr_27196_27214[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (5)))
{var state_27183__$1 = state_27183;var statearr_27197_27215 = state_27183__$1;(statearr_27197_27215[(2)] = null);
(statearr_27197_27215[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (10)))
{var inst_27175 = (state_27183[(2)]);var state_27183__$1 = state_27183;var statearr_27198_27216 = state_27183__$1;(statearr_27198_27216[(2)] = inst_27175);
(statearr_27198_27216[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27184 === (8)))
{var inst_27165 = (state_27183[(7)]);var state_27183__$1 = state_27183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27183__$1,(11),out,inst_27165);
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
});})(c__17810__auto___27206,out))
;return ((function (switch__17795__auto__,c__17810__auto___27206,out){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_27202 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27202[(0)] = state_machine__17796__auto__);
(statearr_27202[(1)] = (1));
return statearr_27202;
});
var state_machine__17796__auto____1 = (function (state_27183){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_27183);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e27203){if((e27203 instanceof Object))
{var ex__17799__auto__ = e27203;var statearr_27204_27217 = state_27183;(statearr_27204_27217[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27203;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27218 = state_27183;
state_27183 = G__27218;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_27183){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_27183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___27206,out))
})();var state__17812__auto__ = (function (){var statearr_27205 = f__17811__auto__.call(null);(statearr_27205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___27206);
return statearr_27205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___27206,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27226 = (function (ch,f,map_LT_,meta27227){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27227 = meta27227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27226.cljs$lang$type = true;
cljs.core.async.t27226.cljs$lang$ctorStr = "cljs.core.async/t27226";
cljs.core.async.t27226.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t27226");
});
cljs.core.async.t27226.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27226.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27229 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27229 = (function (fn1,_,meta27227,ch,f,map_LT_,meta27230){
this.fn1 = fn1;
this._ = _;
this.meta27227 = meta27227;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27230 = meta27230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27229.cljs$lang$type = true;
cljs.core.async.t27229.cljs$lang$ctorStr = "cljs.core.async/t27229";
cljs.core.async.t27229.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t27229");
});})(___$1))
;
cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27219_SHARP_){return f1.call(null,(((p1__27219_SHARP_ == null))?null:self__.f.call(null,p1__27219_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27231){var self__ = this;
var _27231__$1 = this;return self__.meta27230;
});})(___$1))
;
cljs.core.async.t27229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27231,meta27230__$1){var self__ = this;
var _27231__$1 = this;return (new cljs.core.async.t27229(self__.fn1,self__._,self__.meta27227,self__.ch,self__.f,self__.map_LT_,meta27230__$1));
});})(___$1))
;
cljs.core.async.__GT_t27229 = ((function (___$1){
return (function __GT_t27229(fn1__$1,___$2,meta27227__$1,ch__$2,f__$2,map_LT___$2,meta27230){return (new cljs.core.async.t27229(fn1__$1,___$2,meta27227__$1,ch__$2,f__$2,map_LT___$2,meta27230));
});})(___$1))
;
}
return (new cljs.core.async.t27229(fn1,___$1,self__.meta27227,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11369__auto__ = ret;if(cljs.core.truth_(and__11369__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11369__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27226.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27228){var self__ = this;
var _27228__$1 = this;return self__.meta27227;
});
cljs.core.async.t27226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27228,meta27227__$1){var self__ = this;
var _27228__$1 = this;return (new cljs.core.async.t27226(self__.ch,self__.f,self__.map_LT_,meta27227__$1));
});
cljs.core.async.__GT_t27226 = (function __GT_t27226(ch__$1,f__$1,map_LT___$1,meta27227){return (new cljs.core.async.t27226(ch__$1,f__$1,map_LT___$1,meta27227));
});
}
return (new cljs.core.async.t27226(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27235 = (function (ch,f,map_GT_,meta27236){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27236 = meta27236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27235.cljs$lang$type = true;
cljs.core.async.t27235.cljs$lang$ctorStr = "cljs.core.async/t27235";
cljs.core.async.t27235.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t27235");
});
cljs.core.async.t27235.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27235.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27235.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27237){var self__ = this;
var _27237__$1 = this;return self__.meta27236;
});
cljs.core.async.t27235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27237,meta27236__$1){var self__ = this;
var _27237__$1 = this;return (new cljs.core.async.t27235(self__.ch,self__.f,self__.map_GT_,meta27236__$1));
});
cljs.core.async.__GT_t27235 = (function __GT_t27235(ch__$1,f__$1,map_GT___$1,meta27236){return (new cljs.core.async.t27235(ch__$1,f__$1,map_GT___$1,meta27236));
});
}
return (new cljs.core.async.t27235(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27241 = (function (ch,p,filter_GT_,meta27242){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27242 = meta27242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27241.cljs$lang$type = true;
cljs.core.async.t27241.cljs$lang$ctorStr = "cljs.core.async/t27241";
cljs.core.async.t27241.cljs$lang$ctorPrWriter = (function (this__11948__auto__,writer__11949__auto__,opt__11950__auto__){return cljs.core._write.call(null,writer__11949__auto__,"cljs.core.async/t27241");
});
cljs.core.async.t27241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27241.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27243){var self__ = this;
var _27243__$1 = this;return self__.meta27242;
});
cljs.core.async.t27241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27243,meta27242__$1){var self__ = this;
var _27243__$1 = this;return (new cljs.core.async.t27241(self__.ch,self__.p,self__.filter_GT_,meta27242__$1));
});
cljs.core.async.__GT_t27241 = (function __GT_t27241(ch__$1,p__$1,filter_GT___$1,meta27242){return (new cljs.core.async.t27241(ch__$1,p__$1,filter_GT___$1,meta27242));
});
}
return (new cljs.core.async.t27241(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17810__auto___27326 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___27326,out){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___27326,out){
return (function (state_27305){var state_val_27306 = (state_27305[(1)]);if((state_val_27306 === (7)))
{var inst_27301 = (state_27305[(2)]);var state_27305__$1 = state_27305;var statearr_27307_27327 = state_27305__$1;(statearr_27307_27327[(2)] = inst_27301);
(statearr_27307_27327[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (1)))
{var state_27305__$1 = state_27305;var statearr_27308_27328 = state_27305__$1;(statearr_27308_27328[(2)] = null);
(statearr_27308_27328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (4)))
{var inst_27287 = (state_27305[(7)]);var inst_27287__$1 = (state_27305[(2)]);var inst_27288 = (inst_27287__$1 == null);var state_27305__$1 = (function (){var statearr_27309 = state_27305;(statearr_27309[(7)] = inst_27287__$1);
return statearr_27309;
})();if(cljs.core.truth_(inst_27288))
{var statearr_27310_27329 = state_27305__$1;(statearr_27310_27329[(1)] = (5));
} else
{var statearr_27311_27330 = state_27305__$1;(statearr_27311_27330[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (6)))
{var inst_27287 = (state_27305[(7)]);var inst_27292 = p.call(null,inst_27287);var state_27305__$1 = state_27305;if(cljs.core.truth_(inst_27292))
{var statearr_27312_27331 = state_27305__$1;(statearr_27312_27331[(1)] = (8));
} else
{var statearr_27313_27332 = state_27305__$1;(statearr_27313_27332[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (3)))
{var inst_27303 = (state_27305[(2)]);var state_27305__$1 = state_27305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27305__$1,inst_27303);
} else
{if((state_val_27306 === (2)))
{var state_27305__$1 = state_27305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27305__$1,(4),ch);
} else
{if((state_val_27306 === (11)))
{var inst_27295 = (state_27305[(2)]);var state_27305__$1 = state_27305;var statearr_27314_27333 = state_27305__$1;(statearr_27314_27333[(2)] = inst_27295);
(statearr_27314_27333[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (9)))
{var state_27305__$1 = state_27305;var statearr_27315_27334 = state_27305__$1;(statearr_27315_27334[(2)] = null);
(statearr_27315_27334[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (5)))
{var inst_27290 = cljs.core.async.close_BANG_.call(null,out);var state_27305__$1 = state_27305;var statearr_27316_27335 = state_27305__$1;(statearr_27316_27335[(2)] = inst_27290);
(statearr_27316_27335[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (10)))
{var inst_27298 = (state_27305[(2)]);var state_27305__$1 = (function (){var statearr_27317 = state_27305;(statearr_27317[(8)] = inst_27298);
return statearr_27317;
})();var statearr_27318_27336 = state_27305__$1;(statearr_27318_27336[(2)] = null);
(statearr_27318_27336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27306 === (8)))
{var inst_27287 = (state_27305[(7)]);var state_27305__$1 = state_27305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27305__$1,(11),out,inst_27287);
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
});})(c__17810__auto___27326,out))
;return ((function (switch__17795__auto__,c__17810__auto___27326,out){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_27322 = [null,null,null,null,null,null,null,null,null];(statearr_27322[(0)] = state_machine__17796__auto__);
(statearr_27322[(1)] = (1));
return statearr_27322;
});
var state_machine__17796__auto____1 = (function (state_27305){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_27305);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e27323){if((e27323 instanceof Object))
{var ex__17799__auto__ = e27323;var statearr_27324_27337 = state_27305;(statearr_27324_27337[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27305);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27323;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27338 = state_27305;
state_27305 = G__27338;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_27305){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_27305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___27326,out))
})();var state__17812__auto__ = (function (){var statearr_27325 = f__17811__auto__.call(null);(statearr_27325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___27326);
return statearr_27325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___27326,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__17810__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto__){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto__){
return (function (state_27504){var state_val_27505 = (state_27504[(1)]);if((state_val_27505 === (7)))
{var inst_27500 = (state_27504[(2)]);var state_27504__$1 = state_27504;var statearr_27506_27547 = state_27504__$1;(statearr_27506_27547[(2)] = inst_27500);
(statearr_27506_27547[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (20)))
{var inst_27470 = (state_27504[(7)]);var inst_27481 = (state_27504[(2)]);var inst_27482 = cljs.core.next.call(null,inst_27470);var inst_27456 = inst_27482;var inst_27457 = null;var inst_27458 = (0);var inst_27459 = (0);var state_27504__$1 = (function (){var statearr_27507 = state_27504;(statearr_27507[(8)] = inst_27457);
(statearr_27507[(9)] = inst_27459);
(statearr_27507[(10)] = inst_27456);
(statearr_27507[(11)] = inst_27458);
(statearr_27507[(12)] = inst_27481);
return statearr_27507;
})();var statearr_27508_27548 = state_27504__$1;(statearr_27508_27548[(2)] = null);
(statearr_27508_27548[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (1)))
{var state_27504__$1 = state_27504;var statearr_27509_27549 = state_27504__$1;(statearr_27509_27549[(2)] = null);
(statearr_27509_27549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (4)))
{var inst_27445 = (state_27504[(13)]);var inst_27445__$1 = (state_27504[(2)]);var inst_27446 = (inst_27445__$1 == null);var state_27504__$1 = (function (){var statearr_27510 = state_27504;(statearr_27510[(13)] = inst_27445__$1);
return statearr_27510;
})();if(cljs.core.truth_(inst_27446))
{var statearr_27511_27550 = state_27504__$1;(statearr_27511_27550[(1)] = (5));
} else
{var statearr_27512_27551 = state_27504__$1;(statearr_27512_27551[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (15)))
{var state_27504__$1 = state_27504;var statearr_27516_27552 = state_27504__$1;(statearr_27516_27552[(2)] = null);
(statearr_27516_27552[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (21)))
{var state_27504__$1 = state_27504;var statearr_27517_27553 = state_27504__$1;(statearr_27517_27553[(2)] = null);
(statearr_27517_27553[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (13)))
{var inst_27457 = (state_27504[(8)]);var inst_27459 = (state_27504[(9)]);var inst_27456 = (state_27504[(10)]);var inst_27458 = (state_27504[(11)]);var inst_27466 = (state_27504[(2)]);var inst_27467 = (inst_27459 + (1));var tmp27513 = inst_27457;var tmp27514 = inst_27456;var tmp27515 = inst_27458;var inst_27456__$1 = tmp27514;var inst_27457__$1 = tmp27513;var inst_27458__$1 = tmp27515;var inst_27459__$1 = inst_27467;var state_27504__$1 = (function (){var statearr_27518 = state_27504;(statearr_27518[(8)] = inst_27457__$1);
(statearr_27518[(9)] = inst_27459__$1);
(statearr_27518[(10)] = inst_27456__$1);
(statearr_27518[(11)] = inst_27458__$1);
(statearr_27518[(14)] = inst_27466);
return statearr_27518;
})();var statearr_27519_27554 = state_27504__$1;(statearr_27519_27554[(2)] = null);
(statearr_27519_27554[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (22)))
{var state_27504__$1 = state_27504;var statearr_27520_27555 = state_27504__$1;(statearr_27520_27555[(2)] = null);
(statearr_27520_27555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (6)))
{var inst_27445 = (state_27504[(13)]);var inst_27454 = f.call(null,inst_27445);var inst_27455 = cljs.core.seq.call(null,inst_27454);var inst_27456 = inst_27455;var inst_27457 = null;var inst_27458 = (0);var inst_27459 = (0);var state_27504__$1 = (function (){var statearr_27521 = state_27504;(statearr_27521[(8)] = inst_27457);
(statearr_27521[(9)] = inst_27459);
(statearr_27521[(10)] = inst_27456);
(statearr_27521[(11)] = inst_27458);
return statearr_27521;
})();var statearr_27522_27556 = state_27504__$1;(statearr_27522_27556[(2)] = null);
(statearr_27522_27556[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (17)))
{var inst_27470 = (state_27504[(7)]);var inst_27474 = cljs.core.chunk_first.call(null,inst_27470);var inst_27475 = cljs.core.chunk_rest.call(null,inst_27470);var inst_27476 = cljs.core.count.call(null,inst_27474);var inst_27456 = inst_27475;var inst_27457 = inst_27474;var inst_27458 = inst_27476;var inst_27459 = (0);var state_27504__$1 = (function (){var statearr_27523 = state_27504;(statearr_27523[(8)] = inst_27457);
(statearr_27523[(9)] = inst_27459);
(statearr_27523[(10)] = inst_27456);
(statearr_27523[(11)] = inst_27458);
return statearr_27523;
})();var statearr_27524_27557 = state_27504__$1;(statearr_27524_27557[(2)] = null);
(statearr_27524_27557[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (3)))
{var inst_27502 = (state_27504[(2)]);var state_27504__$1 = state_27504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27504__$1,inst_27502);
} else
{if((state_val_27505 === (12)))
{var inst_27490 = (state_27504[(2)]);var state_27504__$1 = state_27504;var statearr_27525_27558 = state_27504__$1;(statearr_27525_27558[(2)] = inst_27490);
(statearr_27525_27558[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (2)))
{var state_27504__$1 = state_27504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27504__$1,(4),in$);
} else
{if((state_val_27505 === (23)))
{var inst_27498 = (state_27504[(2)]);var state_27504__$1 = state_27504;var statearr_27526_27559 = state_27504__$1;(statearr_27526_27559[(2)] = inst_27498);
(statearr_27526_27559[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (19)))
{var inst_27485 = (state_27504[(2)]);var state_27504__$1 = state_27504;var statearr_27527_27560 = state_27504__$1;(statearr_27527_27560[(2)] = inst_27485);
(statearr_27527_27560[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (11)))
{var inst_27456 = (state_27504[(10)]);var inst_27470 = (state_27504[(7)]);var inst_27470__$1 = cljs.core.seq.call(null,inst_27456);var state_27504__$1 = (function (){var statearr_27528 = state_27504;(statearr_27528[(7)] = inst_27470__$1);
return statearr_27528;
})();if(inst_27470__$1)
{var statearr_27529_27561 = state_27504__$1;(statearr_27529_27561[(1)] = (14));
} else
{var statearr_27530_27562 = state_27504__$1;(statearr_27530_27562[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (9)))
{var inst_27492 = (state_27504[(2)]);var inst_27493 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27504__$1 = (function (){var statearr_27531 = state_27504;(statearr_27531[(15)] = inst_27492);
return statearr_27531;
})();if(cljs.core.truth_(inst_27493))
{var statearr_27532_27563 = state_27504__$1;(statearr_27532_27563[(1)] = (21));
} else
{var statearr_27533_27564 = state_27504__$1;(statearr_27533_27564[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (5)))
{var inst_27448 = cljs.core.async.close_BANG_.call(null,out);var state_27504__$1 = state_27504;var statearr_27534_27565 = state_27504__$1;(statearr_27534_27565[(2)] = inst_27448);
(statearr_27534_27565[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (14)))
{var inst_27470 = (state_27504[(7)]);var inst_27472 = cljs.core.chunked_seq_QMARK_.call(null,inst_27470);var state_27504__$1 = state_27504;if(inst_27472)
{var statearr_27535_27566 = state_27504__$1;(statearr_27535_27566[(1)] = (17));
} else
{var statearr_27536_27567 = state_27504__$1;(statearr_27536_27567[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (16)))
{var inst_27488 = (state_27504[(2)]);var state_27504__$1 = state_27504;var statearr_27537_27568 = state_27504__$1;(statearr_27537_27568[(2)] = inst_27488);
(statearr_27537_27568[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27505 === (10)))
{var inst_27457 = (state_27504[(8)]);var inst_27459 = (state_27504[(9)]);var inst_27464 = cljs.core._nth.call(null,inst_27457,inst_27459);var state_27504__$1 = state_27504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27504__$1,(13),out,inst_27464);
} else
{if((state_val_27505 === (18)))
{var inst_27470 = (state_27504[(7)]);var inst_27479 = cljs.core.first.call(null,inst_27470);var state_27504__$1 = state_27504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27504__$1,(20),out,inst_27479);
} else
{if((state_val_27505 === (8)))
{var inst_27459 = (state_27504[(9)]);var inst_27458 = (state_27504[(11)]);var inst_27461 = (inst_27459 < inst_27458);var inst_27462 = inst_27461;var state_27504__$1 = state_27504;if(cljs.core.truth_(inst_27462))
{var statearr_27538_27569 = state_27504__$1;(statearr_27538_27569[(1)] = (10));
} else
{var statearr_27539_27570 = state_27504__$1;(statearr_27539_27570[(1)] = (11));
}
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
}
}
}
}
}
}
}
});})(c__17810__auto__))
;return ((function (switch__17795__auto__,c__17810__auto__){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_27543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27543[(0)] = state_machine__17796__auto__);
(statearr_27543[(1)] = (1));
return statearr_27543;
});
var state_machine__17796__auto____1 = (function (state_27504){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_27504);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e27544){if((e27544 instanceof Object))
{var ex__17799__auto__ = e27544;var statearr_27545_27571 = state_27504;(statearr_27545_27571[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27504);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27544;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27572 = state_27504;
state_27504 = G__27572;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_27504){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_27504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto__))
})();var state__17812__auto__ = (function (){var statearr_27546 = f__17811__auto__.call(null);(statearr_27546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto__);
return statearr_27546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto__))
);
return c__17810__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17810__auto___27669 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___27669,out){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___27669,out){
return (function (state_27644){var state_val_27645 = (state_27644[(1)]);if((state_val_27645 === (7)))
{var inst_27639 = (state_27644[(2)]);var state_27644__$1 = state_27644;var statearr_27646_27670 = state_27644__$1;(statearr_27646_27670[(2)] = inst_27639);
(statearr_27646_27670[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27645 === (1)))
{var inst_27621 = null;var state_27644__$1 = (function (){var statearr_27647 = state_27644;(statearr_27647[(7)] = inst_27621);
return statearr_27647;
})();var statearr_27648_27671 = state_27644__$1;(statearr_27648_27671[(2)] = null);
(statearr_27648_27671[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27645 === (4)))
{var inst_27624 = (state_27644[(8)]);var inst_27624__$1 = (state_27644[(2)]);var inst_27625 = (inst_27624__$1 == null);var inst_27626 = cljs.core.not.call(null,inst_27625);var state_27644__$1 = (function (){var statearr_27649 = state_27644;(statearr_27649[(8)] = inst_27624__$1);
return statearr_27649;
})();if(inst_27626)
{var statearr_27650_27672 = state_27644__$1;(statearr_27650_27672[(1)] = (5));
} else
{var statearr_27651_27673 = state_27644__$1;(statearr_27651_27673[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27645 === (6)))
{var state_27644__$1 = state_27644;var statearr_27652_27674 = state_27644__$1;(statearr_27652_27674[(2)] = null);
(statearr_27652_27674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27645 === (3)))
{var inst_27641 = (state_27644[(2)]);var inst_27642 = cljs.core.async.close_BANG_.call(null,out);var state_27644__$1 = (function (){var statearr_27653 = state_27644;(statearr_27653[(9)] = inst_27641);
return statearr_27653;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27644__$1,inst_27642);
} else
{if((state_val_27645 === (2)))
{var state_27644__$1 = state_27644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27644__$1,(4),ch);
} else
{if((state_val_27645 === (11)))
{var inst_27624 = (state_27644[(8)]);var inst_27633 = (state_27644[(2)]);var inst_27621 = inst_27624;var state_27644__$1 = (function (){var statearr_27654 = state_27644;(statearr_27654[(10)] = inst_27633);
(statearr_27654[(7)] = inst_27621);
return statearr_27654;
})();var statearr_27655_27675 = state_27644__$1;(statearr_27655_27675[(2)] = null);
(statearr_27655_27675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27645 === (9)))
{var inst_27624 = (state_27644[(8)]);var state_27644__$1 = state_27644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27644__$1,(11),out,inst_27624);
} else
{if((state_val_27645 === (5)))
{var inst_27624 = (state_27644[(8)]);var inst_27621 = (state_27644[(7)]);var inst_27628 = cljs.core._EQ_.call(null,inst_27624,inst_27621);var state_27644__$1 = state_27644;if(inst_27628)
{var statearr_27657_27676 = state_27644__$1;(statearr_27657_27676[(1)] = (8));
} else
{var statearr_27658_27677 = state_27644__$1;(statearr_27658_27677[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27645 === (10)))
{var inst_27636 = (state_27644[(2)]);var state_27644__$1 = state_27644;var statearr_27659_27678 = state_27644__$1;(statearr_27659_27678[(2)] = inst_27636);
(statearr_27659_27678[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27645 === (8)))
{var inst_27621 = (state_27644[(7)]);var tmp27656 = inst_27621;var inst_27621__$1 = tmp27656;var state_27644__$1 = (function (){var statearr_27660 = state_27644;(statearr_27660[(7)] = inst_27621__$1);
return statearr_27660;
})();var statearr_27661_27679 = state_27644__$1;(statearr_27661_27679[(2)] = null);
(statearr_27661_27679[(1)] = (2));
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
});})(c__17810__auto___27669,out))
;return ((function (switch__17795__auto__,c__17810__auto___27669,out){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_27665 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27665[(0)] = state_machine__17796__auto__);
(statearr_27665[(1)] = (1));
return statearr_27665;
});
var state_machine__17796__auto____1 = (function (state_27644){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_27644);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e27666){if((e27666 instanceof Object))
{var ex__17799__auto__ = e27666;var statearr_27667_27680 = state_27644;(statearr_27667_27680[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27666;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27681 = state_27644;
state_27644 = G__27681;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_27644){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_27644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___27669,out))
})();var state__17812__auto__ = (function (){var statearr_27668 = f__17811__auto__.call(null);(statearr_27668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___27669);
return statearr_27668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___27669,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17810__auto___27816 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___27816,out){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___27816,out){
return (function (state_27786){var state_val_27787 = (state_27786[(1)]);if((state_val_27787 === (7)))
{var inst_27782 = (state_27786[(2)]);var state_27786__$1 = state_27786;var statearr_27788_27817 = state_27786__$1;(statearr_27788_27817[(2)] = inst_27782);
(statearr_27788_27817[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (1)))
{var inst_27749 = (new Array(n));var inst_27750 = inst_27749;var inst_27751 = (0);var state_27786__$1 = (function (){var statearr_27789 = state_27786;(statearr_27789[(7)] = inst_27750);
(statearr_27789[(8)] = inst_27751);
return statearr_27789;
})();var statearr_27790_27818 = state_27786__$1;(statearr_27790_27818[(2)] = null);
(statearr_27790_27818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (4)))
{var inst_27754 = (state_27786[(9)]);var inst_27754__$1 = (state_27786[(2)]);var inst_27755 = (inst_27754__$1 == null);var inst_27756 = cljs.core.not.call(null,inst_27755);var state_27786__$1 = (function (){var statearr_27791 = state_27786;(statearr_27791[(9)] = inst_27754__$1);
return statearr_27791;
})();if(inst_27756)
{var statearr_27792_27819 = state_27786__$1;(statearr_27792_27819[(1)] = (5));
} else
{var statearr_27793_27820 = state_27786__$1;(statearr_27793_27820[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (15)))
{var inst_27776 = (state_27786[(2)]);var state_27786__$1 = state_27786;var statearr_27794_27821 = state_27786__$1;(statearr_27794_27821[(2)] = inst_27776);
(statearr_27794_27821[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (13)))
{var state_27786__$1 = state_27786;var statearr_27795_27822 = state_27786__$1;(statearr_27795_27822[(2)] = null);
(statearr_27795_27822[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (6)))
{var inst_27751 = (state_27786[(8)]);var inst_27772 = (inst_27751 > (0));var state_27786__$1 = state_27786;if(cljs.core.truth_(inst_27772))
{var statearr_27796_27823 = state_27786__$1;(statearr_27796_27823[(1)] = (12));
} else
{var statearr_27797_27824 = state_27786__$1;(statearr_27797_27824[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (3)))
{var inst_27784 = (state_27786[(2)]);var state_27786__$1 = state_27786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27786__$1,inst_27784);
} else
{if((state_val_27787 === (12)))
{var inst_27750 = (state_27786[(7)]);var inst_27774 = cljs.core.vec.call(null,inst_27750);var state_27786__$1 = state_27786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27786__$1,(15),out,inst_27774);
} else
{if((state_val_27787 === (2)))
{var state_27786__$1 = state_27786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27786__$1,(4),ch);
} else
{if((state_val_27787 === (11)))
{var inst_27766 = (state_27786[(2)]);var inst_27767 = (new Array(n));var inst_27750 = inst_27767;var inst_27751 = (0);var state_27786__$1 = (function (){var statearr_27798 = state_27786;(statearr_27798[(7)] = inst_27750);
(statearr_27798[(10)] = inst_27766);
(statearr_27798[(8)] = inst_27751);
return statearr_27798;
})();var statearr_27799_27825 = state_27786__$1;(statearr_27799_27825[(2)] = null);
(statearr_27799_27825[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (9)))
{var inst_27750 = (state_27786[(7)]);var inst_27764 = cljs.core.vec.call(null,inst_27750);var state_27786__$1 = state_27786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27786__$1,(11),out,inst_27764);
} else
{if((state_val_27787 === (5)))
{var inst_27759 = (state_27786[(11)]);var inst_27750 = (state_27786[(7)]);var inst_27754 = (state_27786[(9)]);var inst_27751 = (state_27786[(8)]);var inst_27758 = (inst_27750[inst_27751] = inst_27754);var inst_27759__$1 = (inst_27751 + (1));var inst_27760 = (inst_27759__$1 < n);var state_27786__$1 = (function (){var statearr_27800 = state_27786;(statearr_27800[(11)] = inst_27759__$1);
(statearr_27800[(12)] = inst_27758);
return statearr_27800;
})();if(cljs.core.truth_(inst_27760))
{var statearr_27801_27826 = state_27786__$1;(statearr_27801_27826[(1)] = (8));
} else
{var statearr_27802_27827 = state_27786__$1;(statearr_27802_27827[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (14)))
{var inst_27779 = (state_27786[(2)]);var inst_27780 = cljs.core.async.close_BANG_.call(null,out);var state_27786__$1 = (function (){var statearr_27804 = state_27786;(statearr_27804[(13)] = inst_27779);
return statearr_27804;
})();var statearr_27805_27828 = state_27786__$1;(statearr_27805_27828[(2)] = inst_27780);
(statearr_27805_27828[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (10)))
{var inst_27770 = (state_27786[(2)]);var state_27786__$1 = state_27786;var statearr_27806_27829 = state_27786__$1;(statearr_27806_27829[(2)] = inst_27770);
(statearr_27806_27829[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27787 === (8)))
{var inst_27759 = (state_27786[(11)]);var inst_27750 = (state_27786[(7)]);var tmp27803 = inst_27750;var inst_27750__$1 = tmp27803;var inst_27751 = inst_27759;var state_27786__$1 = (function (){var statearr_27807 = state_27786;(statearr_27807[(7)] = inst_27750__$1);
(statearr_27807[(8)] = inst_27751);
return statearr_27807;
})();var statearr_27808_27830 = state_27786__$1;(statearr_27808_27830[(2)] = null);
(statearr_27808_27830[(1)] = (2));
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
});})(c__17810__auto___27816,out))
;return ((function (switch__17795__auto__,c__17810__auto___27816,out){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_27812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27812[(0)] = state_machine__17796__auto__);
(statearr_27812[(1)] = (1));
return statearr_27812;
});
var state_machine__17796__auto____1 = (function (state_27786){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_27786);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e27813){if((e27813 instanceof Object))
{var ex__17799__auto__ = e27813;var statearr_27814_27831 = state_27786;(statearr_27814_27831[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27832 = state_27786;
state_27786 = G__27832;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_27786){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_27786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___27816,out))
})();var state__17812__auto__ = (function (){var statearr_27815 = f__17811__auto__.call(null);(statearr_27815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___27816);
return statearr_27815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___27816,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__17810__auto___27975 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___27975,out){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___27975,out){
return (function (state_27945){var state_val_27946 = (state_27945[(1)]);if((state_val_27946 === (7)))
{var inst_27941 = (state_27945[(2)]);var state_27945__$1 = state_27945;var statearr_27947_27976 = state_27945__$1;(statearr_27947_27976[(2)] = inst_27941);
(statearr_27947_27976[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (1)))
{var inst_27904 = [];var inst_27905 = inst_27904;var inst_27906 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27945__$1 = (function (){var statearr_27948 = state_27945;(statearr_27948[(7)] = inst_27905);
(statearr_27948[(8)] = inst_27906);
return statearr_27948;
})();var statearr_27949_27977 = state_27945__$1;(statearr_27949_27977[(2)] = null);
(statearr_27949_27977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (4)))
{var inst_27909 = (state_27945[(9)]);var inst_27909__$1 = (state_27945[(2)]);var inst_27910 = (inst_27909__$1 == null);var inst_27911 = cljs.core.not.call(null,inst_27910);var state_27945__$1 = (function (){var statearr_27950 = state_27945;(statearr_27950[(9)] = inst_27909__$1);
return statearr_27950;
})();if(inst_27911)
{var statearr_27951_27978 = state_27945__$1;(statearr_27951_27978[(1)] = (5));
} else
{var statearr_27952_27979 = state_27945__$1;(statearr_27952_27979[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (15)))
{var inst_27935 = (state_27945[(2)]);var state_27945__$1 = state_27945;var statearr_27953_27980 = state_27945__$1;(statearr_27953_27980[(2)] = inst_27935);
(statearr_27953_27980[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (13)))
{var state_27945__$1 = state_27945;var statearr_27954_27981 = state_27945__$1;(statearr_27954_27981[(2)] = null);
(statearr_27954_27981[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (6)))
{var inst_27905 = (state_27945[(7)]);var inst_27930 = inst_27905.length;var inst_27931 = (inst_27930 > (0));var state_27945__$1 = state_27945;if(cljs.core.truth_(inst_27931))
{var statearr_27955_27982 = state_27945__$1;(statearr_27955_27982[(1)] = (12));
} else
{var statearr_27956_27983 = state_27945__$1;(statearr_27956_27983[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (3)))
{var inst_27943 = (state_27945[(2)]);var state_27945__$1 = state_27945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27945__$1,inst_27943);
} else
{if((state_val_27946 === (12)))
{var inst_27905 = (state_27945[(7)]);var inst_27933 = cljs.core.vec.call(null,inst_27905);var state_27945__$1 = state_27945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27945__$1,(15),out,inst_27933);
} else
{if((state_val_27946 === (2)))
{var state_27945__$1 = state_27945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27945__$1,(4),ch);
} else
{if((state_val_27946 === (11)))
{var inst_27909 = (state_27945[(9)]);var inst_27913 = (state_27945[(10)]);var inst_27923 = (state_27945[(2)]);var inst_27924 = [];var inst_27925 = inst_27924.push(inst_27909);var inst_27905 = inst_27924;var inst_27906 = inst_27913;var state_27945__$1 = (function (){var statearr_27957 = state_27945;(statearr_27957[(7)] = inst_27905);
(statearr_27957[(11)] = inst_27923);
(statearr_27957[(12)] = inst_27925);
(statearr_27957[(8)] = inst_27906);
return statearr_27957;
})();var statearr_27958_27984 = state_27945__$1;(statearr_27958_27984[(2)] = null);
(statearr_27958_27984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (9)))
{var inst_27905 = (state_27945[(7)]);var inst_27921 = cljs.core.vec.call(null,inst_27905);var state_27945__$1 = state_27945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27945__$1,(11),out,inst_27921);
} else
{if((state_val_27946 === (5)))
{var inst_27909 = (state_27945[(9)]);var inst_27906 = (state_27945[(8)]);var inst_27913 = (state_27945[(10)]);var inst_27913__$1 = f.call(null,inst_27909);var inst_27914 = cljs.core._EQ_.call(null,inst_27913__$1,inst_27906);var inst_27915 = cljs.core.keyword_identical_QMARK_.call(null,inst_27906,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27916 = (inst_27914) || (inst_27915);var state_27945__$1 = (function (){var statearr_27959 = state_27945;(statearr_27959[(10)] = inst_27913__$1);
return statearr_27959;
})();if(cljs.core.truth_(inst_27916))
{var statearr_27960_27985 = state_27945__$1;(statearr_27960_27985[(1)] = (8));
} else
{var statearr_27961_27986 = state_27945__$1;(statearr_27961_27986[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (14)))
{var inst_27938 = (state_27945[(2)]);var inst_27939 = cljs.core.async.close_BANG_.call(null,out);var state_27945__$1 = (function (){var statearr_27963 = state_27945;(statearr_27963[(13)] = inst_27938);
return statearr_27963;
})();var statearr_27964_27987 = state_27945__$1;(statearr_27964_27987[(2)] = inst_27939);
(statearr_27964_27987[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (10)))
{var inst_27928 = (state_27945[(2)]);var state_27945__$1 = state_27945;var statearr_27965_27988 = state_27945__$1;(statearr_27965_27988[(2)] = inst_27928);
(statearr_27965_27988[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27946 === (8)))
{var inst_27905 = (state_27945[(7)]);var inst_27909 = (state_27945[(9)]);var inst_27913 = (state_27945[(10)]);var inst_27918 = inst_27905.push(inst_27909);var tmp27962 = inst_27905;var inst_27905__$1 = tmp27962;var inst_27906 = inst_27913;var state_27945__$1 = (function (){var statearr_27966 = state_27945;(statearr_27966[(7)] = inst_27905__$1);
(statearr_27966[(14)] = inst_27918);
(statearr_27966[(8)] = inst_27906);
return statearr_27966;
})();var statearr_27967_27989 = state_27945__$1;(statearr_27967_27989[(2)] = null);
(statearr_27967_27989[(1)] = (2));
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
});})(c__17810__auto___27975,out))
;return ((function (switch__17795__auto__,c__17810__auto___27975,out){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_27971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27971[(0)] = state_machine__17796__auto__);
(statearr_27971[(1)] = (1));
return statearr_27971;
});
var state_machine__17796__auto____1 = (function (state_27945){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_27945);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e27972){if((e27972 instanceof Object))
{var ex__17799__auto__ = e27972;var statearr_27973_27990 = state_27945;(statearr_27973_27990[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27945);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27972;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27991 = state_27945;
state_27945 = G__27991;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_27945){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_27945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___27975,out))
})();var state__17812__auto__ = (function (){var statearr_27974 = f__17811__auto__.call(null);(statearr_27974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___27975);
return statearr_27974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___27975,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map