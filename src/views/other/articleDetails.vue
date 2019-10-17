<template>
    <section class="articleDetails">
        <h1>文章详情</h1>
        <el-card class="box-card" style="width: 80%;margin: 0 auto">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component

    export default class articleDetails extends Vue {

        mounted(){
            console.log(this.$route.query);
        }
    }
</script>

<style lang="less" scoped>
    .articleDetails{
        width: 100%;
        height: 100%;
    }
</style>
