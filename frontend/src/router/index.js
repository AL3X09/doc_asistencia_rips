import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/L',
    name: 'Lo',
    component: Login
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Register
  },
  {
    path: '/K',
    name: 'K',
    component: Register

    //component: Registro
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  //history: createWebHashHistory(),
  routes
})

export default router
