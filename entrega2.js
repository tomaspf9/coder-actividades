
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
/// Llamamos las funciones correspondientes de nuestro programa
login()
rocola()


