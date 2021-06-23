<script>
    import { favouriteNames, favourites } from '../store'
    import { get } from 'svelte/store'
    import { colors } from '../colors'
    import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
    
    export let i_fn;
    export let favouriteName;

    const onChangeInput = (event) => {
        const new_value = event.target.value;
        const favouriteNamesUpdated = get(favouriteNames);
        favouriteNamesUpdated[i_fn] = new_value;
        favouriteNames.update(() => {
            return favouriteNamesUpdated;
        })
    }

    const handleClick = () => {
        const favouriteNamesUpdated = get(favouriteNames);
        favouriteNamesUpdated.splice(i_fn, 1);
        favouriteNames.update(() => {
            return favouriteNamesUpdated;
        })
        favourites.update((existing) => {
            Object.entries(existing).forEach(cat_tup => {
                const cat = cat_tup[0]
                const arr_cat = cat_tup[1]
                arr_cat.splice(i_fn, 1)
                existing[cat] = arr_cat
                }
            )
            return existing
        })
    }

</script>

<div class='fav'>
    <input class="title" style={`background-color: ${colors[i_fn]};`} value={favouriteName} on:input={onChangeInput}/>
    <div>
        <button on:click={handleClick}>
            <div class="desactivated"><TrashCan16/></div>
        </button>
    </div>

</div>


<style>
    .title{
        display: flex-start;
        align-items: center;
        height: 40px;
        justify-content: center;
    }
    .fav{
        display: flex;
        align-items: center;
    }
    .desactivated{
        pointer-events: none;
    }
    .button{
        padding-left: 10px;
        padding-bottom: 10px;
    }
</style>