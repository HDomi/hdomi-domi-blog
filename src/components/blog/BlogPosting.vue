<template>
  <div class="page-wrap">
    <h1>{{ mdTitle }}</h1>
    <div class="cutBar"></div>
    <div class="posting-wrap">
      <div v-html="contents"></div>
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
    }
  },
  created() {
    const param = this.$route.query.mdId;
    axios.get(`${this.baseUrl}/docs/${param}.md`)
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