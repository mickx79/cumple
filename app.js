function boton() {
    // Asignar textos correctamente
    asignarTextoElemento('titulazo', '');
    asignarTextoElemento('mensajecito', 'Todos te aman Valentina');
    asignarTextoElemento('felizcumple', 'Feliz cumple Valentina Cricco Cuevas, te amo mucho y te deseo lo mejor en este día tan especial.');

    // Mostrar la imagen
    document.getElementById('pandabien').classList.remove('oculto');

    // Ocultar el botón
    document.getElementById('botoncito').classList.add('oculto');

    alert('Tu frenillo se ha roto correctamente.');
}

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

