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
                <commentContent v-else :body="data" @success="contentCommit"/>
            </div>
            <div>
                <el-button @click.native="getMore">查看更多</el-button>
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


        mounted() {
            this.init()
        }

        getMore(){
            this.loading = true
            this.limit += 5
            this.init()
        }

        async init() {
            const params = {limit:this.limit}
            const {data} = (await this.$api.getComment(params)).data
            console.log(data);
            this.data = this.$lo.reverse(this.$lo.clone(data))
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