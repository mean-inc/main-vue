import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import allDevices from "./vuex/allDevices";
import "./assets/styles/style.css";
import "./assets/styles/variables.scss";
import "./assets/styles/body_style.scss";

App.use(allDevices);

createApp(App).use(router).mount("#app");
