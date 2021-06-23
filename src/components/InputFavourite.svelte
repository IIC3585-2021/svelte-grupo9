<script>
    import { favouriteNames } from '../store'
    import { get } from 'svelte/store'
    import { colors } from '../colors'
    
    export let i_fn;
    export let favouriteName;

    const onChange = (event) => {
        const new_value = event.target.value;
        const favouriteNamesUpdated = get(favouriteNames);
        favouriteNamesUpdated[i_fn] = new_value;
        favouriteNames.update(() => {
            return favouriteNamesUpdated;
        })
    }

</script>

<input class="title" style={`background-color: ${colors[i_fn]};`} value={favouriteName} on:input={onChange}/>

<style>
    .title{
        display: flex;
        align-items: center;
        height: 40px;
        justify-content: center;
    }
</style>