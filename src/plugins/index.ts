import router from "@/router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.variable.min.css";
import "@/assets/fonts/iconfont.js";
import "@/styles/base.scss";
import mocks from "@/mocks/index";
import { createPinia } from "pinia";
import type { App } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import VueGridLayout from "vue-grid-layout";
export default (app: App<Element>) => {
  app.component("SvgIcon", SvgIcon);
  app.use(createPinia()).use(router).use(Antd).use(mocks).use(VueGridLayout);
};
