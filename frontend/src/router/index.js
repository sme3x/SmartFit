import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import ControlPanel from '../views/ControlPanel.vue'
import Login from '@/components/login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/control-panel',
      name: 'control-panel',
      component: ControlPanel
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
