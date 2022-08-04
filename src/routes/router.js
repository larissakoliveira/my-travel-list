import { createRouter, createWebHistory } from 'vue-router'

import MyList from '@/views/MyList.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/my-list',
    name: 'MyList',
    component: MyList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
