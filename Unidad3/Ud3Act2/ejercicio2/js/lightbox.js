// Obtengo los elemetos que usaré
const lightboxContainer = document.getElementById('sec-rep');
const lightboxContent = document.getElementById('lightbox');
const openLightboxButton = document.getElementById('open-lightbox'); // Suponiendo que tienes un botón para abrir

// aqui solo quitamos la clase que oculta el lightbox
function openLightbox() {
    lightboxContainer.classList.remove('lightbox-hidden');
}

// aquí hacemos lo contrario a la función de arriba y es añadimos la clase que oculta el lightbox
function closeLightbox() {
    lightboxContainer.classList.add('lightbox-hidden');
}

// Creamos el evento click sobre button  
openLightboxButton.addEventListener('click', openLightbox);

// Este evento es para cerrar el lightbox al hacer clic fuera del contenido
lightboxContainer.addEventListener('click', (e) => {
    //donde si es diferente alo contenido del lightbox pues se cierra y se pausa el video,
    // lo de pausar el video es porque los he elegido yo, y se queda guardado en los segundos donde se quedó
    if (!lightboxContent.contains(e.target)) {
        closeLightbox();
        if (!medio.paused && !medio.ended) {
            medio.pause();
            play.value = '\u25BA';
            window.clearInterval(bucle);
        }
    }
});

