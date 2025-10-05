

document.querySelector('.header-logo').addEventListener('click', () => {
    document.querySelector('#nav').classList.add('active');
})


document.querySelector('#nav-close').addEventListener('click', () => {
    document.querySelector('#nav').classList.remove('active');
})


document.addEventListener('click', (e) => {
    const aramaCubugu = document.querySelector('.arama-tutucu');
    if (
        aramaCubugu.classList.contains('active') &&
        !aramaCubugu.contains(e.target) &&
        e.target !== document.querySelector('#arama-butonu')
    ) {
        aramaCubugu.classList.remove('active');
    }
});


document.querySelector('#arama-butonu').addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.arama-tutucu').classList.add('active');
})  

document.querySelector('#arama-kapat').addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.arama-tutucu').classList.remove('active');
})


const acikkapalibutton = document.getElementById('ackapa-button');
const acikkapalispan = [document.getElementById('acik'), document.getElementById('kapali')];

acikkapalibutton.addEventListener('click' , () => {
    acikkapalispan.forEach(span => span.classList.toggle('active'));
});



const konumButton = document.getElementById("konum-button");
const konumDiv = document.getElementById("konum-div");
const seciliKonumSpan = document.getElementById("secili-konum");
const konumlar = document.querySelectorAll(".konum-sec");


konumButton.addEventListener("click", () => {
  konumDiv.classList.toggle("active");
});


konumlar.forEach(konum => {
  konum.addEventListener("click", () => {
    seciliKonumSpan.textContent = konum.textContent;
    konumDiv.classList.remove("active");
  });
});


const loginbtn = document.getElementById("button-login");
const logindiv = document.getElementById("login-div");

loginbtn.addEventListener("click" , () => {
    logindiv.classList.toggle("active");
});

