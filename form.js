// Инициализация EmailJS с вашим User ID
(function() {
    emailjs.init("tFJhhvUUdCaq7C1S-"); // Ваш реальный User ID
})();

// Обработка отправки формы
document.querySelector("#contact-form form.rental-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Отправка формы через EmailJS
    emailjs.sendForm('service_rs819hh', 'template_hs6z0rd', this)
        .then(function(response) {
            console.log('Сообщение успешно отправлено!', response);
            
            // Показать модальное окно подтверждения
            const modal = document.getElementById("confirmation-modal");
            if (modal) modal.style.display = "block";
        }, function(error) {
            console.error('Ошибка отправки: ', error);
            alert('Ошибка: ' + JSON.stringify(error));
        });

    // Очистить форму после отправки
    this.reset();
});

// Закрытие модального окна
document.querySelector(".close-button-thank").addEventListener("click", function () {
    const modal = document.getElementById("confirmation-modal");
    if (modal) modal.style.display = "none";
});
