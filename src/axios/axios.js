/*引入axios*/

import axios from 'axios'
import {Message} from "element-ui"
import router from "../router"

/*创建axios实例对象*/
const ajax = axios.create({
    baseURL: "/api",
    timeout: 30000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    },
    responseType: "json",
})
/*请求拦截器（请求之前的操作）*/
ajax.interceptors.request.use(req => {
        console.log(req)
        // Message.$message({
        //     message: req,
        //     type: 'error'
        // });
    },
    /*错误操作*/
    err => {
        Message.error(err)
    })
/*请求之后的操作*/
ajax.interceptors.response.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})
/*导出模块*/
export default ajax
