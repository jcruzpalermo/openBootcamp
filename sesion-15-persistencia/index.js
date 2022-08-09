//localStorage.setItem("nombre", "Juan")
//localStorage.setItem("nombre", "Flor")

//console.log(localStorage.getItem("nombre"));

localStorage.setItem("persona", JSON.stringify({ nombre: "Juan", edad: 26 }))

//console.log(JSON.parse(localStorage.setItem("persona")))

// JSON.stringify => Convierte un objeto/array en string
// JSON.parse => convierte un objeto/array convertido a traves de stringify en un objeto de javascript

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Juan")

/* Cookies */

document.cookie = "nombreCookie=JuanCookie"

document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie);