let nombre = "Juan Cruz"
let apellido = "Palermo"
let objeto = {
    nombre: nombre,
    apellido: apellido
}

//sessionStorage.setItem("objeto", JSON.stringify(objeto))
//localStorage.setItem("objeto", JSON.stringify(objeto))

let now = new Date()
//document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(now.getTime() + 2 * 60000).toUTCString()}`

