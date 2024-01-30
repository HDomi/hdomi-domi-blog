<template>
  <div class="all-icon-wrap flex-row">
    <div v-if="iconList?.includes('html')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_html5.png" alt="" />
      <p class="icon-label">HTML5</p>
    </div>

    <div v-if="iconList?.includes('react-js')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_react.png" alt="" />
      <p class="icon-label">React</p>
    </div>

    <div v-if="iconList?.includes('vue')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_vue.png" alt="" />
      <p class="icon-label">Vue</p>
    </div>

    <div v-if="iconList?.includes('react-native')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_reactnative.png" alt="" />
      <p class="icon-label">React Native</p>
    </div>

    <div v-if="iconList?.includes('docusaurs')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_docu.png" alt="" />
      <p class="icon-label">Docusaurs</p>
    </div>

    <div v-if="iconList?.includes('firebase')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_firebase.png" alt="" />
      <p class="icon-label">Firebase</p>
    </div>

    <div v-if="iconList?.includes('css')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_css3.png" alt="" />
      <p class="icon-label">CSS3</p>
    </div>

    <div v-if="iconList?.includes('scss')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_scss.png" alt="" />
      <p class="icon-label">Scss</p>
    </div>

    <div v-if="iconList?.includes('javascript')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_js.png" alt="" />
      <p class="icon-label">Javascript</p>
    </div>

    <div v-if="iconList?.includes('typescript')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_ts.png" alt="" />
      <p class="icon-label">Typescript</p>
    </div>

    <div v-if="iconList?.includes('graphql')" class="icon-wrap flex-row">
      <img src="../assets/images/icons/ic_graphql.png" alt="" />
      <p class="icon-label">GraphQL</p>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
export default {
  components: {},
  mixins: [],
  props: { iconList: Array },
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
.all-icon-wrap {
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .icon-wrap {
    margin-left: 13px;
    &:first-child {
      margin-left: 0;
    }
    img {
      width: 30px;
    }
  }
}
.icon-label {
  margin-left: 3px;
  padding: 0 !important;
  font-size: 15px;
  font-weight: bold;
}
</style>
