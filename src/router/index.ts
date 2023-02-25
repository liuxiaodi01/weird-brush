import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import pages from "~pages";
// 布局路由
export const layoutRoute: RouteRecordRaw = {
  path: "/",
  name: "layout",
  component: () => import("@/layouts/index.vue"),
  children: [],
};

// 动态路由
export const dynamicRoute = sortRoutes(
  pages.filter((page: any) => page.meta.auth)
);
// 静态路由
const staticRoute = pages.filter((page: any) => !page.meta.auth);
const routes: RouteRecordRaw[] = staticRoute;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
// 路由排序
function sortRoutes(routesList: RouteRecordRaw[]) {
  const list = routesList.sort((a: any, b: any) => a.meta.sort - b.meta.sort);
  list.forEach((v) => {
    if (v.children) {
      const children: any = sortRoutes(v.children);
      v.children = children;
    }
  });
  return list;
}

export default router;
