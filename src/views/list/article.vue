<template>
	<section class="article">
		<el-card class="box-card">
			<el-tabs v-model="activeName">
				<el-tab-pane label="最热文章" name="first">
				
				
				</el-tab-pane>
				<el-tab-pane label="最新文章" name="second">
					<el-icon class="el-icon-view"></el-icon>
					最新文章
				</el-tab-pane>
				<el-tab-pane label="点赞最多" name="third">
					<el-icon class="el-icon-view"></el-icon>
					最新文章
				</el-tab-pane>
			</el-tabs>
			
		</el-card>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    
    @Component
    export default class ArticleNav extends Vue {
        activeName = 'first'
    
    }
</script>

<style lang="less" scoped>
	.article {
		margin-bottom: 20px;
		.title {
			text-align: center;
			height: 30px;
			display: inline-block;
			line-height: 30px
		}
	}
</style>
