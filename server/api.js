const db = require("./db")
const express = require("express")
const router = express.Router()


// 自定义函数方法:
// cookie编码程序
function CodeCookie (str) {
    let strRtn = ""
    
    for (const i = str.length - 1; i >= 0; i--) {
        strRtn += str.charCodeAt(i)
        if (i) strRtn += "a" //用a作分隔符
    }
    return strRtn
}

// 注册接口
router.post("/api/user/register", (req, res) => {
    console.log(req.body)
    db.userInfo.findOne({
            name: req.body.name
        },
        (err, data) => {
            if (data) {
                res.send({
                    code: 1,
                    data: {
                        message: "账号已被注册!"
                    }
                })
            } else {
                const newUser = new db.userInfo({
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email,
                })
                newUser.save(function (err) {
                    if (!err) {
                        res.send({
                            code: 0,
                            data: {
                                message: "账号注册成功!"
                            }
                        })
                    } else {
                        res.send({
                            code: 2,
                            data: {
                                message: "账号注册失败!"
                            },
                        })
                    }
                })
            }
        }
    )
})

// 登录接口
router.post("/api/user/login", (req, res) => {
    db.userInfo.findOne({
            name: req.body.name
        },
        (err, data) => {
            if (data) {
                if (data.password === req.body.password) {
                    res.cookie("name", CodeCookie(data.name), {
                        //有效期，单位是秒
                        maxAge: 1000 * 24 * 60 * 60
                    })
                    res.send({
                        code: 0,
                        data: {
                            message: "登录成功!"
                        }
                    })
                } else {
                    res.send({
                        code: 1,
                        data: {
                            message: "密码错误!"
                        }
                    })
                }
            } else {
                res.send({
                    code: 2,
                    data: {
                        message: "账号未注册,请注册!"
                    }
                })
            }
        }
    )
})


module.exports = router
