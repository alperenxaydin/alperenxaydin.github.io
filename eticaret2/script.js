

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


const urunSwiper = new Swiper('#urunSwiper', {
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



const cartSwiper = new Swiper ('#cartSwiper' , {
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    } ,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }

});



















(function() {
            // Performans ayarı: Her pikselde değil, belirli aralıklarla kalp üret.
            let throttleTimer = false;
            const throttleDelay = 30; // Milisaniye (Daha düşük sayı = daha sık kalp)

            document.addEventListener('mousemove', function(e) {
                // Eğer fare tarayıcı dışındaysa veya timer aktifse işlem yapma
                if (throttleTimer) return;

                throttleTimer = true;
                setTimeout(() => { throttleTimer = false; }, throttleDelay);

                createHeart(e.clientX, e.clientY);
            });

            function createHeart(x, y) {
                const heart = document.createElement('div');
                heart.classList.add('cursor-heart');
                heart.innerHTML = '❤'; // Kalp sembolü
                
                // Rastgelelik ekleyelim (Doğallık için)
                // -20px ile +20px arasında sağa sola savrulma payı
                const randomX = (Math.random() - 0.5) * 40; 
                // -45 derece ile +45 derece arasında dönme payı
                const randomRot = (Math.random() - 0.5) * 90;
                // Boyutlarda hafif değişiklik (10px ile 16px arası)
                const randomSize = 10 + Math.random() * 6;

                // CSS değişkenlerine (variable) değerleri ata
                heart.style.setProperty('--tx', `${randomX}px`);
                heart.style.setProperty('--rot', `${randomRot}deg`);
                
                heart.style.left = `${x}px`;
                heart.style.top = `${y}px`;
                heart.style.fontSize = `${randomSize}px`;

                // Animasyon süresi (0.6s ile 1s arası rastgele - hızlı kaybolsun)
                const duration = 0.6 + Math.random() * 0.4;
                heart.style.animation = `heart-drop ${duration}s ease-out forwards`;

                document.body.appendChild(heart);

                // Temizlik: Animasyon bitince DOM'dan sil (Memory Leak önleyici)
                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }
        })();
