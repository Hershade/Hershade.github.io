const itemNav = document.querySelector('.cerrar');
const itemMenu = document.querySelector('.cerrar-menu');
const itemChef = document.querySelector('.cerrar-chef');
const itemContacto = document.querySelector('.cerrar-contacto');

let mybutton = document.getElementById('goUp')


// when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {showScroll()};

const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostre = document.querySelector('.postres');
document.addEventListener('DOMContentLoaded', () => {
    eventos();
    platillos();
});


const eventos = () => {
    menu.addEventListener('click', abrirMenu);
    // contacto.addEventListener('click', cerrarOverlay)
}
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body')
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar)
    cerrarMenu(btnCerrar, overlay);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});


/*Para cargar las imagenes con js*/
imagenes.forEach(imagen => {
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });
    
    function cerrarOverlay () {
        btn = document.querySelector('.btn-cerrar')
        over = document.querySelector('.pantalla-completa')

        if(btn != undefined && over != undefined){
            // btn.addEventListener('click', btn )
            over.remove();
            navegacion.classList.add('ocultar');
            btn.remove();
        } 
    }
    
    itemNav.onclick = function(){
        cerrarOverlay()
    }
    itemMenu.onclick = function (){
        cerrarOverlay()
    }
    itemChef.onclick = function(){
        cerrarOverlay()
    }
    itemContacto.onclick = function (){
        cerrarOverlay()
    }


    /*Cuando le usuario haga click en el overlay se quitara el overlay y se cerrara el menu */
    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}
const platillos = () => {
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');
    // copiamos nuestros platillos y hacemos referencia para meter platillos de uno en uno sin repetirse
    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);
    // friltros
    const ensaladas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'ensalada');
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillo') === 'postre');

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo)
}

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) => {
    btnEnsaladas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada => contenedorPlatillos.appendChild(ensalada));
    });

    btnPasta.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta => contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));
    });

    btnPostre.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postres => contenedorPlatillos.appendChild(postres));
    });

    btnTodos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todos => contenedorPlatillos.appendChild(todos))
    })
}

const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}
var rootElement = document.documentElement

// top button
function scrollFunction() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
function showScroll (){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        console.log("Oiiiiii")
        mybutton.style.display = "block"; 
    } else {
        mybutton.style.display = "none";
        console.log("No oi")
    }
} 

// when the user clicks on the button, scroll to the top od the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

goUp.addEventListener("click", scrollFunction)
