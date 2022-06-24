// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

let str = new String("Hola soy un string")
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);

// Numeros Hexadecimales (Base 16)
let numHex = "0x3a5b7" //Todos arrancan con 0x
console.log(parseInt(numHex, 16));

// Como convertir los strings a valores numericos con number, parseInt y ParseFloat
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2);//Error de concepto, Lo concatena

console.log(Number(numero) + num2); //Number convierte un string en un numero

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

// Obtener los valores maximo y minimo en js
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2 ** 5);