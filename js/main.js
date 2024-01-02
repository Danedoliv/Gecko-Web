// Función para desplazamiento suave al hacer clic en los enlaces de navegación
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Manejadores de eventos para los enlaces de navegación
document.querySelector('a[href="#quienes-somos"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('quienes-somos');
});

document.querySelector('a[href="#servicios"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('servicios');
});

document.querySelector('a[href="#contacto"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('contacto');
});


