//ejercicio ciclo for of

let peliculas = [

    {
        nombre: "The shinning",
        raiting: "5 estrellas",
        loHasVisto: "Viste",
    }, {
        nombre: "Beetlejuice",
        raiting: "3 estrellas",
        loHasVisto: "No viste",
    }, {
        nombre: "Jo Jo Rabitt",
        raiting: "5 estrellas",
        loHasVisto: "Viste",
    }, {
        nombre: "Ponyo",
        raiting: "4 estrellas",
        loHasVisto: "No viste",
    },

]

for (const pelicula of peliculas) {
    console.log(pelicula.loHasVisto + " " + pelicula.nombre + " - " + pelicula.raiting)
}

//Ejercicio con funcion que devuelve un array

let numero = parseInt(prompt("Ingresa la cantidad de veces que se repetira el mensaje: "));
let palabra = prompt("Ingresa un mensaje o palabra");

function arregloDeObjetos(numero, palabra) {
    let arreglo = [];

    for (let i = 0; i < numero; i++) {
        arreglo[i] = {
            [palabra]: i
        };
    }
    console.log(arreglo);
}

arregloDeObjetos(numero, palabra)