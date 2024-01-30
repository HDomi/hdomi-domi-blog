<template>
  <div class="sidebar-wrap scrollBar" :class="{ active: panelState }">
    <div class="lab-wrap">
      <router-link
        v-for="(item, idx) in linkArray"
        :to="item.path"
        class="lab-card-container"
        :key="`item-${idx}`"
      >
        <li class="card-box">
          {{ item.name }}
        </li></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { paths } from "@/data/PathData";

export default {
  components: {},
  mixins: [],
  props: {
    panelState: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    linkArray() {
      return paths;
    },
  },
  presets: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.wait {
  font-size: 12px;
}
.active {
  transition: 0.3s;
  right: 0 !important;
}
.sidebar-wrap {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 200px;
  height: 100%;
  //background: var(--main-bg);
  padding: 15px 5px 15px 5px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  z-index: 999;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  right: -200px;
  .lab-wrap {
    .lab-card-container {
      cursor: pointer;
      width: 100%;
      max-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: rgba(60, 150, 253, 0.35);
      border-radius: 20px;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.35);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);
      margin-top: 10px;
      &:first-child {
        margin-top: 0px;
      }
      &:hover {
        background: var(--main-gradient);
        background-size: 400% 400%;
        animation: var(--main-gradient-animation);
        color: #fff;
        transition: background-color 0.3s ease-out 0s;
        border-top: none;
        border-left: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      &::after {
        display: block;
        content: "";
        padding-bottom: 100%;
      }
      .card-box {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
