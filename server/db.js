const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myBlog", err => {
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

const Comment = new mongoose.Schema({
    id: String,
    time: String,
    value: String,
    userName: String,
    url: String,
    Os: String,
    browse: String,
    reply: Array,
    isReply: Boolean
})

const db = {
    userInfo: mongoose.model("userInfo", User),
    commentInfo: mongoose.model("commentInfo", Comment),
};

module.exports = db;
