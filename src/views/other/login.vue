<template>
	<section class="login">
		<TopNav/>
		
		<!-- 登录 -->
		<transition
			mode="out-in"
			name="custom-classes-transition"
			enter-active-class="animated bounceInDown"
			leave-active-class="animated flipOutY"
		>
			<section v-show="loginShow" class="model">
				<el-card class="box-card" shadow="hover">
					<div slot="header" class="clearfix">
						<span>欢迎登录</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="goRegister">没有账号</el-button>
					</div>
					<div style="margin-top: 20px">
						<el-form label-width="80px" :model="userForm">
							<el-form-item label="邮箱">
								<el-input type="email" v-model="userForm.email" placeholder="请输入邮箱"></el-input>
							</el-form-item>
							<el-form-item label="密码">
								<el-input type="password" v-model="userForm.password" placeholder="请输入密码" autocomplete="new-password"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="login">登录</el-button>
							</el-form-item>
						</el-form>
					</div>
				</el-card>
			</section>
		</transition>
		
		<!-- 注册 -->
		<transition
			mode="out-in"
			name="custom-classes-transition"
			enter-active-class="animated flipInY"
			leave-active-class="animated zoomOutDown"
		>
			<section v-show="registerShow" class="model">
				<el-card class="box-card" shadow="hover">
					<div slot="header" class="clearfix">
						<span>欢迎注册</span>
					</div>
					<div style="margin-top: 20px">
						<el-form label-width="80px" :model="registerForm" :rules="rules" ref="ruleForm">
							<el-form-item label="邮箱" prop="email">
								<el-input type="email" v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
							</el-form-item>
							<el-form-item label="昵称" prop="name">
								<el-input type="text" v-model="registerForm.name" placeholder="请输入昵称"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="pass">
								<el-input type="password" v-model="registerForm.password" placeholder="请输入密码" autocomplete="new-password"></el-input>
							</el-form-item>
							<el-form-item label="密码验证" prop="checkPass">
								<el-input type="password" v-model="registerForm.psw" placeholder="请再次输入密码"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="register">注册</el-button>
							</el-form-item>
						</el-form>
					</div>
				</el-card>
			</section>
		</transition>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import TopNav from './TopNav'
    
    
    @Component({components: {TopNav}})
    
    export default class login extends Vue {
        userForm = {
            email: '',
            password: ''
        }
        registerForm = {
            email: '',
            name: '',
            password: '',
            psw: ''
        }
        loginShow = false
        registerShow = false
	    
        validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.registerForm.password !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        }
        checkPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.psw) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
		    rules = {
            email: [
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            pass: [
                { validator: this.validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: this.checkPass, trigger: 'blur' }
            ]
        }
        
        
        mounted () {
            setTimeout(() => {
                this.loginShow = true
            }, 500)
        }
        
        login () {
            this.$api.login(this.userForm).then(req => {
                const {code, data} = req.data
                if (code === 0) {
                    this.$router.push({path: '/'})
                } else {
                    this.$message.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        }
        
        goRegister () {
            this.loginShow = false
            setTimeout(() => {
                this.registerShow = true
            }, 500)
        }
        
        register () {
            this.$api.register(this.registerForm).then(req => {
                const {code, data} = req.data
                if (code === 0) {
                    this.$message({
                        message: data.message,
                        type: 'success'
                    })
                    this.registerShow = false
                    setTimeout(() => {
                        this.loginShow = true
                    }, 500)
                } else {
                    this.$message.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style lang="less">
	.login {
		width: 100%;
		height: 100%;
		position: relative;
		.model {
			position: absolute;
			top: 50%;
			left: 50%;
			height: 30%;
			width: 50%;
			margin: -15% 0 0 -25%;
		}
	}
</style>
