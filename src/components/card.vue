<template>
	<section class="card">
		<div class="test" v-for="(item,index) in data" :key="index">
			<el-row :gutter="10" class="row">
				<el-col :span="8" class="col">
					<el-image class="img" :src="item.url" lazy></el-image>
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
        data = [
            {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class:'JavaScript'
            },
            {
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class:'JavaScript'
            },{
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class:'JavaScript'
            },{
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class:'JavaScript'
            },{
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                title: '拿什么来拯救我的孤单',
                text: '我孤独了好久，直到遇见你。我一直很纳闷，为什么我眼中的世界，和别人看到的不一样？我内心住着的那个小孩为什么死了，我为什么不能永葆童真，为什么我会害怕并且讨厌和别人相处，即使对待自己的亲人也是如此。为什么我喜欢一个人独处，还不会感到一丝丝的寂寞和孤单？',
                time: '2019-05-28',
                author: 'lxx',
                record: 15000,
                like: 1000,
                class:'JavaScript'
            }
        ]
	    
        
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
