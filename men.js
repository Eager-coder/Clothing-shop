const itemConstructor = function(name, price, img, id){
    this.name = name;
    this.price = price;
    this.img = img;
    this.id = id;
};
// Shoes data
const shoesGrid = document.querySelector('.shoes-grid');
const shoe1 = new itemConstructor('DAME 6 SHOES', 99, './images/men-shoe1.webp', 1);
const shoe2 = new itemConstructor('DAME 6 SHOES', 99, './images/men-shoe2.webp', 2);
const shoe3 = new itemConstructor('DAME 6 SHOES', 89, './images/men-shoe3.webp', 3);
const shoe4 = new itemConstructor('DAME 6 SHOES', 79, './images/men-shoe4.webp', 4);
const shoe5 = new itemConstructor('DAME 6 SHOES', 69, './images/men-shoe5.webp', 5);
const shoe6 = new itemConstructor('DAME 6 SHOES', 69, './images/men-shoe6.webp', 6);
const shoe7 = new itemConstructor('DAME 6 SHOES', 59, './images/men-shoe7.webp', 7);
const shoe8 = new itemConstructor('DAME 6 SHOES', 59, './images/men-shoe8.webp', 8);
// Shoes array
const shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8];
localStorage.setItem('size', shoesArray.length);
shoesArray.forEach(element =>{
    let itemContainer = document.createElement('DIV');
    itemContainer.classList.add('item-container');
    let itemName = document.createElement('SPAN');
    let itemPrice = document.createElement('SPAN');
    itemPrice.classList.add('item-price');
    let itemImg = document.createElement('IMG');
    let itemInfo = document.createElement('DIV');
    itemInfo.classList.add('item-info');
    itemContainer.appendChild(itemImg);
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice)
    itemName.innerText = element.name;
    itemPrice.innerText = '$' + element.price;
    itemImg.src = element.img;
    let itemBtn = document.createElement('BUTTON');
    itemBtn.classList.add('item-button');
    itemBtn.dataset.name = element.name;
    itemBtn.dataset.price = element.price;
    itemBtn.dataset.img = element.img;
    itemBtn.dataset.id = element.id;
    itemBtn.innerHTML = 'Add to cart';
    itemContainer.appendChild(itemInfo);
    itemContainer.appendChild(itemBtn);
    shoesGrid.appendChild(itemContainer);
})
Array.from(shoesGrid.getElementsByTagName('button')).forEach( element => {
    element.addEventListener('click', e => {
        let newItem = {
            name: e.target.dataset.name,
            price: e.target.dataset.price,
            img: e.target.dataset.img,
            id: e.target.dataset.id
        };
        localStorage.setItem(newItem.id, JSON.stringify(newItem));
        e.target.innerText = 'Added';
    })
})
 const popupWindow = document.querySelector('.image-window');
 const popupImg = document.querySelector('.image-window>img');
Array.from(shoesGrid.getElementsByTagName('img')).forEach(img =>{
   
    img.addEventListener('click', e=> {
        popupWindow.style.top = '0'
        popupWindow.style.display = 'flex';
        popupImg.src = './images/men-shoe1.webp'
    })
})
// Top 
