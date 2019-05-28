<template>
	<section class="complaints">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span><el-icon class="el-icon-milk-tea" style="margin-right: 10px"></el-icon>日常吐槽</span>
			</div>
			<div class="text item" v-for="(item,index) in data" :key="index">
				<el-row class="row">
					<el-col :span="3" class="num" :style="{backgroundColor: colorArr[index]}">{{ index + 1 }}</el-col>
					<el-col :span="15" class="title">{{ item.title }}</el-col>
					<el-col :span="6" class="time">{{ item.time }}</el-col>
				</el-row>
			</div>
		</el-card>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    
    @Component
    export default class MakeComplaints extends Vue {
        colorArr = ['red', 'blue', 'yellow', 'green']
        data = [
            {
                title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
                time: '2019-05-28'
            },
            {
                title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
                time: '2019-05-28'
            }, {
                title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
                time: '2019-05-28'
            }, {
                title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
                time: '2019-05-28'
            }
        ]
        
    }
</script>
<style lang="less">
	.complaints {
		margin-bottom: 20px;
		.box-card {
			.el-card__header {
				padding: 10px 20px;
			}
			.text {
				width: 100%;
				height: 20px;
				border-bottom: 1px solid #eeeeee;
				line-height: 20px;
				padding: 5px 0;
				.row{
					height: 100%;
					.num {
						display: inline-block;
						width: 20px;
						height: 20px;
						text-align: center;
						line-height: 20px;
						border-radius: 50% 50%;
					}
					.title{
						margin-left: 5px;
						font-size: 12px;
						color: #999999;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						height: 100%;
						line-height: 20px;
					}
					.title:hover{
						color: rosybrown;
						text-shadow: #999999 5px 0 5px;
					}
					.time{
						font-size: 12px;
						color: #999999;
						overflow: hidden;
						height: 100%;
						line-height: 20px;
						
					}
				}
			}
		}
	}
</style>
