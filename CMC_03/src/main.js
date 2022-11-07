import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss";
import "./assets/main.css";
// import svgIcon from './icons/index'

const app = createApp(App);
// svgIcon(app)
app.use(ElementPlus);
app.use(router);

app.mount("#app");
