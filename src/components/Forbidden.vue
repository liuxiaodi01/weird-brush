<template>
  <div class="not-fount">
    <a-result :title="title" :sub-title="subtitle">
      <template #icon>
        <div class="result-bg-img">
          <svg
            v-if="type === 404"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="140"
            fill="none"
            data-v-1de511de=""
          >
            <g mask="url(#mask0_16559_24301)">
              <path fill="#97A3B7" d="M30 62h88v60H30V62Z"></path>
              <g filter="url(#filter0_f_16559_24301)">
                <path fill="#E3E6EB" d="M12 84h80v60H12z"></path>
              </g>
              <g filter="url(#filter1_f_16559_24301)">
                <path fill="#E3E6EB" d="M80 54h80v60H80z"></path>
              </g>
              <path
                stroke="#fff"
                stroke-width="2"
                d="m49 93-7 7 7 7M69 107l7-7-7-7M62.365 87.443l-6.73 25.114"
              ></path>
            </g>
            <path
              fill="currentcolor"
              d="M63 20h88v10H63V20Z"
              opacity=".9"
            ></path>
            <mask
              id="a"
              width="88"
              height="50"
              x="63"
              y="30"
              maskUnits="userSpaceOnUse"
              style="mask-type: alpha"
            >
              <path fill="currentcolor" d="M63 30h88v50H63V30Z"></path>
            </mask>
            <g mask="url(#a)">
              <path fill="currentcolor" d="M63 30h88v50H63V30Z"></path>
              <g filter="url(#filter2_f_16559_24301)" opacity=".3">
                <path fill="#97A3B7" d="M30 62h88v60H30V62Z"></path>
              </g>
            </g>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M105.25 41c6.765 0 12.25 5.484 12.25 12.25 0 2.433-.709 4.7-1.932 6.606L121 65.288 117.288 69l-5.432-5.432a12.193 12.193 0 0 1-6.606 1.932C98.484 65.5 93 60.016 93 53.25S98.484 41 105.25 41Zm0 3.5a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#fff"
              d="M68 24h2v2h-2zM74 24h2v2h-2zM80 24h66v2H80z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M153 56c-12.15 0-22 9.85-22 22 0 4.604 1.414 8.878 3.832 12.41L127 98.5l12.495-3.132A21.902 21.902 0 0 0 153 100c12.15 0 22-9.85 22-22s-9.85-22-22-22Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#000"
              d="M131 78h.5-.5Zm3.832 12.41.359.348.284-.293-.23-.337-.413.282ZM127 98.5l-.359-.348-1.219 1.259 1.7-.426L127 98.5Zm12.495-3.132.307-.394-.192-.15-.237.06.122.484ZM153 100v.5-.5Zm22-22h-.5.5Zm-43.5 0c0-11.874 9.626-21.5 21.5-21.5v-1c-12.426 0-22.5 10.074-22.5 22.5h1Zm3.745 12.128A21.395 21.395 0 0 1 131.5 78h-1c0 4.708 1.446 9.08 3.919 12.693l.826-.565Zm-.772-.066-7.832 8.09.718.696 7.832-8.09-.718-.696Zm-7.351 8.923 12.494-3.132-.243-.97-12.495 3.132.244.97ZM153 99.5c-4.976 0-9.555-1.69-13.198-4.526l-.615.789A22.407 22.407 0 0 0 153 100.5v-1ZM174.5 78c0 11.874-9.626 21.5-21.5 21.5v1c12.426 0 22.5-10.074 22.5-22.5h-1ZM153 56.5c11.874 0 21.5 9.626 21.5 21.5h1c0-12.426-10.074-22.5-22.5-22.5v1Z"
            ></path>
          </svg>
          <svg
            v-if="type === 403"
            data-v-1de511de=""
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="140"
            fill="none"
          >
            <g mask="url(#mask0_17_619)">
              <path fill="#97A3B7" d="M30 62h88v60H30V62Z"></path>
              <g filter="url(#filter0_f_17_619)">
                <path fill="#E3E6EB" d="M12 84h80v60H12z"></path>
              </g>
              <g filter="url(#filter1_f_17_619)">
                <path fill="#E3E6EB" d="M80 54h80v60H80z"></path>
              </g>
              <path
                fill="#fff"
                d="M46 105h32v2H46zM46 98h32v2H46zM46 88h16v2H46z"
              ></path>
            </g>
            <path
              fill="currentcolor"
              d="M63 20h88v10H63V20Z"
              opacity=".9"
            ></path>
            <mask
              id="a"
              width="88"
              height="50"
              x="63"
              y="30"
              maskUnits="userSpaceOnUse"
              style="mask-type: alpha"
            >
              <path fill="currentcolor" d="M63 30h88v50H63V30Z"></path>
            </mask>
            <g mask="url(#a)">
              <path fill="currentcolor" d="M63 30h88v50H63V30Z"></path>
              <g filter="url(#filter2_f_17_619)" opacity=".3">
                <path fill="#97A3B7" d="M30 62h88v60H30V62Z"></path>
              </g>
            </g>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="m95.686 40.858 10.278 10.277A4.03 4.03 0 0 1 107 51c2.213 0 4 1.786 4 4 0 .357-.047.704-.134 1.033l10.276 10.28-2.828 2.829-4.598-4.597A17.103 17.103 0 0 1 107 65.909c-7.273 0-13.484-4.524-16-10.91a17.29 17.29 0 0 1 5.696-7.472l-3.838-3.84 2.828-2.83ZM99 55a8.003 8.003 0 0 0 12.063 6.892l-3.029-3.026c-.33.087-.676.134-1.034.134-2.213 0-4-1.787-4-4 0-.358.047-.704.134-1.034l-3.027-3.027A7.96 7.96 0 0 0 99 54.999Zm8-10.91c7.273 0 13.484 4.524 16 10.91a17.273 17.273 0 0 1-4.166 6.177l-4.105-4.105a8.003 8.003 0 0 0-9.801-9.8l-2.55-2.551c1.47-.41 3.02-.63 4.622-.63Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#fff"
              d="M68 24h2v2h-2zM74 24h2v2h-2zM80 24h66v2H80z"
            ></path>
            <path
              fill="#fff"
              stroke="#000"
              d="m157 54 24.249 42h-48.498L157 54Z"
            ></path>
            <path stroke="#000" d="M157 89V71"></path>
          </svg>
        </div>
      </template>
      <template #extra>
        <a-button type="primary" style="width: 120px" @click="back"
          >返回首页</a-button
        >
      </template>
    </a-result>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
defineProps({
  type: {
    type: Number,
    default: 404,
  },
  subtitle: {
    type: String,
    default: "抱歉，您访问的页面不存在",
  },
  title: {
    type: String,
    default: "404 Not Found",
  },
});
function back() {
  router.replace("/login");
}
</script>

<style scoped>
.not-fount {
  text-align: center;
  padding-top: 150px;
}

.a-result__icon svg {
  height: 150px;
  width: 200px;
}
</style>
