<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<h1>lxx</h1>
		<h1>调试</h1>
	</div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    
    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
