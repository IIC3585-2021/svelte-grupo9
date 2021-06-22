<script>
import Gallery from './ModifiedGallery.svelte';
import {getPhotosByCountry} from '../services/unsplash';
export let country;
import { Router, Route } from "svelte-navigator";
import { Loading } from "carbon-components-svelte";

 const getPhotos = (country) => {
    return getPhotoByCountry({featured: true}, country)
 }
</script>

<h1>Chile</h1>
<Gallery gap="7" maxColumnWidth="200">

    {#await getPhotos("chile")}
        <Loading />
    {:then data} 
        {#each data as usImage}
            <img id="{usImage["id"]}" src="{usImage["urls"]["regular"]}" alt="">
        {/each}  
    {/await}

</Gallery>

<h1>Argentina</h1>
<Gallery gap="7" maxColumnWidth="200">

    {#await getPhotos("argentina")}
        <Loading />
    {:then data} 
        {#each data as usImage}
            <img id="{usImage["id"]}" src="{usImage["urls"]["regular"]}" alt="">
        {/each}  
    {/await}

</Gallery>

<h1>Italia</h1>
<Gallery gap="7" maxColumnWidth="200">

    {#await getPhotos("italia")}
        <Loading />
    {:then data} 
        {#each data as usImage}
            <img id="{usImage["id"]}" src="{usImage["urls"]["regular"]}" alt="">
        {/each}  
    {/await}

</Gallery>

<h1>China</h1>
<Gallery gap="7" maxColumnWidth="200">

    {#await getPhotos("china")}
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