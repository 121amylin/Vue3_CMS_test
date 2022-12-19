<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {request} from './API/request'

request()
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>
</style>
