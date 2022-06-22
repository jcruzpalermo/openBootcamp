// Metodos de cadena de texto (parte3)
// regexr.com Como se utilizan las expresiones regulares

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"

console.log(texto_largo.match(/no/g));
//Existe la palabra dentro del texto?
console.log(texto_largo.includes("mono"));

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));
//Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("arboles"));