import axios from '../axios';

const utilUrl: string = 'comment';

// 获取留言
const getComment = (params: any): object => {
    return axios.get(`/api/${utilUrl}/getComment`, {params});
};
// 发表留言
const addComment = (params: any): object => {
    return axios.post(`${utilUrl}/addComment`, params);
};

// 更新留言
const updateComment = (params: any): object => {
    return axios.post(`${utilUrl}/updateComment`, params);
};

// 发表回复
const sendReply = (params: any): object => {
    return axios.post(`/api/${utilUrl}/sendReply`, params);
};

const comment = {
    getComment,
    addComment,
    updateComment,
    sendReply,
};
export default comment;

