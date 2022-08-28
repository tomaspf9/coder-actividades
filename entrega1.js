/// 1)Crear un algoritmo con un condicional
/// 2)Crear un algoritmo utilizando un ciclo

/// Ingreso de usuario, damos la opcion que el user genere su propio username y password

let usuario = prompt("Ingrese su usuario ")
let contraseña = prompt("Ingrese su contraseña")

/// si usuario desigual a ' ' y la contraseña tambien
if (usuario !== "" && contraseña !== ""){

/// Se validan los datos
    console.log("Validando sus datos")
/// Alerta
    alert(`Hola ${usuario}`)
    
}else{
    ///De lo contrario datos incorrectos y sale una alerta
    console.log("Datos incorrectos, por favor reintente")
    alert("No ingreso datos correctos")
    
}

/// Ahora pedimos al usuario que nos ingrese un número del 1-5 para devolver una 
///     canción almacenada en cada respectivo numero.




let canciones = prompt("Selecciona un valor del 1 - 5")
while (canciones != 'ESC'){
    switch (canciones){
        case "1":
            alert("Schism - TOOL")
            break;
        case "2":
            alert("Invisible - Twelve Foot Ninja")
            break;
        case "3":
            alert("Fake it - Seether")
            break;
        case "4":
            alert("3 Libras - A Perfect Circle")
            break;
        case "5":
            alert("Everybody Dies On My Birthday - Corey Taylor")
            break;
        default:
            alert("Error")
            break;
    }
    canciones = prompt("Selecciona un valor del 1-5")
}
