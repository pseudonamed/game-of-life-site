// Compiled by ClojureScript 1.9.946 {}
goog.provide('game_of_life.renderer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('clojure.set');
goog.require('game_of_life.core');
goog.require('game_of_life.patterns');
cljs.core.enable_console_print_BANG_.call(null);
game_of_life.renderer.on_js_reload = (function game_of_life$renderer$on_js_reload(){
return null;
});
game_of_life.renderer.cells = clojure.set.union.call(null,game_of_life.patterns.block,game_of_life.patterns.glider,game_of_life.core.translate_pattern.call(null,game_of_life.patterns.block,cljs.core.list((1),(1))),game_of_life.core.translate_pattern.call(null,game_of_life.patterns.beehive,cljs.core.list((0),(5))),game_of_life.core.translate_pattern.call(null,game_of_life.patterns.loaf,cljs.core.list((6),(5))));
game_of_life.renderer.setup = (function game_of_life$renderer$setup(){
quil.core.frame_rate.call(null,(20));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"generation","generation",-2132542044),game_of_life.renderer.cells,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),(500),new cljs.core.Keyword(null,"block-size","block-size",-1062272384),(20)], null);
});
game_of_life.renderer.max_point = (function game_of_life$renderer$max_point(generation){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,quil.core.abs,cljs.core.mapcat.call(null,cljs.core.flatten,generation)));
});
game_of_life.renderer.update_state = (function game_of_life$renderer$update_state(p__44932){
var map__44933 = p__44932;
var map__44933__$1 = ((((!((map__44933 == null)))?((((map__44933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44933):map__44933);
var generation = cljs.core.get.call(null,map__44933__$1,new cljs.core.Keyword(null,"generation","generation",-2132542044));
var canvas_size = cljs.core.get.call(null,map__44933__$1,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475));
var block_size = cljs.core.get.call(null,map__44933__$1,new cljs.core.Keyword(null,"block-size","block-size",-1062272384));
var current_max = game_of_life.renderer.max_point.call(null,generation);
var bounds = (current_max > quil.core.floor.call(null,((canvas_size / block_size) / (2))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"generation","generation",-2132542044),game_of_life.core.next_generation.call(null,generation),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),canvas_size,new cljs.core.Keyword(null,"block-size","block-size",-1062272384),((bounds)?(block_size / (2)):block_size)], null);
});
game_of_life.renderer.draw_state = (function game_of_life$renderer$draw_state(p__44935){
var map__44936 = p__44935;
var map__44936__$1 = ((((!((map__44936 == null)))?((((map__44936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44936):map__44936);
var generation = cljs.core.get.call(null,map__44936__$1,new cljs.core.Keyword(null,"generation","generation",-2132542044));
var canvas_size = cljs.core.get.call(null,map__44936__$1,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475));
var block_size = cljs.core.get.call(null,map__44936__$1,new cljs.core.Keyword(null,"block-size","block-size",-1062272384));
quil.core.background.call(null,(240));

quil.core.fill.call(null,(255),(0),(0));

var center_offset = ((canvas_size / (2)) - (block_size / (2)));
var seq__44938 = cljs.core.seq.call(null,generation);
var chunk__44939 = null;
var count__44940 = (0);
var i__44941 = (0);
while(true){
if((i__44941 < count__44940)){
var vec__44942 = cljs.core._nth.call(null,chunk__44939,i__44941);
var x = cljs.core.nth.call(null,vec__44942,(0),null);
var y = cljs.core.nth.call(null,vec__44942,(1),null);
quil.core.rect.call(null,(center_offset + (block_size * x)),(center_offset + (block_size * y)),block_size,block_size);

var G__44948 = seq__44938;
var G__44949 = chunk__44939;
var G__44950 = count__44940;
var G__44951 = (i__44941 + (1));
seq__44938 = G__44948;
chunk__44939 = G__44949;
count__44940 = G__44950;
i__44941 = G__44951;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44938);
if(temp__5457__auto__){
var seq__44938__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44938__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__44938__$1);
var G__44952 = cljs.core.chunk_rest.call(null,seq__44938__$1);
var G__44953 = c__31159__auto__;
var G__44954 = cljs.core.count.call(null,c__31159__auto__);
var G__44955 = (0);
seq__44938 = G__44952;
chunk__44939 = G__44953;
count__44940 = G__44954;
i__44941 = G__44955;
continue;
} else {
var vec__44945 = cljs.core.first.call(null,seq__44938__$1);
var x = cljs.core.nth.call(null,vec__44945,(0),null);
var y = cljs.core.nth.call(null,vec__44945,(1),null);
quil.core.rect.call(null,(center_offset + (block_size * x)),(center_offset + (block_size * y)),block_size,block_size);

var G__44956 = cljs.core.next.call(null,seq__44938__$1);
var G__44957 = null;
var G__44958 = (0);
var G__44959 = (0);
seq__44938 = G__44956;
chunk__44939 = G__44957;
count__44940 = G__44958;
i__44941 = G__44959;
continue;
}
} else {
return null;
}
}
break;
}
});
game_of_life.renderer.game_of_life_quill = (function game_of_life$renderer$game_of_life_quill(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,game_of_life.renderer.update_state))?(function() { 
var G__44960__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.renderer.update_state,args);
};
var G__44960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44961__i = 0, G__44961__a = new Array(arguments.length -  0);
while (G__44961__i < G__44961__a.length) {G__44961__a[G__44961__i] = arguments[G__44961__i + 0]; ++G__44961__i;}
  args = new cljs.core.IndexedSeq(G__44961__a,0,null);
} 
return G__44960__delegate.call(this,args);};
G__44960.cljs$lang$maxFixedArity = 0;
G__44960.cljs$lang$applyTo = (function (arglist__44962){
var args = cljs.core.seq(arglist__44962);
return G__44960__delegate(args);
});
G__44960.cljs$core$IFn$_invoke$arity$variadic = G__44960__delegate;
return G__44960;
})()
:game_of_life.renderer.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,game_of_life.renderer.setup))?(function() { 
var G__44963__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.renderer.setup,args);
};
var G__44963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44964__i = 0, G__44964__a = new Array(arguments.length -  0);
while (G__44964__i < G__44964__a.length) {G__44964__a[G__44964__i] = arguments[G__44964__i + 0]; ++G__44964__i;}
  args = new cljs.core.IndexedSeq(G__44964__a,0,null);
} 
return G__44963__delegate.call(this,args);};
G__44963.cljs$lang$maxFixedArity = 0;
G__44963.cljs$lang$applyTo = (function (arglist__44965){
var args = cljs.core.seq(arglist__44965);
return G__44963__delegate(args);
});
G__44963.cljs$core$IFn$_invoke$arity$variadic = G__44963__delegate;
return G__44963;
})()
:game_of_life.renderer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,game_of_life.renderer.draw_state))?(function() { 
var G__44966__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.renderer.draw_state,args);
};
var G__44966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44967__i = 0, G__44967__a = new Array(arguments.length -  0);
while (G__44967__i < G__44967__a.length) {G__44967__a[G__44967__i] = arguments[G__44967__i + 0]; ++G__44967__i;}
  args = new cljs.core.IndexedSeq(G__44967__a,0,null);
} 
return G__44966__delegate.call(this,args);};
G__44966.cljs$lang$maxFixedArity = 0;
G__44966.cljs$lang$applyTo = (function (arglist__44968){
var args = cljs.core.seq(arglist__44968);
return G__44966__delegate(args);
});
G__44966.cljs$core$IFn$_invoke$arity$variadic = G__44966__delegate;
return G__44966;
})()
:game_of_life.renderer.draw_state));
});
goog.exportSymbol('game_of_life.renderer.game_of_life_quill', game_of_life.renderer.game_of_life_quill);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__41507__41508__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__41507__41508__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),game_of_life.renderer.game_of_life_quill,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

//# sourceMappingURL=renderer.js.map?rel=1512749404333
