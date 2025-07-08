import {
    addFavorites,
    isFavorite,
    removeFavorite
} from "./favorites.js";
import {
    LS,
    LS_KEY
} from './variables.js'

export function renderCharacters(list) {
    const container = document.getElementById('results');
    container.innerHTML = '';

    list.forEach(character => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const isFav = isFavorite(character.id);
        const favBtn = isFav
            ? `<button class="btn btn-success btn-sm" data-id="${character.id}">🗑️ Quitar</button>`
            : `<button class="btn btn-danger btn-sm" data-id="${character.id}">⭐ Favorito</button>`;

        col.innerHTML = `
            <div class="card h-100">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-tittle">${character.name}</h5>
                    ${favBtn}
                </div>
            </div>
        `;
        container.appendChild(col)
    })

    container.querySelectorAll('button[data-id]').forEach(btn => {
        const id = parseInt(btn.dataset.id);

        btn.addEventListener('click', () => {
            if (isFavorite(id)) {
                removeFavorite(id);
            } else {
                const char = list.find(c => c.id === id);
                addFavorites(char);
            }
            renderCharacters(list);
        });
    });
};

export function renderFavoritesList() {
    const container = document.getElementById('results');
    const favs = LS.get(LS_KEY);
    container.innerHTML = favs.length === 0
        ? '<p class="text-danger">No hay Favoritos</p>'
        : '';

    favs.forEach(character => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        col.innerHTML = `
            <div class="card h-100">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-tittle">${character.name}</h5>
                    <button class="btn btn-success btn-sm" data-id="${character.id}">🗑️ Quitar</button>
                </div>
            </div>
        `;
        container.appendChild(col)
    });

    container.querySelectorAll('button[data-id]').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        btn.addEventListener('click', () => {
            removeFavorite(id);
            renderFavoritesList();
        })
    })
};

