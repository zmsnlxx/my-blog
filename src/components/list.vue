<template>
	<section class="list">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>
					<slot name="icon"></slot>
					{{ title }}
				</span>
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
  import {Vue, Component,Prop} from 'vue-property-decorator'

  @Component
  export default class last extends Vue {
      @Prop(String) title
      @Prop(Array) data
      @Prop(Array) colorArr
    
  }
</script>
<style lang="less" scoped>
	.list{
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
