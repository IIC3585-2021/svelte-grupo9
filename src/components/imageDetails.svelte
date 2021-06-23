<script>
    import { Router, Route } from "svelte-navigator";
    import Favourite from './Favourite.svelte';
    import { gallery } from '../store'
    import { get } from 'svelte/store'

    export let photoid;
    const data = get(gallery)[photoid]
    
    const img = data["urls"]["regular"]
    const img_user = data['user']['profile_image']['medium']
    const first_name = data['user']['first_name']
    const last_name = data['user']['last_name']
    const instagram_username = data['user']['instagram_username']
    const alt_description = data['alt_description']
    const unsplash_link = data['user']['links']['html']
    const unsplash_name = data['user']['username']
    const date = data['promoted_at'].split("T")[0]
</script>

<Router>
    <Route path={photoid} let:params>
        <div class="card">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src={img} alt="Placeholder">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src={img_user} alt="Placeholder">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">{first_name} {last_name}</p>
                <p class="subtitle is-6">@{instagram_username}</p>
                </div>
            </div>
            <div class="content">
                {#if alt_description}
                    {alt_description} 
                {/if}
                <a href={unsplash_link}>@{unsplash_name}</a>.
                <br>
                <time>{date}</time>
            </div>
            <div class="content">
                <Favourite photoId={parseInt(photoid)}></Favourite>
            </div>
        </div>

        </div>
    </Route>
</Router>
