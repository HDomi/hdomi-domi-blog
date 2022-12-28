<template>
    <div class="header-wrap">
    <div class="logo">
        <img alt="Domi Logo" class="domi-logo" src="../assets/domi_logo_w.svg" width="35"/>
    </div>
    <div class="nav-sec">
        <nav class="header-nav">
            <ul class="header-title">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/notepad">Note</router-link></li>
                <li><router-link to="/list">Posting</router-link></li>
                <li><router-link to="/about">About</router-link></li>
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
    .header-wrap {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #fff;
        z-index: 999;
        padding: 10px 30px 10px 30px;
        display: flex;
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
    }
    .header-nav a.router-link-exact-active {
        color: #42b983;
        font-weight: 700;
    }
    ul.header-subtitle li{
        margin: 0;
        font-weight: 500;
    }
    ul.header-subtitle li a{
        font-size: 16px;
    }
    </style>
  