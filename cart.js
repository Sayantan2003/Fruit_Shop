// NAVBAR SCROLL CODE 
const nav = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 120){
        nav.classList.add('nav-scrolled');
    }
    if(window.scrollY < 120){
        nav.classList.remove('nav-scrolled');
    }
});

// CALCULATING BILL BEFORE UPDATE BUTTON IS CLICKED
let plus = document.querySelectorAll('.plus');
let num = document.querySelectorAll('.num');
let minus = document.querySelectorAll('.minus');
let update = document.querySelector('.update');
let done = document.querySelector('.done');

for (let j = 0; j < num.length; j++){
    num[j].textContent = localStorage.getItem(j);
}

for (let i = 0; i < num.length; i++){
    plus[i].addEventListener('click', () => {
        num[i].textContent++;
        num[i].textContent = (num[i].textContent < 10) ? '0' + num[i].textContent : num[i].textContent;
        localStorage.setItem(i, num[i].textContent);
    })
    minus[i].addEventListener('click', () => {
        if(num[i].textContent > 0){
            num[i].textContent--;
            num[i].textContent = (num[i].textContent < 10) ? '0' + num[i].textContent : num[i].textContent;
            localStorage.setItem(i, num[i].textContent);
        }
    })
}

// CALCULATING PRICE OF FRUITS
let priceTag = document.querySelectorAll('.price-tag');
let totalPrice = document.querySelectorAll('.total-price');

// CALCULATING BILL
let subtotal = document.querySelector('.subtotal');
let shipping = document.querySelector('.shipping');
let grandTotal = document.querySelector('.grandTotal');
let grdTotal;

let updateCart = setInterval(function(){
    let totalPriceEl = 0;
    let subtotalEl = 0;
    let grandTotalEl = 0;
    for (let i = 0; i < num.length; i++){
        totalPriceEl = parseInt(priceTag[i].textContent) * parseInt(num[i].textContent);
        totalPrice[i].textContent = totalPriceEl + ' $';
        subtotalEl += parseInt(totalPrice[i].textContent); 
    }
    subtotal.textContent = subtotalEl + ' $';
    grandTotalEl = subtotalEl + parseInt(shipping.textContent);
    grandTotal.textContent = grandTotalEl + " $";
}, 1000);

// TRANSFERING DATA FROM CART FILE TO LOCAL STORAGE
let checkoutBtn = document.querySelector('.checkout-btn');
function billTransfer(){
    checkoutBtn.addEventListener('click', () => {
        localStorage.setItem('Subtotal', subtotal.textContent);
        localStorage.setItem('Shipping', shipping.textContent);
        localStorage.setItem('Total', grandTotal.textContent);
    })
}
billTransfer();

let scrollActive = document.querySelector('.scroll');
let table1Box = document.querySelector('.table1-box')
table1Box.addEventListener('onmousemove', () => {
    scrollActive.classList.toggle('active');
})