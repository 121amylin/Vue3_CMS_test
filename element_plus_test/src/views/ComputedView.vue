<script setup>
import { ref, computed } from 'vue';
const count = ref(1)
const plusOne = computed(() => {
    return count.value + 1
})
</script>

<template>
    <p>{{ count }}</p>
    {{ plusOne }}
    <button @click="count++">++</button>
</template>



<!-- https://juejin.cn/post/6994422956449333285 -->