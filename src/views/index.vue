<!-- views入口文件 -->
<template>
	<section class="entrance">
		<!-- 头部 -->
		<header-nav/>
		<!-- 内容部分 -->
		<!--
			transition：vue的动画标签，需要执行动画的内容使用transition包裹，
			transition标签常用属性enter-active-class：进入的动画样式；
			leave-active-class：离开的动画样式；
			mode="out-in"当前元素先进行过渡，完成之后新元素过渡进入。
			在vue中使用animated库，首先在入口html文件中引入
			然后transition标签的属性值以animated+动画样式类；如下
		-->
		<transition
			mode="out-in"
			name="custom-classes-transition"
			enter-active-class="animated fadeInLeft"
			leave-active-class="animated bounceOutRight"
		>
			<!-- keep-alive -->
			<keep-alive v-if="show">
				<router-view class="main-content"/>
			</keep-alive>
		</transition>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import TopNav from './other/TopNav'
    import HeaderNav from './other/header'


    @Component({components: {TopNav,HeaderNav}})
    
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
	.div {
		margin-top: 60px;
	}
</style>
