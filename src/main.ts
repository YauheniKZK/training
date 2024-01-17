import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import apolloClient from './API/APIClient'
import { DefaultApolloClient } from '@vue/apollo-composable'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.provide(DefaultApolloClient, apolloClient)

app.mount('#app')
