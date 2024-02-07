<template>
  <div class="page-wrap">
    <div class="page-wrap-inner">
      <OutLiner :outlines="outlines" />
      <div class="posting-title">
        <h1>{{ mdTitle }}</h1>
      </div>
      <div class="cutBar"></div>
      <div class="posting-info-wrap">
        <div class="posting-golist" @click="goList">목록으로</div>
        <div class="posting-date">작성일 : {{ mdDate }}</div>
      </div>
      <div class="posting-wrap">
        <div
          v-html="contents"
          class="article"
          style="padding-bottom: 100px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import htmlConverter from "@/utils/htmlConverter";
import OutLiner from "@/components/OutLiner.vue";
import { getPostDetailApi } from "@/apis/postsApi";
import { mapMutations } from "vuex";
import MakeToast from "@/utils/makeToast";

export default {
  components: {
    OutLiner,
  },
  mixins: [],
  props: {},
  data() {
    return {
      mdTitle: "",
      mdDate: "",
      contents: "",
      baseUrl: process.env.VITE_APP_BASE_URL,
      outlines: new Array(),
    };
  },
  async created() {
    this.getPostDetail();
  },
  computed: {},
  presets: {},
  watch: {},
  mounted() {
    const mdTitle: any = this.$route.query.mdId;
    const makeTitleDate = mdTitle.split("-");
    this.mdTitle = makeTitleDate[0];
    this.mdDate = makeTitleDate[1];
  },
  methods: {
    ...mapMutations("layout", ["setLoading"]),
    getPostDetail() {
      this.setLoading(true);
      const params = {
        id: this.$route.query.mdId,
        path: this.$route.query.mdPath,
      };
      getPostDetailApi(params)
        .then((res: any) => (this.contents = htmlConverter(res.data)))
        .catch((e: any) =>
          MakeToast(
            `포스트를 불러오는데 실패했습니다. \n
          ${e.response.status} : ${e.request.responseURL}`,
            "error",
            1500
          )
        )
        .finally(() => this.setLoading(false));
      this.readyOutLiner();
    },
    readyOutLiner() {
      const titleEls = document.querySelectorAll("h3, h4");
      let index = 0;
      let subIndex = 0;
      titleEls.forEach((tit: any) => {
        const title = tit;
        const isMainTitle = tit.tagName === "H3";
        const text = tit.innerText;
        const id = text.replace(/ /gi, "-");

        isMainTitle && index++;
        subIndex = isMainTitle ? 0 : subIndex + 1;
        const numbering = isMainTitle ? `${index}` : `${index}-${subIndex}`;
        const isSubIndex = !isMainTitle;

        this.outlines.push({ text, id, numbering, isSubIndex });
        title.id = id;
      });
      this.setLoading(false);
    },

    goList() {
      this.$router.push({
        path: `/postlist`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.cutBar {
  margin-bottom: 0px;
}
.posting-info-wrap {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 10px 30px 10px;
}
.posting-golist {
  cursor: pointer;
  text-decoration: underline;
}
.posting-date {
  text-align: right;
}
.posting-wrap {
  word-break: keep-all;
}
pre code {
  font-size: 17px;
  font-weight: 300;
}
@media (max-width: 900px) {
  pre code {
    font-size: 14px;
  }
}
</style>
<style></style>
