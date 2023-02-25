<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#' + icon"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps(["icon"]);
</script>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
