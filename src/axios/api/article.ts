import axios from '../axios';

// 获取文章
const getArticle = (): any => {
    return axios.get(`article/getAllArticle`);
};

// 获取指定文章详情
const getArticleDetails = (params: {id: any}) => {
    return axios.get(`article/details`,{params});
};

//获取指定标签的文章
const getTagArticle = (params: {id: string}) => {
    return axios.get(`article/getTagArticle`, {params});
}

const article = {
    getArticle,
    getArticleDetails,
    getTagArticle
};
export default article;

