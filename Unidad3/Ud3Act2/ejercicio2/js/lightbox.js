// Elementos clave
const lightboxContainer = document.getElementById('sec-rep');
const lightboxContent = document.getElementById('lightbox');
const openLightboxButton = document.getElementById('open-lightbox'); // Suponiendo que tienes un botón para abrir

// Función para abrir el lightbox
function openLightbox() {
    lightboxContainer.classList.remove('lightbox-hidden');
}

// Función para cerrar el lightbox
function closeLightbox() {
    lightboxContainer.classList.add('lightbox-hidden');
}


openLightboxButton.addEventListener('click', openLightbox);

// Evento para cerrar al hacer clic fuera del contenido
lightboxContainer.addEventListener('click', (e) => {
    if (!lightboxContent.contains(e.target)) {
        closeLightbox();
        if (!medio.paused && !medio.ended) {
            medio.pause();
            play.value = '\u25BA';
            window.clearInterval(bucle);
        }
    }
});

