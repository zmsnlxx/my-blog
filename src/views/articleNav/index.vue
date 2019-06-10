<template>
    <section class="articleNav">
        <el-tabs class="score-header" v-model="firstTab" type="card">
            <el-tab-pane v-for="(item,index) in tabName" :key="`${item.label}_${index}`" :label="item.label" :name="item.name"/>
            <keep-alive>
                <component :is="firstTab"/>
            </keep-alive>
        </el-tabs>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import EmotionDiv from './Emotion/index'
    import LifeDiv from './Life/index'
    import SceneryDiv from './Scenery/index'
    import TechnologyDiv from './Technology/index'

    @Component({components: {EmotionDiv, LifeDiv, SceneryDiv,TechnologyDiv}})
    export default class articleNav extends Vue {
        firstTab = 'TechnologyDiv'
        tabName = [
            {label: '技术汇总', name: 'TechnologyDiv', content: TechnologyDiv},
            {label: '个人情感', name: 'EmotionDiv', content: EmotionDiv},
            {label: '日常生活', name: 'LifeDiv', content: LifeDiv},
            {label: '绚丽风景', name: 'SceneryDiv', content: SceneryDiv,},
        ]
    }
</script>

<style lang="less" scoped>
    .articleNav{

    }
</style>