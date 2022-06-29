// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "Hola", {id: 5}]

const miSet = new Set(array) //Conjunto no ordenado de elementos unicos. No almacena valores repetidos
console.log(array);
console.log(miSet);

// .add()
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);

// .delete()
miSet.delete("Hola");
console.log(miSet);

// .clear()
/*miSet.clear()
console.log(miSet);*/

// .has()
//console.log(array.includes(2));
console.log(miSet.has(40));

// .size
console.log(miSet.size); //Valores unicos

miSet.forEach(valor => {
    console.log(valor);
})

const it_miSet = miSet.values()
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);