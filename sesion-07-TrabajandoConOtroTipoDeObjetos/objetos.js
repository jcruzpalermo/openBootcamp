// Trabajando con objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Palermo",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj["4-juegos"]);
console.log(obj.id);

const prop = "isDeveloper"
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Marcos"
console.log(obj.nombre);

console.log(obj.nombre);

let val1 = 4;
let val2 = val1;
val2 = 6;
console.log(val1);
console.log(val2);

//Dupplicar objeto

const obj3 = {...obj}
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Diego";
console.log(obj.nombre);
console.log(obj3.nombre);

///////
// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", año: 1939},
    {titulo: "Titanic", año: 1997},
    {titulo: "Moana", año: 2016},
    {titulo: "El efecto mariposa", año: 2004},
    {titulo: "TED", año: 2012}
]
console.log(listaPeliculas);

// .sort() => muta el valor del array original

listaPeliculas.sort((a, b) => a.año - b.año) // Ordena en base a una propiedad 

console.log(listaPeliculas);