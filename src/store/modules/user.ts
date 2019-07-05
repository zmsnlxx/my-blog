/* 引入常量文件 */
import * as Mutation from '../mutations';

// user数据源
const state = {
    user: {},
};

// mutations更改设置state；Mutation 必须是同步函数；
const mutations = {
    /* 每个 mutation 都有一个事件类型 (type) 和 一个 回调函数 (handler) */
    // 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数；第二个参数为更改数据所需要传的参数

    /* 使用常量替代 Mutation 事件类型好处方便多人协作阅读理解 */
    [Mutation.SET_USER_INFO]: (state: any, user: any) => {
        state.user = user;
    },
};

/* Action 类似于 mutation，不同在于： */
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
const actions = {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此可以调用 context.commit 提交一个 mutation，

    /* 使用es6的参数结构来代替context简化代码 */
    setUserInfo: ({commit}: any, user: any) => {
        commit(Mutation.SET_USER_INFO, user);
    },
};


export default {
    state,
    mutations,
    actions,
};
