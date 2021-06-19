const section = document.querySelector('.galeria-selected');
const body = document.querySelector('#id-body');
const btnFechar = document.querySelector('.btn-fechar');
const img = document.querySelector("#img-selected");
const galeriaImg = document.querySelectorAll('.galeria-img');
const mobNav = document.querySelector("#mob-nav");
const burgerMenu = document.querySelector('.burger-menu');
const navbuttons = document.querySelector('.navbuttons');

const abrirImg = function(e){

    const selectedImg = e.target.getAttribute('src');
    img.src = selectedImg;

    // Para a função apenas funcionar na versão desktop
    if (!window.matchMedia("(max-width: 768px)").matches) {

        section.classList.remove('escondido');
        body.classList.add('barra-y-escondida');
    }
}

galeriaImg.forEach(imagem => imagem.addEventListener('click', abrirImg));


btnFechar.addEventListener('click', function(){

    section.classList.add('escondido');
    body.classList.remove('barra-y-escondida');
});

burgerMenu.addEventListener('click', function(){

    mobNav.classList.toggle('mob-nav-show');
});

//Smooth scrolling
const smoothScroll = function(e){

    const clicked = e.target.closest('a');
    if (!clicked) return;

    e.preventDefault();

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
}

navbuttons.addEventListener('click', smoothScroll);
mobNav.addEventListener('click', smoothScroll);