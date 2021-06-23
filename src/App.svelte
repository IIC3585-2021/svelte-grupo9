<script>
	import Navbar from './components/Navbar.svelte';
	import { Router, Route } from "svelte-navigator";
	import Detail from './components/imageDetails.svelte';
	import MyGallery from './components/Gallery.svelte';
	import GalleryCountries from './components/CountriesGalery.svelte'
	import flagsGallery from './components/flagsGallery.svelte';

	import MyPhotos from './components/MyPhotos.svelte';
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
		<Route path="countries" component={flagsGallery} />
		<Route path="countries/*countryname" component={GalleryCountries} />
	
		<Route path="myphotos" component={MyPhotos} />
</Router>
<style>
	
</style>