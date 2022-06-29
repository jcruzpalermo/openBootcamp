const datos = {
    nombre: "Juan Cruz",
    apellido: "Palermo",
    edad: 25,
    altura: 1.75,
    eresDesarrollador: true
};
let edad = datos.edad;
console.log(edad);

const lista = [
    {...datos},
    {nombre: "Laureano",
    apellido: "Disipio",
    edad: 25,
    altura: 1.55,
    eresDesarrollador: false
},
    { nombre: "Gisella",
    apellido: "Rato",
    edad: 33,
    altura: 1.73,
    eresDesarrollador: false
}
];

const nuevaLista = lista.sort((a, b) => b.edad - a.edad);
console.log(nuevaLista);
