const producto = {
    nombre : "tablet",
    precio : "200",
    disponible : true
}

const cliente = {
    nombre : "Daniel",
    premium : "true"
}


const nuevoObjeto = Object.assign(cliente, producto)

//console.log(nuevoObjeto);


const objetoNuevo = {
    cliente,
    producto
}

console.log(objetoNuevo);
