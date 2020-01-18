import moment from 'moment';
import _ from 'lodash';
import {Message} from 'element-ui';


/**
 * 获取设备操作系统
 */
const getOS = () => {
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

const getBrowse = () => {
    const browser: any = {};
    const userAgent = navigator.userAgent.toLowerCase();
    let s;
    (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1] : (s = userAgent.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s = userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
    let version = "";
    if (browser.ie) {
        version = 'IE ' + browser.ie;
    } else {
        if (browser.firefox) {
            version = 'firefox ' + browser.firefox;
        } else {
            if (browser.chrome) {
                version = 'chrome ' + browser.chrome;
            } else {
                if (browser.opera) {
                    version = 'opera ' + browser.opera;
                } else {
                    if (browser.safari) {
                        version = 'safari ' + browser.safari;
                    } else {
                        version = '未知浏览器';
                    }
                }
            }
        }
    }
    return version;
}

/**
 * cookie解码函数
 * @param str
 * @returns {string}
 * @constructor
 */
const DecodeCookie = (str: string) => {
    let strRtn: string = '';
    let strArr: any = str.split('a');
    for (let i = _.size(strArr) - 1; i >= 0; i--) {
        // tslint:disable-next-line:no-eval
        strRtn += String.fromCharCode(eval(strArr[i]));
    }
    return strRtn;
};

const checkResp = (resp: any) => {
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

const checkTime = (val: any) => {
    return moment(Number(val)).format('YYYY-MM-DD HH:mm:ss')
}

// 排序
const sortKey = (array: Array<any>, key: string) => {
    return array.sort(function(a, b) {
        const x = typeof a[key] === 'object' ? a[key].length : a[key];
        const y = typeof b[key] === 'object' ? b[key].length : b[key];
        return y - x;
    });
}

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
const cloneDeep = (parent: any) => {
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
    getBrowse,
    DecodeCookie,
    checkResp,
    cloneDeep,
    sortKey,
    checkTime
};

export default {
    install(Vue: any) {
        Vue.prototype.$lo = _;
        Vue.prototype._ = _;
        Vue.prototype.$util = util;
    },
};
