<template>
  <div class="page-wrap relative">
    <div class="objects">
      <img class="object_rocket" src="../assets/rocket.svg" />
      <div class="earth-moon">
        <img
          id="object_earth"
          class="object_earth"
          src="../assets/earth.svg"
          @mouseover="earthTooltip"
          @mouseout="earthTooltipState = false"
        />

        <img
          id="object_moon"
          class="object_moon"
          src="../assets/moon.svg"
          @mouseover="moonTooltip"
          @mouseout="moonTooltipState = false"
        />
      </div>
      <div class="box_astronaut">
        <img class="object_astronaut" src="../assets/astronaut.svg" />
      </div>
    </div>
    <!-- <div class="welcome-title">Welcome to My BLOG!
      <div class="goGithub">
        <a href="https://github.com/HDomi" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" /> Go Github
        </a>
      </div>
    </div> -->
    <Tooltip
      v-if="earthTooltipState"
      :getTop="tooltipPosTop"
      :getLeft="tooltipPosLeft"
      :text="currentEarthTxt"
    />
    <Tooltip
      v-if="moonTooltipState"
      :getTop="tooltipPosTop"
      :getLeft="tooltipPosLeft"
      :text="currentMoonTxt"
    />
  </div>
</template>

<script lang="ts">
import Tooltip from "@/components/Tooltip.vue";
export default {
  components: {
    Tooltip,
  },
  mixins: [],
  props: {},
  data() {
    return {
      earthTooltipState: false,
      moonTooltipState: false,

      tooltipPosTop: 0,
      tooltipPosLeft: 0,

      currentEarthTxt: "이것은 지구입니다.",
      currentMoonTxt: "이것은 달입니다.",
    };
  },
  computed: {},
  presets: {},
  watch: {},
  mounted() {},
  methods: {
    earthTooltip() {
      this.earthTooltipState = true;
      const earth = document.querySelector("#object_earth") as HTMLElement;
      this.tooltipPosTop = earth.offsetTop + earth.offsetHeight * 2 - 20;
      this.tooltipPosLeft = earth.offsetLeft + earth.offsetWidth;
    },
    moonTooltip() {
      this.moonTooltipState = true;
      const moon = document.querySelector("#object_moon") as HTMLElement;
      this.tooltipPosTop = moon.offsetTop + moon.offsetHeight * 2 - 20;
      this.tooltipPosLeft = moon.offsetLeft + moon.offsetWidth;
    },
  },
};
</script>
<style scoped>
@import url(../assets/styles/astro.css);
.relative {
  overflow: hidden;
}
.goGithub {
  font-size: 4vw;
  text-decoration: underline;
}
.welcome-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8vw;
  line-height: 8vw;
  font-weight: bold;
}
</style>
