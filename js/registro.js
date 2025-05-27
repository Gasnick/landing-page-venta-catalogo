document.getElementById('formRegistro').addEventListener('submit', function (e) {
    e.preventDefault(); // evita que la página se recargue

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const interes = document.getElementById('interes').value;
    const promociones = this.elements['promociones'].checked;

    // Validación básica
    if (!nombre || !telefono || !interes) {
        alert('Por favor, completá todos los campos obligatorios.');
        return;
    }

    // Crear objeto con datos
    const datosRegistro = {
        nombre,
        telefono,
        email,
        interes,
        promociones
    };

    // Por ahora mostramos en consola (puedes reemplazar con envío a servidor)
    console.log('Datos de registro:', datosRegistro);

    // Opcional: mostrar mensaje de éxito
    alert('¡Gracias por registrarte!');

    // Cerrar modal (si querés)
    document.getElementById('modalRegistro').style.display = 'none';

    // Limpiar formulario
    this.reset();
});

// Función para cerrar el modal al hacer click en la X
document.getElementById('cerrarModal').addEventListener('click', function () {
    document.getElementById('modalRegistro').style.display = 'none';
});