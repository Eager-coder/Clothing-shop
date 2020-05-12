const cartContainer = document.querySelector(".cart-container");
const emptyCart = document.querySelector('.empty');
for ( let i = 1; i < localStorage.getItem('size')+1; i++){
    if(localStorage.hasOwnProperty(i)){
        emptyCart.style.display = 'none';
        let cart = JSON.parse(localStorage.getItem(i));
        let item = document.createElement('DIV');
        item.classList.add('item');
        let image = document.createElement('IMG');
        let name = document.createElement('div');
        let price = document.createElement('div');
        let itemBtn = document.createElement('div');
        itemBtn.classList.add('item-button');
        cartContainer.appendChild(item);
        item.appendChild(image);
        item.appendChild(name);
        item.appendChild(price);
        item.append(itemBtn);
        itemBtn.dataset.name = cart.name;
        itemBtn.dataset.price = cart.price;
        itemBtn.dataset.img = cart.img;
        itemBtn.dataset.id = i;
        image.src = itemBtn.dataset.img;
        name.innerText = itemBtn.dataset.name;
        price.innerText = '$' + itemBtn.dataset.price;
        itemBtn.innerText = '';
    }
}
Array.from(document.querySelectorAll('.item-button')).forEach(function(elem){
    elem.addEventListener('click', e =>{   
        e.target.parentElement.remove();
            localStorage.removeItem(e.target.dataset.id);
    })
})