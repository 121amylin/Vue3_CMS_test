import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import App from './App.vue'
import router from './router'

import './assets/main.css'

// hljs.registerLanguage('javascript', javascript);


const app = createApp(App)

app.use(createPinia())
app.use(hljsVuePlugin)
app.use(router)

app.mount('#app')
