import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(store)
app.mount('#app')
