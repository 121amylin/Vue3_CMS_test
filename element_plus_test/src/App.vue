<script setup>
import { RouterView, RouterLink } from 'vue-router'
import c_nav from './components/Nav.vue'
import c_header from './components/Header.vue'
import { ref } from 'vue'
const menuIsOpen = ref(false)
const toggleMenu = function () {
  console.log('轉換')
  menuIsOpen.value = !menuIsOpen.value
}
</script>

<template>

  <!-- 單向資料流範例 start -->
  {{ menuIsOpen }}
  <c_header @deliver="toggleMenu"></c_header>
  <c_nav :open="menuIsOpen" @deliver="toggleMenu"></c_nav>


  <!-- [重構倒數第03天] - One-Way Data Flow 單向資料流 -->
  <!-- https://ithelp.ithome.com.tw/articles/10273655 -->

  <!-- Vite with Vue3中如何使用emit -->
  <!-- https://ithelp.ithome.com.tw/questions/10205599 -->

  <!-- 單向資料流範例 end -->

  <div class="menu">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/animation">Animation</RouterLink>
    <router-link to="/computedView">computedView</router-link>
    <router-link to="/transitionView">TransitionView</router-link>
    <router-link to="/carouselOneWay">carouselOneWay</router-link>
    <router-link to="/CarouselTwoWay">CarouselTwoWay</router-link>

    <RouterLink to="/basic">Basic</RouterLink>

    <RouterLink to="/config">Config</RouterLink>

    <RouterLink to="/form">Form</RouterLink>

    <RouterLink to="/data">Data</RouterLink>

    <RouterLink to="/navigation">Navigation</RouterLink>

    <RouterLink to="/feedback">Feedback</RouterLink>

    <RouterLink to="/others">Others</RouterLink>
  </div>

  <div class="menu components_menu">
    <RouterLink to="/ScrollBar">ScrollBar</RouterLink>
  </div>
  <hr>


  <RouterView />

</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-wrap: wrap;

  a {
    display: block;
    padding: 10px;
    background-color: #eee;
    transition: background .3s;
    margin: 4px 0;

    +a {
      margin-left: 10px;

      &:hover {
        background-color: #bbb;
      }
    }

  }
}

.components_menu {
  a {

    background-color: rgb(224, 234, 255);

    &:hover {
      background-color: rgb(206, 222, 255);
    }
  }
}
</style>
