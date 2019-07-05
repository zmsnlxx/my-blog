/*引入axios*/

import axios from 'axios';
import {Message} from 'element-ui';
// import JsCookie from 'js-cookie'
// import _ from 'lodash'
// import router from "../router"

/*创建axios实例对象*/
const ajax = axios.create({
    baseURL: '/api',
    timeout: 30000,
});
/*请求拦截器（请求之前的操作）*/
ajax.interceptors.request.use(req => {
        // _.isEmpty(JsCookie.get('email'))
        return req;
    },
    /*错误操作*/
    err => {
        Message.error(err);
    });
/*请求之后的操作*/
ajax.interceptors.response.use(res => {
    return res;
}, err => {
    Message.error(err);
});
/*导出模块*/
export default ajax;
