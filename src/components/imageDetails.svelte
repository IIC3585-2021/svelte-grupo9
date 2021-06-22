<script>
    import { Router, Route } from "svelte-navigator";
    import Favourite from './Favourite.svelte';
    import { gallery } from '../store'
    import { get } from 'svelte/store'

    export let photoid;
    const data = get(gallery)[photoid]
    console.log('phid', data)
</script>

<Router>
    <Route path={photoid} let:params>
        <div class="card">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src="{data["urls"]["regular"]}" alt="Placeholder">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
                </div>
            </div>
        
            <Favourite photoId={parseInt(photoid)}></Favourite>
            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
            </div>
        </div>
    </Route>
</Router>