function validarFormulario() {
    const Nombre = document.getElementById('nombre').value.trim();
    const Email = document.getElementById('email').value.trim();
    const Mensaje = document.getElementById('mensaje').value.trim();
    let esValida = true;

    if (Nombre === '') {
        alert('El Nombre no puede estar vacío');
        esValida = false;
    }
    if (Email === '') {
        alert('El Email no puede estar vacío');
        esValida = false;
    }
    if (Mensaje === '') {
        alert('El Mensaje no puede estar vacío');
        esValida = false;
    }

    return esValida;
}

document.getElementById('Enviar').addEventListener('click', function(event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});