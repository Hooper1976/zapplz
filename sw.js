// Service Worker für Challenge Me (PWA)
const CACHE_NAME = 'challenge-me-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/login.html',
  '/ranking.html',
  '/create_challenge.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
