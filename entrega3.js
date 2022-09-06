
//Armamos nuestro objeto principal y creamos sus métodos
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