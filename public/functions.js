const navbarEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('#desktop-menu');
const navbarShoppingCar = document.querySelector('#navbar-shopping-cart');
const producDetail = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('#cards-container');
const menu = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-menu');
const productDetails = document.querySelector('#product-details');

const productList = [];

class NewProducts{
    constructor(name,price,photo,description){
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.description = description;
    };
};

let bike = new NewProducts('bike',120,'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','A bike with the best tools to cover any terrain');
let superBycicle = new NewProducts('Super Bycicle',250,'https://i.pinimg.com/564x/30/93/1d/30931d7db5773497aa6ba7c9971c8d4c.jpg','Super Bycicle is an great product!');

let montainCycle = new NewProducts('montain Bycicle',240,'https://i.pinimg.com/564x/5c/13/14/5c131489b8abdf65559cd973039a9aa1.jpg','This is an great montain bycicle for youngs');

productList.push(bike,superBycicle,montainCycle);

navbarShoppingCar.addEventListener('click',showAside);
navbarEmail.addEventListener('click',showdesktopMenu);
menu.addEventListener('click',showBurguer);

function showAside() {
    producDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
};
function showdesktopMenu() {
    producDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
};
function showBurguer() {
    mobileMenu.classList.toggle('inactive');
    producDetail.classList.add('inactive');
};
function showDetailsProduct() {
    productDetails.classList.toggle('inactive');
    showDetailsProducts();
};
function showCards() {
    for(product of productList){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        cardsContainer.appendChild(productCard);

        const img = document.createElement('img');
        img.setAttribute('src',product.photo);
        productCard.appendChild(img);
        img.addEventListener('click',showDetailsProduct);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const frameDiv = document.createElement('div');
        productCard.appendChild(productInfo);
        productInfo.appendChild(frameDiv);

        const price = document.createElement('p');
        price.innerText = '$' + product.price;
        frameDiv.appendChild(price);

        const name = document.createElement('p');
        name.innerText = product.name;
        frameDiv.appendChild(name);

        const figure = document.createElement('figure');
        productInfo.appendChild(figure);

        const label = document.createElement('label');
        label.setAttribute('for',product.name);
        figure.appendChild(label);

        const icon = document.createElement('img');
        icon.setAttribute('src','./icons/bt_add_to_cart.svg');
        label.appendChild(icon);

        const input = document.createElement('input');
        input.setAttribute('type','radio');
        input.setAttribute('id',product.name);
        input.classList.add('inactive');
        figure.appendChild(input);
    };
};
function showDetailsProducts() {
    productList.forEach((product)=>{
        let inject = `
        <div class="product-details-close">
            <img id="product-details-close" src="./icons/icon_close.png" alt="close"> 
        </div>
        <img src="${product.photo}" alt="bike">
        <div class="products-info">
            <p>$${product.price}</p>
            <p>${product.name}</p>
            <p>${product.description}</p>
        <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
        </div> 
        `;
        productDetails.innerHTML=inject;
        const productDetailsClose = document.querySelector('#product-details-close');
        productDetailsClose.addEventListener('click',addInactive);
        function addInactive() {
            productDetails.classList.add('inactive');
        };
    });
};

window.addEventListener('load',showCards)