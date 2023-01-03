import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/notepad',
    name: 'notepad',
    component: () => import('../views/Notepad.vue')
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.afterEach((to: any, from: any) => {
  if(to.name === 'home' || to.name === 'posting'){
    console.log(to.name, '홈, 포스팅 페이지');
  }else{
    console.log(to.name, '그 외');
  }
})
export default router
