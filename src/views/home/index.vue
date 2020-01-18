<template>
	<section class="home">
		<!-- 轮播图模块 -->
		<SwiperNav class="swiper" :data="hostArticle"></SwiperNav>
		<CardNav style="margin-top: 20px" :data="currentPageArticle"></CardNav>
		<el-pagination
				background
				:page-size="5"
				@current-change="handleCurrentChange"
				layout="total, prev, pager, next"
				:total="_.size(allArticleData)">
		</el-pagination>
	</section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
	import SwiperNav from './swiper/index.vue';


	@Component({components: { SwiperNav }})
    export default class HomeNav extends Vue {
		articleData: any = [];
		currentPage: number = 1;
		allArticleData: any = [];

		async mounted() {
			const articleData = await this.getArticle().then((req: Types.InterfaceData) => this.$util.checkResp(req))
			this.allArticleData = this.$lo.cloneDeep(articleData).sort((a: any, b: any) => b.updateTime - a.updateTime)
			window.localStorage.setItem('articleData', JSON.stringify(this.allArticleData))
		}

		get currentPageArticle() {
			if (this.$lo.isEmpty(this.allArticleData)) return [];
			return this.allArticleData.slice( (this.currentPage - 1) * 5, this.currentPage * 5 )
		}

		get hostArticle() {
			if (this.$lo.isEmpty(this.allArticleData)) return [];
			return this.$util.sortKey(this.$lo.cloneDeep(this.allArticleData), 'commentData').slice(0, 5)
		}

		handleCurrentChange(val: number) {
			this.currentPage = val;
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
