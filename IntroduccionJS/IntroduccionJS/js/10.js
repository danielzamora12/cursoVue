const tecnologia = ['Vue.js','javascript', 'node js','html','css'];

//inserta datos en el array
tecnologia.push('Git') 

tecnologia.unshift('Laravel')

//agregar al final
const nuevoArreglo = [...tecnologia, 'php']

//elimina al final de arreglo
tecnologia.pop();

//elimina al inicio del arreglo
tecnologia.shift();

//elimina el elemento que tu desees
tecnologia.splice(2);

console.log(tecnologia);
//console.log(nuevoArreglo);


