<script>
    import { link } from 'svelte-navigator';
    import Favourite from './Favourite.svelte';

    export let idPhoto;
    export let url;
    export let code;

    let show = false
    export let flags = false;

	function toggleShow() {
        console.log(show);
		show = !show
	}
</script>

<div on:mouseenter={toggleShow} on:mouseleave={toggleShow}>
    {#if !flags}
        <a use:link href="photo/{idPhoto}" replace>
            <img src={url} alt="">
        </a>
        {#if show}
                <Favourite photoId={idPhoto}></Favourite>
        {/if}   
    {:else}
        <a use:link href="countries/{code}" replace>
            <img src={url} alt="">
        </a>
        <h3>{code}</h3>
    {/if}
</div>
