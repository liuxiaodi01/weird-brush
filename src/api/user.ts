import request from "@/utils/request";
// 获取角色菜单列表
export const getRoleMenuList = () => request({ url: "/user/menu" });
// 获取
export const login = (data: { account: string; password: string }) =>
  request({ url: "/user/login", method: "post", data });
