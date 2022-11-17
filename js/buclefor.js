
/* BUCLE FOR */
//Otra estructura que nos permite hacer bucles, en este caso le pasamos 3 parámetros:
//  1º -> inicializamos una variable (let i = 0), se suele llamar i pero podemos llamarla como queramos
//  2º -> la condición de salida del bucle (i <= rep), como en los while
//  3º -> aumentamos o reducimos la variable creada (i++), va a funcionar como el cont que hemos usado en los while

let num = prompt("Dime un numero")
let rep = prompt("Cuantas veces lo repetimos?")
for(let i = 0; i <= rep; i++){
    if(num == 5) {
        break;
    }
    
    console.log(num + " X " + i + " = " + num * i);
}

