<template>
    <div class="page-wrap">
      <h1>블로그리스트</h1>
      <div class="cutBar"></div>
      <div class="test" @click="test('test')">test</div>
      <div class="test" @click="test('test2')">test2</div>
      <table class="posting-table" border="1px">
        <tr>
          <td>작성자</td>
          <td>제목</td>
          <td>생성일</td>
        </tr>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.fat }}</td>
        </tr>
      </table>
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
        mdText: '',
        headers: [
        {
          text: 'Dessert (100g serving)',
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
        },
      ],

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
      test(test: any) {
          this.$router.push({
          path: `/posting`,
          query: {
              mdId: `${test}`
          }
      })
      },
      }
    }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .test{
    width: 200px;
    height: 50px;
    background: #42b983;
    display: inline-block;
    border: 1px solid #000;
  }
  .posting-table{
    width: 100%;
    border: 1px solid #fff;
  }
  .posting-table tr{
    height: 50px;
    width: 100%;
  }
  </style>
  