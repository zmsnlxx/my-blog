<template>
    <section class="articleDetails">
        <el-card class="card" v-loading="loading">
            <div slot="header" class="clearfix">
                <h1>{{ currentArticleInfo.title }}</h1>
                <span class="desc">最后编辑时间：{{ currentArticleInfo.updateTime ? currentArticleInfo.updateTime : currentArticleInfo.createdTime}}</span>
                <span class="desc">分类：{{ currentArticleInfo.categoryName }}</span>
                <span class="desc">作者：{{ currentArticleInfo.author }}</span>
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
            评论
        </el-card>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import Types from "../../../types/index";
    import hljs from "highlight.js";
    import "highlight.js/styles/github.css";
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


        async mounted(){
            const articleData:any = window.localStorage.getItem('articleData');
            this.articleData = JSON.parse(articleData);
            this.articleId = this.$lo.get(this.$route, 'query.id');
            await this.getArticleDetails();
        };

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

        getTagArticle() {
            return this.$api.getTagArticle({id: this.currentTagId})
        }

        getArticle(){
            return this.$api.getArticleDetails({id: this.articleId})
        };

        // 去分享
        goShare() {
            const copy: any = document.getElementById("copy");
            copy.select(); // 选择对象
            document.execCommand("Copy"); // 执行浏览器复制命令用户定义的代码区域用户定义的代码区域
            this.$message.success('文章链接已复制！')
        };

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

            .articleTab:hover {
                color: #37c6c0;
            }
        }
    }
</style>
