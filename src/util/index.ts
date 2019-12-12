import moment from 'moment';
import _ from 'lodash';
import {Message} from 'element-ui';



/**
 * cookie解码函数
 * @param str
 * @returns {string}
 * @constructor
 */
export const DecodeCookie = (str: string) => {
    let strArr: any = '';
    let strRtn: string = '';
    strArr = str.split('a');
    for (let i = _.size(strArr) - 1; i >= 0; i--) {
        // tslint:disable-next-line:no-eval
        strRtn += String.fromCharCode(eval(strArr[i]));
    }
    return strRtn;
};
const checkResp = (resp: any) => {
    console.log(resp);
    if (resp && (resp.code === 0 || resp.code === 1)) {
        if (resp.data !== null) {
            return resp.data;
        }
        return resp;
    }
    Message.error(resp.data);
    return Promise.reject(resp);
};

export const util = {
    DecodeCookie,
    checkResp
};

export default {
    install(Vue: any) {
        Vue.prototype.$lo = _;
        Vue.prototype._ = _;
        Vue.prototype.$util = util;
        Vue.prototype.moment = moment;
    },
};
