<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Share,
  Upload,
  ArrowLeft,
  ArrowRight,
  Eleme
} from '@element-plus/icons-vue'

const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] 
</script>

<template>
  <div class="BasicView">
    <div class="unit_btn_box">
      <a href="#btn">按鈕</a>
      <a href="#border">邊框</a>
      <a href="https://element-plus.org/zh-CN/component/color.html" target="_blank">色彩</a>
      <a href="https://element-plus.org/zh-CN/component/container.html" target="_blank">Container 布局容器</a>
      <a href="https://element-plus.org/zh-CN/component/icon.html" target="_blank">Icon 圖標</a>
      <a href="#icon">Icon 圖標 筆記</a>
      <a href="https://element-plus.org/zh-CN/component/layout.html" target="_blank">Layout 布局</a>
      <a href="#layout">Layout 布局 筆記</a>
      <a href="#Link">Link 布局 筆記</a>
      <a href="#Scrollbar">Scrollbar 滚动条 筆記</a>
    </div>
    <hr>
    <!-- 按鈕 -->
    <div id="btn">
      <h1>基础按鈕</h1>
      <p>使用 type、plain、round 和 circle 屬性定義</p>
      <p>type : primary | success | info | warning | danger </p>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
      <br>
      <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>
      <br>
      <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>
      <br>
      <el-row>
        <el-button :icon="Search" circle />
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="success" :icon="Check" circle />
        <el-button type="info" :icon="Message" circle />
        <el-button type="warning" :icon="Star" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-row>
      <hr>
      <h1>禁用按鈕</h1>
      <p>disabled 属性</p>
      <el-row class="mb-4">
        <el-button disabled>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
      </el-row>
      <br>
      <el-row>
        <el-button plain disabled>Plain</el-button>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="info" plain disabled>Info</el-button>
        <el-button type="warning" plain disabled>Warning</el-button>
        <el-button type="danger" plain disabled>Danger</el-button>
      </el-row>
      <hr>
      <h1>連結按鈕</h1>
      <p>link 屬性</p>
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{ button.text }}</el-button>
      </div>
      <hr>
      <h1>禁用連結按鈕</h1>
      <p>disabled 屬性</p>
      <div class="flex justify-space-between flex-wrap gap-4">
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" link disabled>{{ button.text }}
        </el-button>
      </div>
      <hr>
      <h1>文字按鈕</h1>
      <p>text 屬性</p>
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" text>{{ button.text }}</el-button>
      </div>
      <hr>
      <h1>文字按鈕 底色效果</h1>
      <p>bg 屬性</p>
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" text bg>{{ button.text }}
        </el-button>
      </div>
      <hr>
      <h1>禁用文字按鈕</h1>
      <p>disabled 屬性</p>
      <div class="flex justify-space-between flex-wrap gap-4">
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" text disabled>{{ button.text }}
        </el-button>
      </div>
      <hr>
      <h1>圖標按鈕</h1>
      <p>:icon="ICON名稱"</p>
      <p>預設icon在文字左方</p>
      <p>class="el-icon--right"</p>
      <div class="flex">
        <el-button type="primary" :icon="Edit" />
        <el-button type="primary" :icon="Share" />
        <el-button type="primary" :icon="Delete" />
        <el-button type="primary" :icon="Search">Search</el-button>
        <el-button type="primary">
          Upload<el-icon class="el-icon--right">
            <Upload />
          </el-icon>
        </el-button>
      </div>
      <hr>
      <h1>按鈕組</h1>
      <p>使用 el-button-group 標籤對多个按钮分组。</p>
      <el-button-group>
        <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
        <el-button type="primary">
          Next Page<el-icon class="el-icon--right">
            <ArrowRight />
          </el-icon>
        </el-button>
      </el-button-group>

      <el-button-group class="ml-4">
        <el-button type="primary" :icon="Edit" />
        <el-button type="primary" :icon="Share" />
        <el-button type="primary" :icon="Delete" />
      </el-button-group>
      <hr>
      <h1>加載狀態按鈕</h1>
      <p>loading 屬性</p>
      <p>:loading-icon="icon名稱"</p>
      <p>客製化ICON 用template標籤 加 #loading 屬性，template標籤內部寫客製化的ICON</p>
      <p>class="el-icon--right" 不起作用</p>
      <el-button type="primary" loading>Loading</el-button>
      <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
      <el-button type="primary" loading>
        <template #loading>
          <div class="custom-loading">
            <svg class="circular" viewBox="-10, -10, 50, 50">
              <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)" />
            </svg>
          </div>
        </template>
        Loading
      </el-button>
      <hr>
      <h1>调整尺寸</h1>
      <p>large 和 small 屬性</p>
      <el-row>
        <el-button size="large">Large</el-button>
        <el-button>Default</el-button>
        <el-button size="small">Small</el-button>
        <el-button size="large" :icon="Search">Search</el-button>
        <el-button :icon="Search">Search</el-button>
        <el-button size="small" :icon="Search">Search</el-button>
      </el-row>
      <br>
      <el-row class="my-4">
        <el-button size="large" round>Large</el-button>
        <el-button round>Default</el-button>
        <el-button size="small" round>Small</el-button>
        <el-button size="large" :icon="Search" round>Search</el-button>
        <el-button :icon="Search" round>Search</el-button>
        <el-button size="small" :icon="Search" round>Search</el-button>
      </el-row>
      <br>
      <el-row>
        <el-button :icon="Search" size="large" circle />
        <el-button :icon="Search" circle />
        <el-button :icon="Search" size="small" circle />
      </el-row>
      <hr>
      <h1>自定義颜色</h1>
      <p>自動計算 hover 和 active 颜色</p>
      <p>官方範例 :dark="isDark" 不需要</p>
      <div class="flex">
        <el-button color="#626aef">Default</el-button>
        <el-button color="#626aef" plain>Plain</el-button>
        <el-button color="#626aef" disabled>Disabled</el-button>
        <el-button color="#626aef" disabled plain>Disabled Plain</el-button>
      </div>
    </div>
    <hr>
    <!-- 邊框 -->
    <div id="border">
      <h1>邊框</h1>
      <p>class="line"， 搭配 class style => border-top: 1px solid var(--el-border-color)</p>
      <p>class="dashed"， 搭配 class style => border-top: 2px dashed var(--el-border-color)</p>
      <p>var(--el-border-color)</p>
      <div class="line" style="width: 200px; height: 40px;"></div>
      <div class="dashed" style="width: 200px; height: 40px;"></div>
      <hr>
      <h1>圆角</h1>
      <p>var(--el-border-radius-small) => 2px </p>
      <p>var(--el-border-radius-base) => 4px </p>
      <p>var(--el-border-radius-round) => 20px </p>
      <div style="display: flex;justify-content: space-between;width: 200px;">
        <div style="width:40px;height:40px;border:1px solid #ccc;border-radius: var(--el-border-radius-small);"></div>
        <div style="width:40px;height:40px;border:1px solid #ccc;border-radius: var(--el-border-radius-base);"></div>
        <div style="width:40px;height:40px;border:1px solid #ccc;border-radius: var(--el-border-radius-round);"></div>
      </div>
      <hr>
      <h1>陰影</h1>
      <p>var(--el-box-shadow)，0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)</p>
      <p>var(--el-box-shadow-light)，0px 0px 12px rgba(0, 0, 0, .12)</p>
      <p>var(--el-box-shadow-lighter)，0px 0px 6px rgba(0, 0, 0, .12)</p>
      <p>var(--el-box-shadow-dark)，0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px
        -8px rgba(0, 0, 0, .16)</p>
      <div style="display: flex;justify-content: space-evenly;">
        <div style="width:200px;height:100px;box-shadow: var(--el-box-shadow);">--el-box-shadow</div>
        <div style="width:220px;height:100px;box-shadow: var(--el-box-shadow-light);">--el-box-shadow-light</div>
        <div style="width:260px;height:100px;box-shadow: var(--el-box-shadow-lighter);">--el-box-shadow-lighter</div>
        <div style="width:220px;height:100px;box-shadow: var(--el-box-shadow-dark);">--el-box-shadow-dark</div>
      </div>
    </div>
    <hr>
    <!-- Icon 圖標 筆記 -->
    <div id="icon">
      <h1>Icon 圖標 筆記</h1>
      <p><a class="link"
          href="https://element-plus.org/zh-CN/component/icon.html#%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8"
          target="_blank">單獨安裝 @element-plus 的 icons-vue</a> |
        <a class="link"
          href="https://element-plus.org/zh-CN/component/icon.html#%E6%B3%A8%E5%86%8C%E6%89%80%E6%9C%89%E5%9B%BE%E6%A0%87"
          target="_blank">注册所有图标</a>、<a class="link" href="https://codepen.io/sxzz/pen/xxpvdrg" target="_blank">codepen
          範例</a>
      </p>
      <p>el-icon 为 raw SVG 图标提供额外的属性 => :size="數值" 、 color="#996644" </p>
      <p>直接使用 SVG 图标， Edit style="width: 1em; height: 1em; margin-right: 8px" </p>
      <p><a class="link" href="https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88"
          target="_blank">图标集合</a></p>
      <el-icon :size="60" color="#996611">
        <Edit />
      </el-icon>
      <Edit style="width: 40px; height: 40px; margin-right: 8px;color:#998844" />
    </div>
    <hr>
    <!-- Layout 布局 筆記 -->
    <div id="layout">
      <h1>Layout 布局 筆記</h1>
      <p>组件默认使用 Flex 布局</p>
      <p>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p>
      <p><a class="link"
          href="https://element-plus.org/zh-CN/component/layout.html#%E5%9F%BA%E4%BA%8E%E6%96%AD%E7%82%B9%E7%9A%84%E9%9A%90%E8%97%8F%E7%B1%BB"
          target="_blank">基于断点的隐藏类</a></p>
      <p>xs ， 小於768</p>
      <p>sm ， 大於768</p>
      <p>md ， 大於992</p>
      <p>lg ， 大於1200</p>
      <p>xl ， 大於1920</p>
      <h3>Row 属性</h3>
      <p>row 行提供 gutter 属性来指定列之间的间距，其默认值为0。</p>
      <p>row 行提供 justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。</p>
      <p>align定義垂直排列方式，top/middle/bottom，默认值top</p>
      <p>tag自定义元素标签，默认值div</p>
      <h3>Col 属性</h3>
      <p>通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。</p>
      <p>col 组件預設了五个響應尺寸：xs、sm、md、lg 和 xl，提供響應式設計</p>
      <p>屬性名:span、offset、push、pull、xs、sm、md、lg、xl、tag</p>
      <p>用 offset 調整元素位置會影響相鄰元素排版，margin-left</p>
      <p>用 push、pull 調整元素位置不會影響相鄰元素排版，relative + push = > left 、 pull = > right</p>

      <el-row :gutter="20">
        <el-col :span="24">111</el-col>
        <el-col :span="12">222</el-col>
        <el-col :span="12">222</el-col>
        <el-col :span="8" :offset="8">222</el-col>
        <el-col :span="8">222</el-col>
        <el-col :span="24">222</el-col>
      </el-row>
      <el-row justify="space-around">
        <el-col :span="6">111</el-col>
        <el-col :span="6">111</el-col>
        <el-col :span="6">111</el-col>
      </el-row>

      <el-row>
        <el-col :xs="24" :md="12" :lg="8">111</el-col>
        <el-col :xs="24" :md="12" :lg="8">111</el-col>
        <el-col :xs="24" :md="12" :lg="8">111</el-col>
      </el-row>
    </div>
    <hr>
    <!-- Link 链接 筆記 -->
    <div id="Link">
      <h1>Link 链接筆記</h1>
      <p><a class="link" href="https://element-plus.org/zh-CN/component/link.html" target="_blank">官網</a></p>
      <p>el-link 組件</p>
      <p>屬性 type、disabled、:underline="false"、:icon="Edit"</p>
      <p>:underline，預設 true</p>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link disabled>default</el-link>
      <el-link type="primary" disabled>primary</el-link>
      <el-link :underline="false">Without Underline</el-link>
      <el-link>With Underline</el-link>
      <el-link :icon="Edit">Edit</el-link>
      <el-link>
        Check<el-icon class="el-icon--right">
          <icon-view />
        </el-icon>
      </el-link>
    </div>

    <hr>
    <!-- Scrollbar 滚动条 筆記 -->
    <div id="Link">
      <h1>Scrollbar 滚动条筆記</h1>
      <p><a class="link"
          href="https://element-plus.org/zh-CN/component/scrollbar.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"
          target="_blank">官網</a></p>
      <p>el-scrollbar 組件</p>
      <p>Y 向捲軸，需設置 max-height 或 height 屬性</p>
      <p>X 向捲軸，当元素宽度大于滚动条宽度时，会显示横向滚动条</p>
      <p>通过使用 setScrollTop 与 setScrollLeft 方法，可以手动控制滚动条滚动。</p>
      <p>屬性 type、disabled、:underline="false"、:icon="Edit"</p>
      <p>:underline，預設 true</p>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link disabled>default</el-link>
      <el-link type="primary" disabled>primary</el-link>
      <el-link :underline="false">Without Underline</el-link>
      <el-link>With Underline</el-link>
      <el-link :icon="Edit">Edit</el-link>
      <el-link>
        Check<el-icon class="el-icon--right">
          <icon-view />
        </el-icon>
      </el-link>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.BasicView {
  margin-bottom: 80px;

}

p {
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;

  &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    display: block;
    border-radius: 50%;
    background-color: #aaa;
    transform: translate(-50%, -50%);
    left: 8px;
    top: 50%;
  }
}

.ml-4 {
  margin-left: 1rem;
}

.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}

.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}

.line {
  border-top: 1px solid var(--el-border-color)
}

.dashed {
  border-top: 2px dashed var(--el-border-color);
}
</style>
