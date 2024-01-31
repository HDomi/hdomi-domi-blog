<template>
  <div :class="`all-icon-wrap ${isAboutMe ? 'is-about-me' : 'flex-row'}`">
    <div
      v-if="iconList?.includes('html')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_html5.png" alt="" />
      <p class="icon-label">HTML5</p>
      <ProgressBar v-if="isAboutMe" :percent="'높음'" />
    </div>

    <div
      v-if="iconList?.includes('react-js')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_react.png" alt="" />
      <p class="icon-label">React</p>
      <ProgressBar v-if="isAboutMe" :percent="'중간'" />
    </div>

    <div
      v-if="iconList?.includes('vue')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_vue.png" alt="" />
      <p class="icon-label">Vue</p>
      <ProgressBar v-if="isAboutMe" :percent="'중간'" />
    </div>

    <div
      v-if="iconList?.includes('react-native')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_reactnative.png" alt="" />
      <p class="icon-label">React Native</p>
      <ProgressBar v-if="isAboutMe" :percent="'낮음'" />
    </div>

    <div
      v-if="iconList?.includes('docusaurs')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_docu.png" alt="" />
      <p class="icon-label">Docusaurs</p>
      <ProgressBar v-if="isAboutMe" :percent="'낮음'" />
    </div>

    <div
      v-if="iconList?.includes('firebase')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_firebase.png" alt="" />
      <p class="icon-label">Firebase</p>
      <ProgressBar v-if="isAboutMe" :percent="'낮음'" />
    </div>

    <div
      v-if="iconList?.includes('css')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_css3.png" alt="" />
      <p class="icon-label">CSS3</p>
      <ProgressBar v-if="isAboutMe" :percent="'높음'" />
    </div>

    <div
      v-if="iconList?.includes('scss')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_scss.png" alt="" />
      <p class="icon-label">Scss</p>
      <ProgressBar v-if="isAboutMe" :percent="'중간'" />
    </div>

    <div
      v-if="iconList?.includes('javascript')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_js.png" alt="" />
      <p class="icon-label">Javascript</p>
      <ProgressBar v-if="isAboutMe" :percent="'중간'" />
    </div>

    <div
      v-if="iconList?.includes('typescript')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_ts.png" alt="" />
      <p class="icon-label">Typescript</p>
      <ProgressBar v-if="isAboutMe" :percent="'중간'" />
    </div>

    <div
      v-if="iconList?.includes('graphql')"
      :class="`icon-wrap flex-row ${isAboutMe ? 'width-100' : ''}`"
    >
      <img src="../assets/images/icons/ic_graphql.png" alt="" />
      <p class="icon-label">GraphQL</p>
      <ProgressBar v-if="isAboutMe" :percent="'낮음'" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  components: { ProgressBar },
  mixins: [],
  props: { iconList: Array, isAboutMe: Boolean },
  data() {
    return {};
  },
  async created() {},
  computed: {},
  presets: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapMutations("layout", ["setLoading"]),
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
