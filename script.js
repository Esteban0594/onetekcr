document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.button');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const backToTopLinks = document.querySelectorAll('.back-to-top');

    // Función para mostrar la sección activa y ocultar las demás
    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Añadir evento de click a cada botón "Leer Más"
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentNode.querySelector('p');
            parent.classList.toggle('open'); // Alternar clase para expandir o contraer
            button.textContent = parent.classList.contains('open') ? 'Leer Menos' : 'Leer Más';
        });
    });

    // Evento para el click en los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Evento para el click en los enlaces "Volver al Menú"
    backToTopLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('home'); // Mostrar la sección de inicio al hacer click en "Volver al Menú"
        });
    });

    // Mostrar la sección inicial al cargar la página
    showSection('home');
});


