
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

const swiperUrun = new Swiper('.urun-img', {
    grabCursor: true,
    slidesPerView: 1, 
    spaceBetween: 0,
    navigation: {
        nextEl: '.urun-button-sag',
        prevEl: '.urun-button-sol',
    },
});

const swiperUrunler = new Swiper('.urunler-img', {
    grabCursor: true,
    slidesPerView: 4, 
    spaceBetween: 10,
    navigation: {
        nextEl: '.urunler-button-sag',
        prevEl: '.urunler-button-sol',
    },
});


const urunSwiperr = new Swiper('#urunSwiperr', {
    navigation: {
        nextEl: '#sonraki-slide-urun',
        prevEl: '#onceki-slide-urun',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 1.2,
            spaceBetween: 5,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 25,
        },
        1500: {
            slidesPerView: 5.2,
            spaceBetween: 25,
        }
    }
});

