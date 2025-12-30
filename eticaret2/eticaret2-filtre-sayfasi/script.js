const aside = document.querySelector(".aside");
const pcMenuBtn = document.querySelector(".menu-button-pc");
const mobileMenuBtn = document.querySelector(".menu-button-mobile");
const asideKapa = document.querySelector(".aside-close-button");
const blur = document.querySelector(".blur");



pcMenuBtn.addEventListener("click", () => {
    aside.classList.add("active");
    blur.classList.add("active");
});

mobileMenuBtn.addEventListener("click", () => {
    aside.classList.add("active");
    blur.classList.add("active");
});

asideKapa.addEventListener("click", () => {
    aside.classList.remove("active");
    blur.classList.remove("active");
});

blur.addEventListener("click", () => {
    aside.classList.remove("active");
    blur.classList.remove("active");
});


const filtreDivBtn = document.querySelectorAll(".filtre-div-button-ac-kapa");
const filtreDiv = document.querySelectorAll(".filtre-div");

filtreDivBtn.forEach((buton, index) => {
    buton.addEventListener("click", () => {
        buton.classList.toggle("active");
        if (filtreDiv[index]) {
            filtreDiv[index].classList.toggle("active");
        }
    });
});

