<template>
  <div class="App-wrap">
    <MainHeader />
    <div class="sec-wrap">
      <router-view/>
      <SideBar/>
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
      closeBar: false,
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
    openPanel () {
      this.closeBar = false;
    },
    closePanel () {
      this.closeBar = true;
    }
  }
}
</script>
<style scoped>
</style>
<style>
body {
  background: rgb(32, 32, 36);
  color: #fff;
  margin: 0 auto;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
.page-wrap{
  height: 100%;
  width: 100%;
  padding: 20px 40px 20px 40px;
  overflow-y: auto;
  text-align: center;
}
.page-wrap2{
  height: 100%;
  width: 100%;
  padding: 20px 40px 20px 40px;
  overflow-y: auto;
  text-align: center;
  display: flex;
  justify-content: center;
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
  width: calc(100% - 350px);
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
  .page-wrap-inner{
    width: calc(100% - 170px);
  }
}
@media (max-width: 880px) {
  .sidebar-wrap {
    display: none;
  }
}
@media (max-width: 650px) {
  .page-wrap-inner{
    width: calc(100%);
  }
  .posting-title{
    font-size: 14px;
  }
}
@media (max-width: 470px) {
  .sidebar-wrap2 {
    display: none;
  }
  .posting-title{
    font-size: 11px;
  }
}

</style>
