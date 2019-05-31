<template>
    <section class="comment">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>留言板</span>
            </div>
            <div class="reply">
                <el-input
                        style="width: 100%;"
                        type="textarea"
                        :autosize="{ minRows: 5}"
                        placeholder="少侠请留步,快来吐槽点什么鸭..."
                        v-model="textarea">
                </el-input>
                <el-button style="display: block;margin-top: 10px;width: 80px" type="primary" @click.native="comment">发送</el-button>
            </div>
            <el-row class="container" v-loading="loading">
                <div v-if="_.isEmpty(data)">暂无评论!</div>
                <div v-else v-for="(item,index) in data" :key="index" class="text item">
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
                                    <el-button type="text" class="floatRight" @click="item.isReply = !item.isReply">回复</el-button>
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
                                        v-model="textarea">
                                </el-input>
                                <el-button style="display: block;margin-top: 10px;width: 80px" type="primary" @click="sendReply(item)">发送</el-button>
                            </section>
                        </div>
                    </section>
                </div>
            </el-row>
        </el-card>
    </section>
</template>

<script>

    import {Vue, Component} from 'vue-property-decorator'

    @Component

    export default class comment extends Vue {
        textarea = null
        data = []
        loading = true

        // 发送回复信息
        sendReply(item){
            item.isReply = false
            alert(item)
            console.log(this.textarea);
        }

        mounted(){
            this.init()
        }

        async init(){
            const params = {limit: 10}
            const {data} = (await this.$api.getComment(params)).data
            this.data = this.$lo.reverse(this.$lo.clone(data))
            setTimeout(() => {
                this.loading = false
            },1000)
        }

        // 获取操作系统
        get Os() {
            const sUserAgent = navigator.userAgent;
            const isWin = (navigator.platform === "Win32") || (navigator.platform === "Windows");
            const isMac = (navigator.platform === "Mac68K") || (navigator.platform === "MacPPC") || (navigator.platform === "Macintosh") || (navigator.platform === "MacIntel");
            if (isMac) return "Mac";
            const isUnix = (navigator.platform === "X11") && !isWin && !isMac;
            if (isUnix) return "Unix";
            const isLinux = (String(navigator.platform).indexOf("Linux") > -1);
            if (isLinux) return "Linux";
            if (isWin) {
                const isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
                if (isWin2K) return "Win2000";
                const isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
                if (isWinXP) return "WinXP";
                const isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
                if (isWin2003) return "Win2003";
                const isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
                if (isWinVista) return "WinVista";
                const isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
                if (isWin7) return "Win7";
                const isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
                if (isWin10) return "Win10";
            }
            return "other";
        }

        get Browse() {
            const browser = {};
            const userAgent = navigator.userAgent.toLowerCase();
            let s;
            (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1] : (s = userAgent.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s = userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
            let version = "";
            if (browser.ie) {
                version = 'IE ' + browser.ie;
            } else {
                if (browser.firefox) {
                    version = 'firefox ' + browser.firefox;
                } else {
                    if (browser.chrome) {
                        version = 'chrome ' + browser.chrome;
                    } else {
                        if (browser.opera) {
                            version = 'opera ' + browser.opera;
                        } else {
                            if (browser.safari) {
                                version = 'safari ' + browser.safari;
                            } else {
                                version = '未知浏览器';
                            }
                        }
                    }
                }
            }
            return version;
        }

        // 发送留言
        comment(){
            this.loading = true
            const params = {
                time: this.moment().format('YYYY-MM-DD'),
                value: this.textarea,
                userName: window.localStorage.getItem('name') || 'lxx',
                url:'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                os: this.Os,
                browse: this.Browse,
                isReply: false,
            }
            this.$api.sendComment(params).then(req => {
                this.$message({
                    type: req.data.code === 0 ? 'success' : 'error',
                    message: req.data.data.message
                })
                this.init()
                this.textarea = null
            }).catch(err => {
                if(err){
                    console.log('===');
                    this.$message({
                        type: 'error',
                        message: err
                    })
                }
            })
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/common.less';

    .comment {
        .reply{
            width: 99%;
            padding: 10px;
            margin-bottom: 10px;
        }
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