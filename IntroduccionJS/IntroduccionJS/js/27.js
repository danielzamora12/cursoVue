//eventos del dom - submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    if (nombre === '' || password === '') {
        console.log('favor de llenar los campos');
    } else {
        /*  console.log(password);
         console.log(nombre); */
        console.log('enviando informacion');
    }
})