// 评论接口
const express = require("express")
const router = express.Router()
const db = require("../db")
const util = require('../util')
const _ = require('lodash')


// 留言存储
router.post("/api/comment/sendComment", (req, res) => {
    const newComment = new db.commentInfo({
        id: util.setRandomId(),
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

function sendReply(req) {
    return db.commentInfo.update({
        id: req.body.id
    }, {
        $push: {
            reply: req.body.reply
        }
    })
}

// 回复功能
router.post("/api/comment/sendReply", async (req, res) => {
    try{
        const result = await sendReply(req)
        if(!!result.ok){
            res.send({
                code: 200,
                data:'回复成功！'
            })
        }else{
            res.send({
                code: 404,
                data:'回复失败！'
            })
        }
    }catch (e) {
        res.send({
            code: 500,
            data:e
        })
    }
})


function getComment(){
    return db.commentInfo.find()
}

// 留言获取
router.get("/api/comment/getComment", async (req, res) => {
    const data = await getComment()
    const sendData = _.cloneDeep(data).reverse()
    if(sendData && !_.isEmpty(sendData)){
        res.send({
            code: 0,
            data:sendData,
        })
    }else{
        res.send({
            code: 1,
            data: {
                message: '获取失败!'
            }
        })
    }
})


module.exports = router