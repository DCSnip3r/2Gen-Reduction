import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EOCPView from '../views/EOCPView.vue'
import GLLView from '../views/GLLView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/eocp',
      name: 'eocp',
      component: EOCPView,
    },
    {
      path: '/2gll',
      name: '2gll',
      component: GLLView,
    },
  ],
})

export default router
