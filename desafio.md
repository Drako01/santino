# Trabajo Integrador

---

## 🎯 ENUNCIADO DEL PROYECTO

### 🧠 Proyecto: **“MiniGestor de Tareas + Tienda”**

### 📝 Descripción

Desarrollá una aplicación web completa que combine dos funcionalidades:

1. **Un gestor de tareas personal** (tipo ToDo list)
2. **Una tienda ficticia de productos** (como mini e-commerce)

Ambos módulos deben estar integrados visualmente en la misma página web, usando pestañas o secciones. El objetivo es practicar múltiples aspectos de JavaScript tanto del lado del **cliente** como del **servidor (Node.js + Express)**.

---

### 📦 Requisitos mínimos

#### Parte 1: Gestor de tareas

* Permitir al usuario agregar tareas con título, descripción y prioridad.
* Guardar las tareas en **LocalStorage**.
* Listar tareas con opción a:

  * Marcar como completada
  * Eliminar
  * Filtrar por estado o prioridad
* Usar clases JS para representar las tareas.
* Manejar el DOM para renderizar y actualizar tareas.
* Eventos para responder a clicks y formularios.

#### Parte 2: Tienda de productos

* Mostrar productos obtenidos desde la [FakeStore API](https://fakestoreapi.com/products) usando **fetch + Promesas**
* Renderizar tarjetas de productos con DOM.
* Permitir agregar productos a un carrito (en memoria o LocalStorage).
* Mostrar el carrito en una sección.
* Permitir eliminar productos del carrito.

---

### 🔧 Backend con Node.js + Express

* Crear un servidor Express que sirva los archivos estáticos (`index.html`, CSS, JS).
* Crear una ruta GET `/miapi/frase` que devuelva un mensaje personalizado (tipo: “Bienvenido, Santino”).
* Crear una ruta GET `/hora` que devuelva un JSON con la hora actual del servidor.
* Crear una ruta POST `/contacto` para simular que se envía un mensaje (guardarlo en un array del backend y mostrarlo por consola).
* Usar `nodemon` para desarrollo.

---

### 📚 Temas cubiertos

* Variables, arrays, objetos, funciones
* Clases (Tarea, Producto)
* DOM + Eventos
* LocalStorage
* Fetch API y Promesas
* Módulos en JS
* Express
* Rutas estáticas y dinámicas
* `package.json`, `nodemon`, estructura real de proyecto
* Buenas prácticas de código (separación de responsabilidades)

---

### 🚀 Extras sugeridos (opcional)

* Estilos con Bootstrap o CSS personalizado
* Agregar animaciones o transiciones simples
* Guardar el historial de tareas completadas
* Persistencia del carrito entre recargas
