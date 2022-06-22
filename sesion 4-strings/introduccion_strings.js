//strings o cadena de caracteres
//strings estaticos
let str = "Hola soy un texto";
let str_comillas = "El otro dia me dijo \"saca la basura\""
let str_comillas_simples = 'el otro dia me dijo "saca la basura"'
let str_comillas_dobles = "el otro dia me dijo 'saca la basura'"
console.log(str_comillas_dobles);
console.log(str);

//comillas invertidas

let str_invertidas = `Hola esto es un string con comillas invertidas`

let nombre = "jorge"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo);

//Plantillas HTML

let plantilla = 
`<html>
    <h1>Pagina web de ${nombre}</h1>
    <p> Este es un parrafo </p>
</html>
`;
console.log(plantilla);

// introduccion de variables en HTML

let libros = ["empieza el porque", "el monje", "el poder del ahora"]