const nav = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 120){
        nav.classList.add('nav-scrolled');
    }
    if(window.scrollY < 120){
        nav.classList.remove('nav-scrolled');
    }
});

// OVERWRITING CUSTOMER NAME AND ADDRESS 
let customerName = document.querySelector('.billName');
let customerAddress = document.querySelector('.billAddress');

customerName.textContent = localStorage.getItem('Customer Name');
customerAddress.textContent = localStorage.getItem('Customer Address');

// EXTRACTING PRODUCT DATA FROM LOCALHOST 
let productQuantity = document.querySelectorAll('.product-quantity');
let products = document.querySelectorAll('.products');
let productTotal = document.querySelectorAll('.product-total');
let priceTag = document.querySelectorAll('.price-tag');
let price = [];
let subtotal = document.querySelector('.subtotal');
let subTotal = 0;
for (let i = 0; i < 12; i++){
    if (localStorage.getItem(i) != '00'){
        products[i].classList.add('active');
        productQuantity[i].textContent = localStorage.getItem(i); 
        price[i] = priceTag[i].textContent.replace(/[^0-9]/g, "");
        productTotal[i].textContent = productQuantity[i].textContent * price[i] + " $";
        subTotal += parseInt(productTotal[i].textContent);
        subtotal.textContent = subTotal + " $";
    }
}
let discount = document.querySelector('.discount');
let totalPayment = document.querySelector('.total-payment')
discount.textContent = "-" + localStorage.getItem('Discount') + " $";
totalPayment.textContent = localStorage.getItem("Total");