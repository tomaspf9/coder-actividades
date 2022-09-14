let listaVacia = document.querySelector(".card")

let canciones = ["Paranoid", "Thunderstruck"]

for (let cancion of canciones){
    let lista = document.createElement("li")
    lista.innerHTML=cancion
    listaVacia.appendChild(lista)
}

function changeColor() {
    document.getElementById("btn").style.background='#5e2e2e'
}