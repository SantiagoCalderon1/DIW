
function redimensionaBarra() {
	if (!medio.ended) {
		var total = parseInt(medio.currentTime * maximo / medio.duration);
		progreso.style.width = total + 'px';
	}
	else {
		progreso.style.width = '0px';
		play.value = '\u25BA';
		window.clearInterval(bucle);
	}
}

function desplazarMedio(e) {
	if (!medio.paused && !medio.ended) {
		var ratonX = e.pageX - barra.offsetLeft;
		var nuevoTiempo = ratonX * medio.duration / maximo;
		medio.currentTime = nuevoTiempo;
		progreso.style.width = ratonX + 'px';
	}
}

function accionPlay() {
	if (!medio.paused && !medio.ended) {
		medio.pause();
		play.value = '\u25BA';
		window.clearInterval(bucle);
	}
	else {
		medio.play();
		play.value = '||';
		bucle = setInterval(redimensionaBarra, 1000);
	}
}

function iniciar() {
	maximo = 700;

	medio = document.getElementById('medio');
	barra = document.getElementById('barra');
	progreso = document.getElementById('progreso');
	play = document.getElementById('play');
	/* obtener los objetos del resto de elementos necesarios */
	reiniciar = document.getElementById('reiniciar');
	retrasar = document.getElementById('retrasar');
	adelantar = document.getElementById('adelantar');
	silenciar = document.getElementById('silenciar');
	menosVolumen = document.getElementById('menosVolumen');
	masVolumen = document.getElementById('masVolumen');

	play.addEventListener('click', accionPlay, false);
	/* crear los manejadores de eventos para el resto de botones */
	reiniciar.addEventListener('click', reiniciarMedio, false);
	retrasar.addEventListener('click', () => desplazarReproduccion(-5), false);
	adelantar.addEventListener('click', () => desplazarReproduccion(5), false);
	silenciar.addEventListener('click', silenciarMedio, false);
	menosVolumen.addEventListener('click', () => volumeMedio(-0.1), false);
	masVolumen.addEventListener('click', () => volumeMedio(0.1), false);

	barra.addEventListener('click', desplazarMedio, false);
}

function reiniciarMedio() {
	medio.currentTime = 0;
	progreso.style.width = '0px';

	// Aquí he dicidido que si le he dado pausa y reinicio, pues ese pause se mantenga, si no no
	if (!medio.paused) {
		medio.play();
		play.value = '||';
	} else {
		medio.pause();
		play.value = '\u25BA';
	}
	if (bucle) {
		window.clearInterval(bucle);
	}
	bucle = setInterval(redimensionaBarra, 1000);
}

function desplazarReproduccion(segundos) {
	medio.currentTime = (medio.currentTime + segundos);
	redimensionaBarra();
}

function silenciarMedio() {
	medio.muted = !medio.muted; // esto es super simple si es true lo pone a false, y viceversa
	medio.muted ? silenciar.value = 'escuchar' : silenciar.value = 'silenciar';
}

function volumeMedio(newVolume) {
	let nuevoVolumen = medio.volume + newVolume;
	medio.volume = Math.min(Math.max(nuevoVolumen, 0), 1);
}


window.addEventListener('load', iniciar, false);