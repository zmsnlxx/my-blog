import * as Mutation from '../mutations';

const state = {
    articleInfo: null,
};
const mutations = {
    [Mutation.GET_ARTICLE_INFO]: (state: any, article: any) => {
        state.articleInfo = article;
    }
};

const actions = {
    getArticleInfo: ({commit}: any, article: any) => {
        commit(Mutation.GET_ARTICLE_INFO, article);
    },
};


export default {
    state,
    mutations,
    actions,
};
