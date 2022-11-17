
/* FUNCIONES */
let num1 = parseFloat(prompt("Dime el primer numero"))
let num2 = parseFloat(prompt("Dime el segundo numero"))
let op = prompt("Dime el operador: + - * o /")

//Funcion anonima - no tiene nombre, se pasa como variable o parametro de otra funcion
//Cuando creamos la funcion, lleva entre parentesis los parametros que necesitemos dentro, estos parametros solo estan disponibles en la funcion
let suma = function (n1, n2) {
    //Podemos hacer return para devolver un valor o hacer cualquier accion dentro
    //console.log(n1 + n2)
    return n1 + n2
}

//Funcion normal
function resta(n1, n2){
    return n1 - n2
}

function multiplicacion(n1, n2){
    return n1 * n2
}

function division(n1, n2){
    return n1 / n2
}


switch (op) {
    case "+":
        //Al llamar a la funcion tiene que tener exactamente el mismo nombre y los parámetros en el mismo orden
        console.log("El resultado es: " + suma(num1, num2))
        break;
    case "-":
        console.log("El resultado es: " + resta(num1, num2))
        break;
    case "*":
        console.log("El resultado es: " + multiplicacion(num1, num2))
        break;
    case "/":
        console.log("El resultado es: " + division(num1, num2))
        break;
}