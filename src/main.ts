import './assets/main.css'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toasity, {
  autoClose: 3000,
  theme: 'dark'
} as ToastContainerOptions)

app.mount('#app')
