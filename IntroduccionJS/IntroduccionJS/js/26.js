const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');
const heading = document.querySelector('.heading');


inputNombre.addEventListener('input', (e) => {
    heading.textContent = e.target.value;
    /* console.log(e.target.value); */
    /* console.log('Escribiendo'); */
})

inputPassword.addEventListener('input', (e) => {
    e.target.type = 'text';

    setTimeout(() => {
        e.target.type = 'password';

    }, 200);
})