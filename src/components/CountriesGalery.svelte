<script>
import Gallery from './ModifiedGallery.svelte';
import {getPhotosByCountry} from '../services/unsplash';
import { Router, Route } from "svelte-navigator";
import { Loading } from "carbon-components-svelte";
import flags from '../services/dictPaises';
import { gallery, favourites, favouriteNames } from '../store'
import { get } from 'svelte/store'

export let countryname;

const getPhotos = async (country) => {
    console.log('hola.', Object.keys(get(gallery)).includes(country))
    if (!Object.keys(get(gallery)).includes(country)) {
        const data = await getPhotosByCountry({featured: true}, country)
        gallery.update(existing => {
            existing[country] = data
            return existing
        })
        favourites.update(existing => {
            const arr = []
            get(favouriteNames).forEach(() => {arr.push([])})
            existing[country] = arr;
            return existing
        })
        console.log(get(gallery))
        return data
    }
    else {
        return get(gallery)[country]
    }
}

let countryTag = flags[countryname];
</script>


<Router>
    <Route path={countryname} let:params>

        <figure class="image is-128x128">
            <img class="is-rounded" src="https://flagcdn.com/w1280/{countryTag}.png">
          </figure>
        <h1 class="title">{countryname}</h1>
        <Gallery gap="7" maxColumnWidth="200" category={countryname} hideFav={false}>
            {#await getPhotos(countryname)}
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