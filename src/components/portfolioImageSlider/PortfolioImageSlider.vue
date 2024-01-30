<template>
  <div class="image-slider-wrap flex-col">
    <div class="slider-index-wrap">
      <div v-for="item in imgArr" :key="`slider-index-${item}`">
        <div
          :class="`slider-index ${nowIndex === item ? 'active' : ''}`"
          @click="nowIndex = item"
        ></div>
      </div>
    </div>
    <div class="img-wrap flex-col">
      <div class="slider-btn prev" @click="moveSlider('prev')">◀</div>
      <div class="slider-btn next" @click="moveSlider('next')">▶</div>
      <img
        :src="`${getImgHref(nowIndex)}`"
        :alt="currentItemId"
        :style="{ width: currentItemId === 'works-giddy' ? '400px' : '100%' }"
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
    imgArr() {
      const imgArr = [];
      const imgCount = this.currentPortfolioItem?.imgCount || 0;
      for (let i = 1; i <= imgCount; i++) {
        imgArr.push(i);
      }
      return imgArr;
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
          this.nowIndex === 1 ? this.imgArr.length : this.nowIndex - 1;
      } else {
        this.nowIndex =
          this.nowIndex === this.imgArr.length ? 1 : this.nowIndex + 1;
      }
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
      background: linear-gradient(
        92.88deg,
        #455eb5 9.16%,
        #5643cc 43.89%,
        #673fd7 64.72%
      );
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
