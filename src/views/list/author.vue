<template>
	<section class="author">
		<div class="user">
			<img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt="头像加载失败">
			<p class="name">lxx</p>
			<p class="autograph">zmsnlxx</p>
			<div class="add">
				<div class="fabulous button">
					<el-icon class="el-icon-star-off"></el-icon>
					<span>243</span>
				</div>
				<div class="follow button">
					<el-icon class="el-icon-plus"></el-icon>
					<span>关注我</span>
				</div>
			</div>
			<div class="desc">
				<div class="desc_div notLast">
					<p>184</p>
					<p>粉丝数量</p>
				</div>
				<div class="desc_div notLast">
					<p>203</p>
					<p>今日PV</p>
				</div>
				<div class="desc_div">
					<p>5</p>
					<p>文章数量</p>
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class AuthorNav extends Vue {
		
  }
</script>
<style lang="less" scoped>
	.author{
		margin-bottom: 20px;
		width: 100%;
		height: 300px;
		border-radius: 20px;
		background-color: white;
		.user{
			padding-top: 20px;
			height: 70%;
			width: 100%;
			.name{
				text-align: center;
				color: red;
				margin: 5px 0;
			}
			.autograph{
				text-align: center;
			}
			img{
				/*padding-top: 50px;*/
				display: block;
				width: 70px;
				height: 70px;
				margin: 0 auto;
				border-radius: 50% 50%;
			}
			.add{
				width: 70%;
				margin: 0 auto;
				.button{
					display: inline-block;
					width: 100px;
					height: 30px;
					border-radius: 15px 15px 15px 15px;
					text-align: center;
					line-height: 30px;
				}
				.fabulous{
					float: left;
					background-color: red;
				}
				.follow{
					float: right;
					background-color: cadetblue;
				}
			}
			.desc{
				padding-top: 20px;
				display: flex;
				width: 90%;
				margin: 0 auto;
				.desc_div{
					width: 33%;
					text-align: center;
					p{
						font-size: 12px;
						color: #999999;
						margin: 5px 0;
					}
				}
				.notLast{
					border-right: 1px solid #eeeeee;
				}
			}
			
		}
	}
</style>
