import AuthView from '../views/Auth/indexView.vue'

export default {
  path: '/auth',
  name: 'Authentication',
  component: AuthView,
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: 'register',
      name: 'Register',
      component: () => import('../views/Auth/RegisterView.vue')
    }
  ]
}
