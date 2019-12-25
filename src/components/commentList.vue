<template>
    <section class="commentList">
        <div v-for="(item, index) in commentData" :key="index">
            <div class="list">
                <img :src="item.url" alt="头像失效">
                <div class="list-content">
                    <p style="width:100%;margin: 0;">{{ item.comment }}</p>
                    <p style="margin: 10px 0 0 0;font-size: 10px;color: #999">
                        <span class="desc">{{ item.name }}</span>
                        <span class="desc">{{ item.getOS }}</span>
                        <span class="desc">{{ item.getBrowse }}</span>
                        <span class="desc">{{ item.time }} {{item.userId}}</span>
                        <span v-if="item.userId !== userId" class="desc" style="color: #37c6c0" @click="goReply(item.id, index)">回复</span>
                    </p>
                </div>
            </div>
            <div v-show="isReply && commentIndex === index" style="margin: 20px 0 60px 90px">
                <el-input type="textarea" :rows="2"
                          placeholder="少侠写点什么呢。。。"
                          v-model="textarea"></el-input>
                <el-button style="display: inline-block;float: right;margin: 10px 0 10px 10px" @click="cancelReply">取消回复</el-button>
                <el-button type="primary" style="display: inline-block;float: right;margin: 10px 0 10px 10px" @click="submitReply">发表评论</el-button>
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
                            <span class="desc">{{ reply.time }}</span>
                            <span v-if="reply.userId !== userId" class="desc" style="color: #37c6c0" @click="goCurrentReply(item.id, i, reply)">回复</span>
                        </p>
                    </div>
                </div>
                <div style="margin: 20px 0 60px 90px" v-show="isCommentReply && commentReplyIndex === i && commentId === item.id">
                    <el-input type="textarea" :rows="2"
                              placeholder="少侠写点什么呢。。。"
                              v-model="textarea"></el-input>
                    <el-button style="display: inline-block;float: right;margin: 10px 0 10px 10px" @click="cancelReply">取消回复</el-button>
                    <el-button type="primary" style="display: inline-block;float: right;margin: 10px 0 10px 10px" @click="submitReply">发表评论</el-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Vue, Component,Prop} from 'vue-property-decorator'

    @Component
    export default class commentList extends Vue {
        @Prop (Array) commentData: Array<object>
        @Prop (Number) commentIndex: number
        @Prop (Number) commentReplyIndex: number
        @Prop (Boolean) isReply: boolean
        @Prop (Boolean) isCommentReply: boolean
        @Prop () userId: any
        textarea: string = '';
        reply: string = '';
        commentId: string | number = ''

        goReply(id: string | number, index: number) {
            this.commentId = id;
            this.$emit('goReply', {isReply: true, index, isCommentReply: false})
        }

        goCurrentReply(id: string | number, index: number, params: any) {
            this.commentId = id;
            const { name, comment } = params;
            this.reply = `@${ name }，${ comment }`;
            this.$emit('goCurrentReply', {isCommentReply: true, index, isReply: false})
        }

        cancelReply() {
            this.$emit('changeReply', false);
            this.textarea = '';
        }

        submitReply() {
            if (this.textarea === '') {
                this.$message.warning('请输入评论内容！')
                return
            }
            if (this.userId === '') {
                this.$emit('login')
            } else {
                this.$emit('reply', {commentId: this.commentId, textarea: this.textarea, reply: this.reply})
                this.cancelReply();
            }
        }
    }
</script>

<style lang="less" scoped>
.commentList {
    margin-top: 60px;
    padding: 12px 20px 0 20px;

    .list {
        display: flex;
        margin-bottom: 20px;
        img {
            width: 60px;
            height: 60px;
            border-radius: 3px;
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
