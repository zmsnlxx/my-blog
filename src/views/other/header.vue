<template>
	<section class="header">
		<transition
			mode="out-in"
			name="custom-classes-transition"
			enter-active-class="animated fadeInDown"
			leave-active-class="animated fadeOut"
		>
			<ul class="ul" v-show="headerInit">
				<el-icon class="el-icon-close li close" @click.native="closeHeader"/>
				<li class="li">首页</li>
				<li class="li">更新</li>
				<li class="li">归档</li>
				<li class="li">留言</li>
				<li class="li">
					<el-input class="input" type="text" placeholder="Try to search ..." @change="handlerSearch" v-model="value" suffix-icon="el-icon-search"/>
				</li>
			</ul>
		</transition>
		
		<transition
			mode="out-in"
			name="custom-classes-transition"
			enter-active-class="animated fadeInDown"
			leave-active-class="animated fadeOut"
		>
			<el-icon v-if="show" class="el-icon-s-grid icon" @click.native="openHeader"/>
		</transition>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    
    @Component
    export default class HeaderNav extends Vue {
        headerInit = false
        show = false
        value = null
        
        
        mounted () {
            setTimeout(() => {
                this.headerInit = !this.headerInit
            }, 500)
        }
        
        closeHeader () {
            this.headerInit = !this.headerInit
            setTimeout(() => {
                this.show = !this.show
            }, 1000)
        }
        
        openHeader () {
            this.show = !this.show
            setTimeout(() => {
                this.headerInit = !this.headerInit
            }, 1000)
        }
        
        handlerSearch () {
            console.log(this.value)
            setTimeout(() => {
                this.value = null
            }, 50)
        }
        
    }
</script>

<style lang="less" scoped>
	.header {
		z-index: 100;
		width: 100%;
		position: relative;
		height: 60px;
		.icon {
			color: white;
			font-size: 30px;
			display: inline-block;
			margin-left: 160px;
			margin-top: 20px;
			line-height: 30px;
			
		}
		.ul {
			padding-left: 0;
			width: 80%;
			height: 60px;
			margin: 0 auto;
			.li {
				color: white;
				width: 80px;
				font-size: 18px;
				list-style: none;
				float: left;
				text-align: center;
				line-height: 60px;
				.input {
					margin-left: 60px;
					width: 200px;
					line-height: 60px;
				}
			}
			.close {
				font-size: 30px;
			}
		}
	}
</style>
