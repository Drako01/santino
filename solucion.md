# **mini app de tareas (To-Do)**

✅ Arrays
✅ Objetos
✅ Clases
✅ Manejo de DOM
✅ Callbacks
✅ Promesas
🔨🤖🔧 ¡Y todo en un nivel sencillo!

---

## 📁 Estructura de Archivos

```cmd
/todo-app
├── index.html
├── style.css
└── script.js
```

---

## 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mini App de Tareas</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>📝 Lista de Tareas</h1>

  <form id="form-tarea">
    <input type="text" id="input-tarea" placeholder="Nueva tarea..." required />
    <button type="submit">Agregar</button>
  </form>

  <ul id="lista-tareas"></ul>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 `style.css`

```css
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

form {
  margin-bottom: 20px;
}

#input-tarea {
  padding: 8px;
  width: 200px;
}

button {
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tarea-completada {
  text-decoration: line-through;
  color: #777;
}
```

---

## 🧠 `script.js`

```js
// Clase para crear tareas
class Tarea {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
    this.completada = false;
  }
}

// Array donde se guardan las tareas
let tareas = [];

// Referencias al DOM
const lista = document.getElementById("lista-tareas");
const formulario = document.getElementById("form-tarea");
const input = document.getElementById("input-tarea");

// Callback para marcar como completada
function completarTarea(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    renderizarTareas(); // vuelve a mostrar la lista actualizada
  }
}

// Función para renderizar la lista en el DOM
function renderizarTareas() {
  lista.innerHTML = ""; // limpiar lista

  tareas.forEach((tarea) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarea.nombre;
    if (tarea.completada) {
      span.classList.add("tarea-completada");
    }

    const boton = document.createElement("button");
    boton.textContent = tarea.completada ? "Desmarcar" : "Completar";
    boton.onclick = () => completarTarea(tarea.id); // callback

    li.appendChild(span);
    li.appendChild(boton);
    lista.appendChild(li);
  });
}

// Función para agregar una nueva tarea
function agregarTarea(nombre) {
  const nueva = new Tarea(Date.now(), nombre);
  tareas.push(nueva);
  renderizarTareas();
}

// Simulación de carga inicial con promesa
function cargarTareasIniciales() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tareasIniciales = [
        new Tarea(1, "Estudiar callbacks"),
        new Tarea(2, "Practicar promesas"),
        new Tarea(3, "Leer sobre clases"),
      ];
      resolve(tareasIniciales);
    }, 1500);
  });
}

// Manejador del formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto !== "") {
    agregarTarea(texto);
    input.value = "";
  }
});

// Cargar tareas cuando la app arranca
cargarTareasIniciales().then((resultado) => {
  tareas = resultado;
  renderizarTareas();
});
```

---

## ✅ ¿Qué conceptos cubre esta app?

| Concepto  | Implementado                                                   |
| --------- | -------------------------------------------------------------- |
| Arrays    | ✅ Guardan tareas                                               |
| Objetos   | ✅ Cada tarea es un objeto                                      |
| Clases    | ✅ `Tarea` es una clase                                         |
| DOM       | ✅ Se usa `document.getElementById`, `createElement`, etc       |
| Callbacks | ✅ `boton.onclick = () => completarTarea(...)`                  |
| Promesas  | ✅ `cargarTareasIniciales()` retorna una promesa con setTimeout |

---
