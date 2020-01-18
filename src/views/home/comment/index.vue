<template>
<!--  留言板  -->
    <section class="comment" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>留言板</span>
            </div>
            <commentList
                    @getData="getData"
                    :commentData="_.reverse(commentData)"
                    :userId="_.get(userInfo, 'userId') || ''"
            ></commentList>
        </el-card>
    </section>
</template>

<script lang="ts">

    import {Vue, Component} from 'vue-property-decorator'
    import Types from '../../../../types/index';

    @Component
    export default class comment extends Vue {
        loading: boolean = true;
        commentData: Array<any> = [];
        userInfo: any = null;


        async mounted() {
            const userInfo: any = window.localStorage.getItem('userInfo');
            this.userInfo = JSON.parse(userInfo);
            this.commentData = await this.$api.getComment().then((req: Types.InterfaceData) => this.$util.checkResp(req));
            this.loading = false;
        }

        getData(data: any) {
            this.commentData = data;
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../assets/css/common.less';

    .comment {
        .reply {
            width: 99%;
            padding: 10px;
            margin-bottom: 10px;
        }
    }

</style>
