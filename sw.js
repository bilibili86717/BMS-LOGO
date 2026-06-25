/* ============================================
   BMS 商标设计方案 - Service Worker
   ============================================ */

const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `bms-logo-cache-${CACHE_VERSION}`;

// 需要缓存的静态资源
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Logo 图片缓存（01-29 为 .jpeg，30-100 为 .jpg）
const LOGO_IMAGES = [];
for (let i = 1; i <= 29; i++) {
  LOGO_IMAGES.push(`../logo_${String(i).padStart(2, '0')}_`);
}
for (let i = 30; i <= 100; i++) {
  LOGO_IMAGES.push(`../logo_${String(i).padStart(2, '0')}_`);
}

// 安装事件：预缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] 预缓存静态资源');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// 激活事件：清理旧版本缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] 删除旧缓存:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// 请求拦截：离线优先策略
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 只处理同源和 HTTP/HTTPS 请求
  if (!url.protocol.startsWith('http')) return;

  // 离线优先策略：先查缓存，没有则走网络
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // 缓存中没有，尝试网络请求
        return fetch(request)
          .then((networkResponse) => {
            // 检查是否是有效的响应
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            // 克隆响应并缓存
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                // 缓存 logo 图片和静态资源
                if (isCacheable(url)) {
                  cache.put(request, responseToCache);
                }
              });

            return networkResponse;
          })
          .catch(() => {
            // 网络请求失败，返回离线页面或占位图
            if (request.destination === 'image') {
              return new Response(
                generatePlaceholderSVG(),
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
            return new Response('离线模式，请检查网络连接', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// 判断 URL 是否值得缓存
function isCacheable(url) {
  const path = url.pathname;
  // 缓存 logo 图片
  if (path.includes('logo_')) return true;
  // 缓存静态资源
  if (path.endsWith('.html') || path.endsWith('.css') ||
      path.endsWith('.js') || path.endsWith('.json') ||
      path.endsWith('.png') || path.endsWith('.jpg') ||
      path.endsWith('.jpeg') || path.endsWith('.svg')) {
    return true;
  }
  return false;
}

// 生成占位 SVG
function generatePlaceholderSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect fill="#E8F5E9" width="200" height="200" rx="8"/>
    <text x="50%" y="45%" text-anchor="middle" dy=".3em" fill="#2E7D32" font-family="sans-serif" font-size="16" font-weight="bold">BMS</text>
    <text x="50%" y="60%" text-anchor="middle" dy=".3em" fill="#9E9E9E" font-family="sans-serif" font-size="11">图片加载中...</text>
  </svg>`;
}
