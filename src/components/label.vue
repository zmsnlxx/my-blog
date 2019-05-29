<template>
	<section class="label">
		<div class="class_title">
			<slot name="icon"></slot>
			<span class="title">{{ label }}</span>
		</div>
	</section>
</template>

<script>
    import {Vue, Component, Prop} from 'vue-property-decorator'
    
    @Component
    export default class LabelNav extends Vue {
        @Prop(String) label
        
    }
</script>
<style lang="less" scoped>
	.label {
		.class_title{
			margin-top: 20px;
			width: 256px;
			height: 40px;
			background-color: bisque;
			line-height: 40px;
			font-size: 18px;
			border-radius: 0 18px 18px 0;
			.title{
				display: inline-block;
				margin-left: 10px;
				
			}
		}
	}
</style>

