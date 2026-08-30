
const CACHE = 'cs-takip-offline-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req).then(res => {
        const copy = res.clone();
        // CDN kütüphaneleri de ilk çevrimiçi kullanımda cihaz önbelleğine alınır.
        if (req.url.startsWith('https://cdn.jsdelivr.net/')) {
          caches.open(CACHE).then(cache => cache.put(req, copy)).catch(()=>{});
        } else if (new URL(req.url).origin === self.location.origin) {
          caches.open(CACHE).then(cache => cache.put(req, copy)).catch(()=>{});
        }
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', {status: 504, statusText: 'Offline'});
      });
    })
  );
});
