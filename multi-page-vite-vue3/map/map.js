import { createApp } from 'vue'
import { createPinia } from 'pinia'
import map from '../src/page/map/map.vue'
// import App from './App.vue'
// import router from './router'

const Map = createApp(map)

Map.use(createPinia())
// app.use(router)

Map.mount('#map')
