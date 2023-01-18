
<script setup>
// const effectRef = ref("slide");
const isCardRef = computed(() => effectRef.value === "card");
// const isCard = isCardRef
// const myEffect = effectRef
const effects = ["slide", "fade", "card"]
</script>
<template>
  <div>
    <n-radio-group slide style="margin-bottom: 10px">
      <n-radio-button v-for="effect in effects" :key="effect" :value="effect">
        {{ effect }}
      </n-radio-button>
    </n-radio-group>
    <!-- =============【過度效果】================== -->
    <!-- effect屬性可以配置過度效果 -->
    <!-- effect="slide | fade |card"  -->
    <!-- 控制點 hover 效果 trigger="hover" -->
    <!-- 滑鼠滾輪控制 mousewheel，須配合方向垂直的才有效 direction="vertical" -->
    <n-carousel key="slide" effect="card" :centered-slides="isCard" :slides-per-view="isCard ? 'auto' : 1" draggable
      style="height: 240px" trigger="hover" mousewheel  direction="vertical">
      <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
      </n-carousel-item>
    </n-carousel>
  </div>
</template>


<style scoped lang='scss'>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>