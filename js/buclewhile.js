/* BUCLE WHILE -  */
let num = prompt("Dime un numero");
let cont = 0;

//Nos va a repetir la acción de dentro siempre que se cumpla la condición
while(cont <= 10) {
    //formas de concatenar texto en los console.log()
    //con la coma solo podemos en console.log y una sola vez
    //console.log("",num * cont);
    //con el + podemos concatenar en cualquier sitio y todas las veces que queramos
    console.log(num + " X " + cont + " = " + num * cont);
    cont++;
}