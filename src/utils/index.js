import _ from 'lodash'


/**
 * cookie解码函数
 * @param str
 * @returns {string}
 * @constructor
 */
export const DecodeCookie = (str) => {
    let strArr
    let strRtn = ""
    strArr = str.split("a")
    for (let i = _.size(strArr) - 1; i >= 0; i--) {
        strRtn += String.fromCharCode(eval(strArr[i]))
    }
    return strRtn
}

export const util = {
    DecodeCookie,
}

export default {
    install(Vue) {
        Vue.prototype.$lo = _
        Vue.prototype._ = _
        Vue.prototype.$util = util
    }
}
