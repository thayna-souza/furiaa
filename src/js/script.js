let slideIndex = 0;
const totalSlides = document.querySelectorAll('.slides img').length;

function mostrarSlides() {
    const slides = document.querySelector('.slides');
    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function mudarSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    mostrarSlides();
}

// Inicializa o carrossel mostrando a primeira imagem
mostrarSlides();

// Adiciona o timer para mudar os slides automaticamente
setInterval(() => {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    mostrarSlides();
}, 3000); // Muda a imagem a cada 3 segundos

// MENU HAMBURGUER
const menuIcon = document.querySelector("#menuIcon")
const menu = document.querySelector("#menu")
let isOpenMenu = false

function openMobileMenu() {
    if (isOpenMenu == false) {
        menuIcon.classList.remove("fa-bars")
        menuIcon.classList.add("fa-x")
        isOpenMenu = true
        menu.style.transform = "translateX(0px)";
        menu.style.visibility = "visible"
    } else {
        menuIcon.classList.add("fa-bars")
        menuIcon.classList.remove("fa-x")
        isOpenMenu = false
        menu.style.transform = "translateX(380px)";
        menu.style.visibility = "hidden"
        
    }
}