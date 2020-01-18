<template>
    <section class="form-list">
        <el-input type="textarea" :rows="row"
                  :placeholder="placeholder"
                  v-model="textarea"></el-input>
        <el-button class="primary" type="primary" @click="submitComment">发表评论</el-button>
        <slot name="button"></slot>
    </section>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    @Component

    export default class formList extends Vue {
        @Prop() placeholder: string;
        @Prop() row: number;
        textarea: string = '';


        submitComment() {
            this.$emit('getTextarea', this.textarea)
            this.textarea = '';
        }
    }
</script>

<style lang="less" scoped>
.form-list {
    margin-bottom: 60px;

    .primary {
        display: inline-block;
        float: right;
        margin-top: 10px;
    }
}
</style>
