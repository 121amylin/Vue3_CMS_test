import { createApp } from 'vue'
import { createPinia } from 'pinia'
import admin from '../src/page/admin/admin.vue'
// import App from './App.vue'
// import router from './router'

const Admin = createApp(admin)

Admin.use(createPinia())
// app.use(router)

Admin.mount('#admin')
