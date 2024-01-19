import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import store from './store/store'
import apolloProvider from './api/APIClient'

const app = createApp(App)

app.use(router)
app.use(VueCookies)
app.use(store)
app.use(apolloProvider)

app.mount('#app')
