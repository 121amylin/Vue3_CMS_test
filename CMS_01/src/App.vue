<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const activeIndex = ref('1')

</script>

<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <RouterLink to="/">Home</RouterLink>
      </el-menu-item>
      <el-menu-item index="2">
        <RouterLink to="/about">About</RouterLink>
      </el-menu-item>
      <el-menu-item index="3">
        <RouterLink to="/login">login</RouterLink>
      </el-menu-item>
      <el-menu-item index="4">
        <RouterLink to="/manage">manage</RouterLink>
      </el-menu-item>
    </el-menu>
  </header>

  <RouterView />
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
