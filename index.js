// let numeroA = 1;
// console.log(typeof numeroA)
// const NUMERO_B = 2;
// console.log( NUMERO_B)

// numeroA = 6;
// // NUMERO_B =3;
// console.log(typeof numeroA)


// numeroA = "Hola";
// console.log(typeof numeroA)

// const arrayLetras = [
//     'a', 
//     'b', 
//     'c',
//     's'
// ];

// arrayLetras.push('m', 'l')
// // arrayLetras.pop()
// console.log(arrayLetras)
// const cantidadDeValores = arrayLetras.length

// console.log(cantidadDeValores)

// ///  Variable inicializada | Condicion          | Incremento (a cada vuelta le suma)
// for (let i = 0; i < arrayLetras.length; i++){
//     console.log("En el Indice: " + i + " esta el valor " + arrayLetras[i]);
// }

// console.log(arrayLetras[2])

// let contador = 0;

// for(let i = 0; i <= 100; i++){
//     contador = i;
//     console.log("mensaje Nro: " + contador)
// }

// const frutas = ["banana", "manzana", "pera", "anana"];

// for(let i = 0; i < frutas.length; i++){
//     console.log("Frutas: " + frutas[i]);
// }
// console.log(frutas.length)

// frutas.push("kiwi")
// frutas.shift() // Elimina el 1er Elemento
// // for of
// for(const fruta of frutas){
//     console.log("Frutas: " + fruta);
// }
// console.log(frutas.length)

// let indiceAEliminar = 3;

// frutas.splice(indiceAEliminar, 1)

// for(const fruta of frutas){
//     console.log("Frutas: " + fruta);
// }
// console.log(frutas.length)

// indiceAEliminar = 1;

// frutas.splice(indiceAEliminar, 2)

// for(const fruta of frutas){
//     console.log("Frutas: " + fruta);
// }
// console.log(frutas.length)


// Funciones
// const frutas = ["banana", "manzana", "pera", "anana"];
// for(const fruta of frutas){
//     console.log("Frutas: " + fruta);
// }

// const libros = ["banana", "manzana", "pera", "anana"];
// for(const libro of libros){
//     console.log("Libros: " + libro);
// }

// function saludar(){
//     console.log("Hola mundo");
// }

// saludar()
// saludar()
// saludar()
// saludar()
// saludar()

// // funcion con parametros
// function saludarConParametros(nombre){
//     console.log("Hola " + nombre);
// }
// saludarConParametros("Santino")
// saludarConParametros("Alejandro")

// const frutas = ["banana", "manzana", "pera", "anana"];
// const libros = ["señor de los anillos 1", "señor de los anillos 2", "señor de los anillos 3"];

// // function recorrerArray(pendorchos, etiqueta = "Elemento") {
// //     for (const pendorcho of pendorchos) {
// //         console.log(`${etiqueta}: ${pendorcho}`);
// //     }
// // }

// // Funcion flecha o arrow function
// const recorrerArray = (pendorchos, etiqueta = "Elemento") => {
//     for (const pendorcho of pendorchos) {
//         console.log(`${etiqueta}: ${pendorcho}`);
//     }
// }
// recorrerArray(frutas, "Fruta")
// recorrerArray(libros, "Libro")

// Ejercicio:

/**
 * 💡 Ejercicio: Clasificar edades
    Tenés un array con edades de personas. Creá una función que 
    recorra el array, y según la edad, clasifique a cada persona como:

    "Menor de edad" si tiene menos de 18 años

    "Adulto" si tiene entre 18 y 59 años

    "Adulto mayor" si tiene 60 o más

    La función debe imprimir la edad y la categoría de cada persona.
 */

const edades = [12, 18, 22, 25, 85, 71, 23, 55, 29, 19, 17, 50, 'm', "sdfsdfsdfsdf"];

const clasificarEdades = (lista) => {
    for (let i = 0; i < lista.length; i++) {
        let edad = lista[i];

        // if (typeof edad !== "number" || !Number.isInteger(edad)) {
        //     console.error(`Esto no es un numero ${edad}`)
        //     continue;
        // }

        //intentar convertir a numero
        if(typeof edad === "string" && !isNaN(edad)){
            edad = Number(edad)
        }

        // verificar que sea un numero valido
        if(typeof edad !== "number" || isNaN(edad)){
            console.error(`Esto no es un numero ${edad}`)
            continue;
        }

        // Filtrar si es float
        if(typeof edad === "number" && !Number.isInteger(edad)){
            console.warn(`Edad ${edad} -> No es una Edad computable`);
            continue;
        }

        if (edad < 18) {
            console.log(`Edad ${edad} -> Menor de Edad`);
        } else if (edad >= 18 && edad < 60) {
            console.log(`Edad ${edad} -> Adulto`);
        } else {
            console.log(`Edad ${edad} -> Adulto Mayor`);
        }

    }
}

clasificarEdades(edades)

const numeros = [12.0, 18.55, 22.98, '25', '85', 71, '23', "sdfsdfsdfsdf"];
clasificarEdades(numeros)