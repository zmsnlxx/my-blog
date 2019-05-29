<template>
	<section class="lately">
		<list-nav :data="data" :color-arr="colorArr" :title="title">
			<el-icon slot="icon" class="el-icon-toilet-paper" style="margin-right: 10px"></el-icon>
		</list-nav>
	</section>
</template>

<script>
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class lately extends Vue {
      title = '最近更新'
      colorArr = ['coral', 'aqua', 'rosybrown', 'brown']
      data = [
          {
              title: '拿什么拯救我的孤单',
              time: '2019-05-28'
          },
          {
              title: '你不知道的JavaScript',
              time: '2019-05-28'
          }, {
              title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
              time: '2019-05-28'
          }, {
              title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
              time: '2019-05-28'
          }
      ]

  }
</script>
<style lang="less">
	.lately {
		margin-bottom: 20px;
	}
</style>
