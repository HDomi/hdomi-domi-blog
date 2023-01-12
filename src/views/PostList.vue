<template>
    <div class="page-wrap scrollBar">
      <div v-if="isLoading" class="loading-container">
        <div class="loading">
          <FadeLoader />
        </div>
      </div>
      <div class="posting-wrap-inner scrollBar">
        <div class="category-folder-wrap">
          <div v-for="(name, i) in categoryNames" :key="`Category ${i}`" class="folder-wrap" @click="getPosts(name)">
            <div v-if="currentCategoryName === name && pageState" class="folder"><img src="../assets/folder-open.svg"/></div>
            <div v-else class="folder"><img src="../assets/folder.svg"/></div>
            <div class="category-name">{{ name }}</div>
          </div>
        </div>
        <div v-if="pageState" class="posting-list-wrap">
          
          <div v-for="(post, i) in posts" :key="`post${i}`" class="post-item" @click="goPost(currentCategoryName, post.name)">
            <div class="pt-item-inner">
              <div class="pt-item-title">{{ post.title }}</div>
              <div class="pt-item-text">
                <div class="pt-item-desc">{{ post.description }}</div>
                <div class="pt-item-date">{{ post.date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import axios from 'axios'
  import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
  export default {
    components: {
      FadeLoader
    },
    mixins: [
    ],
    props: {
    },
    data () {
      return {
        categoryNames: new Array,
        pageState: false,
        fromCate: '',
        posts: new Array,

        currentCategoryName: '',

        postingLength: 0,
        isLoading: false,
      }
    },
    computed: {
    },
    presets: {
    },
    watch: {
    },
    created() {
    },
    async mounted () {
      this.getCategoryNames();
    },
    methods: {
      async getCategoryNames(){
        this.isLoading = true;
        let categories = new Array;
        await axios.get(`https://api.github.com/repos/hdomi/posts/contents`)
        .then((res: any) => categories = (res.data))
        .catch((e: any) => console.log(`Category ERROR🙄 ${e.response.status} : ${e.request.responseURL}`));
        
        categories.forEach(async (c: any) => {
          if(c.name !== 'img'){
            this.categoryNames.push(c.name);
          }
        });
        this.isLoading = false;
      },
      async getPosts(cateName: any){
        if(this.fromCate !== cateName || !this.pageState){
          this.posts = [];
          this.pageState = true;
          let posts = await axios.get(`https://api.github.com/repos/hdomi/posts/contents/${cateName}`)
          .then((res: any) => {
            let resData = new Array;
            let sortPost = new Array;
            resData = ( res.data );
            resData.forEach((e: any) => {
              if(e.name !== 'img'){
                const file = e.name.split('-');
                const desc = file[2].replace('.md', '');
                sortPost.push({ name: e.name, title: file[0], date: file[1], description: desc });
              }
            });
            return sortPost.sort(date_ascending);
            function date_ascending(a: any, b: any) { // 날짜별로 sort 내림차순
              var dateA = new Date(a['date']).getTime();
              var dateB = new Date(b['date']).getTime();
              return dateA > dateB ? -1 : 1;
            };
          })
          this.posts = posts;
          this.fromCate = cateName;
          this.currentCategoryName = cateName;
        }else{
          this.pageState = false;
        }
        
      },
      goPost(cateName: any, postname: any) {
          this.$router.push({
          path: `/posting`,
          query: {
              mdPath: `${cateName}`,
              mdId: `${postname}`,
          }
        });
      },
    }
  }
  </script>
  
  <style scoped>
    .posting-list-wrap{
      width: 100%;
      height: 100%;
      max-width: 800px;
      margin-top: 30px;
    }
    .posting-wrap-inner{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      align-items: center;
    }
    .post-item{
      margin-top: 15px;
      cursor: pointer;
    }
    .pt-item-inner{
      width: 100%;
      height: 100%;
      display: flex;
      padding: 25px;
      justify-content: space-between;
      flex-direction: row;
      border: 1px solid rgba(22, 22, 117, 0.15);
      border-radius: 12px;
      background-color: rgb(49, 49, 53);
      box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px, rgb(0 0 0 / 15%) 0px 0px 1px;
    }
    .pt-item-text{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .pt-item-date{
      margin-left: 10px;
    }
    .pt-item-desc{
      word-break: keep-all;
      color: rgb(102, 138, 255);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .category-folder-wrap{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .folder-wrap{
      cursor: pointer;
      margin: 10px;
    }
    .folder img{
      width: 100px;
    }
    .category-name{
      font-size: 15px;
    }
    @media (max-width: 940px) {
    }
    @media (max-width: 550px) {
      .pt-item-inner{
        flex-direction: column;
        text-align: left;
      }
      .posting-list-wrap{
        margin-top: 10px;
      }
    }
    @media (max-width: 470px) {
      .folder img{
        width: 60px;
      }
      .category-name{
      font-size: 13px;
      }
      .pt-item-inner{
        padding: 13px 25px;
      }
    }
  </style>
  