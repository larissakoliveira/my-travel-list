import { createRouter, createWebHistory } from 'vue-router'

import MyList from '@/pages/MyList.vue'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/my-list', component: MyList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
