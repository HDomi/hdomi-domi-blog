<template>
    <div class="page-wrap">
      <h1>블로그리스트</h1>
      <div class="cutBar"></div>
      <div class="posting-item-wrap">
        <div v-for="(post, i) in postings" :key="`post${i}`" @click="goPost(post.name, post.title)"
             class="posting-item">
          <div class="pt-item-inner">
            {{ post.title }}
            {{ post.description }}
            {{ post.date }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import posts from '@/utils/posts'
  export default {
    components: {
    },
    mixins: [
    ],
    props: {
    },
    data () {
      return {
        mdText: '',
        postings: [
          {
            name: "",
            title: "",
            date: "",
            description: "",
          },
        ],
      }
    },
    computed: {
    },
    presets: {
    },
    watch: {
    },
    created() {
      this.postings = JSON.parse(posts);
    },
    mounted () {
    },
    methods: {
      goPost(path: any, title: any) {
          this.$router.push({
          path: `/posting`,
          query: {
              mdId: `${path}`,
              mdTitle: `${title}`
          }
      })
      },
      }
    }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  