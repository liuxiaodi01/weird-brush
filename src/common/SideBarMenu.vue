<template>
  <div class="side-menu">
    <CustomMenu :menu="menu"></CustomMenu>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { usePermissionStore } from "@/stores/permission";
import CustomMenu from "@/components/CustomMenu.vue";
const store = usePermissionStore();
const menu = computed(() => store.menuList);
</script>

<style scoped>
.side-menu {
  margin: 15px;
}
</style>
