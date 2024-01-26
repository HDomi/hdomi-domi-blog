import{_ as d,c as r,o as s,p as C,b as y,a as o,d as B,m as D,F as I,r as k,t as p,e as l,f as _,n as w}from"./index.b9a4e8b2.js";const m=[{id:"toy",name:"\uD1A0\uC774 \uD504\uB85C\uC81D\uD2B8"},{id:"work",name:"\uC791\uC5C5 \uD504\uB85C\uC81D\uD2B8"}],S=[{categotyId:"toy",id:1,title:"\uD14C\uC2A4\uD2B81",photoId:"toy-test-1.jpg"},{categotyId:"toy",id:2,title:"\uD14C\uC2A4\uD2B82",photoId:"toy-test-2.jpg"}],T={components:{},mixins:[],props:{pageState:Boolean},data(){return{}},async created(){},computed:{},presets:{},watch:{},mounted(){},methods:{}};const g=t=>(C("data-v-062a109f"),t=t(),y(),t),$={class:"thums-wrap"},P=g(()=>o("div",{class:"thums-item bg-img toy-music-player"},[o("p",null,"Music Player")],-1)),b=g(()=>o("div",{class:"thums-item bg-img toy-utils"},[o("p",null,"Utils-for-Developer")],-1)),A=[P,b];function x(t,e,c,u,a,i){return s(),r("div",$,A)}const j=d(T,[["render",x],["__scopeId","data-v-062a109f"]]),F={components:{},mixins:[],props:{pageState:Boolean},data(){return{}},async created(){},computed:{},presets:{},watch:{},mounted(){},methods:{}};const E={class:"thums-wrap"},L=B('<div class="thums-item bg-img works-accu" data-v-53234f9e><p data-v-53234f9e>Accu insight</p></div><div class="thums-item bg-img works-vas" data-v-53234f9e><p data-v-53234f9e>Aiden VAS</p></div><div class="thums-item bg-img works-r-issue" data-v-53234f9e><p data-v-53234f9e>R-Issue</p></div><div class="thums-item bg-img works-gigamec" data-v-53234f9e><p data-v-53234f9e>GigaMEC</p></div><div class="thums-item bg-img works-web-binar" data-v-53234f9e><p data-v-53234f9e>Web Binar</p></div><div class="thums-item bg-img works-aia" data-v-53234f9e><p data-v-53234f9e>AIA \uD64D\uBCF4\uC6A9</p></div><div class="thums-item bg-img works-wannabe-ad" data-v-53234f9e><p data-v-53234f9e>\uC131\uD615\uC571 \uC5B4\uB4DC\uBBFC</p></div>',7),W=[L];function M(t,e,c,u,a,i){return s(),r("div",E,W)}const V=d(F,[["render",M],["__scopeId","data-v-53234f9e"]]),N={components:{ToyProjectThums:j,WorkProjectThums:V},mixins:[],props:{},data(){return{currentCategoryId:"",fromCateId:"",pageState:!1,currentPortfolioThumnail:[]}},async created(){},computed:{pfCategory(){return m},pfDetailArr(){return S}},methods:{...D("layout",["setLoading"]),clearState(){this.fromCateId="",this.currentCategoryId="",this.pageState=!1},getPortfolioDetail(t){if(this.setLoading(!0),this.fromCateId!==t||!this.pageState)try{this.pageState=!0,this.fromCateId=t,this.currentCategoryId=t,this.currentPortfolioThumnail=this.pfDetailArr.filter(e=>e.categotyId===t)}catch(e){console.log(e)}finally{this.setLoading(!1)}else this.clearState(),this.setLoading(!1)},getTitle(){var t,e;return(e=(t=m.find(c=>c.id===this.currentCategoryId))==null?void 0:t.name)!=null?e:""}}};const z={class:"page-wrap"},G={class:"portfolio-wrap-inner scrollBar"},R={class:"category-folder-wrap"},U=["onClick"],q={class:"category-name"},H={key:0,class:"portfolio-list-wrap"},J={class:"thums-title"},K={key:1,class:"portfolio-list-wrap plw-center"};function O(t,e,c,u,a,i){const h=_("ToyProjectThums"),f=_("WorkProjectThums");return s(),r("div",z,[o("div",G,[o("div",R,[(s(!0),r(I,null,k(i.pfCategory,(n,v)=>(s(),r("div",{key:`Category ${v}`,class:"folder-wrap",onClick:Q=>i.getPortfolioDetail(n.id)},[o("div",{class:w(`folder ${a.currentCategoryId===n.id&&a.pageState?"open":""}`)},null,2),o("div",q,p(n.name),1)],8,U))),128))]),a.pageState?(s(),r("div",H,[o("p",J,p(i.getTitle()),1),a.currentCategoryId==="toy"?(s(),l(h,{key:0,pageState:a.pageState},null,8,["pageState"])):(s(),l(f,{key:1,pageState:a.pageState},null,8,["pageState"]))])):(s(),r("div",K," \uD3F4\uB354\uB97C \uB20C\uB7EC \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uBD88\uB7EC\uC640\uC8FC\uC138\uC694! "))])])}const Y=d(N,[["render",O],["__scopeId","data-v-8a1ede34"]]);export{Y as default};