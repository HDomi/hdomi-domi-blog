<template>
  <div class="thums-wrap">
    <div class="thums-item bg-img toy-music-player">
      <p>Music Player</p>
    </div>
    <div class="thums-item bg-img toy-utils">
      <p>Utils-for-Developer</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  mixins: [],
  props: {
    pageState: Boolean,
  },
  data() {
    return {};
  },
  async created() {},
  computed: {},
  presets: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.thums-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;

  .thums-item {
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    height: 150px;
    position: relative;
    overflow: hidden;
    &.bg-img {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 7;
      }
    }
    p {
      position: relative;
      z-index: 9;
    }
    &.toy-music-player {
      background-image: url(../../assets/images/portfolio/toys/toy-music-player.png);
    }
    &.toy-utils {
      background-image: url(../../assets/images/portfolio/toys/toy-utils.png);
    }
  }
}
</style>
