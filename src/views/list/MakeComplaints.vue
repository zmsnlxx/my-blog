<template>
	<section class="complaints">
		<list-nav :data="data" :color-arr="colorArr" :title="title">
			<el-icon slot="icon" class="el-icon-milk-tea" style="margin-right: 10px"></el-icon>
		</list-nav>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    
    @Component
    export default class MakeComplaints extends Vue {
        title = '日常吐槽'
        colorArr = ['aquamarine', 'cornflowerblue', 'deeppink', 'lightpink']
        data = [
            {
                title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
                time: '2019-05-28'
            },
            {
                title: '当时间消磨掉了你的热情你便会发现那些曾令你歇斯底里的去执著的人现已变得可有可无',
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
	.complaints {
		margin-bottom: 20px;
	}
</style>
