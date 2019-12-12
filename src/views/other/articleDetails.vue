<template>
    <section class="articleDetails">
        <el-card class="card" v-loading="loading">
            <div slot="header" class="clearfix">
                <h1>{{ articleInfo.title }}</h1>
                <span class="desc">最后编辑时间：{{ articleInfo.updateTime ? articleInfo.updateTime : articleInfo.createdTime}}</span>
                <span class="desc">{{ articleInfo.tags }}</span>
            </div>
            <div class="card-body">
                <div v-html="articleInfo.content"></div>
            </div>
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
        articleId: number;
        articleInfo = {};
        loading: boolean = true;

        async mounted(){
            this.articleId = this.$lo.get(this.$route, 'query.id');
            this.articleInfo = await this.getArticleDetails().then((req: Types.InterfaceData) => this.$util.checkResp(req));
            this.$nextTick(() => {
                const codes = document.querySelectorAll(".card-body pre code");
                codes.forEach(elem => {
                    hljs.highlightBlock(elem);
                });
            });
            setTimeout(() => {
                this.loading = false;
            },1000);
        }


        getArticleDetails(){
            return this.$api.getArticleDetails({id: this.articleId})
        }
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

            .card-body {
            }
        }
    }
</style>
