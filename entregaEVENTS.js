/// Entrega de eventos... 

// Cree unas variables en algunos botones, también se creo una función para que me devuelva un texto
// cuando clickee en el específico boton


let buscador = document.querySelector(".btn")
buscador.addEventListener("click",() => {
    console.log("Buscando")
})


    let masRock = document.querySelector("#btnRock")
    masRock.addEventListener("click",() =>{
        alert("Elemento en mantenimiento!")
})

let cuenta = document.querySelector(".nav-link.dropdown-toggle")

cuenta.onclick = alertRegistro

function alertRegistro(){
    cuenta.innerText = 'Regístrate!'
}