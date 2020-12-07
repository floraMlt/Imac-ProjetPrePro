import {createWebHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: "/:catchAll(.*)",
    name: 'default',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router