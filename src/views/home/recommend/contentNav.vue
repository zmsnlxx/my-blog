<template>
    <section class="card-content">
        <div v-for="(item,index) in data" :key="index" class="card-item" >
            <transition
                    mode="out-in"
                    name="custom-classes-transition"
                    enter-active-class="animated bounceInDown"
                    leave-active-class="animated bounceOutRight"
            >
                <div v-show="isShow">
                    <div class="card-img">
                        <img class="card-img" :src="item.url" alt="">
                    </div>
                    <p class="card-title">
                        <span class="title-name over-flow">{{item.name}}</span>
                        <span class="title-name over-flow">{{item.title}}</span>
                    </p>
                    <p class="card-text more-overflow">
                        {{item.desc}}
                    </p>
                    <p class="card-read">
                        点击阅读>>
                    </p>
                </div>
            </transition>

        </div>
    </section>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component
    export default class LabelNav extends Vue {
        isShow: boolean = false;
        // @Prop(String) label
        data: Array<object> = [
            {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样...',
            },
            {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样...',
            }, {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样...',
            }, {
                url: 'http://img1.imgtn.bdimg.com/it/u=4090707406,1925774851&fm=26&gp=0.jpg',
                name: '【JavaScript】',
                title: '你不知道的JavaScript',
                desc: 'transition：vue的动画标签，需要执行动画的内容使用transition包裹， transition标签常用属性enter-active-class：进入的动画样...',
            }
        ]


        mounted() {
            this.isShow = true;

        }
    }
</script>
<style lang="less" scoped>
    .card-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;

        .card-item {
            width: 31%;
            margin-top: 20px;
            height: 300px;
            background-color: #eeeeee;

            .card-img {
                height: 40%;
                width: 90%;
                margin: 0 auto;
                padding-top: 3%;

                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    transition: all 0.6s;
                }
            }

            .card-title {
                height: 10%;
                width: 90%;
                margin: 0 auto;
                padding-top: 15px;

                .title-name {
                    display: inline-block;
                    width: 50%;
                    text-align: left;
                }
            }

            .card-text {
                height: 26%;
                width: 90%;
                margin: 0 auto;
                text-indent: 20px;
                font-size: 14px;
                color: #999999;
            }

            .card-read {
                height: 20%;
                width: 90%;
                margin: 0 auto;
                text-align: right;
                font-size: 16px;
                padding-top: 10px;
                color: #37c6c0;
            }
        }

    }

    .card-item:hover {
        box-shadow: 0 0 5px #999999;

        img {
            transform: scale(1.05);
        }
    }
</style>

