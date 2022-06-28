// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["La Plata", "Quiroga", "Tres Lomas", "Avellaneda", "Lanus"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val);
// .map
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray);

// .filter()

const listaObjetos = [
    { nombre: "Jorge", edad: 35},
    { nombre: "Juan", edad: 34},
    { nombre: "Julian", edad: 28},
    {nombre: "lucia", edad: 3},
    {nombre: "Amalia", edad: 27}
]

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30){
//         return true
//     } else {
//         return false
//     }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Jorge") //Desigualdad
console.log(nuevaLista);

// .Reduce()

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) =>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma);
