<template>
  <div v-if="isLoading" class="loading-container">
    <div class="loading">
      <FadeLoader />
    </div>
  </div>
</template>
<script lang="ts">
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
export default {
  components: {
    FadeLoader,
  },
  mixins: [],
  props: {
    isLoading: Boolean,
  },
  data() {
    return {};
  },
  computed: {},
  presets: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 998;
  .loading {
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 9999px;
  }
}
</style>
