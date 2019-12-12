<template>
	<section class="card">
		<div class="test" v-for="(item,index) in data" :key="index" @click="jumpToArticle(item)">
			<div style="width: 100%;height: 30%;box-sizing: border-box;line-height: 50px;color: #37c6c0;font-size: 18px;font-weight: 500">{{ item.title }}</div>
			<el-row :gutter="30" class="row">
				<el-col :span="6" class="col">
					<el-image v-if="index < 3" class="img" :src="item.img"></el-image>
					<el-image v-else class="img" :src="item.img" lazy></el-image>
				</el-col>
				<el-col class="col" :span="18">
					<div class='text'>{{ item.abstract }}</div>
					<div class="desc">
						<span class="desc_item"><el-icon class="el-icon-star-off icon"></el-icon>{{ item.like }}</span>
						<span class="desc_item"><el-icon class="el-icon-view icon"></el-icon>{{ item.record }}</span>
						<span class="desc_item"><el-icon class="el-icon-timer icon"></el-icon>{{ item.updateTime ? item.updateTime : item.createdTime }}</span>
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


		mounted() {
			console.log(this.data);
		}
		jumpToArticle({id}){
        	this.$router.push({path:'/details',query:{id}})
		}
    }
</script>

<style lang="less" scoped>
	.card{
		.test {
			box-sizing: border-box;
			padding: 5px 20px 20px 20px;
			margin-top: 20px;
			width: 100%;
			height: 200px;
			background-color: white;
			border-radius: 10px;
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

			.row {
				height: 70%;
				
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
							float: right;
							
							.icon {
								margin-right: 5px;
							}
							
						}
						
					}
				}
			}
		}
	}
</style>
