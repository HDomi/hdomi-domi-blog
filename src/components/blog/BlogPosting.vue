<template>
  <div class="page-wrap">
    <h1>- {{ mdId }} -</h1>
    <div class="cutBar"></div>
    <div class="posting-wrap">
     
    </div>
  </div>
</template>

<script lang="ts">

export default {
  components: {
  },
  mixins: [
  ],
  props: {
  },
  data () {
    return {
        mdId: ''
    }
  },
  computed: {
   
  },
  presets: {
  },
  watch: {
  },
  mounted () {
    const MdString: any = this.$route.query.mdId;
    this.mdId = MdString;
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