<template>
    <section class="small_label">
        <div class="card" v-for="(item,index) in data" :key="index">
            <el-row style="height: 100%;">
                <el-col :span="6" class="left">
                    <img :src="item.url" alt="">
                </el-col>
                <el-col :span="18" class="right">
                    <p class="text_title">{{ item.title }}</p>
                    <p class="text_time">{{ item.time }}</p>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    import {Vue, Component,Prop} from 'vue-property-decorator'

    @Component

    export default class small_label extends Vue {
        @Prop(Array) data
    }
</script>

<style lang="less" scoped>
    .small_label{

        .card {
            padding: 2px;
            width: 95%;
            margin-bottom: 20px;
            height: 50px;
            border: 1px solid #eeeeee;
            border-radius: 2px;

            .left {
                width: 50px;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .right {
                height: 50px;
                margin-left: 15px;

                .text_title {
                    margin: 0;
                    font-size: 16px
                }

                .text_time {
                    margin: 0;
                    font-size: 12px;
                    color: #999999;
                    position: absolute;
                    bottom: 0;
                }
            }
        }

        .card:hover {
            box-shadow: 5px 5px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        }
    }
</style>