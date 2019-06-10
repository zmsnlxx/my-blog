import Vue from 'vue'
import Router from 'vue-router'
import entrance from './views/index'
import login from './views/other/login'
import personal from './views/other/personal'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', component: entrance, redirect: {name: 'home'}, children: [
                {path: '/home', name:'home', component:() => import('./views/home/index')},
                {path: '/comment', name:'comment', component:() => import('./views/comment/index')},
                {path: '/article', name:'article', component:() => import('./views/articleNav/index')},
                {path: '/edit', name:'edit', component:() => import('./views/edit/index')},
                {path: '/newArticle', name:'newArticle', component:() => import('./views/new/index')},
            ]
        },
        {path: '/login', component: login},
        {path: '/personal', component: personal},
    ]
})
