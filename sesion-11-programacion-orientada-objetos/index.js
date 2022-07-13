const persona = {
    nombre: "Juan",
    edad: 25,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola")
    }
}

//console.log(persona);
persona.saludo();

const otra_persona = {
    nombre: "Carlos",
    edad: 16,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola")
    }
}

otra_persona.saludo();
//Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // = nombre: nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hello")
        }
    }
}
const nueva_persona = creaPersona("Jorge", 23, true)
console.log(nueva_persona);