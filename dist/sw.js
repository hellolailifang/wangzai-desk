// 离线缓存策略
// v93（2026-09-04）：HTML / JS（含 content.js）改为「网络优先」，手机端打开即见最新内容；
//   图片等静态资源仍走 stale-while-revalidate（省流量、秒开）。
//   旧版全部走 stale-while-revalidate，导致手机端每次打开先看旧缓存，内容"永远慢一天"。
const CACHE = 'wz-desk-v94';

// 需要「网络优先」的关键文件：内容/逻辑变了必须立刻生效
const NETWORK_FIRST_RE = /(\/$|\/(index\.html|content\.js|en_practice\.js|manifest\.webmanifest)$)/;

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

// 网络优先：给网络 TIMEOUT 毫秒的机会，超时或失败才回退缓存（离线可用）
// 若超时后网络又回来了，且内容与缓存不同 → 通知页面显示"有新内容，点此刷新"
function networkFirst(req, cache, timeout){
  return new Promise(resolve => {
    let settled = false;
    const finish = (res) => { if(settled) return; settled = true; clearTimeout(timer); resolve(res); };
    const timer = setTimeout(() => {
      if(settled) return;
      settled = true;                       // 先让用户看到缓存内容，保证秒开
      cache.match(req).then(c => resolve(c || fetch(req)));
    }, timeout);

    fetch(req).then(res => {
      if(!res || res.status !== 200){ finish(res); return; }
      // 与缓存比对：内容有变则提示页面刷新
      cache.match(req).then(cached => {
        if(cached){
          Promise.all([cached.clone().text(), res.clone().text()]).then(([a, b]) => {
            if(a !== b) notifyUpdate();
          }).catch(()=>{});
        }
        cache.put(req, res.clone());
        finish(res);
      });
    }).catch(() => {
      cache.match(req).then(c => finish(c || Response.error()));
    });
  });
}
function notifyUpdate(){
  self.clients.matchAll({includeUncontrolled:true}).forEach(c => c.postMessage({type:'WZ_CONTENT_UPDATED'}));
}

// stale-while-revalidate：静态资源（图片等）
function staleWhileRevalidate(req, cache){
  const networkFetch = fetch(req).then(res => {
    if(res && res.status === 200) cache.put(req, res.clone());
    return res;
  }).catch(() => null);
  return cache.match(req).then(cached => {
    if(cached){ networkFetch.catch(()=>{}); return cached; }
    return networkFetch.then(res => res || Response.error());
  });
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // 外部 API（如天气、RSS）：不缓存，离线时直接失败，让页面走降级 UI
  if (url.origin !== self.location.origin) {
    e.respondWith(fetch(e.request).catch(() => new Response('', {status: 503, statusText: 'offline'})));
    return;
  }

  e.respondWith(
    caches.open(CACHE).then(cache => {
      // 导航请求（打开页面）与内容/逻辑文件：网络优先，超时 3000ms 回退缓存
      if (e.request.mode === 'navigate' || NETWORK_FIRST_RE.test(url.pathname)) {
        return networkFirst(e.request, cache, 3000);
      }
      return staleWhileRevalidate(e.request, cache);
    })
  );
});
