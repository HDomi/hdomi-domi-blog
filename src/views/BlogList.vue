<template>
    <div class="page-wrap2 scrollBar">
      <div class="page-wrap-inner">
        <div class="main-title">포스팅</div>
        <div class="posting-item-wrap">
          <div v-for="(post, i) in postings" :key="`post${i}`" @click="goPost(post.name)"
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
  </template>
  <script lang="ts">
  import axios from 'axios'
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
        postings: new Array,
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
    },
    async mounted () {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts(){
        let posts = new Array;
        await axios.get(`https://api.github.com/repos/hdomi/posts/contents`)
        .then((res: any) => posts = (res.data))
        .catch((e: any) => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`));

        posts.forEach((e: any) => {
          const file = e.name.split('-');
          const desc = file[2].replace('.md', '');
          this.postings.push({ name: e.name, title: file[0], date: file[1], description: desc });
        });
      },
      goPost(path: any) {
          this.$router.push({
          path: `/posting`,
          query: {
              mdId: `${path}`,
          }
        })
      },
      }
    }
  
  </script>
  
  <style scoped>
    .posting-item-wrap{
      width: 100%;
      height: calc(100% + 500px);
      display: flex;
      flex-direction: column;
    }
    .posting-item{
      cursor: pointer;
      padding: 15px;
      width: 100%;
      height: 100%;
      max-height: 250px;
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
      font-weight: bold;
      height: 160px;
      color: rgb(148, 170, 242);
    }
    .pt-item-text{
      text-align: left;
      padding: 3px 20px 3px 20px;
      height: 70px;
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
      .posting-item-wrap{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
      }
    }
    @media (max-width: 650px) {
      .posting-item-wrap{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 100%;
      }
    }
  </style>
  