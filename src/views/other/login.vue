<template>
	<section class="login">
		<TopNav/>
		<transition
			mode="out-in"
			name="custom-classes-transition"
			enter-active-class="animated fadeInLeft"
			leave-active-class="animated bounceOutRight"
		>
			<section class="model">
				<el-card class="box-card" shadow="hover">
					<div slot="header" class="clearfix">
						<span>欢迎登录</span>
						<el-button style="float: right; padding: 3px 0" type="text">没有账号</el-button>
					</div>
					<div style="margin-top: 20px">
						<el-form label-width="80px" :model="userForm">
							<el-form-item label="邮箱">
								<el-input v-model="userForm.email" placeholder="请输入邮箱"></el-input>
							</el-form-item>
							<el-form-item label="昵称">
								<el-input v-model="userForm.name" placeholder="请输入昵称"></el-input>
							</el-form-item>
							<el-form-item label="密码">
								<el-input v-model="userForm.password" placeholder="请输入密码"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary">登录</el-button>
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
            name: '',
            password: ''
        }
    
    }
</script>

<style lang="less">
	.login{
		width: 100%;
		height: 100%;
		position: relative;
		.model {
			width: 600px;
			margin: 0 auto;
			background-color: red;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>
