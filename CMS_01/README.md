## element plus
### 安裝
```javascript
// NPM
$ npm install element-plus --save
```

### 加載
```javascript
    // main.ts
    import { createApp } from 'vue'
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'
    import App from './App.vue'

    const app = createApp(App)

    app.use(ElementPlus)
    app.mount('#app')
```
------------------------------------------------------------------------------------------------------------------------

## SCSS
### 安裝 
```javascript
    npm install sass -d
```

### 延伸
- [Tailwind CSS + SCSS + Vite 環境建置](https://hackmd.io/@FortesHuang/S1I2iF7v5?fbclid=IwAR1UGrifLdh49JJCn2Ns0fEzfz-D-QDmPGXMr8yCqTbdUhsS7T-U69gX-hI)
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
# CMS_01

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
