<template>
  <div class="page-wrap">
    <div class="page-wrap-inner">Portfolio!</div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";

export default {
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  async created() {},
  computed: {},
  methods: {
    ...mapMutations("layout", ["setLoading"]),
  },
};
</script>

<style scoped lang="scss"></style>
