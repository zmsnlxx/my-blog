import CardNav from './card'
import LabelNav from './label'
import ListNav from './list'


export default {
    install (Vue) {
        Vue.component('CardNav', CardNav);
        Vue.component('LabelNav', LabelNav);
        Vue.component('ListNav', ListNav);
    }
}
