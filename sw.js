const CACHE_NAME = 'herizo-portfolio-v1';
const assets = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/translations.js',
  './image/herizo.png',
  './image/tech_bg.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
