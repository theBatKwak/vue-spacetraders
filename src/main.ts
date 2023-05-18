import './assets/main.css'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios, { type InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from './stores/auth.store'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toasity, {
  autoClose: 3000,
  theme: 'dark'
} as ToastContainerOptions)

axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  const authStore = useAuthStore()
  if (authStore.isLoggedIn) {
    request.headers.Authorization = 'Bearer ' + authStore.agentToken
  }
  return request
})

app.mount('#app')
