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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11645 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11645 = (function (f,fn_handler,meta11646){
this.f = f;
this.fn_handler = fn_handler;
this.meta11646 = meta11646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11645.cljs$lang$type = true;
cljs.core.async.t11645.cljs$lang$ctorStr = "cljs.core.async/t11645";
cljs.core.async.t11645.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11645");
});
cljs.core.async.t11645.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11647){var self__ = this;
var _11647__$1 = this;return self__.meta11646;
});
cljs.core.async.t11645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11647,meta11646__$1){var self__ = this;
var _11647__$1 = this;return (new cljs.core.async.t11645(self__.f,self__.fn_handler,meta11646__$1));
});
cljs.core.async.__GT_t11645 = (function __GT_t11645(f__$1,fn_handler__$1,meta11646){return (new cljs.core.async.t11645(f__$1,fn_handler__$1,meta11646));
});
}
return (new cljs.core.async.t11645(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11649 = buff;if(G__11649)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11649.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11649.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11649);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11649);
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
{var val_11650 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11650);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11650,ret){
return (function (){return fn1.call(null,val_11650);
});})(val_11650,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___11651 = n;var x_11652 = (0);while(true){
if((x_11652 < n__4416__auto___11651))
{(a[x_11652] = (0));
{
var G__11653 = (x_11652 + (1));
x_11652 = G__11653;
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
var G__11654 = (i + (1));
i = G__11654;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11658 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11658 = (function (flag,alt_flag,meta11659){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11659 = meta11659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11658.cljs$lang$type = true;
cljs.core.async.t11658.cljs$lang$ctorStr = "cljs.core.async/t11658";
cljs.core.async.t11658.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11658");
});})(flag))
;
cljs.core.async.t11658.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11660){var self__ = this;
var _11660__$1 = this;return self__.meta11659;
});})(flag))
;
cljs.core.async.t11658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11660,meta11659__$1){var self__ = this;
var _11660__$1 = this;return (new cljs.core.async.t11658(self__.flag,self__.alt_flag,meta11659__$1));
});})(flag))
;
cljs.core.async.__GT_t11658 = ((function (flag){
return (function __GT_t11658(flag__$1,alt_flag__$1,meta11659){return (new cljs.core.async.t11658(flag__$1,alt_flag__$1,meta11659));
});})(flag))
;
}
return (new cljs.core.async.t11658(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11664 = (function (cb,flag,alt_handler,meta11665){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11665 = meta11665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11664.cljs$lang$type = true;
cljs.core.async.t11664.cljs$lang$ctorStr = "cljs.core.async/t11664";
cljs.core.async.t11664.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11664");
});
cljs.core.async.t11664.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11666){var self__ = this;
var _11666__$1 = this;return self__.meta11665;
});
cljs.core.async.t11664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11666,meta11665__$1){var self__ = this;
var _11666__$1 = this;return (new cljs.core.async.t11664(self__.cb,self__.flag,self__.alt_handler,meta11665__$1));
});
cljs.core.async.__GT_t11664 = (function __GT_t11664(cb__$1,flag__$1,alt_handler__$1,meta11665){return (new cljs.core.async.t11664(cb__$1,flag__$1,alt_handler__$1,meta11665));
});
}
return (new cljs.core.async.t11664(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11667_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11667_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11668_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11668_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3560__auto__ = wport;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11669 = (i + (1));
i = G__11669;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3560__auto__ = ret;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3548__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3548__auto__;
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
var alts_BANG___delegate = function (ports,p__11670){var map__11672 = p__11670;var map__11672__$1 = ((cljs.core.seq_QMARK_.call(null,map__11672))?cljs.core.apply.call(null,cljs.core.hash_map,map__11672):map__11672);var opts = map__11672__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11670 = null;if (arguments.length > 1) {
  p__11670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11670);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11673){
var ports = cljs.core.first(arglist__11673);
var p__11670 = cljs.core.rest(arglist__11673);
return alts_BANG___delegate(ports,p__11670);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6376__auto___11768 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___11768){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___11768){
return (function (state_11744){var state_val_11745 = (state_11744[(1)]);if((state_val_11745 === (7)))
{var inst_11740 = (state_11744[(2)]);var state_11744__$1 = state_11744;var statearr_11746_11769 = state_11744__$1;(statearr_11746_11769[(2)] = inst_11740);
(statearr_11746_11769[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (1)))
{var state_11744__$1 = state_11744;var statearr_11747_11770 = state_11744__$1;(statearr_11747_11770[(2)] = null);
(statearr_11747_11770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (4)))
{var inst_11723 = (state_11744[(7)]);var inst_11723__$1 = (state_11744[(2)]);var inst_11724 = (inst_11723__$1 == null);var state_11744__$1 = (function (){var statearr_11748 = state_11744;(statearr_11748[(7)] = inst_11723__$1);
return statearr_11748;
})();if(cljs.core.truth_(inst_11724))
{var statearr_11749_11771 = state_11744__$1;(statearr_11749_11771[(1)] = (5));
} else
{var statearr_11750_11772 = state_11744__$1;(statearr_11750_11772[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (13)))
{var state_11744__$1 = state_11744;var statearr_11751_11773 = state_11744__$1;(statearr_11751_11773[(2)] = null);
(statearr_11751_11773[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (6)))
{var inst_11723 = (state_11744[(7)]);var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11744__$1,(11),to,inst_11723);
} else
{if((state_val_11745 === (3)))
{var inst_11742 = (state_11744[(2)]);var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11744__$1,inst_11742);
} else
{if((state_val_11745 === (12)))
{var state_11744__$1 = state_11744;var statearr_11752_11774 = state_11744__$1;(statearr_11752_11774[(2)] = null);
(statearr_11752_11774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (2)))
{var state_11744__$1 = state_11744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11744__$1,(4),from);
} else
{if((state_val_11745 === (11)))
{var inst_11733 = (state_11744[(2)]);var state_11744__$1 = state_11744;if(cljs.core.truth_(inst_11733))
{var statearr_11753_11775 = state_11744__$1;(statearr_11753_11775[(1)] = (12));
} else
{var statearr_11754_11776 = state_11744__$1;(statearr_11754_11776[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (9)))
{var state_11744__$1 = state_11744;var statearr_11755_11777 = state_11744__$1;(statearr_11755_11777[(2)] = null);
(statearr_11755_11777[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (5)))
{var state_11744__$1 = state_11744;if(cljs.core.truth_(close_QMARK_))
{var statearr_11756_11778 = state_11744__$1;(statearr_11756_11778[(1)] = (8));
} else
{var statearr_11757_11779 = state_11744__$1;(statearr_11757_11779[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (14)))
{var inst_11738 = (state_11744[(2)]);var state_11744__$1 = state_11744;var statearr_11758_11780 = state_11744__$1;(statearr_11758_11780[(2)] = inst_11738);
(statearr_11758_11780[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (10)))
{var inst_11730 = (state_11744[(2)]);var state_11744__$1 = state_11744;var statearr_11759_11781 = state_11744__$1;(statearr_11759_11781[(2)] = inst_11730);
(statearr_11759_11781[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11745 === (8)))
{var inst_11727 = cljs.core.async.close_BANG_.call(null,to);var state_11744__$1 = state_11744;var statearr_11760_11782 = state_11744__$1;(statearr_11760_11782[(2)] = inst_11727);
(statearr_11760_11782[(1)] = (10));
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
});})(c__6376__auto___11768))
;return ((function (switch__6361__auto__,c__6376__auto___11768){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11764 = [null,null,null,null,null,null,null,null];(statearr_11764[(0)] = state_machine__6362__auto__);
(statearr_11764[(1)] = (1));
return statearr_11764;
});
var state_machine__6362__auto____1 = (function (state_11744){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11765){if((e11765 instanceof Object))
{var ex__6365__auto__ = e11765;var statearr_11766_11783 = state_11744;(statearr_11766_11783[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11765;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11784 = state_11744;
state_11744 = G__11784;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11744){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___11768))
})();var state__6378__auto__ = (function (){var statearr_11767 = f__6377__auto__.call(null);(statearr_11767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___11768);
return statearr_11767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___11768))
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
return (function (p__11968){var vec__11969 = p__11968;var v = cljs.core.nth.call(null,vec__11969,(0),null);var p = cljs.core.nth.call(null,vec__11969,(1),null);var job = vec__11969;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6376__auto___12151 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___12151,res,vec__11969,v,p,job,jobs,results){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___12151,res,vec__11969,v,p,job,jobs,results){
return (function (state_11974){var state_val_11975 = (state_11974[(1)]);if((state_val_11975 === (2)))
{var inst_11971 = (state_11974[(2)]);var inst_11972 = cljs.core.async.close_BANG_.call(null,res);var state_11974__$1 = (function (){var statearr_11976 = state_11974;(statearr_11976[(7)] = inst_11971);
return statearr_11976;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11974__$1,inst_11972);
} else
{if((state_val_11975 === (1)))
{var state_11974__$1 = state_11974;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11974__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6376__auto___12151,res,vec__11969,v,p,job,jobs,results))
;return ((function (switch__6361__auto__,c__6376__auto___12151,res,vec__11969,v,p,job,jobs,results){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11980 = [null,null,null,null,null,null,null,null];(statearr_11980[(0)] = state_machine__6362__auto__);
(statearr_11980[(1)] = (1));
return statearr_11980;
});
var state_machine__6362__auto____1 = (function (state_11974){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11981){if((e11981 instanceof Object))
{var ex__6365__auto__ = e11981;var statearr_11982_12152 = state_11974;(statearr_11982_12152[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11981;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12153 = state_11974;
state_11974 = G__12153;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11974){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___12151,res,vec__11969,v,p,job,jobs,results))
})();var state__6378__auto__ = (function (){var statearr_11983 = f__6377__auto__.call(null);(statearr_11983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12151);
return statearr_11983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___12151,res,vec__11969,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11984){var vec__11985 = p__11984;var v = cljs.core.nth.call(null,vec__11985,(0),null);var p = cljs.core.nth.call(null,vec__11985,(1),null);var job = vec__11985;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___12154 = n;var __12155 = (0);while(true){
if((__12155 < n__4416__auto___12154))
{var G__11986_12156 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11986_12156) {
case "async":
var c__6376__auto___12158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12155,c__6376__auto___12158,G__11986_12156,n__4416__auto___12154,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__12155,c__6376__auto___12158,G__11986_12156,n__4416__auto___12154,jobs,results,process,async){
return (function (state_11999){var state_val_12000 = (state_11999[(1)]);if((state_val_12000 === (7)))
{var inst_11995 = (state_11999[(2)]);var state_11999__$1 = state_11999;var statearr_12001_12159 = state_11999__$1;(statearr_12001_12159[(2)] = inst_11995);
(statearr_12001_12159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12000 === (6)))
{var state_11999__$1 = state_11999;var statearr_12002_12160 = state_11999__$1;(statearr_12002_12160[(2)] = null);
(statearr_12002_12160[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12000 === (5)))
{var state_11999__$1 = state_11999;var statearr_12003_12161 = state_11999__$1;(statearr_12003_12161[(2)] = null);
(statearr_12003_12161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12000 === (4)))
{var inst_11989 = (state_11999[(2)]);var inst_11990 = async.call(null,inst_11989);var state_11999__$1 = state_11999;if(cljs.core.truth_(inst_11990))
{var statearr_12004_12162 = state_11999__$1;(statearr_12004_12162[(1)] = (5));
} else
{var statearr_12005_12163 = state_11999__$1;(statearr_12005_12163[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12000 === (3)))
{var inst_11997 = (state_11999[(2)]);var state_11999__$1 = state_11999;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11999__$1,inst_11997);
} else
{if((state_val_12000 === (2)))
{var state_11999__$1 = state_11999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11999__$1,(4),jobs);
} else
{if((state_val_12000 === (1)))
{var state_11999__$1 = state_11999;var statearr_12006_12164 = state_11999__$1;(statearr_12006_12164[(2)] = null);
(statearr_12006_12164[(1)] = (2));
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
});})(__12155,c__6376__auto___12158,G__11986_12156,n__4416__auto___12154,jobs,results,process,async))
;return ((function (__12155,switch__6361__auto__,c__6376__auto___12158,G__11986_12156,n__4416__auto___12154,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12010 = [null,null,null,null,null,null,null];(statearr_12010[(0)] = state_machine__6362__auto__);
(statearr_12010[(1)] = (1));
return statearr_12010;
});
var state_machine__6362__auto____1 = (function (state_11999){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11999);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12011){if((e12011 instanceof Object))
{var ex__6365__auto__ = e12011;var statearr_12012_12165 = state_11999;(statearr_12012_12165[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11999);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12011;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12166 = state_11999;
state_11999 = G__12166;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11999){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__12155,switch__6361__auto__,c__6376__auto___12158,G__11986_12156,n__4416__auto___12154,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_12013 = f__6377__auto__.call(null);(statearr_12013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12158);
return statearr_12013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__12155,c__6376__auto___12158,G__11986_12156,n__4416__auto___12154,jobs,results,process,async))
);

break;
case "compute":
var c__6376__auto___12167 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12155,c__6376__auto___12167,G__11986_12156,n__4416__auto___12154,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__12155,c__6376__auto___12167,G__11986_12156,n__4416__auto___12154,jobs,results,process,async){
return (function (state_12026){var state_val_12027 = (state_12026[(1)]);if((state_val_12027 === (7)))
{var inst_12022 = (state_12026[(2)]);var state_12026__$1 = state_12026;var statearr_12028_12168 = state_12026__$1;(statearr_12028_12168[(2)] = inst_12022);
(statearr_12028_12168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12027 === (6)))
{var state_12026__$1 = state_12026;var statearr_12029_12169 = state_12026__$1;(statearr_12029_12169[(2)] = null);
(statearr_12029_12169[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12027 === (5)))
{var state_12026__$1 = state_12026;var statearr_12030_12170 = state_12026__$1;(statearr_12030_12170[(2)] = null);
(statearr_12030_12170[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12027 === (4)))
{var inst_12016 = (state_12026[(2)]);var inst_12017 = process.call(null,inst_12016);var state_12026__$1 = state_12026;if(cljs.core.truth_(inst_12017))
{var statearr_12031_12171 = state_12026__$1;(statearr_12031_12171[(1)] = (5));
} else
{var statearr_12032_12172 = state_12026__$1;(statearr_12032_12172[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12027 === (3)))
{var inst_12024 = (state_12026[(2)]);var state_12026__$1 = state_12026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12026__$1,inst_12024);
} else
{if((state_val_12027 === (2)))
{var state_12026__$1 = state_12026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12026__$1,(4),jobs);
} else
{if((state_val_12027 === (1)))
{var state_12026__$1 = state_12026;var statearr_12033_12173 = state_12026__$1;(statearr_12033_12173[(2)] = null);
(statearr_12033_12173[(1)] = (2));
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
});})(__12155,c__6376__auto___12167,G__11986_12156,n__4416__auto___12154,jobs,results,process,async))
;return ((function (__12155,switch__6361__auto__,c__6376__auto___12167,G__11986_12156,n__4416__auto___12154,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12037 = [null,null,null,null,null,null,null];(statearr_12037[(0)] = state_machine__6362__auto__);
(statearr_12037[(1)] = (1));
return statearr_12037;
});
var state_machine__6362__auto____1 = (function (state_12026){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12026);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12038){if((e12038 instanceof Object))
{var ex__6365__auto__ = e12038;var statearr_12039_12174 = state_12026;(statearr_12039_12174[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12038;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12175 = state_12026;
state_12026 = G__12175;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12026){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__12155,switch__6361__auto__,c__6376__auto___12167,G__11986_12156,n__4416__auto___12154,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_12040 = f__6377__auto__.call(null);(statearr_12040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12167);
return statearr_12040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__12155,c__6376__auto___12167,G__11986_12156,n__4416__auto___12154,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12176 = (__12155 + (1));
__12155 = G__12176;
continue;
}
} else
{}
break;
}
var c__6376__auto___12177 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___12177,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___12177,jobs,results,process,async){
return (function (state_12062){var state_val_12063 = (state_12062[(1)]);if((state_val_12063 === (9)))
{var inst_12055 = (state_12062[(2)]);var state_12062__$1 = (function (){var statearr_12064 = state_12062;(statearr_12064[(7)] = inst_12055);
return statearr_12064;
})();var statearr_12065_12178 = state_12062__$1;(statearr_12065_12178[(2)] = null);
(statearr_12065_12178[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (8)))
{var inst_12048 = (state_12062[(8)]);var inst_12053 = (state_12062[(2)]);var state_12062__$1 = (function (){var statearr_12066 = state_12062;(statearr_12066[(9)] = inst_12053);
return statearr_12066;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12062__$1,(9),results,inst_12048);
} else
{if((state_val_12063 === (7)))
{var inst_12058 = (state_12062[(2)]);var state_12062__$1 = state_12062;var statearr_12067_12179 = state_12062__$1;(statearr_12067_12179[(2)] = inst_12058);
(statearr_12067_12179[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (6)))
{var inst_12043 = (state_12062[(10)]);var inst_12048 = (state_12062[(8)]);var inst_12048__$1 = cljs.core.async.chan.call(null,(1));var inst_12049 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12050 = [inst_12043,inst_12048__$1];var inst_12051 = (new cljs.core.PersistentVector(null,2,(5),inst_12049,inst_12050,null));var state_12062__$1 = (function (){var statearr_12068 = state_12062;(statearr_12068[(8)] = inst_12048__$1);
return statearr_12068;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12062__$1,(8),jobs,inst_12051);
} else
{if((state_val_12063 === (5)))
{var inst_12046 = cljs.core.async.close_BANG_.call(null,jobs);var state_12062__$1 = state_12062;var statearr_12069_12180 = state_12062__$1;(statearr_12069_12180[(2)] = inst_12046);
(statearr_12069_12180[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (4)))
{var inst_12043 = (state_12062[(10)]);var inst_12043__$1 = (state_12062[(2)]);var inst_12044 = (inst_12043__$1 == null);var state_12062__$1 = (function (){var statearr_12070 = state_12062;(statearr_12070[(10)] = inst_12043__$1);
return statearr_12070;
})();if(cljs.core.truth_(inst_12044))
{var statearr_12071_12181 = state_12062__$1;(statearr_12071_12181[(1)] = (5));
} else
{var statearr_12072_12182 = state_12062__$1;(statearr_12072_12182[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (3)))
{var inst_12060 = (state_12062[(2)]);var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12062__$1,inst_12060);
} else
{if((state_val_12063 === (2)))
{var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12062__$1,(4),from);
} else
{if((state_val_12063 === (1)))
{var state_12062__$1 = state_12062;var statearr_12073_12183 = state_12062__$1;(statearr_12073_12183[(2)] = null);
(statearr_12073_12183[(1)] = (2));
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
});})(c__6376__auto___12177,jobs,results,process,async))
;return ((function (switch__6361__auto__,c__6376__auto___12177,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12077 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12077[(0)] = state_machine__6362__auto__);
(statearr_12077[(1)] = (1));
return statearr_12077;
});
var state_machine__6362__auto____1 = (function (state_12062){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12062);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12078){if((e12078 instanceof Object))
{var ex__6365__auto__ = e12078;var statearr_12079_12184 = state_12062;(statearr_12079_12184[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12078;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12185 = state_12062;
state_12062 = G__12185;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12062){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___12177,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_12080 = f__6377__auto__.call(null);(statearr_12080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12177);
return statearr_12080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___12177,jobs,results,process,async))
);
var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,jobs,results,process,async){
return (function (state_12118){var state_val_12119 = (state_12118[(1)]);if((state_val_12119 === (7)))
{var inst_12114 = (state_12118[(2)]);var state_12118__$1 = state_12118;var statearr_12120_12186 = state_12118__$1;(statearr_12120_12186[(2)] = inst_12114);
(statearr_12120_12186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (20)))
{var state_12118__$1 = state_12118;var statearr_12121_12187 = state_12118__$1;(statearr_12121_12187[(2)] = null);
(statearr_12121_12187[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (1)))
{var state_12118__$1 = state_12118;var statearr_12122_12188 = state_12118__$1;(statearr_12122_12188[(2)] = null);
(statearr_12122_12188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (4)))
{var inst_12083 = (state_12118[(7)]);var inst_12083__$1 = (state_12118[(2)]);var inst_12084 = (inst_12083__$1 == null);var state_12118__$1 = (function (){var statearr_12123 = state_12118;(statearr_12123[(7)] = inst_12083__$1);
return statearr_12123;
})();if(cljs.core.truth_(inst_12084))
{var statearr_12124_12189 = state_12118__$1;(statearr_12124_12189[(1)] = (5));
} else
{var statearr_12125_12190 = state_12118__$1;(statearr_12125_12190[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (15)))
{var inst_12096 = (state_12118[(8)]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12118__$1,(18),to,inst_12096);
} else
{if((state_val_12119 === (21)))
{var inst_12109 = (state_12118[(2)]);var state_12118__$1 = state_12118;var statearr_12126_12191 = state_12118__$1;(statearr_12126_12191[(2)] = inst_12109);
(statearr_12126_12191[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (13)))
{var inst_12111 = (state_12118[(2)]);var state_12118__$1 = (function (){var statearr_12127 = state_12118;(statearr_12127[(9)] = inst_12111);
return statearr_12127;
})();var statearr_12128_12192 = state_12118__$1;(statearr_12128_12192[(2)] = null);
(statearr_12128_12192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (6)))
{var inst_12083 = (state_12118[(7)]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12118__$1,(11),inst_12083);
} else
{if((state_val_12119 === (17)))
{var inst_12104 = (state_12118[(2)]);var state_12118__$1 = state_12118;if(cljs.core.truth_(inst_12104))
{var statearr_12129_12193 = state_12118__$1;(statearr_12129_12193[(1)] = (19));
} else
{var statearr_12130_12194 = state_12118__$1;(statearr_12130_12194[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (3)))
{var inst_12116 = (state_12118[(2)]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12118__$1,inst_12116);
} else
{if((state_val_12119 === (12)))
{var inst_12093 = (state_12118[(10)]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12118__$1,(14),inst_12093);
} else
{if((state_val_12119 === (2)))
{var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12118__$1,(4),results);
} else
{if((state_val_12119 === (19)))
{var state_12118__$1 = state_12118;var statearr_12131_12195 = state_12118__$1;(statearr_12131_12195[(2)] = null);
(statearr_12131_12195[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (11)))
{var inst_12093 = (state_12118[(2)]);var state_12118__$1 = (function (){var statearr_12132 = state_12118;(statearr_12132[(10)] = inst_12093);
return statearr_12132;
})();var statearr_12133_12196 = state_12118__$1;(statearr_12133_12196[(2)] = null);
(statearr_12133_12196[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (9)))
{var state_12118__$1 = state_12118;var statearr_12134_12197 = state_12118__$1;(statearr_12134_12197[(2)] = null);
(statearr_12134_12197[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (5)))
{var state_12118__$1 = state_12118;if(cljs.core.truth_(close_QMARK_))
{var statearr_12135_12198 = state_12118__$1;(statearr_12135_12198[(1)] = (8));
} else
{var statearr_12136_12199 = state_12118__$1;(statearr_12136_12199[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (14)))
{var inst_12098 = (state_12118[(11)]);var inst_12096 = (state_12118[(8)]);var inst_12096__$1 = (state_12118[(2)]);var inst_12097 = (inst_12096__$1 == null);var inst_12098__$1 = cljs.core.not.call(null,inst_12097);var state_12118__$1 = (function (){var statearr_12137 = state_12118;(statearr_12137[(11)] = inst_12098__$1);
(statearr_12137[(8)] = inst_12096__$1);
return statearr_12137;
})();if(inst_12098__$1)
{var statearr_12138_12200 = state_12118__$1;(statearr_12138_12200[(1)] = (15));
} else
{var statearr_12139_12201 = state_12118__$1;(statearr_12139_12201[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (16)))
{var inst_12098 = (state_12118[(11)]);var state_12118__$1 = state_12118;var statearr_12140_12202 = state_12118__$1;(statearr_12140_12202[(2)] = inst_12098);
(statearr_12140_12202[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (10)))
{var inst_12090 = (state_12118[(2)]);var state_12118__$1 = state_12118;var statearr_12141_12203 = state_12118__$1;(statearr_12141_12203[(2)] = inst_12090);
(statearr_12141_12203[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (18)))
{var inst_12101 = (state_12118[(2)]);var state_12118__$1 = state_12118;var statearr_12142_12204 = state_12118__$1;(statearr_12142_12204[(2)] = inst_12101);
(statearr_12142_12204[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12119 === (8)))
{var inst_12087 = cljs.core.async.close_BANG_.call(null,to);var state_12118__$1 = state_12118;var statearr_12143_12205 = state_12118__$1;(statearr_12143_12205[(2)] = inst_12087);
(statearr_12143_12205[(1)] = (10));
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
});})(c__6376__auto__,jobs,results,process,async))
;return ((function (switch__6361__auto__,c__6376__auto__,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12147 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12147[(0)] = state_machine__6362__auto__);
(statearr_12147[(1)] = (1));
return statearr_12147;
});
var state_machine__6362__auto____1 = (function (state_12118){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12118);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12148){if((e12148 instanceof Object))
{var ex__6365__auto__ = e12148;var statearr_12149_12206 = state_12118;(statearr_12149_12206[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12118);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12148;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12207 = state_12118;
state_12118 = G__12207;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12118){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_12150 = f__6377__auto__.call(null);(statearr_12150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_12150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,jobs,results,process,async))
);
return c__6376__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6376__auto___12308 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___12308,tc,fc){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___12308,tc,fc){
return (function (state_12283){var state_val_12284 = (state_12283[(1)]);if((state_val_12284 === (7)))
{var inst_12279 = (state_12283[(2)]);var state_12283__$1 = state_12283;var statearr_12285_12309 = state_12283__$1;(statearr_12285_12309[(2)] = inst_12279);
(statearr_12285_12309[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (1)))
{var state_12283__$1 = state_12283;var statearr_12286_12310 = state_12283__$1;(statearr_12286_12310[(2)] = null);
(statearr_12286_12310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (4)))
{var inst_12260 = (state_12283[(7)]);var inst_12260__$1 = (state_12283[(2)]);var inst_12261 = (inst_12260__$1 == null);var state_12283__$1 = (function (){var statearr_12287 = state_12283;(statearr_12287[(7)] = inst_12260__$1);
return statearr_12287;
})();if(cljs.core.truth_(inst_12261))
{var statearr_12288_12311 = state_12283__$1;(statearr_12288_12311[(1)] = (5));
} else
{var statearr_12289_12312 = state_12283__$1;(statearr_12289_12312[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (13)))
{var state_12283__$1 = state_12283;var statearr_12290_12313 = state_12283__$1;(statearr_12290_12313[(2)] = null);
(statearr_12290_12313[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (6)))
{var inst_12260 = (state_12283[(7)]);var inst_12266 = p.call(null,inst_12260);var state_12283__$1 = state_12283;if(cljs.core.truth_(inst_12266))
{var statearr_12291_12314 = state_12283__$1;(statearr_12291_12314[(1)] = (9));
} else
{var statearr_12292_12315 = state_12283__$1;(statearr_12292_12315[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (3)))
{var inst_12281 = (state_12283[(2)]);var state_12283__$1 = state_12283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12283__$1,inst_12281);
} else
{if((state_val_12284 === (12)))
{var state_12283__$1 = state_12283;var statearr_12293_12316 = state_12283__$1;(statearr_12293_12316[(2)] = null);
(statearr_12293_12316[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (2)))
{var state_12283__$1 = state_12283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12283__$1,(4),ch);
} else
{if((state_val_12284 === (11)))
{var inst_12260 = (state_12283[(7)]);var inst_12270 = (state_12283[(2)]);var state_12283__$1 = state_12283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12283__$1,(8),inst_12270,inst_12260);
} else
{if((state_val_12284 === (9)))
{var state_12283__$1 = state_12283;var statearr_12294_12317 = state_12283__$1;(statearr_12294_12317[(2)] = tc);
(statearr_12294_12317[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (5)))
{var inst_12263 = cljs.core.async.close_BANG_.call(null,tc);var inst_12264 = cljs.core.async.close_BANG_.call(null,fc);var state_12283__$1 = (function (){var statearr_12295 = state_12283;(statearr_12295[(8)] = inst_12263);
return statearr_12295;
})();var statearr_12296_12318 = state_12283__$1;(statearr_12296_12318[(2)] = inst_12264);
(statearr_12296_12318[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (14)))
{var inst_12277 = (state_12283[(2)]);var state_12283__$1 = state_12283;var statearr_12297_12319 = state_12283__$1;(statearr_12297_12319[(2)] = inst_12277);
(statearr_12297_12319[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (10)))
{var state_12283__$1 = state_12283;var statearr_12298_12320 = state_12283__$1;(statearr_12298_12320[(2)] = fc);
(statearr_12298_12320[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12284 === (8)))
{var inst_12272 = (state_12283[(2)]);var state_12283__$1 = state_12283;if(cljs.core.truth_(inst_12272))
{var statearr_12299_12321 = state_12283__$1;(statearr_12299_12321[(1)] = (12));
} else
{var statearr_12300_12322 = state_12283__$1;(statearr_12300_12322[(1)] = (13));
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
});})(c__6376__auto___12308,tc,fc))
;return ((function (switch__6361__auto__,c__6376__auto___12308,tc,fc){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12304 = [null,null,null,null,null,null,null,null,null];(statearr_12304[(0)] = state_machine__6362__auto__);
(statearr_12304[(1)] = (1));
return statearr_12304;
});
var state_machine__6362__auto____1 = (function (state_12283){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12305){if((e12305 instanceof Object))
{var ex__6365__auto__ = e12305;var statearr_12306_12323 = state_12283;(statearr_12306_12323[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12305;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12324 = state_12283;
state_12283 = G__12324;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12283){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___12308,tc,fc))
})();var state__6378__auto__ = (function (){var statearr_12307 = f__6377__auto__.call(null);(statearr_12307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12308);
return statearr_12307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___12308,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__){
return (function (state_12371){var state_val_12372 = (state_12371[(1)]);if((state_val_12372 === (7)))
{var inst_12367 = (state_12371[(2)]);var state_12371__$1 = state_12371;var statearr_12373_12389 = state_12371__$1;(statearr_12373_12389[(2)] = inst_12367);
(statearr_12373_12389[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12372 === (6)))
{var inst_12357 = (state_12371[(7)]);var inst_12360 = (state_12371[(8)]);var inst_12364 = f.call(null,inst_12357,inst_12360);var inst_12357__$1 = inst_12364;var state_12371__$1 = (function (){var statearr_12374 = state_12371;(statearr_12374[(7)] = inst_12357__$1);
return statearr_12374;
})();var statearr_12375_12390 = state_12371__$1;(statearr_12375_12390[(2)] = null);
(statearr_12375_12390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12372 === (5)))
{var inst_12357 = (state_12371[(7)]);var state_12371__$1 = state_12371;var statearr_12376_12391 = state_12371__$1;(statearr_12376_12391[(2)] = inst_12357);
(statearr_12376_12391[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12372 === (4)))
{var inst_12360 = (state_12371[(8)]);var inst_12360__$1 = (state_12371[(2)]);var inst_12361 = (inst_12360__$1 == null);var state_12371__$1 = (function (){var statearr_12377 = state_12371;(statearr_12377[(8)] = inst_12360__$1);
return statearr_12377;
})();if(cljs.core.truth_(inst_12361))
{var statearr_12378_12392 = state_12371__$1;(statearr_12378_12392[(1)] = (5));
} else
{var statearr_12379_12393 = state_12371__$1;(statearr_12379_12393[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12372 === (3)))
{var inst_12369 = (state_12371[(2)]);var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12371__$1,inst_12369);
} else
{if((state_val_12372 === (2)))
{var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12371__$1,(4),ch);
} else
{if((state_val_12372 === (1)))
{var inst_12357 = init;var state_12371__$1 = (function (){var statearr_12380 = state_12371;(statearr_12380[(7)] = inst_12357);
return statearr_12380;
})();var statearr_12381_12394 = state_12371__$1;(statearr_12381_12394[(2)] = null);
(statearr_12381_12394[(1)] = (2));
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
});})(c__6376__auto__))
;return ((function (switch__6361__auto__,c__6376__auto__){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12385 = [null,null,null,null,null,null,null,null,null];(statearr_12385[(0)] = state_machine__6362__auto__);
(statearr_12385[(1)] = (1));
return statearr_12385;
});
var state_machine__6362__auto____1 = (function (state_12371){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12371);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12386){if((e12386 instanceof Object))
{var ex__6365__auto__ = e12386;var statearr_12387_12395 = state_12371;(statearr_12387_12395[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12386;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12396 = state_12371;
state_12371 = G__12396;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12371){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_12388 = f__6377__auto__.call(null);(statearr_12388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_12388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__))
);
return c__6376__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__){
return (function (state_12470){var state_val_12471 = (state_12470[(1)]);if((state_val_12471 === (7)))
{var inst_12452 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12472_12495 = state_12470__$1;(statearr_12472_12495[(2)] = inst_12452);
(statearr_12472_12495[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (1)))
{var inst_12446 = cljs.core.seq.call(null,coll);var inst_12447 = inst_12446;var state_12470__$1 = (function (){var statearr_12473 = state_12470;(statearr_12473[(7)] = inst_12447);
return statearr_12473;
})();var statearr_12474_12496 = state_12470__$1;(statearr_12474_12496[(2)] = null);
(statearr_12474_12496[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (4)))
{var inst_12447 = (state_12470[(7)]);var inst_12450 = cljs.core.first.call(null,inst_12447);var state_12470__$1 = state_12470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12470__$1,(7),ch,inst_12450);
} else
{if((state_val_12471 === (13)))
{var inst_12464 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12475_12497 = state_12470__$1;(statearr_12475_12497[(2)] = inst_12464);
(statearr_12475_12497[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (6)))
{var inst_12455 = (state_12470[(2)]);var state_12470__$1 = state_12470;if(cljs.core.truth_(inst_12455))
{var statearr_12476_12498 = state_12470__$1;(statearr_12476_12498[(1)] = (8));
} else
{var statearr_12477_12499 = state_12470__$1;(statearr_12477_12499[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (3)))
{var inst_12468 = (state_12470[(2)]);var state_12470__$1 = state_12470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12470__$1,inst_12468);
} else
{if((state_val_12471 === (12)))
{var state_12470__$1 = state_12470;var statearr_12478_12500 = state_12470__$1;(statearr_12478_12500[(2)] = null);
(statearr_12478_12500[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (2)))
{var inst_12447 = (state_12470[(7)]);var state_12470__$1 = state_12470;if(cljs.core.truth_(inst_12447))
{var statearr_12479_12501 = state_12470__$1;(statearr_12479_12501[(1)] = (4));
} else
{var statearr_12480_12502 = state_12470__$1;(statearr_12480_12502[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (11)))
{var inst_12461 = cljs.core.async.close_BANG_.call(null,ch);var state_12470__$1 = state_12470;var statearr_12481_12503 = state_12470__$1;(statearr_12481_12503[(2)] = inst_12461);
(statearr_12481_12503[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (9)))
{var state_12470__$1 = state_12470;if(cljs.core.truth_(close_QMARK_))
{var statearr_12482_12504 = state_12470__$1;(statearr_12482_12504[(1)] = (11));
} else
{var statearr_12483_12505 = state_12470__$1;(statearr_12483_12505[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (5)))
{var inst_12447 = (state_12470[(7)]);var state_12470__$1 = state_12470;var statearr_12484_12506 = state_12470__$1;(statearr_12484_12506[(2)] = inst_12447);
(statearr_12484_12506[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (10)))
{var inst_12466 = (state_12470[(2)]);var state_12470__$1 = state_12470;var statearr_12485_12507 = state_12470__$1;(statearr_12485_12507[(2)] = inst_12466);
(statearr_12485_12507[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12471 === (8)))
{var inst_12447 = (state_12470[(7)]);var inst_12457 = cljs.core.next.call(null,inst_12447);var inst_12447__$1 = inst_12457;var state_12470__$1 = (function (){var statearr_12486 = state_12470;(statearr_12486[(7)] = inst_12447__$1);
return statearr_12486;
})();var statearr_12487_12508 = state_12470__$1;(statearr_12487_12508[(2)] = null);
(statearr_12487_12508[(1)] = (2));
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
});})(c__6376__auto__))
;return ((function (switch__6361__auto__,c__6376__auto__){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12491 = [null,null,null,null,null,null,null,null];(statearr_12491[(0)] = state_machine__6362__auto__);
(statearr_12491[(1)] = (1));
return statearr_12491;
});
var state_machine__6362__auto____1 = (function (state_12470){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12470);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12492){if((e12492 instanceof Object))
{var ex__6365__auto__ = e12492;var statearr_12493_12509 = state_12470;(statearr_12493_12509[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12510 = state_12470;
state_12470 = G__12510;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12470){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_12494 = f__6377__auto__.call(null);(statearr_12494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_12494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__))
);
return c__6376__auto__;
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
cljs.core.async.Mux = (function (){var obj12512 = {};return obj12512;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12514 = {};return obj12514;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12736 = (function (cs,ch,mult,meta12737){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12737 = meta12737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12736.cljs$lang$type = true;
cljs.core.async.t12736.cljs$lang$ctorStr = "cljs.core.async/t12736";
cljs.core.async.t12736.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12736");
});})(cs))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12736.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12736.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12738){var self__ = this;
var _12738__$1 = this;return self__.meta12737;
});})(cs))
;
cljs.core.async.t12736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12738,meta12737__$1){var self__ = this;
var _12738__$1 = this;return (new cljs.core.async.t12736(self__.cs,self__.ch,self__.mult,meta12737__$1));
});})(cs))
;
cljs.core.async.__GT_t12736 = ((function (cs){
return (function __GT_t12736(cs__$1,ch__$1,mult__$1,meta12737){return (new cljs.core.async.t12736(cs__$1,ch__$1,mult__$1,meta12737));
});})(cs))
;
}
return (new cljs.core.async.t12736(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6376__auto___12957 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___12957,cs,m,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___12957,cs,m,dchan,dctr,done){
return (function (state_12869){var state_val_12870 = (state_12869[(1)]);if((state_val_12870 === (7)))
{var inst_12865 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12871_12958 = state_12869__$1;(statearr_12871_12958[(2)] = inst_12865);
(statearr_12871_12958[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (20)))
{var inst_12770 = (state_12869[(7)]);var inst_12780 = cljs.core.first.call(null,inst_12770);var inst_12781 = cljs.core.nth.call(null,inst_12780,(0),null);var inst_12782 = cljs.core.nth.call(null,inst_12780,(1),null);var state_12869__$1 = (function (){var statearr_12872 = state_12869;(statearr_12872[(8)] = inst_12781);
return statearr_12872;
})();if(cljs.core.truth_(inst_12782))
{var statearr_12873_12959 = state_12869__$1;(statearr_12873_12959[(1)] = (22));
} else
{var statearr_12874_12960 = state_12869__$1;(statearr_12874_12960[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (27)))
{var inst_12741 = (state_12869[(9)]);var inst_12817 = (state_12869[(10)]);var inst_12810 = (state_12869[(11)]);var inst_12812 = (state_12869[(12)]);var inst_12817__$1 = cljs.core._nth.call(null,inst_12810,inst_12812);var inst_12818 = cljs.core.async.put_BANG_.call(null,inst_12817__$1,inst_12741,done);var state_12869__$1 = (function (){var statearr_12875 = state_12869;(statearr_12875[(10)] = inst_12817__$1);
return statearr_12875;
})();if(cljs.core.truth_(inst_12818))
{var statearr_12876_12961 = state_12869__$1;(statearr_12876_12961[(1)] = (30));
} else
{var statearr_12877_12962 = state_12869__$1;(statearr_12877_12962[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (1)))
{var state_12869__$1 = state_12869;var statearr_12878_12963 = state_12869__$1;(statearr_12878_12963[(2)] = null);
(statearr_12878_12963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (24)))
{var inst_12770 = (state_12869[(7)]);var inst_12787 = (state_12869[(2)]);var inst_12788 = cljs.core.next.call(null,inst_12770);var inst_12750 = inst_12788;var inst_12751 = null;var inst_12752 = (0);var inst_12753 = (0);var state_12869__$1 = (function (){var statearr_12879 = state_12869;(statearr_12879[(13)] = inst_12750);
(statearr_12879[(14)] = inst_12787);
(statearr_12879[(15)] = inst_12752);
(statearr_12879[(16)] = inst_12751);
(statearr_12879[(17)] = inst_12753);
return statearr_12879;
})();var statearr_12880_12964 = state_12869__$1;(statearr_12880_12964[(2)] = null);
(statearr_12880_12964[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (39)))
{var state_12869__$1 = state_12869;var statearr_12884_12965 = state_12869__$1;(statearr_12884_12965[(2)] = null);
(statearr_12884_12965[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (4)))
{var inst_12741 = (state_12869[(9)]);var inst_12741__$1 = (state_12869[(2)]);var inst_12742 = (inst_12741__$1 == null);var state_12869__$1 = (function (){var statearr_12885 = state_12869;(statearr_12885[(9)] = inst_12741__$1);
return statearr_12885;
})();if(cljs.core.truth_(inst_12742))
{var statearr_12886_12966 = state_12869__$1;(statearr_12886_12966[(1)] = (5));
} else
{var statearr_12887_12967 = state_12869__$1;(statearr_12887_12967[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (15)))
{var inst_12750 = (state_12869[(13)]);var inst_12752 = (state_12869[(15)]);var inst_12751 = (state_12869[(16)]);var inst_12753 = (state_12869[(17)]);var inst_12766 = (state_12869[(2)]);var inst_12767 = (inst_12753 + (1));var tmp12881 = inst_12750;var tmp12882 = inst_12752;var tmp12883 = inst_12751;var inst_12750__$1 = tmp12881;var inst_12751__$1 = tmp12883;var inst_12752__$1 = tmp12882;var inst_12753__$1 = inst_12767;var state_12869__$1 = (function (){var statearr_12888 = state_12869;(statearr_12888[(13)] = inst_12750__$1);
(statearr_12888[(15)] = inst_12752__$1);
(statearr_12888[(18)] = inst_12766);
(statearr_12888[(16)] = inst_12751__$1);
(statearr_12888[(17)] = inst_12753__$1);
return statearr_12888;
})();var statearr_12889_12968 = state_12869__$1;(statearr_12889_12968[(2)] = null);
(statearr_12889_12968[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (21)))
{var inst_12791 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12893_12969 = state_12869__$1;(statearr_12893_12969[(2)] = inst_12791);
(statearr_12893_12969[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (31)))
{var inst_12817 = (state_12869[(10)]);var inst_12821 = done.call(null,null);var inst_12822 = cljs.core.async.untap_STAR_.call(null,m,inst_12817);var state_12869__$1 = (function (){var statearr_12894 = state_12869;(statearr_12894[(19)] = inst_12821);
return statearr_12894;
})();var statearr_12895_12970 = state_12869__$1;(statearr_12895_12970[(2)] = inst_12822);
(statearr_12895_12970[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (32)))
{var inst_12811 = (state_12869[(20)]);var inst_12809 = (state_12869[(21)]);var inst_12810 = (state_12869[(11)]);var inst_12812 = (state_12869[(12)]);var inst_12824 = (state_12869[(2)]);var inst_12825 = (inst_12812 + (1));var tmp12890 = inst_12811;var tmp12891 = inst_12809;var tmp12892 = inst_12810;var inst_12809__$1 = tmp12891;var inst_12810__$1 = tmp12892;var inst_12811__$1 = tmp12890;var inst_12812__$1 = inst_12825;var state_12869__$1 = (function (){var statearr_12896 = state_12869;(statearr_12896[(20)] = inst_12811__$1);
(statearr_12896[(21)] = inst_12809__$1);
(statearr_12896[(11)] = inst_12810__$1);
(statearr_12896[(12)] = inst_12812__$1);
(statearr_12896[(22)] = inst_12824);
return statearr_12896;
})();var statearr_12897_12971 = state_12869__$1;(statearr_12897_12971[(2)] = null);
(statearr_12897_12971[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (40)))
{var inst_12837 = (state_12869[(23)]);var inst_12841 = done.call(null,null);var inst_12842 = cljs.core.async.untap_STAR_.call(null,m,inst_12837);var state_12869__$1 = (function (){var statearr_12898 = state_12869;(statearr_12898[(24)] = inst_12841);
return statearr_12898;
})();var statearr_12899_12972 = state_12869__$1;(statearr_12899_12972[(2)] = inst_12842);
(statearr_12899_12972[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (33)))
{var inst_12828 = (state_12869[(25)]);var inst_12830 = cljs.core.chunked_seq_QMARK_.call(null,inst_12828);var state_12869__$1 = state_12869;if(inst_12830)
{var statearr_12900_12973 = state_12869__$1;(statearr_12900_12973[(1)] = (36));
} else
{var statearr_12901_12974 = state_12869__$1;(statearr_12901_12974[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (13)))
{var inst_12760 = (state_12869[(26)]);var inst_12763 = cljs.core.async.close_BANG_.call(null,inst_12760);var state_12869__$1 = state_12869;var statearr_12902_12975 = state_12869__$1;(statearr_12902_12975[(2)] = inst_12763);
(statearr_12902_12975[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (22)))
{var inst_12781 = (state_12869[(8)]);var inst_12784 = cljs.core.async.close_BANG_.call(null,inst_12781);var state_12869__$1 = state_12869;var statearr_12903_12976 = state_12869__$1;(statearr_12903_12976[(2)] = inst_12784);
(statearr_12903_12976[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (36)))
{var inst_12828 = (state_12869[(25)]);var inst_12832 = cljs.core.chunk_first.call(null,inst_12828);var inst_12833 = cljs.core.chunk_rest.call(null,inst_12828);var inst_12834 = cljs.core.count.call(null,inst_12832);var inst_12809 = inst_12833;var inst_12810 = inst_12832;var inst_12811 = inst_12834;var inst_12812 = (0);var state_12869__$1 = (function (){var statearr_12904 = state_12869;(statearr_12904[(20)] = inst_12811);
(statearr_12904[(21)] = inst_12809);
(statearr_12904[(11)] = inst_12810);
(statearr_12904[(12)] = inst_12812);
return statearr_12904;
})();var statearr_12905_12977 = state_12869__$1;(statearr_12905_12977[(2)] = null);
(statearr_12905_12977[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (41)))
{var inst_12828 = (state_12869[(25)]);var inst_12844 = (state_12869[(2)]);var inst_12845 = cljs.core.next.call(null,inst_12828);var inst_12809 = inst_12845;var inst_12810 = null;var inst_12811 = (0);var inst_12812 = (0);var state_12869__$1 = (function (){var statearr_12906 = state_12869;(statearr_12906[(20)] = inst_12811);
(statearr_12906[(27)] = inst_12844);
(statearr_12906[(21)] = inst_12809);
(statearr_12906[(11)] = inst_12810);
(statearr_12906[(12)] = inst_12812);
return statearr_12906;
})();var statearr_12907_12978 = state_12869__$1;(statearr_12907_12978[(2)] = null);
(statearr_12907_12978[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (43)))
{var state_12869__$1 = state_12869;var statearr_12908_12979 = state_12869__$1;(statearr_12908_12979[(2)] = null);
(statearr_12908_12979[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (29)))
{var inst_12853 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12909_12980 = state_12869__$1;(statearr_12909_12980[(2)] = inst_12853);
(statearr_12909_12980[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (44)))
{var inst_12862 = (state_12869[(2)]);var state_12869__$1 = (function (){var statearr_12910 = state_12869;(statearr_12910[(28)] = inst_12862);
return statearr_12910;
})();var statearr_12911_12981 = state_12869__$1;(statearr_12911_12981[(2)] = null);
(statearr_12911_12981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (6)))
{var inst_12801 = (state_12869[(29)]);var inst_12800 = cljs.core.deref.call(null,cs);var inst_12801__$1 = cljs.core.keys.call(null,inst_12800);var inst_12802 = cljs.core.count.call(null,inst_12801__$1);var inst_12803 = cljs.core.reset_BANG_.call(null,dctr,inst_12802);var inst_12808 = cljs.core.seq.call(null,inst_12801__$1);var inst_12809 = inst_12808;var inst_12810 = null;var inst_12811 = (0);var inst_12812 = (0);var state_12869__$1 = (function (){var statearr_12912 = state_12869;(statearr_12912[(20)] = inst_12811);
(statearr_12912[(30)] = inst_12803);
(statearr_12912[(21)] = inst_12809);
(statearr_12912[(11)] = inst_12810);
(statearr_12912[(12)] = inst_12812);
(statearr_12912[(29)] = inst_12801__$1);
return statearr_12912;
})();var statearr_12913_12982 = state_12869__$1;(statearr_12913_12982[(2)] = null);
(statearr_12913_12982[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (28)))
{var inst_12809 = (state_12869[(21)]);var inst_12828 = (state_12869[(25)]);var inst_12828__$1 = cljs.core.seq.call(null,inst_12809);var state_12869__$1 = (function (){var statearr_12914 = state_12869;(statearr_12914[(25)] = inst_12828__$1);
return statearr_12914;
})();if(inst_12828__$1)
{var statearr_12915_12983 = state_12869__$1;(statearr_12915_12983[(1)] = (33));
} else
{var statearr_12916_12984 = state_12869__$1;(statearr_12916_12984[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (25)))
{var inst_12811 = (state_12869[(20)]);var inst_12812 = (state_12869[(12)]);var inst_12814 = (inst_12812 < inst_12811);var inst_12815 = inst_12814;var state_12869__$1 = state_12869;if(cljs.core.truth_(inst_12815))
{var statearr_12917_12985 = state_12869__$1;(statearr_12917_12985[(1)] = (27));
} else
{var statearr_12918_12986 = state_12869__$1;(statearr_12918_12986[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (34)))
{var state_12869__$1 = state_12869;var statearr_12919_12987 = state_12869__$1;(statearr_12919_12987[(2)] = null);
(statearr_12919_12987[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (17)))
{var state_12869__$1 = state_12869;var statearr_12920_12988 = state_12869__$1;(statearr_12920_12988[(2)] = null);
(statearr_12920_12988[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (3)))
{var inst_12867 = (state_12869[(2)]);var state_12869__$1 = state_12869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12869__$1,inst_12867);
} else
{if((state_val_12870 === (12)))
{var inst_12796 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12921_12989 = state_12869__$1;(statearr_12921_12989[(2)] = inst_12796);
(statearr_12921_12989[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (2)))
{var state_12869__$1 = state_12869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12869__$1,(4),ch);
} else
{if((state_val_12870 === (23)))
{var state_12869__$1 = state_12869;var statearr_12922_12990 = state_12869__$1;(statearr_12922_12990[(2)] = null);
(statearr_12922_12990[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (35)))
{var inst_12851 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12923_12991 = state_12869__$1;(statearr_12923_12991[(2)] = inst_12851);
(statearr_12923_12991[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (19)))
{var inst_12770 = (state_12869[(7)]);var inst_12774 = cljs.core.chunk_first.call(null,inst_12770);var inst_12775 = cljs.core.chunk_rest.call(null,inst_12770);var inst_12776 = cljs.core.count.call(null,inst_12774);var inst_12750 = inst_12775;var inst_12751 = inst_12774;var inst_12752 = inst_12776;var inst_12753 = (0);var state_12869__$1 = (function (){var statearr_12924 = state_12869;(statearr_12924[(13)] = inst_12750);
(statearr_12924[(15)] = inst_12752);
(statearr_12924[(16)] = inst_12751);
(statearr_12924[(17)] = inst_12753);
return statearr_12924;
})();var statearr_12925_12992 = state_12869__$1;(statearr_12925_12992[(2)] = null);
(statearr_12925_12992[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (11)))
{var inst_12770 = (state_12869[(7)]);var inst_12750 = (state_12869[(13)]);var inst_12770__$1 = cljs.core.seq.call(null,inst_12750);var state_12869__$1 = (function (){var statearr_12926 = state_12869;(statearr_12926[(7)] = inst_12770__$1);
return statearr_12926;
})();if(inst_12770__$1)
{var statearr_12927_12993 = state_12869__$1;(statearr_12927_12993[(1)] = (16));
} else
{var statearr_12928_12994 = state_12869__$1;(statearr_12928_12994[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (9)))
{var inst_12798 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12929_12995 = state_12869__$1;(statearr_12929_12995[(2)] = inst_12798);
(statearr_12929_12995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (5)))
{var inst_12748 = cljs.core.deref.call(null,cs);var inst_12749 = cljs.core.seq.call(null,inst_12748);var inst_12750 = inst_12749;var inst_12751 = null;var inst_12752 = (0);var inst_12753 = (0);var state_12869__$1 = (function (){var statearr_12930 = state_12869;(statearr_12930[(13)] = inst_12750);
(statearr_12930[(15)] = inst_12752);
(statearr_12930[(16)] = inst_12751);
(statearr_12930[(17)] = inst_12753);
return statearr_12930;
})();var statearr_12931_12996 = state_12869__$1;(statearr_12931_12996[(2)] = null);
(statearr_12931_12996[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (14)))
{var state_12869__$1 = state_12869;var statearr_12932_12997 = state_12869__$1;(statearr_12932_12997[(2)] = null);
(statearr_12932_12997[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (45)))
{var inst_12859 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12933_12998 = state_12869__$1;(statearr_12933_12998[(2)] = inst_12859);
(statearr_12933_12998[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (26)))
{var inst_12801 = (state_12869[(29)]);var inst_12855 = (state_12869[(2)]);var inst_12856 = cljs.core.seq.call(null,inst_12801);var state_12869__$1 = (function (){var statearr_12934 = state_12869;(statearr_12934[(31)] = inst_12855);
return statearr_12934;
})();if(inst_12856)
{var statearr_12935_12999 = state_12869__$1;(statearr_12935_12999[(1)] = (42));
} else
{var statearr_12936_13000 = state_12869__$1;(statearr_12936_13000[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (16)))
{var inst_12770 = (state_12869[(7)]);var inst_12772 = cljs.core.chunked_seq_QMARK_.call(null,inst_12770);var state_12869__$1 = state_12869;if(inst_12772)
{var statearr_12937_13001 = state_12869__$1;(statearr_12937_13001[(1)] = (19));
} else
{var statearr_12938_13002 = state_12869__$1;(statearr_12938_13002[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (38)))
{var inst_12848 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12939_13003 = state_12869__$1;(statearr_12939_13003[(2)] = inst_12848);
(statearr_12939_13003[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (30)))
{var state_12869__$1 = state_12869;var statearr_12940_13004 = state_12869__$1;(statearr_12940_13004[(2)] = null);
(statearr_12940_13004[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (10)))
{var inst_12751 = (state_12869[(16)]);var inst_12753 = (state_12869[(17)]);var inst_12759 = cljs.core._nth.call(null,inst_12751,inst_12753);var inst_12760 = cljs.core.nth.call(null,inst_12759,(0),null);var inst_12761 = cljs.core.nth.call(null,inst_12759,(1),null);var state_12869__$1 = (function (){var statearr_12941 = state_12869;(statearr_12941[(26)] = inst_12760);
return statearr_12941;
})();if(cljs.core.truth_(inst_12761))
{var statearr_12942_13005 = state_12869__$1;(statearr_12942_13005[(1)] = (13));
} else
{var statearr_12943_13006 = state_12869__$1;(statearr_12943_13006[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (18)))
{var inst_12794 = (state_12869[(2)]);var state_12869__$1 = state_12869;var statearr_12944_13007 = state_12869__$1;(statearr_12944_13007[(2)] = inst_12794);
(statearr_12944_13007[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (42)))
{var state_12869__$1 = state_12869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12869__$1,(45),dchan);
} else
{if((state_val_12870 === (37)))
{var inst_12741 = (state_12869[(9)]);var inst_12837 = (state_12869[(23)]);var inst_12828 = (state_12869[(25)]);var inst_12837__$1 = cljs.core.first.call(null,inst_12828);var inst_12838 = cljs.core.async.put_BANG_.call(null,inst_12837__$1,inst_12741,done);var state_12869__$1 = (function (){var statearr_12945 = state_12869;(statearr_12945[(23)] = inst_12837__$1);
return statearr_12945;
})();if(cljs.core.truth_(inst_12838))
{var statearr_12946_13008 = state_12869__$1;(statearr_12946_13008[(1)] = (39));
} else
{var statearr_12947_13009 = state_12869__$1;(statearr_12947_13009[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12870 === (8)))
{var inst_12752 = (state_12869[(15)]);var inst_12753 = (state_12869[(17)]);var inst_12755 = (inst_12753 < inst_12752);var inst_12756 = inst_12755;var state_12869__$1 = state_12869;if(cljs.core.truth_(inst_12756))
{var statearr_12948_13010 = state_12869__$1;(statearr_12948_13010[(1)] = (10));
} else
{var statearr_12949_13011 = state_12869__$1;(statearr_12949_13011[(1)] = (11));
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
});})(c__6376__auto___12957,cs,m,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___12957,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12953[(0)] = state_machine__6362__auto__);
(statearr_12953[(1)] = (1));
return statearr_12953;
});
var state_machine__6362__auto____1 = (function (state_12869){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12954){if((e12954 instanceof Object))
{var ex__6365__auto__ = e12954;var statearr_12955_13012 = state_12869;(statearr_12955_13012[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13013 = state_12869;
state_12869 = G__13013;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12869){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___12957,cs,m,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_12956 = f__6377__auto__.call(null);(statearr_12956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12957);
return statearr_12956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___12957,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13015 = {};return obj13015;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13135 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13136){
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
this.meta13136 = meta13136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13135.cljs$lang$type = true;
cljs.core.async.t13135.cljs$lang$ctorStr = "cljs.core.async/t13135";
cljs.core.async.t13135.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13135");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13135.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13137){var self__ = this;
var _13137__$1 = this;return self__.meta13136;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13137,meta13136__$1){var self__ = this;
var _13137__$1 = this;return (new cljs.core.async.t13135(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13136__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13135 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13135(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13136){return (new cljs.core.async.t13135(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13136));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13135(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6376__auto___13254 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13207){var state_val_13208 = (state_13207[(1)]);if((state_val_13208 === (7)))
{var inst_13151 = (state_13207[(7)]);var inst_13156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13151);var state_13207__$1 = state_13207;var statearr_13209_13255 = state_13207__$1;(statearr_13209_13255[(2)] = inst_13156);
(statearr_13209_13255[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (20)))
{var inst_13166 = (state_13207[(8)]);var state_13207__$1 = state_13207;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13207__$1,(23),out,inst_13166);
} else
{if((state_val_13208 === (1)))
{var inst_13141 = (state_13207[(9)]);var inst_13141__$1 = calc_state.call(null);var inst_13142 = cljs.core.seq_QMARK_.call(null,inst_13141__$1);var state_13207__$1 = (function (){var statearr_13210 = state_13207;(statearr_13210[(9)] = inst_13141__$1);
return statearr_13210;
})();if(inst_13142)
{var statearr_13211_13256 = state_13207__$1;(statearr_13211_13256[(1)] = (2));
} else
{var statearr_13212_13257 = state_13207__$1;(statearr_13212_13257[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (24)))
{var inst_13159 = (state_13207[(10)]);var inst_13151 = inst_13159;var state_13207__$1 = (function (){var statearr_13213 = state_13207;(statearr_13213[(7)] = inst_13151);
return statearr_13213;
})();var statearr_13214_13258 = state_13207__$1;(statearr_13214_13258[(2)] = null);
(statearr_13214_13258[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (4)))
{var inst_13141 = (state_13207[(9)]);var inst_13147 = (state_13207[(2)]);var inst_13148 = cljs.core.get.call(null,inst_13147,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13149 = cljs.core.get.call(null,inst_13147,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13150 = cljs.core.get.call(null,inst_13147,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13151 = inst_13141;var state_13207__$1 = (function (){var statearr_13215 = state_13207;(statearr_13215[(7)] = inst_13151);
(statearr_13215[(11)] = inst_13150);
(statearr_13215[(12)] = inst_13148);
(statearr_13215[(13)] = inst_13149);
return statearr_13215;
})();var statearr_13216_13259 = state_13207__$1;(statearr_13216_13259[(2)] = null);
(statearr_13216_13259[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (15)))
{var state_13207__$1 = state_13207;var statearr_13217_13260 = state_13207__$1;(statearr_13217_13260[(2)] = null);
(statearr_13217_13260[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (21)))
{var inst_13159 = (state_13207[(10)]);var inst_13151 = inst_13159;var state_13207__$1 = (function (){var statearr_13218 = state_13207;(statearr_13218[(7)] = inst_13151);
return statearr_13218;
})();var statearr_13219_13261 = state_13207__$1;(statearr_13219_13261[(2)] = null);
(statearr_13219_13261[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (13)))
{var inst_13203 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13220_13262 = state_13207__$1;(statearr_13220_13262[(2)] = inst_13203);
(statearr_13220_13262[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (22)))
{var inst_13201 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13221_13263 = state_13207__$1;(statearr_13221_13263[(2)] = inst_13201);
(statearr_13221_13263[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (6)))
{var inst_13205 = (state_13207[(2)]);var state_13207__$1 = state_13207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13207__$1,inst_13205);
} else
{if((state_val_13208 === (25)))
{var state_13207__$1 = state_13207;var statearr_13222_13264 = state_13207__$1;(statearr_13222_13264[(2)] = null);
(statearr_13222_13264[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (17)))
{var inst_13181 = (state_13207[(14)]);var state_13207__$1 = state_13207;var statearr_13223_13265 = state_13207__$1;(statearr_13223_13265[(2)] = inst_13181);
(statearr_13223_13265[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (3)))
{var inst_13141 = (state_13207[(9)]);var state_13207__$1 = state_13207;var statearr_13224_13266 = state_13207__$1;(statearr_13224_13266[(2)] = inst_13141);
(statearr_13224_13266[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (12)))
{var inst_13181 = (state_13207[(14)]);var inst_13162 = (state_13207[(15)]);var inst_13167 = (state_13207[(16)]);var inst_13181__$1 = inst_13162.call(null,inst_13167);var state_13207__$1 = (function (){var statearr_13225 = state_13207;(statearr_13225[(14)] = inst_13181__$1);
return statearr_13225;
})();if(cljs.core.truth_(inst_13181__$1))
{var statearr_13226_13267 = state_13207__$1;(statearr_13226_13267[(1)] = (17));
} else
{var statearr_13227_13268 = state_13207__$1;(statearr_13227_13268[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (2)))
{var inst_13141 = (state_13207[(9)]);var inst_13144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13141);var state_13207__$1 = state_13207;var statearr_13228_13269 = state_13207__$1;(statearr_13228_13269[(2)] = inst_13144);
(statearr_13228_13269[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (23)))
{var inst_13192 = (state_13207[(2)]);var state_13207__$1 = state_13207;if(cljs.core.truth_(inst_13192))
{var statearr_13229_13270 = state_13207__$1;(statearr_13229_13270[(1)] = (24));
} else
{var statearr_13230_13271 = state_13207__$1;(statearr_13230_13271[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (19)))
{var inst_13189 = (state_13207[(2)]);var state_13207__$1 = state_13207;if(cljs.core.truth_(inst_13189))
{var statearr_13231_13272 = state_13207__$1;(statearr_13231_13272[(1)] = (20));
} else
{var statearr_13232_13273 = state_13207__$1;(statearr_13232_13273[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (11)))
{var inst_13166 = (state_13207[(8)]);var inst_13172 = (inst_13166 == null);var state_13207__$1 = state_13207;if(cljs.core.truth_(inst_13172))
{var statearr_13233_13274 = state_13207__$1;(statearr_13233_13274[(1)] = (14));
} else
{var statearr_13234_13275 = state_13207__$1;(statearr_13234_13275[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (9)))
{var inst_13159 = (state_13207[(10)]);var inst_13159__$1 = (state_13207[(2)]);var inst_13160 = cljs.core.get.call(null,inst_13159__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13161 = cljs.core.get.call(null,inst_13159__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13162 = cljs.core.get.call(null,inst_13159__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13207__$1 = (function (){var statearr_13235 = state_13207;(statearr_13235[(10)] = inst_13159__$1);
(statearr_13235[(17)] = inst_13161);
(statearr_13235[(15)] = inst_13162);
return statearr_13235;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13207__$1,(10),inst_13160);
} else
{if((state_val_13208 === (5)))
{var inst_13151 = (state_13207[(7)]);var inst_13154 = cljs.core.seq_QMARK_.call(null,inst_13151);var state_13207__$1 = state_13207;if(inst_13154)
{var statearr_13236_13276 = state_13207__$1;(statearr_13236_13276[(1)] = (7));
} else
{var statearr_13237_13277 = state_13207__$1;(statearr_13237_13277[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (14)))
{var inst_13167 = (state_13207[(16)]);var inst_13174 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13167);var state_13207__$1 = state_13207;var statearr_13238_13278 = state_13207__$1;(statearr_13238_13278[(2)] = inst_13174);
(statearr_13238_13278[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (26)))
{var inst_13197 = (state_13207[(2)]);var state_13207__$1 = state_13207;var statearr_13239_13279 = state_13207__$1;(statearr_13239_13279[(2)] = inst_13197);
(statearr_13239_13279[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (16)))
{var inst_13177 = (state_13207[(2)]);var inst_13178 = calc_state.call(null);var inst_13151 = inst_13178;var state_13207__$1 = (function (){var statearr_13240 = state_13207;(statearr_13240[(7)] = inst_13151);
(statearr_13240[(18)] = inst_13177);
return statearr_13240;
})();var statearr_13241_13280 = state_13207__$1;(statearr_13241_13280[(2)] = null);
(statearr_13241_13280[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (10)))
{var inst_13166 = (state_13207[(8)]);var inst_13167 = (state_13207[(16)]);var inst_13165 = (state_13207[(2)]);var inst_13166__$1 = cljs.core.nth.call(null,inst_13165,(0),null);var inst_13167__$1 = cljs.core.nth.call(null,inst_13165,(1),null);var inst_13168 = (inst_13166__$1 == null);var inst_13169 = cljs.core._EQ_.call(null,inst_13167__$1,change);var inst_13170 = (inst_13168) || (inst_13169);var state_13207__$1 = (function (){var statearr_13242 = state_13207;(statearr_13242[(8)] = inst_13166__$1);
(statearr_13242[(16)] = inst_13167__$1);
return statearr_13242;
})();if(cljs.core.truth_(inst_13170))
{var statearr_13243_13281 = state_13207__$1;(statearr_13243_13281[(1)] = (11));
} else
{var statearr_13244_13282 = state_13207__$1;(statearr_13244_13282[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (18)))
{var inst_13161 = (state_13207[(17)]);var inst_13162 = (state_13207[(15)]);var inst_13167 = (state_13207[(16)]);var inst_13184 = cljs.core.empty_QMARK_.call(null,inst_13162);var inst_13185 = inst_13161.call(null,inst_13167);var inst_13186 = cljs.core.not.call(null,inst_13185);var inst_13187 = (inst_13184) && (inst_13186);var state_13207__$1 = state_13207;var statearr_13245_13283 = state_13207__$1;(statearr_13245_13283[(2)] = inst_13187);
(statearr_13245_13283[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13208 === (8)))
{var inst_13151 = (state_13207[(7)]);var state_13207__$1 = state_13207;var statearr_13246_13284 = state_13207__$1;(statearr_13246_13284[(2)] = inst_13151);
(statearr_13246_13284[(1)] = (9));
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
});})(c__6376__auto___13254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6361__auto__,c__6376__auto___13254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13250[(0)] = state_machine__6362__auto__);
(statearr_13250[(1)] = (1));
return statearr_13250;
});
var state_machine__6362__auto____1 = (function (state_13207){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13207);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13251){if((e13251 instanceof Object))
{var ex__6365__auto__ = e13251;var statearr_13252_13285 = state_13207;(statearr_13252_13285[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13286 = state_13207;
state_13207 = G__13286;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13207){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6378__auto__ = (function (){var statearr_13253 = f__6377__auto__.call(null);(statearr_13253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13254);
return statearr_13253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13288 = {};return obj13288;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
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
return (function (topic){var or__3560__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3560__auto__,mults){
return (function (p1__13289_SHARP_){if(cljs.core.truth_(p1__13289_SHARP_.call(null,topic)))
{return p1__13289_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13289_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13412 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13413){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13413 = meta13413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13412.cljs$lang$type = true;
cljs.core.async.t13412.cljs$lang$ctorStr = "cljs.core.async/t13412";
cljs.core.async.t13412.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13412");
});})(mults,ensure_mult))
;
cljs.core.async.t13412.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13412.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13412.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13412.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13414){var self__ = this;
var _13414__$1 = this;return self__.meta13413;
});})(mults,ensure_mult))
;
cljs.core.async.t13412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13414,meta13413__$1){var self__ = this;
var _13414__$1 = this;return (new cljs.core.async.t13412(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13413__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13412 = ((function (mults,ensure_mult){
return (function __GT_t13412(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13413){return (new cljs.core.async.t13412(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13413));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13412(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6376__auto___13534 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13534,mults,ensure_mult,p){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13534,mults,ensure_mult,p){
return (function (state_13486){var state_val_13487 = (state_13486[(1)]);if((state_val_13487 === (7)))
{var inst_13482 = (state_13486[(2)]);var state_13486__$1 = state_13486;var statearr_13488_13535 = state_13486__$1;(statearr_13488_13535[(2)] = inst_13482);
(statearr_13488_13535[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (20)))
{var state_13486__$1 = state_13486;var statearr_13489_13536 = state_13486__$1;(statearr_13489_13536[(2)] = null);
(statearr_13489_13536[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (1)))
{var state_13486__$1 = state_13486;var statearr_13490_13537 = state_13486__$1;(statearr_13490_13537[(2)] = null);
(statearr_13490_13537[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (24)))
{var inst_13465 = (state_13486[(7)]);var inst_13474 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13465);var state_13486__$1 = state_13486;var statearr_13491_13538 = state_13486__$1;(statearr_13491_13538[(2)] = inst_13474);
(statearr_13491_13538[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (4)))
{var inst_13417 = (state_13486[(8)]);var inst_13417__$1 = (state_13486[(2)]);var inst_13418 = (inst_13417__$1 == null);var state_13486__$1 = (function (){var statearr_13492 = state_13486;(statearr_13492[(8)] = inst_13417__$1);
return statearr_13492;
})();if(cljs.core.truth_(inst_13418))
{var statearr_13493_13539 = state_13486__$1;(statearr_13493_13539[(1)] = (5));
} else
{var statearr_13494_13540 = state_13486__$1;(statearr_13494_13540[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (15)))
{var inst_13459 = (state_13486[(2)]);var state_13486__$1 = state_13486;var statearr_13495_13541 = state_13486__$1;(statearr_13495_13541[(2)] = inst_13459);
(statearr_13495_13541[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (21)))
{var inst_13479 = (state_13486[(2)]);var state_13486__$1 = (function (){var statearr_13496 = state_13486;(statearr_13496[(9)] = inst_13479);
return statearr_13496;
})();var statearr_13497_13542 = state_13486__$1;(statearr_13497_13542[(2)] = null);
(statearr_13497_13542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (13)))
{var inst_13441 = (state_13486[(10)]);var inst_13443 = cljs.core.chunked_seq_QMARK_.call(null,inst_13441);var state_13486__$1 = state_13486;if(inst_13443)
{var statearr_13498_13543 = state_13486__$1;(statearr_13498_13543[(1)] = (16));
} else
{var statearr_13499_13544 = state_13486__$1;(statearr_13499_13544[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (22)))
{var inst_13471 = (state_13486[(2)]);var state_13486__$1 = state_13486;if(cljs.core.truth_(inst_13471))
{var statearr_13500_13545 = state_13486__$1;(statearr_13500_13545[(1)] = (23));
} else
{var statearr_13501_13546 = state_13486__$1;(statearr_13501_13546[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (6)))
{var inst_13465 = (state_13486[(7)]);var inst_13417 = (state_13486[(8)]);var inst_13467 = (state_13486[(11)]);var inst_13465__$1 = topic_fn.call(null,inst_13417);var inst_13466 = cljs.core.deref.call(null,mults);var inst_13467__$1 = cljs.core.get.call(null,inst_13466,inst_13465__$1);var state_13486__$1 = (function (){var statearr_13502 = state_13486;(statearr_13502[(7)] = inst_13465__$1);
(statearr_13502[(11)] = inst_13467__$1);
return statearr_13502;
})();if(cljs.core.truth_(inst_13467__$1))
{var statearr_13503_13547 = state_13486__$1;(statearr_13503_13547[(1)] = (19));
} else
{var statearr_13504_13548 = state_13486__$1;(statearr_13504_13548[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (25)))
{var inst_13476 = (state_13486[(2)]);var state_13486__$1 = state_13486;var statearr_13505_13549 = state_13486__$1;(statearr_13505_13549[(2)] = inst_13476);
(statearr_13505_13549[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (17)))
{var inst_13441 = (state_13486[(10)]);var inst_13450 = cljs.core.first.call(null,inst_13441);var inst_13451 = cljs.core.async.muxch_STAR_.call(null,inst_13450);var inst_13452 = cljs.core.async.close_BANG_.call(null,inst_13451);var inst_13453 = cljs.core.next.call(null,inst_13441);var inst_13427 = inst_13453;var inst_13428 = null;var inst_13429 = (0);var inst_13430 = (0);var state_13486__$1 = (function (){var statearr_13506 = state_13486;(statearr_13506[(12)] = inst_13429);
(statearr_13506[(13)] = inst_13428);
(statearr_13506[(14)] = inst_13427);
(statearr_13506[(15)] = inst_13452);
(statearr_13506[(16)] = inst_13430);
return statearr_13506;
})();var statearr_13507_13550 = state_13486__$1;(statearr_13507_13550[(2)] = null);
(statearr_13507_13550[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (3)))
{var inst_13484 = (state_13486[(2)]);var state_13486__$1 = state_13486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13486__$1,inst_13484);
} else
{if((state_val_13487 === (12)))
{var inst_13461 = (state_13486[(2)]);var state_13486__$1 = state_13486;var statearr_13508_13551 = state_13486__$1;(statearr_13508_13551[(2)] = inst_13461);
(statearr_13508_13551[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (2)))
{var state_13486__$1 = state_13486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13486__$1,(4),ch);
} else
{if((state_val_13487 === (23)))
{var state_13486__$1 = state_13486;var statearr_13509_13552 = state_13486__$1;(statearr_13509_13552[(2)] = null);
(statearr_13509_13552[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (19)))
{var inst_13417 = (state_13486[(8)]);var inst_13467 = (state_13486[(11)]);var inst_13469 = cljs.core.async.muxch_STAR_.call(null,inst_13467);var state_13486__$1 = state_13486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13486__$1,(22),inst_13469,inst_13417);
} else
{if((state_val_13487 === (11)))
{var inst_13441 = (state_13486[(10)]);var inst_13427 = (state_13486[(14)]);var inst_13441__$1 = cljs.core.seq.call(null,inst_13427);var state_13486__$1 = (function (){var statearr_13510 = state_13486;(statearr_13510[(10)] = inst_13441__$1);
return statearr_13510;
})();if(inst_13441__$1)
{var statearr_13511_13553 = state_13486__$1;(statearr_13511_13553[(1)] = (13));
} else
{var statearr_13512_13554 = state_13486__$1;(statearr_13512_13554[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (9)))
{var inst_13463 = (state_13486[(2)]);var state_13486__$1 = state_13486;var statearr_13513_13555 = state_13486__$1;(statearr_13513_13555[(2)] = inst_13463);
(statearr_13513_13555[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (5)))
{var inst_13424 = cljs.core.deref.call(null,mults);var inst_13425 = cljs.core.vals.call(null,inst_13424);var inst_13426 = cljs.core.seq.call(null,inst_13425);var inst_13427 = inst_13426;var inst_13428 = null;var inst_13429 = (0);var inst_13430 = (0);var state_13486__$1 = (function (){var statearr_13514 = state_13486;(statearr_13514[(12)] = inst_13429);
(statearr_13514[(13)] = inst_13428);
(statearr_13514[(14)] = inst_13427);
(statearr_13514[(16)] = inst_13430);
return statearr_13514;
})();var statearr_13515_13556 = state_13486__$1;(statearr_13515_13556[(2)] = null);
(statearr_13515_13556[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (14)))
{var state_13486__$1 = state_13486;var statearr_13519_13557 = state_13486__$1;(statearr_13519_13557[(2)] = null);
(statearr_13519_13557[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (16)))
{var inst_13441 = (state_13486[(10)]);var inst_13445 = cljs.core.chunk_first.call(null,inst_13441);var inst_13446 = cljs.core.chunk_rest.call(null,inst_13441);var inst_13447 = cljs.core.count.call(null,inst_13445);var inst_13427 = inst_13446;var inst_13428 = inst_13445;var inst_13429 = inst_13447;var inst_13430 = (0);var state_13486__$1 = (function (){var statearr_13520 = state_13486;(statearr_13520[(12)] = inst_13429);
(statearr_13520[(13)] = inst_13428);
(statearr_13520[(14)] = inst_13427);
(statearr_13520[(16)] = inst_13430);
return statearr_13520;
})();var statearr_13521_13558 = state_13486__$1;(statearr_13521_13558[(2)] = null);
(statearr_13521_13558[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (10)))
{var inst_13429 = (state_13486[(12)]);var inst_13428 = (state_13486[(13)]);var inst_13427 = (state_13486[(14)]);var inst_13430 = (state_13486[(16)]);var inst_13435 = cljs.core._nth.call(null,inst_13428,inst_13430);var inst_13436 = cljs.core.async.muxch_STAR_.call(null,inst_13435);var inst_13437 = cljs.core.async.close_BANG_.call(null,inst_13436);var inst_13438 = (inst_13430 + (1));var tmp13516 = inst_13429;var tmp13517 = inst_13428;var tmp13518 = inst_13427;var inst_13427__$1 = tmp13518;var inst_13428__$1 = tmp13517;var inst_13429__$1 = tmp13516;var inst_13430__$1 = inst_13438;var state_13486__$1 = (function (){var statearr_13522 = state_13486;(statearr_13522[(12)] = inst_13429__$1);
(statearr_13522[(17)] = inst_13437);
(statearr_13522[(13)] = inst_13428__$1);
(statearr_13522[(14)] = inst_13427__$1);
(statearr_13522[(16)] = inst_13430__$1);
return statearr_13522;
})();var statearr_13523_13559 = state_13486__$1;(statearr_13523_13559[(2)] = null);
(statearr_13523_13559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (18)))
{var inst_13456 = (state_13486[(2)]);var state_13486__$1 = state_13486;var statearr_13524_13560 = state_13486__$1;(statearr_13524_13560[(2)] = inst_13456);
(statearr_13524_13560[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13487 === (8)))
{var inst_13429 = (state_13486[(12)]);var inst_13430 = (state_13486[(16)]);var inst_13432 = (inst_13430 < inst_13429);var inst_13433 = inst_13432;var state_13486__$1 = state_13486;if(cljs.core.truth_(inst_13433))
{var statearr_13525_13561 = state_13486__$1;(statearr_13525_13561[(1)] = (10));
} else
{var statearr_13526_13562 = state_13486__$1;(statearr_13526_13562[(1)] = (11));
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
});})(c__6376__auto___13534,mults,ensure_mult,p))
;return ((function (switch__6361__auto__,c__6376__auto___13534,mults,ensure_mult,p){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13530[(0)] = state_machine__6362__auto__);
(statearr_13530[(1)] = (1));
return statearr_13530;
});
var state_machine__6362__auto____1 = (function (state_13486){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13486);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13531){if((e13531 instanceof Object))
{var ex__6365__auto__ = e13531;var statearr_13532_13563 = state_13486;(statearr_13532_13563[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13531;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13564 = state_13486;
state_13486 = G__13564;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13486){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13534,mults,ensure_mult,p))
})();var state__6378__auto__ = (function (){var statearr_13533 = f__6377__auto__.call(null);(statearr_13533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13534);
return statearr_13533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13534,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6376__auto___13701 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13701,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13701,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13671){var state_val_13672 = (state_13671[(1)]);if((state_val_13672 === (7)))
{var state_13671__$1 = state_13671;var statearr_13673_13702 = state_13671__$1;(statearr_13673_13702[(2)] = null);
(statearr_13673_13702[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (1)))
{var state_13671__$1 = state_13671;var statearr_13674_13703 = state_13671__$1;(statearr_13674_13703[(2)] = null);
(statearr_13674_13703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (4)))
{var inst_13635 = (state_13671[(7)]);var inst_13637 = (inst_13635 < cnt);var state_13671__$1 = state_13671;if(cljs.core.truth_(inst_13637))
{var statearr_13675_13704 = state_13671__$1;(statearr_13675_13704[(1)] = (6));
} else
{var statearr_13676_13705 = state_13671__$1;(statearr_13676_13705[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (15)))
{var inst_13667 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13677_13706 = state_13671__$1;(statearr_13677_13706[(2)] = inst_13667);
(statearr_13677_13706[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (13)))
{var inst_13660 = cljs.core.async.close_BANG_.call(null,out);var state_13671__$1 = state_13671;var statearr_13678_13707 = state_13671__$1;(statearr_13678_13707[(2)] = inst_13660);
(statearr_13678_13707[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (6)))
{var state_13671__$1 = state_13671;var statearr_13679_13708 = state_13671__$1;(statearr_13679_13708[(2)] = null);
(statearr_13679_13708[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (3)))
{var inst_13669 = (state_13671[(2)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13671__$1,inst_13669);
} else
{if((state_val_13672 === (12)))
{var inst_13657 = (state_13671[(8)]);var inst_13657__$1 = (state_13671[(2)]);var inst_13658 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13657__$1);var state_13671__$1 = (function (){var statearr_13680 = state_13671;(statearr_13680[(8)] = inst_13657__$1);
return statearr_13680;
})();if(cljs.core.truth_(inst_13658))
{var statearr_13681_13709 = state_13671__$1;(statearr_13681_13709[(1)] = (13));
} else
{var statearr_13682_13710 = state_13671__$1;(statearr_13682_13710[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (2)))
{var inst_13634 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13635 = (0);var state_13671__$1 = (function (){var statearr_13683 = state_13671;(statearr_13683[(9)] = inst_13634);
(statearr_13683[(7)] = inst_13635);
return statearr_13683;
})();var statearr_13684_13711 = state_13671__$1;(statearr_13684_13711[(2)] = null);
(statearr_13684_13711[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (11)))
{var inst_13635 = (state_13671[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13671,(10),Object,null,(9));var inst_13644 = chs__$1.call(null,inst_13635);var inst_13645 = done.call(null,inst_13635);var inst_13646 = cljs.core.async.take_BANG_.call(null,inst_13644,inst_13645);var state_13671__$1 = state_13671;var statearr_13685_13712 = state_13671__$1;(statearr_13685_13712[(2)] = inst_13646);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13671__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (9)))
{var inst_13635 = (state_13671[(7)]);var inst_13648 = (state_13671[(2)]);var inst_13649 = (inst_13635 + (1));var inst_13635__$1 = inst_13649;var state_13671__$1 = (function (){var statearr_13686 = state_13671;(statearr_13686[(7)] = inst_13635__$1);
(statearr_13686[(10)] = inst_13648);
return statearr_13686;
})();var statearr_13687_13713 = state_13671__$1;(statearr_13687_13713[(2)] = null);
(statearr_13687_13713[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (5)))
{var inst_13655 = (state_13671[(2)]);var state_13671__$1 = (function (){var statearr_13688 = state_13671;(statearr_13688[(11)] = inst_13655);
return statearr_13688;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13671__$1,(12),dchan);
} else
{if((state_val_13672 === (14)))
{var inst_13657 = (state_13671[(8)]);var inst_13662 = cljs.core.apply.call(null,f,inst_13657);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13671__$1,(16),out,inst_13662);
} else
{if((state_val_13672 === (16)))
{var inst_13664 = (state_13671[(2)]);var state_13671__$1 = (function (){var statearr_13689 = state_13671;(statearr_13689[(12)] = inst_13664);
return statearr_13689;
})();var statearr_13690_13714 = state_13671__$1;(statearr_13690_13714[(2)] = null);
(statearr_13690_13714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (10)))
{var inst_13639 = (state_13671[(2)]);var inst_13640 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13671__$1 = (function (){var statearr_13691 = state_13671;(statearr_13691[(13)] = inst_13639);
return statearr_13691;
})();var statearr_13692_13715 = state_13671__$1;(statearr_13692_13715[(2)] = inst_13640);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13671__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (8)))
{var inst_13653 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13693_13716 = state_13671__$1;(statearr_13693_13716[(2)] = inst_13653);
(statearr_13693_13716[(1)] = (5));
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
});})(c__6376__auto___13701,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___13701,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13697[(0)] = state_machine__6362__auto__);
(statearr_13697[(1)] = (1));
return statearr_13697;
});
var state_machine__6362__auto____1 = (function (state_13671){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13698){if((e13698 instanceof Object))
{var ex__6365__auto__ = e13698;var statearr_13699_13717 = state_13671;(statearr_13699_13717[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13698;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13718 = state_13671;
state_13671 = G__13718;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13671){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13701,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_13700 = f__6377__auto__.call(null);(statearr_13700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13701);
return statearr_13700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13701,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___13826 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13826,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13826,out){
return (function (state_13802){var state_val_13803 = (state_13802[(1)]);if((state_val_13803 === (7)))
{var inst_13781 = (state_13802[(7)]);var inst_13782 = (state_13802[(8)]);var inst_13781__$1 = (state_13802[(2)]);var inst_13782__$1 = cljs.core.nth.call(null,inst_13781__$1,(0),null);var inst_13783 = cljs.core.nth.call(null,inst_13781__$1,(1),null);var inst_13784 = (inst_13782__$1 == null);var state_13802__$1 = (function (){var statearr_13804 = state_13802;(statearr_13804[(7)] = inst_13781__$1);
(statearr_13804[(8)] = inst_13782__$1);
(statearr_13804[(9)] = inst_13783);
return statearr_13804;
})();if(cljs.core.truth_(inst_13784))
{var statearr_13805_13827 = state_13802__$1;(statearr_13805_13827[(1)] = (8));
} else
{var statearr_13806_13828 = state_13802__$1;(statearr_13806_13828[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13803 === (1)))
{var inst_13773 = cljs.core.vec.call(null,chs);var inst_13774 = inst_13773;var state_13802__$1 = (function (){var statearr_13807 = state_13802;(statearr_13807[(10)] = inst_13774);
return statearr_13807;
})();var statearr_13808_13829 = state_13802__$1;(statearr_13808_13829[(2)] = null);
(statearr_13808_13829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13803 === (4)))
{var inst_13774 = (state_13802[(10)]);var state_13802__$1 = state_13802;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13802__$1,(7),inst_13774);
} else
{if((state_val_13803 === (6)))
{var inst_13798 = (state_13802[(2)]);var state_13802__$1 = state_13802;var statearr_13809_13830 = state_13802__$1;(statearr_13809_13830[(2)] = inst_13798);
(statearr_13809_13830[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13803 === (3)))
{var inst_13800 = (state_13802[(2)]);var state_13802__$1 = state_13802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13802__$1,inst_13800);
} else
{if((state_val_13803 === (2)))
{var inst_13774 = (state_13802[(10)]);var inst_13776 = cljs.core.count.call(null,inst_13774);var inst_13777 = (inst_13776 > (0));var state_13802__$1 = state_13802;if(cljs.core.truth_(inst_13777))
{var statearr_13811_13831 = state_13802__$1;(statearr_13811_13831[(1)] = (4));
} else
{var statearr_13812_13832 = state_13802__$1;(statearr_13812_13832[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13803 === (11)))
{var inst_13774 = (state_13802[(10)]);var inst_13791 = (state_13802[(2)]);var tmp13810 = inst_13774;var inst_13774__$1 = tmp13810;var state_13802__$1 = (function (){var statearr_13813 = state_13802;(statearr_13813[(10)] = inst_13774__$1);
(statearr_13813[(11)] = inst_13791);
return statearr_13813;
})();var statearr_13814_13833 = state_13802__$1;(statearr_13814_13833[(2)] = null);
(statearr_13814_13833[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13803 === (9)))
{var inst_13782 = (state_13802[(8)]);var state_13802__$1 = state_13802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13802__$1,(11),out,inst_13782);
} else
{if((state_val_13803 === (5)))
{var inst_13796 = cljs.core.async.close_BANG_.call(null,out);var state_13802__$1 = state_13802;var statearr_13815_13834 = state_13802__$1;(statearr_13815_13834[(2)] = inst_13796);
(statearr_13815_13834[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13803 === (10)))
{var inst_13794 = (state_13802[(2)]);var state_13802__$1 = state_13802;var statearr_13816_13835 = state_13802__$1;(statearr_13816_13835[(2)] = inst_13794);
(statearr_13816_13835[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13803 === (8)))
{var inst_13774 = (state_13802[(10)]);var inst_13781 = (state_13802[(7)]);var inst_13782 = (state_13802[(8)]);var inst_13783 = (state_13802[(9)]);var inst_13786 = (function (){var c = inst_13783;var v = inst_13782;var vec__13779 = inst_13781;var cs = inst_13774;return ((function (c,v,vec__13779,cs,inst_13774,inst_13781,inst_13782,inst_13783,state_val_13803,c__6376__auto___13826,out){
return (function (p1__13719_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13719_SHARP_);
});
;})(c,v,vec__13779,cs,inst_13774,inst_13781,inst_13782,inst_13783,state_val_13803,c__6376__auto___13826,out))
})();var inst_13787 = cljs.core.filterv.call(null,inst_13786,inst_13774);var inst_13774__$1 = inst_13787;var state_13802__$1 = (function (){var statearr_13817 = state_13802;(statearr_13817[(10)] = inst_13774__$1);
return statearr_13817;
})();var statearr_13818_13836 = state_13802__$1;(statearr_13818_13836[(2)] = null);
(statearr_13818_13836[(1)] = (2));
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
});})(c__6376__auto___13826,out))
;return ((function (switch__6361__auto__,c__6376__auto___13826,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13822 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13822[(0)] = state_machine__6362__auto__);
(statearr_13822[(1)] = (1));
return statearr_13822;
});
var state_machine__6362__auto____1 = (function (state_13802){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13802);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13823){if((e13823 instanceof Object))
{var ex__6365__auto__ = e13823;var statearr_13824_13837 = state_13802;(statearr_13824_13837[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13802);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13823;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13838 = state_13802;
state_13802 = G__13838;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13802){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13826,out))
})();var state__6378__auto__ = (function (){var statearr_13825 = f__6377__auto__.call(null);(statearr_13825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13826);
return statearr_13825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13826,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___13931 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13931,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13931,out){
return (function (state_13908){var state_val_13909 = (state_13908[(1)]);if((state_val_13909 === (7)))
{var inst_13890 = (state_13908[(7)]);var inst_13890__$1 = (state_13908[(2)]);var inst_13891 = (inst_13890__$1 == null);var inst_13892 = cljs.core.not.call(null,inst_13891);var state_13908__$1 = (function (){var statearr_13910 = state_13908;(statearr_13910[(7)] = inst_13890__$1);
return statearr_13910;
})();if(inst_13892)
{var statearr_13911_13932 = state_13908__$1;(statearr_13911_13932[(1)] = (8));
} else
{var statearr_13912_13933 = state_13908__$1;(statearr_13912_13933[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (1)))
{var inst_13885 = (0);var state_13908__$1 = (function (){var statearr_13913 = state_13908;(statearr_13913[(8)] = inst_13885);
return statearr_13913;
})();var statearr_13914_13934 = state_13908__$1;(statearr_13914_13934[(2)] = null);
(statearr_13914_13934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (4)))
{var state_13908__$1 = state_13908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13908__$1,(7),ch);
} else
{if((state_val_13909 === (6)))
{var inst_13903 = (state_13908[(2)]);var state_13908__$1 = state_13908;var statearr_13915_13935 = state_13908__$1;(statearr_13915_13935[(2)] = inst_13903);
(statearr_13915_13935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (3)))
{var inst_13905 = (state_13908[(2)]);var inst_13906 = cljs.core.async.close_BANG_.call(null,out);var state_13908__$1 = (function (){var statearr_13916 = state_13908;(statearr_13916[(9)] = inst_13905);
return statearr_13916;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13908__$1,inst_13906);
} else
{if((state_val_13909 === (2)))
{var inst_13885 = (state_13908[(8)]);var inst_13887 = (inst_13885 < n);var state_13908__$1 = state_13908;if(cljs.core.truth_(inst_13887))
{var statearr_13917_13936 = state_13908__$1;(statearr_13917_13936[(1)] = (4));
} else
{var statearr_13918_13937 = state_13908__$1;(statearr_13918_13937[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (11)))
{var inst_13885 = (state_13908[(8)]);var inst_13895 = (state_13908[(2)]);var inst_13896 = (inst_13885 + (1));var inst_13885__$1 = inst_13896;var state_13908__$1 = (function (){var statearr_13919 = state_13908;(statearr_13919[(8)] = inst_13885__$1);
(statearr_13919[(10)] = inst_13895);
return statearr_13919;
})();var statearr_13920_13938 = state_13908__$1;(statearr_13920_13938[(2)] = null);
(statearr_13920_13938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (9)))
{var state_13908__$1 = state_13908;var statearr_13921_13939 = state_13908__$1;(statearr_13921_13939[(2)] = null);
(statearr_13921_13939[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (5)))
{var state_13908__$1 = state_13908;var statearr_13922_13940 = state_13908__$1;(statearr_13922_13940[(2)] = null);
(statearr_13922_13940[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (10)))
{var inst_13900 = (state_13908[(2)]);var state_13908__$1 = state_13908;var statearr_13923_13941 = state_13908__$1;(statearr_13923_13941[(2)] = inst_13900);
(statearr_13923_13941[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (8)))
{var inst_13890 = (state_13908[(7)]);var state_13908__$1 = state_13908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13908__$1,(11),out,inst_13890);
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
});})(c__6376__auto___13931,out))
;return ((function (switch__6361__auto__,c__6376__auto___13931,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13927 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13927[(0)] = state_machine__6362__auto__);
(statearr_13927[(1)] = (1));
return statearr_13927;
});
var state_machine__6362__auto____1 = (function (state_13908){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13908);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13928){if((e13928 instanceof Object))
{var ex__6365__auto__ = e13928;var statearr_13929_13942 = state_13908;(statearr_13929_13942[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13928;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13943 = state_13908;
state_13908 = G__13943;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13908){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13931,out))
})();var state__6378__auto__ = (function (){var statearr_13930 = f__6377__auto__.call(null);(statearr_13930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13931);
return statearr_13930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13931,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13951 = (function (ch,f,map_LT_,meta13952){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13952 = meta13952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13951.cljs$lang$type = true;
cljs.core.async.t13951.cljs$lang$ctorStr = "cljs.core.async/t13951";
cljs.core.async.t13951.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13951");
});
cljs.core.async.t13951.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13951.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13954 = (function (fn1,_,meta13952,ch,f,map_LT_,meta13955){
this.fn1 = fn1;
this._ = _;
this.meta13952 = meta13952;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13955 = meta13955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13954.cljs$lang$type = true;
cljs.core.async.t13954.cljs$lang$ctorStr = "cljs.core.async/t13954";
cljs.core.async.t13954.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13954");
});})(___$1))
;
cljs.core.async.t13954.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13954.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13944_SHARP_){return f1.call(null,(((p1__13944_SHARP_ == null))?null:self__.f.call(null,p1__13944_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13956){var self__ = this;
var _13956__$1 = this;return self__.meta13955;
});})(___$1))
;
cljs.core.async.t13954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13956,meta13955__$1){var self__ = this;
var _13956__$1 = this;return (new cljs.core.async.t13954(self__.fn1,self__._,self__.meta13952,self__.ch,self__.f,self__.map_LT_,meta13955__$1));
});})(___$1))
;
cljs.core.async.__GT_t13954 = ((function (___$1){
return (function __GT_t13954(fn1__$1,___$2,meta13952__$1,ch__$2,f__$2,map_LT___$2,meta13955){return (new cljs.core.async.t13954(fn1__$1,___$2,meta13952__$1,ch__$2,f__$2,map_LT___$2,meta13955));
});})(___$1))
;
}
return (new cljs.core.async.t13954(fn1,___$1,self__.meta13952,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3548__auto__ = ret;if(cljs.core.truth_(and__3548__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13951.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13953){var self__ = this;
var _13953__$1 = this;return self__.meta13952;
});
cljs.core.async.t13951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13953,meta13952__$1){var self__ = this;
var _13953__$1 = this;return (new cljs.core.async.t13951(self__.ch,self__.f,self__.map_LT_,meta13952__$1));
});
cljs.core.async.__GT_t13951 = (function __GT_t13951(ch__$1,f__$1,map_LT___$1,meta13952){return (new cljs.core.async.t13951(ch__$1,f__$1,map_LT___$1,meta13952));
});
}
return (new cljs.core.async.t13951(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13960 = (function (ch,f,map_GT_,meta13961){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13961 = meta13961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13960.cljs$lang$type = true;
cljs.core.async.t13960.cljs$lang$ctorStr = "cljs.core.async/t13960";
cljs.core.async.t13960.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13960");
});
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13962){var self__ = this;
var _13962__$1 = this;return self__.meta13961;
});
cljs.core.async.t13960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13962,meta13961__$1){var self__ = this;
var _13962__$1 = this;return (new cljs.core.async.t13960(self__.ch,self__.f,self__.map_GT_,meta13961__$1));
});
cljs.core.async.__GT_t13960 = (function __GT_t13960(ch__$1,f__$1,map_GT___$1,meta13961){return (new cljs.core.async.t13960(ch__$1,f__$1,map_GT___$1,meta13961));
});
}
return (new cljs.core.async.t13960(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13966 = (function (ch,p,filter_GT_,meta13967){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13967 = meta13967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13966.cljs$lang$type = true;
cljs.core.async.t13966.cljs$lang$ctorStr = "cljs.core.async/t13966";
cljs.core.async.t13966.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13966");
});
cljs.core.async.t13966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13966.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13968){var self__ = this;
var _13968__$1 = this;return self__.meta13967;
});
cljs.core.async.t13966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13968,meta13967__$1){var self__ = this;
var _13968__$1 = this;return (new cljs.core.async.t13966(self__.ch,self__.p,self__.filter_GT_,meta13967__$1));
});
cljs.core.async.__GT_t13966 = (function __GT_t13966(ch__$1,p__$1,filter_GT___$1,meta13967){return (new cljs.core.async.t13966(ch__$1,p__$1,filter_GT___$1,meta13967));
});
}
return (new cljs.core.async.t13966(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___14051 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14051,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14051,out){
return (function (state_14030){var state_val_14031 = (state_14030[(1)]);if((state_val_14031 === (7)))
{var inst_14026 = (state_14030[(2)]);var state_14030__$1 = state_14030;var statearr_14032_14052 = state_14030__$1;(statearr_14032_14052[(2)] = inst_14026);
(statearr_14032_14052[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (1)))
{var state_14030__$1 = state_14030;var statearr_14033_14053 = state_14030__$1;(statearr_14033_14053[(2)] = null);
(statearr_14033_14053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (4)))
{var inst_14012 = (state_14030[(7)]);var inst_14012__$1 = (state_14030[(2)]);var inst_14013 = (inst_14012__$1 == null);var state_14030__$1 = (function (){var statearr_14034 = state_14030;(statearr_14034[(7)] = inst_14012__$1);
return statearr_14034;
})();if(cljs.core.truth_(inst_14013))
{var statearr_14035_14054 = state_14030__$1;(statearr_14035_14054[(1)] = (5));
} else
{var statearr_14036_14055 = state_14030__$1;(statearr_14036_14055[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (6)))
{var inst_14012 = (state_14030[(7)]);var inst_14017 = p.call(null,inst_14012);var state_14030__$1 = state_14030;if(cljs.core.truth_(inst_14017))
{var statearr_14037_14056 = state_14030__$1;(statearr_14037_14056[(1)] = (8));
} else
{var statearr_14038_14057 = state_14030__$1;(statearr_14038_14057[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (3)))
{var inst_14028 = (state_14030[(2)]);var state_14030__$1 = state_14030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14030__$1,inst_14028);
} else
{if((state_val_14031 === (2)))
{var state_14030__$1 = state_14030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14030__$1,(4),ch);
} else
{if((state_val_14031 === (11)))
{var inst_14020 = (state_14030[(2)]);var state_14030__$1 = state_14030;var statearr_14039_14058 = state_14030__$1;(statearr_14039_14058[(2)] = inst_14020);
(statearr_14039_14058[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (9)))
{var state_14030__$1 = state_14030;var statearr_14040_14059 = state_14030__$1;(statearr_14040_14059[(2)] = null);
(statearr_14040_14059[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (5)))
{var inst_14015 = cljs.core.async.close_BANG_.call(null,out);var state_14030__$1 = state_14030;var statearr_14041_14060 = state_14030__$1;(statearr_14041_14060[(2)] = inst_14015);
(statearr_14041_14060[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (10)))
{var inst_14023 = (state_14030[(2)]);var state_14030__$1 = (function (){var statearr_14042 = state_14030;(statearr_14042[(8)] = inst_14023);
return statearr_14042;
})();var statearr_14043_14061 = state_14030__$1;(statearr_14043_14061[(2)] = null);
(statearr_14043_14061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (8)))
{var inst_14012 = (state_14030[(7)]);var state_14030__$1 = state_14030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14030__$1,(11),out,inst_14012);
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
});})(c__6376__auto___14051,out))
;return ((function (switch__6361__auto__,c__6376__auto___14051,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14047 = [null,null,null,null,null,null,null,null,null];(statearr_14047[(0)] = state_machine__6362__auto__);
(statearr_14047[(1)] = (1));
return statearr_14047;
});
var state_machine__6362__auto____1 = (function (state_14030){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14048){if((e14048 instanceof Object))
{var ex__6365__auto__ = e14048;var statearr_14049_14062 = state_14030;(statearr_14049_14062[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14048;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14063 = state_14030;
state_14030 = G__14063;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14030){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14051,out))
})();var state__6378__auto__ = (function (){var statearr_14050 = f__6377__auto__.call(null);(statearr_14050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14051);
return statearr_14050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14051,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__){
return (function (state_14229){var state_val_14230 = (state_14229[(1)]);if((state_val_14230 === (7)))
{var inst_14225 = (state_14229[(2)]);var state_14229__$1 = state_14229;var statearr_14231_14272 = state_14229__$1;(statearr_14231_14272[(2)] = inst_14225);
(statearr_14231_14272[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (20)))
{var inst_14195 = (state_14229[(7)]);var inst_14206 = (state_14229[(2)]);var inst_14207 = cljs.core.next.call(null,inst_14195);var inst_14181 = inst_14207;var inst_14182 = null;var inst_14183 = (0);var inst_14184 = (0);var state_14229__$1 = (function (){var statearr_14232 = state_14229;(statearr_14232[(8)] = inst_14184);
(statearr_14232[(9)] = inst_14206);
(statearr_14232[(10)] = inst_14181);
(statearr_14232[(11)] = inst_14182);
(statearr_14232[(12)] = inst_14183);
return statearr_14232;
})();var statearr_14233_14273 = state_14229__$1;(statearr_14233_14273[(2)] = null);
(statearr_14233_14273[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (1)))
{var state_14229__$1 = state_14229;var statearr_14234_14274 = state_14229__$1;(statearr_14234_14274[(2)] = null);
(statearr_14234_14274[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (4)))
{var inst_14170 = (state_14229[(13)]);var inst_14170__$1 = (state_14229[(2)]);var inst_14171 = (inst_14170__$1 == null);var state_14229__$1 = (function (){var statearr_14235 = state_14229;(statearr_14235[(13)] = inst_14170__$1);
return statearr_14235;
})();if(cljs.core.truth_(inst_14171))
{var statearr_14236_14275 = state_14229__$1;(statearr_14236_14275[(1)] = (5));
} else
{var statearr_14237_14276 = state_14229__$1;(statearr_14237_14276[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (15)))
{var state_14229__$1 = state_14229;var statearr_14241_14277 = state_14229__$1;(statearr_14241_14277[(2)] = null);
(statearr_14241_14277[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (21)))
{var state_14229__$1 = state_14229;var statearr_14242_14278 = state_14229__$1;(statearr_14242_14278[(2)] = null);
(statearr_14242_14278[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (13)))
{var inst_14184 = (state_14229[(8)]);var inst_14181 = (state_14229[(10)]);var inst_14182 = (state_14229[(11)]);var inst_14183 = (state_14229[(12)]);var inst_14191 = (state_14229[(2)]);var inst_14192 = (inst_14184 + (1));var tmp14238 = inst_14181;var tmp14239 = inst_14182;var tmp14240 = inst_14183;var inst_14181__$1 = tmp14238;var inst_14182__$1 = tmp14239;var inst_14183__$1 = tmp14240;var inst_14184__$1 = inst_14192;var state_14229__$1 = (function (){var statearr_14243 = state_14229;(statearr_14243[(8)] = inst_14184__$1);
(statearr_14243[(14)] = inst_14191);
(statearr_14243[(10)] = inst_14181__$1);
(statearr_14243[(11)] = inst_14182__$1);
(statearr_14243[(12)] = inst_14183__$1);
return statearr_14243;
})();var statearr_14244_14279 = state_14229__$1;(statearr_14244_14279[(2)] = null);
(statearr_14244_14279[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (22)))
{var state_14229__$1 = state_14229;var statearr_14245_14280 = state_14229__$1;(statearr_14245_14280[(2)] = null);
(statearr_14245_14280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (6)))
{var inst_14170 = (state_14229[(13)]);var inst_14179 = f.call(null,inst_14170);var inst_14180 = cljs.core.seq.call(null,inst_14179);var inst_14181 = inst_14180;var inst_14182 = null;var inst_14183 = (0);var inst_14184 = (0);var state_14229__$1 = (function (){var statearr_14246 = state_14229;(statearr_14246[(8)] = inst_14184);
(statearr_14246[(10)] = inst_14181);
(statearr_14246[(11)] = inst_14182);
(statearr_14246[(12)] = inst_14183);
return statearr_14246;
})();var statearr_14247_14281 = state_14229__$1;(statearr_14247_14281[(2)] = null);
(statearr_14247_14281[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (17)))
{var inst_14195 = (state_14229[(7)]);var inst_14199 = cljs.core.chunk_first.call(null,inst_14195);var inst_14200 = cljs.core.chunk_rest.call(null,inst_14195);var inst_14201 = cljs.core.count.call(null,inst_14199);var inst_14181 = inst_14200;var inst_14182 = inst_14199;var inst_14183 = inst_14201;var inst_14184 = (0);var state_14229__$1 = (function (){var statearr_14248 = state_14229;(statearr_14248[(8)] = inst_14184);
(statearr_14248[(10)] = inst_14181);
(statearr_14248[(11)] = inst_14182);
(statearr_14248[(12)] = inst_14183);
return statearr_14248;
})();var statearr_14249_14282 = state_14229__$1;(statearr_14249_14282[(2)] = null);
(statearr_14249_14282[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (3)))
{var inst_14227 = (state_14229[(2)]);var state_14229__$1 = state_14229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14229__$1,inst_14227);
} else
{if((state_val_14230 === (12)))
{var inst_14215 = (state_14229[(2)]);var state_14229__$1 = state_14229;var statearr_14250_14283 = state_14229__$1;(statearr_14250_14283[(2)] = inst_14215);
(statearr_14250_14283[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (2)))
{var state_14229__$1 = state_14229;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14229__$1,(4),in$);
} else
{if((state_val_14230 === (23)))
{var inst_14223 = (state_14229[(2)]);var state_14229__$1 = state_14229;var statearr_14251_14284 = state_14229__$1;(statearr_14251_14284[(2)] = inst_14223);
(statearr_14251_14284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (19)))
{var inst_14210 = (state_14229[(2)]);var state_14229__$1 = state_14229;var statearr_14252_14285 = state_14229__$1;(statearr_14252_14285[(2)] = inst_14210);
(statearr_14252_14285[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (11)))
{var inst_14195 = (state_14229[(7)]);var inst_14181 = (state_14229[(10)]);var inst_14195__$1 = cljs.core.seq.call(null,inst_14181);var state_14229__$1 = (function (){var statearr_14253 = state_14229;(statearr_14253[(7)] = inst_14195__$1);
return statearr_14253;
})();if(inst_14195__$1)
{var statearr_14254_14286 = state_14229__$1;(statearr_14254_14286[(1)] = (14));
} else
{var statearr_14255_14287 = state_14229__$1;(statearr_14255_14287[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (9)))
{var inst_14217 = (state_14229[(2)]);var inst_14218 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14229__$1 = (function (){var statearr_14256 = state_14229;(statearr_14256[(15)] = inst_14217);
return statearr_14256;
})();if(cljs.core.truth_(inst_14218))
{var statearr_14257_14288 = state_14229__$1;(statearr_14257_14288[(1)] = (21));
} else
{var statearr_14258_14289 = state_14229__$1;(statearr_14258_14289[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (5)))
{var inst_14173 = cljs.core.async.close_BANG_.call(null,out);var state_14229__$1 = state_14229;var statearr_14259_14290 = state_14229__$1;(statearr_14259_14290[(2)] = inst_14173);
(statearr_14259_14290[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (14)))
{var inst_14195 = (state_14229[(7)]);var inst_14197 = cljs.core.chunked_seq_QMARK_.call(null,inst_14195);var state_14229__$1 = state_14229;if(inst_14197)
{var statearr_14260_14291 = state_14229__$1;(statearr_14260_14291[(1)] = (17));
} else
{var statearr_14261_14292 = state_14229__$1;(statearr_14261_14292[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (16)))
{var inst_14213 = (state_14229[(2)]);var state_14229__$1 = state_14229;var statearr_14262_14293 = state_14229__$1;(statearr_14262_14293[(2)] = inst_14213);
(statearr_14262_14293[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (10)))
{var inst_14184 = (state_14229[(8)]);var inst_14182 = (state_14229[(11)]);var inst_14189 = cljs.core._nth.call(null,inst_14182,inst_14184);var state_14229__$1 = state_14229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14229__$1,(13),out,inst_14189);
} else
{if((state_val_14230 === (18)))
{var inst_14195 = (state_14229[(7)]);var inst_14204 = cljs.core.first.call(null,inst_14195);var state_14229__$1 = state_14229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14229__$1,(20),out,inst_14204);
} else
{if((state_val_14230 === (8)))
{var inst_14184 = (state_14229[(8)]);var inst_14183 = (state_14229[(12)]);var inst_14186 = (inst_14184 < inst_14183);var inst_14187 = inst_14186;var state_14229__$1 = state_14229;if(cljs.core.truth_(inst_14187))
{var statearr_14263_14294 = state_14229__$1;(statearr_14263_14294[(1)] = (10));
} else
{var statearr_14264_14295 = state_14229__$1;(statearr_14264_14295[(1)] = (11));
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
});})(c__6376__auto__))
;return ((function (switch__6361__auto__,c__6376__auto__){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14268[(0)] = state_machine__6362__auto__);
(statearr_14268[(1)] = (1));
return statearr_14268;
});
var state_machine__6362__auto____1 = (function (state_14229){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14229);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14269){if((e14269 instanceof Object))
{var ex__6365__auto__ = e14269;var statearr_14270_14296 = state_14229;(statearr_14270_14296[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14229);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14269;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14297 = state_14229;
state_14229 = G__14297;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14229){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_14271 = f__6377__auto__.call(null);(statearr_14271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_14271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__))
);
return c__6376__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___14394 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14394,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14394,out){
return (function (state_14369){var state_val_14370 = (state_14369[(1)]);if((state_val_14370 === (7)))
{var inst_14364 = (state_14369[(2)]);var state_14369__$1 = state_14369;var statearr_14371_14395 = state_14369__$1;(statearr_14371_14395[(2)] = inst_14364);
(statearr_14371_14395[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14370 === (1)))
{var inst_14346 = null;var state_14369__$1 = (function (){var statearr_14372 = state_14369;(statearr_14372[(7)] = inst_14346);
return statearr_14372;
})();var statearr_14373_14396 = state_14369__$1;(statearr_14373_14396[(2)] = null);
(statearr_14373_14396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14370 === (4)))
{var inst_14349 = (state_14369[(8)]);var inst_14349__$1 = (state_14369[(2)]);var inst_14350 = (inst_14349__$1 == null);var inst_14351 = cljs.core.not.call(null,inst_14350);var state_14369__$1 = (function (){var statearr_14374 = state_14369;(statearr_14374[(8)] = inst_14349__$1);
return statearr_14374;
})();if(inst_14351)
{var statearr_14375_14397 = state_14369__$1;(statearr_14375_14397[(1)] = (5));
} else
{var statearr_14376_14398 = state_14369__$1;(statearr_14376_14398[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14370 === (6)))
{var state_14369__$1 = state_14369;var statearr_14377_14399 = state_14369__$1;(statearr_14377_14399[(2)] = null);
(statearr_14377_14399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14370 === (3)))
{var inst_14366 = (state_14369[(2)]);var inst_14367 = cljs.core.async.close_BANG_.call(null,out);var state_14369__$1 = (function (){var statearr_14378 = state_14369;(statearr_14378[(9)] = inst_14366);
return statearr_14378;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14369__$1,inst_14367);
} else
{if((state_val_14370 === (2)))
{var state_14369__$1 = state_14369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14369__$1,(4),ch);
} else
{if((state_val_14370 === (11)))
{var inst_14349 = (state_14369[(8)]);var inst_14358 = (state_14369[(2)]);var inst_14346 = inst_14349;var state_14369__$1 = (function (){var statearr_14379 = state_14369;(statearr_14379[(7)] = inst_14346);
(statearr_14379[(10)] = inst_14358);
return statearr_14379;
})();var statearr_14380_14400 = state_14369__$1;(statearr_14380_14400[(2)] = null);
(statearr_14380_14400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14370 === (9)))
{var inst_14349 = (state_14369[(8)]);var state_14369__$1 = state_14369;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14369__$1,(11),out,inst_14349);
} else
{if((state_val_14370 === (5)))
{var inst_14349 = (state_14369[(8)]);var inst_14346 = (state_14369[(7)]);var inst_14353 = cljs.core._EQ_.call(null,inst_14349,inst_14346);var state_14369__$1 = state_14369;if(inst_14353)
{var statearr_14382_14401 = state_14369__$1;(statearr_14382_14401[(1)] = (8));
} else
{var statearr_14383_14402 = state_14369__$1;(statearr_14383_14402[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14370 === (10)))
{var inst_14361 = (state_14369[(2)]);var state_14369__$1 = state_14369;var statearr_14384_14403 = state_14369__$1;(statearr_14384_14403[(2)] = inst_14361);
(statearr_14384_14403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14370 === (8)))
{var inst_14346 = (state_14369[(7)]);var tmp14381 = inst_14346;var inst_14346__$1 = tmp14381;var state_14369__$1 = (function (){var statearr_14385 = state_14369;(statearr_14385[(7)] = inst_14346__$1);
return statearr_14385;
})();var statearr_14386_14404 = state_14369__$1;(statearr_14386_14404[(2)] = null);
(statearr_14386_14404[(1)] = (2));
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
});})(c__6376__auto___14394,out))
;return ((function (switch__6361__auto__,c__6376__auto___14394,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14390 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14390[(0)] = state_machine__6362__auto__);
(statearr_14390[(1)] = (1));
return statearr_14390;
});
var state_machine__6362__auto____1 = (function (state_14369){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14369);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14391){if((e14391 instanceof Object))
{var ex__6365__auto__ = e14391;var statearr_14392_14405 = state_14369;(statearr_14392_14405[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14369);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14391;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14406 = state_14369;
state_14369 = G__14406;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14369){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14394,out))
})();var state__6378__auto__ = (function (){var statearr_14393 = f__6377__auto__.call(null);(statearr_14393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14394);
return statearr_14393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14394,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___14541 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14541,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14541,out){
return (function (state_14511){var state_val_14512 = (state_14511[(1)]);if((state_val_14512 === (7)))
{var inst_14507 = (state_14511[(2)]);var state_14511__$1 = state_14511;var statearr_14513_14542 = state_14511__$1;(statearr_14513_14542[(2)] = inst_14507);
(statearr_14513_14542[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (1)))
{var inst_14474 = (new Array(n));var inst_14475 = inst_14474;var inst_14476 = (0);var state_14511__$1 = (function (){var statearr_14514 = state_14511;(statearr_14514[(7)] = inst_14475);
(statearr_14514[(8)] = inst_14476);
return statearr_14514;
})();var statearr_14515_14543 = state_14511__$1;(statearr_14515_14543[(2)] = null);
(statearr_14515_14543[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (4)))
{var inst_14479 = (state_14511[(9)]);var inst_14479__$1 = (state_14511[(2)]);var inst_14480 = (inst_14479__$1 == null);var inst_14481 = cljs.core.not.call(null,inst_14480);var state_14511__$1 = (function (){var statearr_14516 = state_14511;(statearr_14516[(9)] = inst_14479__$1);
return statearr_14516;
})();if(inst_14481)
{var statearr_14517_14544 = state_14511__$1;(statearr_14517_14544[(1)] = (5));
} else
{var statearr_14518_14545 = state_14511__$1;(statearr_14518_14545[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (15)))
{var inst_14501 = (state_14511[(2)]);var state_14511__$1 = state_14511;var statearr_14519_14546 = state_14511__$1;(statearr_14519_14546[(2)] = inst_14501);
(statearr_14519_14546[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (13)))
{var state_14511__$1 = state_14511;var statearr_14520_14547 = state_14511__$1;(statearr_14520_14547[(2)] = null);
(statearr_14520_14547[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (6)))
{var inst_14476 = (state_14511[(8)]);var inst_14497 = (inst_14476 > (0));var state_14511__$1 = state_14511;if(cljs.core.truth_(inst_14497))
{var statearr_14521_14548 = state_14511__$1;(statearr_14521_14548[(1)] = (12));
} else
{var statearr_14522_14549 = state_14511__$1;(statearr_14522_14549[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (3)))
{var inst_14509 = (state_14511[(2)]);var state_14511__$1 = state_14511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14511__$1,inst_14509);
} else
{if((state_val_14512 === (12)))
{var inst_14475 = (state_14511[(7)]);var inst_14499 = cljs.core.vec.call(null,inst_14475);var state_14511__$1 = state_14511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14511__$1,(15),out,inst_14499);
} else
{if((state_val_14512 === (2)))
{var state_14511__$1 = state_14511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14511__$1,(4),ch);
} else
{if((state_val_14512 === (11)))
{var inst_14491 = (state_14511[(2)]);var inst_14492 = (new Array(n));var inst_14475 = inst_14492;var inst_14476 = (0);var state_14511__$1 = (function (){var statearr_14523 = state_14511;(statearr_14523[(10)] = inst_14491);
(statearr_14523[(7)] = inst_14475);
(statearr_14523[(8)] = inst_14476);
return statearr_14523;
})();var statearr_14524_14550 = state_14511__$1;(statearr_14524_14550[(2)] = null);
(statearr_14524_14550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (9)))
{var inst_14475 = (state_14511[(7)]);var inst_14489 = cljs.core.vec.call(null,inst_14475);var state_14511__$1 = state_14511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14511__$1,(11),out,inst_14489);
} else
{if((state_val_14512 === (5)))
{var inst_14475 = (state_14511[(7)]);var inst_14484 = (state_14511[(11)]);var inst_14479 = (state_14511[(9)]);var inst_14476 = (state_14511[(8)]);var inst_14483 = (inst_14475[inst_14476] = inst_14479);var inst_14484__$1 = (inst_14476 + (1));var inst_14485 = (inst_14484__$1 < n);var state_14511__$1 = (function (){var statearr_14525 = state_14511;(statearr_14525[(11)] = inst_14484__$1);
(statearr_14525[(12)] = inst_14483);
return statearr_14525;
})();if(cljs.core.truth_(inst_14485))
{var statearr_14526_14551 = state_14511__$1;(statearr_14526_14551[(1)] = (8));
} else
{var statearr_14527_14552 = state_14511__$1;(statearr_14527_14552[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (14)))
{var inst_14504 = (state_14511[(2)]);var inst_14505 = cljs.core.async.close_BANG_.call(null,out);var state_14511__$1 = (function (){var statearr_14529 = state_14511;(statearr_14529[(13)] = inst_14504);
return statearr_14529;
})();var statearr_14530_14553 = state_14511__$1;(statearr_14530_14553[(2)] = inst_14505);
(statearr_14530_14553[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (10)))
{var inst_14495 = (state_14511[(2)]);var state_14511__$1 = state_14511;var statearr_14531_14554 = state_14511__$1;(statearr_14531_14554[(2)] = inst_14495);
(statearr_14531_14554[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14512 === (8)))
{var inst_14475 = (state_14511[(7)]);var inst_14484 = (state_14511[(11)]);var tmp14528 = inst_14475;var inst_14475__$1 = tmp14528;var inst_14476 = inst_14484;var state_14511__$1 = (function (){var statearr_14532 = state_14511;(statearr_14532[(7)] = inst_14475__$1);
(statearr_14532[(8)] = inst_14476);
return statearr_14532;
})();var statearr_14533_14555 = state_14511__$1;(statearr_14533_14555[(2)] = null);
(statearr_14533_14555[(1)] = (2));
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
});})(c__6376__auto___14541,out))
;return ((function (switch__6361__auto__,c__6376__auto___14541,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14537[(0)] = state_machine__6362__auto__);
(statearr_14537[(1)] = (1));
return statearr_14537;
});
var state_machine__6362__auto____1 = (function (state_14511){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14538){if((e14538 instanceof Object))
{var ex__6365__auto__ = e14538;var statearr_14539_14556 = state_14511;(statearr_14539_14556[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14538;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14557 = state_14511;
state_14511 = G__14557;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14511){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14541,out))
})();var state__6378__auto__ = (function (){var statearr_14540 = f__6377__auto__.call(null);(statearr_14540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14541);
return statearr_14540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14541,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___14700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14700,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14700,out){
return (function (state_14670){var state_val_14671 = (state_14670[(1)]);if((state_val_14671 === (7)))
{var inst_14666 = (state_14670[(2)]);var state_14670__$1 = state_14670;var statearr_14672_14701 = state_14670__$1;(statearr_14672_14701[(2)] = inst_14666);
(statearr_14672_14701[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (1)))
{var inst_14629 = [];var inst_14630 = inst_14629;var inst_14631 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14670__$1 = (function (){var statearr_14673 = state_14670;(statearr_14673[(7)] = inst_14630);
(statearr_14673[(8)] = inst_14631);
return statearr_14673;
})();var statearr_14674_14702 = state_14670__$1;(statearr_14674_14702[(2)] = null);
(statearr_14674_14702[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (4)))
{var inst_14634 = (state_14670[(9)]);var inst_14634__$1 = (state_14670[(2)]);var inst_14635 = (inst_14634__$1 == null);var inst_14636 = cljs.core.not.call(null,inst_14635);var state_14670__$1 = (function (){var statearr_14675 = state_14670;(statearr_14675[(9)] = inst_14634__$1);
return statearr_14675;
})();if(inst_14636)
{var statearr_14676_14703 = state_14670__$1;(statearr_14676_14703[(1)] = (5));
} else
{var statearr_14677_14704 = state_14670__$1;(statearr_14677_14704[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (15)))
{var inst_14660 = (state_14670[(2)]);var state_14670__$1 = state_14670;var statearr_14678_14705 = state_14670__$1;(statearr_14678_14705[(2)] = inst_14660);
(statearr_14678_14705[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (13)))
{var state_14670__$1 = state_14670;var statearr_14679_14706 = state_14670__$1;(statearr_14679_14706[(2)] = null);
(statearr_14679_14706[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (6)))
{var inst_14630 = (state_14670[(7)]);var inst_14655 = inst_14630.length;var inst_14656 = (inst_14655 > (0));var state_14670__$1 = state_14670;if(cljs.core.truth_(inst_14656))
{var statearr_14680_14707 = state_14670__$1;(statearr_14680_14707[(1)] = (12));
} else
{var statearr_14681_14708 = state_14670__$1;(statearr_14681_14708[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (3)))
{var inst_14668 = (state_14670[(2)]);var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14670__$1,inst_14668);
} else
{if((state_val_14671 === (12)))
{var inst_14630 = (state_14670[(7)]);var inst_14658 = cljs.core.vec.call(null,inst_14630);var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14670__$1,(15),out,inst_14658);
} else
{if((state_val_14671 === (2)))
{var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14670__$1,(4),ch);
} else
{if((state_val_14671 === (11)))
{var inst_14638 = (state_14670[(10)]);var inst_14634 = (state_14670[(9)]);var inst_14648 = (state_14670[(2)]);var inst_14649 = [];var inst_14650 = inst_14649.push(inst_14634);var inst_14630 = inst_14649;var inst_14631 = inst_14638;var state_14670__$1 = (function (){var statearr_14682 = state_14670;(statearr_14682[(11)] = inst_14650);
(statearr_14682[(7)] = inst_14630);
(statearr_14682[(8)] = inst_14631);
(statearr_14682[(12)] = inst_14648);
return statearr_14682;
})();var statearr_14683_14709 = state_14670__$1;(statearr_14683_14709[(2)] = null);
(statearr_14683_14709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (9)))
{var inst_14630 = (state_14670[(7)]);var inst_14646 = cljs.core.vec.call(null,inst_14630);var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14670__$1,(11),out,inst_14646);
} else
{if((state_val_14671 === (5)))
{var inst_14638 = (state_14670[(10)]);var inst_14634 = (state_14670[(9)]);var inst_14631 = (state_14670[(8)]);var inst_14638__$1 = f.call(null,inst_14634);var inst_14639 = cljs.core._EQ_.call(null,inst_14638__$1,inst_14631);var inst_14640 = cljs.core.keyword_identical_QMARK_.call(null,inst_14631,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14641 = (inst_14639) || (inst_14640);var state_14670__$1 = (function (){var statearr_14684 = state_14670;(statearr_14684[(10)] = inst_14638__$1);
return statearr_14684;
})();if(cljs.core.truth_(inst_14641))
{var statearr_14685_14710 = state_14670__$1;(statearr_14685_14710[(1)] = (8));
} else
{var statearr_14686_14711 = state_14670__$1;(statearr_14686_14711[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (14)))
{var inst_14663 = (state_14670[(2)]);var inst_14664 = cljs.core.async.close_BANG_.call(null,out);var state_14670__$1 = (function (){var statearr_14688 = state_14670;(statearr_14688[(13)] = inst_14663);
return statearr_14688;
})();var statearr_14689_14712 = state_14670__$1;(statearr_14689_14712[(2)] = inst_14664);
(statearr_14689_14712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (10)))
{var inst_14653 = (state_14670[(2)]);var state_14670__$1 = state_14670;var statearr_14690_14713 = state_14670__$1;(statearr_14690_14713[(2)] = inst_14653);
(statearr_14690_14713[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (8)))
{var inst_14630 = (state_14670[(7)]);var inst_14638 = (state_14670[(10)]);var inst_14634 = (state_14670[(9)]);var inst_14643 = inst_14630.push(inst_14634);var tmp14687 = inst_14630;var inst_14630__$1 = tmp14687;var inst_14631 = inst_14638;var state_14670__$1 = (function (){var statearr_14691 = state_14670;(statearr_14691[(14)] = inst_14643);
(statearr_14691[(7)] = inst_14630__$1);
(statearr_14691[(8)] = inst_14631);
return statearr_14691;
})();var statearr_14692_14714 = state_14670__$1;(statearr_14692_14714[(2)] = null);
(statearr_14692_14714[(1)] = (2));
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
});})(c__6376__auto___14700,out))
;return ((function (switch__6361__auto__,c__6376__auto___14700,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14696[(0)] = state_machine__6362__auto__);
(statearr_14696[(1)] = (1));
return statearr_14696;
});
var state_machine__6362__auto____1 = (function (state_14670){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14670);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14697){if((e14697 instanceof Object))
{var ex__6365__auto__ = e14697;var statearr_14698_14715 = state_14670;(statearr_14698_14715[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14716 = state_14670;
state_14670 = G__14716;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14670){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14700,out))
})();var state__6378__auto__ = (function (){var statearr_14699 = f__6377__auto__.call(null);(statearr_14699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14700);
return statearr_14699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14700,out))
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