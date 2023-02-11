import { createRouter, createWebHashHistory } from 'vue-router'
import checkRoutes from './checks.js'
import authMiddleware from './middlewares/authMiddleware.js'

const routes = [
  ...checkRoutes,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Auth/LoginView.vue'),
    ...authMiddleware
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
