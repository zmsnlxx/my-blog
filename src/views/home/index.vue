<template>
	<section class="home">
		<!-- 轮播图模块 -->
		<SwiperNav class="swiper"></SwiperNav>
		<CardNav :data="articleData"></CardNav>
		<!--	分类展示模块	-->
<!--		<classNav class="classNav"></classNav>-->
		<!--	特别推荐模块	-->
<!--		<recommend class="recommend"></recommend>-->
		<!-- 最新文章模块 -->
<!--		<newsNav></newsNav>-->
	</section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
	import SwiperNav from './swiper/index.vue';
    import recommend from './recommend/index.vue';
	import classNav from './class/index.vue';
	import newsNav from './news/index.vue';




	@Component({components: {SwiperNav,recommend,classNav,newsNav}})
    export default class HomeNav extends Vue {
		articleData: any = []


		async mounted() {
			this.articleData = await this.getArticle().then((req: Types.InterfaceData) => this.$util.checkResp(req))
		}

		getArticle() {
			return this.$api.getArticle();
		}
    }
</script>
<style lang="less">
	.home{
		height: 100%;
		.div{
			width: 50%;
			height: 500px;
			background-color: red;
			margin-top: 10px;
		}
	}
</style>
