import { createRouter, createWebHistory } from 'vue-router'

// import ListView from '@/views/ListView.vue'
// import HomeView from '@/views/HomeView.vue'
// import AuthRoutes from './Auth'

const routes = [
  {
    path: '/',
    name: 'countries',
    component: () => import('../views/CountriesView.vue')
  },
  {
    path: '/my-list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  }
  // AuthRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
