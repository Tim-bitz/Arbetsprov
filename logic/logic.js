// logic for mobile menu in the header

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu")

mobileMenu.style.display = "none"
mobileMenuBtn.addEventListener("click", ShowHideMenu);

function ShowHideMenu() {

    if (mobileMenu.style.display == "none") {
        mobileMenu.style.display = "block"
    } else {
        mobileMenu.style.display = "none"
    }
}