import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Ricky from './components/Ricky.vue';
import Ricky2 from './components/Ricky2.vue'

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Ricky},
    {path: '/ricky2', component: Ricky2}
  ]

});

const app = createApp(App);
app.use(router);
app.mount('#app');
