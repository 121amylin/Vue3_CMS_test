import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // https://zxuqian.cn/vite-proxy-config/
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3001",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  // devServer
  server: {
    // https: false,
    // hotOnly: false,
    // proxy: {
    //   "/api": {
    //     // target: "https://lianghj.top:8888/api/private/v1/",
    //     target: "http://120.78.137.246:8888/api/private/v1/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //   },
    // },
    proxy: {
      "/path": {
        // target: "https://lianghj.top:8888/api/private/v1/",
        target: "https://i.maoyan.com",
        changeOrigin: true,
        // pathRewrite: {
        //   "^/path": "",
        // },
        rewrite: (path) => path.replace(/^\/path/),
      },

    },
  },
});
