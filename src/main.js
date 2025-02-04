import './assets/css/tailwind.css'
import './assets/css/custom.css'
import './assets/fonts/satoshi/Satoshi.css'
import './assets/fonts/iconly/iconly.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('body')
