<script>
	import Navbar from './components/Navbar.svelte';
	import { Router, Route } from "svelte-navigator";
	import Detail from './components/imageDetails.svelte';
	import MyGallery from './components/Gallery.svelte';
</script>
<Router>
	<head>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"/>
	</head>
	
	<Navbar>
		
	</Navbar>
		

	<main></main>
		<Route path="/" component={MyGallery}/>
	
		<!-- <Route path="photo/:id" component={Detail} /> -->
		<Route path="photo/*photoid" component={Detail} />
	
</Router>
<style>
	
</style>