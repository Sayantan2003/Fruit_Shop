// NAVBAR scroll CODE 
const nav = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 120){
        nav.classList.add('nav-scrolled');
    }
    if(window.scrollY < 120){
        nav.classList.remove('nav-scrolled');
    }
});

// ADDRESS, PAYMENT MODE & COUPON DROPDOWN CODE
const addressBox = document.querySelector('.address-box');
const addressTable = document.querySelector('.address-table');
const paymentMode = document.querySelector('#payment-mode');
const paymentBox = document.querySelector('.payment-box');
const paymentCheckbox = document.querySelector('.payment-checkbox');
const couponHeading = document.querySelector('.coupon-heading');
const couponTable = document.querySelector('.coupon-table');
const icon1 = document.querySelector('#icon1');
const icon2 = document.querySelector('#icon2');
const icon3 = document.querySelector('#icon3');

addressBox.addEventListener('click', () => {
    addressTable.classList.toggle('active');
    icon1.classList.toggle('active');
});
paymentBox.addEventListener('click', () => {
    paymentCheckbox.classList.toggle('active');
    paymentMode.classList.toggle('active');
    icon2.classList.toggle('active');
});

// EXTRACTING DATA FROM CART 
let discountBar = document.querySelector('.discount-bar');
let discountCell = document.querySelector('.discount-cell');
let subtotalCell = document.querySelector('.subtotal-cell');
let shippingCell = document.querySelector('.shipping-cell');
let totalCell = document.querySelector('.total-cell');

subtotalCell.textContent = localStorage.getItem('Subtotal');
let subtotal = subtotalCell.textContent;
let newSubtotal = subtotal.replace(/[^0-9]/g, "");
shippingCell.textContent = localStorage.getItem('Shipping');
totalCell.textContent = localStorage.getItem('Total');


// FORM VALIDATION
let placeOrderBtn = document.querySelector('.place-order-btn');
let seeBill = document.querySelector('.see-bill');
let addressText = document.querySelectorAll('.address-text');
let radioBtn = document.querySelectorAll('input[name="paymentMode"]');
let customerName = document.querySelector('#customerName');
let customerAddress = document.querySelector('#customerAddress');


placeOrderBtn.addEventListener('click', () => {
    for (let i = 0; i < addressText.length - 1; i++){
       if (addressText[i].value != ""){
        if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked){
            placeOrderBtn.classList.add('active');
            seeBill.classList.add('active');
            alert('Thank you for shopping from our online store');
            let custName = customerName.value;
            let custAddress = customerAddress.value;  
            localStorage.setItem('Customer Name', custName);
            localStorage.setItem('Customer Address', custAddress);
            break;
        }
        else{
            alert('Please choose the mode of paymrnt');
            break;
        }
       }
       else{
        addressTable.classList.toggle('active');
        icon1.classList.toggle('active');
        paymentCheckbox.classList.toggle('active');
        paymentMode.classList.toggle('active');
        icon2.classList.toggle('active');
        alert('Please fill the required details');
        break;
       }
    
    }
})

// COUPON DISCOUNT
let couponBox = document.querySelectorAll('.coupon-box');
let couponTag = document.querySelectorAll('.coupon-tag');
let couponInput = document.querySelector('.coupon-input');
let remove = document.querySelector('.remove');
let billApply = document.querySelector('.bill-apply');

for (let i = 0; i < couponBox.length; i++){
    couponBox[i].addEventListener('click', () => {
        if (newSubtotal < 300){
            for (let j = 0; j < couponBox.length; j++){
                couponBox[j].classList.toggle('remove-effect');
            }
            alert('Sorry no coupon. Purchase ' + (300 - newSubtotal) +' $ items more to get a coupon.');
        }
        else{
            couponBox[i].classList.add('active');
            couponBox[i].classList.remove('back');
            alert('Congrats!! you have applied a coupon, ' + couponTag[i].textContent);
            couponInput.value = couponTag[i].textContent;
            remove.classList.add('active');
            for (let j = 0; j < couponBox.length; j++){
                couponBox[j].disabled = true;
                couponBox[j].classList.toggle('remove-effect');
            }

        }
    })
}
for (let i = 0; i < couponBox.length; i++){
    remove.addEventListener('click', () => {
        couponBox[couponBox.length-1].classList.add('back');
        remove.classList.remove('active');
        couponInput.value = "";
        discountBar.classList.toggle('active');
        discountCell.textContent = '00';
        for (let j = 0; j < couponBox.length; j++){
            couponBox[j].disabled = false;   
            couponBox[j].classList.toggle('remove-effect');
        }
    })
}

// APPLYING DISCOUNT IN BILL
var grdTotal = "";
for (let i = 0; i < couponBox.length; i++){
    billApply.addEventListener('click', () => {
        switch (couponInput.value) {
            case "":{
                break;
            }
            case couponTag[i].textContent:{
                discountBar.classList.toggle('active');
                let disc = couponTag[i].textContent.replace(/[^0-9]/g, "");
                localStorage.setItem('Discount', disc);
                discountCell.textContent = '- ' + disc + ' $';
                let grTotal = parseInt(shippingCell.textContent) + parseInt(subtotalCell.textContent) - disc;
                grdTotal = grTotal + " $";
                totalCell.textContent = grdTotal;
                localStorage.setItem('Total', grdTotal);
                break;
            }
            default:
                break;
        }
    })
}
// localStorage.setItem('Total', grdTotal);


for (let i = 0; i < radioBtn.length; i++){
    radioBtn[i].addEventListener('click', () => {
        couponTable.classList.add('active');
        icon3.classList.add('active');
        couponBox[i].classList.add('back');
        couponBox[i].classList.remove('active');
        for (let j = 0; j < radioBtn.length; j++){
            if (j != i){
                couponBox[j].classList.remove('back');
                couponBox[j].classList.add('active');
            }
        }
    })
}

// RADIO BUTTON LINKED WITH COUPON 
couponHeading.addEventListener('click', () => {
    for (let i = 0; i < 4; i++){
        if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked){
            if (radioBtn[0].checked){
                couponBox[0].classList.toggle('back');
                break;
            }
            if (radioBtn[1].checked){
                couponBox[0].classList.toggle('back');
                break;
            }
            if (radioBtn[2].checked){
                couponBox[0].classList.toggle('back');
                break;
            }
            if (radioBtn[3].checked){
                couponBox[0].classList.toggle('back');
                break;
            }
            break;
        }
        else{
            alert('Please choose the mode of payment');
            paymentCheckbox.classList.toggle('active');
            paymentMode.classList.toggle('active');
            icon2.classList.toggle('active');
            break;
        }
    }
})