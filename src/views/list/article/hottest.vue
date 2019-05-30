<template>
    <section class="hottest">
        <small-label :data="data"></small-label>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component

    export default class hottest extends Vue {
        data = [
            {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '最热文章',
                time: '2019-05-30'
            }, {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '最热文章',
                time: '2019-05-30'
            }, {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '最热文章',
                time: '2019-05-30'
            },{
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '最热文章',
                time: '2019-05-30'
            }
        ]
    }
</script>

<style lang="less" scoped>
    .hottest {
        width: 100%;
        height: 100%;
    }
</style>