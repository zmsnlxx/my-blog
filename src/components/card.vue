<template>
	<section class="card">
		<div class="test" v-for="(item,index) in data" :key="index">
			<el-row :gutter="10" class="row">
				<el-col :span="8" class="col">
					<el-image v-if="index < 3" class="img" :src="item.url"></el-image>
					<el-image v-else class="img" :src="item.url" lazy></el-image>
				</el-col>
				<el-col class="col" :span="16">
					<h1 class="title">{{ item.title }}</h1>
					<div class='text'>{{ item.text }}</div>
					<div class="desc">
						<span class="desc_item"><el-icon class="el-icon-timer icon"></el-icon>{{ item.time }}</span>
						<span class="desc_item"><el-icon class="el-icon-user-solid icon"></el-icon>{{ item.author }}</span>
						<span class="desc_item"><el-icon class="el-icon-view icon"></el-icon>{{ item.record }}</span>
						<span class="desc_item"><el-icon class="el-icon-star-off icon"></el-icon>{{ item.like }}</span>
						<span class="desc_item right"><el-icon class="el-icon-s-fold icon"></el-icon>{{ item.class }}</span>
					</div>
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
    import {Vue, Component, Prop} from 'vue-property-decorator'
    
    @Component
    export default class CardNav extends Vue {
        @Prop(Array) data
    }
</script>

<style lang="less" scoped>
	.card{
		.test {
			box-sizing: border-box;
			padding: 15px 10px;
			margin-top: 20px;
			width: 100%;
			height: 200px;
			background-color: whitesmoke;
			border-radius: 10px;
			
			.row {
				height: 100%;
				
				.col {
					position: relative;
					height: 100%;
					
					.img {
						width: 100%;
						height: 100%;
					}
					
					.title {
						margin: 0 0 10px 0;
						font-size: 20px;
					}
					
					.text {
						text-indent: 25px;
						line-height: 30px;
						font-size: 14px;
						color: #999999;
						display: -webkit-box;
						text-align: justify;
						letter-spacing: 0;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
						word-break: break-all;
					}
					
					.desc {
						width: 100%;
						position: absolute;
						bottom: 0;
						
						.desc_item {
							font-size: 14px;
							color: #999999;
							display: inline-block;
							margin-right: 20px;
							
							.icon {
								margin-right: 5px;
							}
							
						}
						.right {
							position: absolute;
							right: 0;
						}
						
					}
				}
			}
		}
	}
</style>
