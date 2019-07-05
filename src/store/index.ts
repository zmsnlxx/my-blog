import Vue from 'vue';
import vuex from 'vuex';
import user from './modules/user';


Vue.use(vuex);

export default new vuex.Store({
// 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
// 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
// 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
    modules: {
        user,
    },
    getters: {
        // data: state => state.data.data,
        user: (state: any): any => state.user.user,
        // modular: state => state.data.data[0],
        // function:state => state.data.data[1],
        // shoppingData: state => state.data.shoppingData.data.productList,
    },
});
