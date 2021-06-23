<script>
	import Gallery from './ModifiedGallery.svelte';
    import {getRandomPhoto} from '../services/unsplash';
    import { Loading } from "carbon-components-svelte";
    import { gallery } from '../store'
    import { get } from 'svelte/store'
    const getGalleryPhoto = async () => {
        console.log('gola', get(gallery))
        if (get(gallery).length === 0) {
            const data = await getRandomPhoto()
            console.log(data);
            gallery.update(existing => {
                return data;
            })
            console.log(get(gallery))
            return data
        }
        else {
            return get(gallery)
        }
    }
</script>

<Gallery gap="10" maxColumnWidth="200">

    {#await getGalleryPhoto()}
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