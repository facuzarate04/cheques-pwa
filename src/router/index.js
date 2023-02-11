import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/LoginView.vue')
  },
  {
    path: '/checks',
    name: 'checks.index',
    component: () => import('../views/Checks/IndexView.vue')
  },
  {
    path: '/checks/create',
    name: 'checks.create',
    component: () => import('../views/Checks/CreateView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
