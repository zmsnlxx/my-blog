<template>
    <section class="commentList" v-loading="loading">
        <formList
                v-show="!isReply && !isSecondReply"
                @getTextarea="getTextarea"
                row="3"
                placeholder="少侠写点什么呢。。。"
                @submitComment="submitComment"></formList>
        <div v-if="_.size(commentData) > 0">
            <div v-for="(item, index) in commentData" :key="index">
                <div class="list">
                    <img :src="item.url" alt="头像失效">
                    <div class="list-content">
                        <p style="width:100%;margin: 0;">{{ item.comment }}</p>
                        <p style="margin: 10px 0 0 0;font-size: 10px;color: #999">
                            <span class="desc">{{ item.name }}</span>
                            <span class="desc">{{ item.getOS }}</span>
                            <span class="desc">{{ item.getBrowse }}</span>
                            <span class="desc">{{ $util.checkTime(item.time) }}</span>
                            <span
                                    v-if="item.userId !== userId"
                                    class="desc"
                                    style="color: #37c6c0"
                                    @click="goReply({id: item.id, index})">回复</span>
                            <span v-if="isFabulous" style="float: right" @click="clickFabulous">
                            <span>{{item.fabulousNum || 0}}</span>
                            <img src="../assets/images/fabulous.png" style="height: 17px;width: 17px;margin-left: 10px;" alt="">
                        </span>
                        </p>
                    </div>
                </div>
                <div class="list">
                    <div style="min-width: 90px"></div>
                    <formList
                            style="width: 100%;margin-bottom: 0"
                            row="1"
                            placeholder="少侠写点什么呢。。。"
                            v-show="isReply && commentIndex === index"
                            @getTextarea="getTextarea"
                            @submitComment="submitComment">
                        <el-button class="slot" style="display: inline-block;float: right;margin: 10px 10px 10px 0;" slot="button" @click="cancelReply">取消回复</el-button>
                    </formList>
                </div>
                <div v-if="_.size(item.reply) !== 0" v-for="(reply, i) in item.reply" :key="i">
                    <div class="list list_reply">
                        <img :src="reply.url" alt="头像失效">
                        <div class="list-content">
                            <p class="reply" v-if="reply.replyUser">{{ reply.replyUser }}</p>
                            <p style="width:100%;margin: 0;">{{ reply.comment }}</p>
                            <p style="margin: 10px 0 0 0;font-size: 10px;color: #999">
                                <span class="desc">{{ reply.name }}</span>
                                <span class="desc">{{ reply.getOS }}</span>
                                <span class="desc">{{ reply.getBrowse }}</span>
                                <span class="desc">{{ $util.checkTime(reply.time) }}</span>
                                <span
                                        v-if="reply.userId !== userId"
                                        class="desc"
                                        style="color: #37c6c0"
                                        @click="goCurrentReply({id: item.id, index: i, data: reply})">回复</span>
                            </p>
                        </div>
                    </div>
                    <div class="list">
                        <formList
                                style="width: 100%;margin-left: 180px;margin-bottom: 0"
                                row="1"
                                placeholder="少侠写点什么呢。。。"
                                v-show="isSecondReply && commentSecondIndex === i && commentId === item.id"
                                @getTextarea="getTextarea"
                                @submitComment="submitComment">
                            <el-button class="slot" style="display: inline-block;float: right;margin: 10px 10px 10px 0;" slot="button" @click="cancelReply">取消回复</el-button>
                        </formList>
                    </div>
                </div>
            </div>
        </div>
        <div class="none" v-else>暂无评论，快来写点什么吧！</div>
        <login-dialog :dialogVisible="dialogVisible" @changeDialog="changeDialog"></login-dialog>
    </section>
</template>

<script lang="ts">
    import {Vue, Component,Prop} from 'vue-property-decorator'

    @Component
    export default class commentList extends Vue {
        @Prop (Array) commentData: Array<object> // 评论数据
        @Prop () userId: any // userId用来判断自己不能回复自己
        @Prop(Boolean) isFabulous: boolean = false // 是否显示点赞
        @Prop() articleId: number | string
        textarea: string = ''; // 文本值
        reply: string = ''; // 回复
        commentId: string | number = '' // 当前评论id
        commentIndex: number = -1 // 当前索引
        isReply: boolean = false; // 是否是回复状态
        isSecondReply: boolean = false // 是否是二级回复状态
        commentSecondIndex: number = -1 //
        dialogVisible: boolean = false // 登陆开关
        userInfo: any = null
        loading: boolean = false

        changeDialog(val: boolean) {
            this.dialogVisible = val;
        }



        // 点击一级回复按钮
        goReply(params: any) {
            const { id, index } = params;
            this.commentId = id;
            this.commentIndex = index;
            this.isReply = true;
            this.isSecondReply = false;
        }

        // 取消回复
        cancelReply() {
            this.commentId = '';
            this.isReply = false;
            this.isSecondReply = false;
            this.commentIndex = -1;
            this.commentSecondIndex = -1
            this.textarea = '';
        }

        // 回复二级评论
        goCurrentReply(params: any) {
            const { id, index, data} = params;
            const { name, comment } = data;
            this.reply = `@${ name }，${ comment }`;
            this.commentId = id;
            this.isSecondReply = true;
            this.isReply = false;
            this.commentSecondIndex = index;
        }

        async submitComment() {
            this.loading = true;
            const userInfo: any = window.localStorage.getItem('userInfo');
            this.userInfo = this.$lo.isEmpty(userInfo) ? null : JSON.parse(userInfo);
            // 判断本地是否存储有用户数据，如果没有打开注册表单并且校验用户信息
            if (this.$lo.isEmpty(this.userInfo)) {
                this.dialogVisible = true
                this.loading = false;
            } else {
                // 直接存储评论
                if (this.textarea === '') {
                    this.$message.warning('请输入评论内容！')
                    this.loading = false;
                    return
                }
                // 评论数据参数
                let commentParams: any = {
                    comment: this.textarea,
                    time: new Date().getTime(),
                    getOS: this.$util.getOS(),
                    getBrowse: this.$util.getBrowse(),
                    reply: [],
                    name: this.userInfo.name,
                    url: this.userInfo.url,
                    userId: this.userInfo.userId
                };
                let params: any = {};
                // 如果是文章评论
                if (this.articleId) {
                    // 如果是回复某条评论
                    if (this.commentId !== '') {
                        commentParams['commentId'] = this.commentId;
                        if (this.reply) {
                            commentParams['replyUser'] = this.reply;
                        }
                    }
                    params = commentParams;
                    // 如果是留言板
                } else {
                    // 如果是回复留言
                    if (this.commentId !== '') {
                        params = {
                            id: this.commentId,
                            reply: this.reply ? Object.assign(commentParams, { replyUser: this.reply}) : commentParams
                        }
                        // 如果是添加留言
                    } else {
                        params = commentParams
                    }
                }
                const {code, data} = this.articleId ? await this.$api.updateArticle({
                    id: this.articleId,
                    // 合并评论数据和用户数据
                    comment: params
                }) : this.commentId !== '' ? await this.$api.updateComment(params) : await this.$api.addComment(params);
                if (code === 0) {
                    this.$emit('getData', data)
                    this.cancelReply();
                }
                this.loading = false;
            }
        }

        // 回复
        async getTextarea(val: string) {
            this.textarea = val;
            await this.submitComment();
        }

        // 点赞
        clickFabulous() {
            return this.$api.updateComment({fabulousNum: 1, id: '15785590599032920'})
        }
    }
</script>

<style lang="less" scoped>
.commentList {
    padding: 30px 20px 10px 20px;

    .list {
        display: flex;
        margin-bottom: 20px;
        img {
            width: 60px;
            height: 60px;
            border-radius: 3px;
            background-size: auto;
        }

        .list-content {
            width: 100%;
            border: 1px solid #eee;
            position: relative;
            margin-left: 30px;
            padding: 5px 20px;

            .reply {
                color: #999;
                border-bottom: 1px dashed #999;
                padding-bottom: 10px;
                box-sizing: border-box;
                margin: 10px 0
            }
        }

        .list-content:before {
            content: '';
            display: inline-block;
            border-top: 9px solid transparent;
            border-bottom: 9px solid transparent;
            border-right: 9px solid #eee;
            position: absolute;
            top: 15px;
            left: -9px;
        }
    }

    .list_reply {
        margin-left: 90px;
    }

    .desc {
        display: inline-block;
        margin-right: 10px
    }
}
</style>
