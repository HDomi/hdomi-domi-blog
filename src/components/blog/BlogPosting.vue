<template>
  <div class="page-wrap2 scrollBar">
    <div class="page-wrap-inner">
      <OutLiner :outlines="outlines"/>
      <div class="posting-title"><h1>{{ mdTitle }}</h1></div>
      <div class="cutBar"></div>
      <div class="posting-wrap">
        <div v-html="contents" class="article" style="padding-bottom: 100px;"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import htmlConverter from '@/utils/htmlConverter'
import OutLiner from '@/components/OutLiner.vue';
export default {
  components: {
    OutLiner
  },
  mixins: [
  ],
  props: {
  },
  data () {
    return {
        mdTitle: '',
        contents: '',
        baseUrl: process.env.VITE_APP_BASE_URL,
        outlines: new Array
    }
  },
  async created() {
    const param = this.$route.query.mdId;
    await axios.get(`https://hdomi.github.io/posts/${param}`)
      .then((res: any) => this.contents = htmlConverter(res.data))
      .catch((e: any) => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`));

    this.readyOutLiner();
  },
  computed: {
  },
  presets: {
  },
  watch: {
  },
  mounted () {
    const mdTitle: any = this.$route.query.mdId;
    const makeTitle = mdTitle.split('-');
    this.mdTitle = makeTitle[0];
  },
  methods: {
    readyOutLiner() {
      const titleEls = document.querySelectorAll('h3, h4');
      let index = 0;
      let subIndex = 0;
      titleEls.forEach((tit: any) => {
        const title = tit;
        const isMainTitle = tit.tagName === 'H3';
        const text = tit.innerText;
        const id = text.replace(/ /ig, '-');
        
        isMainTitle && index++;
        subIndex = isMainTitle ? 0 : subIndex + 1;
        const numbering = isMainTitle ? `${index}` : `${index}-${subIndex}`;
        const isSubIndex = !isMainTitle;

        this.outlines.push({text, id, numbering, isSubIndex});
        title.id = id;
      })
    }
  }
}
</script>

<style scoped>

</style>
<style>
  pre code{
    font-size: 17px;
    font-weight: 300;
  }
  @media (max-width: 900px) {
    pre code{
      font-size: 14px;
    }
  }
</style>