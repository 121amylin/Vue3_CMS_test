- [教學影片](https://www.bilibili.com/video/BV1pq4y1c7oy/?p=4&spm_id_from=pageDriver)

---

### 開發規範

- [git commit 使用及规范](https://juejin.cn/post/6993889671394623501)
- [22 - Commitizen - 產生合法的 Commit 訊息](https://ithelp.ithome.com.tw/articles/10279064)
- [21 - Commitlint - Lint Commit 訊息](https://ithelp.ithome.com.tw/articles/10278664)
- [使用 husky + commitlint 規範 Commit Message 格式是否符合要求](https://www.rickjiang.dev/blog/validate-commit-message-using-commitlint-and-husky)
- [透過工具建立有規範的 git commit message 吧](https://pjchender.blogspot.com/2021/07/git-commit-message.html)
- [Commitlint 使用总结](https://blog.csdn.net/qq_38290251/article/details/111646491)

---
### vue3.2 新特性
1. template內不用跟元素
2. CSS可以直接綁定JS變量  
<!--\src\components\WelcomeItem.vue -->
```javascript
<script setup>
  const boxWidth="100px"
</script>
<template>
  <div class="box">
  </div>
</template>

<style lang="scss">
.box{
  width: v-bind(boxWidth);
  height: 100px;
  background-color: red;
  margin-bottom: 10px;
}
</style>
```

---

---

# CMC_03

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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
