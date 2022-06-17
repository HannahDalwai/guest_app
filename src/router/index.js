import { createRouter, createWebHistory } from 'vue-router'
import Departure from '../views/Departure.vue'
import Login from '../views/Login.vue'
import MyBooking from '../views/MyBooking.vue'
import Arrival from '../views/Arrival.vue'
import During from '../views/During.vue'

const routes = [
  {
    path: '/',
    name: 'Departure',
    component:Departure
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/MyBooking',
    name: 'MyBooking',
    component: MyBooking
  },
  {
    path: '/Arrival',
    name: 'Arrival',
    component: Arrival
  },
  {
    path: '/During',
    name: 'During',
    component:During
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
