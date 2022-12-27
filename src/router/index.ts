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
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog/BlogHome.vue')
  },
  {
    path: '/blog/list',
    name: 'bloglist',
    component: () => import('../views/blog/BlogList.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/blog/posting',
    name: 'posting',
    component: () => import('../components/blog/BlogPosting.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
