import axios from '../axios.js'

// 获取留言
const getComment = (params) => {
    return axios.get(`comment/getComment`, {params})
}
// 发表留言
const sendComment = (params) => {
    return axios.post(`comment/sendComment`, params)
}

const comment = {
    getComment,
    sendComment,
}
export default comment
