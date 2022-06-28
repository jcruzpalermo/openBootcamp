// Como trabajar con listas(Arrays, arreglos, vectores, es todo lo mismo)
let var1 = 45;
let array = [1, "hola", false, { id: 5}, null, undefined, var1];
console.log(array);
let Arrays = new Array

//Acceder a los valores de un array a traves de su posicion
// array[indice] => 0, 1, 2, 3,...
console.log(array[0]);
console.log(array[1]);

// Metodos para introducir nuevos valores en los arrays
// .push() .unshift() => Mutan el valor de nuestro array
// Valores al final => push
array.push("final", 100,);
console.log(array);
//Valores al principio => unshift()
array.unshift("inicio", 87);
console.log(array);

// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() =>Mutan el valor del array

// Valores al final => .pop()
const array2 = [1, 3, "Hola", false]
array2.pop();
console.log(array2);
// Valores al principio => .shift()
array2.shift()
console.log(array2);

// metodos para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];
// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 2)
console.log(array3);

// Añadir valores .splice(indice,0 , valores)
array3.splice(2, 0, "Hola")
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3);