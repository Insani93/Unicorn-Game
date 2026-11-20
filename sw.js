// Unicorn Magic World: offline shell. Change CACHE version to refresh installations.
const CACHE='unicorn-magic-v6-2-2-ipad-natural-20261120';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./meadow.webp','./lulu_happy.png','./lulu_excited.png','./lulu_curious.png','./lulu_thinking.png','./lulu_encouraging.png','./lulu_celebrating.png','./grape.svg','./rainbow_meadow_theme.mp3','./enchanted_garden_theme.mp3','./starry_sky_island_theme.mp3','./cloud_castle_theme.mp3','./moonlight_forest_theme.mp3','./rainbow_crystal_palace_theme.mp3'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('unicorn-magic-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}return res;}).catch(()=>caches.match('./index.html')));
 }else{
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(event.request,copy))}return res}).catch(()=>Response.error())));
 }
});
