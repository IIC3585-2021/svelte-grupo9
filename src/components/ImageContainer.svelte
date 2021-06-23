<script>
    import { link } from 'svelte-navigator';
    import Favourite from './Favourite.svelte';

    export let idPhoto;
    export let url;
    export let code;
    export let category;
    export let hideFav;
    export let flags = false;
    export let favourites = false;

    let show = false

	function toggleShow() {
		show = !show
	}
</script>

<div on:mouseenter={toggleShow} on:mouseleave={toggleShow}>
    {#if !flags}
        <a use:link href="/photo/{category}/{idPhoto}" replace>
            <img src={url} alt="">
        </a>
        {#if !hideFav}
            {#if show}
                {#if favourites}
                    <Favourite photoId={code} category={category}></Favourite>
                {:else}
                    <Favourite photoId={idPhoto} category={category}></Favourite>
                {/if}

            {/if}   
        {/if}
    {:else}
        <a use:link href="countries/{code}" replace>
            <img src={url} alt="">
        </a>
        <h3>{code}</h3>
    {/if}
</div>
