// Como unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2)
console.log(lista3);

// como unir dos listas con el factor de propagacion
console.log(...lista3);

const lista4 = [...lista1, ...lista2] //los elementos de las listas en una sola lista
console.log(lista4);

//error ! mal entendido de concepto del factor de propagacion
const lista5 = [lista1, lista2] //dos listas dentro de una lista
console.log(lista5);

