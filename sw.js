// 离线缓存：在线时优先获取最新版；断网时回退到本地缓存
// v43: 恢复顶部「今日航海总览」横向卡片（今日航海计划），底部海贼王图全宽整图不裁剪
const CACHE = 'wz-desk-v43';
const FILES = ['./', './index.html', './icon.png', './manifest.webmanifest', './content.js', './en_practice.js',
  './assets/luffy.png', './assets/robin.png', './assets/zoro.png', './assets/sabo.png', './assets/garp.png',
  './assets/bottom_crew.jpg',
  './assets/ace.png', './assets/sanji.png', './assets/nami.png', './assets/chopper.png', './assets/usopp.png',
  './assets/face-fallback.svg',
  './assets/people/altman.jpg', './assets/people/bezos.jpg', './assets/people/buffett.jpg', './assets/people/cao.jpg',
  './assets/people/dong.jpg', './assets/people/huang.jpg', './assets/people/lei.jpg', './assets/people/liu.jpg',
  './assets/people/ma.jpg', './assets/people/musk.jpg', './assets/people/ren.jpg', './assets/people/wang.jpg',
  './assets/people/zhang.jpg', './assets/people/zhong.jpg',
  './assets/route_0.svg', './assets/route_1.svg', './assets/route_2.svg', './assets/route_3.svg',
  './assets/route_4.svg', './assets/route_5.svg', './assets/route_6.svg', './assets/route_7.svg',
  './assets/route_8.svg', './assets/route_9.svg', './assets/route_10.svg', './assets/route_11.svg',
  './assets/route_12.svg', './assets/route_13.svg', './assets/route_ph.svg',
  './assets/scene/route_00_0.jpg', './assets/scene/route_00_1.jpg', './assets/scene/route_00_2.jpg',
  './assets/scene/route_01_0.jpg', './assets/scene/route_01_1.jpg', './assets/scene/route_01_2.jpg',
  './assets/scene/route_02_0.jpg', './assets/scene/route_02_1.jpg', './assets/scene/route_02_2.jpg',
  './assets/scene/route_03_0.jpg', './assets/scene/route_03_1.jpg', './assets/scene/route_03_2.jpg',
  './assets/scene/route_04_0.jpg', './assets/scene/route_04_1.jpg', './assets/scene/route_04_2.jpg',
  './assets/scene/route_05_0.jpg', './assets/scene/route_05_1.jpg', './assets/scene/route_05_2.jpg',
  './assets/scene/route_06_0.jpg', './assets/scene/route_06_1.jpg', './assets/scene/route_06_2.jpg',
  './assets/scene/route_07_0.jpg', './assets/scene/route_07_1.jpg', './assets/scene/route_07_2.jpg',
  './assets/scene/route_08_0.jpg', './assets/scene/route_08_1.jpg', './assets/scene/route_08_2.jpg',
  './assets/scene/route_09_0.jpg', './assets/scene/route_09_1.jpg', './assets/scene/route_09_2.jpg',
  './assets/scene/route_10_0.jpg', './assets/scene/route_10_1.jpg', './assets/scene/route_10_2.jpg',
  './assets/scene/route_11_0.jpg', './assets/scene/route_11_1.jpg', './assets/scene/route_11_2.jpg',
  './assets/scene/route_12_0.jpg', './assets/scene/route_12_1.jpg', './assets/scene/route_12_2.jpg',
  './assets/scene/route_13_0.jpg', './assets/scene/route_13_1.jpg', './assets/scene/route_13_2.jpg'];

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
