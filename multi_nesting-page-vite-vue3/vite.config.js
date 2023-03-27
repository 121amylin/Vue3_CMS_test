import { fileURLToPath, URL } from 'node:url'
// import path from 'path'
import { resolve, dirname } from 'path'
// import serverOption from './serverOption'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const __dirname_C = dirname(__filename)
// https://vitejs.dev/config/
export default defineConfig({
  //server: serverOption,
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@@': resolve('src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        map: resolve('map/index.html'),
        admin: resolve('admin/index.html'),
        unit_A: resolve('unit_A/index.html'),
        unit_B: resolve('unit_B/index.html')
      }
    }
  }
})
