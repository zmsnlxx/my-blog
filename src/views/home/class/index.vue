<template>
    <section class="classNav">
        <el-card class="content" :body-style="{padding:'15px',height:'100%',boxSizing: 'border-box'}">
            <div class="card-header">
                <ul class="ul">
                    <li class="li" :class="currentIndex === index ? 'border' :''" v-for="(item,index) in classArr"
                        :key="index" @click="choiceClass(item)">{{item.name}}
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div class="left">
                    <div class="img" v-for="(item,index) in randomData" :key="index">
                        <img :src="item.img" alt="">
                        <p class="more-overflow">{{item.title}}</p>
                    </div>
                </div>
                <div class="right">
                    <div class="item" v-for="(item,index) in classArr[currentIndex]['data']" :key="index"
                         @mouseover="mouseover(item)"
                         :style="mouseIndex === index ? {backgroundColor: '#eeeeee',padding:'10px',boxSizing:'border-box'} : {}">
                        <span class="num" :style="mouseIndex === index ? {backgroundColor: 'black'} : {}">{{ index + 1 }}</span>
                        <span class="title"
                              :style="mouseIndex === index ? {color: 'black'} : {}">{{ item.title }}</span>
                        <p v-show="mouseIndex === index" class="desc more-overflow">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </el-card>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class classNav extends Vue {
        classArr: Array<any> = [
            {
                name: 'JavaScript',
                id: 0,
                data: [
                    {
                        id: 0,
                        img: 'http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg',
                        title: '安静的做一个美男子',
                        desc: '自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当免费的原创个人博客模板更为实在。每当',
                    }, {
                        id: 1,
                        img: 'http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg',
                        title: '很多人跟我说可以做网络教程',
                        desc: '自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当免费的原创个人博客模板更为实在。每当',
                    }, {
                        id: 2,
                        img: 'http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg',
                        title: '我觉得在这个教程泛滥的时代',
                        desc: '自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当免费的原创个人博客模板更为实在。每当',
                    }, {
                        id: 3,
                        img: 'http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg',
                        title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的...',
                        desc: '自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当免费的原创个人博客模板更为实在。每当',
                    }, {
                        id: 4,
                        img: 'http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg',
                        title: '个人博客，属于我的小世界！',
                        desc: '自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当免费的原创个人博客模板更为实在。每当',
                    },
                ],
            },
            {
                name: '日常吐槽',
                id: 1,
                data: []
            }, {
                name: '生活小窍门',
                id: 2,
                data: []
            }, {
                name: '语言艺术',
                id: 3,
                data: []
            },
            {
                name: '其他',
                id: 4,
                data: []
            },
        ];
        currentIndex: number = 0;
        mouseIndex: number = 0;


        get randomData(): Array<object> {
            const arr = [];
            const a: any = Math.random() * 5;
            const b: any = Math.random() * 5;
            arr.push(this.$lo.get(this.classArr, `${this.currentIndex}.data.${parseInt(a)}`), this.$lo.get(this.classArr, `${this.currentIndex}.data.${parseInt(b)}`))
            return arr
        }

        choiceClass(params: any) {
            this.currentIndex = this.$lo.findIndex(this.classArr, (item: any) => item.id === params.id)
        }

        // 鼠标移入
        mouseover(params: any) {
            console.log('mouseover');
            this.mouseIndex = this.$lo.findIndex(this.classArr[this.currentIndex]['data'], (item: any) => item.id === params.id)
        };
    }
</script>

<style lang="less" scoped>
    .classNav {
        width: 100%;
        height: 300px;
        margin-top: 20px;
        .content {
            width: 100%;
            height: 100%;

            .card-header {
                width: 100%;
                height: 15%;

                .ul {
                    width: 100%;
                    padding-left: 0;
                    height: 40px;
                    margin: 0;
                    border-bottom: 1px solid #999999;

                    .li {
                        color: black;
                        font-size: 18px;
                        list-style: none;
                        float: left;
                        text-align: left;
                        line-height: 40px;
                        margin-right: 20px;
                        /*width: 120px;*/
                    }

                    .border {
                        border-bottom: 2px solid black;
                    }
                }
            }

            .card-body {
                width: 100%;
                margin-top: 10px;
                height: 80%;
                display: flex;
                justify-content: space-between;

                .left {
                    width: 33%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .img {
                        width: 100%;
                        height: 48%;
                        border-radius: 5px;
                        position: relative;

                        img {
                            width: 100%;
                            height: 100%;
                            background-size: 100% 100%;
                            opacity: 0.7;
                        }

                        p {
                            width: 80%;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            color: white;
                            margin: 0 auto;
                            transform: translate(-50%, -50%);
                            text-align: center;
                        }

                    }
                }

                .right {
                    width: 65%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .item {
                        width: 100%;

                        .num {
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            background-color: #999999;
                            text-align: center;
                            color: white;
                        }

                        .title {
                            margin-left: 20px;
                            color: #999999;
                        }

                        .desc {
                            margin: 10px 0 0 0;
                            font-size: 14px;
                        }
                    }
                }
            }
        }

    }
</style>
