const persona = {
    // Atributos del Objeto
    nombre: "Santino",
    edad: 20,
    vivo: true,
    email: "santino@mail.com",

    // Metodos del Objeto
    saludar: function () {
        if (this.vivo) {
            console.log(`Hola, mi nombre es: ${this.nombre} y mi Email es: ${this.email}`);
        } else {
            console.warn(`Hola, ${this.nombre} esta Morido`);
        }
    }
}

const persona1 = {
    // Atributos del Objeto
    nombre: "Alejandro",
    edad: 49,
    vivo: true,
    email: "alejandro@mail.com",

    // Metodos del Objeto
    saludar: function () {
        if (this.vivo) {
            console.log(`Hola, mi nombre es: ${this.nombre} y mi Email es: ${this.email}`);
        } else {
            console.warn(`Hola, ${this.nombre} esta Morido`);
        }
    }
}

// console.log(persona)

// persona.saludar();
// persona.saludar();
// persona1.saludar();
// persona1.saludar();

// Funcion constructora
// function Persona(nombre, edad, vivo, email) {
//     this.nombre = nombre;
//     this.edad = parseInt(edad);
//     this.vivo = vivo === "true";
//     this.email = email;
// }

// Persona.prototype.saludar = function () {
//     if (this.vivo) {
//         console.log(`Hola, mi nombre es: ${this.nombre} y mi Email es: ${this.email}`);
//     } else {
//         console.warn(`Hola, ${this.nombre} esta Morido`);
//     }
// }

// Crear una Instancia de Persona
// const persona2 = new Persona("Santino", 20, true, "santino@mail.com");
// const persona3 = new Persona("Alejandro", 49, true, "alejandro@mail.com");
// const persona25 = new Persona("Alejandro 25", "49", "true", "alejandro@mail.com");
// console.log(persona2)
// console.log(persona25)
// persona25.saludar();

// const personas = [];



// Crar una Persona usando la Clase Persona
class Persona {
    constructor(nombre, edad, vivo, email) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.vivo = vivo === "true";
        this.email = email;
    }

    saludar() {
        if (this.vivo) {
            console.log(`Hola, mi nombre es: ${this.nombre} y mi Email es: ${this.email}`);
        } else {
            console.warn(`Hola, ${this.nombre} esta Morido`);
        }
    }

    dormir() {
        console.log(`Hola, mi nombre es: ${this.nombre} y estoy Durmiendo`);
    }
}

// Aplicamos Herencia
class Argentino extends Persona{ 
    // Aplicamos Polimorfismo
    dormir() {
        console.log(`Hola, mi nombre es: ${this.nombre} y estoy Durmiendo desde Argentino`);
    }

    correr(){
        console.log(`Hola, mi nombre es: ${this.nombre} y estoy Corriendo`);
    }
}

// Funcion para recuperar personas del LS
function cargarPersonasDesdeElLS() {
    const datos = localStorage.getItem("personas");
    if (!datos) return [];
    const datosParseados = JSON.parse(datos);
    //Reconstruir instancias de Persona
    return datosParseados.map(p => new Argentino(p.nombre, p.edad, String(p.vivo), p.email));
}

// Funcion para Guardar en el LS
function guardarPersonasEnLS(personas) {
    localStorage.setItem("personas", JSON.stringify(personas));
}

// const personas = cargarPersonasDesdeElLS();

// let seguir = confirm("¿Queres agregar una nueva Persona?");

// while (seguir) {
//     const nombre = prompt("Ingrese un Nombre:");
//     const edad = prompt("Ingrese la Edad:");
//     const email = prompt("Ingrese el Email:");
//     const vivo = prompt("¿Esta Vivo? (true/false)");

//     const nuevaPersona = new Argentino(nombre, edad, vivo, email);
//     personas.push(nuevaPersona);

//     guardarPersonasEnLS(personas)

//     seguir = confirm("¿Queres seguir cargando Personas?")
// }

const personas = [
    new Persona("Santino", "20", "true", "mail@fsdfsdf.sdf"),
    new Argentino("Alejandro", "49", "true", "masdasd@asasdasd.asd")
]

console.log("Personas Creadas: ", personas);

personas.forEach(p => p.saludar());

personas.forEach(p => p.dormir());

personas.forEach(p => {
    if(p instanceof Argentino){
        p.correr()
    }
});