<script>
  import FavoriteFilled20 from "carbon-icons-svelte/lib/FavoriteFilled20";
  import Favorite20 from "carbon-icons-svelte/lib/Favorite20";
  import { favourites, favouriteNames } from '../store'
  import { get } from 'svelte/store'
  import { colors } from '../colors'

  export let photoId;
  export let category;
  let isFavourite = []

  const handleClick = (i) => {
      console.log(i, photoId)
      if (favs[category][i].includes(photoId)){
          const newFavs = favs;
          newFavs[category][i] = favs[category][i].filter(item => item !== photoId);
          favourites.update(() => {return newFavs})
          isFavourite[i] = false;
      }
      else{
          favs[category][i].push(photoId);
          favourites.update(() => {return favs})
          isFavourite[i] = true;
      }
  }

  const favouriteNamesArr = get(favouriteNames);
  let favs = get(favourites);
  console.log(favs)

    favs[category].forEach((arr) => {
        if (arr.includes(photoId)){
            isFavourite.push(true);
            console.log("si es favorito")
        }
        else{
            isFavourite.push(false);
        }
    })

  favourites.subscribe((newVal) => {
        favs = newVal;
    })
</script>

<div>
    {#each isFavourite as bool, i}
        <div class="fav">
            <button on:click={() => handleClick(i)} style={`background-color: ${colors[i]};`}>
                {#if bool}
                    <div class="desactivated"><FavoriteFilled20/></div>
                {:else}
                    <div class="desactivated"><Favorite20/></div>
                {/if}
            </button>
            <div class = "name"><p><small>{favouriteNamesArr[i]}</small></p></div>
        </div>
    {/each}
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
    .desactivated{
        pointer-events: none
    }
</style>   