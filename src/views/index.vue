<!-- views入口文件 -->
<template>
	<section class="entrance">
		<!-- 头部 -->
		<header-nav/>
		<!-- 内容部分 -->
		<!-- keep-alive -->
		<keep-alive v-if="show">
			<router-view class="main-content"/>
		</keep-alive>
		<!--<div class="footer"></div>-->
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import HeaderNav from './other/header'


    @Component({components: {HeaderNav}})
    
    export default class Entrance extends Vue {
        show = false
        
        mounted () {
            setTimeout(() => {
                this.show = true
            }, 500)
        }
        
    }
</script>
<style lang="less">
	.footer{
		width: 100%;
		height: 50px;
		background-color: bisque;
	}
</style>
