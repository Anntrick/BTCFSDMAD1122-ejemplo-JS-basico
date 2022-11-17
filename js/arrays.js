/* ARRAY */
//Para declarar el array, podemos usar [] vacío o con una lista de datos
let coches = [
    "Ana"= "Seat leon",
    "Renault Clio",
    "Mini couper"
]

let motos = [
    "Suzuki marauder",
    "Harley Davinson Road king",
    "Kawasaki ninja"
]



let nuevoCoche = "Ford Focus"
// mostramos el segundo registro del array
console.log(coches[1])

//length nos devuelve el tamaño del array
console.log(coches.length)

//push nos permite añadir un nuevo registro al final del array
coches.push(nuevoCoche)
coches.push(prompt("Dime un coche"))

for(let i = 0; i < coches.length; i++){
    console.log(coches[i])
}



//Así podemos declarar un array vacio
let vehiculos = []

//Con concat podemos unir 2 arrays
vehiculos = coches.concat(motos)

//unshift nos añade un nuevo elemento al array en la primera posicion
vehiculos.unshift("Ford Focus")

//reverse nos reordena el array en el orden inverso
vehiculos.reverse()

//join nos devuelve todos los registros del array en un solo string dividido con el separador que indiquemos
console.log(vehiculos.join(" - "))

//shift elimina el primer registro
vehiculos.shift()

//pop elimina el ultimo registro
vehiculos.pop()

//Podemos recorrer los arrays con cualquier bucle, por ejemplo un for
for(let i = 0; i < vehiculos.length; i++){
    console.log(vehiculos[i])
}
    



