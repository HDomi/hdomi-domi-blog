<template>
    <div class="sidebar-wrap" 
         :class="{closebar: closeBar}">
      <div class="close-btn"
           @click="closePanel"
      >X</div>
      목차
    </div>
</template>
  
  <script lang="ts">
  
  export default {
    components: {
    },
    mixins: [
    ],
    props: {
      closeBar: Boolean 
    },
    data () {
      return {
        clickBlog: true,
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
      closePanel () {
        this.$emit('closePanel');
      }
    }
  }
  </script>

  <style scoped>
  .sidebar-wrap{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    min-width: 300px;
    height: 100%;
    background: #3b3b3b;
    padding: 10px 25px 10px 25px;
    position: relative;
  }
  .close-btn{
    position: absolute;
    right: 25px;
    top: 15px;
    cursor: pointer;
  }
  .closebar{
    display: none!important;
  }
  .domi-logo{
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .sidebar-nav{
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .sidebar-nav ul.sidebar-title li:first-child{
    margin-top: 0;
  }
  .sidebar-nav ul{
    padding: 0;
  }
  .sidebar-nav ul.sidebar-title li{
    margin-top: 15px;
    cursor: pointer;
    font-size: 18px;
  }
  .sidebar-nav a.router-link-exact-active {
    color: #42b983;
    font-weight: 700;
  }
  ul.sidebar-subtitle{
    margin-top: 15px
  }
  ul.sidebar-subtitle li{
    margin: 0;
    padding-left: 15px;
    font-weight: 500;
    margin-top: 10px!important;
  }
  ul.sidebar-subtitle li a{
    font-size: 16px;
  }
  </style>
  