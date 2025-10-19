

const search = document.querySelector(".search-cart");
const searchac = document.getElementById("search-ac");
const searchkapa = document.getElementById("search-kapa");

searchac.addEventListener("click", () => {
    search.classList.add("active");
});

searchkapa.addEventListener("click", () => {
    search.classList.remove("active");
});



