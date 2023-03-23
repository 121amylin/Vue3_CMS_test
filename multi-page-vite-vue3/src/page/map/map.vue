<script setup>
import { ref } from "vue"
const count = ref(0)
const addCount = () => {
  count.value++
}
</script>


<template>
  <div>
    <h1>map</h1>
    <p>{{ count }}</p>
    <button @click="addCount">add</button>
  </div>
</template>


<!-- <style scoped lang='scss'></style> -->