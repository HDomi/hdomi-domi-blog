<template>
    <div class="page-wrap scrollBar">
      <div class="page-wrap-inner">
        <div class="page-tit-wrap">
            <div class="posting-title"><h1>aa</h1></div>
        </div>
        <component :is="loader"></component>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineAsyncComponent } from 'vue'
  export default {
    components: {
    },
    mixins: [
    ],
    props: {
      msg: String,
    },
    data () {
      return {
      }
    },
    computed: {
        loader() {
            const labItem =  String(this.$route.query.itemName);
            return () => import(`../laboratory/${labItem}.vue`)
        },
    },
    presets: {
    },
    watch: {
    },
    created() {
    },
    mounted () {
    },
    methods: {
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  