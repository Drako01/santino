const API_URL = 'https://ghibliapi.vercel.app/films/';
const resultsEl = document.getElementById('results');
const searchInput = document.getElementById('search-input');
const btnFavorites = document.getElementById('btn-favorites');
const toggleDarkMode = document.getElementById('toggle-dark-mode');

let allMovies = [];

async function fetchAllMovies() {
    const res = await fetch(API_URL);
    const data = await res.json();
    allMovies = data     
    // console.log(allMovies)
    renderMovies(allMovies)
}

function renderMovies(movies){
    resultsEl.innerHTML = movies.map(movie => `
        <div class="col-md-4">
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                    <hr>
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">🎬 ${movie.director} | 📆 ${movie.release_date}</p>
                    <div class="mt-auto">
                        <button class="btn btn-outline-info btn-details " data-id="${movie.id}">Detalles</button>
                        <button class="btn btn-outline-danger btn-fav" data-id="${movie.id} data-title="${movie.title}" data-year="${movie.release_date}">
                            ❤️
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.btn-details').forEach(btn => 
        btn.addEventListener('click', onDetails)
    )
}

fetchAllMovies()

function onDetails(e) {
    const id = e.currentTarget.dataset.id;
    const movie = allMovies.find(m => m.id === id)
    console.log(movie)
}