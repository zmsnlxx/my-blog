<template>
    <section class="content">
        <!-- 轮播图 -->
        <swiper-nav></swiper-nav>
        <!-- 分类标签 -->
        <label-nav :label="label">
            <el-icon slot="icon" style="font-size: 20px;margin-left: 10px" class="el-icon-magic-stick"></el-icon>
        </label-nav>
        <!-- 文章列表 -->
        <card-nav :data="data"></card-nav>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import SwiperNav from '../other/swiper.vue'

    @Component({components: {SwiperNav}})
    export default class ContentNav extends Vue {
        label: string = '推荐文章';
        urls: Array<string> = [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ];

        data: Array<object> = [
            {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class: 'JavaScript'
            },
            {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class: 'JavaScript'
            }, {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class: 'JavaScript'
            }, {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class: 'JavaScript'
            }, {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class: 'JavaScript'
            }
        ]

    }
</script>
<style lang="less" scoped>

</style>
