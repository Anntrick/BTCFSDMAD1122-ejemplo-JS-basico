/* OPERADOR TERNARIO */
let num = prompt("Dime un numero");
let esPar = (num%2 == 0)? "Es par" : "Es impar";
console.log(esPar);

//la linea 3 es equivalente a un if como el siguiente
if(num%2 == 0){
    console.log("Es par");
} else {
    console.log("Es impar");
}