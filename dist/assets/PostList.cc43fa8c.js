import{F as f,a as y}from"./FadeLoader.18a14f6d.js";import{_ as A,c as i,a as t,d as L,e as C,b as S,n as b,w as k,v,F as m,r as _,t as d,o as n,p as x,f as B,g as N}from"./index.e24b8aa2.js";const D={components:{FadeLoader:f},mixins:[],props:{},data(){return{categories:new Array,categoryNames:new Array,checkedCategory:new Array,postingLength:0,isLoading:!1,categoryState:!1,pageState:!1,allChecked:!0}},computed:{},presets:{},watch:{checkedCategory(){this.isLoading=!0,this.categories=[],this.postingLength=0,this.checkedCategory.forEach(async a=>{let e=await this.getPosts(a);this.categories.push({name:a,posts:e}),sessionStorage.setItem("PostList",JSON.stringify(this.categories))}),this.checkedCategory.length!==0?this.pageState=!0:this.pageState=!1,this.categoryNames.length==this.checkedCategory.length?this.allChecked=!0:this.allChecked=!1,this.isLoading=!1}},created(){},async mounted(){this.getCategoryNames()},methods:{async getCategoryNames(){this.isLoading=!0;let a=new Array;await y.get("https://api.github.com/repos/hdomi/posts/contents").then(e=>a=e.data).catch(e=>console.log(`Category ERROR\u{1F644} ${e.response.status} : ${e.request.responseURL}`)),a.forEach(async e=>{e.name!=="img"&&this.categoryNames.push(e.name)}),this.checkedCategory=this.categoryNames,this.isLoading=!1},getPosts(a){return new Promise(e=>{let g=new Array,h=new Array,o=new Array;y.get(`https://api.github.com/repos/hdomi/posts/contents/${a}`).then(l=>{g=l.data,g.forEach(s=>{if(s.name!=="img"){const r=s.name.split("-"),c=r[2].replace(".md","");h.push({name:s.name,title:r[0],date:r[1],description:c})}}),this.postingLength=this.postingLength+h.length,o=h.sort(p);function p(s,r){var c=new Date(s.date).getTime(),u=new Date(r.date).getTime();return c>u?-1:1}e(o)})})},openCategory(){this.categoryState=!this.categoryState},checkAll(){this.allChecked?this.checkedCategory=this.categoryNames:this.checkedCategory=[]},goPost(a,e){this.$router.push({path:"/posting",query:{mdPath:`${a}`,mdId:`${e}`}})}}};const w=a=>(x("data-v-2147c895"),a=a(),B(),a),E={class:"page-wrap scrollBar"},P={key:0,class:"loading-container"},F={class:"loading"},I={class:"page-wrap-inner"},V={class:"page-tit-wrap"},R={class:"main-check-wrap"},T={key:0,class:"category-list"},U={class:"ckb-label",name:"all"},q=w(()=>t("span",null,"\uBAA8\uB450",-1)),z=w(()=>t("div",{class:"cutBar",style:{"margin-bottom":"10px"}},null,-1)),O={class:"ckb-label"},J=["value"],M={class:"main-title",style:{"font-size":"14px"}},j={key:0,class:"list-wrap"},G={class:"category-title"},H={class:"posting-item-wrap"},K=["onClick"],Q={class:"pt-item-inner"},W={class:"pt-item-title"},X={class:"pt-item-text"},Y={class:"pt-item-date"},Z={class:"pt-item-desc"},$={key:1};function ee(a,e,g,h,o,l){const p=N("FadeLoader");return n(),i("div",E,[o.isLoading?(n(),i("div",P,[t("div",F,[L(p)])])):C("",!0),t("div",I,[t("div",V,[t("div",R,[t("div",{class:"main-title",onClick:e[0]||(e[0]=(...s)=>l.openCategory&&l.openCategory(...s))},[S("\uCE74\uD14C\uACE0\uB9AC"),t("span",{class:b(["tryAngle",{revert:o.categoryState}])},"\u25BC",2)]),o.categoryState?(n(),i("ul",T,[t("label",U,[q,k(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.allChecked=s),role:"switch",type:"checkbox",value:"all",name:"all",onChange:e[2]||(e[2]=(...s)=>l.checkAll&&l.checkAll(...s))},null,544),[[v,o.allChecked]])]),z,(n(!0),i(m,null,_(o.categoryNames,(s,r)=>(n(),i("li",{key:`chk-box${r}`},[t("label",O,[t("span",null,d(s),1),k(t("input",{"onUpdate:modelValue":e[3]||(e[3]=c=>o.checkedCategory=c),role:"switch",type:"checkbox",value:s},null,8,J),[[v,o.checkedCategory]])])]))),128))])):C("",!0)]),t("div",M,"\uCD1D \uD3EC\uC2A4\uD305 \uC218 ("+d(o.postingLength)+"\uAC1C)",1)]),o.pageState?(n(),i("div",j,[(n(!0),i(m,null,_(o.categories,(s,r)=>(n(),i("div",{key:`category${r}`,class:"category-wrap"},[t("div",G,d(s.name),1),t("div",H,[(n(!0),i(m,null,_(s.posts,(c,u)=>(n(),i("div",{key:`post${u}`,onClick:te=>l.goPost(s.name,c.name),class:"posting-item"},[t("div",Q,[t("div",W,d(c.title),1),t("div",X,[t("div",Y,d(c.date),1),t("div",Z,d(c.description),1)])])],8,K))),128))])]))),128))])):(n(),i("div",$,"\uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))])])}const oe=A(D,[["render",ee],["__scopeId","data-v-2147c895"]]);export{oe as default};
