"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{521:function(n,e,t){t.d(e,{O:function(){return d}});var r,a,u,c=t(168),i=t(444),o=t(87),s=i.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 20px 0 0 20px;\n  gap: 10px;\n"]))),l=i.ZP.li(a||(a=(0,c.Z)(["\n  display: inline-block;\n  width: 100%;\n"]))),p=(0,i.ZP)(o.OL)(u||(u=(0,c.Z)(["\n  padding: 5px 16px;\n  color: black;\n\n  font-weight: bold;\n  border-radius: 4px;\n\n  &:hover,\n  &:focus {\n    color: #0000ff;\n  }\n"]))),f=t(184),d=function(n){var e=n.movies;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(s,{children:e.map((function(n){return(0,f.jsx)(l,{children:(0,f.jsx)(p,{to:"".concat(n.id),children:(0,f.jsx)("span",{children:n.title})})},n.id)}))})})}},278:function(n,e,t){t.r(e);var r=t(439),a=t(791),u=t(87),c=t(933),i=t(521),o=t(184);e.default=function(){var n=(0,a.useState)(""),e=(0,r.Z)(n,2),t=e[0],s=e[1],l=(0,a.useState)([]),p=(0,r.Z)(l,2),f=p[0],d=p[1],h=(0,u.lr)(),v=(0,r.Z)(h,2),x=v[0],m=v[1];(0,a.useEffect)((function(){var n=x.get("query");n&&(0,c.Ai)(n).then(d)}),[x]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Search"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),m({query:t})},children:[(0,o.jsx)("button",{type:"submit",children:"Search"}),(0,o.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(n){s(n.target.value)},value:t})]}),(0,o.jsx)(i.O,{movies:f})]})]})}},933:function(n,e,t){t.d(e,{Ai:function(){return s},Y5:function(){return l},wr:function(){return o}});var r=t(861),a=t(757),u=t.n(a),c=t(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3cf4425b2b0aaed10ba0111b9a0340c9",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=278.e945764c.chunk.js.map