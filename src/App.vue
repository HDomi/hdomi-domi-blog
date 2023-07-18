<template>
  <div class="App-wrap" ref="main">
    <MainHeader @changePanelState="changePanelState" />
    <div class="sec-wrap scrollBar">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <router-view />
      <SideBar :panelState="panelState" />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import MainHeader from "@/components/MainHeader.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    MainHeader,
    Footer,
    SideBar,
  },
  mixins: [],
  props: {},
  data() {
    return {
      panelState: false,
    };
  },
  computed: {},
  presets: {},
  watch: {},
  mounted() {},
  methods: {
    changePanelState(state: any) {
      this.panelState = state;
    },
  },
};
</script>
<style lang="scss" scoped>
// n is number of stars required
@function multiple-box-shadow($n) {
  $value: "#{random(6000)}px #{random(6000)}px rgba(255, 255, 255, 0.35)";

  @for $i from 2 through $n {
    $value: "#{$value} , #{random(6000)}px #{random(6000)}px rgba(255, 255, 255, 0.35)";
  }

  @return unquote($value);
}

$shadows-small: multiple-box-shadow(2200);
$shadows-medium: multiple-box-shadow(1600);
$shadows-big: multiple-box-shadow(1000);

#stars {
  position: fixed;
  z-index: 1;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 150s linear infinite;

  &:after {
    content: " ";
    position: fixed;
    z-index: 1;
    top: 2000px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: transparent;
    box-shadow: $shadows-small;
  }
}

#stars2 {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 700s linear infinite;

  &:after {
    content: " ";
    position: fixed;
    z-index: 1;
    top: 2000px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: transparent;
    box-shadow: $shadows-medium;
  }
}

#stars3 {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 50s linear infinite;

  &:after {
    content: " ";
    position: fixed;
    z-index: 1;
    top: 2000px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: transparent;
    box-shadow: $shadows-big;
  }
}

@keyframes animStar {
  from {
    transform: translateY(-2000px);
  }

  to {
    transform: translateY(0px);
  }
}
</style>
<style>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css");
body {
  background: rgb(32, 32, 36);
  color: #fff;
  margin: 0 auto;
  padding: 0;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
div {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #fff;
}
li {
  list-style: none;
}
.tryAngle {
  font-size: 13px;
  margin-left: 7px;
  transition: 0.3s;
  display: inline-block;
  vertical-align: 2px;
}
.revert {
  transform: scaleY(-1) !important;
}
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 998;
}
.loading {
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 9999px;
}
.v-fade {
  background-color: rgb(107, 176, 255) !important;
}
.relative {
  position: relative;
}
.page-wrap {
  height: 100%;
  width: 100%;
  padding: 20px 40px 20px 40px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.page-tit-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.scrollBar::-webkit-scrollbar {
  width: 8px; /* 스크롤바의 너비 */
}
.scrollBar::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #5d5d5d; /* 스크롤바의 색상 */
  border-radius: 10px;
}
.scrollBar::-webkit-scrollbar-track {
  background: rgba(91, 91, 91, 0.1); /*스크롤바 뒷 배경 색상*/
}
.page-wrap-inner {
  padding: 0 15px 0 15px;
  width: calc(100% - 450px);
}

.App-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sec-wrap {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}
.moveTop {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 999;
  width: 50px;
  height: 50px;
  background: rgb(75, 75, 78);
  border-radius: 50%;
  line-height: 50px;
}
.main-title {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
.page-tit-wrap {
  margin-top: 10px;
  margin-bottom: 30px;
}
.cutBar {
  height: 1px;
  width: 100%;
  position: relative;
  margin: 10px 0 50px 0;
}
.cutBar::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 97%;
  height: 2px;
  background: linear-gradient(
    89.99deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.25) 51.56%,
    rgba(255, 255, 255, 0) 100%
  );
}
.posting-wrap pre {
  text-align: left;
  overflow-x: auto;
  margin: 15px 0 25px;
  padding: 15px;
  background-color: #222933;
}
@media (max-width: 1300px) {
}
@media (max-width: 1200px) {
  .page-wrap-inner {
    width: calc(100% - 330px);
  }
  .outLiner {
    display: none;
  }
}
@media (max-width: 900px) {
  .page-wrap-inner {
    width: 100%;
  }
  .page-wrap {
    padding: 10px;
  }
  .posting-title {
    font-size: 14px;
  }
}
@media (max-width: 470px) {
  .sidebar-wrap {
    display: none;
  }
  .posting-title {
    font-size: 11px;
  }
}
</style>
