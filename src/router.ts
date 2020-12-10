import Vue from 'vue';
import Router from 'vue-router';
import entrance from './views/index.vue';
import article from './views/other/articleDetails.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/', component: entrance, redirect: {name: 'home'}, children: [
                {path: '/home', name: 'home', component: () => import('./views/home/index.vue')},
                {path: '/comment', name: 'common.less', component: () => import('./views/home/comment/index.vue')},
                {path: '/article', name: 'article', component: () => import('./views/home/articleNav/index.vue')},
                {path: '/tagArticle', name: 'article@tag', component: () => import('./views/home/tagArticle/index.vue')},
            ],
        },
        {path: '/details', component: article},
    ],
});
