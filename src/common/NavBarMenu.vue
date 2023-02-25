<template>
  <CustomMenu :menu="menu" mode="horizontal"></CustomMenu>
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
  /* margin: 0 15px; */
}
</style>
