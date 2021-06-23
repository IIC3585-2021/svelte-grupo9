<script>
    import { gallery, favourites, favouriteNames } from '../store'
    import { get } from 'svelte/store'
    import Gallery from './ModifiedGallery.svelte';
    import InputFavourite from './InputFavourite.svelte'

    const galleryStore = get(gallery);
    let favouritesStore = get(favourites);
    let favouriteNamesStore = get(favouriteNames);

    favouriteNames.subscribe((newVal) => {
        favouriteNamesStore = newVal;
    })

    favourites.subscribe((newVal) => {
        favouritesStore = newVal;
    })

    const handleClick = () => {
       
        const favouritesUpdated = get(favourites);
        favouritesUpdated.splice(i_fn, 1);
        favourites.update(() => {
            return favouritesUpdated;
        })
    }

</script>

<div>
    {#each favouriteNamesStore as favouriteName, i_fn}
        <InputFavourite i_fn={i_fn} favouriteName={favouriteName} />
        <Gallery gap="10" maxColumnWidth="200">
            {#each favouritesStore[i_fn] as photoNumber}
            <img id="{photoNumber}" src="{galleryStore[photoNumber]["urls"]["regular"]}" alt="">
            {/each}
        </Gallery>
    {/each}
</div>

