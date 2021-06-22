<script>
import Gallery from './ModifiedGallery.svelte';
import {getPhotosByCountry} from '../services/unsplash';
export let country;
import { Router, Route } from "svelte-navigator";
import { Loading } from "carbon-components-svelte";

 const getPhotos = (country) => {
    return getPhotoById({featured: true}, country)
 }
</script>

<Gallery gap="10" maxColumnWidth="200">

    {#await getPhotos("chile")}
        <Loading />
    {:then data} 
        {#each data as usImage}
            <img id="{usImage["id"]}" src="{usImage["urls"]["regular"]}" alt="">
        {/each}  
    {/await}

</Gallery>


<style>
	:global(img) { opacity: .9; transition: all .2s }
	:global(img):hover { opacity: 1; transform: scale(1.04) }
</style>