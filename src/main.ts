import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import apolloClient from './API/APIClient'
import { createApolloProvider } from '@vue/apollo-option'

import './assets/main.css'

const app = createApp(App)

app.use(router)


const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

app.use(apolloProvider)

app.mount('#app')
