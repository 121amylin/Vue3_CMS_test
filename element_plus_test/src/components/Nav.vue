<script setup>
import { RouterLink } from 'vue-router'
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['deliver'])
const toggleMenu = function () {
    emit('deliver')
}
</script>

<template>
    {{ props.open }}
    <nav :class="[props.open ? 'open' : '']">
        <button @click="toggleMenu">關閉</button>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    background-color: #ccc;
    margin-top: 0;
    transform: translateX(-100%);
    position: absolute;
    z-index: 1;
    top: 0;
    transition: transform 0.5s;


    a {
        display: block;
    }

    &.open {
        transform: translateX(0);
    }

    a {
        padding: 10px;
    }
}
</style>