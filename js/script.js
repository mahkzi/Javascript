// carrito simple y simulado
//Primero deberíamos poder darle la opción al usuario de poder ver los productos, el carrito o salir.
/*
debería haberun alert para dar la bienvenida al usuario. Luego de darle la bienvenida, mostrarle los productos y la opción de ver el carrito.
*/
let condicion = true;
let carrito = []
const mostrarCarrito = function () {
    if (carrito.length === 0) {
        alert("Su carrito esta vacío")
    } else {
        console.log(carrito)
    }
}
const agregarAlCarrito = function (producto) {
    carrito.push(producto)
}
do {
    alert("Bienvenido a nuestra página")
    opciones = parseInt(prompt("Pulse 1 para ver los productos. Pulse 2 para ver su carrito. Pulse 0 para salir"))
    switch (opciones) {
        case 1:
            alert("Lo que seleccione se verá en su carrito")
            productos = parseInt(prompt("1 para los pantalones. 2 para las remeras. 3 para el buzo"))
            if (productos === 1) {
                alert("Usted a comprado un pantalón.");
                agregarAlCarrito("pantalon");
            } else if (producto === 2) {
                alert("Usted a comprado una remera.");
                agregarAlCarrito("remera");
            } else if (producto === 3) {
                alert("Usted a comprado un buzo.");
                agregarAlCarrito("buzo");
            } else {
                alert("Por favor, seleccione una de las opciones disponibles.");
            }
            break;
        case 2:
            mostrarCarrito();
            break;
        case 0:
            alert("Que tenga un buen día")
            condicion = false
            break;
        default:
            alert("Seleccione una opcion válida")
            break;
    }
} while (condicion == true);

// arrayA = [1, 2, 3, 4]

// console.log(arrayA)
// alert(arrayA)