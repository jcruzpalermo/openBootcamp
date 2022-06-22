// Metodos de cadena de texto (parte2)
let input = "Cancer"
let db = "cancer"

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLocaleLowerCase());
console.log(input.toLocaleLowerCase() === db.toLocaleLowerCase());

//Formas de concatenar dos cadenas de caracteres

let str_1 = "Soy la primera cadena. "
let str_2 = "Soy la segunda cadena"

console.log(str_1.concat("", str_2,));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final

let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length);
// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4" // ["H", "o", "l"...]

console.log(str_4.charAt(0));
console.log(str_4[0]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Juan y me gusta el futbol. Juan es muy bueno"
console.log(str_5.indexOf("Juan"));
console.log(str_5.charAt(9));
console.log(str_5.indexOf("chango"));
console.log(str_5.lastIndexOf("Juan"));
