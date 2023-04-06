import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/allDevices";
import "./assets/styles/style.css";
import "./assets/styles/variables.scss";
import "./assets/styles/body_style.scss";
import "material-design-icons-iconfont";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

createApp(App).use(router).use(store).use(noUiSlider).mount("#app");
