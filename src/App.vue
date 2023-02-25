<template>
  <a-config-provider>
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { onMounted } from "vue";
onMounted(() => {
  ConfigProvider.config({
    theme: {
      primaryColor: "#0052d9",
    },
  });
});
</script>

<style scoped></style>
