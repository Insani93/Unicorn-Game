// Unicorn Magic World: offline shell. Change CACHE version to refresh installations.
const CACHE='unicorn-magic-v2-20261118';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./meadow.webp','./lulu_happy.png','./lulu_excited.png','./lulu_curious.png','./lulu_thinking.png','./lulu_encouraging.png','./lulu_celebrating.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('unicorn-magic-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(res=>{
 if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(event.request,copy))}return res
 }).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
