document.addEventListener('DOMContentLoaded', function () {
    // Menú hamburguesa
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Modal de registro
    const btnAbrirModal = document.getElementById('btn-registrarse');
    const modal = document.getElementById('modalRegistro');
    const btnCerrarModal = document.getElementById('cerrarModal');

    if (btnAbrirModal && modal && btnCerrarModal) {
        btnAbrirModal.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        btnCerrarModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
