document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("menu");

    function toggleMenu(event) {
        event.stopPropagation(); 
        menu.classList.toggle("active");
    }

    function closeMenu(event) {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            menu.classList.remove("active");
        }
    }

    burger.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);
});
