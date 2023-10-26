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
