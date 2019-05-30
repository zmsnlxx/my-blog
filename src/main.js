import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import store from './store'
import util from './utils'
import axios from './axios'
import Components from './components'


Vue.config.productionTip = false

Vue.use(Element, { size: 'small'})
Vue.use(util)
Vue.use(axios)
// 注册全局组件
Vue.use(Components)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
