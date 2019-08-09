<template>
    <section class="content">
        <!-- 轮播图 -->
        <swiper-nav :urls="images"></swiper-nav>
        <!-- 分类标签 -->
        <label-nav :label="label">
            <el-icon slot="icon" style="font-size: 20px;margin-left: 10px" class="el-icon-magic-stick"></el-icon>
        </label-nav>
        <!-- 文章列表 -->
        <card-nav :data="data"></card-nav>
        <el-pagination
                style="margin-top: 20px"
                background
                @current-change="handleCurrentChange"
                :page-size="5"
                layout="prev, pager, next"
                :total="total">
        </el-pagination>
    </section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import SwiperNav from '../other/swiper.vue'

    @Component({components: {SwiperNav}})
    export default class ContentNav extends Vue {
        label: string = '最新文章';
        index: number = 0;
        urls: Array<string> = [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ];
        total: number = 0;
        allData: Array<object> = [];
        data: Array<object> = [];

        mounted() {
            this.$api.getArticle().then((req: any) => {
                console.log(req.data.data);
                const data = req.data.data;
                this.$lo.each(data, (item: any) => {
                    const result = {
                        url: item.titleImg,
                        title: item.title,
                        text: item.abstract,
                        time: item.time,
                        class: item.tags,
                        record: 15000,
                        like: 1000,
                    }
                    this.allData.push(result)
                })
                this.allData = [...this.$lo.reverse(this.allData)]
                this.getData()
                this.total = this.$lo.size(this.allData);
            })
        }

        get images(){
            if(this.$lo.isEmpty(this.data))return [];
            const result:string[] = []
            this.$lo.each(this.data, (item: any) => {
                console.log(item);
                result.push(item.url)
            })
            console.log(result);
            return result;
        }

        getData():void{
            if(this.$lo.isEmpty(this.allData)) this.data = [];
            this.data = this.allData.slice(this.index * 5,(this.index + 1) * 5);
        }

        handleCurrentChange(val: number) {
            console.log(`当前页: ${val}`);
            this.index = val - 1;
            this.getData()
        }

    }
</script>
<style lang="less" scoped>

</style>
