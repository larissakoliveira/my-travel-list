import { createRouter, createWebHistory } from 'vue-router'

// import ListView from '@/views/ListView.vue'
// import HomeView from '@/views/HomeView.vue'
import AuthRoutes from './Auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/my-list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  AuthRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
