# Desafio para el Finde

* ✅ OMDb API (películas por búsqueda)
* ✅ Node.js + Express + Bootstrap desde `node_modules`
* ✅ JS modular con `fetch()` y Promesas
* ✅ SweetAlert2 para mostrar info de película
* ✅ Guardar favoritos en `localStorage`
* ✅ Modo oscuro con toggle (usando Bootstrap 5)

---

## 🎯 ENUNCIADO COMPLETO

### 🧠 Proyecto: **Buscador de Películas con Favoritos y Modo Oscuro**

---

### 🚀 Objetivo

Crear una aplicación web que permita buscar películas usando la API pública de [OMDb](https://www.omdbapi.com/), ver los resultados, agregar favoritos, visualizar detalles con SweetAlert2, y alternar entre modo claro y oscuro.

---

### 🧩 Requisitos técnicos

1. Usar **Node.js + Express** para servir archivos estáticos
2. Estilizar con **Bootstrap 5** desde `node_modules`
3. Lógica del cliente en archivo `app.js` externo (`public/js/app.js`)
4. Usar **fetch()** y Promesas para llamar a la API OMDb:

   * Ejemplo de búsqueda: `https://www.omdbapi.com/?apikey=TUKKEY&s=batman`
   * Ejemplo de detalle: `https://www.omdbapi.com/?apikey=TUKKEY&i=tt123456`
5. Mostrar los resultados como tarjetas Bootstrap con:

   * Imagen
   * Título
   * Año
   * Botón "Detalles"
   * Botón "❤️ Favorito"
6. Mostrar detalles usando **SweetAlert2**
7. Al hacer clic en "❤️ Favorito", guardar la película en `localStorage`
8. Agregar botón "⭐ Ver Favoritos" que muestra las tarjetas guardadas
9. Agregar toggle de modo claro/oscuro que cambie la apariencia de toda la app

---

### 📂 Estructura esperada

```bash
/santino-movies-ultimate/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── node_modules/
├── package.json
└── app.js
```

---

### ✨ BONUS sugeridos (opcionales)

* Usar iconos de Bootstrap o SVG para el botón de favoritos
* Guardar solo `Title`, `Year`, `Poster`, `imdbID` en LS (no toda la respuesta)
* Mostrar un `toast` al agregar a favoritos
* Persistir el modo oscuro en localStorage

---

### 🧑‍🏫 Habilidades que se ponen en práctica

* Fetch + Promesas
* DOM dinámico
* Bootstrap 5
* SweetAlert2
* localStorage
* Toggle de clases CSS / dark mode
* Separación de lógica frontend/backend mínimo

---

### 📌 API KEY

Usar [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) para obtener una gratuita

---

## 🧱 EXTENSIÓN DEL DESAFÍO

### ✅ 1. 📚 **Historial de Búsqueda Guardado**

* Cada vez que se hace una búsqueda, se guarda el término en `localStorage`
* Se muestra en una lista debajo del input
* Al hacer clic en un término, vuelve a ejecutar esa búsqueda automáticamente

### ✅ 2. 📄 **Paginación con OMDb API**

* OMDb permite paginar con el parámetro `&page=1`, `&page=2`, etc.
* El desafío debe:

  * Mostrar botones “Anterior” y “Siguiente”
  * Mantener la búsqueda actual al navegar páginas
  * No permitir pasar de la página 1 hacia atrás

---

### 🎯 Objetivo

Crear una app web full frontend con Node.js como servidor estático que permite:

* Buscar películas
* Ver resultados con Bootstrap
* Ver detalles con SweetAlert2
* Agregar a favoritos (guardado en localStorage)
* Alternar modo claro/oscuro (persistente)
* Mostrar historial de búsqueda (clickeable)
* Paginar resultados

---
