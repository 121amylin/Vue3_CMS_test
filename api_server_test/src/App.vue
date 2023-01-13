<script setup>
import headerComponent from './components/header.vue'
</script>

<template>
  <headerComponent></headerComponent>
  <main class="main">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>

</style>
