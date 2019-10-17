<template>
    <div id="app" :style="{height}">
        <header-nav class="header"/>
        <vue-particles color="#FF6600" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4"
                       linesColor="#FF6600" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
                       :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"
                       class="particles-js"/>
        <router-view id="a"/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import HeaderNav from './views/other/header.vue'

    @Component({components: {HeaderNav}})
    export default class App extends Vue {
        height: string = '1500px';

        mounted() {
            setTimeout(() => {
                const container: any = document.getElementById('a');
                this.height = container.offsetHeight + 'px';
            }, 1000)
        }
    }
</script>

<style lang="less">
    @import 'assets/css/common.less';

    html, body, #app {
        margin: 0;
        height: 100%;
        position: relative;
        background-color: whitesmoke;

        .header {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }

        .particles-js {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>
