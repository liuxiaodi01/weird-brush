import type { RouteRecordRaw } from "vue-router";
// 路由表对比
export function routingComparison(
  serverRouter: any[],
  localRouter: RouteRecordRaw[]
) {
  const routerList: RouteRecordRaw[] = [];

  localRouter.forEach((route: RouteRecordRaw | any) => {
    serverRouter.forEach((v) => {
      if (route.name === v.name) {
        if (
          v.children &&
          v.children.length > 0 &&
          route.children &&
          route.children.length > 0
        ) {
          const children = routingComparison(
            v.children,
            route.children as RouteRecordRaw[]
          );
          route.children = children;
          if (children.length === 0) {
            delete route.children;
            route.path += new Date().getTime() * 10;
            route.meta.disable = true;
          }
        } else {
          route.meta.disable = false;
          if (route.children) {
            delete route.children;
            route.path += new Date().getTime() * 10;
            route.meta.disable = true;
          }
        }
        route.meta.name = `${v.title}${
          route.meta.disable ? "-(需配置子页面)" : ""
        }`;
        route.meta.icon = `iconfont ${v.icon}`;
        routerList.push(route);
      }
    });
  });
  return routerList;
}
export function routingRedirection(routes: RouteRecordRaw[]) {
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      route.redirect = route.children[0];
      routingRedirection(route.children);
    }
  });
}
