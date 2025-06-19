# 🛠 Gestión de Alquiler de Vehículos con JavaScript, HTML, CSS y LocalStorage

Este proyecto es una aplicación web simple que permite **registrar, alquilar, devolver y visualizar vehículos**, con **persistencia de datos en el navegador**. Todo se maneja visualmente a través de formularios, botones y tablas.

---

## 📘 Contenido teórico relevante

A continuación, explicamos los conceptos clave usados en este proyecto, con ejemplos simples para principiantes.

---

## 1️⃣ Clases en JavaScript

Las clases son plantillas para crear objetos. Nos permiten organizar mejor nuestro código y reutilizar estructuras.

### Ejemplo

```js
class Vehiculo {
  constructor(marca, modelo, precio, disponible = true) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = disponible;
  }

  getNombreCompleto() {
    return `${this.marca} ${this.modelo}`;
  }
}
````

✅ **¿Qué hace esto?**

* Crea una clase `Vehiculo` con propiedades.
* Tiene un método `getNombreCompleto()` para mostrar marca + modelo.

---

## 2️⃣ localStorage

`localStorage` permite guardar información **de forma permanente** en el navegador (aunque recargues o cierres la página).

### Guardar datos

```js
localStorage.setItem("clave", JSON.stringify(objeto));
```

### Leer datos

```js
const datos = JSON.parse(localStorage.getItem("clave"));
```

---

## 3️⃣ Funciones útiles: `map`, `forEach`, `find`, `some`

### `.map()`

Transforma cada elemento de un array.

```js
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2); // [2, 4, 6]
```

### `.forEach()`

Recorre un array y ejecuta una función.

```js
vehiculos.forEach(v => console.log(v.marca));
```

### `.find()`

Busca el primer elemento que cumpla una condición.

```js
const toyota = vehiculos.find(v => v.marca === "Toyota");
```

### `.some()`

Devuelve `true` si al menos uno cumple la condición.

```js
vehiculos.some(v => v.modelo === "Corolla"); // true o false
```

---

## 4️⃣ Manipulación del DOM

El **DOM (Document Object Model)** es la estructura HTML que podemos modificar desde JavaScript.

### Obtener elementos

```js
const form = document.getElementById("vehiculo-form");
```

### Crear elementos dinámicamente

```js
const fila = document.createElement("tr");
fila.innerHTML = `<td>Ford</td><td>Focus</td>`;
document.getElementById("tabla").appendChild(fila);
```

---

## 5️⃣ Eventos en el navegador

### `addEventListener`

Permite reaccionar a acciones del usuario como clics o envíos de formularios.

```js
form.addEventListener("submit", function (e) {
  e.preventDefault(); // evita recarga
  console.log("Formulario enviado");
});
```

---

## 6️⃣ Delegación de eventos

Permite escuchar eventos en un **contenedor padre** para manejar clicks de muchos elementos internos (como los botones de una tabla).

```js
document.getElementById("tabla").addEventListener("click", function (e) {
  if (e.target.classList.contains("alquilar")) {
    // ejecutar acción
  }
});
```

---

## 7️⃣ innerHTML

Permite modificar el contenido HTML de un elemento.

```js
document.getElementById("info").innerHTML = `
  <p>Marca: Toyota</p>
  <p>Modelo: Corolla</p>
`;
```

---

## 8️⃣ `dataset` para identificar elementos dinámicos

Podés usar `data-atributos` para identificar elementos HTML.

```html
<button data-id="2">Alquilar</button>
```

```js
const id = e.target.dataset.id;
```

---

## 9️⃣ Estructura general de una app web JS

```txt
- index.html    → interfaz visual
- style.css     → estilos
- index.js      → lógica y comportamiento
```

La app sigue estos pasos:

1. Carga los vehículos del almacenamiento.
2. Muestra los vehículos en una tabla.
3. Permite registrar nuevos vehículos.
4. Maneja clics para alquilar, devolver o eliminar vehículos.
5. Muestra información detallada de cada uno.
6. Guarda los cambios en `localStorage`.

---

## 🧠 Recomendaciones para practicar

* Intentá agregar un botón para **vaciar toda la lista**.
* Agregá una **barra de búsqueda** por marca o modelo.
* Sumá una **modal o ventana flotante** para mostrar la información en lugar de un `div`.

---

## 📌 Ejemplo de código simple

```js
const vehiculo = new Vehiculo("Ford", "Fiesta", 70);
console.log(vehiculo.getNombreCompleto()); // Ford Fiesta
```

```js
vehiculo.disponible = false;
localStorage.setItem("vehiculo", JSON.stringify(vehiculo));
```

```js
const guardado = JSON.parse(localStorage.getItem("vehiculo"));
console.log(guardado.marca); // Ford
```

---

## 🏁 Conclusión

Este proyecto es ideal para practicar:

* **POO (Programación Orientada a Objetos)**
* **localStorage**
* **Manipulación del DOM**
* **Eventos**
* **JS moderno (ES6+)**

Te permite entender cómo construir una app completa sin necesidad de frameworks externos, solo usando HTML, CSS y JavaScript puro.

---
