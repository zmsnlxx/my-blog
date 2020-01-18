<template>
	<section class="complaints">
		<list-nav :data="commentData" :color-arr="colorArr" :title="title">
			<el-icon slot="icon" class="el-icon-milk-tea" style="margin-right: 10px"></el-icon>
		</list-nav>
	</section>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
	import Types from '../../../types/index';

	@Component
    export default class MakeComplaints extends Vue {
        title = '日常吐槽'
        colorArr = ['aquamarine', 'cornflowerblue', 'deeppink', 'lightpink', 'coral']
		commentData: any = []

		async mounted() {
			const commentData = await this.$api.getComment().then((req: Types.InterfaceData) => this.$util.checkResp(req));
			this.commentData = this.$util.sortKey(this.$lo.cloneDeep(commentData), 'time').slice(0, 5)

		}

    }
</script>
<style lang="less">
	.complaints {
		margin-bottom: 20px;
	}
</style>
