/*
 * @Author: www.itab.link
 * @Date: 2022-01-07 22:32:28
 * @LastEditors: www.itab.link
 * @LastEditTime: 2022-01-07 22:44:50
 * @Description: file content
 */
const baseConfig = JSON.parse(localStorage.getItem("baseConfig") || '{}')
const wallpaper = baseConfig.wallpaper || {}
if (wallpaper.type == 0 || wallpaper.type == 1) {
    document.body.style.backgroundImage = `url(${wallpaper.src})`
}
