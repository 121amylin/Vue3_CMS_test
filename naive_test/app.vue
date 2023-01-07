<script setup>
import { darkTheme } from "naive-ui";
// import { NConfigProvider } from 'naive-ui'
/**
 * https://www.naiveui.com/zh-CN/os-theme/docs/customize-theme
 * https://www.naiveui.com/zh-CN/os-theme
  * js 文件下使用这个做类型提示
  * @type import('naive-ui').GlobalThemeOverrides
  */
const themeOverrides = {
  common: {
    primaryColor: '#FF0000',
    successColor: "red",
    lineHeight: 2,
    fontSizeMedium: '20px'
  },
  Button: {
    textColor: 'red',
    fontSizeMedium: '20px'
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#FF0000'
      }
    }
  }
  // ...
}
const theme = ref(null)
</script>
<template>
  <div class="wapper">
    <header class="header">
      <div class="container">
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/API">API</NuxtLink>
        <NuxtLink to="/Avatar">Avatar</NuxtLink>
        <NuxtLink to="/AssetsTest">Assets Test</NuxtLink>
        <NuxtLink to="/AutoComplete">Auto Complete</NuxtLink>
        <NuxtLink to="/CustButton">cust Button</NuxtLink>
        <NuxtLink to="/CustButton2">cust Button2</NuxtLink>
        <NuxtLink to="/Collapse">Collapse</NuxtLink>
        <NuxtLink to="/Carousel">Carousel </NuxtLink>
        <NuxtLink to="/ColorPicker">Color Picker </NuxtLink>
        <NuxtLink to="/Checkbox">Checkbox </NuxtLink>
        <NuxtLink to="/Dropdown">Dropdown</NuxtLink>
        <NuxtLink to="/DropdownIcon">DropdownIcon</NuxtLink>
        <NuxtLink to="/DropdownBatch">DropdownBatch</NuxtLink>
        <NuxtLink to="/DropdownContent">DropdownContent</NuxtLink>
        <NuxtLink to="/DropdownTooltip">DropdownTooltip</NuxtLink>
        <NuxtLink to="/Message">Message</NuxtLink>
        <NuxtLink to="/Other">Other</NuxtLink>
        <NuxtLink to="/PageHeader">Page Header</NuxtLink>
        <NuxtLink to="/Router">Router</NuxtLink>
        <NuxtLink to="/Radio">Radio </NuxtLink>
        <NuxtLink to="/Rate">Rate </NuxtLink>
        <NuxtLink to="/Switch">Switch</NuxtLink>
        <NuxtLink to="/Table">Table</NuxtLink>
        <NuxtLink to="/Tag">Tag</NuxtLink>
        <NuxtLink to="/Typography">Typography</NuxtLink>
        <NuxtLink to="/Validate">Validate</NuxtLink>
        <p>配置組件</p>
        <NuxtLink to="/ConfigProvider">ConfigProvider</NuxtLink>
        <NuxtLink to="/Element">Element</NuxtLink>
        <NuxtLink to="/">全局样式 Global Style(看首頁APP.vue)</NuxtLink>
        <p>工具組件</p>
        <NuxtLink to="/CollapseTransition">折疊漸變 Collapse Transition</NuxtLink>
        <NuxtLink to="/DiscreteAPI">脫離上下文的 API</NuxtLink>
        <NuxtLink to="/Scrollbar">滾動條Scrollbar</NuxtLink>

      </div>
    </header>
    <main class="main">
      <div class="container">
        <!-- <n-config-provider :theme="theme"> -->
        <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
          <n-global-style />
          <n-message-provider>
            <NuxtPage />
          </n-message-provider>
          <n-divider />
          <n-divider title-placement="left">全局樣式配置</n-divider>
          <n-card>
            <n-space>

              <n-button @click="theme = darkTheme">
                深色
              </n-button>
              <n-button @click="theme = themeOverrides">
                客製
              </n-button>
              <n-button @click="theme = null">
                浅色
              </n-button>
            </n-space>
          </n-card>
        </n-config-provider>
      </div>
    </main>
  </div>
</template>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-size: clamp(16px, 1vw, 18px);
}

// .wapper {
//   display: flex;
//   flex-direction: column;
// }

.header {
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  // position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  a {
    display: inline-block;
    padding: 6px 14px;
    margin: 6px;
    text-decoration: none;
    font-weight: 700;
    color: #000;
    transform: color .2s;

    &:hover,
    &:focus {
      color: rgb(0, 128, 255);
    }
  }
}

.main {
  padding: 40px 30px;
}

.container {
  max-width: 1280px;
  margin: auto;
}
</style>
