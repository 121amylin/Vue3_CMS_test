
<template>
  <div>
    <!-- <n-carousel autoplay direction="vertical" dot-placement="right" show-arrow style="width: 100%; height: 240px"> -->
    <!-- <n-carousel autoplay dot-placement="right" show-arrow :slides-per-view="3" :space-between="20" :loop="false" draggable centered-slides> -->
    <!-- <n-carousel  show-arrow dot-type="line" dot-placement="top" :space-between="100" draggable=""> -->
    <!-- <n-carousel>
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
    </n-carousel> -->

    <!-- <n-carousel>
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
    </n-carousel> -->
    <!-- 居中 & 自動每屏顯示數量 -->
    <n-carousel  centered-slides slides-per-view="auto" :space-between="20" :loop="false" draggable>
      <n-carousel-item style="width: 60%">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      </n-carousel-item>
      <n-carousel-item style="width: 20%">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      </n-carousel-item>
      <n-carousel-item style="width: 40%">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
      </n-carousel-item>
      <n-carousel-item style="width: 10%">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
      </n-carousel-item>
    </n-carousel>
  </div>
</template>


<style scoped lang='scss'>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>