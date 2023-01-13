import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
axios('/api').then(res => {
    console.log(res)
})


const aaa = axios('/user').then(res => {
    console.log(JSON.stringify(res.data))
    document.querySelector('#app').innerHTML = JSON.stringify(res.data)
})


app.mount('#app')
