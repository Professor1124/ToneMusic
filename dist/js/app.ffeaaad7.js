(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},s={app:0},a=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-013c5185":"c9efdd92","chunk-6b4b6b9e":"eb8e7e33","chunk-d2576b9c":"482744c1"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-013c5185":1,"chunk-6b4b6b9e":1,"chunk-d2576b9c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-013c5185":"80f9be13","chunk-6b4b6b9e":"211760ad","chunk-d2576b9c":"f2149107"}[t]+".css",s=o.p+i,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===i||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[t],p.parentNode.removeChild(p),n(a)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,n){i=s[t]=[e,n]}));e.push(i[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"058d":function(t,e,n){},"05d6":function(t,e,n){},1639:function(t,e,n){},1992:function(t,e,n){"use strict";n("e7d7")},"1fba":function(t,e,n){},2395:function(t,e,n){},"31c9":function(t,e,n){"use strict";n("9d2c")},"3a35":function(t,e,n){},"44de7":function(t,e,n){"use strict";n("4f47")},"48c1":function(t,e,n){"use strict";n("6c1a")},"49f7":function(t,e,n){"use strict";n("cdbc")},"4dc8":function(t,e,n){"use strict";n("7d2d")},"4dcb":function(t,e,n){},"4f47":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=(n("d3b7"),n("bc3a")),s=n.n(r),a=s.a.create({baseURL:"https://music.kele8.cn/"});a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),a.interceptors.response.use((function(t){return t.data?t.data.result?t.data.result:t.data:t.result?t.result:t}),(function(t){return Promise.reject(t)}));var c={install:function(t){Object.defineProperties(t.prototype,{axios:{get:function(){return a}},$axios:{get:function(){return a}}})}};i["default"].use(c);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("keep-alive",[n("router-view",{attrs:{currentMusicId:t.currentMusic?t.currentMusic.id:null,playMusicID:t.playMusicID},on:{play:t.play}})],1),t.currentMusic?n("play",{attrs:{currentMusic:t.currentMusic,playList:t.playList},on:{changePlaying:t.changePlaying}}):t._e(),n("top-nav")],1)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head-banner"},[i("div",{staticClass:"svg"},[i("img",{attrs:{src:n("9e26"),alt:""}}),i("span",[t._v("致一音乐")])]),i("span",{staticClass:"dowload-btn"},[t._v("下载APP")])])}],u=n("53ca"),d=(n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-box"},[n("div",{attrs:{id:"nav"}},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])])}),p=[],f={name:"Nav"},h=f,m=(n("c4da"),n("2877")),g=Object(m["a"])(h,d,p,!1,null,null,null),y=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("audio",{ref:"player",attrs:{autoplay:"",src:"https://music.163.com/song/media/outer/url?id="+t.currentMusic.id+".mp3"},on:{play:function(e){t.playState=!0},pause:function(e){t.playState=!1},timeupdate:t.timeupdate}}),n("section",{staticClass:"playbar"},[n("img",{style:{"animation-play-state":t.playState?"running":"paused"},attrs:{src:t.currentMusic.picUrl}}),n("h3",{on:{click:function(e){t.showfull=!0}}},[n("span",[t._v(" "+t._s(t.currentMusic.name)+" "),t._l(t.currentMusic.song.artists,(function(e){return n("b",{key:e.id},[t._v(" - "+t._s(e.name))])}))],2)]),n("i",{staticClass:"playbtn",on:{click:function(e){t.playState=!t.playState}}},[n("div",{staticClass:"progress"},[n("canvas",{ref:"canvas",attrs:{width:"40",height:"40"}}),n("div",{class:["icon",{play:!t.playState},{pause:t.playState}],attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"list",on:{click:function(e){t.showlist=!t.showlist}}}),t.showlist?n("div",{staticClass:"play-card"},[n("span",{staticClass:"close",on:{click:function(e){t.showlist=!1}}}),n("h2",[t._v(" 当前播放 "),n("span",[t._v("( "+t._s(t.playList.length)+" )")])]),t._l(t.playList,(function(e){return n("p",{key:e.id,class:{active:e.id==t.currentMusic.id},on:{click:function(n){return t.$emit("changePlaying",e)}}},[t._v(" "+t._s(e.name)+"-"+t._s(e.song.artists[0].name)+" ")])}))],2):t._e()]),n("div",{staticClass:"full-screen"},[t.showfull?n("full-screen",{attrs:{currentMusic:t.currentMusic,currentTime:t.currentTime,duration:t.duration,playState:t.playState,playList:t.playList},on:{hidefull:function(e){t.showfull=e},changeTime:t.changeTime,playpause:function(e){t.playState=!t.playState},changePlaying:function(e){return t.$emit("changePlaying",e)}}}):t._e()],1)])},b=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play-box"},[n("div",{staticClass:"svg-box"},[n("svg",{attrs:{width:"0",height:"0"}},[n("filter",{attrs:{id:"sketch"}},[n("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:".05 .5",numOctaves:"3",result:"noise1"}}),n("feColorMatrix",{attrs:{in:"noise1",type:"hueRotate",values:"0",result:"noise2"}},[n("animate",{attrs:{attributeName:"values",from:"0",to:"360",dur:"1.5s",repeatCount:"indefinite"}})]),n("feDisplacementMap",{attrs:{xChannelSelector:"R",yChannelSelector:"G",scale:"60",in:"SourceGraphic",in2:"noise2"}})],1)]),n("div",{staticClass:"svg-div"})]),n("div",{staticClass:"fullscreen"},[n("div",{staticClass:"wei-fullscreen"}),n("div",{staticClass:"record",style:{"animation-play-state":t.playState?"running":"paused"}}),n("img",{staticClass:"head-circle",style:{"animation-play-state":t.playState?"running":"paused"},attrs:{src:t.currentMusic.picUrl,alt:t.currentMusic.name}}),n("span",{staticClass:"back",on:{click:function(e){return t.$emit("hidefull",!1)}}}),n("div",{staticClass:"lyric"},[n("ul",{style:{transform:"translateY(-"+26*t.lyricIndex+"px)"}},t._l(t.lyricArray,(function(e,i){return n("li",{key:i,class:{active:i==t.lyricIndex}},[t._v(" "+t._s(e.lyric)+" ")])})),0)]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.timeprocess,expression:"timeprocess"}],staticClass:"process",attrs:{type:"range",max:"100",min:"0",value:"0"},domProps:{value:t.timeprocess},on:{__r:function(e){t.timeprocess=e.target.value}}}),n("div",{staticClass:"btn-box"},[n("span",{staticClass:"last",on:{click:function(e){return t.$emit("changePlaying","prev")}}}),n("span",{class:[{playing:!t.playState},{play:t.playState}],on:{click:function(e){return t.$emit("playpause")}}}),n("span",{staticClass:"next",on:{click:function(e){return t.$emit("changePlaying","next")}}})])])]),n("div",{staticClass:"shadow",style:{"background-image":"url("+t.currentMusic.picUrl+")","background-size":"auto 100%",filter:"blur(15px)"}})])},_=[],k=(n("a9e3"),n("ac1f"),n("1276"),n("d81d"),n("4d63"),n("25f0"),{props:{currentMusic:Object,currentTime:Number,duration:Number,playState:Boolean},data:function(){return{lyric:""}},created:function(){var t=this;this.axios.get("/lyric?id=".concat(this.currentMusic.id)).then((function(e){t.lyric=e.lrc.lyric}))},computed:{lyricArray:function(){if(""==this.lyric||this.lyric.length<1)return[];var t=this.lyric.split("\n");t.pop();var e=/\[(\d+):(\d+.\d+)\](.*)/,n=t.map((function(t){if(e.test(t))return{time:60*parseInt(RegExp.$1)+parseFloat(RegExp.$2),lyric:RegExp.$3}}));return n},lyricIndex:function(){if(this.lyricArray.length<1)return 0;for(var t in this.lyricArray){if(t>=this.lyricArray.length-2)return this.lyricArray.length-1;if(this.currentTime>this.lyricArray[t].time&&this.lyricArray[parseInt(t)+1].time>this.currentTime)return t}return 1},timeprocess:{get:function(){var t=this.currentTime/this.duration*100;return t},set:function(t){var e=t/100*this.duration;this.$emit("changeTime",e)}}}}),C=k,S=(n("a2d0"),Object(m["a"])(C,w,_,!1,null,"b72ad2dc",null)),x=S.exports,M={props:{currentMusic:{type:Object,default:null},playList:Array},components:{FullScreen:x},data:function(){return{playState:!0,currentTime:0,duration:0,showfull:!1,showlist:!1}},methods:{changeTime:function(t){this.$refs.player.currentTime=t},timeupdate:function(t){this.currentTime=t.target.currentTime,this.duration=t.target.duration},durationchange:function(t){this.duration=t.target.duration}},mounted:function(){},computed:{percentage:function(){return this.currentTime/this.duration}},watch:{playState:function(t){t?this.$refs.player.play():this.$refs.player.pause()},percentage:function(t){var e=this.$refs.canvas.getContext("2d");e.clearRect(0,0,40,40),e.beginPath(),e.arc(20,20,16,Math.PI/180*-90,Math.PI/180*(360*t-90)),e.strokeStyle="rgb(77,77,77)",e.lineWidth=2,e.stroke(),e.beginPath(),e.arc(20,20,16,Math.PI/180*(360*t-90),Math.PI/180*270),e.strokeStyle="gray",e.lineWidth=1,e.stroke()}}},A=M,E=(n("bd50"),Object(m["a"])(A,v,b,!1,null,"ad33fe2c",null)),O=E.exports,P={data:function(){return{banners:[],currentMusic:null,currentMusicId:0,playList:[],coming:!1}},components:{"top-nav":y,Play:O},methods:{play:function(t){t.al&&t.al.picUrl&&(t.picUrl=t.al.picUrl),this.currentMusic=t;var e=!1;this.playList.forEach((function(n){n.id==t.id&&(e=!0)})),e||this.playList.push(t)},changePlaying:function(t){var e=this,n=0;if(this.playList.forEach((function(t,i){t.id==e.currentMusic.id&&(n=i)})),"prev"==t)0==n?n=this.playList.length-1:n--;else if("next"==t)n==this.playList.length-1?n=0:n++;else if("object"==Object(u["a"])(t))return void(this.currentMusic=t);this.currentMusic=this.playList[n]}},computed:{playMusicID:function(){return this.currentMusic?this.currentMusic.id:0}}},I=P,$=(n("7c55"),Object(m["a"])(I,o,l,!1,null,null,null)),T=$.exports,L=(n("3ca3"),n("ddb0"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("banner",{staticClass:"f-banner",attrs:{imgs:t.imgbanners}}),n("list-title",{staticClass:"f-title"},[t._v("热门推荐")]),0==t.recommendSongs.length?n("loading"):t._e(),n("ul",{staticClass:"imgList",attrs:{"f-imgul":""}},t._l(t.recommendSongs,(function(t){return n("img-item",{key:t.id,attrs:{song:t,path:"/playlist"}})})),1),n("list-title",{staticClass:"f-title"},[t._v("前线金曲")]),0==t.recommendSongs.length?n("loading"):t._e(),n("ul",{staticClass:"home-songlist f-list"},[n("song-list",{attrs:{songlist:t.newsongs,shownum:!1,currentMusicId:t.currentMusicId,playMusicID:t.playMusicID},on:{play:function(e){return t.$emit("play",e)}}})],1),n("banner-sec",{staticClass:"banner",attrs:{imgs:t.imgbanners}}),n("list-title",[t._v("MV")]),0==t.recommendSongs.length?n("loading"):t._e(),t.mvopen?n("div",{staticClass:"video-t"},[t.mvopen?n("video",{staticClass:"video-iframe",attrs:{width:"300",controls:"",autoplay:"",src:t.mvurl}}):t._e(),n("span",{staticClass:"closemv",on:{click:t.closemv}})]):t._e(),n("ul",{staticClass:"imgList f-img"},t._l(t.recommendMv,(function(e){return n("mv-item",{key:e.id,attrs:{song:e},on:{openmv:t.openmv}})})),1),t._m(0)],1)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foot"},[i("img",{attrs:{src:n("fa54"),alt:""}}),i("div",{staticClass:"foot-logo"}),i("div",{staticClass:"foot-english"})])}],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ListTitle"},[t._t("default",(function(){return[t._v("默认音乐")]})),n("span",{staticClass:"span-icon"})],2)])},R=[],K={},U=K,W=(n("8a09"),Object(m["a"])(U,D,R,!1,null,"7eb549e1",null)),B=W.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"img-item",attrs:{tag:"li",to:t.path+"/"+t.song.id}},[n("img",{attrs:{src:t.song.picUrl}}),n("span",{staticClass:"icon"},[t._v(t._s(t._f("formatNum")(t.song.playCount,1)))]),n("h5",[t._v(t._s(t.song.name))])])},V=[],Q={props:{song:{type:Object,default:function(){return{}}},path:{type:String,default:""}}},F=Q,z=(n("ca2c"),Object(m["a"])(F,H,V,!1,null,"6dde07c9",null)),J=z.exports,Y=n("6fcc"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper",{staticClass:"swiper-box",attrs:{options:t.options}},t._l(t.imgs,(function(t){return n("swiper-slide",{key:t.pic},[n("div",{staticClass:"demo"},[n("img",{attrs:{src:t.pic}})])])})),1)],1)},X=[],Z=n("7212"),G=n.n(Z),tt=(n("a7a3"),{props:{imgs:Array},data:function(){return{options:{autoplay:{disableOnInteraction:!1},pagination:{el:".swiper-pagination"},effect:"flip"}}},components:{Swiper:Z["Swiper"],SwiperSlide:Z["SwiperSlide"]}}),et=tt,nt=(n("48c1"),Object(m["a"])(et,q,X,!1,null,"75f60267",null)),it=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper",{attrs:{options:t.options}},t._l(t.imgs,(function(t){return n("swiper-slide",{key:t.pic},[n("div",{staticClass:"demo"},[n("img",{attrs:{src:t.pic}})])])})),1)],1)},st=[],at={props:{imgs:Array},data:function(){return{options:{autoplay:!0,pagination:{el:".swiper-pagination"},effect:"coverflow",slidesPerview:3,centeredSlides:!0}}},components:{Swiper:Z["Swiper"],SwiperSlide:Z["SwiperSlide"]}},ct=at,ot=(n("9cab"),Object(m["a"])(ct,rt,st,!1,null,"24f8a89c",null)),lt=ot.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"img-item",attrs:{tag:"li",to:""}},[n("img",{attrs:{src:t.song.cover},on:{click:function(e){return t.$emit("openmv",!0,t.song.id)}}}),n("span",{staticClass:"icon"},[t._v(t._s(t._f("formatNum")(t.song.playCount,1)))]),n("h5",[t._v(t._s(t.song.name))])])},dt=[],pt={props:{song:{type:Object,default:function(){return{}}},path:{type:String,default:""}}},ft=pt,ht=(n("f94f"),Object(m["a"])(ft,ut,dt,!1,null,"744827c8",null)),mt=ht.exports,gt={name:"Home",components:{ListTitle:B,ImgItem:J,SongList:Y["a"],Banner:it,MvItem:mt,BannerSec:lt},props:{currentMusicId:{type:Number},playMusicID:Number},data:function(){return{recommendSongs:[],newsongs:[],imgbanners:[],recommendMv:[],picURL:null,mvopen:!1,mvurl:null,getmvid:null}},methods:{closemv:function(){this.mvopen=!1},openmv:function(t,e){var n=this;console.log(e),this.mvopen=t,this.getmvid=e,this.$axios.get("https://apis.netstart.cn/music/mv/url?id=".concat(this.getmvid)).then((function(t){n.mvurl=t.data.url}))}},created:function(){var t=this;this.$axios.get("/personalized?limit=6").then((function(e){t.recommendSongs=e})),this.$axios.get("/personalized/newsong").then((function(e){t.newsongs=e})),this.$axios.get("/banner?type=1").then((function(e){t.imgbanners=e.banners})),this.$axios.get("https://apis.netstart.cn/music/mv/first?limit=30").then((function(e){t.recommendMv=e.data}))}},yt=gt,vt=(n("44de7"),Object(m["a"])(yt,j,N,!1,null,"687f4d80",null)),bt=vt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("div",{staticClass:"search-box"},[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.keywords},on:{input:[function(e){e.target.composing||(t.keywords=e.target.value)},t.inputting],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.showdel,expression:"showdel"}],staticClass:"fa fa-times-circle",on:{click:t.clearWord}})]),n("hr"),n(t.showComponent,{tag:"component",attrs:{keywords:t.keywords,playMusicID:t.playMusicID,arid:t.arid},on:{play:function(e){return t.$emit("play",e)},changekeyword:t.changekeyword,aridget:t.aridget}})],1)},_t=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"words"},[n("div",{staticClass:"hotword"},t._l(t.hotWords,(function(e){return n("span",{key:e.searchWord,on:{click:function(n){return t.$emit("changekeyword",e.searchWord)}}},[t._v(" "+t._s(e.searchWord)+" ")])})),0)])},Ct=[],St=(n("fb6a"),{data:function(){return{hotWords:[]}},created:function(){var t=this;this.axios.get("/search/hot/detail").then((function(e){t.hotWords=e.data.slice(0,10)}))}}),xt=St,Mt=(n("c7d8"),Object(m["a"])(xt,kt,Ct,!1,null,"3aee2b54",null)),At=Mt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suggest"},[n("h3",{on:{click:function(e){return t.$emit("changekeyword",t.keywords)}}},[t._v('搜索"'+t._s(t.keywords)+'"')]),n("loading",{directives:[{name:"show",rawName:"v-show",value:t.isSearch,expression:"isSearch"}]}),n("hr"),n("ul",t._l(t.sugArray,(function(e){return n("li",{key:e.id,on:{click:function(n){return t.$emit("changekeyword",e.keyword)}}},[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),n("span",[t._v(t._s(e.keyword))]),n("hr")])})),0)],1)},Ot=[],Pt=n("2ef0"),It=n.n(Pt),$t={props:{keywords:String},data:function(){return{sugArray:[],isSearch:!1}},methods:{getSearch:It.a.debounce((function(t){var e=this;this.isSearch=!0,this.axios.get("/search/suggest?keywords=".concat(t,"&type=mobile")).then((function(t){e.isSearch=!1,t.allMatch&&(e.sugArray=t.allMatch)}))}),200)},created:function(){this.getSearch(this.keywords)},watch:{keywords:function(t){this.getSearch(t)}}},Tt=$t,Lt=(n("66e8"),Object(m["a"])(Tt,Et,Ot,!1,null,"ad8d416c",null)),jt=Lt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchresult"},[0==t.result.length?n("loading"):t._e(),t._m(0),null!=t.arid?n("art-sec",{attrs:{arid:t.arid}}):t._e(),n("song-list",{attrs:{keywords:t.keywords,songlist:t.result,playMusicID:t.playMusicID},on:{play:function(e){return t.$emit("play",e)}}}),n("span",{ref:"bottom",staticClass:"getmore",on:{click:t.getMore}},[t._v(t._s(t.isMore?"loading more":"no more"))]),0==t.result.length?n("loading"):t._e()],1)},Dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sr"},[t._v("搜索结果: "),n("div",{staticClass:"tg"})])}],Rt=n("1da1"),Kt=(n("96cf"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"art-sec"},[n("router-link",{staticClass:"art",attrs:{to:"/artist/"+t.arid,artist:t.artist,artistid:t.artistid}},[n("div",{staticClass:"left"},[n("img",{attrs:{src:t.artist.cover,alt:""}})]),n("div",{staticClass:"mid"},[t._v(" 歌手："),n("span",[t._v(t._s(t.artist.name))])]),n("div",{staticClass:"right"})])],1)}),Ut=[],Wt={props:{arid:Number},data:function(){return{artist:{},artistid:null}},created:function(){this.getres()},methods:{aridget:function(t){this.artistid=t},getres:function(){var t=this;return Object(Rt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=t.arid){e.next=4;break}console.log("id未传达"),e.next=7;break;case 4:if(null==t.arid){e.next=7;break}return e.next=7,t.axios.get("https://apis.netstart.cn/music/artist/detail?id=".concat(t.arid)).then((function(e){console.log(e.data),t.artist=e.data.artist,t.artistid=t.arid}));case 7:case"end":return e.stop()}}),e)})))()}}},Bt=Wt,Ht=(n("6946"),Object(m["a"])(Bt,Kt,Ut,!1,null,"f7366778",null)),Vt=Ht.exports,Qt={props:{keywords:String,playMusicID:Number},data:function(){return{result:[],page:1,limit:20,isloading:!1,isMore:!0,arid:null}},components:{SongList:Y["a"],ArtSec:Vt},created:function(){this.getResult()},mounted:function(){window.addEventListener("scroll",this.windowScroll)},beforeRouteEnter:function(t,e,n){n((function(t){window.addEventListener("scroll",t.windowScroll)}))},beforeDestroy:function(){window.removeEventListener("scroll",this.windowScroll)},beforeRouteLeave:function(t,e,n){window.removeEventListener("scroll",this.windowScroll),n()},methods:{aridup:function(){this.$emit("aridget",this.arid)},windowScroll:function(){window.scrollY+window.innerHeight>this.$refs.bottom.offsetTop&&this.getMore()},getResult:function(){var t=this;return Object(Rt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=(t.page-1)*t.limit,e.next=3,t.axios.get("https://api.kele8.cn/agent?url=http://47.115.51.185:8081/cloudsearch?keywords=".concat(t.keywords,"&limit=").concat(t.limit,"&offset=").concat(n)).then((function(e){if(0==e.songCount)return t.isloading=!1,void(t.isMore=!1);var n=e.songs.map((function(t){return t.song={privilege:t.privilege,artists:t.ar,album:t.al},t}));t.result=t.result.concat(n),t.isloading=!1,t.arid=n[0].ar[0].id,t.aridup()}));case 3:case"end":return e.stop()}}),e)})))()},getMore:function(){this.isloading=!0,this.page++,this.getResult()}}},Ft=Qt,zt=(n("49f7"),Object(m["a"])(Ft,Nt,Dt,!1,null,"9d65fdce",null)),Jt=zt.exports,Yt={name:"Search",props:{playMusicID:Number},data:function(){return{showComponent:At,keywords:"",showdel:!1,arid:null}},methods:{aridget:function(t){this.arid=t,this.aridpush()},aridpush:function(){this.$emit("aridget",this.arid)},clearWord:function(){this.keywords="",this.showdel=!1,this.showComponent=At},search:function(t){""!=t&&0!=t&&(this.showComponent=Jt)},changekeyword:function(t){this.showdel=!0,this.keywords=t,this.showComponent=Jt},inputting:function(){""==this.keywords?(this.showdel=!1,this.showComponent=At):(this.showdel=!0,this.showComponent=jt)}},components:{SearchHot:At,SearchSug:jt,SearchResult:Jt}},qt=Yt,Xt=(n("1992"),Object(m["a"])(qt,wt,_t,!1,null,"38e9e78c",null)),Zt=Xt.exports;i["default"].use(L["a"]);var Gt=[{path:"/",name:"Home",component:bt},{path:"/hot",name:"Hot",component:function(){return n.e("chunk-6b4b6b9e").then(n.bind(null,"0b70"))}},{path:"/search",name:"Search",component:Zt},{path:"/playlist/:listid",name:"playlist",props:!0,component:function(){return n.e("chunk-013c5185").then(n.bind(null,"fddd"))}},{path:"/artist/:artistid",name:"artist",props:!0,component:function(){return n.e("chunk-d2576b9c").then(n.bind(null,"6b01"))}}],te=new L["a"]({mode:"hash",base:"",routes:Gt}),ee=te;n("4de4"),n("b680");i["default"].filter("formatNum",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(t/1e4).toFixed(e)+"万"}));n("77ed"),n("4dcb"),n("1639"),n("fa6d");var ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ie=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("span"),n("span"),n("span"),n("span"),n("span")])}],re={},se=re,ae=(n("31c9"),Object(m["a"])(se,ne,ie,!1,null,"0129192b",null)),ce=ae.exports,oe=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},le=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"running"},[n("li"),n("li"),n("li"),n("li")])])}],ue={},de=ue,pe=(n("cc60"),Object(m["a"])(de,oe,le,!1,null,"91834aee",null)),fe=pe.exports;i["default"].use(G.a),i["default"].config.productionTip=!1,i["default"].component("loading",ce),i["default"].component("Running",fe),new i["default"]({router:ee,render:function(t){return t(T)}}).$mount("#app")},"5ca2":function(t,e,n){},6438:function(t,e,n){},"66e8":function(t,e,n){"use strict";n("058d")},6946:function(t,e,n){"use strict";n("5ca2")},"6c1a":function(t,e,n){},"6fcc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"song-list",style:{paddingLeft:t.shownum?"40px":"10px"}},t._l(t.songlist,(function(e,i){return n("li",{key:i,staticClass:"sli",on:{click:function(n){return t.$emit("play",e)}}},[t.shownum?n("div",{class:["shownum",{red:i<3}]},[t._v(" "+t._s(t._f("formatOrder")(i))+" ")]):t._e(),n("div",{staticClass:"left"},[n("h3",{domProps:{innerHTML:t._s(t.$options.filters.highKey(e.name,t.keywords))}}),n("span",[e.song.privilege?n("span",{class:{"sq-icon":999e3==e.song.privilege.maxbr}}):t._e(),t._l(e.song.artists,(function(i,r){return n("b",{key:i.id},[n("i",{domProps:{innerHTML:t._s(t.$options.filters.highKey(i.name,t.keywords))}}),t._v(" "+t._s(t._f("filterChar")(r,e.song.artists.length))+" ")])})),t._v(" - "),n("i",{domProps:{innerHTML:t._s(t.$options.filters.highKey(e.song.album.name,t.keywords))}})],2)]),n("i",{class:{"play-btn":t.playMusicID!=e.id}},[n("div",{class:{play:t.playMusicID!=e.id}})]),t.playMusicID==e.id?n("running",{staticClass:"running"}):t._e()],1)})),0)},r=[],s=(n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),{name:"SongList",props:{songlist:{type:Array,default:function(){return[]}},shownum:{type:Boolean,default:!1},keywords:{type:String,default:""},currentMusicId:{type:Number},playMusicID:{type:Number}},filters:{filterChar:function(t,e){return t<e-1?"/":""},formatOrder:function(t){return t++,t<10?"0"+t:t},highKey:function(t,e){var n=new RegExp("".concat(e),"g");return n.test(t)&&(t=t.replace(n,'<b style="color:#539df1">'.concat(e,"</b>"))),t}}}),a=s,c=(n("4dc8"),n("2877")),o=Object(c["a"])(a,i,r,!1,null,"3525594a",null);e["a"]=o.exports},"72f3":function(t,e,n){},"7c55":function(t,e,n){"use strict";n("2395")},"7d2d":function(t,e,n){},"8a09":function(t,e,n){"use strict";n("ad07")},"9cab":function(t,e,n){"use strict";n("6438")},"9d2c":function(t,e,n){},"9e26":function(t,e,n){t.exports=n.p+"img/logoZ.1ace86a7.png"},a2d0:function(t,e,n){"use strict";n("05d6")},ad07:function(t,e,n){},bd50:function(t,e,n){"use strict";n("f6c5")},c4da:function(t,e,n){"use strict";n("3a35")},c7d8:function(t,e,n){"use strict";n("72f3")},ca2c:function(t,e,n){"use strict";n("dace")},cc60:function(t,e,n){"use strict";n("1fba")},cdbc:function(t,e,n){},dace:function(t,e,n){},e7d7:function(t,e,n){},f6c5:function(t,e,n){},f94f:function(t,e,n){"use strict";n("ff38")},fa54:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA8BJREFUeF7tWkFy00AQnHG54Cr7A8RVka84PwgvILwAOMY+kLwg4QUJByvX8IKEFwRe4HC1UuXwAVscgZSWkoJSkUv29lizsYXtq1ujmVaPeme1TGv+4zWvnzYEbBRgYcALbvbYxEfM3KkSWYbMraHaYdTdvpyXt7UFGsFwxMRbVSo+y9UYcz3ptXdKEdAMQlPF4rOcx11/7kO2KmBDwJQCbIwuWy3TD8yWr1gBtoAbApbMwEYBwpYVt8CSH7D49raW/a8JMETfJl1/d43XAebzuNt+t7YExEyvon3/qyoBtp4SN6nCBd7JyONndyNm8h6WwYD8E6z4HbCKBDSD4TkRv33MZcz1VrTfurXxW3kCvLNwt2boKleooY/jnn9sK77yCkil//zP4PG0ash8n3Tb8OguVgDCqgYmneeZ3897iTX7N6fE5kNO+sbsRL32NZrDyhKQFJCQMOm2W0XFeP1hp8Y8yEufP4172wdo8VALNPrhLTO9kATVwhpDPyY9v3AzptEfDh7vUiVY87veiQ5bkeT+VgWkW2IUHzPxS0lgDWxMdBh1/dPpWM1+eExMR/m3vt3zi3KyElCmENSfUVySi3c22qqZu1E+L/uKb1YdTglA/RnFJUU0gvCKiR7W94bop/lV35JKPyPEGQGoP6O49OkH4UGN6CQnfeI3tp3feSp2QgDqzygukz7Hd4PcctfQl0nP3yvTpk4IQP0Zxf2T/gUTPRSbSp/rHWS5+6QKQP0Zxd1L/2avRuYiL/1ih5CqQV0BqD+jOIlDSIuHFkKSoKg/o7jk3hKHkOSq7gKoP6O4+xdfuUkPIUStBVB/RnESh0AKdboQQv0ZxaXSV5j0EGJKKyCRNOLPKC6VvtKk9yQENIIQ8mcUl3q+0qTnnADUn1HcvfT1Jj2nBKD+jOKy5a7mpOeUANSfUZyLSc8ZAag/F+KQrBQwameEpnNB/bkIp1CXKITKGaHpO6L+XIQTZa8Etn3IEa0DUH8uxCkVJA2jSgDqzyhOWgyCVz8hkt0U9WcUhxSzCMYJAegEh+IWKQy9xgkB6ASH4tBiFsGpE1Dk5XHBTmzRpLdIAdrXlH4JNvrhJTO9zhIzM3ZiV/VMsQIB+W9ws46dLPMb4jzVlCYA7amkVTim82V9SJ1FwpMRoN27i8ZDH1gW37oSlAZcNHGt66T5bgiwMS9l1BbP9f/SfMUKcF2Adnz1l6B2gq7jlSZgVf0dIQ45MmdtgWWeEUKKnIVJD00xH9gOT1gJKJNEFa7dEFCFp+Qyx7VXwF+g6RFut6aPdgAAAABJRU5ErkJggg=="},ff38:function(t,e,n){}});
//# sourceMappingURL=app.ffeaaad7.js.map