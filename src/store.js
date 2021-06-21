import {writable} from 'svelte/store'

const username = writable(localStorage.getItem("username") || "")
const gallery = writable(JSON.parse(localStorage.getItem("gallery")) || [])
const favourites = writable(JSON.parse(localStorage.getItem("favourites")) || [])

username.subscribe(val => localStorage.setItem("username", val));
gallery.subscribe(val => {localStorage.setItem("gallery", JSON.stringify(val))});
favourites.subscribe(val => localStorage.setItem("favourites", JSON.stringify(val)));

export {username, gallery, favourites}