// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];
//Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
};
// Forma ES6 (Mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 9]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

// Busqueda de un valor dentro de una lista .find()
//Quiero encontrar el elemento 90
const variable = array.find(valor =>{
    if(valor === 90){
        return true
    }
})
console.log(variable);

const listaObjetos = [
    { nombre: "Jorge", edad: 35},
    { nombre: "Juan", edad: 34},
    { nombre: "Julian", edad: 28},
    {nombre: "lucia", edad: 3},
    {nombre: "Amalia", edad: 27}
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Jorge") {
//         return true
//     }
// }); 
const objeto = listaObjetos.find(o => o.nombre === "Juan")
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Juan")
console.log(edad);