// src/ejercicio_10.js

let producto = {
  id: 1,
  nombre: "Lapiz",
  precio: 2500,
  categoria: "Papeleria",
  stock: 5
};

let claves = Object.keys(producto);
console.log("Claves:", claves);

let valores = Object.values(producto);
console.log("Valores:", valores);

let pares = Object.entries(producto);
console.log("Pares clave-valor:", pares);

console.log("\nIterando con forEach():");
Object.entries(producto).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
