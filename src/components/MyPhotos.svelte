<script>
    import { gallery, favourites, favouriteNames } from '../store'
    import { get } from 'svelte/store'
    import { colors } from '../colors'
    import Gallery from './ModifiedGallery.svelte';

    const galleryStore = get(gallery);
    const favouritesStore = get(favourites);
    const favouriteNamesStore = get(favouriteNames);


</script>

<div>
    {#each favouriteNamesStore as favouriteName, i_fn}
        <input class="title" style={`background-color: ${colors[i_fn]};`} value={favouriteName}/>
        <Gallery>
            {#each favouritesStore[i_fn] as photoNumber}
            <img id="{photoNumber}" src={galleryStore[photoNumber]["urls"]["regular"]} alt="">
            {/each}
        </Gallery>
    {/each}
</div>

<style>
    .title{
        display: flex;
        align-items: center;
        height: 40px;
        justify-content: center;
    }
</style>