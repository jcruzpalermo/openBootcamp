//Metodos mas utilizadoscon cadenas de caracteres
//como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// obtener partes de cadenas de caracteres 
// slice() substring() substr()
let slice_str = str.slice(0, 10)
console.log(slice_str);

let substring_str = str.substring(0, 10)
console.log(substring_str);

let substr_str = str.substr(5, 10)
console.log(substr_str);//ya no se usa mucho

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es juan"
console.log(cadena);

cadena.replace("juan", "jorge")
console.log(cadena.replace("juan","jorge"));

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"
console.log(texto_largo.replace("los", "cinco"));
//Replace actua sobre la primer instancia

//Al utilizar la expresion regular /g (global), reemplaza todas las intancias
console.log(texto_largo.replace(/los/g, "cinco"));


