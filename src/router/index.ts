import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/list",
    name: "postlist",
    component: () => import("../views/PostList.vue"),
  },
  {
    path: "/posting",
    name: "posting",
    component: () => import("../components/blog/BlogPosting.vue"),
  },
  {
    path: "/DumpTester",
    name: "DumpTester",
    component: () => import("../views/sub-page/DumpTester.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to: any, from: any) => {});
router.afterEach(async (to: any, from: any) => {
  // if(to.name === 'home' || to.name === 'posting'){
  //   console.log(to.name);
  // }else{
  //   console.log(to.name);
  // }
});
export default router;
