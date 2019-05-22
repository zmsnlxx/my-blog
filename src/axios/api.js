import axios from './axios.js'

// 登录接口
const login = (params) => {
    return axios.post(`user/login`, params)
}
// 注册接口
const register = (params) => {
    return axios.post(`user/register`, params)
}


const apiList = {
    login,
    register,
}
export default apiList
