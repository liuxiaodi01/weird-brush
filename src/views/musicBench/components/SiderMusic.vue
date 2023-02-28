<template>
  <div class="side-wrapper">
    <div class="logo">
      <div></div>
    </div>
    <div class="container">
      <div v-for="item in menuList" :key="item.tag" class="mb-3">
        <p class="tag">{{ item.tag }}</p>
        <ul>
          <li
            v-for="it in item.list"
            :key="it.id"
            class="menu-item my-2 py-1"
            :class="{
              'active-menu': it.component === currentMenu,
            }"
            @click="$emit('clickMenu', it.component)"
          >
            <i class="iconfont px-2" :class="it.icon"></i>
            <span>{{ it.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["menuList", "currentMenu"]);
</script>

<style scoped lang="scss">
.side-wrapper {
  height: 100%;
  .logo {
    height: 80px;
    line-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      height: 50%;
      width: 80%;
      background-color: #eee;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      width: 80%;
    }
    .tag {
      color: #aeaeae;
    }
  }
  .menu-item {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #eee;
    }
  }
  .active-menu {
    position: relative;
    background-color: var(--ant-primary-1);
    transform: scaleY(1);
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      content: "";
      border-right: 3px solid var(--ant-primary-color);
      opacity: 1;
    }
    &:hover {
      background-color: var(--ant-primary-1);
    }
  }
}
</style>
