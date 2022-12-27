<script setup>
</script>


<template>
  <div>
    <menu class="test_menu">
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/login">login</NuxtLink>
      <NuxtLink to="/notesEdit">notesEdit</NuxtLink>
      <NuxtLink to="/todosEdit">todosEdit</NuxtLink>
    </menu>
    <NuxtPage />
  </div>
</template>


<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans TC', sans-serif;
}

.test_menu {

  // display: none;
  a {
    font-size: 16px;
    margin: 10px;
    padding: 6px 20px;
    &.router-link-active{
      background-color: #ccc;
    }
  }
}
</style>