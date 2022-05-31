"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{2703:function(r,e,t){t.r(e),t.d(e,{default:function(){return j}});var n=t(907);var a=t(181);function u(r){return function(r){if(Array.isArray(r))return(0,n.Z)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||(0,a.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=t(8683),o=t(5861),i=t(885),c=t(7757),f=t.n(c),l=t(2791),m=t(501),p="searchbar_searchbar__SZasF",v="searchbar_form__oFrip",d="searchbar_button__RJllU",h="searchbar_buttonLabel__CvMad",_="searchbar_input__ogUTl",b=t(184);function g(r){var e=r.onSubmit,t=(0,l.useState)(""),n=(0,i.Z)(t,2),a=n[0],u=n[1];return(0,b.jsx)("header",{className:p,children:(0,b.jsxs)("form",{className:v,onSubmit:function(r){r.preventDefault(),e(a),u("")},children:[(0,b.jsx)("button",{type:"submit",className:d,children:(0,b.jsx)("span",{className:h,children:"Search"})}),(0,b.jsx)("input",{name:"query",value:a,className:_,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(r){var e=r.target.value;u(e)},required:!0})]})})}var x=(0,l.memo)(g),Z=t(4486),y=t(1809);var w=function(){var r=(0,l.useState)({movies:[],isLoading:!1,error:null}),e=(0,i.Z)(r,2),t=e[0],n=e[1],a=(0,m.lr)(),c=(0,i.Z)(a,2),p=c[0],v=c[1],d=p.get("query");(0,l.useEffect)((function(){var r=function(){var r=(0,o.Z)(f().mark((function r(){var e,t;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(d){r.next=2;break}return r.abrupt("return");case 2:return n((function(r){return(0,s.Z)((0,s.Z)({},r),{},{isLoading:!0,error:null})})),r.next=5,(0,y.fO)(d);case 5:e=r.sent,t=e.results;try{n((function(r){return(0,s.Z)((0,s.Z)({},r),{},{isLoading:!1,movies:u(t)})}))}catch(w){n((function(e){return(0,s.Z)((0,s.Z)({},e),{},{isLoading:!1,error:w.message})}))}case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[d]);var h=(0,l.useCallback)((function(r){v({query:r}),n((function(r){return(0,s.Z)((0,s.Z)({},r),{},{movies:[]})}))}),[n,v]),_=t.movies,g=t.isLoading,w=t.error;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x,{onSubmit:h}),g&&(0,b.jsx)("p",{children:"Loading..."}),w&&(0,b.jsx)("p",{children:w}),Boolean(_.length)&&(0,b.jsx)(Z.Z,{items:_})]})};var j=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(w,{})})}},4486:function(r,e,t){t.d(e,{Z:function(){return m}});var n=t(8683),a=t(6871),u=t(501),s="moviesItem_item__tLNZn",o="moviesItem_image__8ayOv",i="moviesItem_title__wZtIN",c=t(184);var f=function(r){var e=r.original_name,t=r.original_title,n=r.id,a=r.poster_path,f=r.from,l=a?"https://image.tmdb.org/t/p/w500".concat(a):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",m=e||t;return(0,c.jsx)("li",{className:s,children:(0,c.jsxs)(u.rU,{state:{from:f},to:"/movies/".concat(n),children:[(0,c.jsx)("img",{src:l,alt:m,className:o}),(0,c.jsx)("p",{className:i,children:m})]})},n)},l="moviesList_list__NRykM";var m=function(r){var e=r.items,t=(0,a.TH)(),u=e.map((function(r){return(0,c.jsx)(f,(0,n.Z)((0,n.Z)({},r),{},{from:t}),r.id)}));return(0,c.jsx)("ul",{className:l,children:u})}},1809:function(r,e,t){t.d(e,{fO:function(){return f},t2:function(){return c},tx:function(){return m},wW:function(){return i},zv:function(){return l}});var n=t(5861),a=t(7757),u=t.n(a),s=t(4569),o=t.n(s)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"48e59f58a9185405f58e5b1089c8261f"}}),i=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/trending/movie/week");case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),c=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/movie/".concat(e),{params:{language:"en - US"}});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n,a,s=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r.next=3,o.get("/search/movie",{params:{page:t,language:"en - US",include_adult:!1,query:e}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/movie/".concat(e,"/credits"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/movie/".concat(e,"/reviews"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=703.24be2389.chunk.js.map