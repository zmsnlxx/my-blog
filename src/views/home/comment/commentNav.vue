<template>
    <section class="commentNav">
        <el-input
                style="width: 100%;"
                type="textarea"
                :autosize="{ minRows: 5}"
                placeholder="少侠请留步,快来吐槽点什么鸭..."
                v-model="commentValue">
        </el-input>
        <el-button style="display: block;margin-top: 10px;width: 80px" type="primary" @click.native="goComment">
            发送
        </el-button>
    </section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import {Getter} from 'vuex-class'
    @Component
    export default class commentNav extends Vue {
        @Getter user
        commentValue = null
        loading = false
        defaultUrl = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3913721637,490556209&fm=27&gp=0.jpg'


        goComment() {
            if(this.user && this.$lo.size(this.user) !== 0){
                this.loading = true
                const params = {
                    time: this.moment().format('YYYY-MM-DD'),
                    value: this.commentValue,
                    userName: this.user.name,
                    url: !!this.user.url ? this.user.url : this.defaultUrl,
                    os: this.Os,
                    browse: this.Browse,
                    isReply: false,
                }
                this.$api.sendComment(params).then(req => {
                    this.$message({
                        type: req.data.code === 0 ? 'success' : 'error',
                        message: req.data.data.message
                    })
                    this.$emit('commit',this.loading)
                    this.commentValue = null
                }).catch(err => {
                    if (err) {
                        this.$message({
                            type: 'error',
                            message: err
                        })
                    }
                })
            }else{
                this.$message('请先登录')
                this.commentValue = null
            }

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
    }
</script>

<style lang="less" scoped>
    .commentNav{

    }
</style>