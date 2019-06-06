import CardNav from './card'
import LabelNav from './label'
import ListNav from './list'
import SmallLabel from './Small-label'
import CommentNav from './comment'


export default {
    install (Vue) {
        Vue.component('CardNav', CardNav);
        Vue.component('LabelNav', LabelNav);
        Vue.component('ListNav', ListNav);
        Vue.component('SmallLabel', SmallLabel);
        Vue.component('CommentNav', CommentNav);
    }
}
