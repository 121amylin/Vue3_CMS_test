import { createApp } from 'vue'
import { createPinia } from 'pinia'
import unit_A from '../src/page/unit_A/unit_A.vue'
// import App from './App.vue'
// import router from './router'

const Unit_A = createApp(unit_A)

Unit_A.use(createPinia())
// app.use(router)

Unit_A.mount('#Unit_A')
