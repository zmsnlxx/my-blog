import axios from '../axios';

// 获取文章
const getArticle = (): any => {
    return axios.get(`article/getAllArticle`);
};

// 获取分类所有文章
const getCurrentClassArticle = (params:{id: any}): object => {
    return axios.get(`article/getArticle`,{params});
};

// 获取指定文章详情
const getArticleDetails = (params: {id: any}) => {
    return axios.get(`article/details`,{params});
};

//获取指定标签的文章
const getTagArticle = (params: {id: string}) => {
    return axios.get(`article/getTagArticle`, {params});
}

// 更新文章
const updateArticle = (params: any) => {
    return axios.post(`article/updateArticle`, params);
};

const article = {
    getArticle,
    getArticleDetails,
    getTagArticle,
    updateArticle,
    getCurrentClassArticle
};
export default article;

