(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,r){e.exports=r("2f39")},"2f39":function(e,n,r){"use strict";r.r(n);var t=r("967e"),a=r.n(t),o=(r("96cf"),r("fa84")),u=r.n(o),c=(r("7d6e"),r("e54f"),r("62f2"),r("7e6d"),r("2b0e")),i=r("b05d"),p=r("4d5a"),s=r("9898"),f=r("f2cc"),l=r("c7a0"),d=r("2ea3"),b=r("65c6"),h=r("6ac5"),v=r("9c40"),w=r("0016"),Q=r("497d"),m=r("6ab5"),x=r("033f"),y=r("e208"),k=r("f09f"),g=r("a370"),C=r("4b7e"),I=r("07d0"),V=r("714f"),L=r("2a19");c["a"].use(i["a"],{config:{},components:{QLayout:p["a"],QHeader:s["a"],QDrawer:f["a"],QPageContainer:l["a"],QPage:d["a"],QToolbar:b["a"],QToolbarTitle:h["a"],QBtn:v["a"],QIcon:w["a"],QList:Q["a"],QItem:m["a"],QItemSection:x["a"],QItemLabel:y["a"],QCard:k["a"],QCardSection:g["a"],QCardActions:C["a"],QFooter:I["a"]},directives:{Ripple:V["a"]},plugins:{Notify:L["a"]}});var S=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},T=[],$={name:"App"},q=$,A=r("2877"),B=Object(A["a"])(q,S,T,!1,null,null,null),J=B.exports,P=r("2f62"),_=r("9a3e");c["a"].use(_["default"]),c["a"].use(P["a"]);var j=function(){var e=new P["a"].Store({modules:{},strict:!1});return e},D=r("8c4f"),E=[{path:"/",component:function(){return r.e("8f45d94c").then(r.bind(null,"f241"))},children:[{path:"",component:function(){return r.e("2d0e8be2").then(r.bind(null,"8b24"))}}]},{path:"/arvore",component:function(){return r.e("6f96e048").then(r.bind(null,"201a"))},children:[{name:"arvore",path:"arvore/:id",component:function(){return r.e("2d0dacf5").then(r.bind(null,"6cd6"))}}]}];E.push({path:"*",component:function(){return r.e("4b47640d").then(r.bind(null,"e51e"))}});var F=E;c["a"].use(D["a"]);var H=function(){var e=new D["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:F,mode:"hash",base:""});return e},N=function(){var e="function"===typeof j?j({Vue:c["a"]}):j,n="function"===typeof H?H({Vue:c["a"],store:e}):H;e.$router=n;var r={el:"#q-app",router:n,store:e,render:function(e){return e(J)}};return{app:r,store:e,router:n}},O=r("bc3a"),R=r.n(O),z=function(){var e=u()(a.a.mark(function e(n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=n.Vue,r.prototype.$axios=R.a;case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),G=N(),K=G.app,M=G.store,U=G.router;function W(){return X.apply(this,arguments)}function X(){return X=u()(a.a.mark(function e(){var n,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[z],r=0;case 2:if(!(r<n.length)){e.next=20;break}if("function"===typeof n[r]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,n[r]({app:K,router:U,store:M,Vue:c["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:r++,e.next=2;break;case 20:new c["a"](K);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),X.apply(this,arguments)}W()},"7e6d":function(e,n,r){}},[[0,"runtime","vendor"]]]);