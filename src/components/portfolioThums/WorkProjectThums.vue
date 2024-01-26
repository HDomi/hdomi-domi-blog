<template>
  <div class="thums-wrap">
    <div class="thums-item bg-img works-accu">
      <p>Accu insight</p>
    </div>
    <div class="thums-item bg-img works-vas">
      <p>Aiden VAS</p>
    </div>
    <div class="thums-item bg-img works-r-issue">
      <p>R-Issue</p>
    </div>
    <div class="thums-item bg-img works-gigamec">
      <p>GigaMEC</p>
    </div>
    <div class="thums-item bg-img works-web-binar">
      <p>Web Binar</p>
    </div>
    <div class="thums-item bg-img works-aia">
      <p>AIA 홍보용</p>
    </div>
    <div class="thums-item bg-img works-wannabe-ad">
      <p>성형앱 어드민</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  mixins: [],
  props: { pageState: Boolean },
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
    &.works-accu {
      background-image: url(../../assets/images/portfolio/works/works-accu.png);
    }
    &.works-vas {
      background-image: url(../../assets/images/portfolio/works/works-vas.png);
    }
    &.works-r-issue {
      background-image: url(../../assets/images/portfolio/works/works-r-issue.png);
    }
    &.works-gigamec {
      background-image: url(../../assets/images/portfolio/works/works-gigamec.png);
    }
    &.works-web-binar {
      background-image: url(../../assets/images/portfolio/works/works-web-binar.png);
    }
    &.works-aia {
      background-image: url(../../assets/images/portfolio/works/works-aia.png);
    }
    &.works-wannabe-ad {
      background-image: url(../../assets/images/portfolio/works/works-wannabe-ad.png);
    }
  }
}
</style>
