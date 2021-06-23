<script>
    import Gallery from './ModifiedGallery.svelte';
    import { Loading } from "carbon-components-svelte";
    import allFlags from '../services/dictPaises';
    
     const getPhotos = (country) => {
        return getPhotoById({featured: true}, country)
     }
    </script>
    
    <Gallery gap="10" maxColumnWidth="200">
    

        {#each Object.entries(allFlags) as [countryName, countryCode]}
            <img id="{countryCode}" url="https://flagcdn.com/w80/{countryCode}.png" alt="">
        {/each}
        
    
    </Gallery>
    
    
    <style>
        :global(img) { opacity: .9; transition: all .2s }
        :global(img):hover { opacity: 1; transform: scale(1.04) }
    </style>