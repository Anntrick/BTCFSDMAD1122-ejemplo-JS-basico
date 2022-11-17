
/* Ejercicio 10 JS vanilla I */
//preguntamos la cantidad de ventas que se han hecho
let numeroVentas = prompt("¿Cuantas ventas has hecho?");

//Inicializamos una variable para sumar el total de cada venta
let suma = 0;

//Recorremos cada una de las ventas en un bucle
//la condición en este caso será que el contador del bucle sea menor o igual al número de ventas
for(let i = 1; i <= numeroVentas; i++){
    //Por cada venta hecha, preguntamos el total
    let total = parseFloat(prompt("Dime el total de la venta " + i));
    //sumamos el total que nos han dado a la variable venta
    suma += total;
    //suma = suma + total;
}

//Una vez que hemos terminado de sumar las ventas, mostramos el resultado
console.log("Has ganado un total de: " + suma);

