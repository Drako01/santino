# ✅ SOLUCIÓN COMPLETA – Mini Panel de Compras

---

## 📁 1. `productos.json` (simula la base de datos local)

```json
[
  {
    "id": 1,
    "nombre": "Teclado Mecánico",
    "precio": 75,
    "descripcion": "Teclado retroiluminado ideal para gamers"
  },
  {
    "id": 2,
    "nombre": "Mouse Inalámbrico",
    "precio": 25,
    "descripcion": "Mouse ergonómico con batería recargable"
  },
  {
    "id": 3,
    "nombre": "Monitor 24''",
    "precio": 180,
    "descripcion": "Monitor LED Full HD para oficina o juegos"
  },
  {
    "id": 4,
    "nombre": "Auriculares Bluetooth",
    "precio": 45,
    "descripcion": "Auriculares con cancelación de ruido"
  }
]
```

---

## 📄 2. `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mini Panel de Compras</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>🛒 Tienda Online</h1>
  <div class="contenedor-principal">
    <div id="productos" class="seccion-productos"></div>
    <div id="carrito" class="seccion-carrito">
      <h2>Carrito</h2>
      <ul id="lista-carrito"></ul>
      <p><strong>Total:</strong> $<span id="total">0</span></p>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

---

## 🎨 3. `style.css`

```css
body {
  font-family: sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.contenedor-principal {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 20px;
}

.seccion-productos, .seccion-carrito {
  flex: 1;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.producto {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.producto.seleccionado {
  background-color: #e0ffe0;
}

button {
  margin-top: 5px;
  padding: 5px 10px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #006e9e;
}

#carrito ul {
  list-style: none;
  padding: 0;
}
```

---

## 🧠 4. `app.js`

```javascript
// Clase Producto con método
class Producto {
  constructor(id, nombre, precio, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.seleccionado = false;
  }

  toggleSeleccion() {
    this.seleccionado = !this.seleccionado;
  }
}

// Arrays globales
let productos = [];
let carrito = [];

// Referencias al DOM
const contenedorProductos = document.getElementById('productos');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');

// Callback para agregar/quitar productos
function manejarSeleccion(producto) {
  producto.toggleSeleccion();

  if (producto.seleccionado) {
    carrito.push(producto);
  } else {
    carrito = carrito.filter(p => p.id !== producto.id);
  }

  renderizarProductos();
  renderizarCarrito();
}

// Renderizado de productos
function renderizarProductos() {
  contenedorProductos.innerHTML = '';

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto');
    if (producto.seleccionado) div.classList.add('seleccionado');

    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <button>${producto.seleccionado ? 'Quitar del carrito' : 'Agregar al carrito'}</button>
    `;

    const boton = div.querySelector('button');
    boton.addEventListener('click', () => manejarSeleccion(producto));

    contenedorProductos.appendChild(div);
  });
}

// Renderizado del carrito
function renderizarCarrito() {
  listaCarrito.innerHTML = '';

  carrito.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} - $${p.precio}`;
    listaCarrito.appendChild(li);
  });

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  totalElemento.textContent = total;
}

// Cargar productos desde JSON (con Promesa y fetch)
function cargarProductos() {
  return fetch('productos.json')
    .then(res => {
      if (!res.ok) throw new Error('No se pudo cargar el archivo JSON');
      return res.json();
    })
    .then(data => {
      productos = data.map(p => new Producto(p.id, p.nombre, p.precio, p.descripcion));
      renderizarProductos();
    })
    .catch(err => {
      contenedorProductos.innerHTML = `<p style="color: red">${err.message}</p>`;
    });
}

// Inicialización
cargarProductos();
```

---

## ✅ Conceptos cubiertos

* ✔️ Arrays (`productos`, `carrito`)
* ✔️ Objetos (estructura de cada producto)
* ✔️ Clase `Producto`
* ✔️ Métodos (`toggleSeleccion`)
* ✔️ Funciones y **callbacks** (`manejarSeleccion`)
* ✔️ Promesas (`fetch` con `.then` / `.catch`)
* ✔️ JSON local (`productos.json`)
* ✔️ Manipulación del **DOM**
* ✔️ Estilos CSS aplicados al renderizado

---

Este proyecto puede expandirse fácil con filtros, ordenamiento, almacenamiento en localStorage o incluso una interfaz de pago simulada 🔥

