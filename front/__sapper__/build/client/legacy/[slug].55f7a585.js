import{R as t,T as n,b as e,d as s,e as r,f as a,i as c,s as o,h as u,S as i,x as f,j as l,w as h,X as p,n as v,A as m,l as d,m as x,z as y,o as R,q as b,r as g,u as j,F as w,v as D}from"./client.cbce9775.js";function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=s(t);if(n){var c=s(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return r(this,e)}}function H(t){var n,e,s,r,a,c,o=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=f(),s=l("h1"),r=h(o),a=f(),c=l("div"),this.h()},l:function(t){p('[data-svelte="svelte-iu3vwn"]',document.head).forEach(v),e=m(t),s=d(t,"H1",{class:!0});var n=x(s);r=y(n,o),n.forEach(v),a=m(t),c=d(t,"DIV",{class:!0}),x(c).forEach(v),this.h()},h:function(){R(s,"class","text-2xl"),R(c,"class","content")},m:function(t,n){b(t,e,n),b(t,s,n),g(s,r),b(t,a,n),b(t,c,n),c.innerHTML=u},p:function(t,e){var s=j(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&w(r,o),1&s&&u!==(u=t[0].html+"")&&(c.innerHTML=u)},i:D,o:D,d:function(t){t&&v(e),t&&v(s),t&&v(a),t&&v(c)}}}function T(t){return k.apply(this,arguments)}function k(){return(k=t(n.mark((function t(e){var s,r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function q(t,n,e){var s=n.post;return t.$set=function(t){"post"in t&&e(0,s=t.post)},[s]}var L=function(t){e(s,i);var n=E(s);function s(t){var e;return a(this,s),e=n.call(this),c(u(e),t,q,H,o,{post:0}),e}return s}();export default L;export{T as preload};
