const nombre = "Juan Cruz";
const apellido = "Palermo";
const estudiante = nombre.concat("").concat(apellido);
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
let estudianteTodas = estudiante.length;
let estudiantePrimera = nombre.substring(0,1);
let estudianteUltima = apellido.substring(apellido.length - 1, apellido.length);
const estudianteSinEspacios = estudiante.replace(" ", "");
let esta = estudiante.includes(nombre)
console.log(esta);