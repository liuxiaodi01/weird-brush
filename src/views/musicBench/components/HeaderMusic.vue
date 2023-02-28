<template>
  <div class="d-flex jc-between w-100 px-4">
    <div class="head-left d-flex ai-center">
      <i class="iconfont icon-jiantou_shangyiye_o" title="后退"></i>
      <i class="iconfont icon-jiantou_xiayiye_o" title="前进"></i>
      <a-input
        class="mr-3"
        style="height: 30px; border-radius: 30px"
        placeholder="搜索音乐"
      ></a-input>
      <i class="iconfont icon-kefu" title="客服"></i>
      <i class="iconfont icon-31liebiao" title="主菜单"></i>
    </div>
    <div class="head-right">
      <a-avatar :size="30" class="cr">
        <template #icon>
          <i class="iconfont icon-yonghuming"></i>
        </template>
      </a-avatar>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.head-left {
  i {
    margin-right: 15px;
    &:hover {
      color: var(--ant-primary-4);
    }
  }
}
</style>
