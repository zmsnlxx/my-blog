<template>
    <section class="comment">

    </section>
</template>

<script>
    import {Vue, Component,Prop} from 'vue-property-decorator'

    @Component
    export default class comment extends Vue {
        @Prop(Array) data

        reply = ''
        isReply = false


        get newData(){
            return this.$lo.cloneDeep(this.data)
        }

        ddd(item){
            console.log('---');
            console.log(this);
            console.log(this.isReply);
            this.isReply = true
            console.log(item);
        }

    }
</script>

<style lang="less" scoped>
    @import '../assets/css/common.less';
    .comment{

    }
</style>