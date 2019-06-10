<template>
    <section class="header">
        <transition
                mode="out-in"
                name="custom-classes-transition"
                enter-active-class="animated fadeInDown"
                leave-active-class="animated fadeOut"
        >
            <ul class="ul" v-show="headerInit">
                <el-icon class="el-icon-close li close" @click.native="closeHeader"/>
                <li class="li"><router-link class="routerJump" :style="{color: currentPath === '/home' ? 'bisque' : 'white'}" to="/home">首页</router-link></li>
                <li class="li"><router-link class="routerJump" :style="{color: currentPath === '/article' ? 'bisque' : 'white'}" to="/article">文章</router-link></li>
<!--                <li class="li"><router-link class="routerJump" :style="{color: currentPath === '/newArticle' ? 'bisque' : 'white'}" to="/newArticle">更新</router-link></li>-->
                <li class="li"><router-link class="routerJump" :style="{color: currentPath === '/comment' ? 'bisque' : 'white'}" to="/comment">留言</router-link></li>
                <li class="li" v-show="canIEdit"><router-link :style="{color: currentPath === '/edit' ? 'bisque' : 'white'}" class="routerJump" to="/edit">编辑</router-link></li>
                <li class="li">
                    <el-input class="input" type="text" placeholder="Try to search ..." @change="handlerSearch"
                              v-model="value" suffix-icon="el-icon-search"/>
                </li>
                <li v-if="isLogin" class="li" style="float: right">
                    <el-dropdown style="width: 100%;height: 100%;" placement="top-end">
                        <el-button style="width: 100%;height: 100%;font-size: 18px;color: white" type="text">{{ user.name }}</el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="$router.push({path:'/personal'})">个人资料</el-dropdown-item>
                            <el-dropdown-item @click.native="clearUser">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li v-else class="li" style="float: right"><router-link class="routerJump" to="/login">[登录]</router-link></li>
            </ul>
        </transition>

        <transition
                mode="out-in"
                name="custom-classes-transition"
                enter-active-class="animated fadeInDown"
                leave-active-class="animated fadeOut"
        >
            <el-icon v-if="show" class="el-icon-s-grid icon" @click.native="openHeader"/>
        </transition>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import {Getter} from 'vuex-class'
    import JsCookie from 'js-cookie'

    @Component
    export default class HeaderNav extends Vue {
        @Getter user
        headerInit = false
        show = false
        value = null


        mounted() {
            setTimeout(() => {
                this.headerInit = !this.headerInit
            }, 500)
        }

        get isLogin(){
            return this.$lo.size(this.user) !== 0
        }

        clearUser(){
            JsCookie.remove('email')
            this.$router.push({path:'/login'})
        }

        get currentPath(){
            return this.$route.path
        }

        get canIEdit() {
            return this.user.email === 'zmsnlxx@163.com'
        }

        closeHeader() {
            this.headerInit = !this.headerInit
            setTimeout(() => {
                this.show = !this.show
            }, 1000)
        }

        openHeader() {
            this.show = !this.show
            setTimeout(() => {
                this.headerInit = !this.headerInit
            }, 1000)
        }

        handlerSearch() {
            console.log(this.value)
            setTimeout(() => {
                this.value = null
            }, 50)
        }

    }
</script>

<style lang="less" scoped>
    .header {
        z-index: 100;
        width: 100%;
        position: relative;
        height: 60px;

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
            width: 80%;
            height: 60px;
            margin: 0 auto;

            .li {
                color: white;
                width: 80px;
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

            .close {
                text-align: left;
                font-size: 30px;
            }
        }
    }
</style>
