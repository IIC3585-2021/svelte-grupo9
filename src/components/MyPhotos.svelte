<script>
    import { gallery, favourites, favouriteNames } from '../store'
    import { get } from 'svelte/store'
    import Gallery from './ModifiedGallery.svelte';
    import InputFavourite from './InputFavourite.svelte'

    const galleryStore = get(gallery);
    let favouritesStore = get(favourites);
    let favouriteNamesStore = get(favouriteNames);
    let galleryCats = Array.from(Object.keys(favouritesStore));
    console.log(galleryCats)

    const addFav = () => {
        favourites.update((existing) => {
            Object.entries(existing).forEach(cat_tup => {
                const cat = cat_tup[0]
                const arr_cat = cat_tup[1]
                arr_cat.push([])
                existing[cat] = arr_cat
                }
            )
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
            <Gallery gap="10" maxColumnWidth="200" favourite={false} hideFav={true}>
                {#each galleryCats as cat}
                    {#each favouritesStore[cat][i_fn] as photoNumber}
                        {console.log("nro foto", photoNumber)}
                        <img id="{photoNumber}" src="{galleryStore[cat][photoNumber]["urls"]["regular"]}" alt="">
                    {/each}
                {/each}
            </Gallery>
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
