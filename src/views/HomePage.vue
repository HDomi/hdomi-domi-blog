<template>
  <div class="page-wrap relative">
    <div class="objects">
      <img class="object_rocket" src="../assets/images/rocket.svg" />
      <div class="earth-moon">
        <img
          id="object_earth"
          class="object_earth"
          src="../assets/images/earth.svg"
        />
        <img
          id="object_moon"
          class="object_moon"
          src="../assets/images/moon.svg"
        />
      </div>
      <div class="box_astronaut">
        <img class="object_astronaut" src="../assets/images/astronaut.svg" />
      </div>
    </div>
    <div class="welcome-title">
      Welcome to My BLOG!
      <div class="goGithub">
        <a href="https://github.com/HDomi" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" /> Go Github
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  mixins: [],
  props: {},
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

<style lang="scss" scoped>
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
.page-wrap {
  position: relative;
}
</style>
