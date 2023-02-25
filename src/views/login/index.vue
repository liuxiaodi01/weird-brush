<template>
  <div class="login-wrapper text-center">
    <a-button type="primary" @click="loginBtn" :loading="loading"
      >登录</a-button
    >
  </div>
</template>

<script setup lang="ts">
import { login } from "@/api/user";
import router from "@/router";
import storgeLocal from "@/utils/storge.local";
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";
interface LoginFormData {
  account: string;
  password: string;
}
const loginFormData = reactive<LoginFormData>({
  account: "admin",
  password: "admin",
});
const loading = ref<boolean>(false);
async function loginBtn() {
  loading.value = true;
  const { token, userInfo }: any = await login(loginFormData);
  storgeLocal.set("auth-token", token);
  storgeLocal.set("userInfo", userInfo);
  message.success("登录成功");
  router.push({ path: "/" });
  loading.value = false;
}
</script>

<style scoped>
.login-wrapper {
  position: relative;
  height: 100%;
}
</style>
