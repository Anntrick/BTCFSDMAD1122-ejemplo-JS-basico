console.log("Hola clase!!!")
//Comentario de una linea

/* 
    Comentarios de varias
    líneas

*/

/* OPERADORES ARITMÉTICOS, TIPOS Y UNDEFINED */
let num1 = "4"; //let son variables, pueden cambiar
let num2 = 2;
const mult = 5; //const son constantes, nunca cambian

num1 *= mult; //num1 = num1 * mult
console.log(num1);
num1--; //num1 = num1 - 1
console.log(num1);
console.log(parseInt(num1) + num2); //parseInt() permite pasar la variable a integer
console.log(parseInt(num1) + num5); // da undefined, no existe num5

console.log(num1%num2); //devuelve el resultado de la división



/* OPERADORES LÓGICOS */
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log((2+2==4) && (var1))

if(Number.isInteger(num1) && num1%2 == 0 ){
    //Entra aquí si la pregunta devuelve true
} else {
    //Entra aquí si la pregunta devuelve false
}



/* CALCULADORA */
let num3 = 5;
let num4 = 6;
console.log(num3 + num4);
console.log(num3 - num4);
console.log(num3 * num4);
console.log(num3 / num4);


/* ESTRUCTURAS DE CONTROL - CONDICIONALES */
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

