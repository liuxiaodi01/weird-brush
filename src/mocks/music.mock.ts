import { v4 } from "uuid";
export default [
  {
    url: "/music/menu/list",
    method: "get",
    data: {
      code: 200,
      list: [
        {
          tag: "在线音乐",
          list: [
            {
              id: v4(),
              name: "音乐馆",
              icon: "icon-yinleyule",
              component: "MusicHall",
            },
            {
              id: v4(),
              name: "视频",
              icon: "icon-chakantiezishipin",
              component: "VideoHall",
            },
            {
              id: v4(),
              name: "电台",
              icon: "icon-diantai",
              component: "RadioStation",
            },
          ],
        },
        {
          tag: "我的音乐",
          list: [
            {
              id: v4(),
              name: "本地和下载",
              icon: "icon-diannao",
              component: "LocalDownload",
            },
            {
              id: v4(),
              name: "最近播放",
              icon: "icon-zuijinbofang",
              component: "RecentlyPlay",
            },
            {
              id: v4(),
              name: "试听列表",
              icon: "icon-24gf-playlistMusic3",
              component: "AuditionList",
            },
          ],
        },
      ],
    },
  },
];
