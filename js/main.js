// ----------navbar------------
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").addEventListener("click", () => {
    navbar.classList.toggle("active");
    cartItems.classList.remove("active");
    searchForms.classList.remove("active");
});

// -----------------cart btn---------------------

let cartItems = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").addEventListener("click", () => {
    cartItems.classList.toggle("active");
    navbar.classList.remove("active");
    searchForms.classList.remove("active");
});
// -------------search btn------------

let searchForms = document.querySelector(".search-form");

document.querySelector("#search-btn").addEventListener("click", () => {
    searchForms.classList.toggle("active");
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
    searchForms.classList.remove("active");
};
