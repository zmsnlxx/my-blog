<template>
    <section class="articleDetails">
        <el-card class="card" v-loading="loading">
            <div slot="header" class="clearfix">
                <h1>{{ currentArticleInfo.title }}</h1>
                <span class="desc">最后编辑时间：{{ currentArticleInfo.updateTime ? currentArticleInfo.updateTime : currentArticleInfo.createdTime}}</span>
                <span class="desc">分类：{{ currentArticleInfo.categoryName }}</span>
                <span class="desc">作者：{{ currentArticleInfo.author || 'lxx' }}</span>
            </div>
            <div class="card-body">
                <div v-html="currentArticleInfo.content"></div>
            </div>
            <div class="btn-body" v-show="!loading">
                <el-button class="btn" :type="isFabulous ? 'primary' : ''" @click="clickFabulous">点赞</el-button>
                <el-button class="btn" @click="goShare">分享</el-button>
                <label for="copy"></label>
                <textarea id="copy" style="outline: none;border: none;width: 0;height: 0;resize:none">http://blog.zmsnlxx.cn/details?id={{ articleId }}</textarea>
            </div>
            <div class="next-body">
                <div class="item" @click="goNextArticle(_.get(articleData, `${currentIndex - 1}.id`))">上一篇：{{articleData[currentIndex - 1] ? _.get(articleData, `${currentIndex - 1}.title`) : '暂无更多文章'}}</div>
                <div class="item" @click="goNextArticle(_.get(articleData, `${currentIndex + 1}.id`))">下一篇：{{articleData[currentIndex + 1] ? _.get(articleData, `${currentIndex + 1}.title`) : '暂无更多文章'}}</div>
            </div>
        </el-card>
        <el-card class="card">
            <p style="margin: 0">相关文章推荐</p>
            <div style="margin-top: 20px;display: flex;flex-wrap:wrap" v-if="_.size(relevantArticle) > 0">
                <div class="articleTab" style="width: 50%;height: 40px;line-height: 40px" v-for="(item, index) in relevantArticle" :key="item.id" @click="goNextArticle(item.id)">{{ index + 1}}、{{ item.title }}</div>
            </div>
            <div style="margin-top: 20px" v-else>暂无相关文章</div>
        </el-card>
        <el-card class="card">
            <p style="margin: 0">发表评论（{{ _.size(currentArticleInfo.commentData) }}条评论）</p>
            <div v-show="!isReply" style="margin-top: 20px;padding: 0 20px">
                <el-input type="textarea" :rows="2"
                          placeholder="少侠写点什么呢。。。"
                          v-model="textarea"></el-input>
                <el-button type="primary" style="display: inline-block;float: right;margin-top: 20px" @click="submitComment(false)">发表评论</el-button>
                <el-form :model="userForm" v-show="isShowInput" style="width: 40%;margin-top: 40px" :rules="rules" ref="userForm" >
                    <el-form-item label="昵称（必填）" prop="name">
                        <el-input type="text" v-model="userForm.name" placeholder="请输入昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱（必填）" prop="email">
                        <el-input type="email" v-model="userForm.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <commentList
                    v-if="_.size(currentArticleInfo.commentData) > 0"
                    :commentData="currentArticleInfo.commentData"
                    :commentIndex="commentIndex"
                    :isReply="isReply"
                    :userId="_.get(userInfo, 'userId') || ''"
                    @changeReply="changeReply"
                    @goReply="goReply"
                    @reply="reply"
            ></commentList>
            <div style="margin-top: 20px" v-else>暂无评论，快来写点什么吧！</div>
        </el-card>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import Types from "../../../types/index";
    import hljs from "highlight.js";
    import "highlight.js/styles/github.css";
    import moment from 'moment'
    @Component

    export default class articleDetails extends Vue {
        articleId: number = 0;
        currentArticleInfo= {};
        loading: boolean = true;
        isFabulous: boolean = false
        articleData: any = [];
        currentIndex: number = 0;
        articleArr: Array<string | number> = [];
        currentTagId: string | number = '';
        relevantArticle: any = [];
        textarea: string = '';
        userInfo: any = {};
        isShowInput: boolean = false;
        userForm: any = {
            name: '',
            email: '',
        };
        isReply: boolean = false;
        commentIndex: number = 0;
        rules: any = {
            name: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
            ],
            email: [
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]
        };
        urls: Array<string> = [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2581344158,1936977504&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3131014590,2678103185&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1040769141,2662586935&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2028720503,1488361990&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=340783658,2065952350&fm=26&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1026849239,3021356451&fm=11&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3243845233,4241168040&fm=26&gp=0.jpg'
        ]


        async mounted(){
            const articleData:any = window.localStorage.getItem('articleData');
            const userInfo: any = window.localStorage.getItem('userInfo');
            this.articleData = JSON.parse(articleData);
            this.articleId = this.$lo.get(this.$route, 'query.id');
            this.userInfo = JSON.parse(userInfo)
            await this.getArticleDetails();
        };

        // 查看上下篇文章
        async goNextArticle(id: number) {
            if (id) {
                this.articleId = id;
                this.loading = true;
                const result:any = {path: '/details', query: {id}}
                this.$router.push(result);
                await this.getArticleDetails()
            } else {
                this.$message.warning('暂无更多文章！')
            }
        };

        // 处理文章详情
        async getArticleDetails() {
            const isFabulous: any = window.localStorage.getItem('isFabulous');
            this.isFabulous = isFabulous ? JSON.parse(isFabulous).indexOf(this.articleId) !== -1 : false;
            this.currentArticleInfo = await this.getArticle().then((req: Types.InterfaceData) => this.$util.checkResp(req));
            this.currentTagId = this.$lo.get(this.currentArticleInfo, 'tagId.0');
            const relevantArticle = await this.getTagArticle().then((req: Types.InterfaceData) => this.$util.checkResp(req))
            this.relevantArticle = this.$lo.filter(relevantArticle, (item: any) => item.id !== this.$lo.get(this.currentArticleInfo, 'id')).slice(0, 4);
            this.$nextTick(() => {
                const codes = document.querySelectorAll(".card-body pre code");
                codes.forEach(elem => {
                    hljs.highlightBlock(elem);
                });
            });
            this.currentIndex = this.articleData.findIndex((item: any) => item.id === this.$lo.get(this.currentArticleInfo, 'id'));
            setTimeout(() => {
                this.loading = false;
            },1000);
        };

        // 点击回复评论
        goReply(params: any) {
            const {isReply, index} = params
            this.isReply = isReply;
            this.commentIndex = index;
            console.log(this.commentIndex);
        }

        // 发表回复评论
        async reply(params: any) {
            const {reply, textarea} = params;
            this.textarea = textarea
            await this.submitComment(reply)
        }

        // 取消回复
        changeReply() {
            this.isReply = false;
        }

        // 获取指定标签的文章
        getTagArticle() {
            return this.$api.getTagArticle({id: this.currentTagId})
        }

        // 获取文章详情
        getArticle(){
            return this.$api.getArticleDetails({id: this.articleId})
        };

        // 评论
        async submitComment(reply: any) {
            // 判断本地是否存储有用户数据，如果没有打开注册表单并且校验用户信息
            if (this.$lo.isEmpty(this.userInfo)) {
                this.isShowInput = true;
                const userForm: any = this.$refs['userForm'];
                userForm.validate(async (valid: any) => {
                    if (valid) {
                        if (this.textarea === '') {
                            this.$message.warning('请输入评论内容！')
                            return
                        }
                        this.userForm.url = this.urls[Math.floor(Math.random() * this.urls.length)]
                        this.userForm.userId = Date.now() + "" + Math.floor(Math.random() * 10000);
                        // 校验成功把用户信息存入本地，关闭注册表单,调用更新评论接口
                        window.localStorage.setItem('userInfo', JSON.stringify(this.userForm));
                        this.userInfo = this.userForm;
                        this.isShowInput = false;
                        const commentParams: any = {
                            comment: this.textarea,
                            time: moment().format('YYYY-MM-DD HH:mm'),
                            getOS: this.$util.getOS(),
                            getBrowse: this.$util.getBrowse(),
                        }
                        if (reply) {
                            commentParams['reply'] = reply;
                        }
                        const {code, data} = await this.$api.updateArticle({
                            id: this.articleId,
                            comment: Object.assign(commentParams, this.userForm)
                        });
                        if (code === 0) {
                            this.$message.success('评论成功！')
                            this.currentArticleInfo = this.$lo.find(data, (item: any) => item.id === this.articleId);
                        }
                        this.textarea = '';
                    } else {
                        this.$message.warning('请填写昵称和邮箱！')
                        return false;
                    }
                });
            } else {
                // 直接存储评论
                if (this.textarea === '') {
                    this.$message.warning('请输入评论内容！')
                    return
                }
                const commentParams: any = {
                    comment: this.textarea,
                    time: moment().format('YYYY-MM-DD HH:mm'),
                    getOS: this.$util.getOS(),
                    getBrowse: this.$util.getBrowse(),
                }
                if (reply) {
                    commentParams['reply'] = reply;
                }
                const {code, data} = await this.$api.updateArticle({
                    id: this.articleId,
                    comment: Object.assign(commentParams, this.userInfo)
                });
                if (code === 0) {
                    this.$message.success('评论成功！')
                    this.currentArticleInfo = this.$lo.find(data, (item: any) => item.id === this.articleId);
                }
                this.textarea = '';
            }
        }

        // 分享
        goShare() {
            const copy: any = document.getElementById("copy");
            copy.select(); // 选择对象
            document.execCommand("Copy"); // 执行浏览器复制命令用户定义的代码区域用户定义的代码区域
            this.$message.success('文章链接已复制！')
        };

        // 点赞
        async clickFabulous() {
            if (this.isFabulous) {
                this.$message.success('您已点赞！')
            } else {
                const {code} = await this.$api.updateArticle({id: this.articleId, fabulousNum: 1});
                if (code === 0) {
                    this.$message.success('点赞成功！')
                    this.articleArr.push(this.articleId)
                    window.localStorage.setItem('isFabulous', JSON.stringify(this.articleArr))
                    this.isFabulous = true;
                }
            }
        };
    }
</script>

<style lang="less" scoped>
    .articleDetails {
        padding-top: 80px;

        .card {
            width: 80%;
            margin: 20px auto;

            .clearfix {
                text-align: center;
                padding: 10px 0;

                h1{
                    margin: 0;
                }
                .desc {
                    float: right;
                    color: #999999;
                    font-size: 12px;
                    margin-right: 10px;
                }
            }

            .btn-body {
                text-align: center;

                .btn {
                    width: 90px;
                }
            }

            .next-body {
                /*height: 100px;*/
                /*background-color: #999999;*/
                margin-top: 20px;

                .item {
                    height: 30px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }

                .item:hover{
                    color: #37c6c0;
                }
            }
        }
    }

    /deep/ .el-textarea__inner {
                border: 1px solid black;
             }
</style>
