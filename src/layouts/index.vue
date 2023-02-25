<template>
  <a-layout style="height: 100%">
    <a-layout-sider
      width="232px"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      v-if="layout === 'vertical'"
    >
      <div class="logo d-flex ai-center jc-center" v-if="collapsed">
        <img
          src="@/assets/images/logo.webp"
          style="width: 50px; height: 50px; object-fit: contain"
          alt="logo"
        />
      </div>
      <div class="logo d-flex ai-center jc-between px-2" v-else>
        <img
          src="@/assets/images/logo.webp"
          style="width: 50px; height: 50px; object-fit: contain"
          alt="logo"
        />
        <span>欢迎您，{{ JSON.parse(storge.get("userInfo")).nicename }}</span>
      </div>
      <SideBarMenu></SideBarMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="pr-4">
        <div class="d-flex">
          <NavBarMenu v-if="layout === 'horizontal'"></NavBarMenu>
          <div class="ml-4 collapsed-menu" v-else>
            <i
              class="iconfont icon-zhankai"
              v-if="collapsed"
              @click="collapsed = false"
            ></i>
            <i
              class="iconfont icon-shousuo"
              v-else
              @click="collapsed = true"
            ></i>
          </div>
        </div>
        <PerfileSetting
          :layout="layout"
          @setLayout="(mode) => (layout = mode)"
        ></PerfileSetting>
      </a-layout-header>
      <a-layout-content
        style="
          padding: 15px;
          margin: 15px;
          background-color: var(--global-bg);
          border-radius: 4px;
        "
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import SideBarMenu from "@/common/SideBarMenu.vue";
import NavBarMenu from "@/common/NavBarMenu.vue";
import PerfileSetting from "@/common/PerfileSetting.vue";
import storge from "@/utils/storge.local";
import { ref } from "vue";
const collapsed = ref<boolean>(false);
const layout = ref("vertical");
</script>

<style scoped>
.logo {
  height: 55px;
  border-bottom: 1px solid var(--boder-leavl);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.collapsed-menu > i {
  font-size: 20px !important;
  transition: all 0.5s;
}
.collapsed-menu > i:hover {
  color: var(--text-highlight-color);
  cursor: pointer;
}
</style>
