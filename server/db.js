const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myBlog", function (err) {
    if (err) {
        console.log("数据库连接失败");
    } else {
        console.log("数据库连接成功");
    }
});


const User = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
})

module.exports = {
    User,
}
