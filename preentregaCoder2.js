
const canciones = `[
    {
        "tittle": "Why'd you only call me when you're high",
        "file": "articmonkeys1.mp3",
        "artist": "Artic Monkeys"  
    },
    {   
        "tittle": "How you remind me",
        "file": "nickelback1.mp3",
        "artist": "Niclelback"
    },
    {
        "tittle": "Dark Necessities",
        "file": "rhcp1.mp3",
        "artist": "Red Hot Chilli Peppers"
    }    
]`
const jsonCanciones = JSON.parse(canciones)

const cancionesRhcp = jsonCanciones.filter(
    (cancion) => cancion.artist == "Red Hot Chilli Peppers" && cancion.file == "rhcp1.mp3")

const rhcpSongs = JSON.stringify(cancionesRhcp)
console.log(JSON.parse(canciones))

let buscador = document.querySelector(".btn")
buscador.addEventListener("click",() => {
    console.log("Buscando")
})


    let masRock = document.querySelector(".play")
    masRock.addEventListener("click",() =>{
        
})

let cuenta = document.querySelector(".nav-link.dropdown-toggle")

cuenta.onclick = alertRegistro

function alertRegistro(){
    cuenta.innerText = 'Regístrate!'
}
// Darkmode activado/desactivado
// Nos guiamos del localstorage y las preferencias del usuario para que queden guardadas
let darkMode = localStorage.getItem('darkMode')
const darkModeToggle =document.querySelector('#bDark')


const activarDarkMode = () =>{
    document.body.classList.add('darkmode')

    localStorage.setItem('darkMode', 'activado')
}
const desactivarDarkMode = () =>{
    document.body.classList.remove('darkmode')

    localStorage.setItem('darkMode', 'desactivado')
}
if(darkMode == 'activado'){
    activarDarkMode()
}
darkModeToggle.addEventListener('click',()=>{
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'activado'){
        activarDarkMode()
    } else{
        desactivarDarkMode()
    }
    
})
