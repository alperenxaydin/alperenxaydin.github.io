




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
    logindiv.classList.add("active");
});

const loginkapa = document.getElementById("login-kapat");

loginkapa.addEventListener("click" , () => {
    logindiv.classList.remove("active");
});







