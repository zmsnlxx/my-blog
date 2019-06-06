import axios from '../axios.js'
const utilUrl = 'comment'

// 获取留言
const getComment = (params) => {
    return axios.get(`${utilUrl}/getComment`, {params})
}
// 发表留言
const sendComment = (params) => {
    return axios.post(`${utilUrl}/sendComment`, params)
}

// 发表回复
const sendReply = (params) => {
    return axios.post(`${utilUrl}/sendReply`,params)
}

const comment = {
    getComment,
    sendComment,
    sendReply,
}
export default comment
