import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/laboratory',
    name: 'laboratory',
    component: () => import('../views/Laboratory.vue')
  },
  {
    path: '/list',
    name: 'postlist',
    component: () => import('../views/PostList.vue')
  },
  {
    path: '/posting',
    name: 'posting',
    component: () => import('../components/blog/BlogPosting.vue')
  },
  {
    path: '/labPage',
    name: 'labPage',
    component: () => import('../components/laboratory/labPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to: any, from: any) => {

})
router.afterEach(async (to: any, from: any) => {
  // if(to.name === 'home' || to.name === 'posting'){
  //   console.log(to.name);
  // }else{
  //   console.log(to.name);
  // }
})
export default router
