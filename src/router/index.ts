import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomePage,
  // },

  {
    path: "/",
    name: "portfolio-home",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/aboutme",
    name: "aboutme",
    component: () => import("../views/AboutMe.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/postlist",
    name: "postlist",
    component: () => import("../views/PostList.vue"),
  },
  {
    path: "/postlist/posting",
    name: "posting",
    component: () => import("../components/blog/BlogPosting.vue"),
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
