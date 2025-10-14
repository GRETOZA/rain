const CACHE_NAME = 'rain-app-v1';
const urlsToCache = [
  '/rain/',
  '/rain/index.html',
  '/rain/icon-192.png',
  '/rain/icon-512.png'
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
