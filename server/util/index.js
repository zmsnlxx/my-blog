// 自定义函数方法:
// cookie编码程序
function CodeCookie (str) {
    let strRtn = ""
    for (let i = str.length - 1; i >= 0; i--) {
        strRtn += str.charCodeAt(i)
        if (i) strRtn += "a" //用a作分隔符
    }
    return strRtn
}

function setRandomId() {
    return Date.now() + "" + Math.floor(Math.random() * 10000);
}

module.exports = {
    CodeCookie,
    setRandomId
}