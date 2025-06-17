# ✅ 100 Ejercicios Básicos de JavaScript - Con Respuestas

---

## 🔹 Objetos (Resueltos)

1.

```js
const persona = { nombre: 'Juan', edad: 30, email: 'juan@mail.com' };
```

2.

```js
persona.vivo = true;
```

3.

```js
persona.edad = 35;
```

4.

```js
delete persona.email;
```

5.

```js
persona.saludar = function() {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};
```

6.

```js
const auto = { marca: 'Ford', modelo: 'Fiesta', año: 2015 };
```

7.

```js
console.log(Object.keys(auto));
```

8.

```js
console.log(Object.values(auto));
```

9.

```js
const libro = {
  titulo: 'El Hobbit',
  autor: {
    nombre: 'Tolkien',
    nacionalidad: 'Británico'
  }
};
```

10.

```js
const copiaLibro = Object.assign({}, libro);
```

11.

```js
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false
```

12.

```js
const productos = [
  { nombre: 'Coca', precio: 100 },
  { nombre: 'Pepsi', precio: 90 }
];
```

13.

```js
const pepsi = productos.find(p => p.nombre === 'Pepsi');
```

14.

```js
const baratos = productos.filter(p => p.precio < 95);
```

15.

```js
Object.entries(productos[0]).length;
```

16.

```js
const full = { ...obj1, ...obj2 };
```

17.

```js
'nombre' in persona;
```

18.

```js
Object.freeze(persona);
```

19.

```js
persona.hasOwnProperty('edad');
```

20.

```js
for (let clave in persona) {
  console.log(clave, persona[clave]);
}
```

---

## 💠 Arrays (Resueltos)

21.

```js
const numeros = [1, 2, 3, 4, 5];
```

22.

```js
numeros.push(6);
```

23.

```js
numeros.unshift(0);
```

24.

```js
numeros.pop();
```

25.

```js
numeros.shift();
```

26.

```js
numeros.length;
```

27.

```js
for (let i = 0; i < numeros.length; i++) console.log(numeros[i]);
```

28.

```js
numeros.forEach(n => console.log(n));
```

29.

```js
const dobles = numeros.map(n => n * 2);
```

30.

```js
const pares = numeros.filter(n => n % 2 === 0);
```

31.

```js
const suma = numeros.reduce((a, b) => a + b, 0);
```

32.

```js
['z', 'a', 'b'].sort();
```

33.

```js
[5, 1, 10].sort((a, b) => a - b);
```

34.

```js
numeros.includes(3);
```

35.

```js
numeros.indexOf(3);
```

36.

```js
const todos = numeros.concat([6, 7]);
```

37.

```js
numeros.slice(1, 3);
```

38.

```js
numeros.splice(1, 2);
```

39.

```js
new Array(3).fill(0);
```

40.

```js
Array(5).fill('ok');
```

41.

```js
numeros.reverse();
```

42.

```js
numeros.join(', ');
```

43.

```js
"1,2,3".split(',');
```

44.

```js
[...new Set([1, 2, 2, 3])];
```

45.

```js
numeros.every(n => n > 0);
```

---

## 🧰 Constructores (Resueltos)

46.

```js
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
```

47.

```js
this.email = '';
```

48.

```js
const p1 = new Persona('Ana', 30);
const p2 = new Persona('Luis', 25);
const p3 = new Persona('Sofi', 20);
```

49.

```js
Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};
```

50.

```js
Persona.prototype.cumplirAnios = function() {
  this.edad++;
};
```

51.

```js
console.log(p1 instanceof Persona);
```

52.

```js
this.vivo = true;
```

53.

```js
function Auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}
```

54.

```js
Auto.prototype.encender = function() {
  console.log('Encendido');
};
```

55.

```js
Persona.contador = 0;
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  Persona.contador++;
}
```

56.

```js
if (typeof edad !== 'number') throw new Error('Edad inválida');
```

57.

```js
this.info = function() {
  console.log(`${this.nombre}, ${this.edad}`);
};
```

58.

```js
function OtraPersona() {
  Persona.call(this, 'Juan', 40);
}
```

59.

```js
this.esMayorDeEdad = function() {
  return this.edad >= 18;
};
```

60.

```js
const personas = [new Persona('A', 20), new Persona('B', 30)];
```

61.

```js
personas.forEach(p => p.saludar());
```

62.

```js
Persona.compararEdad = (a, b) => a.edad - b.edad;
```

63.

```js
Object.assign(Empleado.prototype, Persona.prototype);
```

64.

```js
Persona.id = 0;
this.id = ++Persona.id;
```

65.

```js
this.toJSON = function() {
  return JSON.stringify(this);
};
```

66.

```js
const nuevo = Object.assign({}, p1, p2);
```

67.

```js
// El método en el prototype es compartido
```

68.

```js
Persona.prototype.saludar = function() {
  console.log('Nuevo saludo');
};
```

69.

```js
// Reescrito con class...
```

70.

```js
// Métodos dentro del constructor generan copia por instancia
```

---

## 🧱 Clases (Resueltos)

71.

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

72.

```js
saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}
```

73.

```js
class Empleado extends Persona {
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }
}
```

74.

```js
this.sueldo = sueldo;
```

75.

```js
aumentarSueldo(p) {
  this.sueldo += this.sueldo * (p / 100);
}
```

76.

```js
verDatos() {
  super.saludar();
}
```

77.

```js
class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }
}
```

78.

```js
cambiarCurso(nuevo) {
  this.curso = nuevo;
}
```

79.

```js
console.log(e instanceof Estudiante); // true
```

80.

```js
banearUsuario(usuario) {
  console.log(`${usuario} baneado`);
}
```

81.

```js
static crearDesdeJSON(json) {
  const obj = JSON.parse(json);
  return new Persona(obj.nombre, obj.edad);
}
```

82.

```js
get info() {
  return `${this.nombre}, ${this.edad}`;
}
```

83.

```js
set correo(correo) {
  if (!correo.includes('@')) throw Error('Email inválido');
  this._correo = correo;
}
```

84.

```js
class Privado {
  #clave = 123;
}
```

85.

```js
equals(other) {
  return this.nombre === other.nombre;
}
```

86.

```js
toJSON() {
  return { nombre: this.nombre, edad: this.edad };
}
```

87.

```js
Object.assign(Clase.prototype, mixin);
```

88.

```js
static count = 0;
constructor(...) {
  Clase.count++;
}
```

89.

```js
if (!nombre) throw Error('Nombre obligatorio');
```

90.

```js
class Animal {}
class Perro extends Animal {}
```

91.

```js
hacerSonido() {
  console.log('Guau');
}
```

92.

```js
if (this.constructor === Animal) throw Error('Abstracta');
```

93.

```js
animales.forEach(a => a.hacerSonido());
```

94.

```js
class Vehiculo {
  constructor(motor) {
    this.motor = motor;
  }
}
```

95.

```js
// Constructor se ejecuta antes que métodos
```

96.

```js
async cargar() {
  const datos = await fetch('...');
}
```

97.

```js
otro.metodoDe(this);
```

98.

```js
this.lista = [];
agregar(x) { this.lista.push(x); }
```

99.

```js
const copia = { ...instancia };
```

100.

```js
Object.defineProperty(this, 'id', {
  value: 1,
  writable: false
});
```
