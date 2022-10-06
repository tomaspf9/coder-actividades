function cargarCanciones(){
    fetch('canciones.json')
        .then(respuesta => respuesta.json())
        .then((json) => console.log(json))

}

cargarCanciones()