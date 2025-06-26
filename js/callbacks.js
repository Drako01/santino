// Callbacks

function saludar(nombre){
    console.log("Hola, ", nombre);
}

// saludar("Santino")
// Para que saludar se convierta en un callback, tenemo que pasarla como argumento en otra funcion

function procesarUsuarioHardcodeado(callback){
    const nombre = "Santino. Y me estan ejecutando desde el Callback";
    callback(nombre);
}

// Para invocarla
// procesarUsuarioHardcodeado(saludar);

function procesarUsuarioPorParametro(callback, nombre){
    callback(nombre);
}

// procesarUsuarioPorParametro(saludar, "Santino. Desde parametro.")

function saludarDespues(){
    console.log("Hola Santino");
}

// console.log("Inicio");
// setTimeout(saludarDespues, 2000);
// console.log("Fin");

/**
 * Inicio
 * Hola Santino
 * Fin
 * ???
 */

// Realmente se ejecuta en este orden
/**
 * Inicio
 * Fin
 * Hola Santino
 */

// Promesas
const promesa = new Promise((resolve, reject) =>{

    let estado = false;

    if(estado){
        resolve("Todo salio bien!");
    } else {
        reject("Algo fallo!");
    }

})

// console.log(promesa)

promesa
    .then((mensaje) => {
        console.log("Exito ", mensaje);
    })
    .catch((error) => {
        console.error("Error ", error);
    })
    .finally(() => console.log("Fin de la Promesa"))

const promesaLenta = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa resulta en 3 segundos de retraso.!")
    }, 3000)
});

console.log("Esperando 3 seg... ")
promesaLenta
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => console.log("Promesa terminada"));
