const CACHE_NAME = 'anfa-saha-v4';
const ASSETS = [
  '/SahaTakip/',
  '/SahaTakip/index.html',
  '/SahaTakip/app.js',
  '/SahaTakip/manifest.json',
  '/SahaTakip/logo.png',
  '/SahaTakip/anfa.gif',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// Yükleme ve Önbelleğe Alma
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Dosyalar önbelleğe alınıyor...');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Eski Önbelleği Temizleme ve Güncelleme
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Veri Çekme (İnternet yoksa veya hafıza silindiyse GitHub'dan kurtar)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/SahaTakip/index.html');
        }
      });
    })
  );
});
