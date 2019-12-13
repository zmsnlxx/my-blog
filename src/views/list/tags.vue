<template>
    <section class="tags">
        <el-card>
            <div slot="header">标签列表</div>
            <el-tag
                    v-for="tag in tags"
                    :key="tag.id"
                    style="margin: 5px 10px 10px 10px;"
                    :type="tag.type"
                    @click.native="handleClick(tag)">
                {{tag.name}}
            </el-tag>
        </el-card>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import Types from '../../../types/index';

    @Component

    export default class tags extends Vue {
        tags: Array<Types.TagsData> = [];


        async mounted() {
            this.tags = await this.getArticleTags().then((req: Types.InterfaceData) => this.$util.checkResp(req));
        }

        handleClick({id}: Types.TagsData) {
            this.$router.push({name: 'article@tag', query: {id}})
        }
        // 获取文章标签
        getArticleTags() {
            return this.$api.getArticleTags();
        }
    }
</script>

<style lang="less" scoped>
.tags {
    width: 100%;
    margin-bottom: 20px;
}
</style>
