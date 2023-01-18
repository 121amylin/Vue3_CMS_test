<script setup>
import { ref, onMounted } from 'vue'
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";

// 原始資料
const data = [
  {
    id: 1674008021764,
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    isShow: true
  },
  {
    id: 1874508021764,
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    isShow: true
  },
  {
    id: 1674108021304,
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    isShow: true
  }, {
    id: 4524008021967,
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
    isShow: false
  }
]

// 顯示資料
let showData = []
data.forEach((item) => {
  if (item.isShow) {
    showData.push(item)
  }
})

const carouselLength = showData.length
const input = ref(null)
const car = ref(null)
const carouselCurrentIndex = ref(null)
const carouselLastIndex = ref(null)

const getPages = (currentIndex, lastIndex) => {
  carouselCurrentIndex.value = currentIndex + 1
  carouselLastIndex.value = lastIndex + 1
}

onMounted(() => {
  input.value.focus()
})


</script>
<template>
  <div>
    <input ref="input" />
    <n-hr />
    <n-h3>客製化頁碼</n-h3>
    <n-p>上一張：{{ carouselLastIndex }}</n-p>
    <n-p>當前頁碼：{{ carouselCurrentIndex }}/{{ carouselLength }}</n-p>
    <p v-if="showData">111</p>
    <p v-else>222</p>
    {{ showData }}
    <n-carousel show-arrow autoplay ref="car" :on-update:current-index="getPages" v-if="showData">
      <img v-for="item in showData" :key="item.id" class="carousel-img" :src="item.src">
      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button type="button" class="custom-arrow--left" @click="prev">
            <n-icon>
              <ArrowBack />
            </n-icon>
          </button>
          <button type="button" class="custom-arrow--right" @click="next">
            <n-icon>
              <ArrowForward />
            </n-icon>
          </button>
        </div>
      </template>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li v-for="index of total" :key="index" :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)" />
        </ul>
      </template>
    </n-carousel>
  </div>
</template>


<style scoped lang='scss'>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>