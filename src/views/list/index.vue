<template>
	<section class="list">
		<!-- 作者模块 -->
		<author-nav></author-nav>
		<!--	标签	-->
		<tagsNav></tagsNav>
		<!-- 日常吐槽 -->
		<make-complaints></make-complaints>
		<!-- 最近更新 -->
		<lately-nav></lately-nav>

		<!-- 最热文章/最新文章/点赞最多 -->
<!--		<article-nav></article-nav>-->
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import AuthorNav from './author'
    import MakeComplaints from './MakeComplaints'
    import LatelyNav from './lately'
    import ArticleNav from './article/index'
	import tagsNav from './tags'

	@Component({components:{AuthorNav,MakeComplaints,LatelyNav,ArticleNav,tagsNav}})
    export default class ListNav extends Vue {

    }
</script>
