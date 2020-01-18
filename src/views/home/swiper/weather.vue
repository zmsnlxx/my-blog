<template>
    <div class="weather">
        <iframe width="200" scrolling="no" height="55" frameborder="0" allowtransparency="true"
                src="http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=1"></iframe>
        <p style="margin: 0;font-size: 12px">
            <span style="display: inline-block;margin-right: 10px">{{ day }}</span>
            <span>{{ time }}</span>
        </p>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class weather extends Vue {
        time: string = ''
        date: any = new Date()
        timer: any
        day: string = ''

        mounted() {
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
                that.day = `${year}-${month}-${strDate}`
                that.time = `${hour}:${minutes}:${seconds}`
            }, 1000)
        }

        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer)//在vue实例销毁钱，清除定时器
            }
        }
    }
</script>

<style lang="less" scoped>
    .weather {
        width: 100%;
        height: 100%;
        background-image: url('../../../assets/images/weather.jpeg');
        background-size: 100% 100%;
        padding: 30px 20px 0 60px;
        box-sizing: border-box;
    }

</style>
