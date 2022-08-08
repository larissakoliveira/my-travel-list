import AuthView from '../views/Auth/indexView.vue'

export default {
  path: '/auth',
  name: 'Authentication',
  component: AuthView,
  children: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Auth/LoginView.vue')
      // redirect: '/auth/login'
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Auth/RegisterView.vue')
    }
  ]
}
