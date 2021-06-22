import {writable} from 'svelte/store'

const username = writable(localStorage.getItem("username") || "")
const gallery = writable(JSON.parse(localStorage.getItem("gallery")) || [])
const favourites = writable(JSON.parse(localStorage.getItem("favourites")) || [[], [], []])
const favouriteNames = writable(JSON.parse(localStorage.getItem("favouriteNames")) || ["Favoritos 1", "Favoritos 2", "Fav 3"])

username.subscribe(val => localStorage.setItem("username", val));
gallery.subscribe(val => {localStorage.setItem("gallery", JSON.stringify(val))});
favourites.subscribe(val => localStorage.setItem("favourites", JSON.stringify(val)));
favouriteNames.subscribe(val => localStorage.setItem("favouriteNames", JSON.stringify(val)));

export {username, gallery, favourites, favouriteNames}