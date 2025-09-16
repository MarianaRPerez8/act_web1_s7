// src/ejercicio_01.js

let inventario = [
  { id: 1, nombre: "Lapiz", precio: 2500, categoria: "Papeleria", stock: 5 },
  { id: 2, nombre: "Borrador", precio: 50, categoria: "Papeleria", stock: 20 },
  { id: 3, nombre: "Sacapuntas", precio: 120, categoria: "Papeleria", stock: 15 },
  { id: 4, nombre: "Cuaderno", precio: 1800, categoria: "Escolar", stock: 8 },
  { id: 5, nombre: "Libro", precio: 200, categoria: "Lectura", stock: 10 }
];

console.log(" Inventario de Productos:");
for (let i = 0; i < inventario.length; i++) {
  let producto = inventario[i];
  console.log(
    "ID: " + producto.id +
    " | Nombre: " + producto.nombre +
    " | Precio: $" + producto.precio +
    " | Categoría: " + producto.categoria +
    " | Stock: " + producto.stock
  );
}

let totalProductos = 0;
for (let i = 0; i < inventario.length; i++) {
  totalProductos += inventario[i].stock;
}

let valorTotal = 0;
for (let i = 0; i < inventario.length; i++) {
  valorTotal += inventario[i].precio * inventario[i].stock;
}

console.log("\n Resumen del Inventario:");
console.log("Total de productos en inventario: " + totalProductos);
console.log("Valor total del inventario: $" + valorTotal);
