# Ejercicios Clase 02

* Arrays (💠)
* Objetos literales (🔹)
* Clases (🧱)
* Constructores tradicionales (🧰)

Los agrupé por tipo y dificultad creciente. Están listos para resolver directamente en consola o editor.

---

## 🔹 Objetos (20 ejercicios)

1. Crear un objeto `persona` con nombre, edad y email.
2. Agregar una propiedad `vivo` al objeto existente.
3. Modificar el valor de `edad`.
4. Eliminar la propiedad `email`.
5. Agregar un método `saludar()` que imprima nombre y edad.
6. Crear un objeto `auto` con marca, modelo y año.
7. Usar `Object.keys()` para listar las claves de `auto`.
8. Usar `Object.values()` para listar los valores.
9. Crear un objeto `libro` con propiedades anidadas (autor con nombre y nacionalidad).
10. Clonar un objeto con `Object.assign()`.
11. Comparar dos objetos con `===` (demostrar que no compara contenido).
12. Crear un array de objetos `productos`.
13. Buscar un producto con `find()`.
14. Filtrar productos por precio con `filter()`.
15. Contar propiedades con `Object.entries().length`.
16. Combinar dos objetos con spread operator.
17. Verificar si una propiedad existe con `"prop" in objeto`.
18. Congelar un objeto con `Object.freeze()`.
19. Usar `hasOwnProperty()` para verificar una clave.
20. Iterar sobre claves con `for...in`.

---

## 💠 Arrays (25 ejercicios)

21. Crear un array de números del 1 al 5.
22. Agregar un elemento al final con `push()`.
23. Agregar un elemento al inicio con `unshift()`.
24. Eliminar el último con `pop()`.
25. Eliminar el primero con `shift()`.
26. Usar `length` para conocer el tamaño.
27. Iterar con `for` clásico.
28. Usar `forEach()` para imprimir cada elemento.
29. Crear nuevo array multiplicando por 2 con `map()`.
30. Filtrar números pares con `filter()`.
31. Sumar todos con `reduce()`.
32. Ordenar un array de strings.
33. Ordenar un array de números correctamente.
34. Buscar un valor con `includes()`.
35. Obtener índice de un valor con `indexOf()`.
36. Combinar arrays con `concat()`.
37. Usar `slice()` para copiar parte del array.
38. Usar `splice()` para eliminar o insertar elementos.
39. Crear un array vacío y llenarlo con `fill()`.
40. Crear array de 5 elementos con el mismo valor.
41. Invertir un array con `reverse()`.
42. Convertir array a string con `join()`.
43. Crear array desde string con `split()`.
44. Eliminar duplicados usando `Set`.
45. Verificar si **todos** son mayores que 18 con `every()`.

---

## 🧰 Constructores tradicionales (25 ejercicios)

46. Crear función constructora `Persona(nombre, edad)`.
47. Agregar propiedad `email`.
48. Crear 3 personas distintas.
49. Agregar método `saludar` al prototype.
50. Agregar método `cumplirAnios`.
51. Verificar instancia con `instanceof`.
52. Agregar propiedad `vivo` con valor por defecto `true`.
53. Crear constructor `Auto(marca, modelo, año)`.
54. Crear método `encender()` para Auto.
55. Agregar contador de instancias a Persona.
56. Validar en constructor que `edad` sea número.
57. Agregar método que imprima toda la info (`this`).
58. Usar `call()` para invocar constructor con contexto.
59. Agregar método `esMayorDeEdad()` a `Persona`.
60. Crear array de personas con `new Persona(...)`.
61. Iterar el array y saludar a cada una.
62. Crear método estático `compararEdad`.
63. Simular herencia agregando métodos desde otro constructor.
64. Agregar propiedad `ID` autoincremental.
65. Añadir método que devuelva JSON.
66. Combinar varios objetos Persona con `Object.assign()`.
67. Mostrar cómo se comparte el método entre instancias.
68. Reemplazar un método del prototype.
69. Convertir constructor a clase moderna (opcional).
70. Mostrar cómo afecta declarar métodos dentro del constructor.

---

## 🧱 Clases (30 ejercicios)

71. Crear clase `Persona` con constructor.
72. Agregar método `saludar()`.
73. Crear clase `Empleado` que extiende `Persona`.
74. Agregar propiedad `sueldo`.
75. Método `aumentarSueldo(%)`.
76. Método `verDatos()` que llame a `super.saludar()`.
77. Crear clase `Estudiante` con `curso`.
78. Agregar método `cambiarCurso()`.
79. Ver uso de `instanceof` entre clases hijas.
80. Crear clase `Administrador` con método `banearUsuario`.
81. Usar `static` para método `crearDesdeJSON()`.
82. Usar getter `info` para devolver resumen.
83. Usar setter `correo` con validación.
84. Simular campo privado con `#clave`.
85. Método para comparar dos instancias (`equals`).
86. Crear método que devuelva objeto literal con `toJSON()`.
87. Mostrar herencia múltiple con mixins (simulado).
88. Añadir contador de instancias.
89. Validar propiedades dentro del constructor.
90. Crear clase `Animal`, `Perro`, `Gato`.
91. Agregar métodos `hacerSonido()`, sobrescribir en hijos.
92. Clase abstracta simulada (throw en método base).
93. Crear lista de animales y ejecutar método común.
94. Crear clase con dependencia (ej: `Vehículo` tiene `Motor`).
95. Mostrar orden de ejecución `constructor → método`.
96. Crear método asíncrono con `await` dentro de clase.
97. Llamar métodos de una clase desde otra.
98. Clase con array interno y métodos para agregar/quitar.
99. Clonar una instancia (constructor + spread).
100. Usar `Object.defineProperty()` para hacer atributo de solo lectura.
