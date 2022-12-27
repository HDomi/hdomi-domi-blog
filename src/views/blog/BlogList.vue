<template>
    <div class="page-wrap">
      <h1>블로그리스트</h1>
      <div class="cutBar"></div>
      <table class="posting-table" border="1px">
        <tr>
          <td>작성자</td>
          <td>제목</td>
          <td>생성일</td>
        </tr>
        <tr v-for="(post, i) in posts" :key="`post${i}`" @click="goPost(post.name, post.title)">
          <td>{{ post.title }}</td>
          <td>{{ post.date }}</td>
          <td>{{ post.description }}</td>
        </tr>
      </table>
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
        posts: [],
      }
    },
    computed: {
    },
    presets: {
    },
    watch: {
    },
    created() {
      this.posts = JSON.parse(posts);
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
  .test{
    width: 200px;
    height: 50px;
    background: #42b983;
    display: inline-block;
    border: 1px solid #000;
  }
  .posting-table{
    width: 100%;
    border: 1px solid #fff;
  }
  .posting-table tr{
    height: 50px;
    width: 100%;
  }
  </style>
  