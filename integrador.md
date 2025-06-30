
# ✅ EJERCICIO INTEGRADOR: *"Mini Panel de Compras"*

## 🎯 Objetivo

Crear una **mini app web interactiva** donde se muestre una lista de productos disponibles para compra, cargados desde un archivo JSON local. El usuario podrá:

* Ver productos con nombre, precio y descripción
* Marcar productos para "comprar"
* Ver un panel lateral con el carrito de compras (productos seleccionados)
* Ver el total actualizado
* Interactuar con los botones para agregar o quitar productos
* Visualmente diferenciar los productos seleccionados
* Usar clases, métodos, arrays, objetos, callbacks, promesas, fetch, manejo de DOM, y estilos

---

## 🧩 Requisitos técnicos

### 🔹 HTML

* Crear una estructura básica con un `<div>` para los productos y otro para el carrito.

### 🔹 CSS

* Agregar estilos para:

  * Productos visualmente separados
  * Producto seleccionado
  * Carrito lateral o inferior con el resumen
  * Botones para agregar/quitar

### 🔹 JS

Debés utilizar TODOS los conceptos listados a continuación:

1. **Arrays y Objetos:** para almacenar productos, y carrito de compras
2. **Clase `Producto`:** con constructor que reciba `id`, `nombre`, `precio`, `descripcion`
3. **Métodos** en la clase para marcar como comprado o no
4. **Funciones con callbacks:** para ejecutar acciones cuando se selecciona o deselecciona un producto
5. **Manejo del DOM:** para renderizar productos y el carrito
6. **Promesa con `fetch`:** para cargar los productos desde un archivo `productos.json` local
7. **JSON:** el archivo local que contiene la lista de productos
8. **Estilos:** básicos con CSS para mejorar la experiencia visual

---

## 📂 Archivos requeridos

* `index.html`
* `app.js`
* `productos.json`
* `style.css`

---

## 🛒 Comportamiento esperado

1. Al abrir la página, se cargan los productos desde el archivo JSON local.
2. Cada producto se muestra con:

   * Nombre
   * Precio
   * Descripción
   * Botón "Agregar al carrito" o "Quitar del carrito"
3. Al hacer clic en el botón:

   * Se ejecuta una función callback
   * El producto se agrega o se quita del carrito
   * El total del carrito se actualiza
4. El producto agregado se resalta visualmente
5. Se muestra en otro `<div>`:

   * Lista de productos en el carrito
   * Total acumulado

---

## 📝 Consideraciones adicionales

* Debés **separar** claramente lógica, datos y presentación.
* Es importante **usar clases** y **no programar todo con funciones sueltas**.
* El código debe estar organizado, claro, y con comentarios explicativos.

---

## 🧠 BONUS (opcional)

* Mostrar una alerta con `confirm()` al quitar un producto del carrito
* Ordenar productos al renderizar por nombre o precio

---

¿Listo para programar? ¡A brillar! 🌟