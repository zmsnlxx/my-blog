<template>
    <transition enter-active-class="animated fadeInLeft">
        <section v-if="show" class="articleDetails" v-loading="loading">
            <!--     文章内容       -->
            <el-card class="card">
                <div slot="header" class="clearfix">
                    <h1>{{ currentArticleInfo.title }}</h1>
                    <span class="desc">最后编辑时间：{{ $util.checkTime(currentArticleInfo.updateTime) }}</span>
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
            <!--      相关推荐      -->
            <el-card class="card">
                <p style="margin: 0">相关文章推荐</p>
                <div style="margin-top: 20px;display: flex;flex-wrap:wrap" v-if="_.size(relevantArticle) > 0">
                    <div class="articleTab" style="width: 50%;height: 40px;line-height: 40px" v-for="(item, index) in relevantArticle" :key="item.id" @click="goNextArticle(item.id)">{{ index + 1}}、{{ item.title }}</div>
                </div>
                <div style="margin-top: 20px" v-else>暂无相关文章</div>
            </el-card>
            <el-card class="card">
                <p>发表评论（{{ _.size(currentArticleInfo.commentData) }}条评论）</p>
                <commentList
                        :commentData="_.reverse(currentArticleInfo.commentData)"
                        :userId="_.get(userInfo, 'userId') || ''"
                        :articleId="articleId"
                        @getData="getData"
                ></commentList>
            </el-card>
        </section>
    </transition>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import Types from "../../../types/index";
    import hljs from "highlight.js";
    import "highlight.js/styles/github.css";
    @Component
    export default class articleDetails extends Vue {
        show: boolean = false; // 动画开关
        articleId: number = 0; // 文章id
        currentArticleInfo= {}; // 当前文章数据
        loading: boolean = true; // loading开关
        isFabulous: boolean = false // 是否点赞
        articleData: any = []; // 所有文章数据
        currentIndex: number = 0; // 当前索引
        articleArr: Array<string | number> = []; // 文章id数组，点赞后的文章id会被添加进数组用来判断是否进行点赞
        currentTagId: string | number = ''; // 当前tagId
        relevantArticle: any = []; // 相关文章
        userInfo: any = {}; // 用户信息


        async mounted(){
            const articleData:any = window.localStorage.getItem('articleData');
            const userInfo: any = window.localStorage.getItem('userInfo');
            this.articleData = JSON.parse(articleData);
            this.articleId = this.$lo.get(this.$route, 'query.id');
            this.userInfo = JSON.parse(userInfo)
            setTimeout(() => {
                this.show = true;
            });
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

        getData(params: any) {
            this.currentArticleInfo = this.$lo.find(params, (item: any) => item.id === this.articleId);
        }

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
        }

        // 获取指定标签的文章
        getTagArticle() {
            return this.$api.getTagArticle({id: this.currentTagId})
        }

        // 获取文章详情
        getArticle(){
            return this.$api.getArticleDetails({id: this.articleId})
        };

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

            p {
                margin: 0;
            }

            .none {
                margin-top: 20px;
            }

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
