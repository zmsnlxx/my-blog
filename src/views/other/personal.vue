<template>
    <section class="personal">
        <transition
                mode="out-in"
                name="custom-classes-transition"
                enter-active-class="animated bounceInDown"
                leave-active-class="animated flipOutY"
        >
            <section v-show="personal" class="model">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>个人资料</span>
<!--                        <el-button style="float: right; padding: 3px 0" type="text" @click="goRegister">没有账号</el-button>-->
                    </div>
                    <div style="margin-top: 20px">
<!--                        <el-form label-width="80px" :model="userForm">-->
<!--                            <el-form-item label="邮箱">-->
<!--                                <el-input type="email" v-model="userForm.email" placeholder="请输入邮箱"></el-input>-->
<!--                            </el-form-item>-->
<!--                            <el-form-item label="密码">-->
<!--                                <el-input type="password" v-model="userForm.password" placeholder="请输入密码" autocomplete="new-password"></el-input>-->
<!--                            </el-form-item>-->
<!--                            <el-form-item>-->
<!--                                <el-button type="primary" @click="login">登录</el-button>-->
<!--                            </el-form-item>-->
<!--                        </el-form>-->
                    </div>
                </el-card>
            </section>
        </transition>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component

    export default class personal extends Vue {
        personal = false

        mounted () {
            setTimeout(() => {
                this.personal = true
            }, 500)
        }
    }
</script>

<style lang="less" scoped>
    .personal{
        width: 100%;
        height: 850px;
        position: relative;
        .model {
            width: 80%;
            margin: 50px auto;
        }
    }
</style>