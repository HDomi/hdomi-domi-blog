<template>
  <div class="image-slider-wrap flex-col">
    <div class="slider-index-wrap">
      <div v-for="(item, idx) in imgPathArr" :key="`slider-index-${item}`">
        <div
          :class="`slider-index ${nowIndex === idx + 1 ? 'active' : ''}`"
          @click="nowIndex = idx + 1"
        ></div>
      </div>
    </div>
    <div class="img-wrap flex-col">
      <div
        class="slider-btn prev"
        @click="moveSlider('prev')"
        @swiperleft="moveSlider('prev')"
      >
        ◀
      </div>
      <div
        class="slider-btn next"
        @click="moveSlider('next')"
        @swiperright="moveSlider('next')"
      >
        ▶
      </div>
      <img
        v-for="(path, idx) in imgPathArr"
        :key="`item-${idx}`"
        :src="`${path}`"
        :alt="`item-${idx}`"
        :style="{
          width: getMobileDeviceImg(),
          display: nowIndex === idx + 1 ? 'block' : 'none',
        }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { portFolioArr } from "@/data/PortfolioList";
import { mapMutations } from "vuex";
export default {
  components: {},
  mixins: [],
  props: {
    currentItemId: String,
  },
  data() {
    return {
      nowIndex: 1,
    };
  },
  async created() {},
  computed: {
    currentPortfolioItem() {
      if (this.currentItemId === "") return null;
      const currentPortfolioItem = portFolioArr.filter(
        (item: any) => item.id === this.currentItemId
      )[0];

      return currentPortfolioItem;
    },
    imgPathArr() {
      const imgPathArr = [];
      const imgCount = this.currentPortfolioItem?.imgCount || 0;
      for (let i = 1; i <= imgCount; i++) {
        imgPathArr.push(this.getImgHref(i));
      }
      return imgPathArr;
    },
  },
  presets: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapMutations("layout", ["setLoading"]),
    getImgHref(index: number) {
      const origin = "/assets/images/";
      let folderHref = "toys/";
      if (this.currentItemId?.includes("works")) folderHref = "works/";
      return `${origin}${folderHref}${this.currentItemId}${
        index === 1 ? "" : index
      }.png`;
    },
    moveSlider(type: string) {
      if (type === "prev") {
        this.nowIndex =
          this.nowIndex === 1 ? this.imgPathArr.length : this.nowIndex - 1;
      } else {
        this.nowIndex =
          this.nowIndex === this.imgPathArr.length ? 1 : this.nowIndex + 1;
      }
    },
    getMobileDeviceImg() {
      const isMobileSize =
        this.currentItemId === "works-giddy" ||
        this.currentItemId === "works-ecogram";
      return isMobileSize ? "400px" : "100%";
    },
  },
};
</script>

<style scoped lang="scss">
.image-slider-wrap {
  width: 100%;
  height: 100%;
  justify-content: center;
  .img-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: 50px;
    img {
      border-radius: 15px;
    }
    .slider-btn {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background: var(--main-gradient);
      background-size: 400% 400%;
      animation: var(--main-gradient-animation);
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
      &.prev {
        left: 10px;
      }
      &.next {
        right: 10px;
      }
    }
  }
  .slider-index-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    .slider-index {
      cursor: pointer;
      width: 40px;
      height: 5px;
      background: #dfdfdf7b;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>
