<template>
  <div class="page-wrap">
    <div class="posting-wrap-inner scrollBar">
      <div class="category-folder-wrap">
        <div
          v-for="(name, i) in categoryNames"
          :key="`Category ${i}`"
          class="folder-wrap"
          @click="getPosts(name)"
        >
          <div
            :class="`folder ${
              currentCategoryName === name && pageState ? 'open' : ''
            }`"
          ></div>
          <div class="category-name">{{ name }}</div>
        </div>
      </div>
      <div v-if="pageState" class="posting-list-wrap">
        <div
          v-for="(post, i) in posts"
          :key="`post${i}`"
          class="post-item"
          @click="goPost(currentCategoryName, post.name)"
        >
          <div class="pt-item-inner">
            <div class="pt-item-title">{{ post.title }}</div>
            <div class="pt-item-text">
              <div class="pt-item-desc">{{ post.description }}</div>
              <div class="pt-item-date">{{ post.date }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="posting-list-wrap plw-center">
        폴더를 눌러 게시글을 불러와주세요!
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getCategoryNamesApi, getPostsApi } from "@/apis/postsApi";
import MakeToast from "@/utils/makeToast";
import { mapMutations } from "vuex";
export default {
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      categoryNames: new Array(),
      pageState: false,
      fromCate: "",
      posts: new Array(),

      currentCategoryName: "",

      postingLength: 0,
    };
  },
  computed: {},
  presets: {},
  watch: {},
  created() {},
  async mounted() {
    this.getCategoryNames();
  },
  methods: {
    ...mapMutations("layout", ["setLoading"]),

    async getCategoryNames() {
      try {
        this.setLoading(true);
        const res = await getCategoryNamesApi();
        const resData = res.data;
        this.categoryNames = resData
          .filter((c: any) => c.name !== "img")
          .map((c: any) => c.name);
      } catch (e: any) {
        MakeToast(`카테고리를 불러오는데 실패했습니다. `, "error", 1500);
      } finally {
        this.setLoading(false);
      }
    },
    async getPosts(cateName: any) {
      this.setLoading(true);
      if (this.fromCate !== cateName || !this.pageState) {
        this.posts = [];
        this.pageState = true;
        getPostsApi(cateName)
          .then((res: any) => {
            const resData = res.data;
            const sortPost = new Array();
            resData.forEach((e: any) => {
              if (e.name !== "img") {
                const file = e.name.split("-");
                const desc = file[2].replace(".md", "");
                sortPost.push({
                  name: e.name,
                  title: file[0],
                  date: file[1],
                  description: desc,
                });
              }
            });
            this.posts = sortPost.sort(date_ascending);
            function date_ascending(a: any, b: any) {
              // 날짜별로 sort 내림차순
              var dateA = new Date(a["date"]).getTime();
              var dateB = new Date(b["date"]).getTime();
              return dateA > dateB ? -1 : 1;
            }
          })
          .catch((e: any) =>
            MakeToast(
              `포스트를 불러오는데 실패했습니다. \n
          ${e.response.status} : ${e.request.responseURL}`,
              "error",
              1500
            )
          )
          .finally(() => {
            this.setLoading(false);
          });
        this.fromCate = cateName;
        this.currentCategoryName = cateName;
      } else {
        this.pageState = false;
        this.setLoading(false);
      }
    },
    goPost(cateName: any, postname: any) {
      this.$router.push({
        path: `/postlist/posting`,
        query: {
          mdPath: `${cateName}`,
          mdId: `${postname}`,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.posting-wrap-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  .posting-list-wrap {
    width: 100%;
    height: 100%;
    max-width: 800px;
    margin-top: 30px;
    &.plw-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .post-item {
      margin-top: 15px;
      cursor: pointer;
      .pt-item-inner {
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
        .pt-item-text {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .pt-item-date {
            margin-left: 10px;
          }
          .pt-item-desc {
            word-break: keep-all;
            color: rgb(102, 138, 255);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .category-folder-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .folder-wrap {
      cursor: pointer;
      margin: 10px;
      .folder {
        background-image: var(--folder);
        height: 100px;
        width: 100px;
        &.open {
          background-image: var(--folder-open) !important;
        }
      }
      .category-name {
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 940px) {
}
@media (max-width: 550px) {
  .pt-item-inner {
    flex-direction: column;
    text-align: left;
  }
  .posting-list-wrap {
    margin-top: 10px;
  }
}
@media (max-width: 470px) {
  .folder img {
    width: 60px;
  }
  .category-name {
    font-size: 13px;
  }
  .pt-item-inner {
    padding: 13px 25px;
  }
}
</style>
