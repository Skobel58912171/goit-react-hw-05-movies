"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{1521:function(n,e,r){r.d(e,{O:function(){return b}});var t,a,o,i=r(7689),c=r(168),u=r(6444),s=r(1087),l=u.ZP.ul(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 20px 0 0 20px;\n  gap: 10px;\n"]))),d=u.ZP.li(a||(a=(0,c.Z)(["\n  display: inline-block;\n  width: 100%;\n"]))),f=(0,u.ZP)(s.OL)(o||(o=(0,c.Z)(["\n  display: inline-block;\n  padding: 5px 16px;\n  color: black;\n  text-decoration: none;\n  border-radius: 4px;\n\n  :hover,\n  :focus {\n    color: #0000ff;\n  }\n"]))),p=r(184),b=function(n){var e=n.movies,r=(0,i.TH)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l,{children:e.map((function(n){return(0,p.jsx)(d,{children:(0,p.jsx)(f,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})})}},1137:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,o,i,c=r(5861),u=r(9439),s=r(7757),l=r.n(s),d=r(2791),f=r(1087),p=r(1933),b=r(1521),v=r(168),x=r(6444),h=x.ZP.div(t||(t=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px 0;\n  background-color: #3377ff;\n"]))),m=x.ZP.form(a||(a=(0,v.Z)(["\n  display: flex;\n  width: 450px;\n"]))),g=x.ZP.input(o||(o=(0,v.Z)(["\n  display: block;\n  outline: none;\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 20px;\n  padding: 0.375rem 0.75rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  border: 1px solid #bdbdbd;\n  border-left: 0;\n  border-radius: 0.25rem;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus,\n  &:hover {\n    border: 2px solid #0000ff;\n    outline: none;\n  }\n"]))),Z=x.ZP.button(i||(i=(0,v.Z)(["\n  display: inline-block;\n  position: relative;\n  color: #a9a9a9;\n  text-align: center;\n  vertical-align: baseline;\n  cursor: pointer;\n  user-select: none;\n  background-color: #fff;\n  border: 1px solid #bdbdbd;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 0;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus,\n  &:hover {\n    color: #0000ff;\n  }\n"]))),k=r(8820),y=r(184),w=function(n){var e=n.onSubmit,r=(0,d.useState)(""),t=(0,u.Z)(r,2),a=t[0],o=t[1];return(0,y.jsx)(h,{children:(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e(a)},children:[(0,y.jsx)(Z,{type:"submit",children:(0,y.jsx)(k.RB5,{})}),(0,y.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){o(n.target.value)},value:a})]})})},j=function(){var n=(0,d.useState)([]),e=(0,u.Z)(n,2),r=e[0],t=e[1],a=(0,f.lr)(),o=(0,u.Z)(a,2),i=o[0],s=o[1],v=i.get("query");(0,d.useEffect)((function(){v&&(0,c.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Ai)(v);case 3:e=n.sent,t(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(Error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[v]);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{children:[(0,y.jsx)(w,{onSubmit:function(n){s({query:n})}}),(0,y.jsx)(b.O,{movies:r})]})})}},1933:function(n,e,r){r.d(e,{Ai:function(){return s},Hx:function(){return f},Y5:function(){return l},wr:function(){return u},xc:function(){return d}});var t=r(5861),a=r(7757),o=r.n(a),i=r(1912);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="3cf4425b2b0aaed10ba0111b9a0340c9",u=function(){var n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=137.e87fde87.chunk.js.map