if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),f={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-9wMt_VOo.css",revision:null},{url:"assets/index-EcCK4G7t.js",revision:null},{url:"index.html",revision:"8afcebe603bf2cff7653de18afb65114"},{url:"registerSW.js",revision:"09991b870f698910202e27e0efcaa098"},{url:"pwa-64x64.png",revision:"9611a568d344d60b9f680c879953bdfe"},{url:"pwa-144x144.png",revision:"dae5f3d5d35396e6e3c04e8ef6e70cb6"},{url:"pwa-192x192.png",revision:"fd3c1b09b08fc9d2ab0462217f8b5a4c"},{url:"pwa-512x512.png",revision:"5232d26eb5af42b3d1b6d50e29606cbf"},{url:"maskable-icon-512x512.png",revision:"1a60317e2b0b93f3a8a12969e9c7dc57"},{url:"manifest.webmanifest",revision:"4726b7081ce2dfb1d4297e90ffdecd8b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
