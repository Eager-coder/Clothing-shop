// Trending carousel
const carousel = document.querySelector('.carousel');
const carouselWidth = carousel.clientWidth;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener('click', ()=> carousel.scrollLeft += carouselWidth);
prevBtn.addEventListener('click', ()=> carousel.scrollLeft -= carouselWidth);

