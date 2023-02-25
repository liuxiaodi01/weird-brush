import { ref } from "vue";
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { getRoleMenuList } from "@/api/user";
import router, { dynamicRoute, layoutRoute } from "@/router";
import { routingComparison, routingRedirection } from "@/utils/permissions";
export const usePermissionStore = defineStore("permission", () => {
  const menuList = ref<RouteRecordRaw[]>([]);
  async function getMenuList() {
    // 获取菜单列表
    const { list }: any = await getRoleMenuList();
    console.log(dynamicRoute, "dynamicRoute");
    const filterRoutes = routingComparison(list, dynamicRoute);
    const routes = layoutRoute;
    routes.children = filterRoutes;
    routingRedirection([routes]);
    router.addRoute(routes);
    menuList.value = routes.children as RouteRecordRaw[];
  }
  return { menuList, getMenuList };
});
