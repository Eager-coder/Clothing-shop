// Navbar mobile
const navLinksMobile = document.querySelector('.nav-links-mobile');
const burgerButton = document.querySelector('#menu-btn');

function openNav(){
    navLinksMobile.classList.toggle('nav-links-active');
}
burgerButton.addEventListener('click', openNav);

// Trending carousel
const carousel = document.querySelector('.carousel');
const carouselWidth = carousel.clientWidth;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener('click', ()=> carousel.scrollLeft += carouselWidth);
prevBtn.addEventListener('click', ()=> carousel.scrollLeft -= carouselWidth);