<!-- 动态组件排序规则 -->
<route lang="yaml">
meta:
  sort: 2
</route>
<template>
  <a-layout class="music-wrapper">
    <a-layout-sider
      style="
        background-color: var(--global-bg);
        border-right: 1px solid #f6f6f6;
      "
      width="230"
    >
      <SiderMusic
        :menuList="menuList"
        :currentMenu="currentMenu"
        @clickMenu="(event) => (currentMenu = event)"
      ></SiderMusic>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="
          background-color: var(--global-bg);
          height: 80px;
          line-height: 80px;
          border: none;
        "
      >
        <HeaderMusic></HeaderMusic>
      </a-layout-header>
      <a-layout-content style="padding: 0; background-color: var(--global-bg)">
        <component :is="currentMenu"></component>
      </a-layout-content>
      <a-layout-footer
        style="
          padding: 0;
          height: 70px;
          border-top: 1px solid #ccc;
          background-color: var(--global-bg);
        "
      >
        <PlayerMusic></PlayerMusic>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { getMusicMenuList } from "@/api/music";
import HeaderMusic from "./components/HeaderMusic.vue";
import PlayerMusic from "./components/PlayerMusic.vue";
import SiderMusic from "./components/SiderMusic.vue";
import AuditionList from "./components/AuditionList/index.vue";
import LocalDownload from "./components/LocalDownload/index.vue";
import MusicHall from "./components/MusicHall/index.vue";
import RadioStation from "./components/RadioStation/index.vue";
import RecentlyPlay from "./components/RecentlyPlay/index.vue";
import VideoHall from "./components/VideoHall/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    AuditionList,
    LocalDownload,
    MusicHall,
    RadioStation,
    RecentlyPlay,
    VideoHall,
    HeaderMusic,
    PlayerMusic,
    SiderMusic,
  },
  setup() {
    const currentMenu = ref("");
    const menuList = ref<any>([]);
    onMounted(async () => {
      const { list: menu }: any = await getMusicMenuList();
      menuList.value = menu;
      currentMenu.value = menu[0].list[0].component;
    });
    return {
      currentMenu,
      menuList,
    };
  },
});
</script>
<style lang="scss" scoped>
.music-wrapper {
  height: 100%;
}
</style>
