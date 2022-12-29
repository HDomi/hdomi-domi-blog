<template>
  <div class="page-wrap scrollBar">
    <MainPage 
      msg="메인페이지"
    ></MainPage>
  </div>
</template>

<script lang="ts">
import MainPage from '@/components/MainPage.vue'; // @ is an alias to /src

export default {
  components: {
    MainPage
  },
  mixins: [
  ],
  props: {
  },
  data () {
    return {
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

</style>