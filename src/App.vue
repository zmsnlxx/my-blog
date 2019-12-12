<template>
    <div id="app">
        <header-nav class="header"/>
        <router-view style="padding-bottom: 100px"/>
        <el-footer style="background-color: #475669;text-align: center;color: white;line-height: 60px">Copyright© 2019-2020 版权所有 zmsnlxx 豫ICP备19042595号-1</el-footer>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import HeaderNav from './views/other/header.vue'

    @Component({components: {HeaderNav}})
    export default class App extends Vue {}
</script>

<style lang="less">
    @import 'assets/css/common.less';

    html, body, #app {
        width: 100%;
        min-height: 1200px;
        margin: 0 auto;
        position: relative;
        background-color: whitesmoke;
        .header {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
        .el-footer{
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
        }

    }
</style>
