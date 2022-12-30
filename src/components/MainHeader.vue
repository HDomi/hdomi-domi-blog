<template>
    <div class="header-wrap">
    <div class="logo">
        <router-link to="/"><img alt="Domi Logo" class="domi-logo" src="../assets/domi_logo_color.svg"/></router-link>
    </div>
    <div class="nav-sec">
        <nav class="header-nav">
            <ul class="header-title">
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
        background: linear-gradient(165deg, rgb(126, 126, 254) 0%, rgb(147, 194, 249) 100%)!important;
        color: #fff;
        border: 1px solid rgb(107, 176, 255)!important;
        transition: background-color 0.3s ease-out 0s;
    }
    .activeLink:hover{
        background: linear-gradient(165deg, rgb(147, 194, 249) 0%, rgb(126, 126, 254) 100%)!important;
        color: #fff!important;
    }
    .domi-logo{
        width: 60px;
    }
    .header-wrap {
        width: 100%;
        height: 80px;
        z-index: 999;
        padding: 10px 30px 10px 30px;
        display: flex;
        align-items: center;
        box-shadow: 0 14px 28px rgba(255,255,255,0.01), 0 10px 10px rgba(255,255,255,0.02);
        background: rgb(32, 32, 36);
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
 
    ul.header-subtitle li{
        margin: 0;
        font-weight: 500;
    }
    ul.header-subtitle li a{
        font-size: 16px;
    }
    @media (max-width: 470px) {
        .header-wrap{
            padding: 8px 10px 8px 10px;
        }
        .domi-logo{
            width: 35px;
        }
        .header-nav ul.header-title li{
            font-size: 16px;
            border: none;
            margin-left: 8px;
            padding: 4px 8px;
        }
        .header-nav ul.header-title li:hover{
            background: none;
            color: #fff;
        }
        .activeLink{
            background: none!important;
            border: none!important;
            color: rgb(64, 152, 252)!important;
        }
    }
    </style>
  