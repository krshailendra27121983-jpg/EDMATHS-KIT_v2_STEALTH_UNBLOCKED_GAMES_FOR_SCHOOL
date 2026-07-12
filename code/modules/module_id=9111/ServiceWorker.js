const cacheName = "xelluf-Games-Space Waves-1.1.2-ms";
const contentToCache = [
    "Build/dae5c7bd2b15915f51ae4e56b8f5367d.loader.js",
    "Build/e00c2c9270a426875b72c5a93857f1df.framework.js.unityweb",
    "Build/2c9bc0098489d5e75341d59019263bfa.data.unityweb",
    "Build/08df7b704ea55604fb660e8664abbbb4.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
