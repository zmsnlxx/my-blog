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
		<author-nav></author-nav>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import AuthorNav from './author'
    import MakeComplaints from './MakeComplaints'
    import LatelyNav from './lately'
    import ArticleNav from './article'
    
    @Component({components:{AuthorNav,MakeComplaints,LatelyNav,ArticleNav}})
    export default class ListNav extends Vue {
    
    }
</script>
