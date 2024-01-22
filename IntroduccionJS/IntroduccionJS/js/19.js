//operador || (OR) y && (AND)

const disponible = 1000;
const total = 4030;
const tarjeta = false;

if (tarjeta || disponible > total) {
    console.log('si se puede pagar');
}else{
    console.log('No tengo dinero');
}