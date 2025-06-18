# Resumen paso a paso

## Problema: Sistema de Gestión de Alquiler de Vehículos

> Descripción:

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

---

## 🧠 RESUMEN: Cómo resolvimos el ejercicio paso a paso

---

### 🧾 **Objetivo del ejercicio**

Crear un sistema que permita:

1. Registrar un vehículo (marca, modelo, precio).
2. Alquilarlo o devolverlo.
3. Mostrar información del vehículo o todos.
4. Guardar todo en `localStorage` para que los datos no se pierdan al recargar la página.

---

## 🔧 PASO A PASO

---

### 1. **Creamos una clase `Vehiculo`**

Una clase en JS es una "plantilla" para crear objetos. Le agregamos:

* Propiedades:

  * `marca`
  * `modelo`
  * `precio`
  * `disponible` (por defecto es `true`)
* Métodos:

  * `alquilar()`: cambia el estado a "alquilado"
  * `devolver()`: cambia el estado a "disponible"
  * `mostrarInfo()`: muestra la info completa
  * `getNombreCompleto()`: devuelve `"marca modelo"` (para mostrarlo bonito)

```js
class Vehiculo {
  constructor(marca, modelo, precio, disponible = true) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = disponible;
  }
  // métodos aquí...
}
```

---

### 2. **Guardamos los vehículos en `localStorage`**

* `localStorage` permite guardar datos aunque recargues la página.
* Creamos dos funciones:

```js
function cargarVehiculos() {
  // lee el array desde localStorage y lo convierte en objetos Vehiculo
}

function guardarVehiculos(lista) {
  // convierte el array en JSON y lo guarda en localStorage
}
```

---

### 3. **Creamos funciones auxiliares**

Por ejemplo:

* `buscarVehiculo(marca, modelo)` busca un vehículo por sus datos.
* Esto ayuda a evitar duplicados o buscar el que se quiere alquilar/devolver.

---

### 4. **Creamos el menú con `prompt()`**

Usamos un `while (continuar)` con un `prompt()` para que el usuario elija qué hacer:

```js
const accion = prompt("Elija una opción: 1, 2, 3, 4, 5...");
```

---

### 5. **Agregamos `switch` para las acciones**

#### ✅ Opción 1: Registrar vehículo

* Pedimos los datos con `prompt()`
* Creamos un nuevo `Vehiculo`
* Lo agregamos a la lista y lo guardamos con `guardarVehiculos`

---

#### 🚗 Opción 2: Alquilar vehículo

* Pedimos marca y modelo
* Buscamos si existe
* Si está disponible, lo alquilamos

---

#### ↩ Opción 3: Devolver vehículo

* Igual que alquilar, pero se marca como disponible

---

#### 📄 Opción 4: Mostrar información

* Mostramos todos los vehículos o uno específico según lo que el usuario elija

---

#### ❌ Opción 5: Salir

* Cortamos el bucle (`continuar = false`)
* Mostramos mensaje de salida

---

## 💡 Conceptos importantes que aplicamos

| Concepto         | Descripción breve                                               |
| ---------------- | --------------------------------------------------------------- |
| `class`          | Crea objetos con métodos y propiedades                          |
| `prompt()`       | Pide datos al usuario                                           |
| `localStorage`   | Guarda datos como texto permanente en el navegador              |
| `JSON.stringify` | Convierte objetos a texto JSON (para guardar en localStorage)   |
| `JSON.parse`     | Convierte texto JSON a objetos (para usar lo guardado)          |
| `switch/case`    | Alternativa a muchos `if`, para controlar el flujo del programa |
| `array.push()`   | Agrega elementos a un array                                     |

---

## ✅ Resultado final

✅ El usuario puede usar el sistema desde la consola del navegador
✅ Todos los vehículos quedan guardados en `localStorage`
✅ Es fácil de usar y seguir

---

## 🛠 Consejos para probarlo

1. Abrí un archivo `.html` con el código.
2. Entrá a la consola del navegador (F12).
3. Interactuá con las ventanas emergentes (`prompt`) y mirá la consola (`console.log()`).
4. Cerrá la pestaña, volvé a abrirla: ¡los vehículos siguen ahí gracias a `localStorage`!
