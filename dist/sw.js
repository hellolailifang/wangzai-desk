// 离线缓存：在线时优先获取最新版；断网时回退到本地缓存
// v78: 「3C跨境企业」升级为「AI搜索可见性企业」（GEO 高需求企业库，14 天 × 4 家）
const CACHE = 'wz-desk-v78';
const FILES = ['./', './index.html', './icon.png', './manifest.webmanifest', './content.js', './en_practice.js',
  './assets/home-bg.webp', './assets/home-avatar.webp', './assets/quick-icon.webp', './assets/luffy.webp', './assets/robin.png', './assets/zoro.webp', './assets/sabo.webp', './assets/garp.webp',
  './assets/ace.webp', './assets/sanji.webp', './assets/nami.png', './assets/chopper.webp', './assets/usopp.webp',
  './assets/face-fallback.svg', './assets/social_av.svg',
  './assets/route_0.svg', './assets/route_1.svg', './assets/route_2.svg', './assets/route_3.svg',
  './assets/route_4.svg', './assets/route_5.svg', './assets/route_6.svg', './assets/route_7.svg',
  './assets/route_8.svg', './assets/route_9.svg', './assets/route_10.svg', './assets/route_11.svg',
  './assets/route_12.svg', './assets/route_13.svg', './assets/route_ph.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // 外部 API（如天气）：不缓存，离线时直接失败，让页面走降级 UI
  if (url.origin !== self.location.origin) {
    e.respondWith(fetch(e.request).catch(() => new Response('', {status: 503, statusText: 'offline'})));
    return;
  }

  // 同源资源：stale-while-revalidate
  // - 有缓存时立即返回缓存，同时后台更新
  // - 无缓存时尝试网络，失败再回退
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const networkFetch = fetch(e.request).then(res => {
          if (res && res.status === 200) cache.put(e.request, res.clone());
          return res;
        }).catch(() => null);
        if (cached) {
          // 后台静默更新，UI 仍显示旧版
          networkFetch.catch(() => {});
          return cached;
        }
        return networkFetch.then(res => {
          if (res) return res;
          if (e.request.mode === 'navigate') return cache.match('./index.html');
          return Response.error();
        });
      })
    )
  );
});
