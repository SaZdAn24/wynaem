function openOfertaModal(title, description, imageSrc) {
    console.log(imageSrc); // Выводим путь к изображению в консоль для проверки
    document.getElementById("oferta-modal-title").innerText = title;
    document.getElementById("oferta-modal-description").innerText = description;
    document.getElementById("oferta-modal-image").src = imageSrc;  
    document.getElementById("oferta-modal").style.display = "flex";
}

function closeOfertaModal() {
    document.getElementById("oferta-modal").style.display = "none"; // Закрываем модальное окно
}
