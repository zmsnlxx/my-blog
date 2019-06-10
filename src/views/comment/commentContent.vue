<template>
    <section class="commentContent">
        <div v-for="(item,index) in body" :key="index" class="text item">
            <section class="flex">
                <div class="heightAdapt left">
                    <img class="img" :src="item.url" alt="">
                </div>
                <div class="right">
                    <section class="head">
                        <p class="top">
                            <span class="head_meg">{{ item.userName }}</span>
                            <span class="os">{{ item.Os }}</span>
                            <span class="os">{{ item.browse }}</span>
                        </p>
                        <p class="bottom">
                            <span>{{ item.time }}</span>
                            <el-button type="text" class="floatRight" @click.native="item.isReply = !item.isReply">回复
                            </el-button>
                        </p>
                    </section>
                    <section class="content">
                        <p style="text-indent: 25px;">{{ item.value }}</p>
                    </section>
                    <section class="content" v-show="item.isReply">
                        <el-input
                                style="width: 100%;"
                                type="textarea"
                                :autosize="{ minRows: 5}"
                                placeholder="说点什么呢..."
                                v-model="reply">
                        </el-input>
                        <el-button style="display: block;margin-top: 10px;width: 80px" type="primary"
                                   @click="goSendReply(item)">发送
                        </el-button>
                    </section>
                    <section class="content">
                        <section v-if="item.reply && !_.isEmpty(item.reply)">
                            <div v-for="(i,id) in item.reply" :key="id" class="text item">
                                <section class="flex">
                                    <div class="heightAdapt left">
                                        <img class="img" :src="i.url" alt="">
                                    </div>
                                    <div class="right">
                                        <section class="head">
                                            <p class="top">
                                                <span class="head_meg">{{ i.userName }}</span>
                                                <span class="os">{{ i.Os }}</span>
                                                <span class="os">{{ i.browse }}</span>
                                            </p>
                                            <p class="bottom">
                                                <span>{{ i.time }}</span>
                                                <el-button type="text" class="floatRight"
                                                           @click.native="i.isReply = !i.isReply">回复
                                                </el-button>
                                            </p>
                                        </section>
                                        <section class="content">
                                            <p style="text-indent: 25px;">{{ i.value }}</p>
                                        </section>
                                        <section class="content" v-show="i.isReply">
                                            <el-input
                                                    style="width: 100%;"
                                                    type="textarea"
                                                    :autosize="{ minRows: 5}"
                                                    placeholder="说点什么呢..."
                                                    v-model="reply">
                                            </el-input>
                                            <el-button style="display: block;margin-top: 10px;width: 80px"
                                                       type="primary"
                                                       @click="goReply(item,i)">发送
                                            </el-button>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </div>
    </section>
</template>

<script>

    import {Vue, Component, Prop} from 'vue-property-decorator'
    import {Getter} from 'vuex-class'

    @Component
    export default class comment extends Vue {
        @Getter user
        reply = ''
        loading = true

        @Prop(Array)body
        defaultUrl = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3913721637,490556209&fm=27&gp=0.jpg'



        // 发送回复信息
        goSendReply(item) {
            item.isReply = false
            const params = {
                time: this.moment().format('YYYY-MM-DD'),
                value: `@${item.userName},${this.reply}`,
                userName: this.user.name,
                url: !!this.user.url ? this.user.url : this.defaultUrl,
                os: this.Os,
                browse: this.Browse,
                isReply: false,
            }
            this.$api.sendReply({id: item.id, reply: params}).then(req => {
                this.$message({
                    type: req.data.code === 200 ? 'success' : 'error',
                    message: req.data.data
                })
                this.$emit('success', this.loading)
                this.reply = null
            })
        }


        goReply(item, i) {
            i.isReply = false
            const params = {
                time: this.moment().format('YYYY-MM-DD'),
                value: `@${i.userName},${this.reply}`,
                userName: this.user.name,
                url: !!this.user.url ? this.user.url : this.defaultUrl,
                os: this.Os,
                browse: this.Browse,
                isReply: false,
            }
            this.$api.sendReply({id: item.id, reply: params}).then(req => {
                this.$message({
                    type: req.data.code === 200 ? 'success' : 'error',
                    message: req.data.data
                })
                this.$emit('success', true)
                this.reply = null
            })
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/common.less';

    .commentContent {
        .flex {
            display: flex;

            .os {
                color: #999999;
                font-size: 14px;
                display: inline-block;
                margin-left: 20px;
            }
        }
    }
</style>