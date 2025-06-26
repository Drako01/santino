# Ejercicios

Acá tenés **20 ejercicios sin resolver** enfocados en **callbacks y promesas** de nivel básico para Santino, más un **BONUS** integrador usando arrays, objetos, clases, DOM, callbacks y promesas 🧩

---

## ✅ 20 Ejercicios sin resolver

### 🟠 Callbacks

1. **Crear un callback básico**
   Escribí una función que reciba un nombre y un callback que lo salude.

2. **Simular un retraso con `setTimeout`**
   Usá un callback para mostrar "Listo" después de 2 segundos.

3. **Multiplicar dos números usando callback**
   Escribí una función que multiplique dos números y pase el resultado a un callback.

4. **Mostrar un mensaje luego de un proceso**
   Simulá que una tarea tarda 1 segundo y luego ejecuta un callback.

5. **Anidar dos procesos asincrónicos con callbacks**
   Mostrá primero "Paso 1", y luego "Paso 2", cada uno con 1 segundo de espera.

6. **Callback con validación**
   Escribí una función que valide si un número es par, y llame al callback con `"Es par"` o `"No es par"`.

7. **Función de bienvenida con callback personalizado**
   Creá una función que reciba un nombre y un callback para mostrar distintos estilos de bienvenida.

8. **Callback que reciba una lista y la recorra**
   Pasá un array de nombres a una función que use callback para saludarlos uno por uno.

9. **Simular carga de una imagen**
   Usá `setTimeout` para "cargar una imagen" y luego ejecutar un callback.

10. **Simular inicio de sesión con callback**
    Si el usuario es "admin", mostrar un mensaje de bienvenida con callback.

---

### 🔵 Promesas

11. **Crear una promesa que se resuelva con un texto**
    Mostrá el resultado con `.then()`.

12. **Promesa con demora simulada**
    Esperar 2 segundos y resolver con `"Tiempo cumplido"`.

13. **Rechazar una promesa con mensaje de error**
    Crear una promesa que falle con `.catch()` mostrando `"Ocurrió un error"`.

14. **Promesa que devuelve un número aleatorio**
    Crear una promesa que devuelva un número del 1 al 10.

15. **Encadenar dos `.then()`**
    El primero devuelve un número, el segundo lo multiplica por 2.

16. **Validar una contraseña con promesa**
    Si la contraseña es `"1234"`, resolver. Si no, rechazar.

17. **Promesa que resuelva con un array de frutas**
    Luego mostralo en consola.

18. **Función que devuelva una promesa**
    Llamala `esperar(ms)` y que se resuelva después de los milisegundos indicados.

19. **`Promise.all` con dos esperas diferentes**
    Simular dos tareas que terminan en distinto tiempo y mostrar el mensaje cuando ambas terminan.

20. **Simular descarga de archivos**
    Crear una función `descargarArchivo(nombre)` que retorne una promesa con setTimeout y al resolverse muestre: `"Archivo [nombre] descargado"`.

---

## 🎁 BONUS: Desafío integrador fácil

> 🎯 **Mini app de tareas (to-do)**

### Enunciado

Creá una mini app que permita:

1. Agregar tareas (array de strings).
2. Cada tarea debe estar representada como un **objeto** con `id`, `nombre`, y `completada` (boolean).
3. Usar una **clase** llamada `Tarea` para instanciar nuevas tareas.
4. Mostrar la lista de tareas en el **DOM** (por ejemplo, en una `<ul>`).
5. Simular una "carga" de tareas iniciales usando una **promesa** con retraso de 1.5s.
6. Permitir marcar una tarea como completada usando un **callback** desde un botón.

---

### Tips (no solución)

* Usar `setTimeout` dentro de una promesa para simular la carga.
* Crear tareas con `new Tarea(...)`.
* Mostrar tareas con `document.createElement`.
* El botón de cada tarea puede ejecutar un callback que la marque como completada.
