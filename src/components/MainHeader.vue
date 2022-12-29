<template>
    <div class="header-wrap">
    <div class="logo">
        <router-link to="/"><img alt="Domi Logo" class="domi-logo" src="../assets/domi_logo_color.svg" width="60"/></router-link>
    </div>
    <div class="nav-sec">
        <nav class="header-nav">
            <ul class="header-title">
                <!-- <li :class="{activeLink: linkHome}">
                    <router-link to="/">Home</router-link></li> -->
                <router-link to="/notepad">
                    <li :class="{activeLink: linkNote}">Note</li></router-link> 
                <router-link to="/list">
                    <li :class="{activeLink: linkPost}">Posting</li></router-link>
                <router-link to="/about">
                    <li :class="{activeLink: linkAbout}">About</li></router-link>
            </ul>
        </nav>
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
        linkHome: false,
        linkNote: false,
        linkPost: false,
        linkAbout: false,
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
                // this.linkHome = false;
                this.linkNote = false;
                this.linkPost = false;
                this.linkAbout = false;
                if(nowHref.includes('note')) this.linkNote = true;
                if(nowHref.includes('list') || nowHref.includes('posting')) this.linkPost = true;
                if(nowHref.includes('about')) this.linkAbout = true;
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
    .activeLink{
        background: linear-gradient(98.89deg, rgb(50, 50, 253) 0%, rgb(107, 176, 255) 100%)!important;
        color: #fff;
        border: 1px solid rgb(107, 176, 255)!important;
    }
    .header-wrap {
        width: 100%;
        height: 80px;
        z-index: 999;
        padding: 10px 30px 10px 30px;
        display: flex;
        align-items: center;
        box-shadow: 0 14px 28px rgba(255,255,255,0.02), 0 10px 10px rgba(255,255,255,0.03);
        background-image: url(../assets/header_bg.PNG);
        background-repeat: no-repeat;
        background-size: auto;
        justify-content: space-between;
    }
    .nav-sec{
        display: flex;
        align-items: center;
    }
    .header-nav{
        width: 100%;
    }
    .header-nav ul.sidebar-title li:first-child{
        margin-left: 0;
    }
    .header-nav ul{
        padding: 0;
        display: flex;
        flex-direction: row;
        margin: 0;
    }
    .header-nav ul.header-title li{
        cursor: pointer;
        font-size: 18px;
        margin-left: 20px;
        border: 1px solid #fff;
        padding: 8px 20px;
        border-radius: 20px;
        transition: background-color 0.3s ease-out 0s;
    }
    .header-nav ul.header-title li a {
        width: 100%;
        height: 100%;
    }
    .header-nav ul.header-title li:hover{
        background: #fff;
        color: rgb(32, 32, 36);
    }
    .header-nav ul.header-title li a.router-link-exact-active {
        color: linear-gradient(98.89deg, rgb(50, 50, 253) 0%, rgb(107, 176, 255) 100%);
    }
 
    ul.header-subtitle li{
        margin: 0;
        font-weight: 500;
    }
    ul.header-subtitle li a{
        font-size: 16px;
    }
    </style>
  