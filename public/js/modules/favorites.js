import {
    LS,
    LS_KEY
} from './variables.js'

export function getFavorites(){
    return LS.get(LS_KEY);
}

export function isFavorite(id){
    return getFavorites().some(fav => fav.id === id);
}

export function addFavorites(character){
    const favs = getFavorites();
    if(isFavorite(character.id)) return;
    favs.push(character);
    LS.set(LS_KEY, favs);
}

export function removeFavorite(id){
    const favs = getFavorites().filter(fav => fav.id !== id);
    LS.set(LS_KEY, favs);
}