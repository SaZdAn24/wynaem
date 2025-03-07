function openOfertaModal(title, description, imageSrc) {
    document.getElementById("oferta-modal-title").innerText = title;
    document.getElementById("oferta-modal-description").innerText = description;
    document.getElementById("oferta-modal-image").src = imageSrc;  
    document.getElementById("oferta-modal").style.display = "flex";
}

function closeOfertaModal(event) {
    // Если клик был по фону (за пределами окна), то закрываем модальное окно
    if (event.target === document.getElementById("oferta-modal")) {
        document.getElementById("oferta-modal").style.display = "none";
    }
}
