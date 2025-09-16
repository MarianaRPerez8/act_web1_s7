// src/ejercicio_02.js

let inventario = [
  { id: 1, nombre: "Lápiz", precio: 2500, categoria: "Papelería", stock: 5 },
  { id: 2, nombre: "Borrador", precio: 50, categoria: "Papelería", stock: 20 },
  { id: 3, nombre: "Sacapuntas", precio: 120, categoria: "Papelería", stock: 15 },
  { id: 4, nombre: "Cuaderno", precio: 1800, categoria: "Escolar", stock: 8 },
  { id: 5, nombre: "Libro", precio: 200, categoria: "Lectura", stock: 10 }
];

let electronicos = inventario.filter(producto => producto.categoria === "Electrónicos");

let pocoStock = inventario.filter(producto => producto.stock < 10);

let caros = inventario.filter(producto => producto.precio > 500);

console.log(" Productos de la categoría 'Electrónicos':");
console.log(electronicos);

console.log("\n Productos con stock menor a 10:");
console.log(pocoStock);

console.log("\n Productos con precio mayor a $500:");
console.log(caros);
