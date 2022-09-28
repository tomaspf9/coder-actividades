// Spread

const listaMetal = ['Metallica', 'System of a Down']
const listaRock = ['RHCP', 'Nickelback', 'Artic Monkeys']

const listaMusical = [...listaMetal,...listaRock]

console.log(listaMusical)

const listaMusicalObjecto = {
    ...listaMusical
}
console.log(listaMusicalObjecto)


//  
const artistaAM = {
        tittle: "Why'd you only call me when you're high",
        file: "articmonkeys1.mp3",
        artist: "Artic Monkeys"  
    }
   
//
console.log(artistaAM?.file || "No se encuentra dicho elemento")

console.log(artistaAM?.canciones || "No se encuentra dicho elemento")
//

