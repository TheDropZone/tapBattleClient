(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var n=a("1356"),s=a.n(n);s.a},"0c25":function(t,e,a){"use strict";var n=a("b811"),s=a.n(n);s.a},1356:function(t,e,a){},"141e":function(t,e,a){},1583:function(t,e,a){},"1f64":function(t,e,a){"use strict";var n=a("a7a7"),s=a.n(n);s.a},"327e":function(t,e,a){"use strict";var n=a("60f5"),s=a.n(n);s.a},"60f5":function(t,e,a){},"612c":function(t,e,a){t.exports=a.p+"img/speaker.32327140.svg"},"74fb":function(t,e,a){},"888d":function(t,e,a){"use strict";var n=a("74fb"),s=a.n(n);s.a},"8f05":function(t,e,a){"use strict";var n=a("d7e8"),s=a.n(n);s.a},"8fb3":function(t,e,a){"use strict";var n=a("141e"),s=a.n(n);s.a},"9b7a":function(t,e,a){"use strict";var n=a("1583"),s=a.n(n);s.a},a550:function(t,e,a){t.exports=a.p+"img/radialStripes.de70f379.svg"},a7a7:function(t,e,a){},b811:function(t,e,a){},c1ff:function(t,e,a){"use strict";var n=a("d065"),s=a.n(n);s.a},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{overflow:"hidden"}},[a("transition",{staticClass:"Transition",attrs:{name:"fade"}},[a("router-view",{attrs:{name:"Main"}})],1)],1)},r=[],i=a("d225"),o=a("b0b4"),l=a("308d"),c=a("6bb5"),u=a("4e2b"),d=a("9ab4"),p=a("60a3"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{staticStyle:{"margin-bottom":"10px"},attrs:{xs12:""}},[a("v-btn",{on:{click:function(e){return t.startBattle()}}},[t._v("Start a Battle")])],1),null!=t.battle?a("v-flex",{attrs:{xs12:""}},[a("v-btn",{on:{click:function(e){return t.tap()}}},[t._v("TAP")])],1):t._e(),a("v-row",{staticStyle:{"margin-top":"25px"},attrs:{"no-gutters":""}},[a("v-col",[null!=t.battle&&null!=t.battle.player1?a("h1",[t._v("Player 1: "+t._s(t.battle.player1.username))]):t._e(),null!=t.battle&&null!=t.battle.player1?a("h1",[t._v("Taps: "+t._s(t.battle.player1Taps))]):t._e()]),a("v-col",[null!=t.battle&&null!=t.battle.player2?a("h1",[t._v("Player 2: "+t._s(t.battle.player2.username))]):t._e(),null!=t.battle&&null!=t.battle.player2?a("h1",[t._v("Taps: "+t._s(t.battle.player2Taps))]):t._e()])],1)],1)],1)},f=[],m=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"startBattle",value:function(){this.$store.commit("startBattle")}},{key:"tap",value:function(){this.$store.dispatch("battleTap")}},{key:"battle",get:function(){return null==this.$store.state.battle?null:this.$store.state.battle}}]),e}(n["a"]);m=Object(d["a"])([Object(p["a"])({components:{HelloWorld:$}})],m);var v=m,b=v,k=a("2877"),g=a("6544"),y=a.n(g),O=a("8336"),_=a("62ad"),C=a("a523"),w=a("0e8f"),j=a("a722"),L=a("0fd9"),S=Object(k["a"])(b,h,f,!1,null,null,null),$=S.exports;y()(S,{VBtn:O["a"],VCol:_["a"],VContainer:C["a"],VFlex:w["a"],VLayout:j["a"],VRow:L["a"]});var T=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.isInit=!1,t.isSignIn=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){}}]),e}(n["a"]);T=Object(d["a"])([Object(p["a"])({components:{HelloWorld:$}})],T);var x=T,B=x,E=(a("034f"),a("7496")),I=Object(k["a"])(B,s,r,!1,null,null,null),P=I.exports;y()(I,{VApp:E["a"]});a("7f7f");var V=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"Background",attrs:{fluid:""}},[a("Logo",{staticClass:"Header-Anim",style:{"margin-top":t.logoYOffset}}),a("transition",{attrs:{name:t.slide,mode:"out-in"}},[a("router-view",{attrs:{name:"Login"}})],1),a("v-snackbar",{attrs:{color:"#DD8E6D",timeout:6e3,vertical:""},model:{value:t.errorSnack,callback:function(e){t.errorSnack=e},expression:"errorSnack"}},[t._v("\n            Error logging in. Please try again\n            "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.errorSnack=!1}}},[t._v("\n                Close\n            ")])],1),a("div",{staticClass:"Sheet-Container",style:"transform: translateY("+t.userSheet+"px)"},[a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"User-Sheet",on:{click:t.sheetClick}},[a("div",{staticClass:"User-Name"},[t._v("\n                    "+t._s(t.username)+"\n                ")]),a("div",{staticClass:"User-Out"},[t._v("\n                    Sign Out\n                ")])])])],1)},R=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"Tap-Header"},[t._v("\n            TAP\n        ")]),a("div",{staticClass:"Battles-Header"},[t._v("\n            BATTLES\n        ")])])},D=[],N=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(n["a"]);N=Object(d["a"])([Object(p["a"])({components:{}})],N);var U=N,H=U,G=(a("1f64"),Object(k["a"])(H,M,D,!1,null,"886218d8",null)),F=G.exports;y()(G,{VContainer:C["a"]});var W=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.slide="slide-left",t.logoYOffset="25vh",t.errorSnack=!1,t.userSheet=75,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"sheetClick",value:function(){this.userSheet>=25?this.userSheet=0:(this.$store.commit("setUserAccess",null),this.$router.push({path:"/"}),this.userSheet=75)}},{key:"userChange",value:function(t,e){null!=this.$store.state.user&&(this.userSheet=25)}},{key:"onRouteChange",value:function(t,e){null!=t&&null!=e&&("SignIn"==t.name&&"SignInPending"==e.name?(this.slide="slide-right",this.errorSnack=!0):this.slide="slide-left","home"==t.name?(this.logoYOffset="15vh",this.userSheet=25):this.logoYOffset="25vh")}},{key:"username",get:function(){return null!=this.$store.state.user?this.$store.state.user.username:""}}]),e}(n["a"]);Object(d["a"])([Object(p["b"])("$store.state.user",{immediate:!1,deep:!0})],W.prototype,"userChange",null),Object(d["a"])([Object(p["b"])("$route",{immediate:!1,deep:!0})],W.prototype,"onRouteChange",null),W=Object(d["a"])([Object(p["a"])({components:{Logo:F}})],W);var J=W,Y=J,X=(a("8fb3"),a("2db4")),z=a("269a"),q=a.n(z),Z=a("5607"),K=Object(k["a"])(Y,A,R,!1,null,"482c92c1",null),Q=K.exports;y()(K,{VBtn:O["a"],VContainer:C["a"],VSnackbar:X["a"]}),q()(K,{Ripple:Z["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("div",{staticClass:"SignIn-Box"},[a("div",{staticClass:"SignIn-Subheader"},[t._v(" Sign In with")]),a("v-btn",{staticClass:"SignIn-btn",attrs:{depressed:"",color:"#DD8E6D"}},[a("v-icon",{staticClass:"SignIn-btn-icon"},[t._v("mdi-google")]),a("span",{staticClass:"SignIn-btn-text",on:{click:t.googleSignIn}},[t._v("Google")])],1)],1)])],1)},et=[],at=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"googleSignIn",value:function(){var t=this;this.$store.dispatch("signIn",this.$gAuth).then((function(e){console.log(e),"Registered"==e?t.$router.push({path:"/home"}):(t.$store.commit("setUserAccess",null),t.$router.push({path:"/"}))})).catch((function(e){console.log(e),"Registered"==e?t.$router.push({path:"/home"}):(t.$store.commit("setUserAccess",null),t.$router.push({path:"/"}))})),this.$router.push({path:"/SigningIn"})}}]),e}(n["a"]);at=Object(d["a"])([Object(p["a"])({components:{}})],at);var nt=at,st=nt,rt=(a("0c25"),a("132d")),it=Object(k["a"])(st,tt,et,!1,null,"2aa6df06",null),ot=it.exports;y()(it,{VBtn:O["a"],VContainer:C["a"],VIcon:rt["a"],VRow:L["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("div",{staticClass:"SignIn-Box"},[a("v-btn",{staticClass:"SignIn-btn",attrs:{depressed:"",color:"#DD8E6D"}},[a("v-icon",{staticClass:"SignIn-btn-icon"},[t._v("mdi-google")]),a("span",{staticClass:"SignIn-btn-text"},[t._v("Signing In")])],1),a("v-col",{staticStyle:{"justify-content":"space-around",display:"inline-flex","margin-top":"15px"}},[a("v-progress-circular",{attrs:{size:70,width:7,color:"#DD8E6D",indeterminate:""}})],1)],1)])],1)},ct=[],ut=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(n["a"]);ut=Object(d["a"])([Object(p["a"])({components:{}})],ut);var dt=ut,pt=dt,ht=(a("9b7a"),a("490a")),ft=Object(k["a"])(pt,lt,ct,!1,null,"5df44e04",null),mt=ft.exports;y()(ft,{VBtn:O["a"],VCol:_["a"],VContainer:C["a"],VIcon:rt["a"],VProgressCircular:ht["a"],VRow:L["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("div",{staticClass:"SignIn-Box",staticStyle:{"margin-top":"10vh"}},[a("v-btn",{staticClass:"SignIn-btn",attrs:{depressed:"",color:"#DD8E6D"}},[a("span",{staticClass:"SignIn-btn-text",on:{click:t.startBattle}},[t._v("Start a Battle")])]),a("v-btn",{staticClass:"SignIn-btn",attrs:{depressed:"",color:"#DD8E6D"}},[a("span",{staticClass:"SignIn-btn-text"},[t._v("View Profile")])])],1)])],1)},bt=[],kt=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"startBattle",value:function(){this.$store.commit("startBattle"),this.$router.push({path:"/loading/find"})}}]),e}(n["a"]);kt=Object(d["a"])([Object(p["a"])({components:{}})],kt);var gt=kt,yt=gt,Ot=(a("8f05"),Object(k["a"])(yt,vt,bt,!1,null,"02502cba",null)),_t=Ot.exports;y()(Ot,{VBtn:O["a"],VContainer:C["a"],VRow:L["a"]});var Ct,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"Background",attrs:{fluid:""}},[n("v-row",[n("v-col",{staticStyle:{"margin-top":"15vh",position:"relative"}},[n("v-img",{staticClass:"Speaker-Image",attrs:{contain:"",src:a("612c")}}),n("div",{staticClass:"Opp-Name-Container"},[n("div",{ref:"OpName",staticClass:"Opp-Name"},[t._v(t._s(t.opponentName))]),n("canvas",{staticClass:"Noise-Canvas",attrs:{id:"noiseCanvas"}})])],1)],1),n("v-row",[n("v-col",{staticStyle:{display:"inline-flex","justify-content":"center"}},[n("svg",{staticClass:"Radio-Slider",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 292 47"}},[n("g",{attrs:{id:"Group_35","data-name":"Group 35",transform:"translate(-34 -273)"}},[n("g",{attrs:{id:"Rectangle_36","data-name":"Rectangle 36",transform:"translate(34 273)",fill:"#adc4a0",stroke:"#425454","stroke-width":"3"}},[n("rect",{attrs:{width:"292",height:"47",rx:"10",stroke:"none"}}),n("rect",{attrs:{x:"1.5",y:"1.5",width:"289",height:"44",rx:"8.5",fill:"none"}})]),n("g",{attrs:{id:"Group_27","data-name":"Group 27",transform:"translate(1)"}},[n("line",{attrs:{id:"Line_3","data-name":"Line 3",y2:"8",transform:"translate(47.5 301.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-2","data-name":"Line 3",y2:"15",transform:"translate(53.5 294.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-3","data-name":"Line 3",y2:"27",transform:"translate(59.5 282.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-4","data-name":"Line 3",y2:"4",transform:"translate(65.5 305.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-5","data-name":"Line 3",y2:"8",transform:"translate(71.5 301.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-6","data-name":"Line 3",y2:"7",transform:"translate(77.5 302.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-7","data-name":"Line 3",y2:"12",transform:"translate(83.5 297.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-8","data-name":"Line 3",y2:"10",transform:"translate(89.5 299.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-9","data-name":"Line 3",y2:"25",transform:"translate(95.5 284.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-10","data-name":"Line 3",y2:"5",transform:"translate(101.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-11","data-name":"Line 3",y2:"3",transform:"translate(107.5 306.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-12","data-name":"Line 3",y2:"5",transform:"translate(113.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-13","data-name":"Line 3",y2:"7",transform:"translate(119.5 302.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-14","data-name":"Line 3",y2:"17",transform:"translate(125.5 292.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-15","data-name":"Line 3",y2:"4",transform:"translate(131.5 305.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-16","data-name":"Line 3",y2:"6",transform:"translate(137.5 303.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-17","data-name":"Line 3",y2:"5",transform:"translate(143.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-18","data-name":"Line 3",y2:"12",transform:"translate(149.5 297.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-19","data-name":"Line 3",y2:"25",transform:"translate(155.5 284.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-20","data-name":"Line 3",y2:"17",transform:"translate(161.5 292.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-21","data-name":"Line 3",y2:"5",transform:"translate(167.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-22","data-name":"Line 3",y2:"12",transform:"translate(173.5 297.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-23","data-name":"Line 3",y2:"8",transform:"translate(179.5 301.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-24","data-name":"Line 3",y2:"5",transform:"translate(185.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-25","data-name":"Line 3",y2:"15",transform:"translate(191.5 294.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-26","data-name":"Line 3",y2:"10",transform:"translate(197.5 299.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-27","data-name":"Line 3",y2:"7",transform:"translate(203.5 302.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-28","data-name":"Line 3",y2:"4",transform:"translate(209.5 305.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-29","data-name":"Line 3",y2:"12",transform:"translate(215.5 297.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-30","data-name":"Line 3",y2:"5",transform:"translate(221.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-31","data-name":"Line 3",y2:"3",transform:"translate(227.5 306.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-32","data-name":"Line 3",y2:"10",transform:"translate(233.5 299.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-33","data-name":"Line 3",y2:"12",transform:"translate(239.5 297.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-34","data-name":"Line 3",y2:"6",transform:"translate(245.5 303.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-35","data-name":"Line 3",y2:"22",transform:"translate(251.5 287.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-36","data-name":"Line 3",y2:"6",transform:"translate(257.5 303.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-37","data-name":"Line 3",y2:"11",transform:"translate(263.5 298.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-38","data-name":"Line 3",y2:"17",transform:"translate(269.5 292.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-39","data-name":"Line 3",y2:"5",transform:"translate(275.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-40","data-name":"Line 3",y2:"7",transform:"translate(281.5 302.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-41","data-name":"Line 3",y2:"10",transform:"translate(287.5 299.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-42","data-name":"Line 3",y2:"5",transform:"translate(293.5 304.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-43","data-name":"Line 3",y2:"7",transform:"translate(299.5 302.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-44","data-name":"Line 3",y2:"17",transform:"translate(305.5 292.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}}),n("line",{attrs:{id:"Line_3-45","data-name":"Line 3",y2:"6",transform:"translate(311.5 303.5)",fill:"none",stroke:"#87997d","stroke-linecap":"round","stroke-width":"3"}})]),n("line",{attrs:{id:"Line_4","data-name":"Line 4",y1:"20.5",transform:"translate("+t.sliderX.x+" 296.5)",fill:"none",stroke:"#5c4b51","stroke-width":"5"}})])])])],1),n("transition",{attrs:{name:t.slide,mode:"out-in"}},[n("router-view",{attrs:{name:"Content"}})],1),n("v-row",[n("v-col",{staticStyle:{"margin-top":"5vh",position:"relative"}},[n("div",{staticStyle:{position:"absolute",width:"100%",left:"0",top:"0",height:"100%",padding:"12px"}},[n("div",{staticClass:"Dial-Shadow"})]),n("v-img",{staticClass:"Dial-Image",style:t.getDialRotation,attrs:{contain:"",src:a("da07")}})],1)],1)],1)},jt=[],Lt=a("cffa");(function(t){t["CREATED"]="CREATED",t["SEARCHING"]="SEARCHING",t["STARTING"]="STARTING",t["COUNTDOWN"]="COUNTDOWN",t["BATTLE"]="BATTLE",t["COMPLETE"]="COMPLETE"})(Ct||(Ct={}));var St=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.slide="slide-left",t.state="Finding",t.sliderX={x:60},t.words=[],t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){this.moveSlider();var t=this;Lt["a"].ticker.addEventListener("tick",this.update);setInterval((function(){var e=["TAP","POP"],a={x:150*Math.random()+50,y:80*Math.random()+40,text:e[Math.round(Math.random()*(e.length-1))],scale:0,rotation:360*Math.random(),opac:1};t.words.push(a);Lt["b"].to(a,.4,{scale:2*Math.random()+1,ease:Elastic.easeOut.config(1,.3),onComplete:function(){Lt["b"].to(a,.2,{opac:0})}})}),300)}},{key:"beforeDestroy",value:function(){Lt["a"].ticker.removeEventListener("tick",this.update),console.log("Removed Tick Listener")}},{key:"update",value:function(){try{var t=document.getElementById("noiseCanvas"),e=t.getContext("2d");if(e.clearRect(0,0,t.width,t.height),"Finding"==this.state){for(var a=0;a<this.words.length;a++){this.words[a].opac;var n=15*this.words[a].scale;e.font=(0|n)+"px 'Wendy One'",e.fillStyle="rgba(242, 235, 191, "+this.words[a].opac+")",e.fillText(this.words[a].text,this.words[a].x,this.words[a].y)}this.words=this.words.filter((function(t){return 0!=t.opac}))}}catch(s){}}},{key:"onRouteChange",value:function(t,e){null!=t&&("loadingMatched"==t.name?this.state="Matched":this.state="Finding")}},{key:"stateChanged",value:function(){this.state}},{key:"battleStatus",value:function(){null!=this.$store.state.battle&&null!=this.$store.state.battle.battleStatus&&this.$store.state.battle.battleStatus==Ct.STARTING&&(this.$router.push({path:"/loading/matched"}),Lt["b"].from(this.$refs.OpName,1,{opacity:0,scale:3,ease:Bounce.easeOut})),null!=this.$store.state.battle&&null!=this.$store.state.battle.battleStatus&&this.$store.state.battle.battleStatus==Ct.COUNTDOWN&&this.$router.push({path:"/battle"})}},{key:"moveSlider",value:function(){if("Finding"==this.state)Lt["b"].to(this.sliderX,.75,{x:230*Math.random()+50,ease:Back.easeOut.config(1.7),onComplete:this.moveSlider})}},{key:"getDialRotation",get:function(){return"transform: rotate("+(this.sliderX.x+150)+"deg)"}},{key:"opponentName",get:function(){return"Matched"!=this.state?"":null!=this.$store.state.oponent?this.$store.state.oponent.username:void 0}}]),e}(n["a"]);Object(d["a"])([Object(p["b"])("$route",{immediate:!0,deep:!0})],St.prototype,"onRouteChange",null),Object(d["a"])([Object(p["b"])("state",{immediate:!0})],St.prototype,"stateChanged",null),Object(d["a"])([Object(p["b"])("$store.state.battle.battleStatus",{immediate:!0})],St.prototype,"battleStatus",null),St=Object(d["a"])([Object(p["a"])({components:{}})],St);var $t=St,Tt=$t,xt=(a("fb64"),a("adda")),Bt=Object(k["a"])(Tt,wt,jt,!1,null,"64f0ee0a",null),Et=Bt.exports;y()(Bt,{VCol:_["a"],VContainer:C["a"],VImg:xt["a"],VRow:L["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("div",{staticClass:"Header"},[t._v("Finding Oponent")])])],1)],1)},Pt=[],Vt=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(n["a"]);Vt=Object(d["a"])([Object(p["a"])({components:{}})],Vt);var At=Vt,Rt=At,Mt=(a("327e"),Object(k["a"])(Rt,It,Pt,!1,null,"59757461",null)),Dt=Mt.exports;y()(Mt,{VCol:_["a"],VContainer:C["a"],VRow:L["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("div",{staticClass:"Header"},[t._v("It's Battle Time!")])])],1)],1)},Ut=[],Ht=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(n["a"]);Ht=Object(d["a"])([Object(p["a"])({components:{}})],Ht);var Gt=Ht,Ft=Gt,Wt=(a("888d"),Object(k["a"])(Ft,Nt,Ut,!1,null,"58a92e49",null)),Jt=Wt.exports;y()(Wt,{VCol:_["a"],VContainer:C["a"],VRow:L["a"]});var Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"Background",attrs:{fluid:""},on:{click:t.battleClick}},[n("img",{staticClass:"Stripes",attrs:{src:a("a550")}}),n("div",{staticClass:"Timer-Container",staticStyle:{top:"0"}},[n("div",{staticClass:"Timer-Slider",style:{width:t.timer}})]),n("div",{staticClass:"Timer-Container",staticStyle:{bottom:"0"}},[n("div",{staticClass:"Timer-Slider",style:{width:t.timer}})]),n("div",{staticClass:"Player-Container",staticStyle:{top:"17px"}},[n("span",{staticClass:"Player"},[t._v(t._s(t.oponentTaps))]),n("span",{staticClass:"Player",staticStyle:{float:"right"}},[t._v(t._s(t.oponentUsername))])]),n("div",{staticClass:"Player-Container",staticStyle:{bottom:"17px"}},[n("span",{staticClass:"Player"},[t._v(t._s(t.username))]),n("span",{staticClass:"Player",staticStyle:{float:"right"}},[t._v(t._s(t.taps))])]),n("div",{staticClass:"Slider-Container"},[n("div",{staticClass:"Divider"}),n("div",{staticClass:"Slider-Adjustment",style:{height:t.sliderPercentage.val+"%"}},[n("div",{staticClass:"Slider"})])]),n("div",{staticClass:"Countdown-Container"},[n("div",{ref:"countdown",staticClass:"Countdown-Text"},[t._v(t._s(t.countdown))])])])},Xt=[],zt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.beatByTaps=40,t.sliderPercentage={val:50},t.timerVal={val:0},t.countdown="0",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"battleClick",value:function(){null!=this.$store.state.battle&&null!=this.$store.state.user&&this.$store.dispatch("battleTap")}},{key:"battleStatus",value:function(){null!=this.$store.state.battle&&null!=this.$store.state.battle.battleStatus&&this.$store.state.battle.battleStatus==Ct.COMPLETE&&this.$router.push({path:"/end"})}},{key:"animateTimer",value:function(){if(null!=this.$store.state.battle&&this.$store.state.battle.battleStatus==Ct.BATTLE){Lt["b"].to(this.timerVal,1,{val:this.battleTimer,ease:Power0.easeNone});if("1"==this.countdown){this.countdown="TAP!";Lt["b"].from(this.$refs.countdown,1,{opacity:0,scale:3,ease:Bounce.easeOut,onComplete:this.fadeCountdown})}}else if(null!=this.$store.state.battle&&this.$store.state.battle.battleStatus==Ct.COUNTDOWN){this.countdown=this.$store.state.battle.timer;Lt["b"].from(this.$refs.countdown,1,{opacity:0,scale:3,ease:Bounce.easeOut})}}},{key:"fadeCountdown",value:function(){console.log(this.$refs);Lt["b"].to(this.$refs.countdown,.5,{opacity:0,ease:Power3.easeOut})}},{key:"animateSlider",value:function(){Lt["b"].to(this.sliderPercentage,.3,{val:this.inner_sliderPercentage,ease:Power3.easeOut})}},{key:"battleTimer",get:function(){return null!=this.$store.state.battle?this.$store.state.battle.timer:0}},{key:"timer",get:function(){var t=0;if(-1!=this.$store.state.gameLength)t=(this.$store.state.gameLength-this.timerVal.val)/this.$store.state.gameLength*100;return t+"%"}},{key:"username",get:function(){return null!=this.$store.state.user?this.$store.state.user.username:"Loading.."}},{key:"oponentUsername",get:function(){return null!=this.$store.state.oponent?this.$store.state.oponent.username:"Loading.."}},{key:"oponentTaps",get:function(){return null!=this.$store.state.battle?this.$store.state.battle.player1.id==this.$store.state.user.id?this.$store.state.battle.player2Taps:this.$store.state.battle.player1Taps:0}},{key:"taps",get:function(){return null!=this.$store.state.battle?this.$store.state.battle.player1.id==this.$store.state.user.id?this.$store.state.battle.player1Taps:this.$store.state.battle.player2Taps:0}},{key:"tapsOff",get:function(){if(null!=this.$store.state.battle){var t=this.$store.state.battle.player1Taps,e=this.$store.state.battle.player2Taps;return this.$store.state.battle.player1.id==this.$store.state.user.id?t-e:e-t}return 0}},{key:"inner_sliderPercentage",get:function(){var t=(this.tapsOff+this.beatByTaps)/(2*this.beatByTaps)*100;return t}}]),e}(n["a"]);Object(d["a"])([Object(p["b"])("$store.state.battle.battleStatus",{immediate:!0})],zt.prototype,"battleStatus",null),Object(d["a"])([Object(p["b"])("battleTimer",{immediate:!0,deep:!0})],zt.prototype,"animateTimer",null),Object(d["a"])([Object(p["b"])("inner_sliderPercentage",{immediate:!0,deep:!0})],zt.prototype,"animateSlider",null),zt=Object(d["a"])([Object(p["a"])({components:{}})],zt);var qt=zt,Zt=qt,Kt=(a("c1ff"),Object(k["a"])(Zt,Yt,Xt,!1,null,"4f76c126",null)),Qt=Kt.exports;y()(Kt,{VContainer:C["a"]});var te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"Background",attrs:{fluid:""}},[a("div",{ref:"header",staticStyle:{transform:"rotate(-11deg)","margin-top":"7vh"}},[a("div",{staticClass:"Tap-Header"},[t._v("\n            You\n        ")]),a("div",{staticClass:"Tap-Header"},[t._v("\n            "+t._s(t.wonLost)+"\n        ")])]),a("v-row",{staticStyle:{"margin-top":"7vh"},attrs:{justify:"center"}},[a("div",{staticClass:"Score-Container"},[a("div",{staticClass:"Score-Text"},[t._v(t._s(t.oponentTaps))]),a("div",{staticClass:"Score-User",style:["Won!"==t.wonLost?{color:"#87997D"}:{color:"#F2EBBF"}]},[t._v(t._s(t.oponentUsername))]),a("div",{staticClass:"Score-Divider"}),a("div",{staticClass:"Score-Text"},[t._v(t._s(t.taps))]),a("div",{staticClass:"Score-User",style:["Won!"==t.wonLost?{color:"#F2EBBF"}:{color:"#87997D"}]},[t._v(t._s(t.username))]),a("div",{staticClass:"Score-Divider"}),a("div",{staticClass:"Score-Text"},[t._v(t._s(t.totalTaps))]),a("div",{staticClass:"Score-User"},[t._v("Total Taps")]),a("div",{staticClass:"Bar-Container"},t._l(t.bars,(function(t,e){return a("div",{key:e,staticClass:"Bar",style:{height:t.h+"px"}})})),0)]),a("div",{staticClass:"Button-Container"},[a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"Button-Home",on:{click:t.goHome}},[t._v("HOME")]),a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"Button-Replay",on:{click:t.startBattle}},[a("v-icon",{staticClass:"Replay-Icon"},[t._v("mdi-restart")])],1)])])],1)},ee=[],ae=(a("ac6a"),function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.bars=[],t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){for(var t=40,e=0;e<t;e++)this.bars.push({h:25*Math.random()+5})}},{key:"animateBars",value:function(){this.bars.forEach((function(t){Lt["b"].to(t,.5,{h:25*Math.random()+5,ease:Sine.easeInOut,delay:.5*Math.random()})}))}},{key:"onRouteChange",value:function(t,e){if(null!=t)if("endMatch"==t.name)var a=setInterval(this.animateBars,500);else clearInterval(a)}},{key:"mounted",value:function(){Lt["b"].from(this.$refs.header,1,{opacity:0,scale:4,ease:Bounce.easeOut,delay:.25})}},{key:"startBattle",value:function(){this.$store.commit("startBattle"),this.$router.push({path:"/loading/find"})}},{key:"goHome",value:function(){this.$router.push({path:"/home"})}},{key:"wonLost",get:function(){return null!=this.$store.state.battle&&this.$store.state.battle.winner.id==this.$store.state.user.id?"Won!":"Lost!"}},{key:"username",get:function(){return null!=this.$store.state.user?this.$store.state.user.username:"Loading.."}},{key:"oponentUsername",get:function(){return null!=this.$store.state.oponent?this.$store.state.oponent.username:"Loading.."}},{key:"oponentTaps",get:function(){return null!=this.$store.state.battle?this.$store.state.battle.player1.id==this.$store.state.user.id?this.$store.state.battle.player2Taps:this.$store.state.battle.player1Taps:0}},{key:"taps",get:function(){return null!=this.$store.state.battle?this.$store.state.battle.player1.id==this.$store.state.user.id?this.$store.state.battle.player1Taps:this.$store.state.battle.player2Taps:0}},{key:"totalTaps",get:function(){return this.taps+this.oponentTaps}}]),e}(n["a"]));Object(d["a"])([Object(p["b"])("$route",{immediate:!0,deep:!0})],ae.prototype,"onRouteChange",null),ae=Object(d["a"])([Object(p["a"])({components:{}})],ae);var ne=ae,se=ne,re=(a("dc73"),Object(k["a"])(se,te,ee,!1,null,"10abff79",null)),ie=re.exports;y()(re,{VContainer:C["a"],VIcon:rt["a"],VRow:L["a"]}),q()(re,{Ripple:Z["a"]}),n["a"].use(V["a"]);var oe=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"landing",components:{Main:Q},children:[{path:"/",name:"SignIn",components:{Main:Q,Login:ot}},{path:"/SigningIn",name:"SignInPending",components:{Main:Q,Login:mt}},{path:"/home",name:"home",components:{Main:Q,Login:_t}}]},{path:"/loading",name:"loading",components:{Main:Et},children:[{path:"/loading/find",name:"loadingFind",components:{Main:Et,Content:Dt}},{path:"/loading/matched",name:"loadingMatched",components:{Main:Et,Content:Jt}}]},{path:"/battle",name:"battle",components:{Main:Qt},children:[]},{path:"/end",name:"endMatch",components:{Main:ie}}]});oe.beforeEach((function(t,e,a){"/"===t.path?a():null==e.name?a("/"):a()}));var le=oe,ce=a("2f62"),ue=a("bc3a"),de=a.n(ue),pe=a("0edc"),he=a.n(pe);n["a"].use(ce["a"]);var fe=new ce["a"].Store({state:{socket:null,user:null,oponent:null,server:"://tapbattledeploy-env.vfkyw9rmik.us-east-1.elasticbeanstalk.com",battle:null,gameLength:-1,userAccess:null},mutations:{startBattle:function(t){if(null!=t.user&&null!=t.socket){var e={user:t.user,message:"",messageType:"BATTLE",battle:null};t.socket.push(JSON.stringify(e))}},setUserAccess:function(t,e){n["a"].set(t,"userAccess",e),null!=e?Oe.$cookies.set("Tap-Battle-Cookie-Account",e,"1d"):Oe.$cookies.remove("Tap-Battle-Cookie-Account")},setBattle:function(t,e){try{if(e.battleStatus==Ct.STARTING){var a=e.player1,s=e.player2;a.id==t.user.id?n["a"].set(t,"oponent",s):n["a"].set(t,"oponent",a)}else e.battleStatus==Ct.BATTLE?-1==t.gameLength&&n["a"].set(t,"gameLength",e.timer):e.battleStatus==Ct.COMPLETE&&n["a"].set(t,"gameLength",-1);n["a"].set(t,"battle",e)}catch(r){console.log(r)}},setSocket:function(t,e){n["a"].set(t,"socket",e)},setUser:function(t,e){n["a"].set(t,"user",e)}},actions:{battleTap:function(t){t.commit,t.dispatch;var e=t.state,a={user:e.user,message:"",messageType:"TAP",battle:e.battle};e.socket.push(JSON.stringify(a))},signIn:function(t,e){var a=t.commit,n=t.dispatch,s=t.state;return new Promise((function(t,r){var i=!1,o=Oe.$cookies.get("Tap-Battle-Cookie-Account");if(console.log(o),null!=o&&a("setUserAccess",o),null==s.userAccess)var l=setInterval((function(){i=e.isInit,e.isAuthorized,i&&(clearInterval(l),e.signIn().then((function(t){var e={token:t.Zi.access_token,username:t.w3.ig};a("setUserAccess",e),n("getUser").then((function(t){r(t)})).catch((function(t){r(t)}))})))}),1e3);else n("getUser").then((function(t){r(t)})).catch((function(t){r(t)}))}))},getUser:function(t){var e=t.commit,a=(t.dispatch,t.state);return new Promise((function(t,n){de.a.get("http"+a.server+"/user?username="+a.userAccess.username,{headers:{Authorization:"Bearer ".concat(a.userAccess.token)}}).then((function(t){return t.data})).catch((function(e){return console.log("Server Error"),t("Error"),Promise.reject()})).then((function(t){console.log(t),e("setUser",t),de.a.get("http"+a.server+"/user/battles",{headers:{Authorization:"Bearer ".concat(a.userAccess.token)}}).then((function(t){return t.data})).then((function(t){return console.log(t)}));var s,r=he.a,i={url:"ws"+a.server+"/battle/connect",contentType:"application/json",logLevel:"debug",enableProtocol:!0,readResponsesHeaders:!1,enableXDR:!0,transport:"websocket",fallbackTransport:"long-polling",onOpen:function(t){var e={user:a.user,message:"",messageType:"REGISTER",battle:null};console.log(e),s.push(JSON.stringify(e))},onMessage:function(t){var a=t.responseBody;console.log(a);try{var n=JSON.parse(a);console.log(n),e("setBattle",n)}catch(s){return void console.log("Error: ",a.data)}}};s=r.subscribe(i),e("setSocket",s),n("Registered")}))}))}}}),me=a("f309");n["a"].use(me["a"]);var ve=new me["a"]({icons:{iconfont:"mdi"}}),be=a("c9bf"),ke=(a("77ed"),a("2b27")),ge=a.n(ke);a.d(e,"Vu",(function(){return Oe})),n["a"].use(ge.a),n["a"].config.productionTip=!1;var ye={clientId:"43097138818-6lf1t46gvg8njgg8bq6vvep3gs9oobts.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"};n["a"].use(be["a"],ye);var Oe=new n["a"]({router:le,store:fe,vuetify:ve,render:function(t){return t(P)}});Oe.$mount("#app")},d065:function(t,e,a){},d7e8:function(t,e,a){},da07:function(t,e,a){t.exports=a.p+"img/dial.dc0a4e47.svg"},dc73:function(t,e,a){"use strict";var n=a("f1a8"),s=a.n(n);s.a},f1a8:function(t,e,a){},fb64:function(t,e,a){"use strict";var n=a("fcb8"),s=a.n(n);s.a},fcb8:function(t,e,a){}});
//# sourceMappingURL=app.6cc2ea7e.js.map