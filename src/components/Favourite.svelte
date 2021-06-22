<script>
  import FavoriteFilled20 from "carbon-icons-svelte/lib/FavoriteFilled20";
  import Favorite20 from "carbon-icons-svelte/lib/Favorite20";
  import { favourites, favouriteNames } from '../store'
  import { get } from 'svelte/store'

  export let photoId;

  const favs = get(favourites);

  const handleClick = (i) => {
      console.log(i, photoId)
      if (favs[i].includes(photoId)){
          const newFavs = favs;
          newFavs[i] = favs[i].filter(item => item !== photoId);
          favourites.update(() => {return newFavs})
          isFavourite[i] = false;
      }
      else{
          favs[i].push(photoId);
          favourites.update(() => {return favs})
          isFavourite[i] = true;
      }
  }

  let isFavourite = []
  const favouriteNamesArr = get(favouriteNames);
  
  favs.forEach(arr => {
      if (arr.includes(photoId)){
          isFavourite.push(true);
      }
      else{
          isFavourite.push(false);
      }
  });
</script>

<div>
    {#each isFavourite as bool, i}
        <div class="fav">
            <button on:click={() => handleClick(i)}>
                {#if bool}
                        <FavoriteFilled20 />
                {:else}
                        <Favorite20 />
                {/if}
            </button>
            <div class = "name"><p><small>{favouriteNamesArr[i]}</small></p></div>
        </div>
    {/each}

    <!-- <FavoriteFilled20 />
    <Favorite20 /> -->
</div>

<style>
    .fav{
        display: flex;
        align-items: center;
        margin: 2px 2px 2px 2px;
    }
    .name{
        margin-left: 5px;
    }
</style>