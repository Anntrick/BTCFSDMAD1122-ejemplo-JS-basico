let peliculas = [
    { "nombre": "Soy Leyenda" , "edadminima": 13 },
    { "nombre": "Rey León" , "edadminima": 3 },
    { "nombre": "La Marca del Demonio" , "edadminima": 18 },
    { "nombre": "A todo Gas" , "edadminima": 8 },
]

let nombre = prompt("Dime tu nombre")
let respEdad = prompt("Dime tu edad")

function getMovies(edad) {
    for(let i = 0; i < peliculas.length; i++) {
        if(edad >= peliculas[i].edadminima){
            console.log(peliculas[i].nombre)
        }

    }
}

getMovies(respEdad)