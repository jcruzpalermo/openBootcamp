// Trabajando con fechas
const fecha = new Date() //Fecha de hoy

// Atencion los meses inicializan en 0 (0=enero, 11=Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)

const fecha3 = new Date(0) // Milisegundos
console.log(fecha3);

const fecha4 = new Date("october 13, 1979")
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha5);

console.log(fecha2 === fecha5); // Error - No se puede comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); // Forma de comparar la igualdad entre fechas

// Obtener el dia, el mes y el año de una fecha
// Obtener el dia .getDate()
console.log(fecha2.getDate());
// Obtener el mes .getMonth()
console.log(fecha2.getMonth() + 1);

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());

// Mostrar una fecha en un string .toLocaleDateString()
console.log(fecha2.toLocaleDateString("en-GB"));