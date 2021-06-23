<script>
	import Gallery from './ModifiedGallery.svelte';
    import {getRandomPhoto} from '../services/unsplash';
    import { Loading } from "carbon-components-svelte";
    import { gallery } from '../store'
    import { get } from 'svelte/store'
    const getGalleryPhoto = async () => {
        console.log('hola')
        if (get(gallery)["random"].length === 0) {
            const data = await getRandomPhoto()
            gallery.update(existing => {
                existing["random"] = data
                return existing
            })
            console.log(get(gallery))
            return data
        }
        else {
            return get(gallery)["random"]
        }
    }
</script>

<Gallery gap="10" maxColumnWidth="200" category="random">

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