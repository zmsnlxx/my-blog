<template>
    <section class="news">
        <el-card class="box-card card" :body-style="{padding:'15px',height:'100%',boxSizing: 'border-box'}">
            <div class="card-header">
                <ul class="ul">
                    <li class="li">最新文章</li>
                </ul>
            </div>
            <contentNav class="card-container"></contentNav>
        </el-card>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import contentNav from './contentNav.vue';


    @Component({components:{contentNav}})
    export default class news extends Vue {
    }
</script>

<style lang="less" scoped>
    .news{
        width: 100%;
        .card{
            margin-top: 20px;
            .card-header{
                width: 100%;
                .ul {
                    width: 100%;
                    padding-left: 0;
                    height: 40px;
                    margin: 0;
                    border-bottom: 1px solid #999999;
                    .li {
                        color: black;
                        font-size: 18px;
                        list-style: none;
                        float: left;
                        text-align: left;
                        line-height: 40px;
                        border-bottom: 2px solid black;
                    }
                }
            }

        }
    }
</style>
