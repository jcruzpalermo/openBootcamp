//Pricipales operaciones aritmeticas
let a = 3.5;
let b = 4.8;
//Suma (+)
console.log(a + b);
//resta (-)
console.log(a-b);
//Multiplicacion (*)
console.log(a * b);
//Division (/)
console.log(a/b);

//Representacion de los numeros en cadenas de texto
console.log(typeof a );
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);
//Redondear numeros decimales
let c = 3.3;
let d = c * 3;
console.log(d);
console.log(typeof d);
// .tofixed() - limitar el numero de decimales al valor que le pasemos
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 1839.123456789;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));
// .toPrecision(x) - Limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));

