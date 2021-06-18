<script>
    import { onMount } from 'svelte';
    import { link } from 'svelte-navigator';
    export let gap = 10;
    export let maxColumnWidth = 250;
    
    let slotHolder = null;
    let columns = [];
    let galleryWidth = 0;
    let columnCount = 0;
    let imageIds = {};
    
    $: columnCount = parseInt(galleryWidth / maxColumnWidth) || 1;
    $: columnCount && Draw();
    $: galleryStyle = `grid-template-columns: repeat(${columnCount}, 1fr); --gap: ${gap}px`;
    
    onMount(Draw);

    function Draw() {
        if (!slotHolder) { return }

        const images = Array.from(slotHolder.childNodes).filter(child => child.tagName === "IMG");
        columns = [];

        // Fill the columns with image URLs
        for (let i=0; i<images.length; i++) {
            const idx = i % columnCount;
            columns[idx] = [...columns[idx] || [], images[i].src];
            imageIds[images[i].src] = images[i].id;
        }
    }
</script>

<div id="slotHolder" bind:this={slotHolder} on:DOMNodeInserted={Draw}>
    <slot></slot>
</div>

{#if columns}
<div id="gallery" bind:clientWidth={galleryWidth} style={galleryStyle}>
    {#each columns as column}
    <div class="column">
        {#each column as url}
        <a use:link href="photo/{imageIds[url]}" replace>
            <img src={url} alt="" />
        </a>
        {/each}
    </div>
    {/each}
</div>
{/if}

<style>
    #slotHolder { display: none }
    #gallery { width: 100%; display: grid; gap: var(--gap) }
    #gallery .column { display: flex; flex-direction: column }
    #gallery .column * { width: 100%; margin-top: var(--gap) }
    #gallery .column *:nth-child(1) { margin-top: 0 }
</style>
