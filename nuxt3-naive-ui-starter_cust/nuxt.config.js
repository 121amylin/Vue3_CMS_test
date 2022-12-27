import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr:false,//僅客戶端渲染
    // ssr:true,//通用渲染
    build: {
        transpile: ['vueuc'],   // 修復開發錯誤：找不到模塊“vueuc”
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()], // 自動註冊 `components` 目錄下的所有組件
            }),
        ],
        // @ts-expect-error：缺少 ssr 密鑰
        ssr: {
            noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
        },
    }
})
