
const miCarrusel = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(miCarrusel, {
    ride: true,
    interval : 3000,
    pause: false
})


// Llamando boton popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Alert
var confirmacion = window.confirm('Ya almorzaste hoy?');
if (confirmacion == true){
    alert ("Pero que bueno! yo no. 😔");
}

else {
    alert("Chale, entonces tomemos un break");
}

// Llamando a toast
const myToast = new bootstrap.Toast('.toast');

setTimeout(() => {
myToast.show();
}, 1000);










