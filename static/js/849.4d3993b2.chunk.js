"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[849],{7849:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(8683),a=n(5861),u=n(885),i=n(7757),s=n.n(i),c=n(2791),o=n(1809),f=n(4486),p=n(184),m=function(){var t=(0,c.useState)({items:[],isLoading:!1,error:null}),e=(0,u.Z)(t,2),n=e[0],i=e[1];(0,c.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i((function(t){return(0,r.Z)((0,r.Z)({},t),{},{isLoading:!0})})),t.next=3,(0,o.wW)();case 3:e=t.sent,n=e.results;try{i((function(t){return(0,r.Z)((0,r.Z)({},t),{},{items:n,isLoading:!1})}))}catch(v){i((function(e){return(0,r.Z)((0,r.Z)({},e),{},{error:v.message,isLoading:!1})}))}case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var m=n.items,l=n.isLoading,v=n.error;return(0,p.jsxs)(p.Fragment,{children:[Boolean(m.length)&&(0,p.jsx)(f.Z,{items:m}),l&&(0,p.jsx)("p",{children:"Loading..."}),v&&(0,p.jsx)("p",{children:v})]})},l="homePage_container__KQUO7",v=function(){return(0,p.jsx)("div",{className:l,children:(0,p.jsx)(m,{})})}},4486:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(8683),a=n(6871),u=n(501),i="moviesItem_item__tLNZn",s="moviesItem_image__8ayOv",c="moviesItem_title__wZtIN",o=n(184);var f=function(t){var e=t.original_name,n=t.original_title,r=t.id,a=t.poster_path,f=t.from,p=a?"https://image.tmdb.org/t/p/w500".concat(a):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",m=e||n;return(0,o.jsx)("li",{className:i,children:(0,o.jsxs)(u.rU,{state:{from:f},to:"/movies/".concat(r),children:[(0,o.jsx)("img",{src:p,alt:m,className:s}),(0,o.jsx)("p",{className:c,children:m})]})},r)},p="moviesList_list__NRykM";var m=function(t){var e=t.items,n=(0,a.TH)(),u=e.map((function(t){return(0,o.jsx)(f,(0,r.Z)((0,r.Z)({},t),{},{from:n}),t.id)}));return(0,o.jsx)("ul",{className:p,children:u})}},1809:function(t,e,n){n.d(e,{fO:function(){return f},t2:function(){return o},tx:function(){return m},wW:function(){return c},zv:function(){return p}});var r=n(5861),a=n(7757),u=n.n(a),i=n(4569),s=n.n(i)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"48e59f58a9185405f58e5b1089c8261f"}}),c=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/week");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e),{params:{language:"en - US"}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,t.next=3,s.get("/search/movie",{params:{page:n,language:"en - US",include_adult:!1,query:e}});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=849.4d3993b2.chunk.js.map