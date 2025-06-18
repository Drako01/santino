# Métodos de Arrays en JavaScript 🧠💻

Los arrays (arreglos) en JavaScript son listas que pueden contener valores (números, strings, objetos, etc.). JavaScript nos ofrece muchos **métodos** para trabajar fácilmente con ellos.

A continuación, te explico los métodos más usados, de forma clara y con ejemplos sencillos para principiantes.

---

## 🔍 1. `push()`

Agrega uno o más elementos **al final** del array.

```js
const frutas = ['manzana', 'banana'];
frutas.push('naranja');
console.log(frutas); // ['manzana', 'banana', 'naranja']
````

---

## 🔙 2. `pop()`

Elimina el **último** elemento del array y lo devuelve.

```js
const frutas = ['manzana', 'banana', 'naranja'];
const ultima = frutas.pop();
console.log(ultima); // 'naranja'
console.log(frutas); // ['manzana', 'banana']
```

---

## 🔝 3. `unshift()`

Agrega elementos **al principio** del array.

```js
const numeros = [2, 3];
numeros.unshift(1);
console.log(numeros); // [1, 2, 3]
```

---

## 🔚 4. `shift()`

Elimina el **primer** elemento y lo devuelve.

```js
const numeros = [1, 2, 3];
const primero = numeros.shift();
console.log(primero); // 1
console.log(numeros); // [2, 3]
```

---

## 🔁 5. `forEach()`

Ejecuta una función para **cada elemento** del array. No devuelve nada.

```js
const nombres = ['Ana', 'Luis', 'Carlos'];
nombres.forEach(function(nombre) {
  console.log('Hola, ' + nombre);
});
```

---

## 🆕 6. `map()`

Crea un **nuevo array** aplicando una función a cada elemento.

```js
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6]
```

---

## ✅ 7. `filter()`

Crea un nuevo array con los elementos que **cumplen una condición**.

```js
const edades = [15, 22, 18, 30];
const mayores = edades.filter(e => e >= 18);
console.log(mayores); // [22, 18, 30]
```

---

## 🔍 8. `find()`

Devuelve el **primer elemento** que cumple con una condición.

```js
const numeros = [5, 8, 12, 4];
const encontrado = numeros.find(n => n > 10);
console.log(encontrado); // 12
```

---

## 🔢 9. `findIndex()`

Devuelve el **índice** del primer elemento que cumple una condición.

```js
const numeros = [5, 8, 12, 4];
const indice = numeros.findIndex(n => n > 10);
console.log(indice); // 2
```

---

## 🧮 10. `reduce()`

Reduce el array a **un solo valor** (por ejemplo, sumar todos los números).

```js
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(suma); // 10
```

---

## 🔄 11. `some()`

Devuelve `true` si **al menos un** elemento cumple la condición.

```js
const edades = [12, 17, 19];
const hayAdulto = edades.some(e => e >= 18);
console.log(hayAdulto); // true
```

---

## ✅ 12. `every()`

Devuelve `true` si **todos** los elementos cumplen la condición.

```js
const edades = [18, 21, 30];
const todosAdultos = edades.every(e => e >= 18);
console.log(todosAdultos); // true
```

---

## 🔀 13. `sort()`

Ordena los elementos. Por defecto, **como strings**.

```js
const numeros = [10, 2, 5];
numeros.sort(); 
console.log(numeros); // [10, 2, 5] 😬 (orden incorrecto como string)

numeros.sort((a, b) => a - b); // Correcto para números
console.log(numeros); // [2, 5, 10]
```

---

## 🔁 14. `reverse()`

Invierte el orden del array.

```js
const letras = ['a', 'b', 'c'];
letras.reverse();
console.log(letras); // ['c', 'b', 'a']
```

---

## 🔎 15. `includes()`

Devuelve `true` si el array **contiene** un elemento.

```js
const frutas = ['manzana', 'banana'];
console.log(frutas.includes('banana')); // true
console.log(frutas.includes('pera')); // false
```

---

## 🪓 16. `slice()`

Crea una **copia parcial** del array. No lo modifica.

```js
const numeros = [10, 20, 30, 40];
const copia = numeros.slice(1, 3); // desde el índice 1 hasta antes del 3
console.log(copia); // [20, 30]
```

---

## 🔧 17. `splice()`

Permite **agregar, eliminar o reemplazar** elementos del array (lo modifica).

```js
const numeros = [1, 2, 3, 4];
numeros.splice(1, 2); // elimina 2 elementos desde el índice 1
console.log(numeros); // [1, 4]
```

```js
const letras = ['a', 'b', 'd'];
letras.splice(2, 0, 'c'); // agrega 'c' en el índice 2
console.log(letras); // ['a', 'b', 'c', 'd']
```

---
