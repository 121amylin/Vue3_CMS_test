<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const getAPI = () => {
  fetch('/api/data').then(res => {
    return res.json()
  }).then(res => {
    console.log(res)
  })
}
const postAPI = async () => {
  await fetch('/api/login', {
    method: 'post',
    //post请求，傳遞JSON數據(一定要設置，不然會傳不到後端)
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //post请求参数
    body: JSON.stringify({
      name: 'admin',
      login: '123456',
    })
  }).then(res => {
    // return res
    return res.json()
  }).then(res => {
    console.log(res)
  })
}

const request = 'https://jsonplaceholder.typicode.com/todos/1';



// 使用 async & await （Fetch API）
// https://ithelp.ithome.com.tw/articles/10263449?sc=rss.iron

</script>

<template>

  <!-- fetch的get和post传参 -->
  <!-- https://blog.csdn.net/dylan_zeng92/article/details/75371034 -->
  <div>
    <header>
      <div>
        <button @click="getAPI">getAPI</button>
        <button @click="postAPI">postAPI</button>
        <a href="https://muki.tw/tech/vue/vue-express-project/" target="_blank">實作參考</a>
      </div>

      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper" style="margin-top:50px">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
