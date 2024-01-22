//Objetos

const nombreProducto = "tablet";
const precioProducto = 200;
const disponible = true;

const producto = {
    nombre : "tablet",
    precio : "200",
    disponible : true
}

console.log(producto);

//destructuring
const {nombre}=producto;

console.log(nombre);