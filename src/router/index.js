import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/Home.vue")
    },
    {
        path: '/shares',
        name: 'Shares',
        component: () => import("@/views/Shares.vue")
    },
    {
        path: '/share/:id',
        name: 'Share',
        component: () => import("@/views/Share.vue")
    },
    {
        path: '*',
        name: 'Error',
        component: () => import("@/views/Error.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
