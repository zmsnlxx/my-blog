<!-- views入口文件 -->
<template>
	<section class="entrance">
		<!-- 头部 -->
		<header-nav/>
		<!-- 内容部分 -->
		<section class="content">
			<el-row :gutter="20">
				<el-col :span="17">
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
						leave-active-class="animated bounceOutLeft"
					>
						<keep-alive v-show="show">
							<router-view class="main-content"/>
						</keep-alive>
					</transition>
				</el-col>
				<el-col :span="7">
					<transition
						mode="out-in"
						name="custom-classes-transition"
						enter-active-class="animated fadeInRight"
						leave-active-class="animated bounceOutRight"
					>
						<list-nav v-show="listShow"></list-nav>
					</transition>
				</el-col>
			</el-row>
		</section>
		<!--<div class="footer"></div>-->
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import HeaderNav from './other/header'
    import ListNav from "./list"

    


    @Component({components: {HeaderNav,ListNav}})
    
    export default class Entrance extends Vue {
        show = false
		listShow = false
        
        mounted () {
			this.show = true
			this.listShow = true
        }
    }
</script>
<style lang="less" scoped>
	.entrance{
		height: 100%;
		width: 100%;
		.content{
			width: 80%;
			margin: 20px auto;
			/*margin-top: 20px;*/
		}
		.footer{
			width: 100%;
			height: 50px;
			background-color: bisque;
		}
	}
</style>
