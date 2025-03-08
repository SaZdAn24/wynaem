// Получаем кнопку
const button = document.querySelector('.scroll-to-form-button');

// Функция для прокрутки к форме
function scrollToForm() {
    const form = document.getElementById("contact-form"); // Получаем форму по id
    form.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
    });
}

// Функция для проверки, достиг ли пользователь конца страницы и скрыть кнопку
function checkScrollPosition() {
    const button = document.querySelector(".scroll-to-form-button");
    const scrollPosition = window.scrollY + window.innerHeight; 
    const documentHeight = document.documentElement.scrollHeight; 

    // Если пользователь достиг или почти достиг конца страницы, скрыть кнопку
    if (scrollPosition >= documentHeight - 10) {
        button.style.opacity = '0'; // Сделать кнопку невидимой
    } else {
        button.style.opacity = '1'; // Восстановить видимость кнопки
    }
}

// Слушаем событие прокрутки
window.addEventListener('scroll', checkScrollPosition);
checkScrollPosition();

