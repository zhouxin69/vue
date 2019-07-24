import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/index'
import Home from '../views/home/index'
import Welcome from '../views/home/welcome'
import Users from '../views/home/users'
import Rights from '../views/home/rights'
import Roles from '../views/home/roles'
import Categories from '../views/home/categories'
import Params from '../views/home/params'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/login',
            component: Login
        }, {
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: Home,
            redirect: '/home/welcome',
            children: [{
                path: '/home/welcome',
                component: Welcome
            }, {
                path: '/users',
                component: Users
            }, {
                path: '/rights',
                component: Rights
            }, {
                path: '/roles',
                component: Roles
            }, {
                path: '/categories',
                component: Categories
            }, {
                path: '/params',
                component: Params
            }]
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