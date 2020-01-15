<template>
    <section class="date">
        <el-calendar class="el-calendar" v-model="value"></el-calendar>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class dateNAV extends Vue {
        value = new Date();
    }
</script>
<style lang="less">
    .date {
        margin-bottom: 20px;
        .el-calendar {
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
        }
        /deep/ .el-calendar-table .el-calendar-day {
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0;
        }
        /deep/ .el-calendar__button-group {
            display: none;
        }
    }
</style>
