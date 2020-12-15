import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Ricky from './components/Ricky.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path:'/', component: Ricky}
  ]

})

const app = createApp(App)
app.use(router)
  app.mount('#app')
