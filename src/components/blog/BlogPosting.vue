<template>
  <div class="page-wrap2 scrollBar">
    <div class="page-wrap-inner">
      <div class="posting-title"><h1>{{ mdTitle }}</h1></div>
      <div class="cutBar"></div>
      <div class="posting-wrap">
        <div v-html="contents" style="padding-bottom: 100px;"></div>
        <div>{{ test }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import htmlConverter from '@/utils/htmlConverter'
export default {
  components: {
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
        test: ''
    }
  },
  created() {
    const param = this.$route.query.mdId;
    axios.get(`https://hdomi.github.io/posts/${param}`)
      .then((res: any) => this.contents = htmlConverter(res.data))
      .catch((e: any) => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`));
  },
  computed: {
  },
  presets: {
  },
  watch: {
  },
  mounted () {
    const mdTitle: any = this.$route.query.mdTitle;
    this.mdTitle = mdTitle;
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
<style>
.page-wrap .posting-wrap h1{
  color: #42b983!important;
}
</style>