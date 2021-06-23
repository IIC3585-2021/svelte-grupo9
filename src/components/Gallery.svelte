<script>
import Gallery from './ModifiedGallery.svelte';
import {getPhotoById} from '../services/unsplash';
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