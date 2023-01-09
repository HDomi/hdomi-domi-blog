<template>
    <div class="page-wrap scrollBar">
      <div v-if="isLoading" class="loading-container">
        <div class="loading">
          <FadeLoader />
        </div>
      </div>
      <div class="page-wrap-inner">
        <div class="page-tit-wrap">
          <div class="main-check-wrap">
            <div class="main-title" @click="openCategory">카테고리<span class="tryAngle" :class="{revert: categoryState}">▼</span></div>
              <ul v-if="categoryState" class="category-list">
                <li v-for="(items, i) in categoryNames" :key="`chk-box${i}`">
                  <label class="ckb-label">
                    <span>{{ items }}</span>
                    <input v-model="checkedCategory" role="switch" type="checkbox" :value="items"/>
                  </label>
                </li>
              </ul>
          </div>
          <div class="main-title" style="font-size: 14px;">총 포스팅 수 ({{ postingLength }}개)</div>
        </div>
        <div v-if="pageState" class="list-wrap">
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
        <div v-else>게시글이 없습니다.</div>
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
        checkedCategory: new Array,
        postingLength: 0,
        isLoading: false,
        categoryState: false,
        pageState: false
      }
    },
    computed: {
    },
    presets: {
    },
    watch: {
      checkedCategory () {
        this.isLoading = true;
        this.categories = [];
        this.postingLength = 0;
        this.checkedCategory.forEach(async (c: any) => {
          let posts = await this.getPosts(c);
          this.categories.push({ name: c, posts: posts });
        });
        
        if(this.checkedCategory.length !== 0){
          this.pageState = true;
        }else{this.pageState = false;}
        this.isLoading = false;
      },
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
          }
        });
        this.checkedCategory = this.categoryNames; //불러온 카테고리들을 default로 checked
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
            console.log('현재 체크 카테고리\n', this.checkedCategory, this.checkedCategory.length, '\n불러온 게시글 수\n', this.postingLength);
            resolve(postings);
        })
        });
      },
      openCategory(){
        this.categoryState = !this.categoryState;
      },
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
    .main-check-wrap{
      position: relative;
      cursor: pointer;
    }
    .category-list{
      position: absolute;
      top: 30px;
      left: 0px;
      border: 1px solid rgb(123, 122, 122);
      padding: 10px;
      text-align: left;
      border-radius: 10px;
      background-color: rgb(49, 49, 53);
      width: 200px;
      min-height: 100%;
      margin: 0;
    }
    .category-list li{
      width: 100%;
    }
    .ckb-label {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }
    
    [type="checkbox"] {
      appearance: none;
      position: relative;
      border: max(2px, 0.1em) solid gray;
      border-radius: 1.25em;
      width: 2.25em;
      height: 1.25em;
    }
    
    [type="checkbox"]::before {
      content: "";
      position: absolute;
      left: 0;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      transform: scale(0.8);
      background-color: gray;
      transition: left 250ms linear;
    }
    
    [type="checkbox"]:checked {
      background-color: rgb(148, 170, 242);
      border-color: rgb(148, 170, 242);
    }
    
    [type="checkbox"]:checked::before {
      background-color: white;
      left: 1em;
    }
    
    [type="checkbox"]:disabled {
      border-color: lightgray;
      opacity: 0.7;
      cursor: not-allowed;
    }
  
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
  