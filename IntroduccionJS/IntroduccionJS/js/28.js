    //eventos del dom - submit

    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', e => {
    e.preventDefault()


    //prevenir alerta duplicadas
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()

    //generar alerta
    const alerta = document.createElement('DIV')
    alerta.textContent = 'Todos los campos son obligatorios'
    alerta.classList.add('alerta', 'bg-red-500', 'text-white',
        'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    if (nombre === '' || password === '') {
        formulario.appendChild(alerta)
        setTimeout(() => {
            alerta.remove()
        }, 3000);
        return      
    }
})