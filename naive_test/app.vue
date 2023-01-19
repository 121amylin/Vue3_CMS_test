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
  // common: {
  //   primaryColor: '#FF0000',
  //   successColor: "red",
  //   lineHeight: 2,
  //   fontSizeMedium: '20px'
  // },
  // Button: {
  //   textColor: 'red',
  //   fontSizeMedium: '20px'
  // },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: '#FF0000'
  //     }
  //   }
  // }
  // ...
}
const theme = ref(null)
</script>
<template>
  <n-loading-bar-provider>
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
          <NuxtLink to="/Carousel">Carousel</NuxtLink>
          <NuxtLink to="/Carousel_cust">Carousel cust</NuxtLink>
          <NuxtLink to="/Carousel_cust_2">Carousel cust 2</NuxtLink>
          <NuxtLink to="/Carousel_cust_3">Carousel cust 3</NuxtLink>
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

          <p>布局组件</p>
          <NuxtLink to="/Layout">Layout</NuxtLink>
          <NuxtLink to="/Grid">Grid</NuxtLink>
          <NuxtLink to="/Space">Space</NuxtLink>

          <p>配置組件</p>
          <NuxtLink to="/ConfigProvider">ConfigProvider</NuxtLink>
          <NuxtLink to="/Element">Element</NuxtLink>
          <NuxtLink to="/">全局样式 Global Style(看首頁APP.vue)</NuxtLink>

          <p>工具組件</p>
          <NuxtLink to="/CollapseTransition">折疊漸變 Collapse Transition</NuxtLink>
          <NuxtLink to="/DiscreteAPI">脫離上下文的 API</NuxtLink>
          <NuxtLink to="/Scrollbar">滾動條Scrollbar</NuxtLink>

          <p>反饋組件</p>
          <NuxtLink to="/Alert">警示信息</NuxtLink>

          <p>導航組件</p>
          <NuxtLink to="/Affix">固釘 Affix</NuxtLink>
          <NuxtLink to="/Anchor">側邊導航 Anchor</NuxtLink>
          <NuxtLink to="/BackTop">回到頂部 Back Top</NuxtLink>
          <NuxtLink to="/Breadcrumb">麵包屑 Breadcrumb</NuxtLink>
          <NuxtLink to="/LoadingBar">加載條 Loading Bar</NuxtLink>
          <NuxtLink to="/Menu">菜單 Menu</NuxtLink>
          <NuxtLink to="/Pagination">分頁 Pagination</NuxtLink>
          <NuxtLink to="/Steps">步驟 Steps</NuxtLink>
          <NuxtLink to="/Tabs">標籤頁 Tabs</NuxtLink>
          <!-- ===================================== -->
          <p>反饋組件</p>
          <NuxtLink to="/Badge">標記 Badge</NuxtLink>
          <NuxtLink to="/Dialog">對話框 Dialog</NuxtLink>
          <NuxtLink to="/Drawer">抽屜 Drawer</NuxtLink>
          <NuxtLink to="/Drawer2">抽屜 Drawer2</NuxtLink>
          <NuxtLink to="/Message">信息 Message</NuxtLink>
          <NuxtLink to="/Modal">模態框 Modal</NuxtLink>
          <NuxtLink to="/Notification">通知 Notification</NuxtLink>
          <NuxtLink to="/Popconfirm">彈出確認 Popconfirm</NuxtLink>
          <NuxtLink to="/Popover">彈出信息 Popover</NuxtLink>
          <NuxtLink to="/Popselect">彈出選擇 Popselect</NuxtLink>
          <NuxtLink to="/Progress">進度 Progress</NuxtLink>
          <NuxtLink to="/Result">結果頁 Result</NuxtLink>
          <NuxtLink to="/Skeleton">骨架屏 Skeleton</NuxtLink>
          <NuxtLink to="/Spin">加載 Spin</NuxtLink>
          <NuxtLink to="/Tooltip">彈出提示 Tooltip</NuxtLink>

          <p>數據錄入組件</p>

          <NuxtLink to="/AutoComplete_2">自動填充 Auto Complete</NuxtLink>
          <NuxtLink to="/Cascader">級聯選擇 Cascader</NuxtLink>
          <NuxtLink to="/DatePicker">日期選擇器 Date Picker</NuxtLink>
          <NuxtLink to="/DynamicInput">動態錄入 Dynamic Input</NuxtLink>
          <NuxtLink to="/DynamicTags">動態標籤 Dynamic Tags</NuxtLink>
          <NuxtLink to="/Form">表單 Form</NuxtLink>
          <NuxtLink to="/Input">文本輸入 Input</NuxtLink>
          <NuxtLink to="/InputNumber">數字輸入 Input Number</NuxtLink>
          <NuxtLink to="/Mention">提及 Mention</NuxtLink>
          <NuxtLink to="/Select">選擇器 Select</NuxtLink>
          <NuxtLink to="/Slider">滑動選擇 Slider</NuxtLink>
          <NuxtLink to="/TimePicker">時間選擇器 Time Picker</NuxtLink>
          <NuxtLink to="/Transfer">穿梭框 Transfer</NuxtLink>
          <NuxtLink to="/TreeSelect">樹型選擇 Tree Select</NuxtLink>
          <NuxtLink to="/Upload">上傳 Upload</NuxtLink>




          <p>數據展示組件</p>
          <NuxtLink to="/Calendar">日曆 Calendar</NuxtLink>
          <NuxtLink to="/Countdown">倒計時 Countdown</NuxtLink>
          <NuxtLink to="/Code">代碼 Code</NuxtLink>
          <NuxtLink to="/Descriptions">描述 Descriptions</NuxtLink>
          <NuxtLink to="/Empty">無內容 Empty</NuxtLink>
          <NuxtLink to="/Equation">公式 Equation</NuxtLink>
          <NuxtLink to="/Image">圖像 Image</NuxtLink>
          <NuxtLink to="/List">列表 List</NuxtLink>
          <NuxtLink to="/Log">日誌 Log</NuxtLink>
          <NuxtLink to="/NumberAnimation">數值動畫 Number Animation</NuxtLink>
          <NuxtLink to="/Statistic">統計數據 Statistic</NuxtLink>
          <NuxtLink to="/Table_2">表格 Table</NuxtLink>
          <NuxtLink to="/Thing">東西 Thing</NuxtLink>
          <NuxtLink to="/Time">時間 Time</NuxtLink>
          <NuxtLink to="/Timeline">時間線 Timeline</NuxtLink>
          <NuxtLink to="/Tree">樹 Tree</NuxtLink>
        </div>
      </header>

      <main class="main">
        <div class="container">
          <!-- <n-config-provider :theme="theme"> -->
          <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
            <n-global-style />
            <n-message-provider>
              <n-dialog-provider>
                <n-notification-provider>
                  <NuxtPage />
                </n-notification-provider>
              </n-dialog-provider>
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
  </n-loading-bar-provider>
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

mark {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 6px;
}

.code {
  display: inline-block;
  padding: 14px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #eee;
}
</style>
