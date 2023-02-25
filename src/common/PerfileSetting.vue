<template>
  <div class="d-flex ai-center">
    <!-- <a-badge :count="5" title="注意查收5条通知" class="mr-3" :offset="[-5, 5]">
      <span class="o-h iconfont icon-duanxinqunfa_o"></span>
    </a-badge> -->
    <a-tooltip>
      <template #title>
        <p>布局样式</p>
      </template>
      <span
        v-if="layout === 'vertical'"
        class="iconfont icon-layout-right-panel-2 o-h mr-3"
        @click="setLayout('horizontal')"
      ></span>
      <span
        v-if="layout === 'horizontal'"
        class="iconfont icon-layout-horizontal o-h mr-3"
        @click="setLayout('vertical')"
      ></span>
    </a-tooltip>
    <a-tooltip>
      <template #title>
        <p>设置主题</p>
      </template>
      <a-switch
        class="mr-4 o-h"
        size="small"
        v-model:checked="mode"
        @change="modeChange"
      >
        <template #checkedChildren>
          <i class="iconfont icon-heian"></i>
        </template>
        <template #unCheckedChildren>
          <i class="iconfont icon-taiyang"></i>
        </template>
      </a-switch>
    </a-tooltip>
    <a-tooltip>
      <template #title>
        <p>设置色彩</p>
      </template>
      <a-popover
        placement="leftBottom"
        trigger="click"
        overlayClassName="setting-color-picker"
      >
        <template #content>
          <ColorPicker
            isWidget
            v-model:pureColor="pureColor"
            @pureColorChange="pureColorChange"
          ></ColorPicker>
        </template>
        <span
          class="iconfont icon-color- mr-3 o-h"
          :style="{ color: pureColor }"
        ></span>
      </a-popover>
    </a-tooltip>
    <a-tooltip placement="bottom">
      <template #title>
        <p>帮助文档</p>
      </template>
      <span class="o-h iconfont icon-tishi mr-3"></span>
    </a-tooltip>
    <a-dropdown placement="bottom" trigger="click" destroyPopupOnHide>
      <div class="cr oh mr-3">
        <i class="iconfont icon-yonghuming"></i>
        <i class="ml-1">{{ userInfo.nicename }}</i>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <i class="iconfont icon-gerenzhongxin"></i>
            <router-link to="/perfile">个人中心</router-link>
          </a-menu-item>
          <a-menu-item>
            <i class="iconfont icon-tuichudenglu"></i>
            <a @click="logout">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-tooltip placement="bottom">
      <template #title>
        <p>代码仓库</p>
      </template>
      <a
        class="o-h iconfont icon-github mr-3"
        target="_blank"
        href="https://github.com/liuxiaodi01"
      ></a>
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import storge from "@/utils/storge.local";
import { ref } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import { ConfigProvider } from "ant-design-vue";

import "vue3-colorpicker/style.css";
defineProps(["layout"]);
const userInfo = storge.get("userInfo")
  ? JSON.parse(storge.get("userInfo"))
  : null;
const mode = ref(false);
const pureColor = ref<string>("#0052d9");
function logout() {
  storge.clear();
  router.replace("/login");
}
const emit = defineEmits(["setLayout"]);
function setLayout(layout: string) {
  emit("setLayout", layout);
}

function modeChange(checked: boolean) {
  mode.value = checked;
  if (mode.value) {
  } else {
  }
}
function pureColorChange(e: string) {
  console.log("pureColorChange", e);
  ConfigProvider.config({
    theme: {
      primaryColor: e,
    },
  });
}
</script>

<style scoped lang="scss">
span,
a {
  position: relative;
  height: 30px;
  min-width: 30px;
  line-height: 30px;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
}
.o-h {
  overflow: hidden;
}
.ml-1 {
  margin-left: 5px;
}
span:hover {
  background-color: var(--boder-leavl);
}
::v-deep(.ant-dropdown-menu-title-content) {
  display: flex;
  align-items: center;
  i {
    margin-right: 3px;
  }
}
::v-deep(.ant-dropdown-menu-item) {
  padding: 0px 10px;
}
.ant-switch-small {
  height: 20px;
  line-height: normal;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  > .ant-switch-inner > i {
    color: #000;
  }
}
.ant-switch-checked {
  background-color: #1e1e20;
  > .ant-switch-inner > i {
    color: #fff;
  }
}
::v-deep(.ant-switch-small .ant-switch-handle) {
  display: none;
}
</style>
<style lang="scss">
.setting-color-picker {
  .ant-popover-inner-content {
    padding: 0;
  }
}
</style>
