const fecha = new Date();
const miNacimiento = new Date("July 20, 1996");
const tarde = fecha > miNacimiento;
const dia = miNacimiento.getDate();
console.log(dia);
const mes = miNacimiento.getMonth() + 1;
const año = miNacimiento.getFullYear();