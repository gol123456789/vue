import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// route components
import default1 from './components/default1.vue'
import default2 from './components/default2.vue'
import default3 from './components/default3.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/default1', component: default1},
    
    { path: '/default2', component: default2},
    { path: '/default3', component: default3} ,
   ]
})
const app = createApp(App)
app.use(router);
app.mount('#app')
