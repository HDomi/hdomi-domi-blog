<template>
  <div class="main-page-wrap stars">
    <div class="small"></div>
    <div class="medium"></div>
    <div class="big"></div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">

export default {
  components: {
  },
  mixins: [
  ],
  props: {
    msg: String,
  },
  data () {
    return {
      segmentCount: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  computed: {
  },
  presets: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
@import url(../assets/styles/stars.css);
</style>
