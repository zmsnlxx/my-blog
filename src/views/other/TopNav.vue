<template>
	<el-header>
		<span class="left" v-if="$route.path !== '/home'" @click="$router.back(-1)">
			<i class="el-icon-arrow-left"></i>
		</span>
		<span class="title">{{ titleName }}</span>
		<span class="time">{{ time }}</span>
	</el-header>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    
    @Component
    export default class TopNav extends Vue {
        time = ''
        date = new Date()
        
        mounted () {
            const that = this
            this.timer = setInterval(function () {
                that.date = new Date()
                const year = that.date.getFullYear()
                let month = that.date.getMonth() + 1
                let strDate = that.date.getDate()
                const hour = that.date.getHours()
                const minutes = that.date.getMinutes()
                let seconds = that.date.getSeconds()
                if (month >= 1 && month <= 9) {
                    month = "0" + month
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate
                }
                if (seconds >= 0 && seconds <= 9) {
                    seconds = "0" + seconds
                }
                that.time = `${year}-${month}-${strDate} ${hour}:${minutes}:${seconds}`
            }, 1000)
        }
        
        beforeDestroy () {
            if (this.timer) {
                clearInterval(this.timer)//在vue实例销毁钱，清除定时器
            }
        }
        
        get titleName(){
            return this.$route.path === '/login' ? '欢迎登录' : '个人博客'
        }
    }
</script>

<style lang="less" scoped>
	.el-header {
		position: fixed;
		z-index: 100;
		height: 60px;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #37c6c0;
		text-align: center;
		.left {
			height: 60px;
			line-height: 60px;
			color: white;
			position: absolute;
			left: 20px;
			font-size: 30px;
			font-weight: 300;
		}
		.title {
			color: white;
			line-height: 60px;
			font-size: 20px;
		}
		.time {
			color: white;
			line-height: 60px;
			position: absolute;
			right: 20px;
			top: 15px;
		}
	}
</style>
