const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos=() =>{
    menu.addEventListener('click', abrirMenu);
}
const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body')
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar)
    cerrarMenu(btnCerrar,overlay);
}

/*Para cargar las imagenes con js*/
imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
})

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    /*Cuando le usuario haga click en el overlay se quitara el overlay y se cerrara el menu */
    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}