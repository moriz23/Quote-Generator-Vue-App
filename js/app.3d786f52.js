(function(t){function e(e){for(var o,a,u=e[0],i=e[1],f=e[2],d=0,s=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);b&&b(e);while(s.length)s.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Quote-Generator-Vue-App/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var b=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"297c":function(t,e,n){"use strict";n("a5fa")},"2b91":function(t,e,n){},4135:function(t,e,n){"use strict";n("a538")},4522:function(t,e,n){"use strict";n("afeb")},"4cab":function(t,e,n){"use strict";n("9391")},"50b9":function(t,e,n){"use strict";n("5276")},5276:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(t,e,n,r,c,a){var u=Object(o["k"])("the-header"),i=Object(o["k"])("quote-generator");return Object(o["g"])(),Object(o["d"])(o["b"],{name:"fade",appear:""},{default:Object(o["m"])((function(){return[Object(o["f"])("div",null,[Object(o["f"])(u,{title:"Quote Generator"}),Object(o["f"])(i)])]})),_:1})}var c=Object(o["n"])("data-v-440683d8"),a=c((function(t,e,n,r,c,a){return Object(o["g"])(),Object(o["d"])("header",null,[Object(o["f"])("h1",null,Object(o["l"])(n.title),1)])})),u={props:["title"]};n("4cab");u.render=a,u.__scopeId="data-v-440683d8";var i=u,f=Object(o["n"])("data-v-470a9028");Object(o["i"])("data-v-470a9028");var b={class:"quote-container",id:"quote-container"},d={class:"quote-text"},s=Object(o["f"])("i",{class:"fas fa-quote-left"},null,-1),l={class:"quote-author"},j={id:"author"};Object(o["h"])();var O=f((function(t,e,n,r,c,a){var u=Object(o["k"])("button-container"),i=Object(o["k"])("base-card"),O=Object(o["k"])("loader");return c.show?(Object(o["g"])(),Object(o["d"])(o["a"],{key:1,to:"body"},[Object(o["f"])(i,null,{default:f((function(){return[Object(o["f"])(O)]})),_:1})])):(Object(o["g"])(),Object(o["d"])(i,{key:0},{default:f((function(){return[Object(o["f"])(o["b"],{name:"fade",appear:""},{default:f((function(){return[Object(o["f"])("div",b,[Object(o["f"])("div",d,[s,Object(o["f"])("span",{id:"quote",class:a.addLongQuoteClass},Object(o["l"])(c.quote),3)]),Object(o["f"])("div",l,[Object(o["f"])("span",j,Object(o["l"])(c.quoteAuthor),1)]),Object(o["f"])(u,{onTwitterBtn:a.tweetQuote,onNewQuoteBtn:a.getQuote},null,8,["onTwitterBtn","onNewQuoteBtn"])])]})),_:1})]})),_:1}))})),p=(n("99af"),n("d3b7"),Object(o["n"])("data-v-5d2b9d71"));Object(o["i"])("data-v-5d2b9d71");var v={class:"button-container"},h=Object(o["f"])("i",{class:"fab fa-twitter"},null,-1),g=Object(o["e"])("New Quote");Object(o["h"])();var w=p((function(t,e,n,r,c,a){var u=Object(o["k"])("base-button");return Object(o["g"])(),Object(o["d"])("div",v,[Object(o["f"])(u,{class:"twitter-button",id:"twitter",title:"Tweet This!",onClick:e[1]||(e[1]=function(e){return t.$emit("twitter-btn")})},{default:p((function(){return[h]})),_:1}),Object(o["f"])(u,{id:"newQuote",onClick:e[2]||(e[2]=function(e){return t.$emit("new-quote-btn")})},{default:p((function(){return[g]})),_:1})])})),m={emits:["twitter-btn","new-quote-btn"]};n("4135");m.render=w,m.__scopeId="data-v-5d2b9d71";var _=m,y={components:{ButtonContainer:_},data:function(){return{quote:"",quoteAuthor:"",show:!1,longQuote:!1}},computed:{addLongQuoteClass:function(){return{"long-quote":this.longQuote}}},methods:{getQuote:function(){var t=this,e="https://type.fit/api/quotes/?method=getQuote&lang=en&format=json";this.show=!0,fetch(e).then((function(t){if(t.ok)return t.json()})).then((function(e){var n=Math.floor(Math.random()*e.length),o=e[n].author,r=e[n].text;t.quote=r,t.checkQuoteLength(),t.quoteAuthor=o||"Unknown",t.show=!1}))},tweetQuote:function(){var t=this.quote,e=this.quoteAuthor,n="https://twitter.com/intent/tweet?text=".concat(t," - ").concat(e);window.open(n,"_blank")},checkQuoteLength:function(){this.quote.length>120?this.longQuote=!0:this.longQuote=!1}},mounted:function(){this.getQuote()}};n("b8ab");y.render=O,y.__scopeId="data-v-470a9028";var Q=y,q={name:"App",components:{TheHeader:i,QuoteGenerator:Q}};n("4522");q.render=r;var k=q,x=Object(o["n"])("data-v-5aae7e83");Object(o["i"])("data-v-5aae7e83");var P={class:"base-component"};Object(o["h"])();var T=x((function(t,e,n,r,c,a){return Object(o["g"])(),Object(o["d"])("div",P,[Object(o["j"])(t.$slots,"default")])})),A={};n("50b9");A.render=T,A.__scopeId="data-v-5aae7e83";var I=A,M=Object(o["n"])("data-v-51c1dd84"),B=M((function(t,e){return Object(o["g"])(),Object(o["d"])("button",null,[Object(o["j"])(t.$slots,"default")])}));n("9456");const C={};C.render=B,C.__scopeId="data-v-51c1dd84";var S=C,L=Object(o["n"])("data-v-85e3bf90");Object(o["i"])("data-v-85e3bf90");var $={id:"loader"};Object(o["h"])();var G=L((function(t,e){return Object(o["g"])(),Object(o["d"])("div",$)}));n("297c");const N={};N.render=G,N.__scopeId="data-v-85e3bf90";var J=N,H=Object(o["c"])(k);H.component("base-card",I),H.component("base-button",S),H.component("loader",J),H.mount("#app")},9391:function(t,e,n){},9456:function(t,e,n){"use strict";n("f6ae")},a538:function(t,e,n){},a5fa:function(t,e,n){},afeb:function(t,e,n){},b8ab:function(t,e,n){"use strict";n("2b91")},f6ae:function(t,e,n){}});
//# sourceMappingURL=app.3d786f52.js.map