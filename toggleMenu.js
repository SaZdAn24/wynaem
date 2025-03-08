document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("menu");
    const menuLinks = menu.querySelectorAll("a"); // Объявляем переменную menuLinks

    function toggleMenu(event) {
        event.stopPropagation(); 
        menu.classList.toggle("active");
    }

    function closeMenu(event) {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            menu.classList.remove("active");
        }
    }

    // Закрытие меню, если кликнут на кнопку перехода
    function closeMenuOnButtonClick() {
        menu.classList.remove("active");
    }

    // Закрытие меню при клике на ссылку в меню
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenuOnButtonClick);
    });

    burger.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);
});
