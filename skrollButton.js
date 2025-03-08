// Получаем кнопку
const button = document.querySelector('.scroll-to-form-button');

// Функция для проверки, достиг ли пользователь конца страницы
function checkScrollPosition() {
    const scrollPosition = window.scrollY + window.innerHeight; // Текущая позиция прокрутки
    const documentHeight = document.documentElement.scrollHeight; // Общая высота документа

    // Если пользователь достиг или почти достиг конца страницы, скрыть кнопку
    if (scrollPosition >= documentHeight - 10) {
        button.style.opacity = '0'; // Сделать кнопку невидимой
    } else {
        button.style.opacity = '1'; // Восстановить видимость кнопки
    }
}

// Слушаем событие прокрутки
window.addEventListener('scroll', checkScrollPosition);

// Инициализируем проверку на момент загрузки страницы
checkScrollPosition();
