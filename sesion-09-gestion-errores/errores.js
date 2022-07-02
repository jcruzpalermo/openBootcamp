const miFuncion = val => {
    if (typeof val === "number") {
    return 2 * val
    }
    //return false;
    throw new Error("El valor debe ser de tipo numerico")
}
//const elDoble = miFuncion("ala");

const numero = 8;
try {
    //Codigo que puede fallar
    console.log("Esta ejecutandose bien");
    const doble = miFuncion(numero);
    console.log(doble);
} catch(e) {
    // En caso de que falle, quiero que ejecutes esto
    console.error("ERROR");
    console.error(`el valor de e es: ${e}`);
} finally {
    console.log("Esto se va a ejecutar tanto si se produce un error como si no existe ninguno");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
