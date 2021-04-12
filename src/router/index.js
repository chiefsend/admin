import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Shares from '@/views/Shares'
import Share from '@/views/Share'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shares',
        name: 'Shares',
        component: Shares
    },
    {
        path: '/share/:id',
        name: 'Share',
        component: Share
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
