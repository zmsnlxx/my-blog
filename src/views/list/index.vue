<template>
	<section class="list">
		<!-- 作者模块 -->
		<author-nav></author-nav>
		<!-- 热评文章 -->
		<lately-nav></lately-nav>
		<!--	日历	-->
		<dateNav></dateNav>
		<!-- 日常吐槽 -->
		<make-complaints></make-complaints>
		<!--	标签	-->
		<tagsNav></tagsNav>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import AuthorNav from './author'
    import MakeComplaints from './MakeComplaints'
    import LatelyNav from './lately'
    import ArticleNav from './article/index'
	import tagsNav from './tags'
	import dateNav from './date'

	@Component({components:{AuthorNav,MakeComplaints,LatelyNav,ArticleNav,tagsNav, dateNav}})
    export default class ListNav extends Vue {}
</script>
