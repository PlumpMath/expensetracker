// Compiled by ClojureScript 0.0-2322
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__28258,args){var map__28260 = p__28258;var map__28260__$1 = ((cljs.core.seq_QMARK_.call(null,map__28260))?cljs.core.apply.call(null,cljs.core.hash_map,map__28260):map__28260);var debug = cljs.core.get.call(null,map__28260__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__28258,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__28258,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__28261){
var p__28258 = cljs.core.first(arglist__28261);
var args = cljs.core.rest(arglist__28261);
return log__delegate(p__28258,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__28262){var map__28264 = p__28262;var map__28264__$1 = ((cljs.core.seq_QMARK_.call(null,map__28264))?cljs.core.apply.call(null,cljs.core.hash_map,map__28264):map__28264);var websocket_url = cljs.core.get.call(null,map__28264__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__28265,callback){var map__28267 = p__28265;var map__28267__$1 = ((cljs.core.seq_QMARK_.call(null,map__28267))?cljs.core.apply.call(null,cljs.core.hash_map,map__28267):map__28267);var msg = map__28267__$1;var dependency_file = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11381__auto__ = dependency_file;if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__28267,map__28267__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__28267,map__28267__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__28268,p__28269){var map__28272 = p__28268;var map__28272__$1 = ((cljs.core.seq_QMARK_.call(null,map__28272))?cljs.core.apply.call(null,cljs.core.hash_map,map__28272):map__28272);var opts = map__28272__$1;var url_rewriter = cljs.core.get.call(null,map__28272__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__28273 = p__28269;var map__28273__$1 = ((cljs.core.seq_QMARK_.call(null,map__28273))?cljs.core.apply.call(null,cljs.core.hash_map,map__28273):map__28273);var d = map__28273__$1;var file = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__28274,p__28275){var map__28317 = p__28274;var map__28317__$1 = ((cljs.core.seq_QMARK_.call(null,map__28317))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);var opts = map__28317__$1;var on_jsload = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__28318 = p__28275;var map__28318__$1 = ((cljs.core.seq_QMARK_.call(null,map__28318))?cljs.core.apply.call(null,cljs.core.hash_map,map__28318):map__28318);var files = cljs.core.get.call(null,map__28318__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__17810__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto__,map__28317,map__28317__$1,opts,on_jsload,before_jsload,map__28318,map__28318__$1,files){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto__,map__28317,map__28317__$1,opts,on_jsload,before_jsload,map__28318,map__28318__$1,files){
return (function (state_28341){var state_val_28342 = (state_28341[(1)]);if((state_val_28342 === (6)))
{var inst_28323 = (state_28341[(7)]);var inst_28332 = (state_28341[(2)]);var inst_28333 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28334 = [inst_28323];var inst_28335 = (new cljs.core.PersistentVector(null,1,(5),inst_28333,inst_28334,null));var inst_28336 = cljs.core.apply.call(null,on_jsload,inst_28335);var state_28341__$1 = (function (){var statearr_28343 = state_28341;(statearr_28343[(8)] = inst_28332);
return statearr_28343;
})();var statearr_28344_28358 = state_28341__$1;(statearr_28344_28358[(2)] = inst_28336);
(statearr_28344_28358[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28342 === (5)))
{var inst_28339 = (state_28341[(2)]);var state_28341__$1 = state_28341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28341__$1,inst_28339);
} else
{if((state_val_28342 === (4)))
{var state_28341__$1 = state_28341;var statearr_28345_28359 = state_28341__$1;(statearr_28345_28359[(2)] = null);
(statearr_28345_28359[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28342 === (3)))
{var inst_28323 = (state_28341[(7)]);var inst_28326 = console.debug("Figwheel: loaded these files");var inst_28327 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28323);var inst_28328 = cljs.core.prn_str.call(null,inst_28327);var inst_28329 = console.log(inst_28328);var inst_28330 = cljs.core.async.timeout.call(null,(10));var state_28341__$1 = (function (){var statearr_28346 = state_28341;(statearr_28346[(9)] = inst_28329);
(statearr_28346[(10)] = inst_28326);
return statearr_28346;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28341__$1,(6),inst_28330);
} else
{if((state_val_28342 === (2)))
{var inst_28323 = (state_28341[(7)]);var inst_28323__$1 = (state_28341[(2)]);var inst_28324 = cljs.core.not_empty.call(null,inst_28323__$1);var state_28341__$1 = (function (){var statearr_28347 = state_28341;(statearr_28347[(7)] = inst_28323__$1);
return statearr_28347;
})();if(cljs.core.truth_(inst_28324))
{var statearr_28348_28360 = state_28341__$1;(statearr_28348_28360[(1)] = (3));
} else
{var statearr_28349_28361 = state_28341__$1;(statearr_28349_28361[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28342 === (1)))
{var inst_28319 = before_jsload.call(null,files);var inst_28320 = figwheel.client.add_request_urls.call(null,opts,files);var inst_28321 = figwheel.client.load_all_js_files.call(null,inst_28320);var state_28341__$1 = (function (){var statearr_28350 = state_28341;(statearr_28350[(11)] = inst_28319);
return statearr_28350;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28341__$1,(2),inst_28321);
} else
{return null;
}
}
}
}
}
}
});})(c__17810__auto__,map__28317,map__28317__$1,opts,on_jsload,before_jsload,map__28318,map__28318__$1,files))
;return ((function (switch__17795__auto__,c__17810__auto__,map__28317,map__28317__$1,opts,on_jsload,before_jsload,map__28318,map__28318__$1,files){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_28354 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28354[(0)] = state_machine__17796__auto__);
(statearr_28354[(1)] = (1));
return statearr_28354;
});
var state_machine__17796__auto____1 = (function (state_28341){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_28341);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e28355){if((e28355 instanceof Object))
{var ex__17799__auto__ = e28355;var statearr_28356_28362 = state_28341;(statearr_28356_28362[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28355;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28363 = state_28341;
state_28341 = G__28363;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_28341){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_28341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto__,map__28317,map__28317__$1,opts,on_jsload,before_jsload,map__28318,map__28318__$1,files))
})();var state__17812__auto__ = (function (){var statearr_28357 = f__17811__auto__.call(null);(statearr_28357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto__);
return statearr_28357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto__,map__28317,map__28317__$1,opts,on_jsload,before_jsload,map__28318,map__28318__$1,files))
);
return c__17810__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__28364,link_href){var map__28366 = p__28364;var map__28366__$1 = ((cljs.core.seq_QMARK_.call(null,map__28366))?cljs.core.apply.call(null,cljs.core.hash_map,map__28366):map__28366);var request_url = cljs.core.get.call(null,map__28366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__28366__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__17810__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto__,parent){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto__,parent){
return (function (state_28387){var state_val_28388 = (state_28387[(1)]);if((state_val_28388 === (2)))
{var inst_28384 = (state_28387[(2)]);var inst_28385 = parent.removeChild(orig_link);var state_28387__$1 = (function (){var statearr_28389 = state_28387;(statearr_28389[(7)] = inst_28384);
return statearr_28389;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28387__$1,inst_28385);
} else
{if((state_val_28388 === (1)))
{var inst_28382 = cljs.core.async.timeout.call(null,(200));var state_28387__$1 = state_28387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28387__$1,(2),inst_28382);
} else
{return null;
}
}
});})(c__17810__auto__,parent))
;return ((function (switch__17795__auto__,c__17810__auto__,parent){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_28393 = [null,null,null,null,null,null,null,null];(statearr_28393[(0)] = state_machine__17796__auto__);
(statearr_28393[(1)] = (1));
return statearr_28393;
});
var state_machine__17796__auto____1 = (function (state_28387){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_28387);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e28394){if((e28394 instanceof Object))
{var ex__17799__auto__ = e28394;var statearr_28395_28397 = state_28387;(statearr_28395_28397[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28398 = state_28387;
state_28387 = G__28398;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_28387){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_28387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto__,parent))
})();var state__17812__auto__ = (function (){var statearr_28396 = f__17811__auto__.call(null);(statearr_28396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto__);
return statearr_28396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto__,parent))
);
return c__17810__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__28399){var map__28401 = p__28399;var map__28401__$1 = ((cljs.core.seq_QMARK_.call(null,map__28401))?cljs.core.apply.call(null,cljs.core.hash_map,map__28401):map__28401);var f_data = map__28401__$1;var request_url = cljs.core.get.call(null,map__28401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__28401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__28402,files_msg){var map__28424 = p__28402;var map__28424__$1 = ((cljs.core.seq_QMARK_.call(null,map__28424))?cljs.core.apply.call(null,cljs.core.hash_map,map__28424):map__28424);var opts = map__28424__$1;var on_cssload = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__28425_28445 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__28426_28446 = null;var count__28427_28447 = (0);var i__28428_28448 = (0);while(true){
if((i__28428_28448 < count__28427_28447))
{var f_28449 = cljs.core._nth.call(null,chunk__28426_28446,i__28428_28448);figwheel.client.reload_css_file.call(null,f_28449);
{
var G__28450 = seq__28425_28445;
var G__28451 = chunk__28426_28446;
var G__28452 = count__28427_28447;
var G__28453 = (i__28428_28448 + (1));
seq__28425_28445 = G__28450;
chunk__28426_28446 = G__28451;
count__28427_28447 = G__28452;
i__28428_28448 = G__28453;
continue;
}
} else
{var temp__4126__auto___28454 = cljs.core.seq.call(null,seq__28425_28445);if(temp__4126__auto___28454)
{var seq__28425_28455__$1 = temp__4126__auto___28454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28425_28455__$1))
{var c__12137__auto___28456 = cljs.core.chunk_first.call(null,seq__28425_28455__$1);{
var G__28457 = cljs.core.chunk_rest.call(null,seq__28425_28455__$1);
var G__28458 = c__12137__auto___28456;
var G__28459 = cljs.core.count.call(null,c__12137__auto___28456);
var G__28460 = (0);
seq__28425_28445 = G__28457;
chunk__28426_28446 = G__28458;
count__28427_28447 = G__28459;
i__28428_28448 = G__28460;
continue;
}
} else
{var f_28461 = cljs.core.first.call(null,seq__28425_28455__$1);figwheel.client.reload_css_file.call(null,f_28461);
{
var G__28462 = cljs.core.next.call(null,seq__28425_28455__$1);
var G__28463 = null;
var G__28464 = (0);
var G__28465 = (0);
seq__28425_28445 = G__28462;
chunk__28426_28446 = G__28463;
count__28427_28447 = G__28464;
i__28428_28448 = G__28465;
continue;
}
}
} else
{}
}
break;
}
var c__17810__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__17810__auto__,map__28424,map__28424__$1,opts,on_cssload){
return (function (){var f__17811__auto__ = (function (){var switch__17795__auto__ = ((function (c__17810__auto__,map__28424,map__28424__$1,opts,on_cssload){
return (function (state_28435){var state_val_28436 = (state_28435[(1)]);if((state_val_28436 === (2)))
{var inst_28431 = (state_28435[(2)]);var inst_28432 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_28433 = on_cssload.call(null,inst_28432);var state_28435__$1 = (function (){var statearr_28437 = state_28435;(statearr_28437[(7)] = inst_28431);
return statearr_28437;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28435__$1,inst_28433);
} else
{if((state_val_28436 === (1)))
{var inst_28429 = cljs.core.async.timeout.call(null,(100));var state_28435__$1 = state_28435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28435__$1,(2),inst_28429);
} else
{return null;
}
}
});})(c__17810__auto__,map__28424,map__28424__$1,opts,on_cssload))
;return ((function (switch__17795__auto__,c__17810__auto__,map__28424,map__28424__$1,opts,on_cssload){
return (function() {
var state_machine__17796__auto__ = null;
var state_machine__17796__auto____0 = (function (){var statearr_28441 = [null,null,null,null,null,null,null,null];(statearr_28441[(0)] = state_machine__17796__auto__);
(statearr_28441[(1)] = (1));
return statearr_28441;
});
var state_machine__17796__auto____1 = (function (state_28435){while(true){
var ret_value__17797__auto__ = (function (){try{while(true){
var result__17798__auto__ = switch__17795__auto__.call(null,state_28435);if(cljs.core.keyword_identical_QMARK_.call(null,result__17798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__17798__auto__;
}
break;
}
}catch (e28442){if((e28442 instanceof Object))
{var ex__17799__auto__ = e28442;var statearr_28443_28466 = state_28435;(statearr_28443_28466[(5)] = ex__17799__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28442;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28467 = state_28435;
state_28435 = G__28467;
continue;
}
} else
{return ret_value__17797__auto__;
}
break;
}
});
state_machine__17796__auto__ = function(state_28435){
switch(arguments.length){
case 0:
return state_machine__17796__auto____0.call(this);
case 1:
return state_machine__17796__auto____1.call(this,state_28435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17796__auto____0;
state_machine__17796__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17796__auto____1;
return state_machine__17796__auto__;
})()
;})(switch__17795__auto__,c__17810__auto__,map__28424,map__28424__$1,opts,on_cssload))
})();var state__17812__auto__ = (function (){var statearr_28444 = f__17811__auto__.call(null);(statearr_28444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17810__auto__);
return statearr_28444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17812__auto__);
});})(c__17810__auto__,map__28424,map__28424__$1,opts,on_cssload))
);
return c__17810__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__28468){var map__28473 = p__28468;var map__28473__$1 = ((cljs.core.seq_QMARK_.call(null,map__28473))?cljs.core.apply.call(null,cljs.core.hash_map,map__28473):map__28473);var opts = map__28473__$1;var on_compile_fail = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__28474 = cljs.core._EQ_;var expr__28475 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__28474.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__28475)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__28474.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__28475)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__28474.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28475)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__28473,map__28473__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28480 = {"detail":url};return obj28480;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__28481){var map__28483 = p__28481;var map__28483__$1 = ((cljs.core.seq_QMARK_.call(null,map__28483))?cljs.core.apply.call(null,cljs.core.hash_map,map__28483):map__28483);var class$ = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__28484){var map__28490 = p__28484;var map__28490__$1 = ((cljs.core.seq_QMARK_.call(null,map__28490))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);var ed = map__28490__$1;var exception_data = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__28491_28495 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__28492_28496 = null;var count__28493_28497 = (0);var i__28494_28498 = (0);while(true){
if((i__28494_28498 < count__28493_28497))
{var msg_28499 = cljs.core._nth.call(null,chunk__28492_28496,i__28494_28498);console.log(msg_28499);
{
var G__28500 = seq__28491_28495;
var G__28501 = chunk__28492_28496;
var G__28502 = count__28493_28497;
var G__28503 = (i__28494_28498 + (1));
seq__28491_28495 = G__28500;
chunk__28492_28496 = G__28501;
count__28493_28497 = G__28502;
i__28494_28498 = G__28503;
continue;
}
} else
{var temp__4126__auto___28504 = cljs.core.seq.call(null,seq__28491_28495);if(temp__4126__auto___28504)
{var seq__28491_28505__$1 = temp__4126__auto___28504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28491_28505__$1))
{var c__12137__auto___28506 = cljs.core.chunk_first.call(null,seq__28491_28505__$1);{
var G__28507 = cljs.core.chunk_rest.call(null,seq__28491_28505__$1);
var G__28508 = c__12137__auto___28506;
var G__28509 = cljs.core.count.call(null,c__12137__auto___28506);
var G__28510 = (0);
seq__28491_28495 = G__28507;
chunk__28492_28496 = G__28508;
count__28493_28497 = G__28509;
i__28494_28498 = G__28510;
continue;
}
} else
{var msg_28511 = cljs.core.first.call(null,seq__28491_28505__$1);console.log(msg_28511);
{
var G__28512 = cljs.core.next.call(null,seq__28491_28505__$1);
var G__28513 = null;
var G__28514 = (0);
var G__28515 = (0);
seq__28491_28495 = G__28512;
chunk__28492_28496 = G__28513;
count__28493_28497 = G__28514;
i__28494_28498 = G__28515;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11381__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11381__auto__))
{return or__11381__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__28516){var map__28518 = p__28516;var map__28518__$1 = ((cljs.core.seq_QMARK_.call(null,map__28518))?cljs.core.apply.call(null,cljs.core.hash_map,map__28518):map__28518);var opts = map__28518__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__28516 = null;if (arguments.length > 0) {
  p__28516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__28516);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__28519){
var p__28516 = cljs.core.seq(arglist__28519);
return watch_and_reload__delegate(p__28516);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map