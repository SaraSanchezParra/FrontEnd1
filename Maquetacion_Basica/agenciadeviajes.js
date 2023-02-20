// 3. Escribir una función en JavaScript que recoja la información de los campos de texto en formato JSON cada vez que se pulse el botón "solicitar información". Esta información se debe guardar en un array.

let solicitudes = [];




function recogerSolicitud(){
    let nombreFormulario = document.getElementById("nombre").value;
    let origenFormulario = document.getElementById("origen").value;
    let destinoFormulario = document.getElementById("destino").value;
    let numeroPersonasFormulario = document.getElementById("numeroPersonas").value
    let fechaFormulario = document.getElementById("fecha").value;

    //La linea 1 se va a ejecutar cuando se cargue la página. 
    //Sin embargo, esta función solo se ejecuta cuando se hace click en el botón.
    //La información de solictud hay que guardarla en el array.
    
    let solicitud = {
        nombre:nombreFormulario,
        origen:origenFormulario,
        destino:destinoFormulario,
        numeroPersonas:numeroPersonasFormulario,
        fecha:fechaFormulario,
    };
    solicitudes.push(solicitud);
    console.log(solicitudes);
}


//En el array vacío de solicitudes, guardo el objeto por primera vez de la solicitud en el puesto [0].
//Cuando se ejecuta por segunda vez, se guarda en el puesto [1] del array. Y así sucesivamente.



// 4. Escribe ahora una segunda función en JavaScript que cada vez que se pulse el botón "filtrar", nos muestre por consola la información de las solicitudes recibidas que tengan como destino Canarias, 
// Mallorca y Galicia (tened en cuenta que los usuarios pueden escribir, el destino en mayuscula o minuscula).


function filtrarSolicitudes(){

    let filtrado = "";
    for(let i = 0; i<solicitudes.length; i++){
        if (solicitudes[i].destino.toUpperCase() == "CANARIAS" || solicitudes[i].destino.toUpperCase() == "MALLORCA" || solicitudes[i].destino.toUpperCase() == "GALICIA"){
            console.log(solicitudes[i])
        
            filtrado +=` <p>Nombre: ${solicitudes[i].nombre}</p>
            <p>Origen: ${solicitudes[i].origen}</p>
            <p>Destino: ${solicitudes[i].destino}</p>
            <p>Número de personas: ${solicitudes[i].numeroPersonas}</p>
            <p>Fecha: ${solicitudes[i].fecha}</p>`
           
        }
    }
    document.getElementById("mostrarDatos").innerHTML = `${filtrado}`;
}


// 5. Modifica la función anterior para que ahora muestre esos datos en la landing page maquetada anteriormente.




