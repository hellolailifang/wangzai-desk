// 离线缓存：在线时优先获取最新版；断网时回退到本地缓存
const CACHE = 'wz-desk-v20';
const FILES = ['./', './index.html', './icon.png', './manifest.webmanifest', './content.js', './en_practice.js',
  './assets/luffy.png', './assets/robin.png', './assets/zoro.png',
  './assets/ace.png', './assets/sanji.png', './assets/nami.png', './assets/chopper.png', './assets/usopp.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(hit => {
      if (hit) return hit;
      if (e.request.mode === 'navigate') return caches.match('./index.html');
      return Response.error();
    }))
  );
});
