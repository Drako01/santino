# 📚 README: Uso de Promises y Fetch (GET) en JavaScript

## 🧠 ¿Qué es una Promise?

Una **Promise** es un objeto en JavaScript que representa la terminación (o el fracaso) de una operación asincrónica.

Tiene 3 estados:

* `pending` (pendiente)
* `fulfilled` (cumplida con éxito)
* `rejected` (rechazada con error)

---

## 🧪 Ejemplo básico de Promise

```javascript
const promesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve('¡Operación exitosa!');
  } else {
    reject('Hubo un error');
  }
});

promesa
  .then((resultado) => {
    console.log(resultado); // ¡Operación exitosa!
  })
  .catch((error) => {
    console.error(error);
  });
```

---

## 🌐 ¿Qué es `fetch()`?

`fetch()` es una función nativa de JavaScript que te permite hacer solicitudes HTTP (como GET o POST) y devuelve una **Promise**.

### Sintaxis básica:

```javascript
fetch(url)
  .then(respuesta => respuesta.json()) // parsear JSON
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## 🧰 Paso a paso: Usar `fetch()` con `GET`

### 1. Crear un archivo JSON (o usar una API pública)

Ejemplo de archivo `productos.json`:

```json
[
  { "id": 1, "nombre": "Teclado", "precio": 30 },
  { "id": 2, "nombre": "Mouse", "precio": 20 }
]
```

### 2. HTML básico

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Fetch Demo</title>
</head>
<body>
  <h1>Lista de productos</h1>
  <div id="lista-productos"></div>

  <script src="app.js"></script>
</body>
</html>
```

---

### 3. JavaScript con `fetch()`

```javascript
const contenedor = document.getElementById('lista-productos');

fetch('productos.json')
  .then(response => {
    if (!response.ok) throw new Error('Error al cargar el archivo JSON');
    return response.json();
  })
  .then(productos => {
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${producto.nombre}</strong>: $${producto.precio}`;
      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    contenedor.innerHTML = `<p style="color:red">${error.message}</p>`;
  });
```

---

## 🛠️ Otro ejemplo práctico: Fetch desde API pública

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(post => {
    console.log('Título:', post.title);
    console.log('Contenido:', post.body);
  })
  .catch(err => console.error('Fallo en la petición', err));
```

---

## 📌 Tips importantes

* `fetch()` **siempre devuelve una Promise**, así que debes usar `.then()` y `.catch()` o `async/await`.
* El método `.json()` también devuelve una Promise.
* Las respuestas con error HTTP (404, 500) **no lanzan error automático**, por eso es recomendable verificar `response.ok`.

---

## 💡 ¿Cómo usar `async/await` con fetch?

```javascript
async function obtenerDatos() {
  try {
    const respuesta = await fetch('productos.json');
    if (!respuesta.ok) throw new Error('Error al cargar productos');
    
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error(error);
  }
}

obtenerDatos();
```

---

## 🧪 Práctica recomendada

1. Crea un archivo JSON con una lista de objetos.
2. Carga los datos con `fetch()`.
3. Muestra cada elemento en el DOM.
4. Manejá errores usando `.catch()` o `try/catch`.
5. Experimentá con [API públicas gratuitas](https://github.com/public-apis/public-apis).

---

## 📎 Conclusión

* Las **Promises** permiten manejar operaciones asincrónicas con claridad.
* `fetch()` es una herramienta poderosa y moderna para realizar solicitudes HTTP.
* Saber leer, parsear y manejar errores es esencial para trabajar con datos remotos.

---
