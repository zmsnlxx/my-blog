const db = require("./db");
const express = require("express");
const router = express.Router();


// 自定义函数方法:
// cookie编码程序
function CodeCookie(str) {
    let strRtn = "";
    
    for (const i = str.length - 1; i >= 0; i--) {
        strRtn += str.charCodeAt(i);
        if (i) strRtn += "a"; //用a作分隔符
    }
    return strRtn;
}

//随机生成id
function setRandomId() {
    return Date.now() + "" + Math.floor(Math.random() * 10000);
}

// 注册接口
router.post("/api/user/register", (req, res) => {
    console.log(req.body);
    db.User.findOne({
            name: req.body.name
        },
        (err, data) => {
            if (data) {
                res.send({
                    status: 1002,
                    message: "账号已被注册!"
                });
            } else {
                const newAccount = new db.User({
                    name: req.body.name,
                    password: req.body.password,
                    psw: req.body.psw,
                    email: req.body.email,
                    address: req.body.address
                });
                //   newAccount.psw = md5(newAccount.psw);
                newAccount.save(function (err) {
                    if (!err) {
                        res.send({
                            status: 1000,
                            message: "账号注册成功!"
                        });
                    } else {
                        res.send({
                            status: 1001,
                            message: "账号注册失败!",
                            data: err
                        });
                    }
                });
            }
        }
    );
});

// 登录接口
router.post("/api/user/login", (req, res) => {
    db.User.findOne({
            name: req.body.name
        },
        (err, data) => {
            if (data) {
                if (data.password === req.body.password) {
                    res.cookie("name", CodeCookie(data.name), {
                        //有效期，单位是秒
                        maxAge: 1000 * 24 * 60 * 60
                    });
                    res.send({
                        status: 1000,
                        message: "登录成功!"
                    });
                } else {
                    res.send({
                        status: 1001,
                        message: "密码错误!"
                    });
                }
            } else {
                res.send({
                    status: 1002,
                    message: "账号未注册,请注册!"
                });
            }
        }
    );
});


module.exports = router;
