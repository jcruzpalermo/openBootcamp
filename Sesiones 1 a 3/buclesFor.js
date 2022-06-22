//Bucles for
// for (inicializacion; condicion; actualizacion){
//     //Esto es el bucle
// }
//Es todo lo mismo
// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i = i++ ){
    console.log(i)
};

let lista = [1,4,6,2,3,7,10,12];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
}
//for of
for (const valor of lista) {
    console.log(valor) 
}

//Estructura forEach

lista.forEach(valor => {
    console.log(valor)
});

//For in

let persona = {
    nombre: "juan",
    apellido: "Palermo",
    edad: 25,
    jugador: true
}
console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}