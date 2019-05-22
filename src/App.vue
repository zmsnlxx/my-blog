<template>
	<div id="app" :style="$route.path === '/login' ? {backgroundImage:'url(' + imageUrl +')',backgroundSize: '100% 100%'} : {}">
		<router-view/>
	</div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import imageUrl from './assets/background.jpg'
    
    @Component
    export default class login extends Vue {
        imageUrl = imageUrl
    }
</script>

<style>
	html, body {
		margin: 0;
		padding: 0;
		background-color: #eff1f4;
		font-size: 14px;
		height: 100%;
		background-size: 100% 100%;
	}
	
	#app {
		height: 100%;
	}
</style>
