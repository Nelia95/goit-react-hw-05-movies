"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{295:function(e,t,n){n.d(t,{Bt:function(){return d},Tg:function(){return i},Y5:function(){return v},h6:function(){return p},y:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(388);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="b54efa5af09c01fe28de18598482d789";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,n=t.data,r=n.results,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},155:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(689),a=n(87),c="MoviesList_movieList__8BnEE",s="MoviesList_movieLink__QlD4H",u="MoviesList_movieImg__bm-8+",i="MoviesList_movieTitle__CxO8p",o=n(184),p=function(e){var t=e.movies,n=(0,r.TH)();return(0,o.jsx)("ul",{className:c,children:t&&t.map((function(e){var t=e.id,r=e.img,c=e.title;return(0,o.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:n},className:s,children:[(0,o.jsx)("img",{src:r,alt:c,className:u}),(0,o.jsx)("h3",{className:i,children:c})]},t)}))})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(791),i=n(295),o=n(155),p="Home_title__L087v",f=n(184),v=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Tg)();case 3:t=e.sent,console.log(t),c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:p,children:"Trending Movies"}),(0,f.jsx)(o.Z,{movies:n})]})}}}]);
//# sourceMappingURL=936.bd526eed.chunk.js.map