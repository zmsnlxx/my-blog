import CardNav from './card.vue';
import ListNav from './list.vue';
import commentList from './commentList.vue';
import loginDialog from './loginDialog.vue';
import formList from './formList.vue';



export default {
    install(Vue: any) {
        Vue.component('CardNav', CardNav);
        Vue.component('ListNav', ListNav);
        Vue.component('commentList', commentList);
        Vue.component('loginDialog', loginDialog);
        Vue.component('formList', formList);
    },
};

