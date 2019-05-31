const express = require("express");
const app = express();
const http = require('http')
const bodyParser = require("body-parser");
// 引入写好的api接口
const user = require("./interface/user");
const comment = require("./interface/comment");
// 操作路径
const path = require("path");
//cookie-parser模块，用于cookie解析，cookie的值是一个字符串，格式为x1=y1;x2=y2;.....。cookie-parser可以将字符串解析为对象，添加在请求报文对象req.cookies中。
const cookieParser = require("cookie-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(user);
app.use(comment);

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, "../dist")));
// 因为是单页应用 所有请求都走/dist/index.html
app.set("*", function (req, res) {
    const html = fs.readFileSync(
        path.resolve(__dirname, "../dist/index.html"),
        "utf-8"
    );
    res.send(html);
});

http.createServer(app).listen(3000, () => {
    console.log("服务器已开启");
})

