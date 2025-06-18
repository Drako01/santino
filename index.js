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

    alquilar() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`${this.getNombreCompleto()} ha sido Alquilado.!`);
        } else {
            console.warn(`${this.getNombreCompleto()} ya esta Alquilado.!`);
        }
    }

    devolver() {
        if (!this.disponible) {
            this.disponible = true;
            console.log(`${this.getNombreCompleto()} ha sido Devuelto y esta Disponible.!`);
        } else {
            console.warn(`${this.getNombreCompleto()} ya esta Disponible.!`);
        }
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

function cargarVehiculosDelLS() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    // Recorremos todo el Array y lo mapeamos para que por cada Objeto nos arme un Vehiculo
    return JSON.parse(data).map(
        (v) => new Vehiculo(v.marca, v.modelo, v.precio, v.disponible)
    );
};

function guardarVehiculosAlLS(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

// La variable vehiculos contiene todos los Vehiculos
let vehiculos = cargarVehiculosDelLS(); // Aca se estan guardando TODOS los Vehiculos que existen, y esto se actualiza constantemente.
let continuar = true;
console.log(vehiculos)

function buscarVehiculo(marca, modelo) {
    return vehiculos.find(
        (v) =>
            v.marca.toLowerCase() === marca.toLowerCase() &&
            v.modelo.toLowerCase() === modelo.toLowerCase()
    )
}

while (continuar) {
    const accion = prompt(
        'Elija una Opcion:\n' +
        '1) Registrar un Vehiculo\n' +
        '2) Alquilar un Vehiculo\n' +
        '3) Devolver un Vehiculo\n' +
        '4) Mostrar Información\n' +
        '5) Salir'
    );

    switch (accion) {
        case '1': {
            const marca = prompt("Ingrese la marca del Vahiculo");
            const modelo = prompt("Ingrese el modelo del Vahiculo");
            const precio = parseFloat(prompt("Ingrese el precio de Alquiler por dia"));

            if (!marca || !modelo || isNaN(precio)) {
                console.error("Datos invalidos, Intente nuevamente...");
                break;
            }

            if (buscarVehiculo(marca, modelo)) {
                console.warn(`Ya existe el Vehiculo ${marca} ${modelo}`);
                break;
            }

            const nuevoVehiculo = new Vehiculo(marca, modelo, precio);
            vehiculos.push(nuevoVehiculo);
            guardarVehiculosAlLS(vehiculos);
            console.log(`Vehiculo ${marca} ${modelo} registrado exitosamente`);
            break;
        }

        case '2': {
            if (vehiculos.length === 0) {
                console.warn("No hay vehiculos para Alquiler");
                break;
            }

            const marca = prompt("Ingrese la marca del Vahiculo");
            const modelo = prompt("Ingrese el modelo");
            const v = buscarVehiculo(marca, modelo);

            if (v) {
                v.alquilar();
                guardarVehiculosAlLS(vehiculos);
            } else {
                console.warn("El Vehiculo no fue Encontrado");
            }

            break;
        }

        case '3': {
            if (vehiculos.length === 0) {
                console.warn("No hay vehiculos Registrados");
                break;
            }

            const marca = prompt("Ingrese la marca del Vahiculo");
            const modelo = prompt("Ingrese el modelo");
            const v = buscarVehiculo(marca, modelo);

            if (v) {
                v.devolver();
                guardarVehiculosAlLS(vehiculos);
            } else {
                console.warn("El Vehiculo no fue Encontrado");
            }

            break;
        }

        case '4': {
            if (vehiculos.length === 0) {
                console.warn("No hay vehiculos Registrados");
                break;
            }

            const opcion = prompt(
                'a) Ver un Vehiculo en Particular\n' +
                'b) Ver todos los vahiculos'
            ).toLowerCase();

            if (opcion === 'a') {
                const marca = prompt("Ingrese la marca del Vahiculo");
                const modelo = prompt("Ingrese el modelo");
                const v = buscarVehiculo(marca, modelo);

                v ? v.mostrarInfo() : console.warn("El vehiculo no existe");

            } else if (opcion === 'b') {
                vehiculos.forEach((v) => v.mostrarInfo())
            } else {
                console.error("opcion invalida");
            }
            break;
        }

        case '5': {
            continuar = false;
            console.log("Saliendo del Programa....")
            break;
        }

        default:
            console.error("Opcion invalida, intente de nuevo...")

    }

}