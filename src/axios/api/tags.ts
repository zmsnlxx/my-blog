import axios from '../axios';

// 获取文章标签
const getArticleTags = (): object => {
    return axios.get(`tags/getArticleTags`);
};


export default {
    getArticleTags,
};

