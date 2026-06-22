const CACHE_NAME = "sipp-cache-v1";

const urlsToCache = [
  "/sipp-banyuurip/",
  "/sipp-banyuurip/index.html",
  "/sipp-banyuurip/icon.png",
  "/sipp-banyuurip/icon-192.png",
  "/sipp-banyuurip/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
