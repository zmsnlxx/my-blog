// 评论接口
const express = require("express")
const router = express.Router()
const db = require("../db")


// 留言存储
router.post("/api/comment/sendComment", (req, res) => {
    const newComment = new db.commentInfo({
        time: req.body.time,
        value: req.body.value,
        userName: req.body.userName,
        url: req.body.url,
        reply: req.body.reply,
        Os: req.body.os,
        browse: req.body.browse,
        isReply: req.body.isReply
    })
    newComment.save((err) => {
        if (!err) {
            res.send({
                code: 0,
                data: {
                    message: "留言成功!"
                }
            })
        } else {
            res.send({
                code: 1,
                data: {
                    message: "留言失败!"
                },
            })
        }
    })
})

// 留言获取
router.get("/api/comment/getComment", (req, res) => {
    db.commentInfo.find({},(err,data) => {
        if (data) {
            res.send({
                code: 0,
                data,
            })
        } else {
            res.send({
                code: 1,
                data: {
                    message: '获取失败!'
                }
            })
        }
    }).limit(Number(req.query.limit));
})


module.exports = router