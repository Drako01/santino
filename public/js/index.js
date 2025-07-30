const API_URL = 'https://ghibliapi.vercel.app/films/';
const resultsEl = document.getElementById('results');
const searchInput = document.getElementById('search-input');
const btnFavorites = document.getElementById('btn-favorites');
const toggleDarkMode = document.getElementById('toggle-dark-mode');
let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
let showingFavorites = false;

let allMovies = [];

function switchFavorites() {
    showingFavorites = !showingFavorites;

    if (showingFavorites) {
        const favMovies = allMovies.filter(m => favs.some(f => f.id === m.id));
        resultsEl.innerHTML = favMovies.length
            ? renderMovies(favMovies)
            : '<p>No hay favoritos aún.</p>';
        btnFavorites.textContent = '🎬 Ver Todas';
        btnFavorites.classList.remove('btn-outline-danger');
        btnFavorites.classList.add('btn-outline-success');
    } else {
        renderMovies(allMovies);
        btnFavorites.textContent = '⭐ Favoritos';
        btnFavorites.classList.remove('btn-outline-success');
        btnFavorites.classList.add('btn-outline-danger');
    }
    applyDarkMode();
}

async function fetchAllMovies() {
    const res = await fetch(API_URL);
    const data = await res.json();
    allMovies = data
    // console.log(allMovies)
    renderMovies(allMovies)
}

function renderMovies(movies) {
    const html = movies.map(movie => {
        const isFav = favs.some(f => f.id === movie.id);
        return `
        <div class="col-md-4">
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                    <hr>
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">🎬 ${movie.director} | 📆 ${movie.release_date}</p>
                    <div class="mt-auto">
                        <button class="btn btn-outline-info btn-details " data-id="${movie.id}">Detalles</button>
                        <button 
                            class="btn btn-outline-danger btn-fav" 
                            data-id="${movie.id}" 
                            data-title="${movie.title}" 
                            data-year="${movie.release_date}">
                            ${isFav ? '❌' : '❤️'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');

    resultsEl.innerHTML = html;

    document.querySelectorAll('.btn-details').forEach(btn =>
        btn.addEventListener('click', onDetails)
    )

    document.querySelectorAll('.btn-fav').forEach(btn =>
        btn.addEventListener('click', onFavorite)
    )

    applyDarkMode();
    return html;
}

function onDetails(e) {
    const id = e.currentTarget.dataset.id;
    const movie = allMovies.find(m => m.id === id)
    // console.log(movie)
    if (movie) {
        Swal.fire({
            title: `${movie.title} (${movie.release_date})`,
            html: `
                <img src="${movie.image}" class="img-card-modal" alt="${movie.title}" >
                <hr>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Productor:</strong> ${movie.producer}</p>
                <p><strong>Duración:</strong> ${movie.running_time} min</p>
                <p>${movie.description}</p>
            `,
            width: '600px'
        })
    }
}

function onFavorite(e) {
    const btn = e.currentTarget;
    const id = btn.dataset.id;
    const title = btn.dataset.title;
    const year = btn.dataset.year;

    let isFav = favs.some(f => f.id === id);

    if (!isFav) {
        favs.push({ id, title, year });
        localStorage.setItem('favorites', JSON.stringify(favs));
        Swal.fire({
            icon: 'success',
            title: 'Pelicula añadida a favoritos',
            timer: 1500,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
        });
    } else {
        favs = favs.filter(f => f.id !== id)
        localStorage.setItem('favorites', JSON.stringify(favs));
        Swal.fire({
            icon: 'info',
            title: `La Pelicula ${title} `,
            text: `Fue quitada de Favoritos.!!`,
            timer: 2000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
        })
    }

    if (showingFavorites) {
        const favMovies = allMovies.filter(m => favs.some(f => f.id === m.id));
        renderMovies(favMovies)
    } else {
        renderMovies(allMovies)
    }
}

function isDarkMode() {
    return localStorage.getItem('darkmode') === 'true';
}

function applyDarkMode() {
    document.body.classList.toggle('dark-mode', isDarkMode());
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('dark-mode', isDarkMode());
    })
    toggleDarkMode.textContent = isDarkMode() ? 'Modo Claro' : 'Modo Oscuro';
}

toggleDarkMode.addEventListener('click', () => {
    localStorage.setItem('darkmode', String(!isDarkMode()));
    applyDarkMode();
})

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query)
    );
    renderMovies(filtered);
});




window.addEventListener('DOMContentLoaded', () => {
    btnFavorites.addEventListener('click', () => {
        switchFavorites();
    });
    fetchAllMovies();
    applyDarkMode();
})