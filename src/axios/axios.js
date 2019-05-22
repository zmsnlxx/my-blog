/*引入axios*/
import axios from 'axios'
/*创建axios实例对象*/
const ajax = axios.create({
    baseURL: "/api",
    timeout: 30000
})
/*请求拦截器（请求之前的操作）*/
ajax.interceptors.request.use(config => {
        return config
    },
    /*错误操作*/
    err => {
        return Promise.reject(err)
    })
/*请求之后的操作*/
ajax.interceptors.response.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})
/*导出模块*/
export default ajax
