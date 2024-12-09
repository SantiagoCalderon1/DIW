const flecha = document.getElementById('flechaRegreso');

window.addEventListener('scroll', () => { // si se detecta un scroll haz esto    
    if (window.scrollY > 250) {  //si el scroll fue más de 250px haz algo
        // flecha.classList.remove('OCULTAR'); 
        flecha.style.display = 'flex'; //Mostramos la flecha
    }else{
        // flecha.classList.add('OCULTAR'); otra forma de hacerlo es así
        flecha.style.display = 'none';// Ocultamos la flecha
    }
});

flecha.addEventListener('click', () => {
    window.scrollTo({
        top: 0, //Esto nos lleva al inicio de la página
        behavior: 'smooth' // Esto significa que el desplaciento será suave
    });
});
