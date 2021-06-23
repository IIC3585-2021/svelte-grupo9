<script>
    import Gallery from './ModifiedGallery.svelte';
    import allFlags from '../services/dictPaises';
    const imprimir = (name, code) => {
        console.log(name, code);
    }
    </script>
    
    <Gallery gap="10" maxColumnWidth="200" flag={true}>
        {#each Object.entries(allFlags) as [countryName, countryCode]}
            <img id="{countryName}" src="https://flagcdn.com/w1280/{countryCode}.png" alt="">
        {/each}
    </Gallery>
    
    <style>
        :global(img) { opacity: .9; transition: all .2s }
        :global(img):hover { opacity: 1; transform: scale(1.04) }
    </style>