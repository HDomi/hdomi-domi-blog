<template>
  <div class="App-wrap" ref="main">
    <MainHeader />
    <div class="sec-wrap stars">
      <div class="small"></div>
      <div class="medium"></div>
      <div class="big"></div>
      <router-view/>
      <SideBar/>
      <!-- <div class="moveTop">Top</div> -->
    </div>
  </div>
</template>
<script lang="ts">
import SideBar from '@/components/SideBar.vue';
import MainHeader from '@/components/MainHeader.vue';
export default {
  components: {
    MainHeader,
    SideBar
  },
  mixins: [
  ],
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  presets: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
<style>
@import url(./assets/styles/stars.css);
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');
body {
  background: rgb(32, 32, 36);
  color: #fff;
  margin: 0 auto;
  padding: 0;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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
#app{
  width: 100%;
  height: 100%;
}
div{
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #fff;
}
li{
  list-style: none;
}
.loading-container{
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
.v-fade{
  background-color: rgb(107, 176, 255)!important;
}
.relative{
  position: relative;
}
.page-wrap{
  height: 100%;
  width: 100%;
  padding: 20px 40px 20px 40px;
  overflow-y: auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
.page-tit-wrap{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.scrollBar::-webkit-scrollbar {
  width: 8px;  /* 스크롤바의 너비 */
}
.scrollBar::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #5d5d5d; /* 스크롤바의 색상 */
  border-radius: 10px;
}
.scrollBar::-webkit-scrollbar-track {
  background: rgba(91, 91, 91, 0.1);  /*스크롤바 뒷 배경 색상*/
}
.page-wrap-inner{
  overflow:auto;
  margin-bottom: 70px;
  padding: 0 15px 0 15px;
  width: calc(100% - 450px);
}
.page-wrap-inner::-webkit-scrollbar {
  width: 8px;  /* 스크롤바의 너비 */
}
.page-wrap-inner::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #5d5d5d; /* 스크롤바의 색상 */
  border-radius: 10px;
}
.page-wrap-inner::-webkit-scrollbar-track {
  background: rgba(91, 91, 91, 0.1);  /*스크롤바 뒷 배경 색상*/
}
.App-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sec-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.moveTop{
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
.main-title{
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
}
.cutBar{
  height: 1px;
  width: 100%;
  position: relative;
  margin: 10px 0 50px 0;
}
.cutBar::before{
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 97%;
  height: 2px;
  background: linear-gradient(89.99deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 51.56%, rgba(255, 255, 255, 0) 100%);
}
.posting-wrap pre{
  text-align: left;
  overflow-x: auto;
  margin: 15px 0 25px;
  padding: 15px;
  background-color: #222933;
}
@media (max-width: 1300px) {
  
}
@media (max-width: 1200px) {
  .page-wrap-inner{
    width: calc(100% - 330px);
  }
  .outLiner{
    display: none;
  }
}
@media (max-width: 900px) {
  .page-wrap-inner{
    width: 100%;
  }
  .page-wrap{
    padding: 10px;
  }
  .posting-title{
    font-size: 14px;
  }
}
@media (max-width: 470px) {
  .sidebar-wrap {
    display: none;
  }
  .posting-title{
    font-size: 11px;
  }
}

</style>
