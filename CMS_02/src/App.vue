<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import {getData} from '../src/http/api'
getData.then(res=>{
  console.log(res)
})
</script>

<template>
  <header>

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">login</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}



nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  a{
    font-size: 24px;
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
