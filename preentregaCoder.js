
//Armamos nuestro objeto principal y creamos sus métodos
/// Creamos una función que nos permita pedir los datos del usuario mediante un prompt

function login(){
    let usuario = prompt("Ingrese su usuario")
    let password = prompt("Ingrese su contraseña")
 /// Si usuario o contraseña tienen carácteres ingresados, permite logear. De lo contrario salta un error  
    if (usuario || password !== ''){
        alert(`Bienvenido ${usuario}`)
        console.log("Ingresando a sus datos...")
        console.log(`Por favor seleccione un valor ${usuario}`)
    }else{
        console.log("Algo no ocurrió como lo esperado...")
        alert("Datos incorrectos, intente nuevamente")
    }
}
login()
function Artista() {
    this.nombre = ""
    this.genero = ""
    this.albumes = 0
    this.canciones = 0
    this.hits = []
    this.mostrarInformacion = function (){
        return `${this.nombre} Su mejor género : ${this.genero}
        Tiene en total
        ${this.albumes} albumes y  ${this.canciones} canciones`
    }
    this.mostrarHits = function(){
        return `Algunos de sus hits son ${this.hits}`
    }
    
}
/// Agregamos funcion para pedir al usuario que nos ingrese un número y con él se le designa una mini lista de repodroducción
function rocola(){
    /// Pedimos un número del 1 al 4, de ser otro valor el programa tira error y se cierra.
    let canciones = prompt("Selecciona un valor del 1 - 4")
    while (canciones != ''){
        switch (canciones){
            case "1":
                alert("Schism - TOOL" + " | " + "Invisible - Twelve Foot Ninja" + " | " + "Fake it - Seether" + " | " +
                "3 Libras - A Perfect Circle")
                console.log("Ingresando lista nº1...\n Su lista == > Schism - TOOL | Invisible - Twelve Foot Ninja | Fake it - Seether | 3 Libras - A Perfect Circle")
                break;
            
           case "2":
                alert("Around the World - Red Hot Chilli Peppers" + " | " + "Everlong - Foo Fighters" + " | " + "Reptilia - The Strokes"
                + " | " + "505 - Artic Monkeys")
                console.log("Ingresando lista nº2...\n Su lista == > Around the World - Red Hot Chilli Peppers | Everlong - Foo Fighters |Reptilia - The Strokes | 505 - Artic Monkeys")
                break;   

            case "3":
                alert("Bat Country - Avenged Sevenfold" + " | " + "Lithium - Nirvana" + " | " + "Rusty Cage - Soundgarden" + " | "
                + "Du Hast - Rammstein")
                console.log("Ingresando lista nº3...\n Su lista == > Bat Country - Avenged Sevenfold | Lithium - Nirvana | Rusty Cage - Soundgarden |Du Hast - Rammstein")
                break;

            case "4":
                alert("Black - Pearl Jam" + " | " + "Fuel - Metallica " + " | " + "Torn - Creed" + " | " + "Duality - Slipknot")    
                console.log("Ingresando lista nº4...\n Su lista == > Black - Pearl Jam | Fuel - Metallica | Torn - Creed | Duality - Slipknot")
                break;

            default:
                alert("Error")
                console.log("Error...")
                break;
        }
        break;
    }
}
rocola()
// Heredamos los conceptos de nuestro primer objeto y seguimos designando nuevos objetos
const artista1 = new Artista()
artista1.nombre = "Red Hot Chilli Peppers"
artista1.genero = "Rock"
artista1.albumes = 17
artista1.canciones = 120
artista1.hits = ["Snow","Under the bridge","Californication","Otherside"]

const artista2 = new Artista()
artista2.nombre = "Linkin Park"
artista2.genero = "Nu Metal"
artista2.albumes = 15
artista2.canciones = 100
artista2.hits = ["In the end","Crawling","A place for my head","Somewhere I Belong"]

const artista3 = new Artista()
artista3.nombre = "Metallica"
artista3.genero = "Metal"
artista3.albumes = "13"
artista3.canciones = "99"
artista3.hits = ["Enter Sandman", "Fuel", "Master of Puppets", "Unforgiven"]

const artista4 = new Artista()
artista4.nombre = "Nickelback"
artista4.genero = "Hard Rock"
artista4.albumes = "14"
artista4.canciones = "106"
artista4.hits = ["How you remind me", "Rockstar", "Something in your mouth", "Photograph"]

//Agregamos un forEach que nos diga qué artista está verificado

const artistasVerificados = ["Linkin Park", "Metallica", "Nickelback", "Red Hot Chilli Peppers"]
artistasVerificados.forEach((verificado) =>{
console.log(verificado)
})
alert("Tomás ha agregado 4 nuevos artistas")

//Aplicamos algunos console logs para interactuar en nuestra consola


console.log(artista1,artista2,artista3,artista4)
console.log(artista1.mostrarInformacion())
console.log(artista1.mostrarHits())
//console.log(artista1.hits.join("|"))
//console.log(artista2.mostrarInformacion())
//console.log(artista2.mostrarHits())
//console.log(artista2.hits.join("|"))
//console.log(artista3.mostrarInformacion())
//console.log(artista3.mostrarHits())
//console.log(artista3.hits.join("|"))
//console.log(artista4.mostrarInformacion())
//console.log(artista4.mostrarHits())
//console.log(artista4.hits.join("|"))