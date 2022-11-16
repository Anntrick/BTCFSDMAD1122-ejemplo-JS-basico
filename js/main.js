// console.log("Hola clase!!!")
// //Comentario de una linea

// /* 
//     Comentarios de varias
//     líneas

// */

// /* OPERADORES ARITMÉTICOS, TIPOS Y UNDEFINED */
// let num1 = "4"; //let son variables, pueden cambiar
// let num2 = 2;
// const mult = 5; //const son constantes, nunca cambian

// num1 *= mult; //num1 = num1 * mult
// console.log(num1);
// num1--; //num1 = num1 - 1
// console.log(num1);
// console.log(parseInt(num1) + num2); //parseInt() permite pasar la variable a integer
// console.log(parseInt(num1) + num5); // da undefined, no existe num5

// console.log(num1%num2); //devuelve el resultado de la división



// /* OPERADORES LÓGICOS */
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

// console.log((2+2==4) && (var1))

// if(Number.isInteger(num1) && num1%2 == 0 ){
//     //Entra aquí si la pregunta devuelve true
// } else {
//     //Entra aquí si la pregunta devuelve false
// }



// /* CALCULADORA */
// let num3 = parseFloat(prompt("Dime el primer numero"));
// let num4 = parseFloat(prompt("Dime el segundo numero"));

// console.log(num3 + num4);
// console.log(num3 - num4);
// console.log(num3 * num4);
// console.log(num3 / num4);


// /* ESTRUCTURAS DE CONTROL - CONDICIONALES */
// //preguntamos si las variables son números
// if (Number.isInteger(num3) && Number.isInteger(num4)) {
//     //Si son números, entonces los comparamos
//     if (num3 == num4) {
//         //si es true
//         console.log("son iguales");
//     } else if (num3 > num4) {
//         //si es true
//         console.log("Num3 es mayor");
//     } else if (num4 > num3) {
//         console.log("Num4 es mayor");
//     }
// } 

// /* SWITCH - ALTERNATIVA A IFS ANIDADOS */
// switch(num3) {
//     //podemos comparar un valor con la variable que pasamos arriba
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("El numero esta entre 0 y 4");
//         //siempre acabamos el case con un break
//         break;
//     case 5:
//         console.log("el número es 5");
//         break;
//     //al final podemos usar default para controlar cualquier valor que no controlemos antes.
//     //Es el equivalente al else
//     default:   
//         console.log("El numero no es valido");
//         break
// }

//let nota = parseFloat(prompt("dime una nota"))
//podemos poner las condiciones como en los if, entre (), 
//siempre que pasemos true como parámetro del switch
// switch(true) {
//     case ( nota < 4):
//         console.log("insu");
//         break;

//     case (nota < 6):
//         console.log("sufi");
//         break;
//     default: 
//         console.log("otro");
//         break;
// }

/* OPERADOR TERNARIO */
// let num = prompt("Dime un numero");
// let esPar = (num%2 == 0)? "Es par" : "Es impar";
// console.log(esPar);

// if(num%2 == 0){
//     console.log("Es par");
// } else {
//     console.log("Es impar");
// }


/* BUCLES */

/* BUCLE WHILE -  */
// let num = prompt("Dime un numero");
// let cont = 0;

// //Nos va a repetir la acción de dentro siempre que se cumpla la condición
// while(cont <= 10) {
//     //formas de concatenar texto en los console.log()
//     //con la coma solo podemos en console.log y una sola vez
//     //console.log("",num * cont);
//     //con el + podemos concatenar en cualquier sitio y todas las veces que queramos
//     console.log(num + " X " + cont + " = " + num * cont);
//     cont++;
// }


/* BUCLE DO-WHILE */
// //Igual que el bucle while, pero la primera vez va a realizar la acción sin comprobar la condición
// do {
//     console.log(num + " X " + cont + " = " + num * cont);
//     cont++;
// } while (cont <= 10)


/* BUCLE FOR */
// //Otra estructura que nos permite hacer bucles, en este caso le pasamos 3 parámetros:
// //  1º -> inicializamos una variable (let i = 0), se suele llamar i pero podemos llamarla como queramos
// //  2º -> la condición de salida del bucle (i <= rep), como en los while
// //  3º -> aumentamos o reducimos la variable creada (i++), va a funcionar como el cont que hemos usado en los while

// let rep = prompt("Cuantas veces lo repetimos?")
// for(let i = 0; i <= rep; i++){
//     console.log(num + " X " + i + " = " + num * i);
// }