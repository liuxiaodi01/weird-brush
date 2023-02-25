export default [
  {
    url: "/user/login",
    method: "post",
    data: {
      code: 200,
      token: "Bearn vue3_admin_ant-design-vue_axios_mockjs_vite_demo",
      userInfo: {
        photo: "@photo()",
        email: "@email()",
        sex: "0",
        nicename: "@name()",
      },
    },
  },
  {
    url: "/user/menu",
    method: "get",
    data: {
      code: 200,
      list: [
        {
          id: 1,
          name: "dashboard",
          icon: "icon-configure",
          title: "仪表盘",
        },
        {
          id: 2,
          name: "workBench",
          title: "工作台",
          icon: "icon-configure",
          children: [
            {
              id: 21,
              name: "workBench-audio",
              title: "音频",
              icon: "icon-configure",
            },
            {
              id: 22,
              name: "workBench-video",
              title: "视频",
              icon: "icon-configure",
            },
          ],
        },
        {
          id: 3,
          name: "musicBench",
          title: "网易云音乐",
          icon: "icon-configure",
        },
      ],
    },
  },
];
