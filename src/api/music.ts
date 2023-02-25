import request from "@/utils/request";
// 获取音乐菜单列表
export const getMusicMenuList = () => request({ url: "/music/menu/list" });
