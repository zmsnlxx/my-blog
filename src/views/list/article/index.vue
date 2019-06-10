<template>
    <section class="articleClass">
        <el-card class="box-card">
            <el-tabs v-model="activeName">
                <el-tab-pane v-for="(item,index) in labelData" :key="`${item.label}_${index}`" :label="item.label" :name="item.name"/>
                <keep-alive>
                    <component :is="activeName"/>
                </keep-alive>
            </el-tabs>

        </el-card>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import hottest from './hottest'
    import newest from './newest'
    import most from './most'


    @Component({components: {hottest, newest, most}})
    export default class articleClass extends Vue {
        labelData = [
            {label:'最热文章',name:'hottest',content:hottest},
            {label:'最新文章',name:'newest',content:newest},
            {label:'点赞最多',name:'most',content:most},
        ]
        activeName = 'hottest'

    }
</script>

<style lang="less" scoped>
    .articleClass {
        margin-bottom: 20px;
    }
</style>