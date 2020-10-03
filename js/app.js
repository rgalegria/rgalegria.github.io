// DOM Elements

const menuBtn = document.getElementById("menu-btn");
const mainMenu = document.getElementById("main-menu");

/* FUNCTIONS */

const toggleMenuVisible = () => {
    if (mainMenu.classList.contains("dropdown-visible")) {
        console.log("clicked / has visible");
        mainMenu.classList.remove("dropdown-visible");
    } else {
        console.log("clicked / has not visible");
        mainMenu.classList.add("dropdown-visible");
    }
};

/* EVENT LISTENERS */

menuBtn.addEventListener("click", toggleMenuVisible);
