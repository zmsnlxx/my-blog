<template>
<!--  分类文章  -->
    <section class="articleNav">
        <el-tabs class="score-header" v-model="currentClassId" @tab-click="handleClick">
            <el-tab-pane v-for="(item,index) in classData" :key="`${item.label}_${index}`" :label="item.name" :name="item.id"/>
            <CardNav v-if="_.size(articleData) > 0" style="margin-top: 20px" :data="articleData"></CardNav>
            <div v-else>
                <img style="width: 30%;margin-left: 35%" src="../../../assets/images/error.png" alt="">
            </div>
        </el-tabs>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Types from "../../../../types";


    @Component
    export default class articleNav extends Vue {
        classData: Array<Types.ArticleClassData> = []; // 文章分类
        currentClassId: number | string = '';
        articleData: Array<object> = []


        async mounted() {
            this.classData = await this.getArticleClass().then((req: Types.InterfaceData) => this.$util.checkResp(req));
            this.currentClassId = this.$lo.get(this.classData, '0.id')
            await this.getCurrentClassArticle()
        }

        async handleClick(tab: any) {
            this.currentClassId = tab.name;
            await this.getCurrentClassArticle();
        }

        // 获取当前分类下的所有文章
        async getCurrentClassArticle() {
            this.articleData = await this.$api.getCurrentClassArticle({ id: this.currentClassId }).then((req: Types.InterfaceData) => this.$util.checkResp(req));
        }

        // 获取所有分类
        getArticleClass() {
            return this.$api.getArticleClass();
        }
    }
</script>

<style lang="less" scoped>
    .articleNav{

    }
</style>
