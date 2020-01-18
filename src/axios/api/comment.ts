import axios from '../axios';

const utilUrl: string = 'comment';

// 获取留言
const getComment = () => {
    return axios.get('comment/getComment');
};
// 发表留言
const addComment = (params: any): object => {
    return axios.post('comment/addComment', params);
};

// 更新留言
const updateComment = (params: any): object => {
    return axios.post('comment/updateComment', params);
};

const comment = {
    getComment,
    addComment,
    updateComment,
};
export default comment;

