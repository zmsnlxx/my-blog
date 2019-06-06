import axios from '../axios.js'

// 登录接口
const login = (params) => {
    return axios.post(`user/login`, params)
}
// 注册接口
const register = (params) => {
    return axios.post(`user/register`, params)
}

const getUserInfo = (params) => {
    return axios.get('user/info',{params})
}

const user = {
    login,
    register,
    getUserInfo,
}
export default user
