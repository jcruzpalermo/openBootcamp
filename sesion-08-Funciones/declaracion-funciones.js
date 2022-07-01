// Que son las funciones, como se declaran y como se utilizan

//saludar(2, "adios", false)
//saludar("Juan")
// function saludar(parametro_1, paramentro_2, parametro_3) {
//     console.log("Hola");
// }
const nom = "Jorge"

saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
////////

let nombre_2 = "Juan";
console.log(nombre_2);
despedir(nombre_2);
console.log(nombre_2);

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Hola ${nombre}`);
}
////

let persona = {nombre:"Juan", apellido: "Gonzalez"};

saludarPersona(persona)
console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

/////

function imprimeNumero(numero = 7) { // Parametros por defecto
    console.log(numero);
}

imprimeNumero()
/////

function imprimir(...parametros) {
    console.log(parametros);
}

imprimir(1,3,9,2,"Hola",{id: 9})

/////

function suma(...nums) {
    return nums.reduce((a,b) => a + b); //Si quiero que la funcion me devuelva algo debo ponerle return
}
const s = suma(1,2,3,4,10)
console.log(s);
//////

//Ambito de una funcion
let variable = "Hola"
function multiplicar(a = 0, b = 0) {
    console.log(variable);
    let variable_interna = "adios"
    return a * b
}
console.log(multiplicar (4, 9));
console.log(variable_interna); //No se puede acceder desde afuera a una variable declarada en una funcion