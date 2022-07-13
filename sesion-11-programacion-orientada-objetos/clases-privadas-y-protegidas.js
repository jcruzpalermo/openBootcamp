class Persona {
    // Private => #
    #nombre
    #edad
    // Para que sean atributos privados, solo desde dentro de la clase se puede acceder
    // protected => _   Solo se puede acceder desde la clase o clases descendientes
    _isDeveloper = true;
    constructor(nombre, edad,) {
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
    obtenNombre() { // Funcion getter => nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }
    #obtenNombre() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    };

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
};

const persona = new Persona("Gorka", 70);
//console.log(persona);
//console.log(persona.nombre);
// persona.saludo()
// console.log(persona.obtenNombre());
// persona.nombre = "Adios"
// console.log(persona);
// console.log(persona._isDeveloper);

// Getter => Metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad);
// Setter => metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// quiero cambiar la edad de la persona
persona.setEdad(34)
console.log(persona.getEdad());