import{_ as d,o,c as n,a as e,F as i,d as p,t as r,p as _,e as m}from"./index.7eb40beb.js";const v={components:{},mixins:[],props:{},data(){return{mdText:"",headers:[{text:"Dessert (100g serving)",value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6},{name:"Ice cream sandwich",calories:237,fat:9},{name:"Eclair",calories:262,fat:16},{name:"Cupcake",calories:305,fat:3.7}]}},computed:{},presets:{},watch:{},mounted(){},methods:{test(t){this.$router.push({path:"/blog/posting",query:{mdId:`${t}`}})}}};const l=t=>(_("data-v-e6449420"),t=t(),m(),t),C={class:"page-wrap"},g=l(()=>e("h1",null,"\uBE14\uB85C\uADF8\uB9AC\uC2A4\uD2B8",-1)),x=l(()=>e("div",{class:"cutBar"},null,-1)),f={class:"posting-table",border:"1px"},h=l(()=>e("tr",null,[e("td",null,"\uC791\uC131\uC790"),e("td",null,"\uC81C\uBAA9"),e("td",null,"\uC0DD\uC131\uC77C")],-1));function B(t,a,I,b,c,u){return o(),n("div",C,[g,x,e("div",{class:"test",onClick:a[0]||(a[0]=s=>u.test("test"))},"test"),e("div",{class:"test",onClick:a[1]||(a[1]=s=>u.test("test2"))},"test2"),e("table",f,[h,(o(!0),n(i,null,p(c.desserts,s=>(o(),n("tr",{key:s.name},[e("td",null,r(s.name),1),e("td",null,r(s.calories),1),e("td",null,r(s.fat),1)]))),128))])])}const D=d(v,[["render",B],["__scopeId","data-v-e6449420"]]);export{D as default};
