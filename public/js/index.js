// ------------- CLASES ----------
class Tarea {
    constructor(titulo, descripcion, prioridad) {
        this.id = Date.now();
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.completada = false;
    }
}

class Producto {
    constructor({ id, title, price, image }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }
}

// ------------------------

const LS = {
    guardar: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    obtener: (key, fallback = []) => JSON.parse(localStorage.getItem(key)) || fallback
}

// ---------ESTADOS ------------
let tareas = LS.obtener('tareas');
let productos = [];
let carrito = LS.obtener('carrito');

// ------------ TAREAS ------------

const listaTareas = document.getElementById('listaTareas');

const renderTareas = () => {
    listaTareas.innerHTML = '';
    tareas.forEach(t => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        if (t.completada) li.classList.add('tarea-completada');
        li.dataset.id = t.id;

        const btnClase = t.completada ? 'btn-info' : 'btn-success text-white';
        const btnTexto = t.completada ? '✔' : '✔';

        li.innerHTML = `
            <span>${t.titulo} - ${t.prioridad}</span>
            <div>
                <button class="btn btn-sm ${btnClase} mc-2 completar">${btnTexto}</button>
                <button class="btn btn-sm btn-danger eliminar>🗑️</button> 
            </div>
        `;
        listaTareas.appendChild(li);
    });
}

// Agregar tarea
const formTarea = document.getElementById('formTarea');
formTarea.addEventListener('submit', e => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const prioridad = document.getElementById('prioridad').value;

    if (!titulo) {
        Swal.fire("Error", "El titulo no puede estar vacio", "warning");
        return;
    }

    const nueva = new Tarea(titulo, descripcion, prioridad);
    tareas.push(nueva);
    LS.guardar('tareas', tareas);
    renderTareas();
    Swal.fire({
        icon: 'success',
        title: 'Tarea Agregada',
        timer: 1200,
        showConfirmButton: false
    });
    formTarea.reset();
});

listaTareas.addEventListener('click', e => {
    const li = e.target.closest('li');
    if (!li) return;
    const id = parseInt(li.dataset.id);
    if (e.target.classList.contains('completar')) {
        const tarea = tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = !tarea.completada;
            LS.guardar('tareas', tareas);
            renderTareas();
        }
    }
    if (e.target.classList.contains('eliminar')) {
        const tarea = tareas.find(t => t.id === id);
        Swal.fire({
            title: '¿Eliminar Tarea?',
            text: tarea ? tarea.titulo : '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'Cancela'
        }).then(result => {
            if (result.IsConfirmed) {
                const tarea = tareas.filter(t => t.id === id);
                LS.guardar('tareas', tareas);
                renderTareas();
                Swal.fire('Eliminada', 'La tarea fue eliminada', 'success');
            }
        })
    }
});


// ------- PRODUCTOS --------
const contenedorProductos = document.getElementById('productos');

const renderizarProductos = () => {
    contenedorProductos.innerHTML = '';
    productos.forEach(prod => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${prod.image}" alt="${prod.title}" class="card-img-top p-3" style=" height: 200px; object-fit: contain;">
                <div class="card-body d-flex flex-column">
                    <p class="card-title">${prod.title}</p>
                    <p class="card-text fw-bold mb-4">${prod.price}</p>
                    <button class="btn btn-primary mt-auto" data-id="${prod.id}">Agregar</button>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(col);
    })
};

const cargarProductos = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        productos = data.map(p => new Producto(p));
        renderizarProductos();
    } catch (err) {
        console.error(err);
        Swal.fire('Error', 'No se pudieron obtener los productos', 'error');
    }
}

// Agregar al carrito
contenedorProductos.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = parseInt(e.target.dataset.id);
        const prod = productos.find(p => p.id === id);
        if (!prod) return;
        const existente = carrito.find(i => i.id === id);
        if (existente) {
            existente.cantidad += 1;
        } else {
            carrito.push({ ...prod, cantidad: 1 })
        }
        LS.guardar('carrito', carrito);
        renderCarrito();
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: prod.title,
            timer: 2000,
            showConfirmButton: false
        });
    }
})

// ------CARRITO --------
const listaCarrito = document.getElementById('carrito');
const vaciarBtn = document.getElementById('vaciarCarrito');

const renderCarrito = () => {
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${item.title} x ${item.cantidad}
            <span class="badge bg-primary rounded-pill">$${(item.price * item.cantidad).toFixed(2)}</span>
        `;
        listaCarrito.appendChild(li);
    })
}

vaciarBtn.addEventListener('click', () => {
    if (!carrito.length) return;
    Swal.fire({
        title: '¿Vaciar carrito?',
        text: 'Se eliminarán todos los productos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'No'
    }).then(result => {
        if (result.isConfirmed) {
            carrito = [];
            LS.guardar('carrito', carrito);
            renderCarrito();
            Swal.fire('Carrito vaciado', '', 'success');
        }
    });
});

// ----- HORA SERVIDOR ------
const actualizarHora = async () => {
    try {
        const res = await fetch('/hora');
        const { hora } = await res.json();
        document.getElementById('horaServidor').textContent = hora;
    } catch (err) {
        console.error('Error, no se puede obtener la hora del Servidor ', err)
    }
}


// ------ INIT -----------
renderTareas();
actualizarHora();
cargarProductos();
renderCarrito();
setInterval(actualizarHora, 1000);

const year = new Date().getFullYear();
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.innerHTML = year;
}