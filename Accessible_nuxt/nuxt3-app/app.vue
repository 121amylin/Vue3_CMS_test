<template>
  <div>

    <header class="header">
      <div class="container">
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/carousel">carousel</NuxtLink>
        <NuxtLink to="/tabs">tabs</NuxtLink>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-size: clamp(16px, 1vw, 18px);
}

.container {
  max-width: 1240px;
  width: 100%;
  padding: 0 20px;
  margin: auto;
}

.header {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  // position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  margin-bottom: clamp(30px, 3vw, 60px);

  a {
    display: inline-block;
    padding: 6px 14px;
    margin: 6px;
    text-decoration: none;
    font-weight: 700;
    color: #000;
    transform: color .2s;

    &:hover,
    &:focus {
      color: rgb(0, 128, 255);
    }
  }
}
</style>
