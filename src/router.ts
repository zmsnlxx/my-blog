import Vue from 'vue';
import Router from 'vue-router';
import entrance from './views/index.vue';
import login from './views/other/login.vue';
import personal from './views/other/personal.vue';
import article from './views/other/articleDetails.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/', component: entrance, redirect: {name: 'home'}, children: [
                {path: '/home', name: 'home', component: () => import('./views/home/index.vue')},
                {path: '/comment', name: 'common.less', component: () => import('./views/comment/index.vue')},
                {path: '/article', name: 'article', component: () => import('./views/articleNav/index.vue')},
                {path: '/edit', name: 'edit', component: () => import('./views/edit/index.vue')},
                {path: '/newArticle', name: 'newArticle', component: () => import('./views/new/index.vue')},
            ],
        },
        {path: '/login', component: login},
        {path: '/personal', component: personal},
        {path: '/details', component: article},
    ],
});
