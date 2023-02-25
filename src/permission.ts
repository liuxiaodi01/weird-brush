import router from "./router";
import NPROGRESS from "nprogress";
import { getToken } from "./utils/storge.local";
import { usePermissionStore } from "./stores/permission";
NPROGRESS.configure({ showSpinner: false });
const excludeRoutes = ["/login", "/register"];
router.beforeEach(async (to, from, next) => {
  NPROGRESS.start();
  // 如果没有token 不需要权限页面 是就去 不是就去登录
  if (!getToken())
    return excludeRoutes.includes(to.path) ? next() : next("/login");
  // 判断是否有菜单 有就跳转 没有就去请求
  if (excludeRoutes.includes(to.path)) return next({ path: "/" });
  if (!usePermissionStore().menuList.length) {
    console.log("menu~~~~ 火箭~~~");
    await usePermissionStore().getMenuList();
    return next(to.path);
  }
  return next();
});
router.afterEach(() => {
  NPROGRESS.done();
});
