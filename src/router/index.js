import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Shares from '@/views/Shares'
import Share from '@/views/Share'
import Error from "@/views/Error"

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
    },
    {
        path: '*',
        name: 'Error',
        component: Error
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
