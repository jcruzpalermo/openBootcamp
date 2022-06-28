let compra = ["gaseosa", "Lays", "Jabon", "shampoo", "Fruta" ];
compra.push("Aceite de Girasol");
compra.pop();
let pelis = [
    {titulo: "Toy story", director: "John Lasseter", fecha: 1995},
    {titulo: "Monsters, Inc.", director: "Pete Docter", fecha: 2001},
    {titulo: "Iron Man", director: "Jon Favreau", fecha: 2008}
];
const post2010 = pelis.filter(obj => obj.fecha > 2010);
console.log(post2010);

const directores = pelis.map(obj => obj.director);
console.log(directores);
const titulos = pelis.map(obj => obj.titulo);
console.log(titulos);

const conca = titulos.concat(directores);
console.log(conca);

const concaPropa = [...titulos, ...directores];
console.log(concaPropa);
