<script>
    import { gallery, favourites, favouriteNames } from '../store'
    import { get } from 'svelte/store'
    import Gallery from './ModifiedGallery.svelte';
    import InputFavourite from './InputFavourite.svelte'

    const galleryStore = get(gallery);
    let favouritesStore = get(favourites);
    let favouriteNamesStore = get(favouriteNames);

    const addFav = () => {
        favourites.update((existing) => {
            existing.push([])
            return existing
        })
        favouriteNames.update((existing) => {
            existing.push('')
            return existing
        })
    }

    favouriteNames.subscribe((newVal) => {
        favouriteNamesStore = newVal;
    })

    favourites.subscribe((newVal) => {
        favouritesStore = newVal;
    })


</script>

<div>
    {#each favouriteNamesStore as favouriteName, i_fn}
        <InputFavourite i_fn={i_fn} favouriteName={favouriteName} />
        <!-- {#each favouritesStore as collection} -->
            <Gallery gap="10" maxColumnWidth="200" favourite={true}>
                {#each favouritesStore[i_fn] as photoNumber}
                    {console.log("nro foto", photoNumber)}
                    <img id="{photoNumber}" src="{galleryStore[photoNumber]["urls"]["regular"]}" alt="">
                {/each}
            </Gallery>
        <!-- {/each} -->
    {/each}
    <div class="buttons" id="add" on:click={addFav}>
        <div class="button is-primary" >
          <strong>Agregar categoria</strong>
        </div>
    </div>
</div>

<style>
    #add {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
