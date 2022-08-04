import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import ApolloClient from 'apollo-boost'
import { DefaultApolloClient } from '@vue/apollo-composable'
import router from './routes/router'

const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
})

const main = createApp(App)

main.use(router)
main.provide(DefaultApolloClient, apolloClient)
main.mount('#app')
