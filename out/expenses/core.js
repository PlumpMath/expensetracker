// Compiled by ClojureScript 0.0-2322
goog.provide('expenses.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('expenses.components.add');
goog.require('om.dom');
goog.require('expenses.components.menu');
goog.require('expenses.components.list');
goog.require('expenses.components.add');
goog.require('om.dom');
goog.require('expenses.components.content');
goog.require('expenses.components.list');
goog.require('cljs.core.async');
goog.require('expenses.db');
goog.require('expenses.components.content');
goog.require('expenses.components.menu');
goog.require('om.core');
goog.require('om.core');
goog.require('expenses.db');
cljs.core.enable_console_print_BANG_.call(null);
React.initializeTouchEvents(true);
expenses.core.db_client = expenses.db.get_client.call(null);
expenses.core.error_component = (function error_component(app,owner){if(typeof expenses.core.t10130 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t10130 = (function (owner,app,error_component,meta10131){
this.owner = owner;
this.app = app;
this.error_component = error_component;
this.meta10131 = meta10131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t10130.cljs$lang$type = true;
expenses.core.t10130.cljs$lang$ctorStr = "expenses.core/t10130";
expenses.core.t10130.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.core/t10130");
});
expenses.core.t10130.prototype.om$core$IRender$ = true;
expenses.core.t10130.prototype.om$core$IRender$render$arity$1 = (function (this__5138__auto__){var self__ = this;
var this__5138__auto____$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.app));
});
expenses.core.t10130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10132){var self__ = this;
var _10132__$1 = this;return self__.meta10131;
});
expenses.core.t10130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10132,meta10131__$1){var self__ = this;
var _10132__$1 = this;return (new expenses.core.t10130(self__.owner,self__.app,self__.error_component,meta10131__$1));
});
expenses.core.__GT_t10130 = (function __GT_t10130(owner__$1,app__$1,error_component__$1,meta10131){return (new expenses.core.t10130(owner__$1,app__$1,error_component__$1,meta10131));
});
}
return (new expenses.core.t10130(owner,app,error_component,null));
});
expenses.core.async_get = (function async_get(app,owner){var data = null;return om.core.transact_BANG_.call(null,app,((function (data){
return (function (p1__10133_SHARP_){return cljs.core.assoc.call(null,p1__10133_SHARP_,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(new Date()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.db.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner))));
});})(data))
);
});
expenses.core.loading = (function loading(app,owner){if(typeof expenses.core.t10148 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t10148 = (function (owner,app,loading,meta10149){
this.owner = owner;
this.app = app;
this.loading = loading;
this.meta10149 = meta10149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t10148.cljs$lang$type = true;
expenses.core.t10148.cljs$lang$ctorStr = "expenses.core/t10148";
expenses.core.t10148.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.core/t10148");
});
expenses.core.t10148.prototype.om$core$IRender$ = true;
expenses.core.t10148.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h2({"style": {"textAlign": "center"}},"Loading");
});
expenses.core.t10148.prototype.om$core$IWillMount$ = true;
expenses.core.t10148.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,___$1){
return (function (state_10153){var state_val_10154 = (state_10153[(1)]);if((state_val_10154 === (1)))
{var inst_10151 = expenses.core.async_get.call(null,self__.app,self__.owner);var state_10153__$1 = state_10153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10153__$1,inst_10151);
} else
{return null;
}
});})(c__6376__auto__,___$1))
;return ((function (switch__6361__auto__,c__6376__auto__,___$1){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_10158 = [null,null,null,null,null,null,null];(statearr_10158[(0)] = state_machine__6362__auto__);
(statearr_10158[(1)] = (1));
return statearr_10158;
});
var state_machine__6362__auto____1 = (function (state_10153){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_10153);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e10159){if((e10159 instanceof Object))
{var ex__6365__auto__ = e10159;var statearr_10160_10162 = state_10153;(statearr_10160_10162[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10159;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10163 = state_10153;
state_10153 = G__10163;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_10153){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_10153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,___$1))
})();var state__6378__auto__ = (function (){var statearr_10161 = f__6377__auto__.call(null);(statearr_10161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_10161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,___$1))
);
return c__6376__auto__;
});
expenses.core.t10148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10150){var self__ = this;
var _10150__$1 = this;return self__.meta10149;
});
expenses.core.t10148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10150,meta10149__$1){var self__ = this;
var _10150__$1 = this;return (new expenses.core.t10148(self__.owner,self__.app,self__.loading,meta10149__$1));
});
expenses.core.__GT_t10148 = (function __GT_t10148(owner__$1,app__$1,loading__$1,meta10149){return (new expenses.core.t10148(owner__$1,app__$1,loading__$1,meta10149));
});
}
return (new expenses.core.t10148(owner,app,loading,null));
});
expenses.core.dispatch_component = (function dispatch_component(app,owner){if(typeof expenses.core.t10234 !== 'undefined')
{} else
{
/**
* @constructor
*/
expenses.core.t10234 = (function (owner,app,dispatch_component,meta10235){
this.owner = owner;
this.app = app;
this.dispatch_component = dispatch_component;
this.meta10235 = meta10235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
expenses.core.t10234.cljs$lang$type = true;
expenses.core.t10234.cljs$lang$ctorStr = "expenses.core/t10234";
expenses.core.t10234.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"expenses.core/t10234");
});
expenses.core.t10234.prototype.om$core$IRender$ = true;
expenses.core.t10234.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": (cljs.core.truth_(self__.app.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"active":"closed"), "id": "app-layout"},om.core.build.call(null,expenses.components.menu.menu_component,self__.app),React.DOM.div({"className": "header"},React.DOM.h1({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.app,((function (___$1){
return (function (p1__10167_SHARP_){return cljs.core.assoc.call(null,p1__10167_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661));
});})(___$1))
);
});})(___$1))
},"expenses")),om.core.build.call(null,(function (){var G__10237 = (((self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)) instanceof cljs.core.Keyword))?self__.app.call(null,new cljs.core.Keyword(null,"component","component",1555936782)).fqn:null);switch (G__10237) {
case "error":
return expenses.core.error_component;

break;
case "list":
return expenses.components.list.days_list_component;

break;
case "edit":
return expenses.components.add.edit_component;

break;
case "add":
return expenses.components.add.add_component;

break;
case "main":
return expenses.components.content.main_component;

break;
default:
return expenses.core.loading;

}
})(),self__.app));
});
expenses.core.t10234.prototype.om$core$IWillMount$ = true;
expenses.core.t10234.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,___$1){
return (function (state_10274){var state_val_10275 = (state_10274[(1)]);if((state_val_10275 === (7)))
{var inst_10269 = (state_10274[(2)]);var state_10274__$1 = (function (){var statearr_10276 = state_10274;(statearr_10276[(7)] = inst_10269);
return statearr_10276;
})();var statearr_10277_10301 = state_10274__$1;(statearr_10277_10301[(2)] = null);
(statearr_10277_10301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (1)))
{var state_10274__$1 = state_10274;var statearr_10278_10302 = state_10274__$1;(statearr_10278_10302[(2)] = null);
(statearr_10278_10302[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (4)))
{var inst_10242 = (state_10274[(8)]);var inst_10242__$1 = (state_10274[(2)]);var inst_10243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_10242__$1);var inst_10244 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),inst_10243);var state_10274__$1 = (function (){var statearr_10279 = state_10274;(statearr_10279[(8)] = inst_10242__$1);
return statearr_10279;
})();if(inst_10244)
{var statearr_10280_10303 = state_10274__$1;(statearr_10280_10303[(1)] = (5));
} else
{var statearr_10281_10304 = state_10274__$1;(statearr_10281_10304[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (13)))
{var inst_10265 = (state_10274[(2)]);var state_10274__$1 = state_10274;var statearr_10282_10305 = state_10274__$1;(statearr_10282_10305[(2)] = inst_10265);
(statearr_10282_10305[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (6)))
{var inst_10242 = (state_10274[(8)]);var inst_10249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_10242);var inst_10250 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),inst_10249);var state_10274__$1 = state_10274;if(inst_10250)
{var statearr_10283_10306 = state_10274__$1;(statearr_10283_10306[(1)] = (8));
} else
{var statearr_10284_10307 = state_10274__$1;(statearr_10284_10307[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (3)))
{var inst_10272 = (state_10274[(2)]);var state_10274__$1 = state_10274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10274__$1,inst_10272);
} else
{if((state_val_10275 === (12)))
{var state_10274__$1 = state_10274;var statearr_10285_10308 = state_10274__$1;(statearr_10285_10308[(2)] = null);
(statearr_10285_10308[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (2)))
{var inst_10239 = om.core.get_shared.call(null,self__.owner);var inst_10240 = new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(inst_10239);var state_10274__$1 = state_10274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10274__$1,(4),inst_10240);
} else
{if((state_val_10275 === (11)))
{var inst_10242 = (state_10274[(8)]);var inst_10260 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10242);var inst_10261 = (function (){var new_date = inst_10260;var ev = inst_10242;return ((function (new_date,ev,inst_10242,inst_10260,state_val_10275,c__6376__auto__,___$1){
return (function (p1__10166_SHARP_){return cljs.core.assoc.call(null,p1__10166_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"current-date","current-date",-1728476105),new_date);
});
;})(new_date,ev,inst_10242,inst_10260,state_val_10275,c__6376__auto__,___$1))
})();var inst_10262 = om.core.transact_BANG_.call(null,self__.app,inst_10261);var state_10274__$1 = state_10274;var statearr_10286_10309 = state_10274__$1;(statearr_10286_10309[(2)] = inst_10262);
(statearr_10286_10309[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (9)))
{var inst_10242 = (state_10274[(8)]);var inst_10257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_10242);var inst_10258 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),inst_10257);var state_10274__$1 = state_10274;if(inst_10258)
{var statearr_10287_10310 = state_10274__$1;(statearr_10287_10310[(1)] = (11));
} else
{var statearr_10288_10311 = state_10274__$1;(statearr_10288_10311[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (5)))
{var inst_10242 = (state_10274[(8)]);var inst_10246 = (function (){var ev = inst_10242;return ((function (ev,inst_10242,state_val_10275,c__6376__auto__,___$1){
return (function (p1__10164_SHARP_){return cljs.core.assoc.call(null,p1__10164_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"current-item","current-item",-1762631488),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ev));
});
;})(ev,inst_10242,state_val_10275,c__6376__auto__,___$1))
})();var inst_10247 = om.core.transact_BANG_.call(null,self__.app,inst_10246);var state_10274__$1 = state_10274;var statearr_10289_10312 = state_10274__$1;(statearr_10289_10312[(2)] = inst_10247);
(statearr_10289_10312[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (10)))
{var inst_10267 = (state_10274[(2)]);var state_10274__$1 = state_10274;var statearr_10290_10313 = state_10274__$1;(statearr_10290_10313[(2)] = inst_10267);
(statearr_10290_10313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10275 === (8)))
{var inst_10242 = (state_10274[(8)]);var inst_10252 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10242);var inst_10253 = inst_10252.deleteRecord();var inst_10254 = (function (){var ev = inst_10242;return ((function (ev,inst_10242,inst_10252,inst_10253,state_val_10275,c__6376__auto__,___$1){
return (function (p1__10165_SHARP_){return cljs.core.assoc.call(null,p1__10165_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"expenses","expenses",-63975799),expenses.db.get_expenses.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner))));
});
;})(ev,inst_10242,inst_10252,inst_10253,state_val_10275,c__6376__auto__,___$1))
})();var inst_10255 = om.core.transact_BANG_.call(null,self__.app,inst_10254);var state_10274__$1 = (function (){var statearr_10291 = state_10274;(statearr_10291[(9)] = inst_10253);
return statearr_10291;
})();var statearr_10292_10314 = state_10274__$1;(statearr_10292_10314[(2)] = inst_10255);
(statearr_10292_10314[(1)] = (10));
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
});})(c__6376__auto__,___$1))
;return ((function (switch__6361__auto__,c__6376__auto__,___$1){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_10296 = [null,null,null,null,null,null,null,null,null,null];(statearr_10296[(0)] = state_machine__6362__auto__);
(statearr_10296[(1)] = (1));
return statearr_10296;
});
var state_machine__6362__auto____1 = (function (state_10274){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_10274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e10297){if((e10297 instanceof Object))
{var ex__6365__auto__ = e10297;var statearr_10298_10315 = state_10274;(statearr_10298_10315[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10316 = state_10274;
state_10274 = G__10316;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_10274){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_10274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,___$1))
})();var state__6378__auto__ = (function (){var statearr_10299 = f__6377__auto__.call(null);(statearr_10299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_10299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,___$1))
);
return c__6376__auto__;
});
expenses.core.t10234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10236){var self__ = this;
var _10236__$1 = this;return self__.meta10235;
});
expenses.core.t10234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10236,meta10235__$1){var self__ = this;
var _10236__$1 = this;return (new expenses.core.t10234(self__.owner,self__.app,self__.dispatch_component,meta10235__$1));
});
expenses.core.__GT_t10234 = (function __GT_t10234(owner__$1,app__$1,dispatch_component__$1,meta10235){return (new expenses.core.t10234(owner__$1,app__$1,dispatch_component__$1,meta10235));
});
}
return (new expenses.core.t10234(owner,app,dispatch_component,null));
});
expenses.core.main = (function main(auth_err){var target = document.getElementById("layout");if(cljs.core.truth_(auth_err))
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),auth_err,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else
{var ds_manager = expenses.core.db_client.getDatastoreManager();return ds_manager.openDefaultDatastore(((function (ds_manager,target){
return (function (ds_err,ds){if(cljs.core.truth_(ds_err))
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),ds_err,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else
{return om.core.root.call(null,expenses.core.dispatch_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),ds.getTable("expenses"),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),cljs.core.async.chan.call(null)], null)], null));
}
});})(ds_manager,target))
);
}
});
expenses.core.db_client.authenticate(null,expenses.core.main);

//# sourceMappingURL=core.js.map