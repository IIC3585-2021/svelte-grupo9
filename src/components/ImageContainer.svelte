<script>
    import { link } from 'svelte-navigator';
    import Favourite from './Favourite.svelte';

    export let idPhoto;
    export let url;

    let show = false

	function toggleShow() {
        console.log(show);
		show = !show
	}
</script>

<div on:mouseenter={toggleShow} on:mouseleave={toggleShow}>
    <a use:link href="photo/{idPhoto}" replace>
        <img src={url} alt="">
    </a>
    {#if show}
        <Favourite photoId={idPhoto}></Favourite>
    {/if}
</div>
