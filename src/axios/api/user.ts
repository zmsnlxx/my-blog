import axios from '../axios';

// 登录接口
const login = (params: any): object => {
    return axios.post(`user/login`, params);
};
// 注册接口
const register = (params: any): object => {
    return axios.post(`user/register`, params);
};

const getUserInfo = (params: any): object => {
    return axios.get('user/info', {params});
};

const user = {
    login,
    register,
    getUserInfo,
};
export default user;
