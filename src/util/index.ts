import moment from 'moment';
import _ from 'lodash';


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

export const util = {
    DecodeCookie,
};

export default {
    install(Vue: any) {
        Vue.prototype.$lo = _;
        Vue.prototype._ = _;
        Vue.prototype.$util = util;
        Vue.prototype.moment = moment;
    },
};
