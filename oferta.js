function openOfertaModal(title, description, imageSrc) {
    document.getElementById("oferta-modal-title").innerText = title;
    document.getElementById("oferta-modal-description").innerText = description;
    document.getElementById("oferta-modal-image").src = imageSrc;  
    document.getElementById("oferta-modal").style.display = "flex";
}

// Закрытие модального окна
function closeOfertaModal() {
    document.getElementById("oferta-modal").style.display = "none";
}

// Добавляем обработчик для закрытия по клику за пределами контента
document.getElementById("oferta-modal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeOfertaModal();
    }
});
