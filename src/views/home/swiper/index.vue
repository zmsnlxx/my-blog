<template>
<!--   轮播图  -->
    <section class="swiper">
        <div class="left">
            <el-carousel height="250px" class="el-carousel">
                <el-carousel-item v-for="(item,index) in data" :key="index">
                    <img :src="item.img" @click="getDetails(item.id)" class="img" alt="图片加载失败">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="right">
            <weatherNav class="weather"></weatherNav>
            <div class="other over-flow"></div>
        </div>
    </section>
</template>

<script>
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import weatherNav from './weather.vue';

    @Component({components: {weatherNav}})
    export default class SwiperNav extends Vue {
        @Prop(Array) data

        getDetails(id) {
            this.$router.push({ path:'/details', query: {id} })
        }
    }
</script>
<style lang="less" scoped>
    .swiper {
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: space-between;
        .left {
            width: 65%;
            height: 100%;
            border-radius: 10px;

            .el-carousel {
                border-radius: 10px;
                box-shadow: 0 0 10px #999999;

                .img {
                    width: 100%;
                    height: 100%;
                    background-size: 100% 100%;
                    border-radius: 10px;
                }
            }
        };

        .right {
            width: 33%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .weather {
                width: 100%;
                height: 48%;
                border-radius: 10px;
                box-shadow: 0 0 10px #999999;
            }

            .other {
                background-image: url("http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg");
                background-size: 100% 100%;
                width: 100%;
                height: 48%;
                border-radius: 10px;
                box-shadow: 0 0 10px #999999;
                opacity: 0.7;
                text-align: center;
                padding: 20px;
                box-sizing: border-box;
                color: white;
            }
        }
    }
</style>
