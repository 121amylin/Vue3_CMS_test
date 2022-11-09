<template>
  <div class="ConfigView">
    <h1>This is an ConfigView page</h1>

    <div class="unit_btn_box">
      <a href="#i18n">i18n 筆記</a>
    </div>
    <hr>


    <!-- i18n 筆記 -->
    <div id="i18n">
      <h1>i18n 筆記</h1>
      <p><a href="https: //openhome.cc/Gossip/Rails/i18n.html" target="_blank">element plus 官網</a></p>
      <p><a href="https: //openhome.cc/Gossip/Rails/i18n.html" target="_blank">簡介 i18n</a></p>
      <p><a href="https: //ithelp.ithome.com.tw/articles/10209584" target="_blank">[Day 29] Vue Quasar 多國語系 I18n</a></p>
      <p><a href="https: //kazupon.github.io/vue-i18n/introduction.html#sponsors" target="_blank">Vue I18n</a></p>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.ConfigView {
  margin-bottom: 80px;

}

.mb_0 {
  margin-bottom: 0;
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
</style>
