// la función menuInicial() presenta un prompt con una lista de opciones, registra el valor ingresado por el usuario y lo utiliza como parámetro al llamar la función listaOpciones()
function menuInicial() {
    let elegirOpcion = parseInt(prompt(`Por favor ingrese el número de la opción que desee:
    1 - Ver lista completa de películas
    2 - Buscar en la lista por título, director o año
    3 - Sugerir un título para que agreguemos a nuestro sitio
    0 - Salir`))
    listaOpciones(elegirOpcion)
}

// la función listaOpciones() recibe como parámetro un número entero y entra a un switch que lleva a distinas funciones o a la finalización del programa
function listaOpciones(elegirOpcion) {
    switch(elegirOpcion) {
        case 0:
            salida = true
            alert(`¡Hasta pronto!`)
            break
        case 1:
            verLista()
            break
        case 2:
            menuBusqueda()
            break
        case 3:
            sugerirTitulo()
            break
        default:
            alert("Por favor, seleccione una opción válida")
    }
}

// la función verLista() es un for...of que recorre el array de la lista de películas y lo escribe en la consola. Al finalizar el programa termina.
function verLista() {
    alert("La lista completa podrá verse en la consola. ¡Hasta pronto!")
    for (const pelicula of filmoteca) {
        console.log(`${pelicula.titulo} (${pelicula.anio}), dirigida por ${pelicula.director}`)
    }
    salida = true
}

// la función menuBusqueda() incluye un prompt para que el usuario ingrese un valor y un switch que pide al usuario que ingrese un criterio de búsqueda y luego la palabra o número que quiere buscar
function menuBusqueda() {
    let opcionBusqueda = parseInt(prompt(`Indique según qué criterio quiere buscar:
    1 - Por título
    2 - Por director/a
    3 - Por año
    0 - Volver al menú inicial`))
    let datoPeli
    switch(opcionBusqueda) {
        case 0:
            menuInicial()
            break
        case 1:
            datoPeli = "titulo"
            tituloIngresado = prompt("Ingrese el título de la película que quiere buscar")
            busqueda(tituloIngresado, datoPeli)
            break
        case 2:
            datoPeli = "director"
            directorIngresado = prompt("Ingrese el apellido del director o directora que quiere buscar")
            busqueda(directorIngresado, datoPeli)
            break
        case 3:
            datoPeli = "anio"
            anioIngresado = parseInt(prompt("Ingrese el año de estreno de la película que quiere buscar"))
            busqueda(anioIngresado, datoPeli)
            break
        default:
            alert("Por favor ingrese una opción válida")
            menuBusqueda()
    }
}

// la funcion busqueda() recibe dos parámetros, uno indicando el tipo de atributo que buscará entre los objetos del array y el valor en cuestión
function busqueda(termino, datoPeli) {
    
    if (datoPeli == "titulo") {
        const resultado = filmoteca.filter((el) => el.titulo.toUpperCase() == termino.toUpperCase())
        resultadoONo(resultado)
    }
    else if (datoPeli == "director") {
        const resultado = filmoteca.filter((el)=> el.director.toUpperCase() == termino.toUpperCase())
        resultadoONo(resultado)
    }
    else {
        const resultado = filmoteca.filter((el)=> el.anio == termino)
        resultadoONo(resultado)
    }
}

// la función resultadoONo() recibe como parámetro un array, si el array no tiene ningún elemento informa al usuario que no se obtuvieron resultados y el progra termina, de lo contrario llama a la función mostrarResultados() 
function resultadoONo(resultado) {
    if (resultado.length == 0) {
        alert("Su búsqueda no arrojó ningún resultado")
        console.log("Su búsqueda no arrojó ningún resultado")
        salida = true
    }
    else {
        mostrarResultados(resultado)
    }
}

// La función mostrarResultados() realiza un for...of del array recibido como parámetro. Muestra los resultados de la búsqueda y el programa termina.
function mostrarResultados(resultadoBusqueda) {
    alert("Podrá ver los resultados en la consola. ¡Hasta Pronto!")
    console.log("Su búsqueda arrojó los siguientes resultados:")
    for (const resultados of resultadoBusqueda) {
        console.log(`${resultados.titulo} (${resultados.anio}), dirigida por ${resultados.director}`)
    }
    salida = true
}

// la función sugerirTitulo() pide al usuario que ingrese un int para elegir entre dos opciones. En el caso de elegir 1 un prompt pide al usuario que agregue un string con el título de una película. El titulo es agregado mediante el método push al array sugerencias
function sugerirTitulo() {
    let opcionIngresada = parseInt(prompt(`Elija entre las siguientes opciones:
    1 - Sugerir el título de una película
    0 - volver al menu principal`))
    if (opcionIngresada == 1) {
        let tituloSugerido = prompt("Ingrese el título de la película que desearía que agreguemos a nuestro sitio")
        sugerencias.push(tituloSugerido)
        console.log(sugerencias)
        alert("Muchas gracias por su sugerencia.")
        menuInicial()
    }
    else if (opcionIngresada == 0) {
        menuInicial()
    }
    else {
        alert("Por favor ingrese una opción válida")
        sugerirTitulo()
    }

}

// constructor de la clase Peliculas 
class Peliculas {
    constructor(titulo, anio, director) {
        this.titulo = titulo,
        this.anio = anio,
        this.director = director
    }
}

// lista de objetos, instancias de la clase Peliculas
let pelicula01 = new Peliculas("La morada del diablo", 1896, "Melies")
let pelicula02 = new Peliculas("Las cuatrocientas farsas del diablo", 1906, "Melies")
let pelicula03 = new Peliculas("El estudiante de Praga", 1913, "Rye")
let pelicula04 = new Peliculas("El Golem", 1914, "Wegener")
let pelicula05 = new Peliculas("Los vampiros", 1915, "Feuillade")
let pelicula06 = new Peliculas("El gabinete del Dr. Caligari", 1920, "Dr. Jekyll y Mr. Hyde", 1920, "Robertson")
let pelicula07 = new Peliculas("La carrera fantasma", 1921, "Sjostrom")
let pelicula08 = new Peliculas("Páginas del diario de Satán", 1921, "Dreyer")
let pelicula09 = new Peliculas("Haxan", 1921, "Christensen")
let pelicula10 = new Peliculas("Doctor Mabuse", 1922, "Lang")

// definición de los dos arrays, uno con la lista de películas existentes y otro, vacío al principio, con la lista de títulos sugeridos por el usuario
const filmoteca = [pelicula01, pelicula02, pelicula03, pelicula04, pelicula05, pelicula06, pelicula07, pelicula08, pelicula09, pelicula10]

const sugerencias = []


alert('Bienvenidos a "El Gabinete", un sitio dedicado a la preservación y difusión de películas pertenecientes al dominio público con particular acento en los géneros del terror, el misterio y el thriller')

// mientras la variable salida no sea true el loop while sigue invocando a la función menuInicial()
let salida
while(salida != true) {
    menuInicial()
}