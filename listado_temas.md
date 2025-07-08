# Listado de Temas para las siguientes 5 clases

## 🎯 Plan final optimizado (5 clases) – JS + API Google Sheets + Código profesional

Este plan está centrado en que:

* ✅ Entender APIs modernas
* ✅ Separe lógica en módulos (`api.js`, `dom.js`, `sheet.js`)
* ✅ Pueda leer y escribir en Google Sheets
* ✅ Terminar con un proyecto real (mini CRM, catálogo, etc.)

---

### 📘 Clase 1 – **JS moderno + `async/await` + Estructura modular**

🔧 Consolidar todo con buenas prácticas.

* Revisión de `let`, `const`, arrow functions
* `async/await`, `try/catch`, errores de red
* Cómo dividir el proyecto en módulos:

  * `main.js` → orquesta
  * `api.js` → funciones fetch
  * `ui.js` → renderizado DOM
* Qué es el **scope** de un módulo
* Cómo usar `type="module"` y `import/export`

> 💡 Ejercicio: Refactorizar su buscador de películas dividiendo código en módulos con `async/await`.

---

### 📘 Clase 2 – **Fundamentos de APIs REST + CORS + JSON**

🌐 Entender bien el protocolo HTTP y cómo se trabaja con APIs.

* Métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`)
* Códigos de estado (200, 404, 500, etc.)
* Encabezados comunes (`Content-Type`, `Authorization`)
* CORS explicado simple + cómo lo soluciona Google
* `fetch()` avanzado con opciones

> 💡 Ejercicio: App de usuarios con [Reqres](https://reqres.in) o [JSONPlaceholder](https://jsonplaceholder.typicode.com)

* Leer usuarios (`GET`)
* Agregar uno (`POST`)
* Mostrar feedback (`alert`, `SweetAlert2`)

---

### 📘 Clase 3 – **Lectura de datos en Google Sheets (modo público)**

📊 Empezar a consumir datos reales desde Sheets (sin login aún).

* Configurar Google Sheets público
* Convertirlo en JSON via:

  * [SheetasJSON](https://sheetasjson.com) ✅ fácil
  * o vía API oficial con clave de solo lectura
* Consumir datos y mostrarlos
* Mapear filas a objetos JS
* Mostrar como cards/tablas en el DOM

> 💡 Ejercicio: App de catálogo / tabla de alumnos / listado de productos desde Sheets.

---

### 📘 Clase 4 – **Google Sheets con OAuth (modo escritura)**

🔐 Acceder a hojas privadas, agregar datos como si fuera una base de datos.

* Crear proyecto en [Google Cloud Console](https://console.cloud.google.com/)
* Activar Google Sheets API
* Crear Client ID de OAuth
* Usar librería `gapi` o `googleapis` con frontend
* Autenticar y escribir datos (`append`, `update`)

> 💡 Ejercicio: Formulario que agrega un nuevo registro a la hoja (nombre, mail, mensaje).

---

### 📘 Clase 5 – **Proyecto final + publicación + revisión**

🚀 Aplicación real que integra todo lo aprendido.

* Proyecto con módulos separados
* Lectura y escritura a Sheets
* Validaciones simples (que no esté vacío)
* Publicación en GitHub Pages o Netlify

> 💡 Ideas:

* Mini CRM de contactos
* Registro de alumnos
* Inventario de productos
* Lista de turnos

---

## 📁 Ejemplo de estructura modular

```bash
/public
│
├── index.html
├── js/
│   ├── main.js         # punto de entrada
│   ├── sheets.js       # funciones de conexión a Sheets
│   ├── dom.js          # renderizar, limpiar, mostrar
│   ├── auth.js         # login Google (si hay OAuth)
│   └── config.js       # claves, IDs, settings
```

---

## ✨ Extra bonus para dejarle curiosidad post-curso

* ¿Qué es Firebase? (una alternativa más potente a Sheets)
* Cómo enviar mails desde JS con [EmailJS](https://www.emailjs.com/)
* Guardar registros como PDF desde el navegador (`window.print()`)
* Qué es React y por qué es popular
