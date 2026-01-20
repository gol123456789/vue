import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// route components
import default1 from './components/default1.vue'
import default2 from './components/default2.vue'
import default3 from './components/default3.vue'

type routeProp = {
  routes: RouteRecordRaw[]
}
const routeRecords: RouteRecordRaw[] = [
  {
    path: '/default1',
    component: default1,
    name: 'home',
    meta: {
      menu: [
        'defaultMenu'
      ],
    }
  },

  {
    path: '/default2',
    name: 'page2',
    component: default2,
    meta: {
      menu: [
        'defaultMenu'
      ],
    }
  },
  { path: '/default3',
     name: 'page3',
    component: default3,
    meta: {
      menu: [
        'defaultMenu'
      ],
    }
  } ,
];


const router = createRouter({
  history: createWebHistory(),
  routes: routeRecords,
})
const app = createApp(App)
app.use(router);
app.mount('#app', { routes: routeRecords });
