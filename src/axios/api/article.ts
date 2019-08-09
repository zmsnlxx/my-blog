import axios from '../axios';

// 获取留言
const getArticle = (): object => {
    return axios.get(`/art/article/getArticle`);
};
// // 发表留言
// const sendComment = (params: any): object => {
//     return axios.post(`${utilUrl}/sendComment`, params);
// };

const article = {
    getArticle,
    // sendComment,
};
export default article;

