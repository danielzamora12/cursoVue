//destructurin de 2 o mas objetos


const producto = {
    nombre : "tablet",
    precio : "200",
    disponible : true
}

const cliente = {
    nombre : "Daniel",
    premium : "true"
}

const {nombre} = producto
const {nombre : nombreCliente}=cliente

console.log(nombre,nombreCliente);