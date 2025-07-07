/* ====================== CONFIG ====================== */
const API_KEY = 'c7097f5a';       // 👉 poné tu clave OMDb
const PER_PAGE = 10;                // OMDb devuelve 10 por página

/* ================ STATE & HELPERS =================== */
let currentPage   = 1;
let currentSearch = '';
let favorites     = JSON.parse(localStorage.getItem('favorites')) || [];

/* ------------------- DOM refs ----------------------- */
const $input     = document.getElementById('searchInput');
const $results   = document.getElementById('results');
const $history   = document.getElementById('history');
const $btnSearch = document.getElementById('btnSearch');
const $btnDark   = document.getElementById('btnDark');
const $btnFavs   = document.getElementById('btnFavorites');
const $btnPrev   = document.getElementById('btnPrev');
const $btnNext   = document.getElementById('btnNext');

/* =================== EVENTOS ======================== */
document.addEventListener('DOMContentLoaded', () => {
  applyDarkMode();
  renderHistory();
  document.getElementById('year').textContent = new Date().getFullYear();
});

$btnSearch .addEventListener('click', () => searchMovies());
$input     .addEventListener('keydown', e => e.key === 'Enter' && searchMovies());
$btnDark   .addEventListener('click',  toggleDarkMode);
$btnFavs   .addEventListener('click',  renderFavorites);
$btnPrev   .addEventListener('click',  prevPage);
$btnNext   .addEventListener('click',  nextPage);

/* =================  BÚSQUEDA  ======================= */
function searchMovies() {
  const query = $input.value.trim();
  if (!query) return;

  currentSearch = query;
  currentPage   = 1;

  saveToHistory(query);
  fetchMovies(query, currentPage);
}

function fetchMovies(query, page) {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`)
    .then(r => r.json())
    .then(d => d.Response === 'True'
      ? renderResults(d.Search)
      : $results.innerHTML = `<p>${d.Error}</p>`)
    .catch(err => {
      console.error(err);
      Swal.fire('Error', 'No se pudo buscar películas', 'error');
    });
}

function renderResults(list) {
  $results.innerHTML = '';
  list.forEach(m => $results.appendChild(movieCard(m)));
}

function movieCard(movie) {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';
  col.innerHTML = `
    <div class="card h-100">
      <img src="${movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/300x450?text=Sin+Imagen'}"
        class="card-img-top" alt="${movie.Title}">
      <div class="card-body">
        <h5 class="card-title">${movie.Title} (${movie.Year})</h5>
        <button class="btn btn-info  btn-sm">Ver más</button>
        <button class="btn btn-warning btn-sm">❤️ Favorito</button>
      </div>
    </div>`;
  // eventos de los botones
  const [btnMore, btnFav] = col.querySelectorAll('button');
  btnMore.addEventListener('click', () => showDetails(movie.imdbID));
  btnFav .addEventListener('click', () => addToFavorites(movie.imdbID));
  return col;
}

/* ============== DETALLES & FAVORITOS ================ */
function showDetails(id) {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(r => r.json())
    .then(m => Swal.fire({
      title : `${m.Title} (${m.Year})`,
      text  : m.Plot,
      imageUrl: m.Poster,
      imageHeight: 400,
      confirmButtonText: 'Cerrar'
    }));
}

function addToFavorites(id) {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(r => r.json())
    .then(m => {
      if (favorites.some(f => f.imdbID === m.imdbID)) {
        return Swal.fire('Ya está en favoritos');
      }
      favorites.push({ imdbID: m.imdbID, Title: m.Title, Year: m.Year, Poster: m.Poster });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      Swal.fire('Guardado en favoritos ✅');
    });
}

function renderFavorites() {
  $results.innerHTML = '';
  if (!favorites.length) return $results.insertAdjacentHTML('afterbegin','<p>No hay favoritos.</p>');
  favorites.forEach(f => {
    const card = movieCard(f);
    // cambio botón a "quitar"
    const btnFav = card.querySelector('button.btn-warning');
    btnFav.className = 'btn btn-danger btn-sm';
    btnFav.textContent = '🗑️ Quitar';
    btnFav.onclick = () => { removeFavorite(f.imdbID); };
    $results.appendChild(card);
  });
}

function removeFavorite(id) {
  favorites = favorites.filter(f => f.imdbID !== id);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorites();
}

/* ================== DARK MODE ======================= */
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
function applyDarkMode() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
}

/* =================  HISTORIAL  ====================== */
function saveToHistory(query) {
  let h = JSON.parse(localStorage.getItem('history')) || [];
  if (h.includes(query)) return;
  h.unshift(query);
  h = h.slice(0, 5);
  localStorage.setItem('history', JSON.stringify(h));
  renderHistory();
}

function renderHistory() {
  const h = JSON.parse(localStorage.getItem('history')) || [];
  $history.innerHTML = '';
  h.forEach(q => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm btn-outline-secondary me-2 mb-2';
    btn.textContent = q;
    btn.onclick = () => {
      currentSearch = q;
      currentPage   = 1;
      fetchMovies(q, currentPage);
    };
    $history.appendChild(btn);
  });
}

/* ================  PÁGINAS  ========================= */
function nextPage() { currentPage++; fetchMovies(currentSearch, currentPage); }
function prevPage() { if (currentPage > 1) { currentPage--; fetchMovies(currentSearch, currentPage); } }
