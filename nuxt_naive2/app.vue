<template>
  <div class="wapper">
    <header class="header">
      <div class="container">
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/Validate">Validate</NuxtLink>
        <NuxtLink to="/Avatar">Avatar</NuxtLink>
        <NuxtLink to="/CustButton">cust Button</NuxtLink>
        <NuxtLink to="/CustButton2">cust Button2</NuxtLink>
        <NuxtLink to="/AssetsTest">AssetsTest</NuxtLink>
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

// .wapper {
//   display: flex;
//   flex-direction: column;
// }

.header {
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  // position: fixed;
  width: 100%;
  top: 0;
  left: 0;

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

.main {
  padding: 40px 30px;
}

.container {
  max-width: 1280px;
  margin: auto;
}
</style>
