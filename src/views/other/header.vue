<template>
    <section class="header">
        <transition
                mode="out-in"
                name="custom-classes-transition"
                enter-active-class="animated fadeInDown"
                leave-active-class="animated fadeOut"
        >
            <ul class="ul">
                <li class="li"><router-link class="routerJump" :style="{color: currentPath === '/home' ? 'bisque' : 'white'}" to="/home">首页</router-link></li>
                <li class="li"><router-link class="routerJump" :style="{color: currentPath === '/article' ? 'bisque' : 'white'}" to="/article">文章汇总</router-link></li>
                <li class="li"><router-link class="routerJump" :style="{color: currentPath === '/comment' ? 'bisque' : 'white'}" to="/comment">日常吐槽</router-link></li>
            </ul>
        </transition>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class HeaderNav extends Vue {
        value = null


        get currentPath(){
            return this.$route.path
        }

    }
</script>

<style lang="less" scoped>
    .header {
        z-index: 100;
        width: 100%;
        position: relative;
        height: 60px;
        background-color: #475669;
        .icon {
            color: white;
            font-size: 30px;
            display: inline-block;
            margin-left: 140px;
            margin-top: 20px;
            line-height: 30px;

        }

        .ul {
            padding-left: 0;
            width: 85%;
            height: 60px;
            margin: 0 auto;

            .li {
                color: white;
                width: 120px;
                font-size: 18px;
                list-style: none;
                float: left;
                text-align: center;
                line-height: 60px;
                .routerJump{
                    text-decoration: none;
                    color: white;
                }
                .routerJump:hover{
                    color: bisque;
                }
                .input {
                    margin-left: 60px;
                    width: 200px;
                    line-height: 60px;
                }
            }
        }
    }
</style>
