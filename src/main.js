import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// load css 
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
