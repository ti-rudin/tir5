!function(){"use strict";const e=["client/index.cjs.5194ed66.js","client/index.cjs.c4e1f53a.js","client/index.f34fdabe.js","client/botstatuspage.28f39b16.js","client/client.914a07b0.js","client/instruction.cb9f934d.js","client/settings.e0731e0c.js","client/TextField.f4fdee67.js","client/about.41414096.js","client/index.255e1539.js","client/[slug].60c36e1f.js","client/newbot.80c08d21.js","client/index.esm.8d4977ff.js"].concat(["service-worker-index.html","favicon.png","global.css","global0.css","index.css","logo-192.png","logo-512.png","logo.png","logo.svg","manifest.json","tailwind.css","tailwind2.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1691359177502").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1691359177502"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1691359177502").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
