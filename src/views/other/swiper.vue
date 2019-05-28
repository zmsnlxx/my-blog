<template>
	<section class="swiper">
		<el-carousel>
			<el-carousel-item v-for="item in urls" :key="item">
				<img style="width: 100%;height: 100%;" :src="item" alt="图片加载失败">
			</el-carousel-item>
		</el-carousel>
	</section>
</template>

<script>
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class SwiperNav extends Vue {
      urls = [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]

  }
</script>
<style lang="less" scoped>
	.swiper{
		width: 100%;
		height: 300px;
		.el-carousel__item h3 {
			color: #475669;
			font-size: 18px;
			opacity: 0.75;
			line-height: 300px;
			margin: 0;
		}
		
		.el-carousel__item:nth-child(2n) {
			background-color: #99a9bf;
		}
		
		.el-carousel__item:nth-child(2n+1) {
			background-color: #d3dce6;
		}
	}
</style>
