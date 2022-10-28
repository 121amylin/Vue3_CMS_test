<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['deliver'])
const toggleMenu = function () {
    console.log("開")
    emit('deliver')
}
</script>
<template>
    <header>
        <button @click='toggleMenu'>開啟</button>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #ccc;
    padding: 10px;

    button {
        background-color: black;
        color: #fff;
    }
}
</style>

