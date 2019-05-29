<template>
	<section class="home">
		<content-nav></content-nav>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import ContentNav from './content'
    
    @Component({components: {ContentNav}})
    export default class HomeNav extends Vue {
	   
    }
</script>
<style lang="less">

</style>
