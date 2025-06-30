class Producto {
    constructor(id, nombre, image, precio, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.image = image;
        this.precio = precio;
        this.descripcion = descripcion;
        this.seleccionado = false;
    }

    toggleSeleccion() {
        this.seleccionado = !this.seleccionado;
    }
}

let productos = [];
let carrito = [];

// Referencias al DOM
const contenedorProductos = document.getElementById('productos');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemnto = document.getElementById('total');

function manejarSeleccion(producto) {
    producto.toggleSeleccion();

    if (producto.seleccionado) {
        carrito.push(producto)
    } else {
        carrito = carrito.filter(p => p.id !== producto.id);
    }

    renderizarProductos();
    renderizarCarrito();
}

function renderizarProductos() {
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        if (producto.seleccionado) div.classList.add('seleccionado');

        div.innerHTML = `
            <img src="${producto.image}" alt="${producto.nombre}" width=90 />
            <h2>${producto.nombre}</h2>
            <p><strong>Descripcion: </strong>${producto.descripcion}</p>
            <P><strong>Precio: </strong> $<span>${producto.precio}</span>.-</P>
            <button>${producto.seleccionado ? 'Quitar del Carrito' : 'Agregar al Carrito'}</button>
        `;
        const boton = div.querySelector('button');
        boton.addEventListener('click', () => manejarSeleccion(producto));

        contenedorProductos.appendChild(div);
    });
}

function renderizarCarrito() {
    listaCarrito.innerHTML = '';

    carrito.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.nombre} - $${p.precio}.-`;
        listaCarrito.appendChild(li);
    });

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    totalElemnto.textContent = total;
}

async function cargarProductos() {
    return await fetch('productos.json')
        .then(res => {
            if(!res.ok) throw new Error('No se pudo cargar el archivo JSON');
            return res.json();
        })
        .then(data => {
            productos = data.map(p => new Producto(p.id, p.nombre, p.image, p.precio, p.descripcion));
            renderizarProductos();
        })
        .catch(err => {
            contenedorProductos.innerHTML = `<p style="color: red;">${err.message}</p>`;
        })
}

cargarProductos();