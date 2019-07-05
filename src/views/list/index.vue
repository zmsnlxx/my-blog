<template>
	<section class="list">
		<!-- 作者模块 -->
		<author-nav></author-nav>
		<!-- 日常吐槽 -->
		<make-complaints></make-complaints>
		<!-- 最近更新 -->
		<lately-nav></lately-nav>
		<!-- 最热文章/最新文章/点赞最多 -->
		<article-nav></article-nav>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>待定模块</span>
			</div>
			<div v-for="o in 4" :key="o" class="text item">
				{{'列表内容 ' + o }}
			</div>
		</el-card>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import AuthorNav from './author'
    import MakeComplaints from './MakeComplaints'
    import LatelyNav from './lately'
    import ArticleNav from './article/index'
    
    @Component({components:{AuthorNav,MakeComplaints,LatelyNav,ArticleNav}})
    export default class ListNav extends Vue {

    }
</script>
