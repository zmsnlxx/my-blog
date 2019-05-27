import Vue from 'vue'
import Router from 'vue-router'
import entrance from '@/views/index'
import login from '@/views/other/login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', component: entrance, redirect: {name: 'home'}, children: [
                {path: '/home', name:'home', component:() => import('@/views/home/index'),}
            ]
        },
        {path: '/login', component: login},
    ]
})
