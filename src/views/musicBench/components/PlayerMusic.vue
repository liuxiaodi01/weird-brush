<template>
  <div class="players-wrapper d-flex ai-center">
    <a-slider
      class="progress-bar"
      v-model:value="progress"
      :tooltipVisible="false"
      :min="0"
      :max="100"
      :step="0.01"
      @change="progressChange"
    />
    <div class="d-flex ai-center" style="height: 100%">
      <div class="music-logo" title="展开歌曲详情页" @click="openMusic">
        <div class="musci-mark d-flex ai-center jc-center">
          <i class="iconfont icon-shangjiantou"></i>
        </div>
        <img src="https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img/罗翔.jpg" />
      </div>
      <div class="music-simple-info">
        <p>
          <span>姑娘在远方</span><span class="info-cname">&nbsp;-&nbsp;</span
          ><span class="info-cname">柯柯柯啊</span>
        </p>
        <p>
          <a-tooltip title="喜欢">
            <i class="iconfont icon-woxihuan-"></i>
          </a-tooltip>
          <a-tooltip title="下载">
            <i class="iconfont icon-xiazai"></i>
          </a-tooltip>
          <a-tooltip title="更多">
            <i class="iconfont icon-gengduo"></i>
          </a-tooltip>
          <a-tooltip title="留言">
            <i class="iconfont icon-liuyanjianyi"></i>
          </a-tooltip>
        </p>
      </div>
    </div>
    <div class="controller">
      <a-tooltip title="模式">
        <i class="iconfont icon-24gl-playlist2"> </i>
      </a-tooltip>
      <a-tooltip title="上一首">
        <i class="iconfont icon-shangyishou_huaban"> </i>
      </a-tooltip>
      <a-tooltip title="播放/暂停">
        <i
          class="iconfont icon-bofang"
          v-if="playState === false"
          @click="playMusic"
        >
        </i>
        <i class="iconfont icon-24gf-pauseCircle" v-else @click="pauseMusic">
        </i>
      </a-tooltip>
      <a-tooltip title="下一首">
        <i class="iconfont icon-xiayishou_huaban"> </i>
      </a-tooltip>
      <a-tooltip title="音量">
        <i
          class="iconfont icon-shengyinjingyin"
          v-if="sound == 0"
          @click="setVoice(1)"
        >
        </i>
        <i class="iconfont icon-shengyinkai" v-else @click="setVoice(0)"> </i>
      </a-tooltip>
    </div>
    <div>
      <span
        >{{ transTime(audioCurrent) }} / {{ transTime(audioDuration) }}</span
      >
      <span class="mx-3">词</span>
      <a-tooltip title="播放队列">
        <i class="iconfont icon-24gf-playlistMusic3"></i>
      </a-tooltip>
    </div>
  </div>
  <Transition name="music">
    <div class="music-info-mark" v-if="showMusicMark">
      <div class="music-info-mark-bg"></div>
      <div class="music-info-mark-container">
        <div class="music-info-mark-head d-flex ai-center jc-between">
          <i
            class="iconfont icon-jiantouxia"
            title="收起展示页"
            @click="showMusicMark = false"
          ></i>
        </div>
        <div class="music-info-mark-main">
          <div class="music-photo">
            <img
              src="https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img/罗翔.jpg"
            />
          </div>
          <div class="singsong text-center">
            <h2>姑娘在远方</h2>
            <p>歌手：柯柯柯啊</p>
            <div ref="lrcContainer" class="lrc-container">
              <ul class="song-m" ref="lrcList">
                <li
                  v-for="(item, index) in lyricData"
                  :key="index"
                  style="font-size: 16px"
                  :class="{
                    'ly-active':
                      item.time ===
                      (lyricData[lightSong] ? lyricData[lightSong].time : -1),
                  }"
                >
                  {{ item.words }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="music-info-mark-footer">
          <div class="players-wrapper d-flex ai-center largeScreen">
            <a-slider
              class="progress-bar"
              v-model:value="progress"
              :tooltipVisible="false"
              @change="progressChange"
            />
            <div class="d-flex ai-center" style="height: 100%">
              <div class="music-simple-info">
                <p>
                  <a-tooltip title="喜欢">
                    <i class="iconfont icon-woxihuan-"></i>
                  </a-tooltip>
                  <a-tooltip title="下载">
                    <i class="iconfont icon-xiazai"></i>
                  </a-tooltip>
                  <a-tooltip title="更多">
                    <i class="iconfont icon-gengduo"></i>
                  </a-tooltip>
                  <a-tooltip title="留言">
                    <i class="iconfont icon-liuyanjianyi"></i>
                  </a-tooltip>
                </p>
              </div>
            </div>
            <div class="controller">
              <a-tooltip title="模式">
                <i class="iconfont icon-24gl-playlist2"> </i>
              </a-tooltip>
              <a-tooltip title="上一首">
                <i class="iconfont icon-shangyishou_huaban"> </i>
              </a-tooltip>
              <a-tooltip title="播放/暂停">
                <i
                  class="iconfont icon-bofang"
                  v-if="playState === false"
                  @click="playMusic"
                >
                </i>
                <i
                  class="iconfont icon-24gf-pauseCircle"
                  v-else
                  @click="pauseMusic"
                >
                </i>
              </a-tooltip>
              <a-tooltip title="下一首">
                <i class="iconfont icon-xiayishou_huaban"> </i>
              </a-tooltip>
              <a-tooltip title="音量">
                <i
                  class="iconfont icon-shengyinjingyin"
                  v-if="sound == 0"
                  @click="setVoice(1)"
                >
                </i>
                <i
                  class="iconfont icon-shengyinkai"
                  v-else
                  @click="setVoice(0)"
                >
                </i>
              </a-tooltip>
            </div>
            <div>
              <span
                >{{ transTime(audioCurrent) }} /
                {{ transTime(audioDuration) }}</span
              >
              <span class="mx-3">词</span>
              <a-tooltip title="播放队列">
                <i class="iconfont icon-24gf-playlistMusic3"></i>
              </a-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <audio src="/gl.mp3" ref="audioRef"></audio>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const showMusicMark = ref<boolean>(false);
const progress = ref<number>(0);
const lyricData = ref<any>();
const sound = ref<number>(1);
const audioRef = ref<HTMLAudioElement>();
const audioDuration = ref<number>(0);
const audioCurrent = ref<number>(0);
const playState = ref<boolean>(false); // 0 未播放 1 播放中
const audioTimer = ref(); // 时间
const lrcContainer = ref();
const lrcList = ref();
const lightSong = ref(-1); // 高亮
onMounted(async () => {
  const {
    lrc: { lyric },
  } = await import("@/assets/姑娘在远方.json");
  const lyricList = parseLrc(lyric);
  lyricData.value = lyricList;
  audioRef.value?.addEventListener("loadeddata", () => {
    audioDuration.value = audioRef.value?.duration || 0;
  });
});
function openMusic() {
  showMusicMark.value = true;
  audioRef.value?.addEventListener("timeupdate", setOffset);
}
function setOffset() {
  const containerHeight = lrcContainer.value.clientHeight;
  const maxOffset = lrcList.value.clientHeight - containerHeight;
  const liHeight =
    lrcList.value.children[0] && lrcList.value.children[0].clientHeight;
  const lightCurrent: any = findIndex(lyricData.value);
  lightSong.value = lightCurrent;
  console.log(lightCurrent, "lightCurrentlightCurrent");

  let offset = liHeight * lightCurrent + liHeight / 2 - containerHeight / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxOffset) {
    offset = maxOffset;
  }
  lrcList.value.style.transform = `translateY(-${offset}px)`;
}

// 解析歌词
function parseLrc(lrc: string) {
  var lines = lrc.split("\n");
  var result = []; // 歌词对象数组
  for (var i = 0; i < lines.length; i++) {
    var str = lines[i];
    var parts = str.split("]");
    var timeStr = parts[0].substring(1);
    var obj = {
      time: parseTime(timeStr),
      words: parts[1],
    };
    result.push(obj);
  }
  return result;
}
// 将时间字符串转位数字（秒）
function parseTime(timeStr: string) {
  var parts = timeStr.split(":");
  return +parts[0] * 60 + +parts[1];
}

// 音频播放时间换算
const transTime = (value: number) => {
  let time = "";
  let h = parseInt(String(value / 3600));
  value %= 3600;
  let m = parseInt(String(value / 60));
  let s = parseInt(String(value % 60));
  if (h > 0) {
    time = formatTime(h + ":" + m + ":" + s);
  } else {
    time = formatTime(m + ":" + s);
  }
  return time;
};
// 格式化时间显示，补零对齐
const formatTime = (value: string) => {
  let time = "";
  let s = value.split(":");
  let i = 0;
  for (; i < s.length - 1; i++) {
    time += s[i].length == 1 ? "0" + s[i] : s[i];
    time += ":";
  }
  time += s[i].length == 1 ? "0" + s[i] : s[i];
  return time;
};
// 播放
function playMusic() {
  audioRef.value?.play();
  playState.value = true;
  if (progress.value === 100) audioCurrent.value = 0;
  audioTimer.value = setInterval(() => {
    audioCurrent.value = audioRef.value?.currentTime as number;
    progress.value = (audioCurrent.value / audioDuration.value) * 100;
    if (progress.value === 100) pauseMusic();
  }, 1000);
}
// 暂停
function pauseMusic() {
  audioRef.value?.pause();
  playState.value = false;
  clearInterval(audioTimer.value);
}
function setVoice(voice: number) {
  sound.value = voice;
  audioRef.value && (audioRef.value.volume = voice);
}
function progressChange(value: number) {
  if (audioRef.value) {
    audioRef.value.currentTime = (value / 100) * audioDuration.value;
    // setOffset();
  }
}
function findIndex(lrcData: any[]) {
  // 播放器当前时间
  for (var i = 0; i < lrcData.length; i++) {
    if (audioCurrent.value < lrcData[i].time) {
      return i - 1;
    }
  }
  // 找遍了都没找到（说明播放到最后一句）
  return lrcData.length - 1;
}
</script>

<style scoped lang="scss">
.players-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  .controller {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.music-simple-info {
  height: 45px;
  margin-left: 10px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  .info-cname {
    opacity: 0.7;
  }
  i {
    margin-right: 15px;
    &:hover {
      color: var(--ant-primary-color);
      cursor: pointer;
    }
  }
}
.music-logo {
  height: 45px;
  width: 45px;
  position: relative;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  .musci-mark {
    position: absolute;

    opacity: 0;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s;
  }
  &:hover .musci-mark {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    i {
      color: #fff;
    }
  }
}
.progress-bar {
  position: absolute;
  width: calc(100% - 15px);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
}
.largeScreen {
  i,
  span,
  p,
  div {
    color: #fff;
  }
}
// 弹框

.music-info-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 111111;
  .music-info-mark-container {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
  }
  .music-info-mark-bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img/罗翔.jpg")
      no-repeat;
    background-size: cover;
    filter: blur(20px);
    z-index: 1;
  }
  .music-info-mark-head {
    height: 50px;
    i {
      font-size: 20px !important;
      margin: 0 15px;
      cursor: pointer;
      &:hover {
        color: var(--ant-primary-color);
      }
    }
  }
  .music-info-mark-main {
    height: calc(100% - 50px - 70px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    > div {
      height: 500px;
      h2,
      p {
        color: #fff;
      }
      p {
        font-size: 12px;
      }
      width: 500px;
      color: #fff;
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .music-info-mark-footer {
    height: 70px;
    padding: 0 50px;
  }
  .lrc-container {
    margin-top: 15px;
    height: calc(100% - 77px);
    overflow: hidden;
  }
  .song-m {
    // height: 100%;
    width: 100%;
  }
}
.music-enter-active,
.music-leave-active {
  transition: opacity 0.5s ease;
}
.music-enter-from,
.music-leave-to {
  opacity: 0;
}

.icon-bofang,
.icon-24gf-pauseCircle {
  font-size: 40px !important;
  cursor: pointer;
  color: var(--ant-primary-4) !important;
}
.icon-shangyishou_huaban,
.icon-xiayishou_huaban {
  font-size: 24px !important;
  cursor: pointer;
  margin: 0 12px;
}
.icon-shengyinkai,
.icon-shengyinjingyin {
  cursor: pointer;
  font-size: 18px !important;
}
.ly-active {
  color: var(--ant-primary-4);
}
</style>
