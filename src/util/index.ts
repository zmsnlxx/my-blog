import moment from 'moment';
import _ from 'lodash';
import {Message} from 'element-ui';


/**
 * 获取设备操作系统
 */
export const getOS = () => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = '';

    if (~macosPlatforms.indexOf(platform)) {
        os = 'Mac OS';
    } else if (~iosPlatforms.indexOf(platform)) {
        os = 'iOS';
    } else if (~windowsPlatforms.indexOf(platform)) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    return os;
};

/**
 * cookie解码函数
 * @param str
 * @returns {string}
 * @constructor
 */
export const DecodeCookie = (str: string) => {
    let strRtn: string = '';
    let strArr: any = str.split('a');
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

const getRegExp = (re: any) => {
    let flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
};

/**
 * 判断复杂数据类型
 */
const isType = (obj: any, type: any) => {
    if (typeof obj !== 'object') return false;
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
        case 'Array':
            flag = typeString === '[object Array]';
            break;
        case 'Date':
            flag = typeString === '[object Date]';
            break;
        case 'RegExp':
            flag = typeString === '[object RegExp]';
            break;
        default:
            flag = false;
    }
    return flag;
};

/**
 * 深度克隆
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
export const cloneDeep = (parent: any) => {
    const parents:any = [];
    const children:any = [];

    const _clone = (parent: any) => {
        if (parent === null) return null;
        if (typeof parent !== 'object') return parent;

        let child, proto;

        if (isType(parent, 'Array')) {
            // 对数组做特殊处理
            child = [];
        } else if (isType(parent, 'RegExp')) {
            // 对正则对象做特殊处理
            child = new RegExp(parent.source, getRegExp(parent));
            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (isType(parent, 'Date')) {
            // 对 Date 对象做特殊处理
            child = new Date(parent.getTime());
        } else {
            // 处理对象原型
            proto = Object.getPrototypeOf(parent);
            // 利用Object.create切断原型链
            child = Object.create(proto);
        }

        // 处理循环引用
        const index = parents.indexOf(parent);

        if (index !== -1) {
            // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
            return children[index];
        }
        parents.push(parent);
        children.push(child);

        for (let i in parent) {
            // 递归
            child[i] = _clone(parent[i]);
        }

        return child;
    };

    return _clone(parent);
};

export const util = {
    getOS,
    DecodeCookie,
    checkResp,
    cloneDeep
};

export default {
    install(Vue: any) {
        Vue.prototype.$lo = _;
        Vue.prototype._ = _;
        Vue.prototype.$util = util;
        Vue.prototype.moment = moment;
    },
};
