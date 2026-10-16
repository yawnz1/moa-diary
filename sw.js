// ===== 📶 MOA Diary：沒網路也能打開 =====
// 這個檔案會在背景幫 App 把需要的檔案存一份在手機裡。
// 有網路：先抓最新版（順便更新手機裡那份）；沒網路：用手機裡存的那份。

const CACHE_NAME = "moa-diary-v1";

// 打開 App 一定要有的檔案（包括從網路載入的字體、圖示、存資料的工具）
const FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js",
    "https://cdn.jsdelivr.net/npm/pixelarticons@2.4.2/fonts/pixelart-icons-font.css",
    "https://cdn.jsdelivr.net/npm/pixelarticons@2.4.2/fonts/pixelart-icons-font.woff2?t=1786889958069",
    "https://cdn.jsdelivr.net/gh/ACh-K/Cubic-11@main/fonts/web/Cubic_11.woff2",
];

// 第一次安裝：把上面的檔案都存起來（某一個抓不到也沒關係，其他的照存）
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return Promise.all(FILES.map(function (url) {
                return cache.add(url).catch(function () {});
            }));
        })
    );
    self.skipWaiting();   // 不用等，馬上開始用新的 sw.js
});

// 換新版本時：把舊的存檔刪掉
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (names) {
            return Promise.all(names.map(function (name) {
                if (name !== CACHE_NAME) return caches.delete(name);
            }));
        })
    );
    self.clients.claim();
});

// App 每次要抓檔案時
self.addEventListener("fetch", function (event) {
    const request = event.request;
    if (request.method !== "GET") return;
    if (request.url.includes("currency-api")) return;   // 匯率：一定要抓最新的，沒網路就讓 App 用上次存的

    const sameSite = new URL(request.url).origin === self.location.origin;

    if (sameSite) {
        // 我們自己的檔案（index.html、app.js…）：先上網抓最新版，抓不到才用手機裡的
        event.respondWith(
            fetch(request).then(function (response) {
                const copy = response.clone();
                caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
                return response;
            }).catch(function () {
                return caches.match(request, { ignoreSearch: true }).then(function (saved) {
                    return saved || caches.match("./index.html");
                });
            })
        );
    } else {
        // 字體、圖示這些不太會變的：先用手機裡的，沒有才上網抓（抓到也存起來）
        event.respondWith(
            caches.match(request).then(function (saved) {
                return saved || fetch(request).then(function (response) {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
                    return response;
                });
            })
        );
    }
});
