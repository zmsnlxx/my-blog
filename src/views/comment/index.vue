<template>
    <section class="comment">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>留言板</span>
            </div>
            <div class="reply">
                <comment-nav @commit="commitSuccess"></comment-nav>
            </div>
            <div class="container" v-loading="loading">
                <div v-if="_.isEmpty(data)">暂无评论!</div>
                <commentContent v-else :body="currentData" @success="contentCommit"/>
            </div>
            <div style="width: 100%;height: 300px" v-loading="isloading" v-show="isloading"></div>
            <div v-if="isMore" style="width: 100%">
                <el-button style="width: 80%;margin: 0 auto;display: block" @click.native="getMore">
                    <el-icon class=""></el-icon>
                    查看更多
                </el-button>
            </div>
            <div v-else>
                <h1 style="text-align: center">没有更多留言啦,靓仔快点来留言吧-。-</h1>
            </div>
        </el-card>
    </section>
</template>

<script>

    import {Vue, Component} from 'vue-property-decorator'
    import commentNav from './commentNav'
    import commentContent from './commentContent'


    @Component({components:{commentNav,commentContent}})
    export default class comment extends Vue {
        loading = true
        limit = 5
        commentValue = null
        reply = ''
        data = []
        currentData = []
        isloading = false
        length = 0
        isMore = true


        mounted() {
            this.init()
        }

        getMore(){
            this.isloading = true
            setTimeout(() => {
                this.limit += 5
                if(this.limit > this.length){
                    this.isMore = false
                }else{
                    this.currentData = this.data.slice(0,this.limit)
                }
                this.isloading = false
            },1000)
        }

        async init() {
            const {data} = (await this.$api.getComment()).data
            this.data = data
            this.length = this.$lo.size(data)
            this.currentData = this.data.slice(0,this.limit)
            setTimeout(() => {
                this.loading = false
            }, 1000)
        }

        contentCommit(e){
            if(e){
                this.loading = true
                this.init()
            }
        }

        commitSuccess(e){
            if(e){
                this.loading = true
                this.init()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/common.less';

    .comment {
        .reply {
            width: 99%;
            padding: 10px;
            margin-bottom: 10px;
        }
    }

</style>