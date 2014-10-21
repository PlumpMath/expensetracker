// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('goog.events');
expenses.router.setup_routes = (function setup_routes(data){secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__22366__auto___22467 = (function (params__22367__auto__){if(cljs.core.map_QMARK_.call(null,params__22367__auto__))
{var map__22463 = params__22367__auto__;var map__22463__$1 = ((cljs.core.seq_QMARK_.call(null,map__22463))?cljs.core.apply.call(null,cljs.core.hash_map,map__22463):map__22463);return om.core.transact_BANG_.call(null,data,((function (map__22463,map__22463__$1){
return (function (p1__22457_SHARP_){return cljs.core.assoc.call(null,p1__22457_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),null);
});})(map__22463,map__22463__$1))
);
} else
{if(cljs.core.vector_QMARK_.call(null,params__22367__auto__))
{var vec__22464 = params__22367__auto__;return om.core.transact_BANG_.call(null,data,((function (vec__22464){
return (function (p1__22457_SHARP_){return cljs.core.assoc.call(null,p1__22457_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),null);
});})(vec__22464))
);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__22366__auto___22467);
/**
* @param {...*} var_args
*/
expenses.router.route_index = ((function (action__22366__auto___22467){
return (function() { 
var route_index__delegate = function (args__22365__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__22365__auto__);
};
var route_index = function (var_args){
var args__22365__auto__ = null;if (arguments.length > 0) {
  args__22365__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return route_index__delegate.call(this,args__22365__auto__);};
route_index.cljs$lang$maxFixedArity = 0;
route_index.cljs$lang$applyTo = (function (arglist__22468){
var args__22365__auto__ = cljs.core.seq(arglist__22468);
return route_index__delegate(args__22365__auto__);
});
route_index.cljs$core$IFn$_invoke$arity$variadic = route_index__delegate;
return route_index;
})()
;})(action__22366__auto___22467))
;
var action__22366__auto__ = (function (params__22367__auto__){if(cljs.core.map_QMARK_.call(null,params__22367__auto__))
{var map__22465 = params__22367__auto__;var map__22465__$1 = ((cljs.core.seq_QMARK_.call(null,map__22465))?cljs.core.apply.call(null,cljs.core.hash_map,map__22465):map__22465);return om.core.transact_BANG_.call(null,data,((function (map__22465,map__22465__$1){
return (function (p1__22458_SHARP_){return cljs.core.assoc.call(null,p1__22458_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),null);
});})(map__22465,map__22465__$1))
);
} else
{if(cljs.core.vector_QMARK_.call(null,params__22367__auto__))
{var vec__22466 = params__22367__auto__;return om.core.transact_BANG_.call(null,data,((function (vec__22466){
return (function (p1__22458_SHARP_){return cljs.core.assoc.call(null,p1__22458_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),null);
});})(vec__22466))
);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"*",action__22366__auto__);
/**
* @param {...*} var_args
*/
expenses.router.catch_all = ((function (action__22366__auto__){
return (function() { 
var catch_all__delegate = function (args__22365__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"*",args__22365__auto__);
};
var catch_all = function (var_args){
var args__22365__auto__ = null;if (arguments.length > 0) {
  args__22365__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return catch_all__delegate.call(this,args__22365__auto__);};
catch_all.cljs$lang$maxFixedArity = 0;
catch_all.cljs$lang$applyTo = (function (arglist__22469){
var args__22365__auto__ = cljs.core.seq(arglist__22469);
return catch_all__delegate(args__22365__auto__);
});
catch_all.cljs$core$IFn$_invoke$arity$variadic = catch_all__delegate;
return catch_all;
})()
;})(action__22366__auto__))
;
});
expenses.router.history = (new goog.history.Html5History());
expenses.router.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (e){cljs.core.async.put_BANG_.call(null,out,e);
return false;
});})(out))
);
return out;
});
expenses.router.handle_routed_link = (function handle_routed_link(e){e.stopPropagation();
e.preventDefault();
var el = e.target;var title = el.getAttribute("title");var href = el.getAttribute("href");return expenses.router.history.setToken(href,title);
});
expenses.router.setup_history = (function setup_history(){var navigation_22514 = expenses.router.listen.call(null,expenses.router.history,goog.history.EventType.NAVIGATE);var c__17810__auto___22515 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto___22515,navigation_22514){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto___22515,navigation_22514){
return (function (state_22502){var state_val_22503 = (state_22502[(1)]);if((state_val_22503 === (4)))
{var inst_22494 = (state_22502[(2)]);var inst_22495 = inst_22494.token;var inst_22496 = cljs.core.print.call(null,inst_22495);var inst_22497 = secretary.core.dispatch_BANG_.call(null,inst_22495);var state_22502__$1 = (function (){var statearr_22504 = state_22502;(statearr_22504[(7)] = inst_22496);
(statearr_22504[(8)] = inst_22497);
return statearr_22504;
})();var statearr_22505_22516 = state_22502__$1;(statearr_22505_22516[(2)] = null);
(statearr_22505_22516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22503 === (3)))
{var inst_22500 = (state_22502[(2)]);var state_22502__$1 = state_22502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22502__$1,inst_22500);
} else
{if((state_val_22503 === (2)))
{var state_22502__$1 = state_22502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22502__$1,(4),navigation_22514);
} else
{if((state_val_22503 === (1)))
{var state_22502__$1 = state_22502;var statearr_22506_22517 = state_22502__$1;(statearr_22506_22517[(2)] = null);
(statearr_22506_22517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__17810__auto___22515,navigation_22514))
;return ((function (switch__17795__auto__,c__17810__auto___22515,navigation_22514){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_22510 = [null,null,null,null,null,null,null,null,null];(statearr_22510[(0)] = state_machine__17796__auto__);
(statearr_22510[(1)] = (1));
return statearr_22510;
});
var state_machine__17796__auto____1 = (function (state_22502){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_22502);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e22511){if((e22511 instanceof Object))
{var ex__17799__auto__ = e22511;var statearr_22512_22518 = state_22502;(statearr_22512_22518[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22511;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22519 = state_22502;
state_22502 = G__22519;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_22502){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_22502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto___22515,navigation_22514))
})();var state__17812__auto__ = (function (){var statearr_22513 = f__17811__auto__.call(null);(statearr_22513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto___22515);
return statearr_22513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto___22515,navigation_22514))
);
expenses.router.history.setPathPrefix("#");
return expenses.router.history.setEnabled(true);
});
expenses.router.init = (function init(data){expenses.router.setup_routes.call(null,data);
return expenses.router.setup_history.call(null);
});

//# sourceMappingURL=router.js.map