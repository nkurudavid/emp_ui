import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/js/variables'
import '../node_modules/axios/dist/axios.min'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/main.css'



const app = createApp(App)

app.use(router)

app.mount('#app')
