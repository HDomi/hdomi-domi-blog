<template>
  <div class="page-wrap">
    <h1>{{ mdTitle }}</h1>
    <div class="cutBar"></div>
    <div class="posting-wrap">
      <VueShowdown 
        :markdown="mdText"
        flavor="github"
        :options="{ emoji: true }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { VueShowdown } from 'vue-showdown'
import content from '@/docs/Domi-test-221208.md'
export default {
  components: {
    VueShowdown
  },
  mixins: [
  ],
  props: {
  },
  data () {
    return {
        mdId: '',
        mdTitle: '',
        mdText: ''
    }
  },
  computed: {

  },
  presets: {
  },
  watch: {
  },
  mounted () {
    const mdString: any = this.$route.query.mdId;
    const mdTitle: any = this.$route.query.mdTitle;
    this.mdId = mdString;
    this.mdTitle = mdTitle;

    this.mdText = String(content);
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
<style>
.page-wrap .posting-wrap .markdown-body > h1{
  color: #42b983!important;
}
</style>