# Clase 04

> 🛠 **Sistema de Gestión de Alquiler de Vehículos con HTML + CSS + JS + LocalStorage**

---

## 🔰 OBJETIVO GENERAL

Crear una **aplicación web sencilla** que permita:

* Registrar vehículos (marca, modelo, precio).
* Alquilarlos o devolverlos.
* Ver la lista en una tabla.
* Guardar y mantener los datos aunque se recargue la página (con `localStorage`).
* Mostrar la información completa de un vehículo al hacer clic en un botón de "ver".

---

## 📦 ESTRUCTURA DEL PROYECTO

Creamos 3 archivos:

```bash
index.html   → Estructura visual (formulario, tabla, divs)
style.css    → Estilo visual (colores, tamaños, márgenes)
app.js       → Lógica (crear, guardar, alquilar, devolver, mostrar info)
```

---

## ✅ PASO A PASO Y EXPLICACIÓN

---

### 1. **Creamos la clase `Vehiculo` en `app.js`**

```js
class Vehiculo {
  constructor(marca, modelo, precio, disponible = true) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = disponible; // siempre comienza disponible
  }

  getNombreCompleto() {
    return `${this.marca} ${this.modelo}`;
  }
}
```

📌 **¿Por qué?**

Creamos una clase para representar a cada vehículo. Esta clase nos permite trabajar con objetos ordenados que tienen marca, modelo, precio y estado de disponibilidad.

---

### 2. **Guardamos los vehículos en el navegador con `localStorage`**

```js
const STORAGE_KEY = "vehiculos_en_alquiler";

function cargarVehiculos() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data
    ? JSON.parse(data).map(v => new Vehiculo(v.marca, v.modelo, v.precio, v.disponible))
    : [];
}

function guardarVehiculos(lista) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}
```

📌 **¿Por qué?**

Usamos `localStorage` para guardar los datos de forma permanente en el navegador. Si cerrás la pestaña y volvés, los datos siguen ahí.

* `guardarVehiculos()` convierte el array a JSON y lo guarda.
* `cargarVehiculos()` lo recupera y convierte cada objeto plano en una instancia de `Vehiculo`.

---

### 3. **Creamos el HTML con un formulario y una tabla (`index.html`)**

```html
<form id="vehiculo-form">
  <input type="text" id="marca" placeholder="Marca" required />
  <input type="text" id="modelo" placeholder="Modelo" required />
  <input type="number" id="precio" placeholder="Precio por día" required />
  <button type="submit">Registrar vehículo</button>
</form>
```

```html
<table>
  <thead> ... </thead>
  <tbody id="lista-vehiculos"></tbody>
</table>

<div id="informacion">
  <strong>Información del vehículo:</strong>
  <div id="contenido-info">Seleccioná un vehículo para ver más detalles</div>
</div>
```

📌 **¿Por qué?**

* El formulario sirve para registrar nuevos vehículos.
* La tabla muestra los vehículos ya cargados.
* El `div#informacion` se usa para mostrar información detallada cuando apretamos el botón 👁️.

---

### 4. **Registramos vehículos desde el formulario**

```js
document
  .getElementById("vehiculo-form")
  .addEventListener("submit", e => {
    e.preventDefault(); // evita recargar la página
    const marca = ...
    const modelo = ...
    const precio = ...

    if (!marca || !modelo || isNaN(precio)) return alert("Datos inválidos");

    if (existeVehiculo(marca, modelo)) {
      return alert(`Ya existe el vehículo`);
    }

    vehiculos.push(new Vehiculo(marca, modelo, precio));
    guardarVehiculos(vehiculos);
    pintarTabla();
    e.target.reset();
  });
```

📌 **¿Por qué?**

Escuchamos el evento de `submit` del formulario y creamos un nuevo objeto `Vehiculo` solo si los datos son válidos y no está duplicado. Luego lo guardamos y lo mostramos.

---

### 5. **Mostramos todos los vehículos en una tabla (`pintarTabla`)**

```js
function pintarTabla() {
  const tbody = document.getElementById("lista-vehiculos");
  tbody.innerHTML = "";

  vehiculos.forEach((v, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${v.marca}</td>
      <td>${v.modelo}</td>
      <td>$${v.precio}</td>
      <td>${v.disponible ? "Disponible" : "Alquilado"}</td>
      <td>
        <button class="ver" data-idx="${idx}">👁️</button>
        ${v.disponible
          ? `<button class="alquilar" data-idx="${idx}">Alquilar</button>`
          : `<button class="devolver" data-idx="${idx}">Devolver</button>`}
        <button class="eliminar" data-idx="${idx}">🗑</button>
      </td>`;
    tbody.appendChild(tr);
  });
}
```

📌 **¿Por qué?**

Esta función genera el HTML de la tabla dinámicamente según el array `vehiculos`. Le asignamos a cada botón un `data-idx` para saber a qué vehículo corresponde.

---

### 6. **Acciones sobre los botones: alquilar, devolver, eliminar, ver**

```js
document
  .getElementById("lista-vehiculos")
  .addEventListener("click", e => {
    const idx = e.target.dataset.idx;
    if (idx === undefined) return;

    if (e.target.classList.contains("ver")) {
      const v = vehiculos[idx];
      document.getElementById("contenido-info").innerHTML = `
        <ul>
          <li><strong>Marca:</strong> ${v.marca}</li>
          <li><strong>Modelo:</strong> ${v.modelo}</li>
          <li><strong>Precio:</strong> $${v.precio}</li>
          <li><strong>Estado:</strong> ${v.disponible ? "Disponible" : "Alquilado"}</li>
        </ul>
      `;
    }

    else if (e.target.classList.contains("alquilar")) {
      vehiculos[idx].disponible = false;
    }

    else if (e.target.classList.contains("devolver")) {
      vehiculos[idx].disponible = true;
    }

    else if (e.target.classList.contains("eliminar")) {
      if (!confirm("¿Eliminar este vehículo?")) return;
      vehiculos.splice(idx, 1);
    }

    guardarVehiculos(vehiculos);
    pintarTabla();
  });
```

📌 **¿Por qué?**

Usamos delegación de eventos para capturar los clicks en toda la tabla. Según el botón que se haya tocado:

* `"ver"` → muestra la info en el `div#informacion`
* `"alquilar"` → cambia a "Alquilado"
* `"devolver"` → cambia a "Disponible"
* `"eliminar"` → borra el vehículo

Siempre guardamos los cambios en `localStorage` y volvemos a mostrar la tabla.

---

### 7. **Cargamos la tabla al iniciar la página**

```js
window.addEventListener("DOMContentLoaded", pintarTabla);
```

📌 **¿Por qué?**

Así, apenas abrís la página, ya se cargan los vehículos guardados y se muestran sin que el usuario tenga que hacer nada.

---

## 🎉 FUNCIONALIDADES LOGRADAS

| Funcionalidad               | ¿Implementada?   |
| --------------------------- | ---------------- |
| Registrar vehículo          | ✅ Sí             |
| Alquilar y devolver         | ✅ Sí             |
| Mostrar información         | ✅ Sí (👁️ botón) |
| Eliminar vehículo           | ✅ Sí (🗑 botón)  |
| Guardar en localStorage     | ✅ Sí             |
| Persistencia entre recargas | ✅ Sí             |
| Interfaz 100% visual        | ✅ Sí             |

---

## ¿Qué podés agregar después?

* Filtros por estado: mostrar solo disponibles o alquilados.
* Ordenar por precio o por nombre.
* Mostrar estadísticas (cuántos disponibles, ingresos simulados, etc).
* Que la tabla se actualice en tiempo real con animaciones (opcional).
* Agregar modal (ventana flotante) en vez de un `div`.
