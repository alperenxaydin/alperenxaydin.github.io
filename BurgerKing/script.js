

const sidebar = document.querySelector(".sidebar");
const sidebarac = document.getElementById("sidebar-ac");
const sidebarkapa = document.getElementById("sidebar-kapa");


sidebarac.addEventListener("click", () => {
    sidebar.classList.add("active");
});


sidebarkapa.addEventListener("click", () => {
    sidebar.classList.remove("active");
});


const login = document.getElementById("login");
const loginac = document.getElementById("login-ac");
const loginkapa = document.getElementById("login-kapa");


loginac.addEventListener("click", () => {
    login.classList.add("active");
});


loginkapa.addEventListener("click", () => {
    login.classList.remove("active");
});

