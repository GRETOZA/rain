const CACHE_NAME = 'rain-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', // ถ้ามี CSS แยก
  '/script.js'   // ถ้ามี JS แยก
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
