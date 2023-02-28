<template>
  <section class="page-title my-3">
    <div class="head d-flex ai-center mx-5">
      <h3>{{ title }}</h3>
      <span class="sub-title ml-3" v-if="sub ? true : false">
        <slot name="sub">{{ sub }}</slot>
      </span>
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps(["title", "sub"]);
</script>

<style scoped>
.sub-title {
  opacity: 0.7;
}
</style>
