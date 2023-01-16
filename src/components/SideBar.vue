<template>
    <div class="sidebar-wrap scrollBar" :class="{active: panelState}">
        <div class="lab-wrap">
            <div v-for="(items, i) in labItems" :key="`labCard${i}`" class="lab-card-container">
              <div class="card-box">
                {{ items }}
              </div>
            </div>
          </div>
        <!-- <div class="side-btn"><a href="https://github.com/HDomi" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a></div>
        <div class="side-btn"><font-awesome-icon icon="fa-brands fa-instagram" /></div> -->
    </div>
</template>
  
  <script lang="ts">
  
  export default {
    components: {
    },
    mixins: [
    ],
    props: {
        panelState: Boolean 
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
    }
  }
  </script>

  <style scoped>
  .active{
    transition: .3s;
    right: 0!important;
  }
  .sidebar-wrap{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    width: 300px;
    height: 100%;
    background: rgb(32, 32, 36);
    padding: 15px 5px 15px 5px;
    transition: .3s;
    display: flex;
    flex-direction: column;
    z-index: 999;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    right: -300px;
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
    margin-top: 20px;
  }
  .lab-card-container:first-child{
    margin-top: 0px;
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
  