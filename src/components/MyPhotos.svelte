<script>
    import { gallery, favourites, favouriteNames } from '../store'
    import { get } from 'svelte/store'
    import { colors } from '../colors'

    const galleryStore = get(gallery);
    const favouritesStore = get(favourites);
    const favouriteNamesStore = get(favouriteNames);


</script>

<div>
    {#each favouriteNamesStore as favouriteName, i_fn}
        <input class="title" style={`background-color: ${colors[i_fn]};`} value={favouriteName}/>
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