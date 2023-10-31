let cadena = "Hola, ¿cómo estás? Bienvenido al mundo de JavaScript.";
let subcadena = "mundo";

let posicion = cadena.indexOf(subcadena);

if (posicion !== -1) {
    console.log(`La subcadena "${subcadena}" se encuentra en la posición ${posicion} de la cadena.`);
} else {
    console.log(`La subcadena "${subcadena}" no se encuentra en la cadena.`);
}
