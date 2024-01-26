let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroJugador').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    limpiarCaja();
    intentos++;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }
    else if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }       //Si el número generado está incluido en la lista
    else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado
    }
}


function limpiarCaja() {
    document.querySelector('#numeroJugador').value = '';
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto')
    asignarTextoElemento('P', `Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

// let listaGenerica = [];
// let lenguajesDeProgramacion = ['javaScript,', 'C', 'C++', 'Kotlin', 'Python'];
// let listaNumeros = [2, 4, 6]
// let listaNumeros2 = [3, 2, 1,]

// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// function mostrarElementos() {
//     console.log(lenguajesDeProgramacion)
// }
// mostrarElementos();

// function mostrarListaInversa() {
//     console.log(lenguajesDeProgramacion.reverse());
// }

// mostrarListaInversa();

// function promedioLista(lista) {
//     let suma = 0;
//     for (let i in lista) {
//         suma += lista[i];
//     }
//     return suma / lista.length;
// }

// console.log(`El promedio de la lista de números ${listaNumeros} es ${promedioLista(listaNumeros)} `)

// function sumaElementos(lista) {
//     let suma = 0;
//     for (let i in lista) {
//         suma += lista[i]
//     }
//     return suma
// }

// console.log(`La suma de los elementos es ${sumaElementos(listaNumeros)}`);


// Primera version del código


// function encontrarElemento(elemento, lista) {
//     let encontrado = false;
//     for (let i = 0; i < lista.length; i++) {
//         if (elemento === lista[i]) {
//             console.log(i);
//             console.log(`La posición en la que se encuentra ${elemento} en la lista, es la número ${i}`)
//             encontrado = true;
//             break;
//         }
//     }
//     if (!encontrado) {
//         console.log('-1')
//     }


// }

// encontrarElemento(4, listaNumeros)

// function encontrarElemento(elemento, lista) {
//     const posicion = lista.indexOf(elemento);
//     if (posicion !== -1) {
//         console.log(`El elemento ${elemento} se encuentra en la posición ${posicion} de la lista.`);
//     } else {
//         console.log((lista.indexOf(elemento)));
//     }
// }

// encontrarElemento(7, listaNumeros);


// PRIMERA VERSIÓN DEL CÓDIGO


// function sumaListas(lista1, lista2) {
//     let arraySuma = [];
//     if (lista1.length !== lista2.length) {
//         console.log('Las listas no son del mismo tamaño')
//     }

//     else {
//         for (let i = 0; i < lista1.length; i++) {
//             for (let j = 0; j < lista2.length; j++) {
//                 if (i == j) {
//                     arraySuma.push(lista1[i] + lista2[j])
//                 }

//             }

//         }
//         console.log(arraySuma)
//     }

// }

// function sumaListas(lista1, lista2) {
//     if (lista1.length !== lista2.length) {
//         console.log('Las listas no son del mismo tamaño');
//         return 0;
//     }

//     let arraySuma = [];

//     for (let i = 0; i < lista1.length; i++) {
//         arraySuma.push(lista1[i] + lista2[i]);
//     }

//     console.log(`La nueva lista generada es ${arraySuma}`);
// }
// sumaListas(listaNumeros, listaNumeros2);

// function cuadradoNumeros(lista) {
//     let nuevaLista = [];
//     for (let i = 0; i < lista.length; i++) {
//         nuevaLista.push(lista[i] * lista[i]);
//     }
//     console.log(nuevaLista)
// }
// cuadradoNumeros(listaNumeros);




