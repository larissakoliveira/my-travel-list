import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import ApolloClient from 'apollo-boost'
import { DefaultApolloClient } from '@vue/apollo-composable'
import router from './routes/router'
import store from './store'

const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
})

createApp(App)
  .use(router)
  .use(store)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app')
