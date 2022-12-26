
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'


export default defineNuxtConfig({
  // vite配置放在這裡
  vite: {
    plugins: [
      ElementPlus({ useSource: true, defaultLocale: 'zh-cn' }),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: 'sass', ssr: true })], // 注意ssr配置参数
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass', ssr: true })],
      }),
    ],
    css: {
      // 自定義主題和解決樣式未導入問題
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/theme/element-plus/rest.scss" as *;`,
        },
      },
    },
  },
})