import axios from '../axios';

const getArticleClass = (): object => {
    return axios.get(`class/getArticleClass`);
};

export default {
    getArticleClass
};
