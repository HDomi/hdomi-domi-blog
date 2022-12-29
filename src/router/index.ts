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
    name: 'bloglist',
    component: () => import('../views/BlogList.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
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

export default router
