const nav = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 120){
        nav.classList.add('nav-scrolled');
    }
    if(window.scrollY < 120){
        nav.classList.remove('nav-scrolled');
    }
});

// ADD TO CART 
let shoppingButton = document.querySelectorAll(".shopping-btn");
let counter = document.querySelectorAll(".counter");
for (let i = 0; i<shoppingButton.length; i++){
    shoppingButton[i].addEventListener("click", () => {
        shoppingButton[i].classList.add("hidden");
        counter[i].classList.add("active");
    });
}

// COUNTER MECHANISM
let plus = document.querySelectorAll('.plus');
let num = document.querySelectorAll('.num');
let minus = document.querySelectorAll('.minus');
let cartBtn = document.querySelector('#cart-btn');

for (let i = 0; i < num.length; i++){
    plus[i].addEventListener('click', () => {
        num[i].textContent++;
        num[i].textContent = (num[i].textContent < 10) ? '0' + num[i].textContent : num[i].textContent;
    })
    minus[i].addEventListener('click', () => {
        if(num[i].textContent > 0){
            num[i].textContent--;
            num[i].textContent = (num[i].textContent < 10) ? '0' + num[i].textContent : num[i].textContent;
        }
    })
}

// // TRANSFER DATA 
cartBtn.addEventListener('click', () => {
    for (let j = 0; j < num.length; j++){
        localStorage.setItem(j, num[j].textContent);
    }
})