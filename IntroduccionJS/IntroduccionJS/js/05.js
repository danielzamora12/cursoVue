
const producto = {
    nombre : "tablet",
    precio : "200",
    disponible : true
}

//reescribir un valor

producto.nombre = "CPU"


console.log(producto);

//añadir valor en un arreglo
producto.imagen = "imagen.jpg";

console.log(producto);

//eliminar cosas del arreglo

delete producto.disponible
console.log(producto);