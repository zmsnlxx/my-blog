<template>
    <section class="content">
        <div v-for="(item,index) in data" :key="index" class="card-item">
            <div class="card-title">
                <span v-show="index < 2" style="color: red;">【顶】</span>
                <span>{{ item.title }}</span>
            </div>
            <div class="card-content">
                <div class="left">
                    <img :src="item.url" alt="">
                </div>
                <div class="right">
                    <div class="top">{{ item.desc }}</div>
                    <div class="bottom">
                        <span class="class">{{ item.name }}</span>
                        <span class="time">2019/10/17</span>
                        <span class="more">查看更多</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component

    export default class NewsContent extends Vue {
        data: Array<object> = [
            {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样...transition标签常用属性enter-active-class：进入的动画样..',
            },
            {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样.transition标签常用属性enter-active-class：进入的动画样..',
            }, {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样...transition标签常用属性enter-active-class：进入的动画样..',
            }, {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样...transition标签常用属性enter-active-class：进入的动画样..',
            }
        ]
    }
</script>

<style lang="less" scoped>
    .content {
        width: 100%;

        .card-item {
            width: 100%;
            height: 230px;
            border-bottom: 1px solid #999999;
            padding: 10px;
            box-sizing: border-box;

            .card-title {
                height: 30px;
                margin: 10px 0;
                font-size: 18px;
                font-weight: 600;
                line-height: 30px;
            }

            .card-content {
                width: 100%;
                height: 75%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .left {
                    width: 30%;
                    height: 100%;
                    /*margin-right: 20px;*/
                    border-radius: 10px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                        background-size: 100% 100%;
                    }
                }

                .right {
                    width: 68%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .top {
                        font-size: 16px;
                        text-indent: 20px;
                        color: #999999;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp:4;
                        flex-direction: column;
                        height: 70%;
                    }

                    .bottom {
                        .class{
                            display: inline-block;
                            margin-right: 10px;
                            color: #37c6c0;
                        }
                        .more{
                            float: right;
                        }
                    }
                }
            }


        }
        .card-item:hover{
            box-shadow: 0 0 10px #999999;
            border-bottom: none;
            border-radius: 10px;
        }
    }
</style>
