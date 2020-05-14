// Trending carousel
const carousel = document.querySelector('.carousel');
let carouselWidth = function(){
    return carousel.offsetWidth/2;
};
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener('click', ()=> carousel.scrollLeft += carouselWidth());
prevBtn.addEventListener('click', ()=> carousel.scrollLeft -= carouselWidth());

