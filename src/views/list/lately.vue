<template>
	<section class="lately">
		<list-nav :data="hostArticle" :color-arr="colorArr" :title="title" path="/details">
			<el-icon slot="icon" class="el-icon-toilet-paper" style="margin-right: 10px"></el-icon>
		</list-nav>
	</section>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class lately extends Vue {
	  articleData: any = window.localStorage.getItem('articleData')
      title: string = '热评文章'
      colorArr: Array<string> = ['coral', 'aqua', 'rosybrown', 'brown', 'cornflowerblue']

	  get allArticleData() {
		  if (this.$lo.isEmpty(this.articleData)) return [];
		  return JSON.parse(this.articleData);
	  }

	  get hostArticle() {
		  if (this.$lo.isEmpty(this.allArticleData)) return [];
		  return this.allArticleData.sort((a: any, b: any) => {
			  const x = a['commentData'].length;
			  const y = b['commentData'].length;
			  return x > y ? -1 : x < y ? 1 : 0;
		  }).slice(0, 5);
	  }

  }
</script>
<style lang="less">
	.lately {
		margin-bottom: 20px;
	}
</style>
