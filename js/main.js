// Navegación responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Manejo del envío del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los datos del formulario
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Aquí podrías agregar validaciones adicionales
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        
        // Limpiar el formulario
        this.reset();
        
        // Desplazarse al principio del formulario
        window.scrollTo({
            top: contactForm.offsetTop - 100,
            behavior: 'smooth'
        });
        
        // Aquí podrías agregar el código para enviar los datos a un servidor
        // fetch('URL_DEL_WEBHOOK', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Éxito:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        // });
    });
}

// Efecto de desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Añadir clase 'scrolled' al header al hacer scroll
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
