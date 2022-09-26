/*
preguntar al usuario su edad

si tiene entre 0 y 17 el dato de salida es "eres un ninio"
si tiene entre 18 y 40 - "sos un joven"
y si tiene mas de 40 - "trajiste tu baston?"
*/

alert("Bienvenido a la tienda de ropa Online");

let seleccion;

messageSeleccion();

function messageSeleccion(){
    seleccion = prompt("Actualmente contamos con estas prendas: 'Pantalon, Polo, Blusa, Vestido' selecciona una");
}

let cantidad;
let precio;

switch(seleccion){

    case "Pantalon":
        cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
        precio = 50;
        montoTotal = cantidad * precio;
        break;
    case "Vestido":
         cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
         precio = 80;
         montoTotal = cantidad * precio;
         break;        
    case "Polo":
         cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
         precio = 120;
         montoTotal = cantidad * precio;
         break;    
    case "Blusa":
         cantidad = parseInt(prompt("Ingresa la cantidad que deseas"));
         precio = 90;
         montoTotal = cantidad * precio;
         break;    
    default:
        alert("No seleccionaste la prenda correcta")
        messageSeleccion();
}

alert(`El monto total a pagar es ${montoTotal}`)

let estado;

alert(estado = (prompt("Deseas seguir comprando, Si o No")));
if (estado == "Si"){
    messageSeleccion()
} else alert("Gracias por su compra");






// let edad = parseInt(prompt("cual es tu edad"));
// if(edad <= 17){
//     alert("eres un niño");
// }
// else if(edad <=40){
//     alert("sos un joven");
// }
// else alert("trajiste tu baston");


// let edad = parseInt(prompt("Ingresar su edad"));
// console.log('ver edad', edad);
// let message = (edad <= 17) ? 'eres un niño': (edad <= 40 ) ? 'sos un joven' : 'trajiste tu baston';
// alert(message);
// console.log('ver message', message);

