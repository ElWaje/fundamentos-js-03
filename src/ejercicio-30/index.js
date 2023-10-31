// Escribe tu código aquí:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumaTotal = numeros.reduce(function(acumulador, numeroActual) {
    return acumulador + numeroActual;
}, 0);

console.log(sumaTotal);