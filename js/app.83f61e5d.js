(function(e){function t(t){for(var a,i,c=t[0],o=t[1],l=t[2],d=0,h=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/geoquiz/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1186:function(e,t,n){},"18eb":function(e,t,n){e.exports=n.p+"img/wink.c423fc6d.png"},"276b":function(e,t,n){"use strict";var a=n("df7a"),r=n.n(a);r.a},"2f16":function(e,t,n){e.exports=n.p+"img/laugh.b9aca493.png"},3381:function(e,t,n){},"3fb7":function(e,t,n){"use strict";var a=n("d394"),r=n.n(a);r.a},"45bc":function(e,t,n){"use strict";var a=n("1186"),r=n.n(a);r.a},5193:function(e,t,n){e.exports=n.p+"img/winner.82d9605a.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Country quiz")]),a("img",{attrs:{src:n("7a0b"),alt:"man-icon"}}),a("router-view"),a("p",[e._v("Obiwan Pelosi @ Dev Challenge.io")])],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"form-fields",attrs:{id:"form"}},[n("h2",[e._v("Choose your knowledge strength")]),n("div",{attrs:{id:"wrapper"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.user.region,expression:"user.region"}],attrs:{name:"select",id:"selectbox"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"region",t.target.multiple?n:n[0])}}},e._l(e.game.regions,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0),n("button",{attrs:{id:"button"},on:{click:e.get}},[e._v("Start Quiz")])])])])},c=[],o=n("2f62"),l={data:function(){return{user:{region:"",page:1}}},methods:{get:function(){"All"==this.user.region?this.$store.dispatch("getAll",this.user):this.$store.dispatch("getGameData",this.user),this.$store.dispatch("setRegion",this.user)}},computed:Object(o["b"])({game:"game"})},u=l,d=(n("45bc"),n("2877")),h=Object(d["a"])(u,i,c,!1,null,null,null),g=h.exports,m={components:{home:g},data:function(){return{}},methods:{}},p=m,f=(n("c809"),Object(d["a"])(p,r,s,!1,null,"277da2b0",null)),v=f.exports,b=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-fields"},[n("p",{staticClass:"title"},[e._v(e._s(e.game.answer.capital)+" is the capital of")]),e._l(e.game.data,(function(t,a){return n("div",{key:t.id,class:{active:a==e.activeIndex,correct:a==e.game.answerIndex&&e.clicked},on:{"~click":function(t){return e.resolve(a)}}},[n("p",[e._v(e._s(t.name))])])})),n("button",{on:{click:e.scorer}},[e._v("Next")])],2)},x=[],w={data:function(){return{activeIndex:null,clicked:!1,user:{page:2,region:null}}},methods:{resolve:function(e){this.clicked||(this.clicked=!0,this.activeIndex=e)},scorer:function(){this.activeIndex==this.game.answerIndex&&this.$store.dispatch("increaseScore"),"All"==this.game.region?(this.$store.dispatch("clearGameData"),this.$store.dispatch("getAll",this.user)):(this.user.region=this.game.region,this.$store.dispatch("clearGameData"),this.$store.dispatch("getGameData",this.user))}},computed:Object(o["b"])({game:"game"})},k=w,y=(n("3fb7"),Object(d["a"])(k,_,x,!1,null,null,null)),$=y.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-fields"},[n("img",{style:e.flagStyle,attrs:{src:e.game.answer.flag,alt:"flag"}}),n("p",{staticClass:"title"},[e._v("This flag belongs to which country?")]),e._l(e.game.data,(function(t,a){return n("div",{key:t.id,class:{active:a==e.activeIndex,correct:a==e.game.answerIndex&&e.clicked},on:{"~click":function(t){return e.resolve(a)}}},[n("p",[e._v(e._s(t.name))])])})),n("button",{on:{click:e.scorer}},[e._v("Next")])],2)},O=[],j={data:function(){return{activeIndex:null,clicked:!1,user:{page:3,region:null},flagStyle:{width:"210px",height:"100px"}}},methods:{resolve:function(e){this.clicked||(this.clicked=!0,this.activeIndex=e)},scorer:function(){this.activeIndex==this.game.answerIndex&&this.$store.dispatch("increaseScore"),"All"==this.game.region?(this.$store.dispatch("clearGameData"),this.$store.dispatch("getAll",this.user)):(this.user.region=this.game.region,this.$store.dispatch("clearGameData"),this.$store.dispatch("getGameData",this.user))}},computed:Object(o["b"])({game:"game"})},D=j,G=(n("276b"),Object(d["a"])(D,I,O,!1,null,null,null)),C=G.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-fields"},[n("p",{staticClass:"title"},[e._v("Which of the countries has calling code "),e._l(e.game.answer.callingCodes,(function(t){return n("span",{key:t.id},[e._v("+"+e._s(t))])})),e._v(" and currency has the symbol: "),e._l(e.game.answer.currencies,(function(t){return n("span",{key:t.id},[e._v(e._s(t.symbol))])})),e._v(" ?")],2),e._l(e.game.data,(function(t,a){return n("div",{key:t.id,class:{active:a==e.activeIndex,correct:a==e.game.answerIndex&&e.clicked},on:{"~click":function(t){return e.resolve(a)}}},[n("p",[e._v(e._s(t.name))])])})),n("button",{on:{click:e.scorer}},[e._v("Next")])],2)},A=[],z={data:function(){return{activeIndex:null,clicked:!1,user:{page:4,region:null}}},methods:{resolve:function(e){this.clicked||(this.clicked=!0,this.activeIndex=e)},scorer:function(){this.activeIndex==this.game.answerIndex&&this.$store.dispatch("increaseScore"),"All"==this.game.region?(this.$store.dispatch("clearGameData"),this.$store.dispatch("getAll",this.user)):(this.user.region=this.game.region,this.$store.dispatch("clearGameData"),this.$store.dispatch("getGameData",this.user))}},computed:Object(o["b"])({game:"game"})},R=z,q=(n("d1ea"),Object(d["a"])(R,S,A,!1,null,null,null)),E=q.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-fields"},[n("p",{staticClass:"title"},[e._v(" Which of the countries is in the "+e._s(e.game.answer.subregion)+" subregion and is also in the "),e._l(e.game.answer.timezones,(function(t){return n("span",{key:t.id},[e._v(e._s(t))])})),e._v(" timezone ? ")],2),e._l(e.game.data,(function(t,a){return n("div",{key:t.id,class:{active:a==e.activeIndex,correct:a==e.game.answerIndex&&e.clicked},on:{"~click":function(t){return e.resolve(a)}}},[n("p",[e._v(e._s(t.name))])])})),n("button",{on:{click:e.scorer}},[e._v("Next")])],2)},M=[],T={data:function(){return{activeIndex:null,clicked:!1,user:{page:5,region:null}}},methods:{resolve:function(e){this.clicked||(this.clicked=!0,this.activeIndex=e)},scorer:function(){this.activeIndex==this.game.answerIndex&&this.$store.dispatch("increaseScore"),"All"==this.game.region?(this.$store.dispatch("clearGameData"),this.$store.dispatch("getAll",this.user)):(this.user.region=this.game.region,this.$store.dispatch("clearGameData"),this.$store.dispatch("getGameData",this.user))}},computed:Object(o["b"])({game:"game"})},N=T,J=(n("6d04"),Object(d["a"])(N,P,M,!1,null,null,null)),W=J.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-fields"},[n("img",{style:e.flagStyle,attrs:{src:e.game.answer.flag,alt:"flag"}}),n("p",{staticClass:"title"},[e._v("This flag belongs to which country?")]),e._l(e.game.data,(function(t,a){return n("div",{key:t.id,class:{active:a==e.activeIndex,correct:a==e.game.answerIndex&&e.clicked},on:{"~click":function(t){return e.resolve(a)}}},[n("p",[e._v(e._s(t.name))])])})),n("button",{on:{click:e.scorer}},[e._v("Next")])],2)},Y=[],B={data:function(){return{activeIndex:null,clicked:!1,flagStyle:{width:"200px",height:"100px"}}},methods:{resolve:function(e){this.clicked||(this.clicked=!0,this.activeIndex=e)},scorer:function(){this.activeIndex==this.game.answerIndex&&this.$store.dispatch("increaseScore"),this.$store.dispatch("getResults")}},computed:Object(o["b"])({game:"game"})},F=B,H=(n("bdea"),Object(d["a"])(F,Q,Y,!1,null,null,null)),K=H.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-fields",attrs:{id:"resultbox"}},[a("img",{attrs:{src:n("5193"),alt:"winner-image"}}),a("h1",[e._v("Results")]),a("p",[e._v(" You got "),a("span",{class:{red:e.game.score<3,green:e.game.score>=3}},[e._v(e._s(e.game.score))]),e._v(" correct answer(s) ")]),0==e.game.score?a("span",[a("img",{staticClass:"icon",attrs:{src:n("bad9"),alt:""}})]):e.game.score<3?a("span",[a("img",{staticClass:"icon",attrs:{src:n("2f16")}})]):a("span",[a("img",{staticClass:"icon",attrs:{src:n("18eb"),alt:""}})]),a("button",{attrs:{id:"replay"},on:{click:e.replay}},[e._v("Play again")])])},U=[],V={data:function(){return{}},methods:{replay:function(){this.$store.dispatch("replay")}},computed:Object(o["b"])({game:"game"})},X=V,Z=(n("9247"),Object(d["a"])(X,L,U,!1,null,null,null)),ee=Z.exports;a["a"].use(b["a"]);var te=[{path:"/",component:g},{path:"/quiz1",component:$},{path:"/quiz2",component:C},{path:"/quiz3",component:E},{path:"/quiz4",component:W},{path:"/quiz5",component:K},{path:"/results",component:ee}],ne=new b["a"]({mode:"history",base:"/geoquiz/",routes:te}),ae=ne,re=(n("fb6a"),n("d3b7"),n("96cf"),n("1da1"));a["a"].use(o["a"]);var se=new o["a"].Store({state:{game:{data:[],state:!1,region:null,regions:["Europe","Africa","Americas","Asia","Oceania","All"],answer:{},answerIndex:null,score:0}},mutations:{setGameData:function(e,t){var n=Math.floor(4*Math.random()+0);e.game.answer=t[n],e.game.answerIndex=n,e.game.data=t,console.log(e.game.region)},increaseScore:function(e){e.game.score+=1},setRegion:function(e,t){e.game.region=t.region},resetRegion:function(e){e.game.region=null,e.game.score=0},clearGameData:function(e){e.game.data=[],e.game.answer={},e.game.answerIndex=null}},actions:{getGameData:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.prev=1,n.next=4,fetch("https://restcountries.eu/rest/v2/region/".concat(t.region));case 4:return r=n.sent,n.next=7,r.json();case 7:s=n.sent,a("trimData",s),ae.push("/quiz".concat(t.page)),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](1),alert("There has been an error, try again :("),a("clearGameData"),ae.push("/");case 17:case"end":return n.stop()}}),n,null,[[1,12]])})))()},getAll:function(e,t){return Object(re["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.prev=1,n.next=4,fetch("https://restcountries.eu/rest/v2/all");case 4:return r=n.sent,n.next=7,r.json();case 7:s=n.sent,a("trimData",s),ae.push("/quiz".concat(t.page)),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](1),alert("There has been an error, try again :("),a("clearGameData"),ae.push("/");case 17:case"end":return n.stop()}}),n,null,[[1,12]])})))()},trimData:function(e,t){var n=e.commit,a=Math.floor(Math.random()*(t.length-4)+4),r=t.slice(a-4,a);n("setGameData",r)},setRegion:function(e,t){var n=e.commit;n("setRegion",t)},increaseScore:function(e){var t=e.commit;t("increaseScore")},clearGameData:function(e){var t=e.commit;t("clearGameData")},getResults:function(){ae.push("/results")},replay:function(e){var t=e.commit;t("clearGameData"),t("resetRegion"),ae.push("/")}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:ae,store:se,render:function(e){return e(v)}}).$mount("#app")},"6d04":function(e,t,n){"use strict";var a=n("6e30"),r=n.n(a);r.a},"6e30":function(e,t,n){},7642:function(e,t,n){},"7a0b":function(e,t,n){e.exports=n.p+"img/man.eae25da4.svg"},9247:function(e,t,n){"use strict";var a=n("3381"),r=n.n(a);r.a},b817:function(e,t,n){},bad9:function(e,t,n){e.exports=n.p+"img/shocked.7f3c5ddb.png"},bdea:function(e,t,n){"use strict";var a=n("7642"),r=n.n(a);r.a},c809:function(e,t,n){"use strict";var a=n("e7b1"),r=n.n(a);r.a},d1ea:function(e,t,n){"use strict";var a=n("b817"),r=n.n(a);r.a},d394:function(e,t,n){},df7a:function(e,t,n){},e7b1:function(e,t,n){}});
//# sourceMappingURL=app.83f61e5d.js.map