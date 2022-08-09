const boton = document.querySelector("#btn")

console.log(boton);

boton.addEventListener("click", () => {
    //alert("Se ha hecho click")
    //confirm("Estas de acuerdo?") && console.log("ok");
    //Mejor manera
    //confirm("Estas de acuerdo?") 
    //? console.log("ok") 
    //: console.log("No!");

    const respuesta = confirm("¿Seguro?")
    if (respuesta){
        console.log("Estas de acuerdo");
    }else {
        console.log("No estas de acuerdo");
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cual es tu nombre?")
    if (nombre) {
        console.log("Tu nombre es " + nombre);
    }else {
        console.log(" No has introducido nada");
    }
})

const lista = [{
    nombre: "Juan",
    edad: 26
}, {
    nombre: "Julen",
    edad: 21
}, {
    nombre: "Anaia",
    edad: 30
}]

//console.log(lista);
console.table(lista)