<template>
    <nav class="outLiner scrollBar">
      <ul>
        <li v-for="( title, i ) in outlines" :key="`outline${i}`" >
            {{ title.numbering }}. {{ title.text }}
        </li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      outlines: {
        type: new Array,
        default: () => []
      }
    },
    data() {
      return {
        activeIndex: -1,
      }
    },
    computed: {
    },
    created(){
      
    },
    mounted() {
    },
    methods: {
    }
  }
  </script>
  
  <style scoped>
  .outLiner {
    overflow-y: auto;
    position: fixed;
    top: 100px;
    right: 50px;
    height: 300px;
    max-width: 250px;
    font-size: 13px;
    text-align: left;
    }
    .outLiner li{
      margin-top: 10px;
    }
    .outLiner li:first-child{
      margin-top: 0px;
    }
  </style>