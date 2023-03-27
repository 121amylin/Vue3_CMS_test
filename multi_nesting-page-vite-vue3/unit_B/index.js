import { createApp } from 'vue'
import { createPinia } from 'pinia'
import unit_B from '../src/page/unit_B/unit_B.vue'
// import App from './App.vue'
// import router from './router'

const Unit_B = createApp(unit_B)

Unit_B.use(createPinia())
// app.use(router)

Unit_B.mount('#unit_B')
