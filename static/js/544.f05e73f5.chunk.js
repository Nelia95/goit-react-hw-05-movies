"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{295:function(e,t,n){n.d(t,{Bt:function(){return d},Tg:function(){return i},Y5:function(){return v},h6:function(){return p},y:function(){return h}});var r=n(861),a=n(757),u=n.n(a),c=n(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="b54efa5af09c01fe28de18598482d789";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,r=n.results,e.abrupt("return",{results:r});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",{results:a});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n,r,a,i,o,p,f;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,a=r.poster_path,i=r.title,o=r.overview,p=r.vote_average,f=r.genres,e.abrupt("return",{poster_path:a,title:i,overview:o,vote_average:p,genres:f});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,a=r.cast,e.abrupt("return",{cast:a});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",{results:a});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},368:function(e,t,n){var r=n(689),a=n(87),u=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:t&&t.map((function(e){var t=e.id,r=e.img,c=e.title;return(0,u.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,u.jsx)("img",{src:r,alt:c}),(0,u.jsx)("h3",{children:c})]},t)}))})}},544:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(295),o=n(368),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Tg)();case 3:t=e.sent,console.log(t),u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("title",{children:"Trending Movies"}),(0,p.jsx)(o.Z,{movies:n})]})}}}]);
//# sourceMappingURL=544.f05e73f5.chunk.js.map