# Ejercicios Resueltos

Te paso una **lista de ejercicios sencillos y progresivos** para que Santino practique **solo Callbacks y Promesas**, al nivel básico que viene manejando.

👉 Cada ejercicio incluye una **descripción simple**, seguido del **enunciado que puede leer él mismo** y **pistas si querés ir guiándolo**.

---

## 🟠 PARTE 1: 📞 Callbacks

---

### 🧪 Ejercicio 1: Llamar a una función dentro de otra

**Enunciado para Santino:**

> Creá una función `mostrarMensaje` que reciba un nombre y muestre `"Hola, [nombre]"`.
> Luego creá otra función `procesarEntradaUsuario` que reciba un callback y lo llame pasando el nombre `"Santino"`.

**Pista:**

```js
function mostrarMensaje(nombre) {
  // Mostrá por consola "Hola, [nombre]"
}

function procesarEntradaUsuario(callback) {
  // Llamá al callback con "Santino"
}

procesarEntradaUsuario(mostrarMensaje);
```

---

### 🧪 Ejercicio 2: Sumar con callback

> Hacé una función que sume dos números y use un callback para mostrar el resultado.

**Pista:**

```js
function sumar(a, b, callback) {
  // Sumá a + b y pasalo al callback
}

function mostrarResultado(resultado) {
  console.log("Resultado:", resultado);
}

sumar(5, 3, mostrarResultado); // Debería decir "Resultado: 8"
```

---

### 🧪 Ejercicio 3: Simular espera con `setTimeout`

> Usá `setTimeout` para esperar 2 segundos y luego mostrar `"Pasaron 2 segundos"`.

**Pista:**

```js
function esperarYDecir(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

function mostrar() {
  console.log("Pasaron 2 segundos");
}

esperarYDecir(mostrar);
```

---

### 🧪 Ejercicio 4: Dos pasos con callback

> Simulá que primero se prepara una pizza y luego se entrega. Usá dos callbacks.

**Pista:**

```js
function prepararPizza(callback) {
  console.log("Preparando pizza...");
  setTimeout(() => {
    console.log("Pizza lista 🍕");
    callback();
  }, 2000);
}

function entregarPizza() {
  console.log("Entregando pizza 📦");
}

prepararPizza(entregarPizza);
```

---

## 🔵 PARTE 2: ✅ Promesas

---

### 🧪 Ejercicio 5: Promesa básica que se resuelve

> Creá una promesa que se resuelva con el texto `"Todo OK"` y mostralo por consola con `.then()`.

**Pista:**

```js
const miPromesa = new Promise((resolve, reject) => {
  resolve("Todo OK");
});

miPromesa.then((mensaje) => {
  console.log(mensaje); // Mostrará "Todo OK"
});
```

---

### 🧪 Ejercicio 6: Promesa con `setTimeout`

> Hacé que una promesa se resuelva después de 2 segundos con el mensaje `"Listo"`.

**Pista:**

```js
const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Listo ⏰");
  }, 2000);
});

console.log("Esperando...");
promesa.then((msg) => console.log(msg));
```

---

### 🧪 Ejercicio 7: Promesa con condición

> Creá una función `verificarUsuario` que devuelva una promesa. Si el nombre es `"Santino"`, se resuelve. Si no, se rechaza.

**Pista:**

```js
function verificarUsuario(nombre) {
  return new Promise((resolve, reject) => {
    if (nombre === "Santino") {
      resolve("¡Bienvenido, Santino!");
    } else {
      reject("Usuario no reconocido");
    }
  });
}

verificarUsuario("Santino").then(console.log).catch(console.error);
```

---

### 🧪 Ejercicio 8: Simulación de proceso paso a paso

> Simulá una secuencia de pasos usando promesas encadenadas:

1. `"Cargando datos..."` (1s)
2. `"Procesando datos..."` (1s)
3. `"Datos listos ✅"` (1s)

**Pista:**

```js
function paso(mensaje, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mensaje);
      resolve();
    }, tiempo);
  });
}

paso("Cargando datos...", 1000)
  .then(() => paso("Procesando datos...", 1000))
  .then(() => paso("Datos listos ✅", 1000));
```

---

### 🧪 Ejercicio 9: Promesa con error

> Hacé una promesa que se rechace con el mensaje `"Algo salió mal"` y mostralo con `.catch()`.

**Pista:**

```js
const promesa = new Promise((resolve, reject) => {
  reject("Algo salió mal ❌");
});

promesa
  .then((res) => console.log(res))
  .catch((err) => console.error("ERROR:", err));
```

---

### 🧪 Ejercicio 10: Función que devuelva una promesa

> Creá una función llamada `esperar(ms)` que devuelva una promesa que se resuelva después de *ms* milisegundos.

**Pista:**

```js
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperaste ${ms} milisegundos`);
    }, ms);
  });
}

esperar(1500).then(console.log);
```
