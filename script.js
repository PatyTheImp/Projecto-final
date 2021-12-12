const section = document.querySelector(".galeria-selected");
const body = document.querySelector("#id-body");
const btnFechar = document.querySelector(".btn-fechar");
const img = document.querySelector("#img-selected");
const galeriaImg = document.querySelectorAll(".galeria-img");
const mobNav = document.querySelector("#mob-nav");
const burgerMenu = document.querySelector(".burger-menu");
const navbuttons = document.querySelector(".navbuttons");
const drawingsTabContainer = document.querySelector(".drawings_tab-container");
const animationsTabContainer = document.querySelector(
  ".animations_tab-container"
);
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
const bigHeader = document.querySelector(".bigHeader");
const carousel = document.querySelector("#slide-part1");
const allSections = document.querySelectorAll(".section");
const carouselImg = document.querySelector("#slide-part1");
const formButton = document.querySelector(".form-btn");
const form = document.querySelector("#formulario");
const btnFecharMob = document.querySelector(".btn-fechar-mob");

const abrirImg = function (e) {
  const selectedImg = e.target.getAttribute("src");
  img.src = selectedImg;

  // Para a função apenas funcionar na versão desktop
  if (!window.matchMedia("(max-width: 768px)").matches) {
    section.classList.remove("escondido");
    body.classList.add("barra-y-escondida");
  }
};

galeriaImg.forEach((imagem) => imagem.addEventListener("click", abrirImg));

btnFechar.addEventListener("click", function () {
  section.classList.add("escondido");
  body.classList.remove("barra-y-escondida");
});

burgerMenu.addEventListener("click", function () {
  mobNav.classList.add("mob-nav-show");
});

btnFecharMob.addEventListener("click", function () {
  mobNav.classList.remove("mob-nav-show");
});

//Smooth scrolling
const smoothScroll = function (e) {
  const clicked = e.target.closest("a");
  if (!clicked) return;

  e.preventDefault();

  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
};

navbuttons.addEventListener("click", smoothScroll);
mobNav.addEventListener("click", smoothScroll);

//Mudança de tabs
const changeTabs = function (e) {
  const clicked = e.target.closest(`.${this}_tab`);
  if (!clicked) return;

  const tabs = document.querySelectorAll(`.${this}_tab`);
  const content = document.querySelectorAll(`.${this}_content`);

  //Ativar e desativar tabs
  tabs.forEach((tab) => tab.classList.remove(`${this}_tab-active`));
  clicked.classList.add(`${this}_tab-active`);

  //Ativar e desativar conteúdo
  content.forEach((c) => c.classList.remove(`${this}_content-active`));
  document
    .querySelector(`.${this}_content-${clicked.dataset.tab}`)
    .classList.add(`${this}_content-active`);
};

drawingsTabContainer.addEventListener("click", changeTabs.bind("drawings"));
animationsTabContainer.addEventListener("click", changeTabs.bind("animations"));

//Sticky header
const stickyHeader = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    header.classList.remove("sticky");
    carousel.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
    carousel.classList.add("sticky");
  }
};

const bigHeaderObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
});
bigHeaderObserver.observe(bigHeader);

//Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

//Lazy loading images
const loadImg = function () {
  //Replace src with data-src
  carouselImg.src = carouselImg.dataset.src;

  carouselImg.addEventListener("load", function () {
    carouselImg.classList.remove("lazy-img");
  });
};

loadImg();

//Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  img.src = formButton.dataset.img;

  section.classList.remove("escondido");
  body.classList.add("barra-y-escondida");
});

//Map
const coords = [38.675077, -9.164883];
const map = L.map("map").setView(coords, 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker(coords)
  .addTo(map)
  .bindPopup(
    L.popup({
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      className: "my-popup",
    })
  )
  .setPopupContent("I'm here 👋🏻")
  .openPopup();

console.log(map);
