<script>
import Gallery from './ModifiedGallery.svelte';
import {getPhotosByCountry} from '../services/unsplash';
export let countryname;
import { Router, Route } from "svelte-navigator";
import { Loading } from "carbon-components-svelte";
import flags from '../services/dictPaises';

 const getPhotos = (country) => {
    return getPhotosByCountry({featured: true}, country)
 }
 let countryTag = flags[countryname];
</script>


<Router>
    <Route path={countryname} let:params>

        <figure class="image is-128x128">
            <img class="is-rounded" src="https://flagcdn.com/w1280/{countryTag}.png">
          </figure>
        <h1 class="title">{countryname}</h1>
        <Gallery gap="7" maxColumnWidth="200">

            {#await getPhotos("chile")}
                <Loading />
            {:then data} 
                {#each data as usImage}
                    <img id="{usImage["id"]}" src="{usImage["urls"]["regular"]}" alt="">
                {/each}  
            {/await}

        </Gallery>
    </Route>
</Router>


<style>
	:global(img) { opacity: .9; transition: all .2s }
	:global(img):hover { opacity: 1; transform: scale(1.04) }
</style>