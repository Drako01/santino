# Clase 05

## ⏱️ Duración estimada por sección

1. **Introducción a la asincronía y callbacks**
2. **Qué es una Promesa y su sintaxis básica**
3. **Estados de una Promesa y encadenamiento (.then / .catch / .finally)**
4. **Creación de Promesas personalizadas (25 min)**
5. **Simulación de peticiones con `setTimeout`**
6. **Métodos útiles: `Promise.all`, `Promise.race`, `Promise.any`, `Promise.allSettled`**
7. **Ejercicio práctico final**

---

## 🧠 ¿Qué es un callback?

Un **callback** es simplemente **una función que se pasa como argumento a otra función**, y que se ejecuta **después** de que la función principal termina su trabajo.

💬 En otras palabras:

> *"Ey, cuando termines eso, llamá a esta función."*

---

## 🎯 Ejemplo muy simple

```js
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

function procesarUsuario(callback) {
  const nombre = "Santino";
  callback(nombre); // Llama a la función saludar con el nombre
}

procesarUsuario(saludar);
```

🧾 **Salida por consola:**

```js
Hola, Santino
```

🔍 **¿Qué pasó acá?**

* `saludar` es una función.
* La pasamos como argumento a `procesarUsuario`.
* Cuando `procesarUsuario` termina, **llama a `saludar(nombre)`**.

---

## 🕗 Ejemplo con `setTimeout` (simula algo que tarda)

```js
function decirDespues() {
  console.log("Esto se dijo después ⏳");
}

console.log("Inicio");
setTimeout(decirDespues, 2000); // Llama a la función después de 2 segundos
console.log("Fin");
```

🧾 Salida:

```js
Inicio
Fin
Esto se dijo después ⏳
```

✅ Aquí `setTimeout` usa un callback (`decirDespues`) que se ejecuta luego de 2 segundos.

---

## 🧩 Ejemplo de callback que recibe datos

```js
function mostrarResultado(resultado) {
  console.log("Resultado:", resultado);
}

function sumar(a, b, callback) {
  const resultado = a + b;
  callback(resultado); // Llama a mostrarResultado con el resultado
}

sumar(3, 4, mostrarResultado);
```

🧾 Salida:

```js
Resultado: 7
```

---

## 🧠 ¿Para qué sirven los callbacks?

Los callbacks son útiles cuando algo **tarda en completarse** (como leer un archivo, pedir datos a internet, etc.). Sirven para decirle a JavaScript:

> “Cuando termines eso, hacé esto otro”.

---

## 📚 Promesas

---

## 🧠 1. Introducción a la asincronía

### 🗣️ Explicación

JavaScript es **mono-hilo**: sólo puede hacer una cosa a la vez. Sin embargo, en el mundo real tenemos tareas que tardan: peticiones a internet, lectura de archivos, animaciones…

### 🔧 Ejemplo clásico con `setTimeout`

```js
console.log("Inicio");

setTimeout(() => {
  console.log("Esto tarda 2 segundos...");
}, 2000);

console.log("Fin");
```

### 💡 Punto a destacar

Aunque el `setTimeout` está antes del `"Fin"`, se ejecuta después por ser **asíncrono**.

### ⚠️ Problema con los callbacks

```js
function leerDatos(callback) {
  setTimeout(() => {
    callback("Datos cargados");
  }, 2000);
}

leerDatos((resultado) => {
  console.log(resultado); // Bien
});
```

Pero si anidamos muchos:

```js
func1(() => {
  func2(() => {
    func3(() => {
      func4(() => {
        console.log("Callback hell 😫");
      });
    });
  });
});
```

---

## ✅ 2. ¿Qué es una Promesa?

### 📖 Definición

Una **Promesa** es un objeto que representa un valor que puede estar disponible ahora, en el futuro, o nunca.

```js
const promesa = new Promise((resolve, reject) => {
  // lógica asincrónica
});
```

### ⚙️ Ejemplo básico

```js
const promesa = new Promise((resolve, reject) => {
  let todoOk = true;

  if (todoOk) {
    resolve("Todo salió bien ✅");
  } else {
    reject("Algo falló ❌");
  }
});

promesa
  .then((mensaje) => {
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

---

## 🧩 3. Estados de una Promesa 

* `pending`: cuando aún no termina
* `fulfilled`: cuando se resuelve
* `rejected`: cuando falla

### 🧪 Demo con retraso

```js
const promesaLenta = new Promise((resolve) => {
  setTimeout(() => {
    resolve("¡Terminó después de 3 segundos!");
  }, 3000);
});

console.log("Esperando...");
promesaLenta.then((res) => console.log(res));
```

### `.finally()`

```js
promesaLenta
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log("Siempre se ejecuta 🎯"));
```

---

## 🧑‍💻 4. Crear Promesas personalizadas 

### 💬 Explicación

Tú puedes crear funciones que devuelvan promesas para controlar procesos asíncronos.

```js
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperaste ${ms} ms`);
    }, ms);
  });
}

esperar(2000).then((res) => console.log(res));
```

### 🧠 Mini ejercicio

```js
function login(usuario, contraseña) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin" && contraseña === "1234") {
      resolve("Bienvenido admin 🛡️");
    } else {
      reject("Usuario o contraseña incorrectos ⚠️");
    }
  });
}

login("admin", "1234").then(console.log).catch(console.error);
```

---

## 🔄 5. Simulaciones reales con setTimeout 

### 🛜 Simular petición a servidor

```js
function obtenerUsuarios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Juan", "María", "Pedro"]);
    }, 2000);
  });
}

console.log("Cargando usuarios...");
obtenerUsuarios().then((usuarios) => {
  console.log("Usuarios:", usuarios);
});
```

---

## 🚀 6. Métodos útiles de `Promise` 

### ✅ `Promise.all`

```js
const promesa1 = esperar(1000);
const promesa2 = esperar(2000);

Promise.all([promesa1, promesa2]).then((res) => {
  console.log("Todo resuelto:", res);
});
```

### ⚡ `Promise.race`

```js
Promise.race([esperar(1000), esperar(3000)]).then((res) => {
  console.log("La más rápida fue:", res);
});
```

### 🎯 `Promise.allSettled`

```js
const p1 = Promise.resolve("Bien");
const p2 = Promise.reject("Mal");

Promise.allSettled([p1, p2]).then(console.log);
```

---

## 🛠️ 7. Ejercicio práctico final 

**Objetivo**: Simular el flujo de una app de pedidos de pizza 🍕

```js
function pedirPizza() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("🍕 Pizza lista"), 3000);
  });
}

function entregarPizza() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("📦 Pizza entregada"), 2000);
  });
}

pedirPizza()
  .then((res) => {
    console.log(res);
    return entregarPizza();
  })
  .then((res) => console.log(res))
  .finally(() => console.log("Proceso completo ✔️"));
```

---

## 🔁 8. Preguntas + repaso 

* ¿Qué diferencia hay entre una promesa y un callback?
* ¿Cuáles son los 3 estados de una promesa?
* ¿Qué hace `.then()` vs `.catch()`?
* ¿Para qué sirve `Promise.all()`?

---

## 📦 BONUS: Promesas + `async/await` 

```js
async function procesarPizza() {
  const pedido = await pedirPizza();
  console.log(pedido);

  const entrega = await entregarPizza();
  console.log(entrega);

  console.log("¡Todo listo con async/await! 🍽️");
}

procesarPizza();
```

