import { createApp } from 'vue'
import App from './App.vue'

import router from'./router.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/style/css/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
