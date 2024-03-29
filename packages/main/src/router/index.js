import { createRouter, createWebHistory } from 'vue-router'
import mini from '../components/mini.vue'
import daostylecomponent from '../components/daostyle.vue'

const routes = [
  {
      path: '/',
      component: () => import('../views/Home.vue'),
      name: 'Home',
      children: [
        {
          path: '/huge-spa-1:pathMatch(.*)',
          name: 'huge-spa-1',
          component: mini
        },
        {
          path: '/huge-spa-2:pathMatch(.*)',
          name: 'huge-spa-2',
          component: mini
        },
        {
          path: '/dao-style-c',
          name: 'dao-style-component',
          component: daostylecomponent
        },
      ]
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
