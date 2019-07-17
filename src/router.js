import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login/index'
import home from './views/home/index'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/login',
            component: login
        }, {
            path: '/',
            redirect: '/login'
        }, {
            path: '/home',
            component: home,
        }

    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const token = sessionStorage.getItem('token')
    if (!token) return next('/login')
    next()
})


export default router