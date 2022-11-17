
/* SWITCH - ALTERNATIVA A IFS ANIDADOS */
let num3 = prompt("Dime un numero")
switch(num3) {
    //podemos comparar un valor con la variable que pasamos arriba
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("El numero esta entre 0 y 4");
        //siempre acabamos el case con un break
        break;
    case 5:
        console.log("el número es 5");
        break;
    //al final podemos usar default para controlar cualquier valor que no controlemos antes.
    //Es el equivalente al else
    default:   
        console.log("El numero no es valido");
        break
}

let nota = parseFloat(prompt("dime una nota"))
// podemos poner las condiciones como en los if, entre (), 
// siempre que pasemos true como parámetro del switch
switch(true) {
    case ( nota < 4):
        console.log("insu");
        break;

    case (nota < 6):
        console.log("sufi");
        break;
    default: 
        console.log("otro");
        break;
}

