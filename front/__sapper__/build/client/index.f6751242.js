import{S as t,i as e,s,e as l,k as r,l as a,c as n,b as o,o as c,d as h,p as f,f as i,h as u,j as p,w as d,K as g,n as m,D as v,E as x,F as E}from"./client.0f66f04d.js";function I(t,e,s){const l=t.slice();return l[2]=e[s],l}function b(t){let e,s,g,m,v,x=t[2].title+"";return{c(){e=l("li"),s=l("a"),g=r(x),v=a(),this.h()},l(t){e=n(t,"LI",{});var l=o(e);s=n(l,"A",{rel:!0,href:!0});var r=o(s);g=c(r,x),r.forEach(h),v=f(l),l.forEach(h),this.h()},h(){i(s,"rel","prefetch"),i(s,"href",m="blog/"+t[2].slug)},m(t,l){u(t,e,l),p(e,s),p(s,g),p(e,v)},p(t,e){1&e&&x!==(x=t[2].title+"")&&d(g,x),1&e&&m!==(m="blog/"+t[2].slug)&&i(s,"href",m)},d(t){t&&h(e)}}}function j(t){let e,s,d,x,E,j,k=t[0],q=[];for(let e=0;e<k.length;e+=1)q[e]=b(I(t,k,e));return{c(){e=a(),s=l("div"),d=l("h1"),x=r("Recent posts"),E=a(),j=l("ul");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){g('[data-svelte="svelte-1w74l05"]',document.head).forEach(h),e=f(t),s=n(t,"DIV",{class:!0});var l=o(s);d=n(l,"H1",{class:!0});var r=o(d);x=c(r,"Recent posts"),r.forEach(h),E=f(l),j=n(l,"UL",{class:!0});var a=o(j);for(let t=0;t<q.length;t+=1)q[t].l(a);a.forEach(h),l.forEach(h),this.h()},h(){document.title="Blog",i(d,"class","text-2xl text-center mb-4"),i(j,"class","text-center svelte-1hkq7r7"),i(s,"class","container mx-auto")},m(t,l){u(t,e,l),u(t,s,l),p(s,d),p(d,x),p(s,E),p(s,j);for(let t=0;t<q.length;t+=1)q[t].m(j,null)},p(t,[e]){if(1&e){let s;for(k=t[0],s=0;s<k.length;s+=1){const l=I(t,k,s);q[s]?q[s].p(l,e):(q[s]=b(l),q[s].c(),q[s].m(j,null))}for(;s<q.length;s+=1)q[s].d(1);q.length=k.length}},i:m,o:m,d(t){t&&h(e),t&&h(s),v(q,t)}}}function k({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,e,s){let l;x(t,E,t=>s(1,l=t)),clearInterval(l.timerId),clearInterval(l.timerIdlist);let{posts:r}=e;return t.$set=t=>{"posts"in t&&s(0,r=t.posts)},[r]}export default class extends t{constructor(t){super(),e(this,t,q,j,s,{posts:0})}}export{k as preload};
