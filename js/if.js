
/* ESTRUCTURAS DE CONTROL - CONDICIONALES */

let num3 = prompt("Dime un numero")
let num4 = prompt("Dime otro numero")

//preguntamos si las variables son números
if (Number.isInteger(num3) && Number.isInteger(num4)) {
    //Si son números, entonces los comparamos
    if (num3 == num4) {
        //si es true
        console.log("son iguales");
    } else if (num3 > num4) {
        //si es true
        console.log("Num3 es mayor");
    } else if (num4 > num3) {
        console.log("Num4 es mayor");
    }
} 
