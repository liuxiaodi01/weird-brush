<!-- 音乐馆 -->
<template>
  <div class="music-hall">
    <h2 style="padding-left: 35px">音乐馆</h2>
    <a-tabs v-model:activeKey="currentMusic">
      <a-tab-pane :key="index" v-for="(item, index) in musicList" :tab="item">
        <section v-if="item === '精选'" class="w-100">
          <!-- 精选展示区 -->
          <swiper :list="slides" height="180px">
            <template v-slot="{ data }">
              <div class="swiper-item">
                <div v-for="item in data">
                  <img :src="item" alt="" />
                </div>
              </div>
            </template>
          </swiper>
          <!-- 官方歌单 -->
          <div>
            <PageTitle title="官方歌单" sub="官方甄选订阅歌单">
              <swiper :list="officialSongList" height="200px">
                <template v-slot="{ data }">
                  <div class="swiper-item2">
                    <div v-for="item in data">
                      <img :src="item" alt="" />

                      <div class="swiper-play">
                        <i class="iconfont icon-bofang"></i>
                        <span>热门DJ：电竞女孩炸街必备</span>
                      </div>
                    </div>
                  </div>
                </template>
              </swiper>
            </PageTitle>
            <PageTitle title="推荐有声电台">
              <swiper
                :list="[officialSongList[1], officialSongList[0]]"
                height="200px"
              >
                <template v-slot="{ data }">
                  <div class="swiper-item2">
                    <div v-for="item in data">
                      <img :src="item" alt="" />
                      <div class="swiper-play">
                        <i class="iconfont icon-bofang"></i>
                        <span>很遗憾吧，最后连一张合照都没有</span>
                      </div>
                    </div>
                  </div>
                </template>
              </swiper>
            </PageTitle>
          </div>
        </section>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import swiper from "@/components/Swiper.vue";
import PageTitle from "@/components/PageTitle.vue";
const musicList = [
  "精选",
  "有声",
  "排行",
  "歌手",
  "分类",
  "数字专辑",
  "手机专享",
];
const currentMusic = ref(0);
const slides = [
  [
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//music_bg1.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//music_bg2.jpg",
  ],
  [
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//music_bg3.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//music_bg4.jpg",
  ],
];
const officialSongList = [
  [
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-14.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-12.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-11.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-10.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-9.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-13.jpg",
  ],
  [
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-5.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-6.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-4.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-8.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-2.jpg",
    "https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img//lr-1.jpg",
  ],
];
</script>

<style scoped lang="scss">
.music-hall {
  width: 100%;
  height: 100%;
}
.swiper-item {
  height: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    width: 49%;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
}
.swiper-item2 {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 7px;
    .swiper-play {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;

      .icon-bofang {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px !important;
        color: #f3f3f3;
      }
      span {
        position: absolute;
        bottom: 5px;
        width: 100%;
        left: 0;
        color: #f3f3f3;
        font-size: 12px;
      }
    }
    &:hover .swiper-play {
      display: block;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      transition: all 0.5s;
    }
  }
}
</style>
