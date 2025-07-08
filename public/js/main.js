import { getCharacters } from './modules/api.js';
import {
    renderCharacters,
    renderFavoritesList
} from './modules/ui.js';


const btnSearch = document.getElementById('btnSearch');
const btnFavorites = document.getElementById('btnFavorites');

btnSearch.addEventListener('click', async () => {
    const characters = await getCharacters();
    renderCharacters(characters);
})

btnFavorites.addEventListener('click', renderFavoritesList);

document.addEventListener('DOMContentLoaded', async () => {
    const characters = await getCharacters();
    renderCharacters(characters);
})
