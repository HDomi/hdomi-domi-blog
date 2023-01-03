<template>
    <div class="page-wrap scrollBar">
      <div v-if="isLoading" class="loading-container">
        <div class="loading">
          <FadeLoader />
        </div>
      </div>
      <div class="page-wrap-inner">
        <div class="page-tit-wrap">
          <div class="main-title">포스팅</div>
          <!-- <select v-model="categoryNames">
            <option
              v-for="(item, index) in categoryNames"
              :key="index"
              :value="item.value"
              >{{ item }}</option>
          </select> -->
          <div class="main-title" style="font-size: 14px;">총 포스팅 수 ({{ postingLength }}개)</div>
        </div>
        <div v-for="(category, i) in categories" :key="`category${i}`" class="category-wrap">
          <div class="category-title">{{ category.name }}</div>
          <div class="posting-item-wrap">
            <div v-for="(post, i) in category.posts" :key="`post${i}`" @click="goPost(category.name, post.name)"
                 class="posting-item">
              <div class="pt-item-inner">
                <div class="pt-item-title">
                  {{ post.title }}
                </div>
                <div class="pt-item-text">
                  <div class="pt-item-date">
                    {{ post.date }}
                  </div>
                  <div class="pt-item-desc">
                    {{ post.description }}
                  </div>
                </div>
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
        mdText: '',
        categories: new Array,
        categoryNames: new Array,
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
      this.fetchPosts();
    },
    methods: {
      async fetchPosts(){
        this.isLoading = true;
        let categories = new Array;
        await axios.get(`https://api.github.com/repos/hdomi/posts/contents`)
        .then((res: any) => categories = (res.data))
        .catch((e: any) => console.log(`Category ERROR🙄 ${e.response.status} : ${e.request.responseURL}`));
        categories.forEach(async (c: any) => {
          if(c.name !== 'img'){
            this.categoryNames.push(c.name);
            let posts = await this.getPosts(c.name);
            this.categories.push({ name: c.name, posts: posts });
          }
        });
        this.isLoading = false;
      },
      getPosts(cateName: any){
        return new Promise((resolve) => {
          let posts = new Array;
          let notSortPost = new Array;
          let postings = new Array;
          axios.get(`https://api.github.com/repos/hdomi/posts/contents/${cateName}`)
          .then((res: any) => {
            posts = ( res.data );
            posts.forEach((e: any) => {
              if(e.name !== 'img'){
                const file = e.name.split('-');
                const desc = file[2].replace('.md', '');
                notSortPost.push({ name: e.name, title: file[0], date: file[1], description: desc });
              }
            });
            this.postingLength = this.postingLength + notSortPost.length;
            postings = notSortPost.sort(date_ascending);
            function date_ascending(a: any, b: any) { // 날짜별로 sort 내림차순
              var dateA = new Date(a['date']).getTime();
              var dateB = new Date(b['date']).getTime();
              return dateA > dateB ? -1 : 1;
            };
            resolve(postings);
        })
        });
      },
          // 
        
        // posts.forEach((e: any) => {
        //     const file = e.name.split('-');
        //     const desc = file[2].replace('.md', '');
        //     notSortPost.push({ name: e.name, title: file[0], date: file[1], description: desc });
        //   });
        

        // this.postings = notSortPost.sort(date_ascending);
        // function date_ascending(a: any, b: any) { // 날짜별로 sort 내림차순
        //   var dateA = new Date(a['date']).getTime();
        //   var dateB = new Date(b['date']).getTime();
        //   return dateA > dateB ? -1 : 1;
        // };

        // this.postingLength = String(this.postings.length);
      
      
      goPost(cateName: any, postname: any) {
          this.$router.push({
          path: `/posting`,
          query: {
              mdPath: `${cateName}`,
              mdId: `${postname}`,
          }
        })
      },
      }
    }
  
  </script>
  
  <style scoped>
    .category-title{
      font-size: 16px;
      font-weight: bold;
      text-align: left;
    }
    .posting-item-wrap{
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .posting-item{
      cursor: pointer;
      padding: 10px;
      width: 100%;
      height: 100%;
    }
    .pt-item-inner{
      width: 100%;
      height: 100%;
      display: flex;
      padding: 15px;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid rgba(22, 22, 117, 0.15);
      border-radius: 16px;
      background-color: rgb(49, 49, 53);
      box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px, rgb(0 0 0 / 15%) 0px 0px 1px;
    }
    .pt-item-title{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      min-height: 100px;
      font-weight: bold;
      color: rgb(148, 170, 242);
    }
    .pt-item-text{
      text-align: left;
      padding: 3px 10px 3px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .pt-item-date{
      font-size: 13px;
    }
    .pt-item-desc{
      color: rgb(102, 138, 255);
    }
    @media (max-width: 940px) {
    }
    @media (max-width: 650px) {
    }
  </style>
  