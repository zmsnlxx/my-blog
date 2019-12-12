<template>
	<section class="author">
		<div class="user">
			<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2522852806,4115374116&fm=26&gp=0.jpg" alt="头像加载失败">
			<p class="autograph">职业： web前端</p>
			<p class="autograph">邮箱： zmsnlxx@163.com</p>
			<p class="autograph">未来可期,少年还需要加油鸭！</p>
		</div>
		
	</section>
</template>

<script>
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class AuthorNav extends Vue {}
</script>
<style lang="less" scoped>
	.author{
		margin-bottom: 20px;
		width: 100%;
		height: 250px;
		border-radius: 10px;
		background-color: #475669;
		box-shadow: 0 0 5px #999999;
		opacity: 0.9;
		.user{
			padding-top: 20px;
			height: 70%;
			width: 100%;
			.autograph{
				text-align: left;
				margin-left: 30px;
			}
			img{
				/*padding-top: 50px;*/
				display: block;
				width: 70px;
				height: 70px;
				border-radius: 50% 50%;
				margin-left: 30px;
			}
		}
	}
</style>
