// src/ejercicio_09.js

let persona = {
  nombre: "juliana",
  edad: 25,
  direccion: {
    ciudad: "Medellín",
    pais: "Colombia"
  },
  contacto: {
    telefono: "123456789",
    email: "juliana@gmail.com"
  }
};

let { nombre, edad } = persona;
console.log("Nombre:", nombre, "| Edad:", edad);

let { nombre: nombrePersona, edad: años } = persona;
console.log("Renombrado -> Nombre:", nombrePersona, "| Años:", años);

let { profesion = "Estudiante" } = persona;
console.log("Profesión (valor por defecto):", profesion);

let { direccion: { ciudad, pais }, contacto: { email } } = persona;
console.log(" Ciudad:", ciudad, "| País:", pais, "| Email:", email);

let { nombre: n, ...resto } = persona;
console.log("🪣 Nombre separado:", n);
console.log("Resto del objeto:", resto);
