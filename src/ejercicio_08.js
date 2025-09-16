// src/ejercicio_08.js

let lenguajes = ["JavaScript", "Python", "Java", "C++", "Go"];
console.log(" Lenguajes:", lenguajes);

let [primero, segundo, tercero] = lenguajes;
console.log("\n Primeros 3 lenguajes:", primero, segundo, tercero);

let [inicio, , , , ultimo] = lenguajes;
console.log("\n Primero y último:", inicio, ultimo);

let [head, ...resto] = lenguajes;
console.log("\n Primero:", head);
console.log(" Resto:", resto);

let a = "Rojo";
let b = "Azul";
console.log("\n Antes del intercambio: a =", a, ", b =", b);

[a, b] = [b, a];
console.log(" Después del interca");
