/* BUCLE DO-WHILE */
//Igual que el bucle while, pero la primera vez va a realizar la acción sin comprobar la condición
let num = prompt("Dime un número")
let cont = 0

do {
    console.log(num + " X " + cont + " = " + num * cont);
    cont++;
} while (cont <= 10)
