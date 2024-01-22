const url = "https://jsonplaceholder.typicode.com/comments"
const consultarAPI = async () => {

    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(resultado);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('todo listo');
    }
}


consultarAPI()