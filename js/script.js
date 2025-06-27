/**
    Enunciado

    Creá una mini app que permita:

    1. Agregar tareas (array de strings).
    2. Cada tarea debe estar representada como un **objeto** con `id`, `nombre`, y `completada` (boolean).
    3. Usar una **clase** llamada `Tarea` para instanciar nuevas tareas.
    4. Mostrar la lista de tareas en el **DOM** (por ejemplo, en una `<ul>`).
    5. Simular una "carga" de tareas iniciales usando una **promesa** con retraso de 1.5s.
    6. Permitir marcar una tarea como completada usando un **callback** desde un botón.

 */

// Clase para crear Tareas
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
const lista = document.getElementById('lista-tareas');
const formulario = document.getElementById('form-tarea');
const input = document.getElementById('input-tarea');

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
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = tarea.nombre;
        if (tarea.completada) {
            span.classList.add('tarea-completada');
        } else {
            span.classList.add('tarea-incompleta');
        }

        const boton = document.createElement('button');
        boton.textContent = tarea.completada ? 'Desmarcar' : 'Completar';
        boton.onclick = () => completarTarea(tarea.id); //Callback

        li.appendChild(span);
        li.appendChild(boton);
        lista.appendChild(li);
    });
}

// Funcion para agregar una nueva tarea
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
            resolve(tareasIniciales)
        }, 1500)
    })
}

// Manejador del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto !== '') {
        agregarTarea(texto);
        input.value = '';
    }
});

// Cargar tareas cuando la app arranca
cargarTareasIniciales().then((resultado) => {
    tareas = resultado;
    renderizarTareas();
});