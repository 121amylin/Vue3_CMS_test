<script setup>
import { defineComponent, ref } from "vue";
const route = useRoute()
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
       
    </div>
</template>


<style scoped lang='scss'>
</style>