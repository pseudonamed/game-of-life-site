// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('game_of_life.core');
goog.require('game_of_life.renderer');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__52617__delegate = function (x){
if(cljs.core.truth_(game_of_life.core.on_js_reload)){
return cljs.core.apply.call(null,game_of_life.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'game-of-life.core/on-js-reload' is missing");
}
};
var G__52617 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__52618__i = 0, G__52618__a = new Array(arguments.length -  0);
while (G__52618__i < G__52618__a.length) {G__52618__a[G__52618__i] = arguments[G__52618__i + 0]; ++G__52618__i;}
  x = new cljs.core.IndexedSeq(G__52618__a,0,null);
} 
return G__52617__delegate.call(this,x);};
G__52617.cljs$lang$maxFixedArity = 0;
G__52617.cljs$lang$applyTo = (function (arglist__52619){
var x = cljs.core.seq(arglist__52619);
return G__52617__delegate(x);
});
G__52617.cljs$core$IFn$_invoke$arity$variadic = G__52617__delegate;
return G__52617;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1512749430792
