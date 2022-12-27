<!--  -->
<script setup>
</script>


<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}
body.el-popup-parent--hidden{
  .main {
    z-index: 1;
  }
}
.container {
  margin: auto;
  max-width: 1240px;
  padding: 0 20px;
}

.main {
  top: 80px;
  position: relative;
  z-index: 999;
}
</style>
