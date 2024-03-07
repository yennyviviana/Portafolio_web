// Agrega este script al final del documento HTML antes de </body>
    // Función para ajustar el tamaño de los elementos en la sección de portafolio
    function adjustPortfolioItems() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            const itemWidth = item.clientWidth;
            item.style.height = itemWidth + 'px'; // Haz que la altura sea igual al ancho para crear cuadros
        });
    }

    // Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
    window.addEventListener('load', adjustPortfolioItems);
    window.addEventListener('resize', adjustPortfolioItems);


    // JavaScript para el desplazamiento suave
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});


//Profesiones automaticamente

  document.addEventListener('DOMContentLoaded', function () {
    // Array con tus profesiones
    var profesiones = ['Bibiana Caicedo','Analista', 'Diseñadora multimedia', 'Desarrolladora web','Desarrolladora de sofware'];

    // Función para cambiar dinámicamente el nombre y la profesión
    function cambiarNombreYProfesion() {
        var nombreElemento = document.getElementById('nombre');
        var profesionElemento = document.getElementById('profesion');

        // Cambiar la profesión
        var profesionActual = profesionElemento.textContent;
        var nuevaProfesion = profesiones[(profesiones.indexOf(profesionActual) + 1) % profesiones.length];
        profesionElemento.textContent = nuevaProfesion;
    }

    // Cambiar dinámicamente cada 2 segundos
    setInterval(cambiarNombreYProfesion, 3000);

    // Ejecutar la función una vez después de cargar la página
    cambiarNombreYProfesion();
});


 /* Función para validar el formulario
 function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validar el nombre (no debe estar vacío)
    if (name.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    // Validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return false;
    }

    // Validar el mensaje (no debe estar vacío)
    if (message.trim() === '') {
        alert('Por favor, ingresa tu mensaje.');
        return false;
    }

    // Si todas las validaciones son exitosas, permite el envío del formulario
    return true;
}*/
  