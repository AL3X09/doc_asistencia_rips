import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Temas from '../views/Temas.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {title: 'Login'}
    },
    {
        path: '/registro',
        name: 'Registro',
        component: Register,
        meta: {title: 'Registro'}

    },
    {
        path: '/temas',
        name: 'Temas',
        component: Temas,
        meta: {title: 'Temas'}
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router