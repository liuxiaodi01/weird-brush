<template>
  <div class="swiper" :style="{ height }">
    <div class="swiper-prev" v-show="list.length > 0">
      <i
        class="iconfont icon-jiantou_shangyiye_o"
        :class="{ disable: active === 0 }"
        @click="active > 0 && active--"
      ></i>
    </div>
    <div class="swiper-container">
      <div
        :style="{ height }"
        v-for="(it, index) in list"
        :class="{ 'swiper-active': index === active }"
      >
        <slot :data="it"></slot>
      </div>
    </div>
    <div class="swiper-next" v-show="list.length > 0">
      <i
        class="iconfont icon-jiantou_xiayiye_o"
        @click="list.length - 1 != active && active++"
        :class="{ disable: list.length - 1 == active }"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps(["list", "height"]);
const active = ref(0);
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  display: flex;
  &:hover .swiper-prev,
  &:hover .swiper-next {
    visibility: visible;
  }
}
.swiper-prev,
.swiper-next {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;
  transition: all 0.2s;
  visibility: hidden;

  i {
    font-size: 40px !important;
    cursor: pointer;
    color: var(--ant-primary-color);
  }
  .disable {
    color: #ccc;
    cursor: no-drop;
  }
}
.swiper-container {
  position: relative;
  flex: 1;
  height: 100%;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .swiper-active {
    z-index: 11;
    background-color: var(--global-bg);
  }
}
</style>
