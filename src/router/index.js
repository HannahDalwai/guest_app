import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MyBooking from '../views/MyBooking.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/MyBooking',
    name: 'MyBooking',
    component: MyBooking
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
