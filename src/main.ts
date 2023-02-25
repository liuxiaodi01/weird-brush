import { createApp } from "vue";
import App from "./App.vue";
import plugins from "./plugins";
import "./permission";
import "./assets/fonts/iconfont.css";
const app = createApp(App);

app.use(plugins).mount("#app");
