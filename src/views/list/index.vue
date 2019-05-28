<template>
	<section class="list">
		<author-nav></author-nav>
		<make-complaints></make-complaints>
		<!--<lately-nav></lately-nav>-->
		<author-nav></author-nav>
		<author-nav></author-nav>
	</section>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import AuthorNav from './author'
    import MakeComplaints from './MakeComplaints'
    import LatelyNav from './lately'



    @Component({components:{AuthorNav,MakeComplaints,LatelyNav}})
    export default class ListNav extends Vue {
    
    }
</script>
