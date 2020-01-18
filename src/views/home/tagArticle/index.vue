<template>
    <section class="tagArticle">
        <CardNav v-if="_.size(article) > 0" :data="article"></CardNav>
        <div v-else>
            <img style="width: 30%;margin-left: 35%" src="../../../assets/images/error.png" alt="">
        </div>
    </section>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator'
    import Types from '../../../../types/index';
    @Component
    export default class tagArticle extends Vue {
        article: Array<Types.ArticleData> = []

        @Watch('$route.query.id')
        async onChangeRoute(id: string){
            this.article = await this.$api.getTagArticle({id}).then((req: Types.InterfaceData) => this.$util.checkResp(req));
        }
    }
</script>

<style lang="less" scoped>
    .tagArticle {
        width: 100%;
    }
</style>
