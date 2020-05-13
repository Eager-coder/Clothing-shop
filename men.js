
const itemConstructor = function(name, price, img, id){
    this.name = name;
    this.price = price;
    this.img = img;
    this.id = id;
};

const itemGenerator = function(element){
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
    if (itemBtn.dataset.id < 7){
        shoesGrid.appendChild(itemContainer)
    }
    else if(itemBtn.dataset.id > 7){
        topGrid.appendChild(itemContainer)
    }
};

// Shoes data
const shoesGrid = document.querySelector('.shoes-grid');
const shoesContainer = document.querySelector('.shoes-container');
const shoe1 = new itemConstructor('DAME 6 SHOES', 99, './images/men-shoe1.webp', 1);
const shoe2 = new itemConstructor('DAME 6 SHOES', 99, './images/men-shoe2.webp', 2);
const shoe3 = new itemConstructor('DAME 6 SHOES', 89, './images/men-shoe3.webp', 3);
const shoe4 = new itemConstructor('DAME 6 SHOES', 79, './images/men-shoe4.webp', 4);
const shoe5 = new itemConstructor('DAME 6 SHOES', 69, './images/men-shoe5.webp', 5);
const shoe6 = new itemConstructor('DAME 6 SHOES', 69, './images/men-shoe6.webp', 6);
const shoe7 = new itemConstructor('DAME 6 SHOES', 59, './images/men-shoe7.webp', 7);
const shoe8 = new itemConstructor('DAME 6 SHOES', 59, './images/men-shoe8.webp', 8);
const shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8];


// Setting to localstorage
localStorage.setItem('size', shoesArray.length);
shoesArray.forEach(itemGenerator);
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

// Shoes image view
const popupWindow = document.querySelector('.image-window');
const popupImg = document.querySelector('.image-window>img');
Array.from(shoesGrid.getElementsByTagName('img')).forEach( function(img, index){
    img.addEventListener('click', e=> {
        document.body.style.overflow = 'hidden';
        popupWindow.style.display = 'flex';
        popupImg.src = `./images/men-shoe${index+1}.webp`;
    })
})
Array.from(shoesContainer.getElementsByClassName('img-close')).forEach( button =>{
    button.addEventListener('click', ()=> {
        popupWindow.style.display = 'none';
        document.body.style.overflow = 'initial';
    })
})

// Top clothes data
const topContainer = document.querySelector('.top-container');
const topGrid = topContainer.querySelector('.top-grid');
const top1 = new itemConstructor('Power Thermo', 39, './images/men-top1.webp', 9);
const top2 = new itemConstructor('Power Thermo', 39, './images/men-top2.webp', 10);
const top3 = new itemConstructor('Power Thermo', 49, './images/men-top3.webp', 11);
const top4 = new itemConstructor('Power Thermo', 49, './images/men-top4.webp', 12);
const top5 = new itemConstructor('Power Thermo', 59, './images/men-top5.webp', 13);
const top6 = new itemConstructor('Power Thermo', 59, './images/men-top6.webp', 14);
const top7 = new itemConstructor('Power Thermo', 69, './images/men-top7.webp', 15);
const top8 = new itemConstructor('Power Thermo', 79, './images/men-top8.webp', 16);
const topArray = [top1, top2, top3, top4, top5, top6, top7, top8];
topArray.forEach(itemGenerator);
// Setting to localstorage
Array.from(topGrid.getElementsByTagName('button')).forEach( element => {
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