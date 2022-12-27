<template>
  <div class="page-wrap">
    <h1>- {{ mdTitle }} -</h1>
    <div class="cutBar"></div>
    <div class="posting-wrap">
      <component :is="dynamicComponent"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
export default {
  components: {
  },
  mixins: [
  ],
  props: {
  },
  data () {
    return {
        mdId: '',
        mdTitle: ''
    }
  },
  computed: {
    dynamicComponent() {
      const path = this.mdId;
      return defineAsyncComponent(() => import(`../../../public/postingFile/${path}.md`));
    }
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
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style>
.page-wrap .posting-wrap .markdown-body > h1{
  color: #42b983!important;
}
</style>