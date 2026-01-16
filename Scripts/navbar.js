const toggleNavBar = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("header-selections")[0];

toggleNavBar.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})
