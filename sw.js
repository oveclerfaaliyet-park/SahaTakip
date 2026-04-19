const CACHE_NAME = 'anfa-v1';
const assets = [
  '/',
  '/index.html',
  '/filist.html',
  '/olay_bildir.html',
  '/personel_takip.html',
  '/park_doluluk.html',
  '/kolaj.html',
  '/anfa.gif',
  '/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
