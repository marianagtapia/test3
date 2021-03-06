//Calculadora con callback: suma y resta
let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;

let calculadora = function (n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calculadora(7, 5, resta));
console.log(calculadora(7, 5, suma));
//Calculadora usando la misma función pero haciendo el callback inline
console.log(calculadora(7, 5, function (n1, n2) { return n1 - n2 }));
console.log(calculadora(7, 5, function (n1, n2) { return n1 + n2 }));


//Sort normal en un objeto
let productos = [];
productos.push({ nombre: 'Remera', precio: 100 });
productos.push({ nombre: 'Pantalon', precio: 800 });
productos.push({ nombre: 'Camisa', precio: 300 });
productos.sort();
console.log(productos);

//Sort con callback propio para generar orden en la propiedad nombre
let productos2 = [];
productos2.push({ nombre: 'Remera', precio: 100 });
productos2.push({ nombre: 'Pantalon', precio: 800 });
productos2.push({ nombre: 'Camisa', precio: 300 });
productos2.sort(function (valor1, valor2) {
    if (valor1.nombre < valor2.nombre) {
        return -1;
    } else {
        return 1;
    }
});
console.log(productos2);

//Sort con callback propio para generar orden en la propiedad precio
let productos3 = [];
productos3.push({ nombre: 'Remera', precio: 100 });
productos3.push({ nombre: 'Pantalon', precio: 800 });
productos3.push({ nombre: 'Camisa', precio: 300 });
productos3.sort(function (valor1, valor2) {
    if (valor1.precio < valor2.precio) {
        return -1;
    } else {
        return 1;
    }
});
console.log(productos3);


function uno() {
    dos();
}
function dos() {
    console.log("Hola");
}

uno();

setTimeout(function () {
    console.log("me tarde 2s");
}, 2000)

setTimeout(function () {
    console.log("me tarde 5s");
}, 5000)
console.log('Ejecutado');

function primero(valor) {
    return segundo(valor + 10);
}

function segundo(valor) {
    return tercero(valor + 10);
}

function tercero(valor) {
    return valor + 10;
}

primero(10);