<!-- views入口文件 -->
<template>
    <div class="entrance">
        <!-- 内容部分 -->
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="17">
                    <keep-alive>
                        <router-view class="main-content"/>
                    </keep-alive>
                </el-col>
                <el-col :span="7">
                    <!--
                        transition：vue的动画标签，需要执行动画的内容使用transition包裹，
                        transition标签常用属性enter-active-class：进入的动画样式；
                        leave-active-class：离开的动画样式；
                        mode="out-in"当前元素先进行过渡，完成之后新元素过渡进入。
                        在vue中使用animated库，首先在入口html文件中引入
                        然后transition标签的属性值以animated+动画样式类；如下
                    -->
                    <transition
                            mode="out-in"
                            name="custom-classes-transition"
                            enter-active-class="animated fadeInRight"
                            leave-active-class="animated bounceOutRight"
                    >
                        <list-nav v-show="listShow"></list-nav>
                    </transition>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import ListNav from "./list/index.vue"

    @Component({components: {ListNav}})
    export default class Entrance extends Vue {
        listShow: boolean = false;
        email: string = '';

        async mounted() {
            setTimeout(() => {
                this.listShow = true
            },500)
        }
    }
</script>
<style lang="less" scoped>
    .entrance {
        width: 85%;
        margin: 0 auto;
        padding-top: 70px;
        .container {
            box-sizing: border-box;
            /*height: 100%;*/
            width: 100%;
        }
    }
</style>
