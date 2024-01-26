<template>
  <div class="image-slider-wrap">
    {{ currentItemId }}
  </div>
</template>

<script lang="ts">
// import { mapMutations } from "vuex";
export default {
  components: {},
  mixins: [],
  props: {
    currentItemId: String,
  },
  data() {
    return {};
  },
  async created() {},
  computed: {},
  presets: {},
  watch: {},
  mounted() {},
  methods: {
    // ...mapMutations("layout", ["setLoading"]),
  },
};
</script>

<style scoped lang="scss">
.image-slider-wrap {
  width: 100%;
  height: 100%;
}
</style>
