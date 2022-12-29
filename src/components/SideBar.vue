<template>
    <div v-if="postingPage" class="sidebar-wrap">
      <div class="index-title">
        목차
      </div>
      <div class="index-text">
        ~~~~<br/>
        ~~~~~~
      </div>
    </div>
    <div v-else class="sidebar-wrap2">
      <div class="icon-wrap">
        <div><font-awesome-icon icon="fa-brands fa-github" /></div>
        <div><font-awesome-icon icon="fa-brands fa-instagram" /></div>
      </div>
    </div>
</template>
  
  <script lang="ts">
  
  export default {
    components: {
    },
    mixins: [
    ],
    props: {
      dummydata: Boolean 
    },
    data () {
      return {
        postingPage: false,
      }
    },
    computed: {
    },
    presets: {
    },
    watch: {
      $route(to, form) {
        if (to.path !== form.path){
          const nowHref = window.location.href;
          if(nowHref.includes('posting')) {
            this.postingPage = true;
          }else{this.postingPage = false;}
        }
      },
    },
    mounted () {
    },
    methods: {
    }
  }
  </script>

  <style scoped>
  .sidebar-wrap{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    min-width: 250px;
    height: 100%;
    background: rgb(32, 32, 36);
    padding: 10px 25px 10px 25px;
    z-index: 998;
    position: relative;
    text-align: left;
  }
  .index-title{
    margin-top: 20px;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .sidebar-wrap2{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    width: 70px;
    height: 100%;
    background: rgb(32, 32, 36);
    padding: 15px 5px 15px 5px;
    z-index: 998;
    position: relative;
  }
  .icon-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-wrap div{
    margin-top: 15px;
    font-size: 25px;
    cursor: pointer;
  }
  </style>
  