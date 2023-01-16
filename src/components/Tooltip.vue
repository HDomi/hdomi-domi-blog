<template>
  <div class="tooltip-wrap" :style="directionStyle">
    <div class="tryAngle"></div>
    {{ text }}
  </div>
</template>

<script lang="ts">

export default {
  components: {
  },
  mixins: [
  ],
  props: {
    getTop: Number,
    getLeft: Number,
    text: String
  },
  data () {
    return {
        makeTop: 0,
        makeLeft: 0,
    }
  },
  computed: {
    directionStyle () {
      return {
        top: `${this.getTop}px`,
        left: `${this.getLeft}px`
      }
    }
  },
  presets: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {

  }
}
</script>
<style scoped>
.tryAngle{
  position: absolute;
  top: -14px;
  left: -7px;
  width: 0;
  height: 0;
  border-bottom: 5px solid rgba(255, 255, 255, 0.1);
  border-top: 10px solid transparent;
  border-left: 10px solid rgba(255, 255, 255, 0.1);
  border-right: 10px solid transparent;
}
.tooltip-wrap{
    position: fixed;
    max-width: 300px;
    border-radius: 0px 10px 10px 10px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 20px 20px 50px rgba(0,0,0,0.35);
    word-break:break-all;
    padding: 10px 15px;

}
</style>