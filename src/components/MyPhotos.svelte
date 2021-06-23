<script>
    import { gallery, favourites, favouriteNames } from '../store'
    import { get } from 'svelte/store'
    import { colors } from '../colors'
    import InputFavourite from './InputFavourite.svelte'

    const galleryStore = get(gallery);
    const favouritesStore = get(favourites);
    let favouriteNamesStore = get(favouriteNames);

    favouriteNames.subscribe((newVal) => {
        favouriteNamesStore = newVal;
    })

</script>

<div>
    {#each favouriteNamesStore as favouriteName, i_fn}
        <InputFavourite i_fn={i_fn} favouriteName={favouriteName} />
    {/each}
</div>

