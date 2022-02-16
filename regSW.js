/*
 * @Author: web.王晓冬
 * @Date: 2021-10-17 08:49:48
 * @LastEditors: itab.link
 * @LastEditTime: 2021-12-31 17:01:40
 * @Description: file content
 */
// 判断是否是网页 然后引入PWA功能
if (location.protocol.includes('http')) {
    let manifest = document.createElement('link')
    manifest.rel = "manifest"
    manifest.href = "/manifest.json"
    document.getElementsByTagName('head')[0].appendChild(manifest);
    if ('serviceWorker' in navigator) {
        // load 事件完成之后才注册 service worker
        window.addEventListener('load', function () {
            // 注册 sw.js
            navigator.serviceWorker.register('/sw.js')
                .then(function (registration) {
                    // 注册成功
                    console.log('sw.js 注册成功', registration.scope);
                })
                .catch(function (err) {
                    // 注册失败:(
                    console.log('sw.js 注册失败 ', err);
                });
        });
    }
}
