/*
 * @Author: web.王晓冬
 * @Date: 2021-10-16 13:20:49
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-10-31 23:31:50
 * @Description: file content
 */
let dataCacheName = 'new-data-v1'
let cacheName = 'first-pwa-app-1'
let filesToCache = [
    '/',
    '/index.html',
]

self.addEventListener('install', function (e) {
    console.log('SW Install')
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('SW precaching')
            return cache.addAll(filesToCache)
        })
    )
    self.skipWaiting()
})

self.addEventListener('activate', function (e) {
    console.log('SW Activate')
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('SW Removing old cache', key)
                    return caches.delete(key)
                }
            }))
        })
    )
    return self.clients.claim()
})

self.addEventListener('install', function (evt) {
    console.log('sw fetch() 发送的请求', evt.request.url)
})