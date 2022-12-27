<template>
  <div class="App-wrap">
    <div class="close-btn"
         @click="openPanel"
    >></div>
    <SideBar
    :closeBar="closeBar" 
    @closePanel="closePanel"
    />
    <router-view/>
  </div>
</template>
<script lang="ts">
import SideBar from '@/components/SideBar.vue';
export default {
  components: {
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
  .close-btn{
    position: absolute;
    left: 15px;
    top: 15px;
    cursor: pointer;
  }
</style>
<style>
body {
  background: #272727;
  color: #fff;
  margin: 0 auto;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
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
.page-wrap::-webkit-scrollbar {
  width: 8px;  /* 스크롤바의 너비 */
}

.page-wrap::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #5d5d5d; /* 스크롤바의 색상 */
  
  border-radius: 10px;
}

.page-wrap::-webkit-scrollbar-track {
  background: rgba(91, 91, 91, 0.1);  /*스크롤바 뒷 배경 색상*/
}
.App-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cutBar{
  height: 1px;
  width: 100%;
  background: #fff;
  margin: 10px 0 50px 0;
}
</style>
