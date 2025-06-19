/**
 * Problema: Sistema de Gestión de Alquiler de Vehículos
    Descripción:

    Imagina que estás desarrollando un simulador para gestionar el alquiler de vehículos en una agencia de alquiler 
    de autos. En este simulador, cada vehículo tiene un nombre (marca y modelo), un precio de alquiler por día, y un 
    estado de disponibilidad (disponible o alquilado). Debes permitir que el usuario realice las siguientes acciones:

    Registrar un nuevo vehículo: Agregar un nuevo vehículo al sistema, especificando su nombre, precio de alquiler por 
    día, y estado inicial como disponible.
    Alquilar un vehículo: Cambiar el estado de un vehículo a "alquilado" si está disponible, y mostrar un mensaje de 
    confirmación.
    Devolver un vehículo: Cambiar el estado de un vehículo a "disponible" si está alquilado, y mostrar un mensaje de 
    confirmación.
    Mostrar la información del vehículo: Mostrar los detalles del vehículo (nombre, precio de alquiler por día, y 
    estado actual).
    Salir del programa: Finalizar el programa.
    El programa debe seguir funcionando hasta que el usuario elija salir.
 */

class Vehiculo {
    constructor(marca, modelo, precio, disponible = true) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.disponible = disponible;
    }

    getNombreCompleto() {
        return `${this.marca} ${this.modelo}`; // Ejemplo Ford Fiesta 2020
    }

    mostrarInfo() {
        // let estado;
        // if(this.disponible){
        //     estado = 'Disponible';
        // } else {
        //     estado = 'Alquilado';
        // }

        // Uso de ternario
        const estado = this.disponible ? 'Disponible' : 'Alquilado';
        console.log(`Vehiculo: ${this.getNombreCompleto()}, Precio por día: $${this.precio}.-, Estado: ${estado}`);
    }
}
const STORAGE_KEY = "vehiculos_en_alquiler";

function cargarVehiculos() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    // Recorremos todo el Array y lo mapeamos para que por cada Objeto nos arme un Vehiculo
    return JSON.parse(data).map(
        (v) => new Vehiculo(v.marca, v.modelo, v.precio, v.disponible)
    );
};

function guardarVehiculos(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

// La variable vehiculos contiene todos los Vehiculos
let vehiculos = cargarVehiculos(); // Aca se estan guardando TODOS los Vehiculos que existen, y esto se actualiza constantemente.


function buscarVehiculo(marca, modelo) {
    return vehiculos.find(
        (v) =>
            v.marca.toLowerCase() === marca.toLowerCase() &&
            v.modelo.toLowerCase() === modelo.toLowerCase()
    )
}

/** Funcion de Renderizado*******/

function pintarTabla() {
    const tBody = document.getElementById('lista-vehiculos')
    tBody.innerHTML = ''; // limpiar la tabla

    vehiculos.forEach((v, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${v.marca}</td>
            <td>${v.modelo}</td>
            <td>${v.precio}</td>
            <td>${v.disponible ? 'Disponible' : 'Alquilado'}</td>
            <td>
                ${v.disponible
                ? `<button class="alquilar" data-idx="${idx}">Alquilar</button>`
                : `<button class="devolver" data-idx="${idx}">Devolver</button>`
            }
                <button class="eliminar" data-idx="${idx}">Eliminar</button>
                <button class="ver" data-idx="${idx}">👁️</button>
            </td>
        `;
        tBody.appendChild(tr);
    })

}

/** EVENTO DE ALTA */
document
    .getElementById('vehiculo-form')
    .addEventListener('submit', e => {
        e.preventDefault()

        const marca = document.getElementById('marca').value.trim();
        const modelo = document.getElementById('modelo').value.trim();
        const precio = parseFloat(document.getElementById('precio').value);
        const errores = document.getElementById('errores');

        if (!marca || !modelo || isNaN(precio)) return alert("Datos invalidos");

        if (buscarVehiculo(marca, modelo)) {
            errores.innerHTML = `
            <pre class="errores test-center">Ya existe un vehiculo con la Marca ${marca} y el Modelo ${modelo}</pre>`
            return
        }

        vehiculos.push(new Vehiculo(marca, modelo, precio));
        guardarVehiculos(vehiculos);
        pintarTabla();
        e.target.reset();
    })

/**ACCIONES DE ALQUILAR O DEVOLVER O ELIMINAR*/
document
    .getElementById('lista-vehiculos')
    .addEventListener('click', e => {
        const idx = e.target.dataset.idx;

        if (idx === undefined) return;

        if (e.target.classList.contains('alquilar')) {
            vehiculos[idx].disponible = false;
        } else if (e.target.classList.contains('devolver')) {
            vehiculos[idx].disponible = true;
        } else if (e.target.classList.contains('eliminar')) {
            if (!confirm("¡Eliminar vehiculo?")) return;
            vehiculos.splice(idx, 1);
        } else if(e.target.classList.contains('ver')){
            const v = vehiculos[idx];
            const div = document.getElementById('contenido-info');
            const estado = v.disponible ? 'Disponible' : 'Alquilado';
            div.innerHTML = `
            <pre>
                <ul>
                    <li><strong>Marca:</strong> ${v.marca}</li>
                    <li><strong>Modelo:</strong> ${v.modelo}</li>
                    <li><strong>Precio por día:</strong> $${v.precio}.-</li>
                    <li><strong>Modelo:</strong> ${estado}</li>
                </ul>
            </pre>
            `;
        }
        guardarVehiculos(vehiculos);
        pintarTabla();
    })


// Ventana escucha el evento de que el Documento se termine de cargar y ejecuta pintarTabla
window.addEventListener('DOMContentLoaded', pintarTabla);