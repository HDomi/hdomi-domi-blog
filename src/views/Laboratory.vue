<template>
  <div class="page-wrap scrollBar">
    <div class="page-wrap-inner">
      <div class="page-tit-wrap">
        <div class="main-title">실험실</div>
        <div class="main-title" style="font-size: 14px;">총 실험 수 ({{ labItems.length }} 개)</div>
      </div>
      <div class="lab-wrap">
        <div v-for="(items, i) in labItems" :key="`labCard${i}`" class="lab-card-container" @click="goLab(items)">
          <div class="card-box">
            {{ items }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  components: {
  },
  mixins: [
  ],
  props: {
    msg: String,
  },
  data () {
    return {
      labItems: [
        'test',
        'test2',
        'test3',
        'test4',
        'test5',
        'test6',
        'test7',
        'test8',
        'test9',
        'test10',
        'test4',
        'test5',
        'test6',
      ]
    }
  },
  computed: {
  },
  presets: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    goLab(items: any) {
        this.$router.push({
        path: `/labPage`,
        query: {
            itemName: `${items}`,
        }
      });
    },
  }
}
</script>

<style scoped>
.lab-wrap{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.lab-card-container{
  width: 100%;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.35);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}
.lab-card-container:hover{
  border-top: none;
  border-left: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}
.lab-card-container::after{
  display: block;
  content: "";
  padding-bottom: 100%;
}
.card-box {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
