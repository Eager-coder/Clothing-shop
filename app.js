// Navbar mobile
const navLinksMobile = document.querySelector('.nav-links-mobile');
const burgerButton = document.querySelector('#menu-btn');

function openNav(){
    navLinksMobile.classList.toggle('nav-links-active');
}
burgerButton.addEventListener('click', openNav);

// Search field
const searchBtn = document.querySelector('#search-btn');
const searchField = document.querySelector('.search-field-mobile');
const searchCloseBtn = document.querySelector('#search-close-btn');
searchBtn.addEventListener('click', ()=>{
    if (window.innerWidth < 480){
        console.log('heool');
        searchField.classList.add('search-field-active');
    }
})
searchField.addEventListener('click', (e)=>{
    if(e.target.id == 'search-btn' ||  e.target.tagName == 'INPUT'){
    }   
    else{
        searchField.classList.remove('search-field-active')
    }
})

// Cart Icon

const cartRedBall = document.getElementById('cart-red-ball');
function showRedBall(){
    if(localStorage.length > 1){
        cartRedBall.style.display = 'flex';
        cartRedBall.innerText = localStorage.length - 1;
    }
    else{
        cartRedBall.style.display = 'none'
    }
}
setInterval(showRedBall, 10)
   
    


