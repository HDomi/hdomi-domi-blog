<template>
  <div class="page-wrap scrollBar relative">
    <div class="objects">
      <img class="object_rocket" src="../assets/rocket.svg" width="40px">
      <div class="earth-moon">
          <img class="object_earth" src="../assets/earth.svg" width="100px">
          <img class="object_moon" src="../assets/moon.svg" width="80px">
      </div>
      <div class="box_astronaut">
          <img class="object_astronaut" src="../assets/astronaut.svg" width="140px">
      </div>
    </div>
    <!-- <div class="welcome-title">Welcome to My BLOG!
      <div class="goGithub">
        <a href="https://github.com/HDomi" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" /> Go Github
        </a>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">

export default {
  components: {
  },
  mixins: [
  ],
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  presets: {
  },
  watch: {
  },
  mounted () {
    // document.addEventListener("mousemove", (e) => {
    //   const mouseX = e.clientX;
    //   const mouseY = e.clientY;
    // });

  },
  methods: {
  }
}
</script>
<style scoped>
@import url(../assets/styles/astro.css);
.relative{
  overflow: hidden;
}
.goGithub{
  font-size: 4vw;
  text-decoration: underline;
}
.welcome-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8vw;
  line-height: 8vw;
  font-weight: bold;
}
</style>