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
    border-left: 1px solid #fff;
    background: #272727;
    padding: 10px 25px 10px 25px;
    z-index: 998;
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
  </style>
  