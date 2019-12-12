import axios from '../axios';

// 获取文章
const getArticle = (): any => {
    return axios.get(`article/getAllArticle`);
};

// 获取指定文章详情
const getArticleDetails = (params: {id: any}) => {
    return axios.get(`article/details`,{params});
};

//

const article = {
    getArticle,
    getArticleDetails
};
export default article;

