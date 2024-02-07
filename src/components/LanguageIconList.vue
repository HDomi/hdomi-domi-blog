<template>
  <div :class="`all-icon-wrap ${isAboutMe ? 'is-about-me' : 'flex-row'}`">
    <div
      v-for="(item, idx) in filteredLanguageIconList"
      :key="`item-${idx}`"
      :class="getIconWrapClass()"
    >
      <img :src="item.img" alt="" />
      <p class="icon-label">{{ item.name.toUpperCase() }}</p>
      <ProgressBar v-if="isAboutMe" :percent="item.percent" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import ProgressBar from "@/components/ProgressBar.vue";
import { languageIconPathList } from "@/data/PathData";
export default {
  components: { ProgressBar },
  mixins: [],
  props: { iconList: Array, isAboutMe: Boolean },
  data() {
    return {};
  },
  async created() {},
  computed: {
    filteredLanguageIconList() {
      return this.languageIconList.filter((item) =>
        this.iconList?.includes(item.name)
      );
    },
    languageIconList() {
      return languageIconPathList;
    },
  },
  presets: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapMutations("layout", ["setLoading"]),
    getIconWrapClass() {
      return `icon-wrap flex-row ${this.isAboutMe ? "width-100" : ""}`;
    },
  },
};
</script>

<style scoped lang="scss">
.is-about-me {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.all-icon-wrap {
  width: 100%;
  overflow-x: auto;
  gap: 13px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .icon-wrap {
    &.width-100 {
      width: 100%;
    }
    img {
      width: 30px;
    }
  }
}
.icon-label {
  word-break: keep-all;
  width: max-content;
  margin-left: 3px;
  padding: 0 !important;
  font-size: 15px;
  font-weight: bold;
}
</style>
